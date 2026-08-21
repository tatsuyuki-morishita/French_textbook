/* ============================================================
   offline.js — service worker registration and status
   ------------------------------------------------------------
   Registers sw.js so the whole course is stored on the device.
   After the first visit it runs with no connection at all, which
   is the only reliable way to get this working offline on iOS:
   opening the folder from Files or iCloud Drive does not let
   Safari reach the sibling css/, js/, and data/ files.

   Service workers require a secure context, so this is inert on
   file:// — there the page still works, it simply has nothing to
   install. Status is surfaced in Settings rather than as a toast,
   so it can be checked deliberately instead of interrupting.
   ============================================================ */

(function () {
  'use strict';

  var state = 'unknown';
  var detail = '';
  var listeners = [];

  function set(next, text) {
    state = next;
    detail = text || '';
    listeners.forEach(function (fn) { fn(status()); });
  }

  function status() {
    return { state: state, detail: detail };
  }

  function onChange(fn) {
    listeners.push(fn);
    fn(status());
  }

  var secure = location.protocol === 'https:' ||
               location.hostname === 'localhost' ||
               location.hostname === '127.0.0.1';

  if (!('serviceWorker' in navigator)) {
    set('unsupported');
  } else if (!secure) {
    /* file:// or plain http on a LAN address */
    set('insecure');
  } else {
    set('installing');

    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js')
        .then(function (reg) {
          if (navigator.serviceWorker.controller) {
            set('ready');
          } else {
            /* First visit: wait for the install to finish before
               claiming the course is actually available offline. */
            var sw = reg.installing || reg.waiting;
            if (!sw) { set('ready'); return; }
            sw.addEventListener('statechange', function () {
              if (sw.state === 'activated' || sw.state === 'redundant') set('ready');
            });
          }
          reg.addEventListener('updatefound', function () { set('updating'); });
        })
        .catch(function (err) {
          set('failed', String(err && err.message ? err.message : err));
        });

      navigator.serviceWorker.addEventListener('controllerchange', function () {
        set('ready');
      });
    });
  }

  /** Bytes currently held for this origin, when the browser will say. */
  function usage() {
    if (!navigator.storage || !navigator.storage.estimate) return Promise.resolve(null);
    return navigator.storage.estimate()
      .then(function (e) { return e && e.usage ? e.usage : null; })
      .catch(function () { return null; });
  }

  window.Offline = {
    status: status,
    onChange: onChange,
    usage: usage,
    isStandalone: function () {
      return window.matchMedia('(display-mode: standalone)').matches ||
             window.navigator.standalone === true;
    }
  };
})();
