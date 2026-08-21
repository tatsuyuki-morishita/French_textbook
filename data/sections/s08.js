/* ============================================================
   Section 8 — Talking About Your Family
   ============================================================ */

window.S8 = {
  id: 8,
  level: 'A1',
  duration: '41分',
  title: { en: 'Talking About Your Family', fr: 'Parler de sa famille' },

  goals: [
    '家族の呼び名を男女の区別込みで言える',
    '所有形容詞 mon / ma / mes を、所有物の性と数で選べる',
    '家族構成と婚姻状況を説明できる',
    '住んでいる場所とその種類を言える'
  ],

  blocks: [

    {
      type: 'tiles',
      title: '家族の呼び名',
      intro: '冠詞ごと覚えると性別も同時に頭に入ります。',
      items: [
        { label: 'la famille', fr: 'la famille', ja: '家族' },
        { label: 'le père', fr: 'le père', ja: '父' },
        { label: 'la mère', fr: 'la mère', ja: '母' },
        { label: 'les parents', fr: 'les parents', ja: '両親' },
        { label: 'le fils', fr: 'le fils', ja: '息子' },
        { label: 'la fille', fr: 'la fille', ja: '娘・女の子' },
        { label: 'les enfants', fr: 'les enfants', ja: '子供たち' },
        { label: 'le frère', fr: 'le frère', ja: '兄弟' },
        { label: 'la sœur', fr: 'la sœur', ja: '姉妹' },
        { label: 'le grand-père', fr: 'le grand-père', ja: '祖父' },
        { label: 'la grand-mère', fr: 'la grand-mère', ja: '祖母' },
        { label: "l'oncle", fr: "l'oncle", ja: 'おじ', ipa: 'lɔ̃kl' },
        { label: 'la tante', fr: 'la tante', ja: 'おば' },
        { label: 'le cousin', fr: 'le cousin', ja: 'いとこ（男）→ la cousine' },
        { label: 'le mari', fr: 'le mari', ja: '夫' },
        { label: 'la femme', fr: 'la femme', ja: '妻・女性' },
        { label: 'le neveu', fr: 'le neveu', ja: '甥' },
        { label: 'la nièce', fr: 'la nièce', ja: '姪', ipa: 'la njɛs' }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: '発音とつづりの落とし穴',
      list: [
        'le fils … 「フィス」。s を発音する数少ない例外です。「フィル」ではありません',
        'la fille … 「フィーユ」。ll が /j/ の音になります。fils と紛らわしいので注意',
        'la femme … 「ファム」。em を「アン」と読まない例外中の例外',
        'la sœur … œ は「ウ」の唇で「エ」。英語 her の母音が近い',
        'フランス語は兄と弟を区別しない。必要なら grand frère / petit frère と言う'
      ]
    },

    {
      type: 'note',
      title: '所有形容詞 — 持ち主ではなく「持ち物」で形が決まる',
      body: '英語の my は何にでも my です。フランス語は違い、後ろに来る名詞の性と数で形が変わります。' +
            'ここが日本語話者・英語話者の両方がつまずく最大のポイントです。',
      list: [
        'mon père（父）… père が男性名詞だから mon',
        'ma mère（母）… mère が女性名詞だから ma',
        'mes parents（両親）… 複数だから mes',
        '★ 話し手の性別は一切関係ない ★ 男性が「私の母」と言っても ma mère',
        '★例外★ 女性名詞でも母音で始まれば mon になる。mon amie（発音の都合）'
      ]
    },

    {
      type: 'conjugation',
      title: '所有形容詞の一覧（男性 / 女性 / 複数）',
      intro: '左が持ち主、右が「男性名詞 / 女性名詞 / 複数名詞」に付く形です。',
      forms: [
        { pronoun: 'je の',    form: 'mon / ma / mes' },
        { pronoun: 'tu の',    form: 'ton / ta / tes' },
        { pronoun: 'il elle の', form: 'son / sa / ses' },
        { pronoun: 'nous の',  form: 'notre / notre / nos' },
        { pronoun: 'vous の',  form: 'votre / votre / vos' },
        { pronoun: 'ils の',   form: 'leur / leur / leurs' }
      ],
      note: 'son / sa は「彼の」「彼女の」の両方を意味します。son père は文脈次第で「彼の父」にも「彼女の父」にもなる。区別したいときは le père de Marie のように言い換えます。'
    },

    {
      type: 'phrases',
      title: '家族について話す',
      items: [
        {
          fr: "J'ai une grande famille",
          en: 'I have a big family',
          ja: '大家族です',
          register: 'neutral',
          ja_when: '家族の話を始めるときの入り口。grande は famille が女性名詞なので e が付いています。',
          when: 'grande agrees with the feminine famille.'
        },
        {
          fr: 'Mon père est médecin',
          en: 'My father is a doctor',
          ja: '父は医者です',
          register: 'neutral',
          ja_when: '職業なので冠詞なし。père は男性名詞なので mon。',
          when: 'No article before the profession.'
        },
        {
          fr: 'Ma mère travaille à Tokyo',
          en: 'My mother works in Tokyo',
          ja: '母は東京で働いています',
          register: 'neutral',
          ja_when: 'mère が女性名詞なので ma。話し手が男性でも ma のままです。',
          when: 'ma regardless of the speaker\'s own gender.'
        },
        {
          fr: 'Je suis fils unique',
          en: "I'm an only child (male)",
          ja: '一人っ子です（男性）',
          register: 'neutral',
          ja_when: '女性なら fille unique。兄弟の有無を聞かれたときの答え方。',
          when: 'Women say fille unique.'
        },
        {
          fr: 'Je suis célibataire',
          en: "I'm single",
          ja: '独身です',
          register: 'neutral',
          ja_when: '男女同形。marié(e)（既婚）、divorcé(e)（離婚）と並ぶ婚姻状況の語。書類でもよく見ます。',
          when: 'Same form for both genders. Appears on official forms.'
        },
        {
          fr: 'Elle est mariée',
          en: 'She is married',
          ja: '彼女は結婚しています',
          register: 'neutral',
          ja_when: '女性なので e が付きますが音は同じ。男性なら Il est marié。',
          when: 'The extra e is silent — marié and mariée sound identical.'
        },
        {
          fr: 'Mes grands-parents habitent à la campagne',
          en: 'My grandparents live in the countryside',
          ja: '祖父母は田舎に住んでいます',
          register: 'neutral',
          ja_when: '複数なので mes。campagne は「田舎・地方」で、都会 ville の対義語です。',
          when: 'à la campagne is the standard opposition to en ville.'
        },
        {
          fr: 'Comment est ta famille ?',
          en: 'What is your family like?',
          ja: 'ご家族はどんな感じ？',
          register: 'casual',
          ja_when: 'comment est で「どんな様子か」を尋ねます。人数を聞きたいなら Tu as des frères et sœurs ?',
          when: 'comment est asks what something is like, not how it is doing.'
        }
      ]
    },

    {
      type: 'tiles',
      title: '住んでいる場所',
      items: [
        { label: 'une maison', fr: "J'habite dans une maison", ja: '一軒家' },
        { label: 'un appartement', fr: "J'habite dans un appartement", ja: 'アパート' },
        { label: 'en ville', fr: "J'habite en ville", ja: '街中' },
        { label: 'à la campagne', fr: "J'habite à la campagne", ja: '田舎' },
        { label: 'en banlieue', fr: "J'habite en banlieue", ja: '郊外' },
        { label: 'au bord de la mer', fr: "J'habite au bord de la mer", ja: '海のそば' }
      ]
    },

    {
      type: 'dialogue',
      title: '会話：家族の話',
      scene: 'ホームステイ先の食卓。ホストファミリーが家族について尋ねています。',
      lines: [
        { who: 'H', fr: 'Tu as des frères et sœurs ?', en: 'Do you have brothers and sisters?', ja: '兄弟姉妹はいるの？' },
        { who: 'Y', fr: "Oui, j'ai un grand frère et une petite sœur.", en: 'Yes, I have an older brother and a younger sister.', ja: 'はい、兄と妹がいます。' },
        { who: 'H', fr: "Et tes parents, qu'est-ce qu'ils font ?", en: 'And your parents, what do they do?', ja: 'ご両親は何をされているの？' },
        { who: 'Y', fr: 'Mon père est ingénieur et ma mère est professeure.', en: 'My father is an engineer and my mother is a teacher.', ja: '父は技術者で、母は教師です。' },
        { who: 'H', fr: 'Ils habitent à Tokyo aussi ?', en: 'Do they live in Tokyo too?', ja: 'ご両親も東京に？' },
        { who: 'Y', fr: "Non, ils habitent à la campagne, près d'Osaka.", en: 'No, they live in the countryside, near Osaka.', ja: 'いえ、大阪の近くの田舎に住んでいます。' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: '男性が「私の母」と言うときは？',
          options: ['mon mère', 'ma mère', 'mes mère', 'son mère'],
          answer: 1,
          why: '所有形容詞は持ち主ではなく持ち物の性で決まります。mère は女性名詞なので、話し手が男性でも ma。'
        },
        {
          q: 'le fils の正しい読み方は？',
          options: ['フィル', 'フィス', 'フィーユ', 'フィ'],
          answer: 1,
          why: '語末の s を発音する例外。「フィス」です。la fille（フィーユ）と混同しないように。'
        },
        {
          q: 'mon amie が ma amie にならないのはなぜ？',
          options: ['amie が男性名詞だから', '母音の前では発音しにくいから', '複数だから', '例外に規則はない'],
          answer: 1,
          why: '女性名詞でも母音で始まれば mon を使います。ma amie は発音しにくいためです。'
        },
        {
          q: '「祖父母は田舎に住んでいます」の所有形容詞は？',
          options: ['mon', 'ma', 'mes', 'notre'],
          answer: 2,
          why: 'grands-parents は複数なので mes です。'
        }
      ]
    }
  ]
};
