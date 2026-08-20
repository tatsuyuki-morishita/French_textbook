/* ============================================================
   audio.js — speech playback
   ------------------------------------------------------------
   Wraps the Web Speech API behind one interface so the rest of
   the app never touches SpeechSynthesis directly. If pre-recorded
   audio is ever added, only this file changes.

   The important failure mode it guards against: when a device has
   no French voice installed, the browser happily reads French text
   with an English voice and produces nonsense. That is worse than
   silence, so it is detected and reported instead.
   ============================================================ */

(function () {
  'use strict';

  var supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  var voices = [];
  var frenchVoice = null;
  var ready = false;
  var listeners = [];
  var currentToken = 0;

  /* Voice names that signal a higher-quality engine. Ordered best first. */
  var PREFERRED = [
    'thomas', 'amelie', 'amélie', 'audrey', 'aurelie', 'aurélie', 'marie',
    'daniel', 'siri', 'google', 'natural', 'enhanced', 'premium'
  ];

  function score(voice) {
    var n = (voice.name || '').toLowerCase();
    var s = 0;
    if (voice.lang === 'fr-FR') s += 100;
    else if (/^fr/i.test(voice.lang)) s += 60;
    if (voice.localService) s += 10;
    for (var i = 0; i < PREFERRED.length; i++) {
      if (n.indexOf(PREFERRED[i]) >= 0) { s += (PREFERRED.length - i); break; }
    }
    return s;
  }

  function refresh() {
    if (!supported) return;
    voices = window.speechSynthesis.getVoices() || [];
    var fr = voices.filter(function (v) { return /^fr/i.test(v.lang); });
    fr.sort(function (a, b) { return score(b) - score(a); });
    frenchVoice = fr[0] || null;
    if (voices.length) {
      ready = true;
      listeners.forEach(function (fn) { fn(status()); });
    }
  }

  function status() {
    return {
      supported: supported,
      ready: ready,
      hasFrench: !!frenchVoice,
      voiceName: frenchVoice ? frenchVoice.name : null,
      voiceCount: voices.length
    };
  }

  /* Chrome silently stops long utterances unless nudged. */
  var keepAlive = null;
  function startKeepAlive() {
    stopKeepAlive();
    keepAlive = setInterval(function () {
      if (!window.speechSynthesis.speaking) { stopKeepAlive(); return; }
      window.speechSynthesis.pause();
      window.speechSynthesis.resume();
    }, 5000);
  }
  function stopKeepAlive() {
    if (keepAlive) { clearInterval(keepAlive); keepAlive = null; }
  }

  /**
   * Speak French text.
   * @param {string} text
   * @param {{rate?:number, onstart?:Function, onend?:Function}} opts
   * @returns {number} a token identifying this utterance
   */
  function speak(text, opts) {
    opts = opts || {};
    if (!supported || !text) return -1;

    if (!ready) refresh();
    window.speechSynthesis.cancel();
    stopKeepAlive();

    var token = ++currentToken;
    var u = new SpeechSynthesisUtterance(String(text));
    u.lang = 'fr-FR';
    u.rate = opts.rate || 0.9;
    u.pitch = 1;
    u.volume = 1;
    if (frenchVoice) u.voice = frenchVoice;

    u.onstart = function () {
      startKeepAlive();
      if (opts.onstart && token === currentToken) opts.onstart();
    };
    u.onend = function () {
      stopKeepAlive();
      if (opts.onend && token === currentToken) opts.onend();
    };
    u.onerror = function () {
      stopKeepAlive();
      refresh();
      if (opts.onend && token === currentToken) opts.onend();
    };

    /* A short delay lets cancel() settle; without it Chrome drops
       the utterance that immediately follows a cancel. */
    setTimeout(function () {
      if (token !== currentToken) return;
      if (window.speechSynthesis.paused) window.speechSynthesis.resume();
      window.speechSynthesis.speak(u);
    }, 40);

    return token;
  }

  function stop() {
    currentToken++;
    stopKeepAlive();
    if (supported) window.speechSynthesis.cancel();
  }

  /** Speak a list of strings in order, pausing between them. */
  function speakSequence(items, opts) {
    opts = opts || {};
    var i = 0;
    function next() {
      if (i >= items.length) { if (opts.onend) opts.onend(); return; }
      var item = items[i++];
      if (opts.onitem) opts.onitem(item, i - 1);
      speak(item, {
        rate: opts.rate,
        onend: function () { setTimeout(next, opts.gap || 400); }
      });
    }
    next();
  }

  function onStatusChange(fn) {
    listeners.push(fn);
    if (ready) fn(status());
  }

  if (supported) {
    refresh();
    window.speechSynthesis.onvoiceschanged = refresh;
    /* Safari and Chrome populate voices only after a user gesture. */
    document.addEventListener('click', function once() {
      refresh();
      document.removeEventListener('click', once);
    }, { once: true });
    /* Some engines report an empty list for a beat after load. */
    setTimeout(refresh, 300);
    setTimeout(refresh, 1200);
  }

  window.Audio2 = {
    speak: speak,
    stop: stop,
    speakSequence: speakSequence,
    status: status,
    refresh: refresh,
    onStatusChange: onStatusChange
  };
})();
