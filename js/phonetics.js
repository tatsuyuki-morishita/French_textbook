/* ============================================================
   phonetics.js — French grapheme-to-phoneme engine
   ------------------------------------------------------------
   Pipeline, in priority order:

     1. per-item override   (data files may set `ipa:`)
     2. LEXICON             (lexicon.js — irregular words)
     3. rule engine         (this file)

   IPA is then rendered as katakana and as an English-style
   reading. Accuracy is roughly 85-90%; the UI presents the
   output as a guide, not as authority.
   ============================================================ */

(function () {
  'use strict';

  /* ---------------------------------------------------------
     Character classes
     --------------------------------------------------------- */
  var VOWEL_LETTERS = 'aàâäeéèêëiîïoôöuùûüyœæ';
  var isV = function (c) { return c !== undefined && VOWEL_LETTERS.indexOf(c) >= 0; };
  var isC = function (c) { return c !== undefined && /[a-zçñ]/.test(c) && !isV(c); };

  /* Elided clitics: j' l' d' c' n' m' t' s' qu' */
  var ELISION = {
    'j': 'ʒ', 'l': 'l', 'd': 'd', 'c': 's', 'n': 'n', 'm': 'm',
    't': 't', 's': 's', 'qu': 'k', 'jusqu': 'ʒysk', 'lorsqu': 'lɔʁsk',
    'puisqu': 'pɥisk', 'quelqu': 'kɛlk'
  };

  /* Words after which a liaison is obligatory in careful speech.
     Restricting liaison to this set keeps the engine from inventing
     links that native speakers would not make. */
  var LIAISON_TRIGGERS = new Set([
    'les', 'des', 'mes', 'tes', 'ses', 'ces', 'nos', 'vos', 'leurs', 'aux',
    'un', 'deux', 'trois', 'six', 'dix', 'vingt', 'cent',
    'vous', 'nous', 'ils', 'elles', 'on', 'en', 'y',
    'est', 'sont', 'ont', 'sommes', 'êtes', 'suis',
    'très', 'plus', 'moins', 'bien', 'chez', 'dans', 'sans', 'sous',
    'quand', 'grand', 'petit', 'bon', 'mon', 'ton', 'son', 'quels', 'quelles'
  ]);

  /* h aspiré — blocks liaison and elision. */
  var H_ASPIRE = new Set([
    'haricot', 'héros', 'hibou', 'hockey', 'hollande', 'homard', 'honte',
    'hors', 'huit', 'hasard', 'haut', 'haine', 'hall', 'hamburger'
  ]);

  /* ---------------------------------------------------------
     Word -> IPA
     --------------------------------------------------------- */

  function nasalOK(w, idx, len) {
    var next = w[idx + len];
    if (next === undefined) return true;      // word-final: nasal
    if (isV(next)) return false;              // vowel follows: not nasal
    if (next === 'n' || next === 'm') return false;  // doubled: not nasal
    return true;
  }

  /* 'eu' is open /œ/ in a closed final syllable (fleur, seul, neuf),
     otherwise close /ø/ (deux, peu, heureux). */
  function euQuality(rest) {
    return /^[rflmnv](re|le)?e?s?$/.test(rest) ? 'œ' : 'ø';
  }

  /* French drops a whole word-final consonant cluster, not just its last
     letter: comprend-s, petit-s, ver-t. Returns the index where that silent
     run begins, or -1. n and m are excluded because the nasal-vowel rules
     have already claimed them. */
  function silentTailStart(w) {
    if (window.PRONOUNCED_FINAL.has(w)) return -1;
    var end = w.length - 1;
    var i = end;
    while (i >= 0 && 'bdgpstxz'.indexOf(w[i]) >= 0) i--;
    return i === end ? -1 : i + 1;
  }

  function coreToIPA(w) {
    var out = '';
    var i = 0;
    var n = w.length;
    var silentFrom = silentTailStart(w);

    while (i < n) {
      var rest = w.slice(i);
      var c = w[i];
      var last = (i === n - 1);
      var mute = (silentFrom >= 0 && i >= silentFrom);
      /* A doubled consonant is one sound. Step over both copies rather than
         rewriting w, which would invalidate silentFrom. */
      var dbl = isC(c) && w[i + 1] === c;
      var matched = false;

      /* Inside the silent tail nothing is voiced. Checked here so it also
         covers g and c, which have their own cases further down. */
      if (mute && 'bdgpstxz'.indexOf(c) >= 0) { i++; continue; }

      /* ---- word-final endings (checked first, they override) ---- */
      if (rest === 'ent' && i > 0) { out += 'ɑ̃'; break; }
      if (rest === 'er' && i >= 2) { out += 'e';  break; }
      if (rest === 'ez' && i > 0)  { out += 'e';  break; }
      if (rest === 'et' && i > 0)  { out += 'ɛ';  break; }
      if (rest === 'es' && i > 0)  { break; }              // silent
      if (rest === 'e'  && i > 0 && n > 2) { break; }      // silent final e
      if (rest === 'e'  && i > 0 && n <= 2) { out += 'ə'; break; }  // le, de, je

      /* ---- four letters ---- */
      if (/^(aill)/.test(rest))  { out += 'aj'; i += 4; continue; }
      if (/^(eill)/.test(rest))  { out += 'ɛj'; i += 4; continue; }
      if (/^(ouill)/.test(rest)) { out += 'uj'; i += 5; continue; }
      if (/^(euill|ueill)/.test(rest)) { out += 'œj'; i += 5; continue; }
      if (/^tion/.test(rest))    { out += 'sjɔ̃'; i += 4; continue; }

      /* ---- three letters ---- */
      if (/^eau/.test(rest)) { out += 'o'; i += 3; continue; }
      if (/^oin/.test(rest) && nasalOK(w, i, 3)) { out += 'wɛ̃'; i += 3; continue; }
      if (/^(ain|ein|aim|eim)/.test(rest) && nasalOK(w, i, 3)) { out += 'ɛ̃'; i += 3; continue; }
      if (/^ien/.test(rest) && nasalOK(w, i, 3)) {
        var tailOnly = (i + 3 >= n) || (silentFrom >= 0 && i + 3 >= silentFrom);
        out += tailOnly ? 'jɛ̃' : 'jɑ̃';
        i += 3; continue;
      }
      if (/^ill/.test(rest)) {
        out += isV(w[i - 1]) ? 'j' : 'ij';
        i += 3; continue;
      }
      if (/^(ail)$/.test(rest)) { out += 'aj'; i += 3; continue; }
      if (/^(eil)$/.test(rest)) { out += 'ɛj'; i += 3; continue; }

      /* ---- two letters: nasal vowels ---- */
      if (/^(in|im|yn|ym)/.test(rest) && nasalOK(w, i, 2)) { out += 'ɛ̃'; i += 2; continue; }
      if (/^(un|um)/.test(rest)       && nasalOK(w, i, 2)) { out += 'œ̃'; i += 2; continue; }
      if (/^(on|om)/.test(rest)       && nasalOK(w, i, 2)) { out += 'ɔ̃'; i += 2; continue; }
      if (/^(an|am|en|em)/.test(rest) && nasalOK(w, i, 2)) { out += 'ɑ̃'; i += 2; continue; }

      /* ---- two letters: oral vowel digraphs ---- */
      if (/^ou/.test(rest)) {
        out += isV(w[i + 2]) ? 'w' : 'u';
        i += 2; continue;
      }
      if (/^oi/.test(rest)) { out += 'wa'; i += 2; continue; }
      if (/^oy/.test(rest)) { out += 'waj'; i += 2; continue; }
      if (/^au/.test(rest)) { out += 'o'; i += 2; continue; }
      if (/^(ai|ei)/.test(rest)) { out += 'ɛ'; i += 2; continue; }
      if (/^ay/.test(rest)) { out += 'ɛj'; i += 2; continue; }
      if (/^(eu|œu|oeu)/.test(rest)) {
        var skip = rest[0] === 'o' ? 3 : 2;
        out += euQuality(w.slice(i + skip));
        i += skip; continue;
      }
      if (/^ui/.test(rest)) { out += 'ɥi'; i += 2; continue; }

      /* ---- two letters: consonant digraphs ---- */
      if (/^ch/.test(rest)) { out += 'ʃ'; i += 2; continue; }
      if (/^gn/.test(rest)) { out += 'ɲ'; i += 2; continue; }
      if (/^ph/.test(rest)) { out += 'f'; i += 2; continue; }
      if (/^th/.test(rest)) { out += 't'; i += 2; continue; }
      if (/^qu/.test(rest)) { out += 'k'; i += 2; continue; }
      if (/^gu/.test(rest) && /^[eiéèy]/.test(rest.slice(2))) { out += 'g'; i += 2; continue; }
      if (/^sc/.test(rest) && /^[eiy]/.test(rest.slice(2))) { out += 's'; i += 2; continue; }

      /* ---- single letters ---- */
      switch (c) {
        case 'a': case 'à': case 'â': case 'ä': out += 'a'; matched = true; break;
        case 'é': out += 'e'; matched = true; break;
        case 'è': case 'ê': case 'ë': out += 'ɛ'; matched = true; break;
        case 'i': {
          var nx = w[i + 1];
          var silentFinalE = (nx === 'e' && i + 1 === n - 1);
          out += (isV(nx) && !silentFinalE) ? 'j' : 'i';
          matched = true; break;
        }
        case 'î': case 'ï': out += 'i'; matched = true; break;
        case 'ô': out += 'o'; matched = true; break;
        case 'o': {
          var atEnd = last || (silentFrom >= 0 && i + 1 >= silentFrom);
          out += atEnd ? 'o' : 'ɔ';
          matched = true; break;
        }
        case 'u': case 'ù': case 'û': case 'ü': out += 'y'; matched = true; break;
        case 'y':
          out += (isV(w[i - 1]) && isV(w[i + 1])) ? 'j' : 'i';
          matched = true; break;

        case 'e': {
          /* closed syllable -> /ɛ/, open syllable -> /ə/ */
          var n1 = w[i + 1], n2 = w[i + 2];
          if (isC(n1) && (isC(n2) || n2 === undefined)) out += 'ɛ';
          else out += 'ə';
          matched = true; break;
        }

        case 'c':
          out += /^[eiyéèê]/.test(w.slice(i + 1)) ? 's' : 'k';
          matched = true; break;
        case 'ç': out += 's'; matched = true; break;
        case 'g':
          out += /^[eiyéèê]/.test(w.slice(i + 1)) ? 'ʒ' : 'g';
          matched = true; break;
        case 's':
          out += (isV(w[i - 1]) && isV(w[i + 1])) ? 'z' : 's';
          matched = true; break;
        case 'x': out += 'ks'; matched = true; break;
        case 'h': matched = true; break;                    // always silent
        case 'j': out += 'ʒ'; matched = true; break;
        case 'r': out += 'ʁ'; matched = true; break;
        case 'w': out += 'w'; matched = true; break;
        case 'ñ': out += 'ɲ'; matched = true; break;

        /* consonants that fall silent in a word-final cluster */
        case 'b': case 'd': case 'n': case 'm':
        case 'p': case 't': case 'z':
          out += c;
          matched = true; break;

        /* CaReFuL — these stay audible at the end of a word */
        case 'f': case 'l': case 'k': case 'v': out += c; matched = true; break;

        default:
          if (/[a-z]/.test(c)) out += c;
          matched = true;
      }

      i += dbl ? 2 : 1;
    }

    return out;
  }

  /* Strip an elided prefix (j', l', qu' ...) and prepend its consonant. */
  function wordToIPA(raw) {
    if (!raw) return '';
    var word = raw.toLowerCase().replace(/[^a-zàâäéèêëîïôöùûüçœæ'’-]/g, '');
    if (!word) return '';
    word = word.replace(/’/g, "'");

    var lex = window.lookupLexicon(word);
    if (lex !== null) return lex;

    var prefix = '';
    var apos = word.indexOf("'");
    if (apos > 0) {
      var head = word.slice(0, apos);
      var tail = word.slice(apos + 1);
      if (ELISION[head] !== undefined && tail) {
        prefix = ELISION[head];
        word = tail;
        var lex2 = window.lookupLexicon(word);
        if (lex2 !== null) return prefix + lex2;
      } else {
        word = word.replace(/'/g, '');
      }
    }

    /* Hyphenated compounds: each part is a word, and liaison applies
       across the hyphens too (vingt-et-un -> /vɛ̃teœ̃/). */
    if (word.indexOf('-') >= 0) {
      var parts = word.split('-').filter(Boolean);
      var acc = '';
      for (var pi = 0; pi < parts.length; pi++) {
        /* only as the leading element: vingt-deux is /vɛ̃tdø/ but the
           vingt inside quatre-vingt-quinze keeps its t silent */
        var hy = pi === 0 && pi < parts.length - 1 && window.HYPHEN_FORMS[parts[pi]];
        var lex3 = hy || window.lookupLexicon(parts[pi]);
        acc += (lex3 !== null && lex3 !== undefined ? lex3 : coreToIPA(parts[pi]));
        if (pi < parts.length - 1) acc += liaisonFor(parts[pi], parts[pi + 1]);
      }
      return prefix + acc;
    }

    return prefix + coreToIPA(word);
  }

  /* ---------------------------------------------------------
     Liaison between words
     --------------------------------------------------------- */
  var LIAISON_SOUND = { s: 'z', x: 'z', z: 'z', t: 't', d: 't', n: 'n', p: 'p', r: 'ʁ' };

  function joinLiaison(ipa, li) {
    if (!li) return ipa;
    var last = ipa.slice(-1);
    if (li === 'z' && (last === 's' || last === 'z')) return ipa.slice(0, -1) + 'z';
    if (last === li) return ipa;
    return ipa + li;
  }

  function liaisonFor(prevRaw, nextRaw) {
    var prev = prevRaw.toLowerCase().replace(/[^a-zàâéèêëîïôùûüçœ'-]/g, '');
    var next = nextRaw.toLowerCase().replace(/[^a-zàâéèêëîïôùûüçœ'-]/g, '');
    if (!prev || !next) return '';
    var apos = prev.lastIndexOf("'");
    if (apos >= 0) prev = prev.slice(apos + 1);
    if (!LIAISON_TRIGGERS.has(prev)) return '';
    if (H_ASPIRE.has(next)) return '';
    if (!/^[aàâeéèêiîoôuùyh]/.test(next)) return '';
    var final = prev[prev.length - 1];
    return LIAISON_SOUND[final] || '';
  }

  /* ---------------------------------------------------------
     IPA tokenising (nasal vowels are two code units)
     --------------------------------------------------------- */
  function ipaSymbols(ipa) {
    ipa = String(ipa).replace(/ɡ/g, 'g');   // script g -> ascii g
    var out = [];
    for (var i = 0; i < ipa.length; i++) {
      var s = ipa[i];
      if (ipa[i + 1] === '̃') { s += '̃'; i++; }
      out.push(s);
    }
    return out;
  }

  var VOWELS_IPA = new Set(['a', 'e', 'ɛ', 'i', 'o', 'ɔ', 'u', 'y', 'ø', 'œ', 'ə',
    'ɑ̃', 'ɛ̃', 'ɔ̃', 'œ̃', 'ɑ']);
  var GLIDES = new Set(['j', 'w', 'ɥ']);

  function syllabify(ipa) {
    var sym = ipaSymbols(ipa);
    var syls = [];
    var cur = [];
    var seenVowel = false;

    for (var i = 0; i < sym.length; i++) {
      var s = sym[i];
      if (VOWELS_IPA.has(s)) {
        if (seenVowel) { syls.push(cur); cur = []; }
        cur.push(s);
        seenVowel = true;
      } else if (GLIDES.has(s)) {
        var vowelAhead = sym.slice(i + 1).some(function (x) { return VOWELS_IPA.has(x); });
        if (seenVowel && vowelAhead) { syls.push(cur); cur = []; seenVowel = false; }
        cur.push(s);
      } else {
        /* consonant: starts a new syllable if a vowel already landed
           and another vowel is still coming */
        var moreVowels = sym.slice(i + 1).some(function (x) { return VOWELS_IPA.has(x); });
        if (seenVowel && moreVowels) {
          var nextIsVowel = VOWELS_IPA.has(sym[i + 1]) || GLIDES.has(sym[i + 1]);
          /* only obstruent + liquid is a legal French onset cluster:
             /pʁ/ /bl/ /tʁ/ ... but never /ʁl/ */
          var cluster = /[pbtdkgfv]/.test(s) && /[ʁl]/.test(sym[i + 1] || '');
          if (nextIsVowel || cluster) { syls.push(cur); cur = []; seenVowel = false; }
        }
        cur.push(s);
      }
    }
    if (cur.length) syls.push(cur);
    return syls.filter(function (s) { return s.length; });
  }

  /* ---------------------------------------------------------
     IPA -> katakana
     --------------------------------------------------------- */
  var ROW = {
    k: ['カ', 'キ', 'ク', 'ケ', 'コ'], g: ['ガ', 'ギ', 'グ', 'ゲ', 'ゴ'],
    s: ['サ', 'スィ', 'ス', 'セ', 'ソ'], z: ['ザ', 'ズィ', 'ズ', 'ゼ', 'ゾ'],
    t: ['タ', 'ティ', 'トゥ', 'テ', 'ト'], d: ['ダ', 'ディ', 'ドゥ', 'デ', 'ド'],
    n: ['ナ', 'ニ', 'ヌ', 'ネ', 'ノ'], b: ['バ', 'ビ', 'ブ', 'ベ', 'ボ'],
    p: ['パ', 'ピ', 'プ', 'ペ', 'ポ'], m: ['マ', 'ミ', 'ム', 'メ', 'モ'],
    l: ['ラ', 'リ', 'ル', 'レ', 'ロ'], 'ʁ': ['ラ', 'リ', 'ル', 'レ', 'ロ'],
    'ʃ': ['シャ', 'シ', 'シュ', 'シェ', 'ショ'], 'ʒ': ['ジャ', 'ジ', 'ジュ', 'ジェ', 'ジョ'],
    f: ['ファ', 'フィ', 'フ', 'フェ', 'フォ'], v: ['ヴァ', 'ヴィ', 'ヴ', 'ヴェ', 'ヴォ'],
    'ɲ': ['ニャ', 'ニ', 'ニュ', 'ニェ', 'ニョ'], 'ŋ': ['ンガ', 'ンギ', 'ング', 'ンゲ', 'ンゴ'],
    j: ['ヤ', 'イ', 'ユ', 'イェ', 'ヨ'], w: ['ワ', 'ウィ', 'ウ', 'ウェ', 'ウォ'],
    'ɥ': ['ュア', 'ュイ', 'ュ', 'ュエ', 'ュオ']
  };

  /* /y/ (tu) gets the ュ column; /ø œ ə/ borrow the ウ column. */
  var Y_COL = {
    k: 'キュ', g: 'ギュ', s: 'スュ', z: 'ジュ', t: 'テュ', d: 'デュ', n: 'ニュ',
    b: 'ビュ', p: 'ピュ', m: 'ミュ', l: 'リュ', 'ʁ': 'リュ', 'ʃ': 'シュ',
    'ʒ': 'ジュ', f: 'フュ', v: 'ヴュ', 'ɲ': 'ニュ', j: 'ユ', w: 'ウュ', 'ɥ': 'ュ', 'ŋ': 'ング'
  };

  var VOWEL_IDX = { a: 0, i: 1, u: 2, e: 3, 'ɛ': 3, o: 4, 'ɔ': 4, 'ø': 2, 'œ': 2, 'ə': 2, 'ɑ': 0 };
  var NASAL_BASE = { 'ɑ̃': 0, 'ɛ̃': 0, 'œ̃': 0, 'ɔ̃': 4 };
  var BARE_VOWEL = {
    a: 'ア', e: 'エ', 'ɛ': 'エ', i: 'イ', o: 'オ', 'ɔ': 'オ', u: 'ウ',
    y: 'ユ', 'ø': 'ウ', 'œ': 'ウ', 'ə': 'ゥ', 'ɑ': 'ア',
    'ɑ̃': 'アン', 'ɛ̃': 'アン', 'œ̃': 'アン', 'ɔ̃': 'オン'
  };

  function sylToKana(syl) {
    var out = '';
    var i = 0;
    while (i < syl.length) {
      var s = syl[i];
      var next = syl[i + 1];

      /* syllable-initial /ɥ/ (huit) is a full ユ, not the small ュ that
         follows a consonant */
      if (s === 'ɥ') { out += 'ユ'; i++; continue; }

      if (ROW[s] && next && (VOWEL_IDX[next] !== undefined || NASAL_BASE[next] !== undefined || next === 'y')) {
        if (next === 'y') out += Y_COL[s] || (ROW[s][2] + 'ュ');
        else if (NASAL_BASE[next] !== undefined) out += ROW[s][NASAL_BASE[next]] + 'ン';
        else out += ROW[s][VOWEL_IDX[next]];
        i += 2;
        continue;
      }
      if (ROW[s] && next === 'ɥ') { out += (Y_COL[s] || ROW[s][2] + 'ュ'); i += 2; continue; }
      if (ROW[s] && next === 'j') {
        var after = syl[i + 2];
        if (after === 'e' || after === 'ɛ') { out += ROW[s][1] + 'エ'; i += 3; continue; }
        out += ROW[s][1]; i++; continue;
      }
      if (s === 'ɥ') { out += 'ユ'; i++; continue; }
      if (ROW[s]) { out += ROW[s][2]; i++; continue; }   // bare consonant
      if (BARE_VOWEL[s]) { out += BARE_VOWEL[s]; i++; continue; }
      i++;
    }
    return out;
  }

  function ipaToKana(ipa) {
    var syls = syllabify(ipa);
    var parts = syls.map(sylToKana);

    /* French stresses the final syllable. When that syllable is closed
       (bon-JOUR), the vowel audibly lengthens, so insert a chouon before
       the closing consonant's kana. Single-syllable words stay short. */
    if (parts.length >= 2) {
      var li = parts.length - 1;
      var lastSyl = syls[li];
      var lastSym = lastSyl[lastSyl.length - 1];
      /* Lengthen only a simple V+C ending. Two closing consonants
         (re-GARDE) leave no room for an audible long vowel. */
      var coda = 0;
      for (var ci = lastSyl.length - 1; ci >= 0; ci--) {
        if (VOWELS_IPA.has(lastSyl[ci]) || GLIDES.has(lastSyl[ci])) break;
        coda++;
      }
      var closed = coda === 1;
      var nasal = lastSyl.some(function (x) { return /̃/.test(x); });
      if (closed && !nasal && ROW[lastSym]) {
        var tail = ROW[lastSym][2];
        var t = parts[li];
        if (t.length > tail.length && t.slice(-tail.length) === tail && !/ー/.test(t)) {
          parts[li] = t.slice(0, t.length - tail.length) + 'ー' + tail;
        }
      }
    }
    return parts.join('');
  }

  /* ---------------------------------------------------------
     IPA -> English-style reading
     --------------------------------------------------------- */
  var EN_MAP = {
    a: 'ah', 'ɑ': 'ah', e: 'ay', 'ɛ': 'eh', i: 'ee', o: 'oh', 'ɔ': 'aw',
    u: 'oo', y: 'ew', 'ø': 'uh', 'œ': 'ur', 'ə': 'uh',
    'ɑ̃': 'ahn', 'ɛ̃': 'an', 'ɔ̃': 'ohn', 'œ̃': 'uhn',
    p: 'p', b: 'b', t: 't', d: 'd', k: 'k', g: 'g', f: 'f', v: 'v',
    s: 's', z: 'z', 'ʃ': 'sh', 'ʒ': 'zh', m: 'm', n: 'n', 'ɲ': 'ny',
    'ŋ': 'ng', l: 'l', 'ʁ': 'r', j: 'y', w: 'w', 'ɥ': 'w'
  };

  function ipaToEnglish(ipa) {
    var syls = syllabify(ipa);
    var parts = syls.map(function (syl) {
      return syl.map(function (s) { return EN_MAP[s] !== undefined ? EN_MAP[s] : s; }).join('');
    }).filter(Boolean);
    if (!parts.length) return '';
    parts[parts.length - 1] = parts[parts.length - 1].toUpperCase();
    return parts.join('-');
  }

  /* ---------------------------------------------------------
     Public API
     --------------------------------------------------------- */
  var cache = Object.create(null);

  function analyze(text, overrideIPA) {
    var key = text + ' ' + (overrideIPA || '');
    if (cache[key]) return cache[key];

    var tokens = String(text).split(/(\s+)/).filter(function (t) { return t.length; });
    var words = [];
    var wordList = tokens.filter(function (t) { return !/^\s+$/.test(t); });

    var ipaParts = [];
    for (var i = 0; i < wordList.length; i++) {
      var raw = wordList[i];
      var bare = raw.replace(/[.,!?;:«»“”"()]/g, '');
      if (!bare || !/[a-zàâäéèêëîïôöùûüçœæ]/i.test(bare)) {
        /* French sets a space before ? ! : ; — keep the mark on the page. */
        words.push({ text: raw, bare: '', ipa: '', kana: '', en: '', punct: true });
        continue;
      }

      var ipa = wordToIPA(bare);
      var li = '';
      if (i < wordList.length - 1) {
        li = liaisonFor(bare, wordList[i + 1].replace(/[.,!?;:«»“”"()]/g, ''));
      }
      var full = joinLiaison(ipa, li);

      words.push({
        text: raw,
        bare: bare,
        ipa: ipa,
        liaison: li,
        kana: ipaToKana(full),
        en: ipaToEnglish(full)
      });
      ipaParts.push(full);
    }

    var phraseIPA = overrideIPA || ipaParts.join(' ');
    var symbols = ipaSymbols(phraseIPA.replace(/[\s.]/g, ''));
    var hard = [];
    symbols.forEach(function (s) {
      if (window.HARD_PHONEMES.indexOf(s) >= 0 && hard.indexOf(s) < 0) hard.push(s);
    });

    var result = {
      text: text,
      ipa: phraseIPA,
      kana: overrideIPA ? ipaToKana(overrideIPA)
        : words.filter(function (w) { return !w.punct; }).map(function (w) { return w.kana; }).join('・'),
      en: overrideIPA ? ipaToEnglish(overrideIPA)
        : words.filter(function (w) { return !w.punct; }).map(function (w) { return w.en; }).join(' '),
      words: words,
      hard: hard,
      hasLiaison: words.some(function (w) { return w.liaison; })
    };

    cache[key] = result;
    return result;
  }

  window.Phonetics = {
    analyze: analyze,
    wordToIPA: wordToIPA,
    ipaToKana: ipaToKana,
    ipaToEnglish: ipaToEnglish,
    syllabify: syllabify,
    ipaSymbols: ipaSymbols
  };
})();
