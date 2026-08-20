/* ============================================================
   Section 20 — Daily Routine, Part 1
   ============================================================ */

window.S20 = {
  id: 20,
  level: 'A1-A2',
  duration: '35分',
  title: { en: 'Daily Routine, Part 1', fr: 'Parler de son quotidien (1/2)' },

  goals: [
    '代名動詞のしくみを理解する',
    '朝の日課を順を追って言える',
    '時刻とともに行動を述べられる',
    'se lever の活用を主語ごとに言える'
  ],

  blocks: [

    {
      type: 'note',
      title: '代名動詞 — 自分に向かう動作',
      body: '日課を語るには「代名動詞（les verbes pronominaux）」が要ります。' +
            '動詞の前に me / te / se という代名詞が付く形で、' +
            '「自分自身に対してその動作をする」ことを表します。' +
            '日本語には対応する形がないので、最初は不思議に見えますが、規則は単純です。',
      list: [
        'réveiller … 誰かを起こす【他人に対して】',
        'se réveiller … 目を覚ます【自分に対して】',
        'laver … 洗う → se laver … 自分を洗う＝入浴する',
        'coucher … 寝かせる → se coucher … 寝る',
        '★ 代名詞は主語に合わせて変わる ★ je me / tu te / il se / nous nous / vous vous / ils se'
      ]
    },

    {
      type: 'conjugation',
      title: '動詞 se lever（起きる）',
      intro: '代名詞と動詞の両方が主語に合わせて変わります。se lever は è に変わるアクセント変化もある動詞です。',
      forms: [
        { pronoun: 'je',          form: 'me lève' },
        { pronoun: 'tu',          form: 'te lèves' },
        { pronoun: 'il / elle',   form: 'se lève' },
        { pronoun: 'nous',        form: 'nous levons' },
        { pronoun: 'vous',        form: 'vous levez' },
        { pronoun: 'ils / elles', form: 'se lèvent' }
      ],
      note: 'nous と vous のときだけ「ヌ・ルヴォン」「ヴ・ルヴェ」とアクセントが消えます。他の4つは「レーヴ」で同じ音です。否定文は代名詞ごとはさみます … Je ne me lève pas tôt。'
    },

    {
      type: 'tiles',
      title: '朝の日課',
      intro: 'ほとんどが代名動詞です。原形のまま再生されます。',
      items: [
        { label: 'se réveiller', fr: 'se réveiller', en: '目を覚ます' },
        { label: 'se lever', fr: 'se lever', en: '起きる' },
        { label: 'se doucher', fr: 'se doucher', en: 'シャワーを浴びる' },
        { label: 'se laver', fr: 'se laver', en: '体を洗う' },
        { label: 'se brosser les dents', fr: 'se brosser les dents', en: '歯を磨く' },
        { label: "s'habiller", fr: "s'habiller", en: '服を着る' },
        { label: 'se coiffer', fr: 'se coiffer', en: '髪を整える' },
        { label: 'se raser', fr: 'se raser', en: 'ひげを剃る' },
        { label: 'se maquiller', fr: 'se maquiller', en: '化粧をする' },
        { label: 'prendre le petit-déjeuner', fr: 'prendre le petit-déjeuner', en: '朝食をとる' },
        { label: 'partir au travail', fr: 'partir au travail', en: '仕事に出かける' },
        { label: 'se dépêcher', fr: 'se dépêcher', en: '急ぐ' }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: '体の部分には所有形容詞を使わない',
      body: '代名動詞と体の部分が組み合わさるとき、フランス語は所有形容詞ではなく定冠詞を使います。' +
            '「誰の歯か」は代名詞 me / te / se がすでに示しているためです。',
      list: [
        '○ Je me brosse les dents … 歯を磨く',
        '× Je brosse mes dents … 英語 I brush my teeth につられた誤り',
        '○ Il se lave les mains … 手を洗う',
        '○ Elle se coupe les cheveux … 髪を切る',
        '★ この規則は代名動詞のときだけ ★ J\'ai les cheveux bruns では所有形容詞も定冠詞のまま'
      ]
    },

    {
      type: 'phrases',
      title: '一日の始まりを言う',
      items: [
        {
          fr: 'Je me réveille à sept heures',
          en: 'I wake up at seven',
          ja: '7時に目が覚めます',
          register: 'neutral',
          ja_when: '時刻には à を付けます。se réveiller（目が覚める）と se lever（体を起こす）は別の動作として区別されます。',
          when: 'se réveiller is waking; se lever is actually getting out of bed.'
        },
        {
          fr: 'Je me lève tout de suite',
          en: 'I get up straight away',
          ja: 'すぐに起きます',
          register: 'neutral',
          ja_when: '目覚めてから起き上がるまで。二度寝するなら Je fais la grasse matinée（朝寝坊する）。',
          when: 'faire la grasse matinée is the phrase for a lie-in.'
        },
        {
          fr: 'Je me douche et je m\'habille',
          en: 'I shower and get dressed',
          ja: 'シャワーを浴びて服を着ます',
          register: 'neutral',
          ja_when: '代名動詞を並べるときは、それぞれに代名詞が必要です。je me ... et je m\' ... と繰り返します。',
          when: 'Each pronominal verb keeps its own pronoun.'
        },
        {
          fr: 'Je me brosse les dents',
          en: 'I brush my teeth',
          ja: '歯を磨きます',
          register: 'neutral',
          ja_when: '★ mes dents ではなく les dents ★ 代名詞 me がすでに「自分の」を示しています。',
          when: 'les dents, never mes dents — the me already says whose.'
        },
        {
          fr: 'Je prends le petit-déjeuner à huit heures',
          en: 'I have breakfast at eight',
          ja: '8時に朝食をとります',
          register: 'neutral',
          ja_when: '★ 食事は prendre ★ manger le petit-déjeuner とは言いません。prendre un café も同じ用法。',
          when: 'Meals take prendre, not manger.'
        },
        {
          fr: 'Je pars au travail à neuf heures',
          en: 'I leave for work at nine',
          ja: '9時に仕事に出ます',
          register: 'neutral',
          ja_when: 'partir（出発する）+ à。partir de なら「〜から出発する」。',
          when: 'partir à a destination, partir de a starting point.'
        },
        {
          fr: 'Je suis toujours en retard le matin',
          en: "I'm always late in the morning",
          ja: '朝はいつも遅れます',
          register: 'casual',
          ja_when: 'le matin に定冠詞が付くと「毎朝」の意味【§9 の規則】。',
          when: 'The article makes it habitual, as in §9.'
        },
        {
          fr: 'Je ne me lève pas tôt le week-end',
          en: "I don't get up early at weekends",
          ja: '週末は早起きしません',
          register: 'casual',
          ja_when: '★代名動詞の否定★ ne と pas が「代名詞＋動詞」の全体をはさみます。Je me ne lève pas は誤り。',
          when: 'ne and pas wrap the pronoun and the verb together.'
        }
      ]
    },

    {
      type: 'note',
      tone: 'warm',
      title: '順序を示すつなぎ言葉',
      body: '日課を語るときは、行動を並べるだけでなく順序の語でつなぐと一気に自然になります。',
      list: [
        "D'abord … まず",
        'Ensuite / Puis … それから',
        'Après … その後',
        'Enfin / Finalement … 最後に',
        'Vers … 〜ごろ（vers huit heures で8時ごろ）',
        'Généralement / D\'habitude … だいたい・普段は'
      ]
    },

    {
      type: 'dialogue',
      title: '会話：朝のルーティン',
      scene: 'ホームステイ先で、朝の過ごし方を話しています。',
      lines: [
        { who: 'H', fr: 'Tu te lèves à quelle heure normalement ?', en: 'What time do you normally get up?', ja: '普段は何時に起きるの？' },
        { who: 'Y', fr: "D'habitude je me réveille à six heures et demie.", en: 'Usually I wake up at half past six.', ja: 'たいてい6時半に目が覚めます。' },
        { who: 'H', fr: "Si tôt ! Et après ?", en: 'So early! And then?', ja: 'そんなに早く。それから？' },
        { who: 'Y', fr: "Je me douche, je m'habille, puis je prends le petit-déjeuner.", en: 'I shower, get dressed, then have breakfast.', ja: 'シャワーを浴びて、着替えて、朝食をとります。' },
        { who: 'H', fr: 'Tu pars au travail à quelle heure ?', en: 'What time do you leave for work?', ja: '仕事へは何時に出るの？' },
        { who: 'Y', fr: "Vers huit heures. Mais le week-end, je ne me lève pas tôt !", en: "Around eight. But at weekends I don't get up early!", ja: '8時ごろ。でも週末は早起きしません。' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: '「歯を磨きます」の正しい形は？',
          options: ['Je brosse mes dents', 'Je me brosse les dents', 'Je me brosse mes dents', 'Je brosse les dents'],
          answer: 1,
          why: '代名動詞のときは所有形容詞ではなく定冠詞。me がすでに「自分の」を示しています。'
        },
        {
          q: '代名動詞の否定文で正しいのは？',
          options: ['Je me ne lève pas', 'Je ne me lève pas', 'Je ne lève me pas', 'Ne je me lève pas'],
          answer: 1,
          why: 'ne と pas が「代名詞＋動詞」の全体をはさみます。'
        },
        {
          q: '「朝食をとる」で使う動詞は？',
          options: ['manger', 'prendre', 'faire', 'avoir'],
          answer: 1,
          why: '食事は prendre。prendre le petit-déjeuner / prendre un café。'
        },
        {
          q: 'se réveiller と se lever の違いは？',
          options: ['同じ意味', '目が覚める / 起き上がる', '起きる / 寝る', '朝 / 夜'],
          answer: 1,
          why: 'se réveiller は目が覚めること、se lever はベッドから出ること。フランス語は明確に区別します。'
        }
      ]
    }
  ]
};
