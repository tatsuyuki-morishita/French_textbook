/* ============================================================
   phonemes.js — French phoneme reference
   ------------------------------------------------------------
   Authored once (~35 entries). Every phrase in the course is
   decomposed into these by phonetics.js, so each phrase gets
   Japanese- and English-anchored pronunciation help for free.

   closer: 'ja'      Japanese gives the better handle
           'en'      English gives the better handle
           'both'    either works
           'neither' the sound exists in neither language
   ============================================================ */

window.PHONEMES = {

  /* ---------- Oral vowels ---------- */
  'a': {
    fr: 'ma, patte', kana: 'ア', en: 'father (short)',
    closer: 'ja',
    ja: '日本語の「ア」でほぼ問題なし。',
    tip: '英語の cat の a より、日本語の「ア」の方が近い。'
  },
  'e': {
    fr: 'été, parler', kana: 'エ', en: 'day (without the y-glide)',
    closer: 'ja',
    ja: '日本語の「エ」。口を横に少し引く。',
    tip: '英語の day は最後に「イ」が混じるが、フランス語は混じらない。日本語の「エ」で止める。'
  },
  'ɛ': {
    fr: 'père, mais', kana: 'エ', en: 'bed',
    closer: 'en',
    ja: '「エ」だが口をもっと開ける。',
    tip: '/e/ より口が開いた「エ」。英語 bed の e がちょうど同じ。'
  },
  'i': {
    fr: 'lit, il', kana: 'イ', en: 'see (short)',
    closer: 'ja',
    ja: '日本語の「イ」。',
    tip: '短く鋭く。日本語の「イ」そのまま。'
  },
  'o': {
    fr: 'eau, mot', kana: 'オ', en: 'go (without the w-glide)',
    closer: 'ja',
    ja: '「オ」。唇をしっかり丸める。',
    tip: '英語の go は最後に「ウ」が混じるが、フランス語は混じらない。'
  },
  'ɔ': {
    fr: 'sort, homme', kana: 'オ', en: 'off (British)',
    closer: 'both',
    ja: '「オ」だが口をもっと開ける。',
    tip: '/o/ より開いた「オ」。初級では /o/ との差は気にしなくてよい。'
  },
  'u': {
    fr: 'vous, tout', kana: 'ウ', en: 'food',
    closer: 'en',
    ja: '「ウ」だが唇を強く前に突き出す。',
    tip: '日本語の「ウ」は唇が丸まらないので弱い。英語 food の oo の唇を作る。'
  },
  'y': {
    fr: 'tu, une', kana: 'ュ', en: '(英語に該当音なし)',
    closer: 'ja',
    ja: '「ユ」の唇の形のまま「イ」と言う。',
    tip: '★最重要★ tu /ty/ と tout /tu/ は別の単語。唇を丸めて「イ」。英語話者が最も苦戦する音だが、日本語の「ユ」の口が出発点になる分こちらが有利。'
  },
  'ø': {
    fr: 'deux, peu', kana: 'ゥ', en: 'her (British, rounded lips)',
    closer: 'neither',
    ja: '「ウ」の唇で「エ」と言う。',
    tip: '唇は「ウ」、舌は「エ」。日本語にも英語にも無い音。'
  },
  'œ': {
    fr: 'sœur, fleur', kana: 'ゥ', en: 'her (British)',
    closer: 'en',
    ja: '/ø/ より口を開けた音。',
    tip: '英国英語の her, bird の母音がかなり近い。'
  },
  'ə': {
    fr: 'le, de', kana: 'ゥ', en: 'the (unstressed)',
    closer: 'en',
    ja: '軽い「ウ」。速く話すと消える。',
    tip: '英語 the の曖昧母音と同じ。会話では脱落することが多い。'
  },

  /* ---------- Nasal vowels ---------- */
  'ɑ̃': {
    fr: 'an, temps, France', kana: 'アン', en: '(英語に該当音なし)',
    closer: 'neither',
    ja: '「アン」だが、最後に舌を上あごにつけない。',
    tip: '★最頻ミス★ 日本語の「ン」は舌が上あごにつく。フランス語は舌をどこにもつけず、息を鼻に抜いたまま終わる。鼻をつまむと音が変わるのが正解の証拠。'
  },
  'ɛ̃': {
    fr: 'vin, pain', kana: 'アン', en: '(英語に該当音なし)',
    closer: 'neither',
    ja: '「アン」と「エン」の中間。舌はつけない。',
    tip: '/ɑ̃/ より口が狭い。初級では区別できなくても通じる。'
  },
  'ɔ̃': {
    fr: 'bon, non, on', kana: 'オン', en: '(英語に該当音なし)',
    closer: 'neither',
    ja: '「オン」。唇を丸めたまま鼻に抜く。舌はつけない。',
    tip: '唇の丸めが /ɑ̃/ との違い。bon /bɔ̃/ と banc /bɑ̃/。'
  },
  'œ̃': {
    fr: 'un, brun', kana: 'アン', en: '(英語に該当音なし)',
    closer: 'neither',
    ja: '「アン」。現代のパリでは /ɛ̃/ とほぼ同じ。',
    tip: '/ɛ̃/ と同じに発音して構わない。多くのフランス人も区別していない。'
  },

  /* ---------- Semi-vowels ---------- */
  'j': {
    fr: 'yeux, fille', kana: 'イ', en: 'yes',
    closer: 'both',
    ja: '「ヤ行」の子音。',
    tip: '英語 yes の y と同じ。'
  },
  'w': {
    fr: 'oui, moi', kana: 'ウ', en: 'we',
    closer: 'both',
    ja: '「ワ行」の子音。',
    tip: '英語 we の w と同じ。'
  },
  'ɥ': {
    fr: 'huit, nuit', kana: 'ュ', en: '(英語に該当音なし)',
    closer: 'neither',
    ja: '/y/ を素早く発音したもの。',
    tip: '「ユイ」を一息で。lui, huit, nuit に出てくる。'
  },

  /* ---------- Consonants ---------- */
  'p': {
    fr: 'papa', kana: 'プ', en: 'spin (息の破裂なし)',
    closer: 'ja',
    ja: '「パ行」。',
    tip: '英語の p のような息の破裂を出さない。日本語の「パ」がちょうどよい。'
  },
  'b': {
    fr: 'bon', kana: 'ブ', en: 'boy',
    closer: 'both',
    ja: '「バ行」。',
    tip: '日英どちらとも同じ。'
  },
  't': {
    fr: 'table', kana: 'トゥ', en: 'stop (息の破裂なし)',
    closer: 'ja',
    ja: '「タ行」。舌先を上の歯の裏に。',
    tip: '英語より舌を前に。息の破裂も出さない。'
  },
  'd': {
    fr: 'deux', kana: 'ドゥ', en: 'dog',
    closer: 'ja',
    ja: '「ダ行」。舌先を上の歯の裏に。',
    tip: '英語より舌が前。'
  },
  'k': {
    fr: 'café', kana: 'ク', en: 'sky (息の破裂なし)',
    closer: 'ja',
    ja: '「カ行」。',
    tip: '息の破裂を出さない。'
  },
  'g': {
    fr: 'gare', kana: 'グ', en: 'go',
    closer: 'both',
    ja: '「ガ行」。',
    tip: '常に硬い g。gentil の g は /ʒ/ で別の音。'
  },
  'f': {
    fr: 'français', kana: 'フ', en: 'fun',
    closer: 'en',
    ja: '下唇を上の歯に当てる。',
    tip: '日本語の「フ」は両唇で息を出すだけなので不十分。英語の f と同じにする。'
  },
  'v': {
    fr: 'vous', kana: 'ヴ', en: 'very',
    closer: 'en',
    ja: '下唇を上の歯に当てて濁らせる。',
    tip: '日本語に無い音。英語 very の v と同じ。b と混同しない。'
  },
  's': {
    fr: 'salut', kana: 'ス', en: 'see',
    closer: 'both',
    ja: '「サ行」。',
    tip: '日英どちらとも同じ。'
  },
  'z': {
    fr: 'maison', kana: 'ズ', en: 'zoo',
    closer: 'en',
    ja: '濁った「ス」。',
    tip: '日本語の「ザ」は「ヅァ」寄りになりがち。英語 zoo のように息を止めずに。'
  },
  'ʃ': {
    fr: 'chat', kana: 'シュ', en: 'she',
    closer: 'en',
    ja: '「シュ」。',
    tip: '英語 she の sh と同じ。'
  },
  'ʒ': {
    fr: 'je, jour', kana: 'ジュ', en: 'measure, vision',
    closer: 'en',
    ja: '「ジュ」だが舌先を歯につけない。',
    tip: '★重要★ 英語 measure の s がそのままこの音。日本語の「ジ」は先頭に「ド」が入る（ヂ）ので違う。息を止めずに擦り続ける。'
  },
  'm': {
    fr: 'maman', kana: 'ム', en: 'me',
    closer: 'both',
    ja: '「マ行」。',
    tip: '日英どちらとも同じ。'
  },
  'n': {
    fr: 'non', kana: 'ヌ', en: 'no',
    closer: 'both',
    ja: '「ナ行」。',
    tip: '日英どちらとも同じ。'
  },
  'ɲ': {
    fr: 'espagnol', kana: 'ニュ', en: 'canyon (ny)',
    closer: 'ja',
    ja: '「ニャ行」。',
    tip: '日本語の「ニャ・ニュ・ニョ」がそのまま使える。'
  },
  'ŋ': {
    fr: 'parking', kana: 'ング', en: 'sing',
    closer: 'en',
    ja: '鼻濁音の「ング」。',
    tip: '英語由来の外来語にのみ出る。'
  },
  'l': {
    fr: 'le, elle', kana: 'ル', en: 'leaf (never dark l)',
    closer: 'ja',
    ja: '「ラ行」。舌先を上の歯の裏につける。',
    tip: '英語 ball のような舌が奥に引ける「暗い l」は使わない。常に leaf の l。'
  },
  'ʁ': {
    fr: 'Paris, rouge', kana: 'ル', en: '(英語に該当音なし)',
    closer: 'neither',
    ja: 'ラ行では無い。喉の奥・うがいの位置。',
    tip: '★最難関★ 英語の r（舌を巻く）とも日本語のラ行（舌先で弾く）とも全く別物。舌先は下の歯につけたまま動かさず、喉の奥を震わせる。うがいの音から入るとつかみやすい。カタカナの「ル」はあくまで位置の目印。'
  }
};

/* Phonemes worth flagging on a phrase card: no JP/EN equivalent,
   or a documented high-frequency mistake for Japanese speakers. */
window.HARD_PHONEMES = ['ʁ', 'y', 'ɑ̃', 'ɛ̃', 'ɔ̃', 'œ̃', 'ø', 'œ', 'ʒ', 'v', 'f', 'z', 'ɥ'];

window.getPhoneme = function (symbol) {
  return window.PHONEMES[symbol] || null;
};
