/* ============================================================
   Section 2 — Making Acquaintance & Nationalities
   ============================================================ */

window.S2 = {
  id: 2,
  level: 'A0',
  duration: '26分',
  title: { en: 'Making Acquaintance & Nationalities', fr: 'Faire connaissance — Les nationalités' },

  goals: [
    'フランス語で最も重要な動詞 être を6つの形すべてで言える',
    '自分の国籍を、男性形・女性形を正しく選んで言える',
    '相手の出身を尋ね、自分の出身を答えられる',
    '国名につく le / la / les を区別できる'
  ],

  blocks: [

    {
      type: 'conjugation',
      title: '動詞 être（〜である）',
      intro: 'フランス語で一番よく使う動詞。完全に不規則なので、理屈より音で丸暗記してしまうのが速いです。',
      forms: [
        { pronoun: 'je',          form: 'suis' },
        { pronoun: 'tu',          form: 'es' },
        { pronoun: 'il / elle',   form: 'est' },
        { pronoun: 'nous',        form: 'sommes' },
        { pronoun: 'vous',        form: 'êtes' },
        { pronoun: 'ils / elles', form: 'sont' }
      ],
      note: 'tu es と il est は音がどちらも「エ」でほぼ同じ。主語で聞き分けます。vous êtes は必ずリエゾンして「ヴゼットゥ」。ここを切って「ヴ・エットゥ」と言うと不自然に聞こえます。'
    },

    {
      type: 'note',
      tone: 'warm',
      title: '男性形・女性形 — 話し手の性で変わる',
      body: '英語の I am Japanese と違い、フランス語は話している人の性別で語尾が変わります。' +
            '基本ルールは「女性形は男性形に e を足す」。ただし音まで変わるかどうかは、足した e の前の文字で決まります。',
      list: [
        '子音で終わる男性形 + e → その子音が発音されるようになる。français /フランセ/ → française /フランセーズ/',
        '母音で終わる男性形 + e → 音は変わらない。espagnol は例外で男女とも同じ音',
        '-e で終わる形容詞（russe, belge, suisse）は男女同形。何も足さない',
        '-ien → -ienne は音が大きく変わる。italien /イタリヤン/ → italienne /イタリエンヌ/'
      ]
    },

    {
      type: 'phrases',
      title: '国籍を言う',
      intro: '国籍は小文字で書きます（Je suis japonais）。大文字にすると「日本人という人物」を指す名詞になります。',
      items: [
        {
          fr: 'Je suis japonais',
          en: 'I am Japanese (male speaker)',
          ja: '私は日本人です（男性）',
          register: 'neutral',
          ja_when: '男性が言う形。語末の s は発音しません。女性なら Je suis japonaise となり、語末の「ズ」が聞こえるようになります。',
          when: 'Said by a male speaker. The final s stays silent.'
        },
        {
          fr: 'Je suis japonaise',
          en: 'I am Japanese (female speaker)',
          ja: '私は日本人です（女性）',
          register: 'neutral',
          ja_when: '女性が言う形。e が付くことで前の s が「ズ」と発音されます。男性形との違いはこの語尾の音だけ。',
          when: 'The added e makes the preceding s audible as /z/.'
        },
        {
          fr: "D'où venez-vous ?",
          en: 'Where are you from?',
          ja: 'どちらのご出身ですか？',
          register: 'formal',
          ja_when: '初対面の大人・仕事相手に。空港、ホテル、会議など。tu の相手には Tu viens d\'où ? を使います。',
          when: 'To someone you address as vous. The casual version is Tu viens d\'où ?'
        },
        {
          fr: "Tu viens d'où ?",
          en: 'Where are you from?',
          ja: 'どこ出身なの？',
          register: 'casual',
          ja_when: '友達・同年代に。語順が普通の文のままで、最後を上げるだけの一番くだけた聞き方です。',
          when: 'Statement word order with rising intonation — the most casual form.'
        },
        {
          fr: 'Je viens du Japon',
          en: 'I come from Japan',
          ja: '日本から来ました',
          register: 'neutral',
          ja_when: '国名が男性名詞なら de + le = du。Je viens de France（女性名詞）、Je viens des États-Unis（複数）と形が変わります。',
          when: 'de + le contracts to du before a masculine country.'
        },
        {
          fr: "J'habite à Tokyo",
          en: 'I live in Tokyo',
          ja: '東京に住んでいます',
          register: 'neutral',
          ja_when: '都市名の前は必ず à。国名の前だと en France / au Japon と変わるので、都市と国で使い分けます。',
          when: 'Cities take à; countries take en or au.'
        },
        {
          fr: 'Vous êtes français ?',
          en: 'Are you French?',
          ja: 'フランスの方ですか？',
          register: 'formal',
          ja_when: '語尾を上げるだけの疑問文。フランス語の会話では、この形が一番よく使われます。教科書的な Êtes-vous français ? は硬い書き言葉寄り。',
          when: 'Rising intonation on a statement — by far the most common spoken question form.'
        }
      ]
    },

    {
      type: 'tiles',
      title: '国籍（男性形 / 女性形）',
      intro: 'タップすると男性形が再生されます。女性形は語尾の子音が聞こえるようになる、と覚えてください。',
      items: [
        { label: 'français', fr: 'français', en: 'フランス人 → française' },
        { label: 'japonais', fr: 'japonais', en: '日本人 → japonaise' },
        { label: 'anglais', fr: 'anglais', en: 'イギリス人 → anglaise' },
        { label: 'américain', fr: 'américain', en: 'アメリカ人 → américaine' },
        { label: 'allemand', fr: 'allemand', en: 'ドイツ人 → allemande' },
        { label: 'espagnol', fr: 'espagnol', en: 'スペイン人 → espagnole' },
        { label: 'italien', fr: 'italien', en: 'イタリア人 → italienne' },
        { label: 'chinois', fr: 'chinois', en: '中国人 → chinoise' },
        { label: 'coréen', fr: 'coréen', en: '韓国人 → coréenne', ipa: 'kɔʁeɛ̃' },
        { label: 'canadien', fr: 'canadien', en: 'カナダ人 → canadienne' },
        { label: 'brésilien', fr: 'brésilien', en: 'ブラジル人 → brésilienne', ipa: 'bʁeziljɛ̃' },
        { label: 'russe', fr: 'russe', en: 'ロシア人（男女同形）' },
        { label: 'belge', fr: 'belge', en: 'ベルギー人（男女同形）', ipa: 'bɛlʒ' },
        { label: 'suisse', fr: 'suisse', en: 'スイス人（男女同形）', ipa: 'sɥis' },
        { label: 'mexicain', fr: 'mexicain', en: 'メキシコ人 → mexicaine', ipa: 'mɛksikɛ̃' },
        { label: 'australien', fr: 'australien', en: 'オーストラリア人 → australienne', ipa: 'ɔstʁaljɛ̃' }
      ]
    },

    {
      type: 'tiles',
      title: '国名と冠詞',
      intro: '国名には必ず le / la / les が付きます。-e で終わる国はほぼ女性、それ以外はほぼ男性、という目安が使えます。',
      items: [
        { label: 'la France', fr: 'la France', en: '女性' },
        { label: 'le Japon', fr: 'le Japon', en: '男性' },
        { label: "l'Angleterre", fr: "l'Angleterre", en: '女性', ipa: 'lɑ̃glətɛʁ' },
        { label: "l'Allemagne", fr: "l'Allemagne", en: '女性', ipa: 'lalmaɲ' },
        { label: "l'Espagne", fr: "l'Espagne", en: '女性', ipa: 'lɛspaɲ' },
        { label: "l'Italie", fr: "l'Italie", en: '女性', ipa: 'litali' },
        { label: 'la Chine', fr: 'la Chine', en: '女性', ipa: 'la ʃin' },
        { label: 'le Brésil', fr: 'le Brésil', en: '男性', ipa: 'lə bʁezil' },
        { label: 'le Canada', fr: 'le Canada', en: '男性' },
        { label: 'la Russie', fr: 'la Russie', en: '女性', ipa: 'la ʁysi' },
        { label: 'les États-Unis', fr: 'les États-Unis', en: '複数', ipa: 'lez etazyni' },
        { label: "l'Australie", fr: "l'Australie", en: '女性', ipa: 'lɔstʁali' }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: '「〜に住む・〜へ行く」で冠詞が変わる',
      list: [
        '女性の国 → en：J\'habite en France / Je vais en Italie',
        '男性の国 → au：J\'habite au Japon / Je vais au Canada',
        '複数の国 → aux：Je vais aux États-Unis',
        '母音で始まる国 → en：en Angleterre, en Australie（男女問わず）',
        '都市 → à：à Paris, à Tokyo, à Montréal'
      ]
    },

    {
      type: 'dialogue',
      title: '会話：出身を尋ねる',
      scene: '語学学校の初日。同じクラスになった2人が自己紹介しています。',
      lines: [
        { who: 'A', fr: 'Bonjour ! Vous êtes français ?', en: 'Hello! Are you French?', ja: 'こんにちは。フランスの方ですか？' },
        { who: 'B', fr: 'Non, je suis canadien. Et vous ?', en: "No, I'm Canadian. And you?", ja: 'いいえ、カナダ人です。あなたは？' },
        { who: 'A', fr: 'Moi, je suis japonaise. Je viens de Tokyo.', en: "Me, I'm Japanese. I come from Tokyo.", ja: '私は日本人です。東京から来ました。' },
        { who: 'B', fr: "Ah, j'adore le Japon !", en: 'Ah, I love Japan!', ja: 'へえ、日本大好きです！' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: 'vous に対応する être の形は？',
          options: ['sommes', 'êtes', 'sont', 'es'],
          answer: 1,
          why: 'vous êtes。リエゾンして「ヴゼットゥ」と一息で言います。'
        },
        {
          q: '女性が「私は日本人です」と言うときは？',
          options: ['Je suis japonais', 'Je suis japonaise', 'Je suis Japon', 'Je suis du japonais'],
          answer: 1,
          why: '女性形は e を足して japonaise。この e のおかげで s が「ズ」と発音されます。'
        },
        {
          q: '「日本に住んでいます」の正しい形は？',
          options: ['J\'habite en Japon', 'J\'habite au Japon', 'J\'habite à Japon', 'J\'habite le Japon'],
          answer: 1,
          why: 'le Japon は男性名詞なので au。女性名詞の France なら en France です。'
        },
        {
          q: '男女で形が変わらない国籍はどれ？',
          options: ['italien', 'allemand', 'russe', 'américain'],
          answer: 2,
          why: 'すでに -e で終わっている russe / belge / suisse は男女同形です。'
        }
      ]
    }
  ]
};
