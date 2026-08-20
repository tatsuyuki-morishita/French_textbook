/* ============================================================
   i18n.js — merges the English content layer into the sections
   ------------------------------------------------------------
   Section files stay Japanese-only. Their English lives beside
   them in data/en/sNN.js as window.EN_<id>, block-aligned by
   index, and is folded in here as the `_en` fields the renderer
   already looks for.

   Keeping the two apart means a translation pass never has to
   touch — or risk corrupting — the Japanese source, and a section
   with no translation file simply falls back.
   ============================================================ */

(function () {
  'use strict';

  /* Fields carried per block type. Anything absent is skipped. */
  var BLOCK_FIELDS = ['title', 'intro', 'body', 'note', 'scene'];

  function merge(section, en) {
    if (!section || !en) return;

    if (en.title) section.title.ja = section.title.ja || section.title.en;
    if (en.sectionTitle) { section.title.ja = section.title.en; section.title.en = en.sectionTitle; }
    if (en.goals) section.goals_en = en.goals;

    var blocks = section.blocks || [];
    var tr = en.blocks || [];

    for (var i = 0; i < blocks.length; i++) {
      var b = blocks[i], t = tr[i];
      if (!t) continue;

      BLOCK_FIELDS.forEach(function (f) {
        if (t[f] !== undefined) b[f + '_en'] = t[f];
      });
      if (t.list) b.list_en = t.list;

      /* tiles + phrase items: English gloss keyed by index */
      if (t.items && b.items) {
        for (var j = 0; j < b.items.length; j++) {
          var src = t.items[j];
          if (src === undefined || src === null) continue;
          if (typeof src === 'string') b.items[j].en = src;
          else {
            if (src.en) b.items[j].en = src.en;
            if (src.when) b.items[j].when = src.when;
            if (src.literal) b.items[j].literal_en = src.literal;
            if (src.tip) b.items[j].tip_en = src.tip;
          }
        }
      }

      /* conjugation rows carry no prose beyond the note, already handled */

      if (t.questions && b.questions) {
        for (var q = 0; q < b.questions.length; q++) {
          var qt = t.questions[q];
          if (!qt) continue;
          if (qt.q) b.questions[q].q_en = qt.q;
          if (qt.options) b.questions[q].options_en = qt.options;
          if (qt.why) b.questions[q].why_en = qt.why;
        }
      }
    }
  }

  function apply() {
    if (!window.CURRICULUM) return;
    window.CURRICULUM.sections.forEach(function (s) {
      merge(window['S' + s.id], window['EN_' + s.id]);
    });
  }

  /** How much of the English layer is actually present. */
  function coverage() {
    var total = 0, done = 0;
    (window.CURRICULUM ? window.CURRICULUM.sections : []).forEach(function (s) {
      var sec = window['S' + s.id];
      if (!sec) return;
      total++;
      if (window['EN_' + s.id]) done++;
    });
    return { sections: total, translated: done };
  }

  window.I18N = { apply: apply, merge: merge, coverage: coverage };
  apply();
})();
