/* ============================================================
   app.js — shell: routing, navigation, panels, event wiring
   ============================================================ */

(function () {
  'use strict';

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var ICON = window.Render.ICON;
  var esc  = window.Render.esc;
  var lang = window.Render.lang;

  /* Shell strings. Content strings live beside the content, in render.js. */
  var S = {
    prev:        { ja: '前へ',             en: 'Previous' },
    markDone:    { ja: '完了にする',        en: 'Mark complete' },
    done:        { ja: '完了済み',          en: 'Completed' },
    notReady:    { ja: 'このセクションはまだ用意されていません。', en: 'This section is not available yet.' },
    searchHint:  { ja: 'フランス語・英語・日本語のどれでも検索できます。',
                   en: 'Search in French, English, or Japanese.' },
    noHits:      { ja: '該当なし',          en: 'No matches' },
    due:         { ja: '今日の復習',        en: 'Due today' },
    learned:     { ja: '学習済み',          en: 'Learned' },
    accuracy:    { ja: '正答率',            en: 'Accuracy' },
    streak:      { ja: '連続日数',          en: 'Day streak' },
    sessionOver: { ja: 'このセッションは終わりです。お疲れさま！', en: "That's the session done. Nice work!" },
    noCards:     { ja: 'カードがありません。セクションを開くと単語が追加されます。',
                   en: 'No cards yet. Open a section to add material.' },
    again:       { ja: 'もう一度',          en: 'Again' },
    restart:     { ja: 'もう一度',          en: 'Start again' },
    gotIt:       { ja: '覚えた',            en: 'Got it' },
    reveal:      { ja: '答えを見る',        en: 'Show answer' },
    listen:      { ja: '聞く',              en: 'Listen' },
    grammarRef:  { ja: '文法リファレンス',  en: 'Grammar reference' },
    grammarBtn:  { ja: '文法',              en: 'Grammar' },
    language:    { ja: '表示言語',          en: 'Display language' },
    languageSub: { ja: '解説と訳の言語。フランス語はそのまま',
                   en: 'Language of explanations and glosses' },
    theme:       { ja: 'テーマ',            en: 'Theme' },
    themeSub:    { ja: '画面の配色',        en: 'Colour scheme' },
    auto:        { ja: '自動',              en: 'Auto' },
    light:       { ja: 'ライト',            en: 'Light' },
    dark:        { ja: 'ダーク',            en: 'Dark' },
    speed:       { ja: '読み上げ速度',      en: 'Speech rate' },
    kanaOn:      { ja: 'カタカナ表記',      en: 'Katakana' },
    kanaSub:     { ja: 'フランス語音を日本語の音で近似', en: 'French sounds approximated in kana' },
    enReadOn:    { ja: '英語風の読み',      en: 'English-style reading' },
    enReadSub:   { ja: '英語話者向けのつづり表記', en: 'Spelled as an English speaker would read it' },
    ipaOn:       { ja: 'IPA（発音記号）',   en: 'IPA' },
    ipaSub:      { ja: '国際音声記号',      en: 'International Phonetic Alphabet' },
    engine:      { ja: '音声エンジン',      en: 'Speech voice' },
    notFound:    { ja: '未検出',            en: 'not detected' },
    redetect:    { ja: '再検出',            en: 'Re-detect' },
    wipe:        { ja: '学習データを消去',  en: 'Erase learning data' },
    wipeSub:     { ja: '進捗・カード・設定をすべて初期化', en: 'Reset progress, cards, and settings' },
    reset:       { ja: 'リセット',          en: 'Reset' },
    confirmWipe: { ja: '進捗・カード・設定をすべて消去します。よろしいですか？',
                   en: 'This erases all progress, cards, and settings. Continue?' },
    noVoiceApi:  { ja: '<b>このブラウザは音声読み上げに対応していません。</b> Chrome、Safari、Edge の最新版でお試しください。カタカナとIPAは通常どおり使えます。',
                   en: '<b>This browser does not support speech synthesis.</b> Try a current Chrome, Safari, or Edge. Katakana and IPA still work.' },
    noFrench:    { ja: '<b>フランス語の音声がこの端末に入っていません。</b> このまま再生すると英語の声でフランス語を読んでしまい、正しい発音になりません。iPhone / iPad なら 設定 → アクセシビリティ → 読み上げコンテンツ → 声 → フランス語 を追加、Windows なら 設定 → 時刻と言語 → 言語 → 言語の追加 → フランス語 で音声パックを入れてください。',
                   en: '<b>No French voice is installed on this device.</b> Playing anyway reads French with an English voice, which produces the wrong sounds. On iPhone or iPad: Settings &rarr; Accessibility &rarr; Spoken Content &rarr; Voices &rarr; French. On Windows: Settings &rarr; Time &amp; language &rarr; Language &rarr; Add a language &rarr; French.' }
  };

  function t(key) {
    var e = S[key];
    return e ? (e[lang()] || e.ja) : '';
  }

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
      main.innerHTML = '<div class="empty">' + t('notReady') + '</div>' + navFoot(id);
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
      (prev ? '<button class="btn" data-go="' + prev.id + '">' + ICON.prev + t('prev') + '</button>' : '') +
      '<button class="btn' + (done ? '' : ' btn--primary') + '" data-complete="' + id + '">' +
        ICON.check + (done ? t('done') : t('markDone')) + '</button>' +
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
      $('#voiceWarnText').innerHTML = t('noVoiceApi');
    } else if (st.ready && !st.hasFrench) {
      el.classList.add('show');
      $('#voiceWarnText').innerHTML = t('noFrench');
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
    if (q.length < 1) { box.innerHTML = '<div class="empty">' + t('searchHint') + '</div>'; return; }

    var idx = buildIndex();
    var hits = idx.filter(function (it) {
      return (it.fr && it.fr.toLowerCase().indexOf(q) >= 0) ||
             (it.en && it.en.toLowerCase().indexOf(q) >= 0) ||
             (it.ja && it.ja.indexOf(q) >= 0);
    }).slice(0, 60);

    if (!hits.length) { box.innerHTML = '<div class="empty">' + t('noHits') + '</div>'; return; }

    box.innerHTML = hits.map(function (it) {
      var a = window.Phonetics.analyze(it.fr, it.ipa);
      return '<button class="result" data-go="' + it.section + '" data-close-sheet="1">' +
        '<span style="flex:1;min-width:0">' +
          '<span class="result__fr">' + esc(it.fr) + '</span>' +
          '<span class="result__meta"> · ' + esc(a.kana) + '</span>' +
          '<div class="result__meta">' +
            esc(lang() === 'en' ? it.en : (it.ja || it.en)) + '</div>' +
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
      '<div class="stat"><b>' + st.due + '</b><span>' + t('due') + '</span></div>' +
      '<div class="stat"><b>' + st.known + '</b><span>' + t('learned') + '</span></div>' +
      '<div class="stat"><b>' + st.accuracy + '%</b><span>' + t('accuracy') + '</span></div>' +
      '<div class="stat"><b>' + st.streak + '</b><span>' + t('streak') + '</span></div>' +
      '</div>';

    if (deckPos >= deck.length) {
      body.innerHTML = stats +
        '<div class="empty">' + (deck.length ? t('sessionOver') : t('noCards')) + '</div>' +
        '<button class="btn btn--primary btn--grow" data-fc="restart" style="width:100%">' +
        t('restart') + '</button>';
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
            '<div class="fc__en">' + esc(lang() === 'en' ? c.en : (c.ja || c.en)) + '</div>' +
            (lang() === 'en' || !c.ja ? '' : '<div class="fc__ja">' + esc(c.en) + '</div>') +
          '</div>' : '') +
        '</div>' +
      '</div>' +
      '<div class="fc__actions">' +
        '<button class="btn" data-fc="say">' + ICON.play + t('listen') + '</button>' +
        (revealed
          ? '<button class="btn btn--grow" data-fc="again">' + t('again') + '</button>' +
            '<button class="btn btn--grow btn--primary" data-fc="good">' + t('gotIt') + '</button>'
          : '<button class="btn btn--grow btn--primary" data-fc="reveal">' + t('reveal') + '</button>') +
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

  /* ----- grammar reference ----- */
  var gramBuilt = false;

  function openGrammar(entryId) {
    if (!gramBuilt || $('#gramBody').dataset.lang !== lang()) {
      $('#gramBody').innerHTML = window.Render.grammarReference();
      $('#gramBody').dataset.lang = lang();
      gramBuilt = true;
    }
    openSheet('#gramSheet');
    var target = entryId && $('#g-' + entryId);
    if (target) {
      target.scrollIntoView({ block: 'start' });
      target.classList.add('is-target');
      setTimeout(function () { target.classList.remove('is-target'); }, 1600);
    } else {
      $('#gramBody').scrollTop = 0;
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

    var cur = lang();

    $('#settingsBody').innerHTML =
      '<div class="setting"><div class="setting__label"><b>' + t('language') + '</b>' +
        '<span>' + t('languageSub') + '</span></div>' +
        '<div class="segmented">' +
          '<button data-lang="ja"' + (cur === 'ja' ? ' class="on"' : '') + '>日本語</button>' +
          '<button data-lang="en"' + (cur === 'en' ? ' class="on"' : '') + '>English</button>' +
        '</div></div>' +

      '<div class="setting"><div class="setting__label"><b>' + t('theme') + '</b>' +
        '<span>' + t('themeSub') + '</span></div>' +
        '<div class="segmented">' +
          ['auto', 'light', 'dark'].map(function (k) {
            return '<button data-theme-set="' + k + '"' + (theme === k ? ' class="on"' : '') + '>' +
              t(k) + '</button>';
          }).join('') +
        '</div></div>' +

      '<div class="setting"><div class="setting__label"><b>' + t('speed') + '</b>' +
        '<span>' + rate.toFixed(2) + 'x</span></div>' +
        '<div class="segmented">' +
          [0.6, 0.75, 0.9, 1].map(function (r) {
            return '<button data-rate="' + r + '"' + (Math.abs(rate - r) < 0.01 ? ' class="on"' : '') + '>' + r + 'x</button>';
          }).join('') +
        '</div></div>' +

      toggle('showKana', t('kanaOn'), t('kanaSub')) +
      toggle('showEnglishReading', t('enReadOn'), t('enReadSub')) +
      toggle('showIPA', t('ipaOn'), t('ipaSub')) +

      '<div class="setting"><div class="setting__label"><b>' + t('engine') + '</b><span>' +
        (window.Audio2.status().voiceName || t('notFound')) + '</span></div>' +
        '<button class="btn btn--sm" data-refresh-voice="1">' + t('redetect') + '</button></div>' +

      '<div class="setting"><div class="setting__label"><b>' + t('wipe') + '</b>' +
        '<span>' + t('wipeSub') + '</span></div>' +
        '<button class="btn btn--sm" data-reset="1">' + t('reset') + '</button></div>';
  }

  /* Switching the display language re-renders every surface that
     holds text: the sidebar, the section, and any open panel. */
  function setLang(next) {
    if (next === lang()) return;
    window.Store.set('lang', next);
    document.documentElement.setAttribute('lang', next === 'en' ? 'en' : 'ja');
    searchIndex = null;
    buildNav();
    syncLangButtons();
    applyShellLabels();
    go(current);
    gramBuilt = false;
    if ($('#gramSheet').classList.contains('is-open')) openGrammar(null);
    if ($('#settingsSheet').classList.contains('is-open')) renderSettings();
    if ($('#fcSheet').classList.contains('is-open')) renderCard();
    if ($('#searchSheet').classList.contains('is-open')) runSearch($('#searchInput').value);
    updateVoiceWarning();
  }

  function syncLangButtons() {
    $$('[data-lang]').forEach(function (b) {
      b.classList.toggle('on', b.dataset.lang === lang());
    });
  }

  /* Labels that live in index.html rather than in a render function. */
  function applyShellLabels() {
    var en = lang() === 'en';
    var map = [
      ['#menuBtn', 'aria-label', en ? 'Open contents' : '目次を開く'],
      ['#searchSheetTitle', 'text', en ? 'Search' : '検索'],
      ['#fcSheetTitle', 'text', en ? 'Flashcards' : 'フラッシュカード'],
      ['#settingsSheetTitle', 'text', en ? 'Settings' : '設定'],
      ['#navSearchBtn', 'text', en ? 'Search' : '検索'],
      ['#navCardsBtn', 'text', en ? 'Cards' : 'カード'],
      ['#navGrammarBtn', 'text', en ? 'Grammar' : '文法'],
      ['#gramSheetTitle', 'text', en ? 'Grammar reference' : '文法リファレンス']
    ];
    map.forEach(function (m) {
      var el = $(m[0]);
      if (!el) return;
      if (m[1] === 'text') el.textContent = m[2];
      else el.setAttribute(m[1], m[2]);
    });
    var si = $('#searchInput');
    if (si) si.placeholder = en ? 'bonjour / hello / greeting' : 'bonjour / hello / こんにちは';
    $$('[data-close-sheet]').forEach(function (b) {
      if (b.classList.contains('icon-btn')) b.setAttribute('aria-label', en ? 'Close' : '閉じる');
    });
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

    var gram = t.closest('[data-gram]');
    if (gram) { openGrammar(gram.dataset.gram); return; }

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

    var lg = t.closest('[data-lang]');
    if (lg) { setLang(lg.dataset.lang); return; }

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
      if (confirm(t('confirmWipe'))) {
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
    if (t.closest('[data-open-grammar]'))  { openGrammar(null); return; }
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
    fb.textContent = (picked === correct
        ? window.Render.ui('correct')
        : window.Render.ui('wrongPrefix') + 'ABCD'[correct] + window.Render.ui('wrongSuffix')) +
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
  document.documentElement.setAttribute('lang', lang() === 'en' ? 'en' : 'ja');
  buildNav();
  syncLangButtons();
  applyShellLabels();
  window.Audio2.onStatusChange(updateVoiceWarning);
  setTimeout(updateVoiceWarning, 1500);

  var fromHash = parseInt((location.hash || '').replace('#', ''), 10);
  go(fromHash || window.Store.get('currentSection') || 1);

  window.addEventListener('hashchange', function () {
    var id = parseInt((location.hash || '').replace('#', ''), 10);
    if (id && id !== current) go(id);
  });
})();
