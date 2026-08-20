/* ============================================================
   store.js — persisted state
   ------------------------------------------------------------
   Progress, settings, and flashcard scheduling. Everything lives
   in one localStorage key so a single read/write keeps it
   consistent. All dates are stored as YYYY-MM-DD day numbers so
   scheduling is unaffected by timezone or clock time.
   ============================================================ */

(function () {
  'use strict';

  var KEY = 'french-v2';

  var DEFAULTS = {
    version: 1,
    currentSection: 1,
    completed: [],          // section ids
    lang: 'ja',             // ja | en  — display language, not the French
    theme: 'auto',          // auto | light | dark
    rate: 0.9,              // TTS speed
    showKana: true,
    showIPA: true,
    showEnglishReading: true,
    autoplay: false,
    cards: {},              // id -> {box, due, seen, lapses}
    stats: { reviewed: 0, correct: 0, lastDay: null, streak: 0 }
  };

  var state = null;

  function load() {
    if (state) return state;
    try {
      var raw = localStorage.getItem(KEY);
      state = raw ? Object.assign({}, DEFAULTS, JSON.parse(raw)) : Object.assign({}, DEFAULTS);
      /* Object.assign is shallow; restore the nested defaults. */
      state.stats = Object.assign({}, DEFAULTS.stats, state.stats || {});
      state.cards = state.cards || {};
      state.completed = state.completed || [];
    } catch (e) {
      state = JSON.parse(JSON.stringify(DEFAULTS));
    }
    return state;
  }

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(load()));
    } catch (e) {
      /* Private mode or a full quota: the app still works for this
         session, it just will not remember anything. */
    }
  }

  function get(key) { return load()[key]; }

  function set(key, value) {
    load()[key] = value;
    save();
    return value;
  }

  /* ---------------- section progress ---------------- */

  function isComplete(id) { return load().completed.indexOf(id) >= 0; }

  function markComplete(id) {
    var s = load();
    if (s.completed.indexOf(id) < 0) { s.completed.push(id); save(); }
  }

  function unmarkComplete(id) {
    var s = load();
    var i = s.completed.indexOf(id);
    if (i >= 0) { s.completed.splice(i, 1); save(); }
  }

  function progress(total) {
    var done = load().completed.length;
    return { done: done, total: total, percent: total ? Math.round(done / total * 100) : 0 };
  }

  /* ---------------- flashcards (Leitner) ---------------- */

  /* Days until a card in each box comes back. Box 0 is "learning". */
  var INTERVALS = [0, 1, 3, 7, 16, 35];

  function today() {
    var d = new Date();
    return Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000) + d.getFullYear() * 366;
  }

  function cardId(sectionId, french) {
    return sectionId + ':' + french.toLowerCase().replace(/\s+/g, ' ').trim();
  }

  function getCard(id) {
    var c = load().cards[id];
    return c || { box: 0, due: 0, seen: 0, lapses: 0 };
  }

  function reviewCard(id, correct) {
    var s = load();
    var c = getCard(id);
    if (correct) {
      c.box = Math.min(c.box + 1, INTERVALS.length - 1);
    } else {
      c.box = 0;
      c.lapses++;
    }
    c.seen++;
    c.due = today() + INTERVALS[c.box];
    s.cards[id] = c;

    s.stats.reviewed++;
    if (correct) s.stats.correct++;
    touchStreak(s);
    save();
    return c;
  }

  function touchStreak(s) {
    var t = today();
    if (s.stats.lastDay === t) return;
    s.stats.streak = (s.stats.lastDay === t - 1) ? s.stats.streak + 1 : 1;
    s.stats.lastDay = t;
  }

  /** Split a candidate list into cards due now vs. not yet due. */
  function dueCards(candidates) {
    var t = today();
    var s = load();
    var due = [];
    var fresh = [];
    candidates.forEach(function (c) {
      var rec = s.cards[c.id];
      if (!rec) fresh.push(c);
      else if (rec.due <= t) due.push(c);
    });
    return { due: due, fresh: fresh, total: due.length + fresh.length };
  }

  function cardStats() {
    var s = load();
    var t = today();
    var boxes = [0, 0, 0, 0, 0, 0];
    var due = 0;
    Object.keys(s.cards).forEach(function (k) {
      var c = s.cards[k];
      boxes[c.box] = (boxes[c.box] || 0) + 1;
      if (c.due <= t) due++;
    });
    return {
      boxes: boxes,
      due: due,
      known: Object.keys(s.cards).length,
      reviewed: s.stats.reviewed,
      accuracy: s.stats.reviewed ? Math.round(s.stats.correct / s.stats.reviewed * 100) : 0,
      streak: s.stats.streak
    };
  }

  function reset() {
    state = JSON.parse(JSON.stringify(DEFAULTS));
    save();
  }

  window.Store = {
    get: get,
    set: set,
    isComplete: isComplete,
    markComplete: markComplete,
    unmarkComplete: unmarkComplete,
    progress: progress,
    cardId: cardId,
    getCard: getCard,
    reviewCard: reviewCard,
    dueCards: dueCards,
    cardStats: cardStats,
    today: today,
    reset: reset
  };
})();
