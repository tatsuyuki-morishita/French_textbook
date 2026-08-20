/* ============================================================
   app.js — shell: routing, navigation, panels, event wiring
   ============================================================ */

(function () {
  'use strict';

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var ICON = window.Render.ICON;
  var esc  = window.Render.esc;

  var current = 1;
  var playingEl = null;

  function sectionData(id) { return window['S' + id] || null; }
  function total() { return window.CURRICULUM.sections.length; }

  /* ---------------------------------------------------------
     Theme
     --------------------------------------------------------- */
  function applyTheme() {
    var t = window.Store.get('theme');
    if (t === 'auto') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', t);
  }

  /* ---------------------------------------------------------
     Sidebar
     --------------------------------------------------------- */
  function buildNav() {
    var groups = {};
    var order = [];
    window.CURRICULUM.sections.forEach(function (s) {
      if (!groups[s.unit]) { groups[s.unit] = []; order.push(s.unit); }
      groups[s.unit].push(s);
    });

    $('#navList').innerHTML = order.map(function (unit) {
      var label = window.CURRICULUM.units[unit] || unit;
      return '<div class="nav__group"><h4>' + esc(label) + '</h4>' +
        groups[unit].map(function (s) {
          return '<button class="nav__item" data-go="' + s.id + '">' +
            '<span class="nav__num"><span>' + s.id + '</span></span>' +
            '<span class="nav__label">' + esc(s.title) + '</span></button>';
        }).join('') + '</div>';
    }).join('');
  }

  function syncNav() {
    $$('#navList .nav__item').forEach(function (el) {
      var id = +el.dataset.go;
      el.classList.toggle('is-active', id === current);
      el.classList.toggle('is-done', window.Store.isComplete(id));
    });
    var p = window.Store.progress(total());
    $('#progFill').style.width = p.percent + '%';
    $('#progText').textContent = p.done + '/' + p.total;
  }

  function openNav(on) {
    $('#nav').classList.toggle('is-open', on);
    $('#backdrop').classList.toggle('is-open', on);
  }

  /* ---------------------------------------------------------
     Section rendering
     --------------------------------------------------------- */
  function go(id) {
    id = Math.max(1, Math.min(total(), id));
    var data = sectionData(id);
    var main = $('#main');

    if (!data) {
      main.innerHTML = '<div class="empty">このセクションはまだ用意されていません。<br>' +
        'Section ' + id + ' is not converted yet.</div>' + navFoot(id);
    } else {
      main.innerHTML = window.Render.section(data) + navFoot(id);
    }

    current = id;
    window.Store.set('currentSection', id);
    var meta = window.CURRICULUM.sections.find(function (s) { return s.id === id; });
    $('#headerTitle').textContent = meta ? meta.title : 'Section ' + id;
    document.title = (meta ? meta.title : 'Section ' + id) + ' · Français A0–A2';

    syncNav();
    openNav(false);
    window.scrollTo(0, 0);
    if (history.replaceState) history.replaceState(null, '', '#' + id);
  }

  function navFoot(id) {
    var prev = window.CURRICULUM.sections.find(function (s) { return s.id === id - 1; });
    var next = window.CURRICULUM.sections.find(function (s) { return s.id === id + 1; });
    var done = window.Store.isComplete(id);
    return '<div class="section-foot">' +
      (prev ? '<button class="btn" data-go="' + prev.id + '">' + ICON.prev + '前へ</button>' : '') +
      '<button class="btn' + (done ? '' : ' btn--primary') + '" data-complete="' + id + '">' +
        ICON.check + (done ? '完了済み' : '完了にする') + '</button>' +
      (next ? '<button class="btn btn--grow btn--primary" data-go="' + next.id + '">' +
        esc(next.title) + ICON.next + '</button>' : '') +
      '</div>';
  }

  /* ---------------------------------------------------------
     Audio helpers
     --------------------------------------------------------- */
  function markPlaying(el) {
    if (playingEl) playingEl.classList.remove('is-playing');
    playingEl = el || null;
    if (playingEl) playingEl.classList.add('is-playing');
  }

  function say(text, el, slow) {
    var rate = window.Store.get('rate');
    markPlaying(el);
    window.Audio2.speak(text, {
      rate: slow ? Math.max(0.35, rate * 0.55) : rate,
      onend: function () { markPlaying(null); }
    });
  }

  /* ---------------------------------------------------------
     Voice availability
     --------------------------------------------------------- */
  function updateVoiceWarning() {
    var st = window.Audio2.status();
    var el = $('#voiceWarn');
    if (!el) return;
    if (!st.supported) {
      el.classList.add('show');
      $('#voiceWarnText').innerHTML =
        '<b>このブラウザは音声読み上げに対応していません。</b> ' +
        'Chrome、Safari、Edge の最新版でお試しください。カタカナとIPAは通常どおり使えます。';
    } else if (st.ready && !st.hasFrench) {
      el.classList.add('show');
      $('#voiceWarnText').innerHTML =
        '<b>フランス語の音声がこの端末に入っていません。</b> ' +
        'このまま再生すると英語の声でフランス語を読んでしまい、正しい発音になりません。' +
        'iPhone / iPad なら 設定 → アクセシビリティ → 読み上げコンテンツ → 声 → フランス語 を追加、' +
        'Windows なら 設定 → 時刻と言語 → 言語 → 言語の追加 → フランス語 で音声パックを入れてください。';
    } else {
      el.classList.remove('show');
    }
  }

  /* ---------------------------------------------------------
     Panels
     --------------------------------------------------------- */
  function openSheet(id) {
    $$('.sheet').forEach(function (s) { s.classList.remove('is-open'); });
    if (id) $(id).classList.add('is-open');
  }

  /* ----- search ----- */
  var searchIndex = null;

  function buildIndex() {
    if (searchIndex) return searchIndex;
    searchIndex = [];
    window.CURRICULUM.sections.forEach(function (s) {
      var d = sectionData(s.id);
      if (d) searchIndex = searchIndex.concat(window.Render.collectItems(d));
    });
    return searchIndex;
  }

  function runSearch(q) {
    var box = $('#searchResults');
    q = q.trim().toLowerCase();
    if (q.length < 1) { box.innerHTML = '<div class="empty">フランス語・英語・日本語のどれでも検索できます。</div>'; return; }

    var idx = buildIndex();
    var hits = idx.filter(function (it) {
      return (it.fr && it.fr.toLowerCase().indexOf(q) >= 0) ||
             (it.en && it.en.toLowerCase().indexOf(q) >= 0) ||
             (it.ja && it.ja.indexOf(q) >= 0);
    }).slice(0, 60);

    if (!hits.length) { box.innerHTML = '<div class="empty">該当なし</div>'; return; }

    box.innerHTML = hits.map(function (it) {
      var a = window.Phonetics.analyze(it.fr, it.ipa);
      return '<button class="result" data-go="' + it.section + '" data-close-sheet="1">' +
        '<span style="flex:1;min-width:0">' +
          '<span class="result__fr">' + esc(it.fr) + '</span>' +
          '<span class="result__meta"> · ' + esc(a.kana) + '</span>' +
          '<div class="result__meta">' + esc(it.en) + '</div>' +
        '</span>' +
        '<span class="result__sec">§' + it.section + '</span></button>';
    }).join('');
  }

  /* ----- flashcards ----- */
  var deck = [];
  var deckPos = 0;
  var revealed = false;

  function buildDeck() {
    var all = buildIndex().filter(function (i) { return i.fr && i.en; });
    all.forEach(function (i) { i.id = window.Store.cardId(i.section, i.fr); });
    var split = window.Store.dueCards(all);
    /* Due reviews first, then unseen material, capped so a session ends. */
    deck = split.due.concat(split.fresh.slice(0, Math.max(0, 20 - split.due.length))).slice(0, 30);
    /* Deterministic shuffle by id so a reload does not reorder mid-session. */
    deck.sort(function (a, b) { return a.id < b.id ? -1 : 1; });
    deckPos = 0;
    revealed = false;
  }

  function renderCard() {
    var body = $('#fcBody');
    var st = window.Store.cardStats();

    var stats = '<div class="statgrid">' +
      '<div class="stat"><b>' + st.due + '</b><span>今日の復習</span></div>' +
      '<div class="stat"><b>' + st.known + '</b><span>学習済み</span></div>' +
      '<div class="stat"><b>' + st.accuracy + '%</b><span>正答率</span></div>' +
      '<div class="stat"><b>' + st.streak + '</b><span>連続日数</span></div>' +
      '</div>';

    if (deckPos >= deck.length) {
      body.innerHTML = stats +
        '<div class="empty">' + (deck.length ? 'このセッションは終わりです。お疲れさま！' :
          'カードがありません。セクションを開くと単語が追加されます。') + '</div>' +
        '<button class="btn btn--primary btn--grow" data-fc="restart" style="width:100%">もう一度</button>';
      return;
    }

    var c = deck[deckPos];
    var a = window.Phonetics.analyze(c.fr, c.ipa);

    body.innerHTML = stats +
      '<div class="fc__meta">' + (deckPos + 1) + ' / ' + deck.length + ' · §' + c.section + '</div>' +
      '<div class="fc">' +
        '<div>' +
          '<div class="fc__fr">' + esc(c.fr) + '</div>' +
          (revealed ? '<div class="fc__pron">' + esc(a.kana) + ' · /' + esc(a.ipa) + '/</div>' : '') +
          (revealed ? '<div class="fc__answer">' +
            '<div class="fc__en">' + esc(c.en) + '</div>' +
            (c.ja ? '<div class="fc__ja">' + esc(c.ja) + '</div>' : '') +
          '</div>' : '') +
        '</div>' +
      '</div>' +
      '<div class="fc__actions">' +
        '<button class="btn" data-fc="say">' + ICON.play + '聞く</button>' +
        (revealed
          ? '<button class="btn btn--grow" data-fc="again">もう一度</button>' +
            '<button class="btn btn--grow btn--primary" data-fc="good">覚えた</button>'
          : '<button class="btn btn--grow btn--primary" data-fc="reveal">答えを見る</button>') +
      '</div>';
  }

  function fcAction(what) {
    var c = deck[deckPos];
    if (what === 'restart') { buildDeck(); renderCard(); return; }
    if (!c) return;
    if (what === 'say') { say(c.fr, null); return; }
    if (what === 'reveal') { revealed = true; renderCard(); return; }
    if (what === 'good' || what === 'again') {
      window.Store.reviewCard(c.id, what === 'good');
      deckPos++;
      revealed = false;
      renderCard();
      syncNav();
    }
  }

  /* ----- settings ----- */
  function renderSettings() {
    var s = window.Store;
    var theme = s.get('theme');
    var rate = s.get('rate');

    function toggle(key, title, sub) {
      return '<div class="setting"><div class="setting__label"><b>' + title + '</b><span>' + sub + '</span></div>' +
        '<button class="switch' + (s.get(key) ? ' on' : '') + '" data-toggle="' + key + '" role="switch" aria-checked="' + !!s.get(key) + '"></button></div>';
    }

    $('#settingsBody').innerHTML =
      '<div class="setting"><div class="setting__label"><b>テーマ</b><span>画面の配色</span></div>' +
        '<div class="segmented">' +
          ['auto', 'light', 'dark'].map(function (t) {
            return '<button data-theme-set="' + t + '"' + (theme === t ? ' class="on"' : '') + '>' +
              ({ auto: '自動', light: 'ライト', dark: 'ダーク' })[t] + '</button>';
          }).join('') +
        '</div></div>' +

      '<div class="setting"><div class="setting__label"><b>読み上げ速度</b><span>' + rate.toFixed(2) + 'x</span></div>' +
        '<div class="segmented">' +
          [0.6, 0.75, 0.9, 1].map(function (r) {
            return '<button data-rate="' + r + '"' + (Math.abs(rate - r) < 0.01 ? ' class="on"' : '') + '>' + r + 'x</button>';
          }).join('') +
        '</div></div>' +

      toggle('showKana', 'カタカナ表記', 'フランス語音を日本語の音で近似') +
      toggle('showEnglishReading', '英語風の読み', '英語話者向けのつづり表記') +
      toggle('showIPA', 'IPA（発音記号）', '国際音声記号') +

      '<div class="setting"><div class="setting__label"><b>音声エンジン</b><span>' +
        (window.Audio2.status().voiceName || '未検出') + '</span></div>' +
        '<button class="btn btn--sm" data-refresh-voice="1">再検出</button></div>' +

      '<div class="setting"><div class="setting__label"><b>学習データを消去</b>' +
        '<span>進捗・カード・設定をすべて初期化</span></div>' +
        '<button class="btn btn--sm" data-reset="1">リセット</button></div>';
  }

  /* ---------------------------------------------------------
     Global event delegation
     --------------------------------------------------------- */
  document.addEventListener('click', function (e) {
    var t = e.target;

    var play = t.closest('[data-play]');
    if (play) {
      e.stopPropagation();
      say(play.dataset.play, play.closest('.card, .tile, .conj__row, .dlg__line') || play, play.dataset.slow);
      return;
    }

    var word = t.closest('.w');
    if (word) { say(word.dataset.say, word); return; }

    var all = t.closest('[data-playall]');
    if (all) {
      var list = all.dataset.playall.split('|');
      window.Audio2.speakSequence(list, { rate: window.Store.get('rate'), gap: 500 });
      return;
    }

    var disc = t.closest('[data-disc]');
    if (disc) { $('#' + disc.dataset.disc).classList.toggle('is-open'); return; }

    var opt = t.closest('.opt');
    if (opt && !opt.disabled) { answerQuiz(opt); return; }

    var goEl = t.closest('[data-go]');
    if (goEl) {
      if (goEl.dataset.closeSheet) openSheet(null);
      go(+goEl.dataset.go);
      return;
    }

    var done = t.closest('[data-complete]');
    if (done) {
      var id = +done.dataset.complete;
      if (window.Store.isComplete(id)) window.Store.unmarkComplete(id);
      else window.Store.markComplete(id);
      go(id);
      return;
    }

    var fc = t.closest('[data-fc]');
    if (fc) { fcAction(fc.dataset.fc); return; }

    var tog = t.closest('[data-toggle]');
    if (tog) {
      var k = tog.dataset.toggle;
      window.Store.set(k, !window.Store.get(k));
      renderSettings();
      go(current);
      return;
    }

    var th = t.closest('[data-theme-set]');
    if (th) { window.Store.set('theme', th.dataset.themeSet); applyTheme(); renderSettings(); return; }

    var rt = t.closest('[data-rate]');
    if (rt) { window.Store.set('rate', +rt.dataset.rate); renderSettings(); return; }

    if (t.closest('[data-refresh-voice]')) {
      window.Audio2.refresh();
      setTimeout(function () { renderSettings(); updateVoiceWarning(); }, 200);
      return;
    }

    if (t.closest('[data-reset]')) {
      if (confirm('進捗・カード・設定をすべて消去します。よろしいですか？')) {
        window.Store.reset();
        applyTheme();
        searchIndex = null;
        openSheet(null);
        go(1);
      }
      return;
    }

    if (t.closest('#menuBtn'))   { openNav(true); return; }
    if (t.closest('#backdrop'))  { openNav(false); return; }
    if (t.closest('[data-open-search]'))   { openSheet('#searchSheet'); $('#searchInput').focus(); runSearch(''); return; }
    if (t.closest('[data-open-cards]'))    { buildDeck(); renderCard(); openSheet('#fcSheet'); return; }
    if (t.closest('[data-open-settings]')) { renderSettings(); openSheet('#settingsSheet'); return; }
    if (t.closest('[data-close-sheet]') || (t.classList && t.classList.contains('sheet'))) {
      openSheet(null);
      window.Audio2.stop();
      return;
    }
  });

  function answerQuiz(opt) {
    var quiz = opt.closest('.quiz');
    var correct = +quiz.dataset.answer;
    var picked = +opt.dataset.opt;
    var opts = $$('.opt', quiz);

    opts.forEach(function (o, i) {
      o.disabled = true;
      if (i === correct) o.classList.add('is-correct');
      else if (i === picked) o.classList.add('is-wrong');
    });

    var fb = $('.quiz__fb', quiz);
    fb.className = 'quiz__fb show ' + (picked === correct ? 'ok' : 'bad');
    fb.textContent = (picked === correct ? '正解！ ' : '惜しい。正解は ' + 'ABCD'[correct] + '。 ') +
      (quiz.dataset.why || '');
  }

  document.addEventListener('input', function (e) {
    if (e.target.id === 'searchInput') runSearch(e.target.value);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { openSheet(null); openNav(false); window.Audio2.stop(); }
    if (e.target.tagName === 'INPUT') return;
    if (e.key === 'ArrowRight' && (e.ctrlKey || e.metaKey)) go(current + 1);
    if (e.key === 'ArrowLeft'  && (e.ctrlKey || e.metaKey)) go(current - 1);
    if (e.key === '/' ) { e.preventDefault(); openSheet('#searchSheet'); $('#searchInput').focus(); runSearch(''); }
  });

  /* ---------------------------------------------------------
     Boot
     --------------------------------------------------------- */
  applyTheme();
  buildNav();
  window.Audio2.onStatusChange(updateVoiceWarning);
  setTimeout(updateVoiceWarning, 1500);

  var fromHash = parseInt((location.hash || '').replace('#', ''), 10);
  go(fromHash || window.Store.get('currentSection') || 1);

  window.addEventListener('hashchange', function () {
    var id = parseInt((location.hash || '').replace('#', ''), 10);
    if (id && id !== current) go(id);
  });
})();
