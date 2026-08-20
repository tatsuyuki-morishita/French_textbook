/* ============================================================
   phonemes.js — French phoneme reference
   ------------------------------------------------------------
   Authored once (~35 entries). Every phrase in the course is
   decomposed into these by phonetics.js, so each phrase gets
   pronunciation help for free.

   desc / tip  are the Japanese-facing explanation.
   desc_en / tip_en  are the English-facing one — not a translation
   but a rewrite, because the useful anchor differs by language:
   /ʒ/ is trivial for an English speaker and hard for a Japanese
   one, and /y/ is the reverse.

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
    desc: '日本語の「ア」でほぼ問題なし。',
    tip: '英語の cat の a より、日本語の「ア」の方が近い。',
    desc_en: 'A short, clean "ah".',
    tip_en: 'Shorter than the a in father, and never the flat a of cat.'
  },
  'e': {
    fr: 'été, parler', kana: 'エ', en: 'day (without the y-glide)',
    closer: 'ja',
    desc: '日本語の「エ」。口を横に少し引く。',
    tip: '英語の day は最後に「イ」が混じるが、フランス語は混じらない。日本語の「エ」で止める。',
    desc_en: 'The vowel of day, stopped before it glides.',
    tip_en: 'English day ends in a y-glide. French cuts it off — one pure vowel, no drift.'
  },
  'ɛ': {
    fr: 'père, mais', kana: 'エ', en: 'bed',
    closer: 'en',
    desc: '「エ」だが口をもっと開ける。',
    tip: '/e/ より口が開いた「エ」。英語 bed の e がちょうど同じ。',
    desc_en: 'Exactly the e of bed.',
    tip_en: 'A more open vowel than /e/. English gives you this one for free.'
  },
  'i': {
    fr: 'lit, il', kana: 'イ', en: 'see (short)',
    closer: 'ja',
    desc: '日本語の「イ」。',
    tip: '短く鋭く。日本語の「イ」そのまま。',
    desc_en: 'The vowel of see, but short.',
    tip_en: 'Tense and short. Do not let it relax towards the i of sit.'
  },
  'o': {
    fr: 'eau, mot', kana: 'オ', en: 'go (without the w-glide)',
    closer: 'ja',
    desc: '「オ」。唇をしっかり丸める。',
    tip: '英語の go は最後に「ウ」が混じるが、フランス語は混じらない。',
    desc_en: 'The vowel of go, stopped before it glides.',
    tip_en: 'English go drifts into a w. French holds one rounded vowel throughout.'
  },
  'ɔ': {
    fr: 'sort, homme', kana: 'オ', en: 'off (British)',
    closer: 'both',
    desc: '「オ」だが口をもっと開ける。',
    tip: '/o/ より開いた「オ」。初級では /o/ との差は気にしなくてよい。',
    desc_en: 'A more open o, as in British off.',
    tip_en: 'The difference from /o/ is small; do not worry about it early on.'
  },
  'u': {
    fr: 'vous, tout', kana: 'ウ', en: 'food',
    closer: 'en',
    desc: '「ウ」だが唇を強く前に突き出す。',
    tip: '日本語の「ウ」は唇が丸まらないので弱い。英語 food の oo の唇を作る。',
    desc_en: 'The oo of food.',
    tip_en: 'Straightforward for English speakers. Keep the lips firmly rounded and pushed forward.'
  },
  'y': {
    fr: 'tu, une', kana: 'ュ', en: '(no English equivalent)',
    closer: 'ja',
    desc: '「ユ」の唇の形のまま「イ」と言う。',
    tip: '★最重要★ tu /ty/ と tout /tu/ は別の単語。唇を丸めて「イ」。英語話者が最も苦戦する音だが、日本語の「ユ」の口が出発点になる分こちらが有利。',
    desc_en: 'Say "ee" with your lips rounded as if for "oo".',
    tip_en: 'The hardest vowel for English speakers, and it is contrastive: tu /ty/ and tout /tu/ are different words. Hold the oo lip shape, then say ee without moving your lips.'
  },
  'ø': {
    fr: 'deux, peu', kana: 'ゥ', en: 'her (British, rounded lips)',
    closer: 'neither',
    desc: '「ウ」の唇で「エ」と言う。',
    tip: '唇は「ウ」、舌は「エ」。日本語にも英語にも無い音。',
    desc_en: 'Round your lips for "oo" and say "ay".',
    tip_en: 'Lips say one vowel, tongue says another. No exact match in English.'
  },
  'œ': {
    fr: 'sœur, fleur', kana: 'ゥ', en: 'her (British)',
    closer: 'en',
    desc: '/ø/ より口を開けた音。',
    tip: '英国英語の her, bird の母音がかなり近い。',
    desc_en: 'Close to the vowel of British her or bird.',
    tip_en: 'A more open version of /ø/. English speakers can borrow this one almost directly.'
  },
  'ə': {
    fr: 'le, de', kana: 'ゥ', en: 'the (unstressed)',
    closer: 'en',
    desc: '軽い「ウ」。速く話すと消える。',
    tip: '英語 the の曖昧母音と同じ。会話では脱落することが多い。',
    desc_en: 'The unstressed vowel of the — a schwa.',
    tip_en: 'Identical to the English schwa, and just as droppable: je suis often becomes j\'suis.'
  },

  /* ---------- Nasal vowels ---------- */
  'ɑ̃': {
    fr: 'an, temps, France', kana: 'アン', en: '(no English equivalent)',
    closer: 'neither',
    desc: '「アン」だが、最後に舌を上あごにつけない。',
    tip: '★最頻ミス★ 日本語の「ン」は舌が上あごにつく。フランス語は舌をどこにもつけず、息を鼻に抜いたまま終わる。鼻をつまむと音が変わるのが正解の証拠。',
    desc_en: 'An "ahn" where the n is never actually pronounced.',
    tip_en: 'The commonest mistake is to finish with a real n. The tongue must not touch anywhere — the air simply routes through the nose. Pinch your nose: if the sound changes, you have it right.'
  },
  'ɛ̃': {
    fr: 'vin, pain', kana: 'アン', en: '(no English equivalent)',
    closer: 'neither',
    desc: '「アン」と「エン」の中間。舌はつけない。',
    tip: '/ɑ̃/ より口が狭い。初級では区別できなくても通じる。',
    desc_en: 'Between "an" and "en", nasalised, with no n sound.',
    tip_en: 'A narrower mouth than /ɑ̃/. Confusing the two rarely blocks understanding early on.'
  },
  'ɔ̃': {
    fr: 'bon, non, on', kana: 'オン', en: '(no English equivalent)',
    closer: 'neither',
    desc: '「オン」。唇を丸めたまま鼻に抜く。舌はつけない。',
    tip: '唇の丸めが /ɑ̃/ との違い。bon /bɔ̃/ と banc /bɑ̃/。',
    desc_en: 'A nasalised "ohn" with rounded lips and no n.',
    tip_en: 'Lip rounding is what separates it from /ɑ̃/: bon /bɔ̃/ vs banc /bɑ̃/.'
  },
  'œ̃': {
    fr: 'un, brun', kana: 'アン', en: '(no English equivalent)',
    closer: 'neither',
    desc: '「アン」。現代のパリでは /ɛ̃/ とほぼ同じ。',
    tip: '/ɛ̃/ と同じに発音して構わない。多くのフランス人も区別していない。',
    desc_en: 'A nasalised "uhn".',
    tip_en: 'Most Parisians have merged this with /ɛ̃/. You may safely do the same.'
  },

  /* ---------- Semi-vowels ---------- */
  'j': {
    fr: 'yeux, fille', kana: 'イ', en: 'yes',
    closer: 'both',
    desc: '「ヤ行」の子音。',
    tip: '英語 yes の y と同じ。',
    desc_en: 'The y of yes.',
    tip_en: 'Identical in both languages. Nothing to relearn.'
  },
  'w': {
    fr: 'oui, moi', kana: 'ウ', en: 'we',
    closer: 'both',
    desc: '「ワ行」の子音。',
    tip: '英語 we の w と同じ。',
    desc_en: 'The w of we.',
    tip_en: 'Identical in both languages.'
  },
  'ɥ': {
    fr: 'huit, nuit', kana: 'ュ', en: '(no English equivalent)',
    closer: 'neither',
    desc: '/y/ を素早く発音したもの。',
    tip: '「ユイ」を一息で。lui, huit, nuit に出てくる。',
    desc_en: 'A /y/ said fast enough to become a glide.',
    tip_en: 'Round your lips, start on /y/, slide straight into the next vowel: lui, huit, nuit.'
  },

  /* ---------- Consonants ---------- */
  'p': {
    fr: 'papa', kana: 'プ', en: 'spin (no puff of air)',
    closer: 'ja',
    desc: '「パ行」。',
    tip: '英語の p のような息の破裂を出さない。日本語の「パ」がちょうどよい。',
    desc_en: 'The p of spin, not of pin.',
    tip_en: 'English p at the start of a word comes with a puff of air. French has none. Hold a tissue to your lips — it should not move.'
  },
  'b': {
    fr: 'bon', kana: 'ブ', en: 'boy',
    closer: 'both',
    desc: '「バ行」。',
    tip: '日英どちらとも同じ。',
    desc_en: 'The b of boy.',
    tip_en: 'Same in both languages.'
  },
  't': {
    fr: 'table', kana: 'トゥ', en: 'stop (no puff of air)',
    closer: 'ja',
    desc: '「タ行」。舌先を上の歯の裏に。',
    tip: '英語より舌を前に。息の破裂も出さない。',
    desc_en: 'The t of stop, with the tongue further forward.',
    tip_en: 'Touch the back of your upper teeth, not the ridge behind them. No puff of air.'
  },
  'd': {
    fr: 'deux', kana: 'ドゥ', en: 'dog',
    closer: 'ja',
    desc: '「ダ行」。舌先を上の歯の裏に。',
    tip: '英語より舌が前。',
    desc_en: 'The d of dog, with the tongue further forward.',
    tip_en: 'Against the teeth rather than the ridge behind them.'
  },
  'k': {
    fr: 'café', kana: 'ク', en: 'sky (no puff of air)',
    closer: 'ja',
    desc: '「カ行」。',
    tip: '息の破裂を出さない。',
    desc_en: 'The k of sky, not of key.',
    tip_en: 'No puff of air, unlike English word-initial k.'
  },
  'g': {
    fr: 'gare', kana: 'グ', en: 'go',
    closer: 'both',
    desc: '「ガ行」。',
    tip: '常に硬い g。gentil の g は /ʒ/ で別の音。',
    desc_en: 'The hard g of go.',
    tip_en: 'Always hard. The g of gentil is a different sound entirely, /ʒ/.'
  },
  'f': {
    fr: 'français', kana: 'フ', en: 'fun',
    closer: 'en',
    desc: '下唇を上の歯に当てる。',
    tip: '日本語の「フ」は両唇で息を出すだけなので不十分。英語の f と同じにする。',
    desc_en: 'The f of fun.',
    tip_en: 'Same in both languages.'
  },
  'v': {
    fr: 'vous', kana: 'ヴ', en: 'very',
    closer: 'en',
    desc: '下唇を上の歯に当てて濁らせる。',
    tip: '日本語に無い音。英語 very の v と同じ。b と混同しない。',
    desc_en: 'The v of very.',
    tip_en: 'Same in both languages. Nothing to relearn.'
  },
  's': {
    fr: 'salut', kana: 'ス', en: 'see',
    closer: 'both',
    desc: '「サ行」。',
    tip: '日英どちらとも同じ。',
    desc_en: 'The s of see.',
    tip_en: 'Same in both languages.'
  },
  'z': {
    fr: 'maison', kana: 'ズ', en: 'zoo',
    closer: 'en',
    desc: '濁った「ス」。',
    tip: '日本語の「ザ」は「ヅァ」寄りになりがち。英語 zoo のように息を止めずに。',
    desc_en: 'The z of zoo.',
    tip_en: 'Same in both languages. Note that a single s between vowels takes this sound: maison.'
  },
  'ʃ': {
    fr: 'chat', kana: 'シュ', en: 'she',
    closer: 'en',
    desc: '「シュ」。',
    tip: '英語 she の sh と同じ。',
    desc_en: 'The sh of she.',
    tip_en: 'Same in both languages. Spelled ch in French.'
  },
  'ʒ': {
    fr: 'je, jour', kana: 'ジュ', en: 'measure, vision',
    closer: 'en',
    desc: '「ジュ」だが舌先を歯につけない。',
    tip: '★重要★ 英語 measure の s がそのままこの音。日本語の「ジ」は先頭に「ド」が入る（ヂ）ので違う。息を止めずに擦り続ける。',
    desc_en: 'The s of measure, or the g of beige.',
    tip_en: 'English already has this sound. The only trap is spelling: French writes it j or soft g, where English never starts a word with it.'
  },
  'm': {
    fr: 'maman', kana: 'ム', en: 'me',
    closer: 'both',
    desc: '「マ行」。',
    tip: '日英どちらとも同じ。',
    desc_en: 'The m of me.',
    tip_en: 'Same in both languages.'
  },
  'n': {
    fr: 'non', kana: 'ヌ', en: 'no',
    closer: 'both',
    desc: '「ナ行」。',
    tip: '日英どちらとも同じ。',
    desc_en: 'The n of no.',
    tip_en: 'Same in both languages — but watch for nasal vowels, where the n is not pronounced at all.'
  },
  'ɲ': {
    fr: 'espagnol', kana: 'ニュ', en: 'canyon (ny)',
    closer: 'ja',
    desc: '「ニャ行」。',
    tip: '日本語の「ニャ・ニュ・ニョ」がそのまま使える。',
    desc_en: 'The ny of canyon, as one sound.',
    tip_en: 'Spelled gn. Not two sounds — the whole thing is a single consonant.'
  },
  'ŋ': {
    fr: 'parking', kana: 'ング', en: 'sing',
    closer: 'en',
    desc: '鼻濁音の「ング」。',
    tip: '英語由来の外来語にのみ出る。',
    desc_en: 'The ng of sing.',
    tip_en: 'Appears only in words borrowed from English.'
  },
  'l': {
    fr: 'le, elle', kana: 'ル', en: 'leaf (never "dark" l)',
    closer: 'ja',
    desc: '「ラ行」。舌先を上の歯の裏につける。',
    tip: '英語 ball のような舌が奥に引ける「暗い l」は使わない。常に leaf の l。',
    desc_en: 'Always the clear l of leaf, never the dark l of ball.',
    tip_en: 'English has two l sounds and uses the dark one at the end of words. French only ever has the clear one — keep the tongue tip forward even in elle, il, mal.'
  },
  'ʁ': {
    fr: 'Paris, rouge', kana: 'ル', en: '(no English equivalent)',
    closer: 'neither',
    desc: 'ラ行では無い。喉の奥・うがいの位置。',
    tip: '★最難関★ 英語の r（舌を巻く）とも日本語のラ行（舌先で弾く）とも全く別物。舌先は下の歯につけたまま動かさず、喉の奥を震わせる。うがいの音から入るとつかみやすい。カタカナの「ル」はあくまで位置の目印。',
    desc_en: 'Made at the back of the throat, where you gargle.',
    tip_en: 'Nothing like the English r. Do not curl or raise the tongue tip — leave it resting against your lower teeth and vibrate the very back of the throat instead. Start from a gargle, or from the ch of Scottish loch, then add voice.'
  }
};

/* Phonemes worth flagging on a phrase card: no equivalent in the
   learner's language, or a documented high-frequency mistake. */
window.HARD_PHONEMES = ['ʁ', 'y', 'ɑ̃', 'ɛ̃', 'ɔ̃', 'œ̃', 'ø', 'œ', 'ʒ', 'v', 'f', 'z', 'ɥ'];

window.getPhoneme = function (symbol) {
  return window.PHONEMES[symbol] || null;
};
