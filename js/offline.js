/* ============================================================
   offline.js — service worker registration and status
   ------------------------------------------------------------
   Registers sw.js so the whole course is stored on the device.
   After the first visit it runs with no connection at all, which
   is the only reliable way to get this working offline on iOS:
   opening the folder from Files or iCloud Drive does not let
   Safari reach the sibling css/, js/, and data/ files.

   Readiness is taken from a marker the service worker writes
   after the last asset is stored — not from activation, which
   says only that the worker started, not that anything landed.

   iOS keeps a Home Screen web app in its own storage container,
   separate from Safari's. Caching done in Safari therefore does
   not carry over, and the installed app has to be opened once
   while online to fill its own cache. The banner exists to make
   that moment visible instead of leaving it to be discovered in
   airplane mode.
   ============================================================ */

(function () {
  'use strict';

  var MARKER = 'offline-complete';

  var state = 'unknown';   /* unknown | installing | ready | insecure | unsupported | failed */
  var cached = 0;
  var total = 0;
  var listeners = [];
  var pollTimer = null;

  function emit() {
    var s = status();
    listeners.forEach(function (fn) { fn(s); });
  }

  function set(next) {
    if (next === state) return;
    state = next;
    emit();
  }

  function status() {
    return { state: state, cached: cached, total: total };
  }

  function onChange(fn) {
    listeners.push(fn);
    fn(status());
  }

  /* Ask the cache directly rather than trusting the worker's lifecycle. */
  function inspect() {
    if (!window.caches) return Promise.resolve(false);
    return caches.keys().then(function (names) {
      var name = names.filter(function (n) { return n.indexOf('francais-') === 0; })[0];
      if (!name) return false;
      return caches.open(name).then(function (c) {
        return Promise.all([c.keys(), c.match(MARKER)]).then(function (r) {
          cached = r[0].length;
          if (!r[1]) { emit(); return false; }
          return r[1].json().then(function (meta) {
            total = meta.total || cached;
            return true;
          }).catch(function () { total = cached; return true; });
        });
      });
    }).catch(function () { return false; });
  }

  function poll() {
    if (pollTimer) return;
    var tries = 0;
    pollTimer = setInterval(function () {
      tries++;
      inspect().then(function (done) {
        if (done) {
          clearInterval(pollTimer); pollTimer = null;
          set('ready');
        } else if (tries > 120) {          /* ~60s */
          clearInterval(pollTimer); pollTimer = null;
          if (state === 'installing') set('failed');
        }
      });
    }, 500);
  }

  var secure = location.protocol === 'https:' ||
               location.hostname === 'localhost' ||
               location.hostname === '127.0.0.1';

  if (!('serviceWorker' in navigator)) {
    set('unsupported');
  } else if (!secure) {
    set('insecure');                       /* file:// — nothing to install */
  } else {
    navigator.serviceWorker.addEventListener('message', function (e) {
      if (e.data && e.data.type === 'cached') {
        total = e.data.total || total;
        inspect().then(function (done) { if (done) set('ready'); });
      }
    });

    /* Look before announcing. Declaring 'installing' up front would make
       every repeat visit pass through it, and the UI would report a
       download that already happened. */
    inspect().then(function (done) {
      set(done ? 'ready' : 'installing');

      window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js')
          .then(function () { if (!done) poll(); })
          .catch(function () { if (!done) set('failed'); });
      });
    });
  }

  function isStandalone() {
    return window.matchMedia('(display-mode: standalone)').matches ||
           window.navigator.standalone === true;
  }

  /* Wipes the caches and re-registers, for when an install went wrong. */
  function reinstall() {
    if (!window.caches) return Promise.resolve();
    set('installing');
    cached = 0;
    return caches.keys()
      .then(function (names) {
        return Promise.all(names.map(function (n) { return caches.delete(n); }));
      })
      .then(function () { return navigator.serviceWorker.getRegistrations(); })
      .then(function (rs) { return Promise.all(rs.map(function (r) { return r.unregister(); })); })
      .then(function () { return navigator.serviceWorker.register('sw.js'); })
      .then(function () { poll(); })
      .catch(function () { set('failed'); });
  }

  window.Offline = {
    status: status,
    onChange: onChange,
    inspect: inspect,
    reinstall: reinstall,
    isStandalone: isStandalone
  };
})();
