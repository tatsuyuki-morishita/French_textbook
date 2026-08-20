/* ============================================================
   render.js — data blocks to DOM
   ------------------------------------------------------------
   Every French string that reaches the page goes through
   phraseCard/tile/conjRow, so audio, katakana, IPA, the
   English-style reading, and the sound warnings are attached
   in one place rather than authored per item.
   ============================================================ */

(function () {
  'use strict';

  var ICON = {
    play:  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.8-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14z"/></svg>',
    stack: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>',
    theatre: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h9v7a4.5 4.5 0 0 1-9 0V4z"/><path d="M7 7.5h.01M10 7.5h.01"/><path d="M11 4h9v7a4.5 4.5 0 0 1-9 0"/><path d="M14 7.5h.01M17 7.5h.01"/><path d="M6 17.5a4 4 0 0 0 5 0"/></svg>',
    sound: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a10 10 0 0 1 0 14"/></svg>',
    caret: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
    alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg>',
    prev:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',
    next:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>'
  };

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* Attribute-safe: single quotes are common in French (j'ai, l'ami). */
  function attr(s) { return esc(s).replace(/'/g, '&#39;'); }

  var REGISTER = {
    formal:  { dots: 3, ja: 'フォーマル', en: 'formal' },
    neutral: { dots: 2, ja: 'ニュートラル', en: 'neutral' },
    casual:  { dots: 1, ja: 'カジュアル', en: 'casual' }
  };

  /* ---------------------------------------------------------
     Pronunciation row
     --------------------------------------------------------- */
  function pronRow(a) {
    var bits = [];
    if (window.Store.get('showKana') && a.kana) {
      bits.push('<span><b>カナ</b><span class="pron__kana">' + esc(a.kana) + '</span></span>');
    }
    if (window.Store.get('showEnglishReading') && a.en) {
      bits.push('<span><b>EN</b><span class="pron__en">' + esc(a.en) + '</span></span>');
    }
    if (window.Store.get('showIPA') && a.ipa) {
      bits.push('<span><b>IPA</b><span class="pron__ipa">/' + esc(a.ipa) + '/</span></span>');
    }
    return bits.length ? '<div class="pron">' + bits.join('') + '</div>' : '';
  }

  /* Split the French into per-word tap targets. */
  function wordSpans(a) {
    if (!a.words.length) return esc(a.text);
    return a.words.map(function (w) {
      if (w.punct) return '<span class="punct">' + esc(w.text) + '</span>';
      return '<span class="w" data-say="' + attr(w.bare) + '">' + esc(w.text) + '</span>';
    }).join(' ');
  }

  /* Sounds in this phrase that Japanese speakers reliably trip on. */
  function warnings(a, uid, extraTip) {
    var syms = a.hard.slice(0, 3);
    if (!syms.length && !extraTip) return '';

    var body = '';
    if (extraTip) {
      body += '<div class="warn__item"><span class="warn__sym">!</span><span>' +
        esc(extraTip) + '</span></div>';
    }
    body += syms.map(function (sym) {
      var p = window.PHONEMES[sym];
      if (!p) return '';
      return '<div class="warn__item">' +
        '<span class="warn__sym">' + esc(sym) + '</span>' +
        '<span>' + esc(p.ja) + '<span class="near">' + esc(p.tip) + '</span></span></div>';
    }).join('');

    var tag = syms.map(function (x) { return '<i>' + esc(x) + '</i>'; }).join('');
    return disclosure(uid + 'p', ICON.sound, '発音の注意', tag, body, 'disc--gold');
  }

  function registerRow(item) {
    var r = REGISTER[item.register];
    if (!r) return '';
    var dots = '';
    for (var i = 0; i < 3; i++) dots += '<i class="' + (i < r.dots ? 'on' : '') + '"></i>';
    return '<div class="reg"><span class="reg__dots">' + dots + '</span>' +
      esc(r.ja) + ' / ' + esc(r.en) + '</div>';
  }

  /* One collapsed row. `tag` renders inline next to the label so the
     reader can see what is inside without opening it. */
  function disclosure(uid, icon, label, tag, body, cls) {
    return '<div class="disc ' + (cls || '') + '" id="' + uid + '">' +
      '<button class="disc__toggle" data-disc="' + uid + '">' + icon +
      '<span>' + label + '</span>' +
      (tag ? '<span class="disc__tag">' + tag + '</span>' : '') +
      '<span class="caret">' + ICON.caret + '</span></button>' +
      '<div class="disc__body">' + body + '</div></div>';
  }

  function whenBlock(item, uid) {
    if (!item.when && !item.ja_when) return '';
    var body = '';
    if (item.ja_when) body += '<p>' + esc(item.ja_when) + '</p>';
    if (item.when) body += '<p class="en">' + esc(item.when) + '</p>';
    return disclosure(uid, ICON.theatre, 'どんな場面で使う？', '', body, 'disc--warm');
  }

  /* ---------------------------------------------------------
     Phrase card
     --------------------------------------------------------- */
  var uidCounter = 0;

  function phraseCard(item) {
    var a = window.Phonetics.analyze(item.fr, item.ipa);
    var kana = item.kana || a.kana;
    var view = { kana: kana, en: a.en, ipa: a.ipa, words: a.words, text: item.fr, hard: a.hard };
    var uid = 'w' + (++uidCounter);

    return '<div class="card" data-say="' + attr(item.fr) + '">' +
      '<div class="card__top">' +
        '<div class="card__fr">' + wordSpans(view) + '</div>' +
        '<div class="card__audio">' +
          '<button class="pbtn" data-play="' + attr(item.fr) + '" aria-label="発音を聞く">' + ICON.play + '</button>' +
          '<button class="pbtn pbtn--slow" data-play="' + attr(item.fr) + '" data-slow="1" aria-label="ゆっくり聞く">0.5x</button>' +
        '</div>' +
      '</div>' +
      pronRow(view) +
      '<div class="card__en">' + esc(item.en) + '</div>' +
      (item.ja ? '<div class="card__ja">' + esc(item.ja) + '</div>' : '') +
      (item.literal ? '<div class="card__lit">直訳: ' + esc(item.literal) + '</div>' : '') +
      registerRow(item) +
      '<div class="card__more">' +
        whenBlock(item, uid) +
        warnings(view, uid, item.tip) +
      '</div>' +
      '</div>';
  }

  /* ---------------------------------------------------------
     Blocks
     --------------------------------------------------------- */
  function blockHead(b, sayAll) {
    if (!b.title && !b.intro) return '';
    var h = '<div class="block__head">';
    if (b.title) h += '<h2>' + esc(b.title) + '</h2>';
    if (sayAll) {
      h += '<button class="playall" data-playall="' + attr(sayAll.join('|')) + '">' +
        ICON.stack + '全部聞く</button>';
    }
    h += '</div>';
    if (b.intro) h += '<p class="block__intro">' + esc(b.intro) + '</p>';
    return h;
  }

  var BLOCKS = {

    phrases: function (b) {
      var all = b.items.map(function (i) { return i.fr; });
      return '<section class="block">' + blockHead(b, all) +
        '<div class="cards">' + b.items.map(phraseCard).join('') + '</div></section>';
    },

    tiles: function (b) {
      var all = b.items.map(function (i) { return i.fr; });
      var body = b.items.map(function (i) {
        var a = window.Phonetics.analyze(i.fr, i.ipa);
        return '<button class="tile" data-play="' + attr(i.say || i.fr) + '">' +
          '<div class="tile__fr">' + esc(i.label || i.fr) + '</div>' +
          '<div class="tile__kana">' + esc(i.kana || a.kana) + '</div>' +
          (i.en ? '<div class="tile__en">' + esc(i.en) + '</div>' : '') +
          '</button>';
      }).join('');
      return '<section class="block">' + blockHead(b, all) +
        '<div class="grid">' + body + '</div></section>';
    },

    conjugation: function (b) {
      var rows = b.forms.map(function (f) {
        var full = f.pronoun + ' ' + f.form;
        var a = window.Phonetics.analyze(full, f.ipa);
        return '<div class="conj__row">' +
          '<div class="conj__pro">' + esc(f.pronoun) + '</div>' +
          '<div class="conj__form">' + esc(f.form) +
            '<span class="conj__kana">' + esc(f.kana || a.kana) + '</span></div>' +
          '<button class="pbtn" data-play="' + attr(full) + '" aria-label="発音を聞く">' + ICON.play + '</button>' +
          '</div>';
      }).join('');
      var all = b.forms.map(function (f) { return f.pronoun + ' ' + f.form; });
      return '<section class="block">' + blockHead(b, all) +
        '<div class="conj">' + rows + '</div>' +
        (b.note ? '<div class="note"><h4>ポイント</h4><p>' + esc(b.note) + '</p></div>' : '') +
        '</section>';
    },

    dialogue: function (b) {
      var lines = b.lines.map(function (l) {
        var a = window.Phonetics.analyze(l.fr, l.ipa);
        return '<div class="dlg__line">' +
          '<div class="dlg__who">' + esc(l.who) + '</div>' +
          '<div class="dlg__body">' +
            '<div class="dlg__fr">' + wordSpans(a) + '</div>' +
            '<div class="dlg__kana">' + esc(a.kana) + '</div>' +
            '<div class="dlg__en">' + esc(l.en) + (l.ja ? ' ／ ' + esc(l.ja) : '') + '</div>' +
          '</div>' +
          '<button class="pbtn" data-play="' + attr(l.fr) + '" aria-label="発音を聞く">' + ICON.play + '</button>' +
          '</div>';
      }).join('');
      var all = b.lines.map(function (l) { return l.fr; });
      return '<section class="block">' + blockHead(b, all) +
        '<div class="dlg">' +
          (b.scene ? '<div class="dlg__scene">' + esc(b.scene) + '</div>' : '') +
          lines + '</div></section>';
    },

    note: function (b) {
      var cls = b.tone === 'warm' ? ' note--warm' : b.tone === 'gold' ? ' note--gold' : '';
      var body = b.body ? '<p>' + esc(b.body) + '</p>' : '';
      if (b.list) {
        body += '<ul>' + b.list.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
      }
      return '<section class="block"><div class="note' + cls + '">' +
        (b.title ? '<h4>' + esc(b.title) + '</h4>' : '') + body + '</div></section>';
    },

    quiz: function (b) {
      var qs = b.questions.map(function (q, qi) {
        var opts = q.options.map(function (o, oi) {
          return '<button class="opt" data-opt="' + oi + '">' +
            '<span class="opt__k">' + 'ABCD'[oi] + '</span><span>' + esc(o) + '</span></button>';
        }).join('');
        return '<div class="quiz" data-answer="' + q.answer + '" data-why="' + attr(q.why || '') + '">' +
          '<div class="quiz__q"><span class="num">' + (qi + 1) + '.</span>' + esc(q.q) + '</div>' +
          '<div class="quiz__opts">' + opts + '</div>' +
          '<div class="quiz__fb"></div></div>';
      }).join('');
      return '<section class="block">' + blockHead(b) + qs + '</section>';
    }
  };

  /* ---------------------------------------------------------
     Section
     --------------------------------------------------------- */
  function section(data) {
    var lvl = (data.level || '').toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 2);
    var html = '<header class="shead">' +
      '<div class="shead__meta">' +
        '<span class="chip chip--' + esc(lvl) + '">' + esc(data.level) + '</span>' +
        '<span class="chip">Section ' + data.id + '</span>' +
        (data.duration ? '<span class="chip">' + esc(data.duration) + '</span>' : '') +
      '</div>' +
      '<h1>' + esc(data.title.en) + '</h1>' +
      '<p class="shead__fr">' + esc(data.title.fr) + '</p>' +
      '</header>';

    if (data.goals && data.goals.length) {
      html += '<div class="goals"><h3>このセクションで学ぶこと</h3><ul>' +
        data.goals.map(function (g) { return '<li>' + esc(g) + '</li>'; }).join('') +
        '</ul></div>';
    }

    html += data.blocks.map(function (b) {
      var fn = BLOCKS[b.type];
      return fn ? fn(b) : '';
    }).join('');

    return html;
  }

  /* Flatten a section's French items for search and flashcards. */
  function collectItems(data) {
    var out = [];
    (data.blocks || []).forEach(function (b) {
      if (b.type === 'phrases' || b.type === 'tiles') {
        (b.items || []).forEach(function (i) {
          if (i.fr && i.en) out.push({ fr: i.fr, en: i.en, ja: i.ja, ipa: i.ipa, section: data.id });
        });
      } else if (b.type === 'dialogue') {
        (b.lines || []).forEach(function (l) {
          out.push({ fr: l.fr, en: l.en, ja: l.ja, ipa: l.ipa, section: data.id });
        });
      }
    });
    return out;
  }

  window.Render = {
    section: section,
    disclosure: disclosure,
    phraseCard: phraseCard,
    collectItems: collectItems,
    ICON: ICON,
    esc: esc,
    attr: attr
  };
})();
