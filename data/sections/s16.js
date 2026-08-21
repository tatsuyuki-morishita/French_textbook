/* ============================================================
   Section 16 — Suggesting an Outing, Part 1
   ============================================================ */

window.S16 = {
  id: 16,
  level: 'A1-A2',
  duration: '51分',
  title: { en: 'Suggesting an Outing, Part 1', fr: 'Proposer une sortie (1/2)' },

  goals: [
    '5通りの誘い方を、丁寧さと親しさで選び分けられる',
    '誘いを気持ちよく受けられる',
    '角を立てずに断れる',
    'On + 現在形が誘いになる感覚をつかむ'
  ],

  blocks: [

    {
      type: 'note',
      title: '誘い方は「距離」で選ぶ',
      body: 'フランス語には誘い方の型がいくつもあり、どれを選ぶかで相手との距離感が伝わります。' +
            '日本語で「行きませんか」「行かない？」「行こうよ」を使い分けるのと同じ感覚です。',
      list: [
        'On pourrait + 原形 ? … 〜できるかも（一番柔らかい・押しつけない）',
        'Ça te dit de + 原形 ? … 〜する気ある？（親しい相手・自然な会話）',
        'Tu veux + 原形 ? … 〜したい？（直接的・友達）',
        'Si on + 半過去 ? … 〜しない？（提案らしい提案）',
        'On + 現在形 ? … 〜する？（最も短く、最もよく使われる）'
      ]
    },

    {
      type: 'phrases',
      title: '誘う',
      items: [
        {
          fr: 'On pourrait aller au cinéma ?',
          en: 'Could we go to the cinema?',
          ja: '映画に行くのはどう？',
          register: 'neutral',
          ja_when: '条件法を使った柔らかい誘い方。断られても気まずくならないので、あまり親しくない相手や、断られる可能性がある誘いに向いています。',
          when: 'The conditional softens it — easy to decline without awkwardness.'
        },
        {
          fr: 'Tu veux sortir ce soir ?',
          en: 'Do you want to go out tonight?',
          ja: '今夜出かけない？',
          register: 'casual',
          ja_when: '直球。友達や親しい同僚に。vouloir + 動詞の原形。',
          when: 'Direct. Friends and close colleagues.'
        },
        {
          fr: "Ça te dit d'aller prendre un café ?",
          en: 'Do you feel like getting a coffee?',
          ja: 'コーヒーでも飲みに行かない？',
          literal: 'それはあなたに言いますか',
          register: 'casual',
          ja_when: '★ネイティブが最もよく使う形のひとつ★ 直訳は変ですが「〜する気ある？」という意味の決まり文句。vous なら Ça vous dit de ...',
          when: 'Very idiomatic. The literal translation makes no sense — learn it whole.'
        },
        {
          fr: 'Si on allait au restaurant ?',
          en: 'How about going to a restaurant?',
          ja: 'レストランにでも行かない？',
          register: 'neutral',
          ja_when: 'Si on + 半過去 で提案になります。「もし〜したら」の形ですが、意味は誘いです。少し大人っぽい響き。',
          when: 'Si on + imperfect is a proposal, not a hypothetical.'
        },
        {
          fr: "J'ai envie d'aller au théâtre",
          en: 'I feel like going to the theatre',
          ja: '劇場に行きたい気分',
          register: 'casual',
          ja_when: '直接誘わずに願望だけ述べる形。相手が乗ってくれば誘いになります。avoir envie de + 原形。',
          when: 'States a wish rather than issuing an invitation — leaves room for the other person.'
        },
        {
          fr: 'On fait une promenade ?',
          en: 'Shall we go for a walk?',
          ja: '散歩する？',
          register: 'casual',
          ja_when: '★最短形★ On + 現在形 + 上げ調子。これだけで誘いになります。会話で圧倒的によく使われる形。',
          when: 'The shortest form: on + present + rising intonation. Extremely common.'
        },
        {
          fr: 'Ça vous dirait de venir dîner ?',
          en: 'Would you like to come for dinner?',
          ja: '夕食にいらっしゃいませんか？',
          register: 'formal',
          ja_when: 'Ça te dit の丁寧版かつ条件法。上司や年上を家に招くときなど、格式が必要な場面に。',
          when: 'The formal, conditional version — inviting a superior or an elder.'
        }
      ]
    },

    {
      type: 'phrases',
      title: '受ける',
      intro: 'フランス語では喜びをはっきり言葉にするのが自然です。日本語の「あ、いいですね」よりも一段強い表現が普通に使われます。',
      items: [
        {
          fr: 'Oui, avec plaisir !',
          en: 'Yes, with pleasure!',
          ja: 'ぜひ喜んで！',
          register: 'neutral',
          ja_when: '最も上品で気持ちのよい受け方。フォーマルでもカジュアルでも使えます。',
          when: 'Gracious in any register.'
        },
        {
          fr: 'Bonne idée !',
          en: 'Good idea!',
          ja: 'いいね！',
          register: 'casual',
          ja_when: '短く即答できる万能の受け。idée が女性名詞なので bonne。Bon idée は誤りです。',
          when: 'idée is feminine, hence bonne — never bon idée.'
        },
        {
          fr: "D'accord, ça marche !",
          en: 'OK, that works!',
          ja: 'オッケー、それでいこう！',
          register: 'casual',
          ja_when: 'ça marche は「うまくいく・それで大丈夫」。予定の合意を示す会話的な表現。',
          when: 'ça marche confirms a plan is agreed.'
        },
        {
          fr: "Super, j'adorerais !",
          en: "Great, I'd love to!",
          ja: 'すごい、ぜひ！',
          register: 'casual',
          ja_when: '強い乗り気を示す。adorerais は条件法で「〜したいところです」という控えめな響きを加えています。',
          when: 'The conditional adds warmth without sounding pushy.'
        },
        {
          fr: 'Pourquoi pas !',
          en: 'Why not!',
          ja: 'いいんじゃない！',
          register: 'casual',
          ja_when: '軽い同意。「熱烈に賛成」ではないが前向き、という微妙な温度。日本語の「まあ、いいよ」に近い。',
          when: 'Positive but not enthusiastic — a mild yes.'
        },
        {
          fr: "C'est une excellente idée",
          en: "That's an excellent idea",
          ja: 'それはとてもいい考えですね',
          register: 'formal',
          ja_when: '丁寧な受け方。仕事の場面や、目上の相手の提案に対して。',
          when: 'Formal — a superior\'s suggestion, or a work setting.'
        }
      ]
    },

    {
      type: 'note',
      tone: 'warm',
      title: '断り方には「型」がある',
      body: 'フランス語で誘いを断るときは、Non の一語で終わらせません。' +
            '3つの部品を並べるのが定型で、これを外すと冷たく響きます。',
      list: [
        '① 残念さを示す … Désolé(e) / C\'est gentil / Ah, dommage',
        '② できない理由を言う … je ne peux pas / je suis occupé(e) / j\'ai déjà quelque chose',
        '③ 次につなげる … une autre fois ? / la prochaine fois !',
        '★ 理由は詳しく言わなくてよい ★ 「予定がある」で十分で、深掘りされることはありません'
      ]
    },

    {
      type: 'phrases',
      title: '断る',
      items: [
        {
          fr: 'Désolé, je ne peux pas',
          en: "Sorry, I can't",
          ja: 'ごめん、無理なんだ',
          register: 'neutral',
          ja_when: '基本形。女性は désolée と書きますが音は同じ。これだけだとやや素っ気ないので、理由か代案を足すのが普通です。',
          when: 'On its own this is a bit curt — add a reason or an alternative.'
        },
        {
          fr: 'Je suis occupé ce soir',
          en: "I'm busy tonight",
          ja: '今夜は予定があって',
          register: 'neutral',
          ja_when: '理由の定番。詳細を言う必要はありません。女性は occupée。',
          when: 'No further detail is expected.'
        },
        {
          fr: 'Une autre fois peut-être ?',
          en: 'Another time perhaps?',
          ja: 'また今度どう？',
          register: 'casual',
          ja_when: '★これを付けるかどうかで印象が大きく変わる★ 断りの後に必ず添えたい一言。',
          when: 'The single line that keeps a refusal warm.'
        },
        {
          fr: "C'est gentil mais je ne peux pas",
          en: "That's kind but I can't",
          ja: 'ありがたいけど、無理なんだ',
          register: 'neutral',
          ja_when: '相手の気遣いを認めてから断る形。丁寧で角が立ちません。',
          when: 'Acknowledges the offer before declining.'
        },
        {
          fr: "J'ai déjà quelque chose de prévu",
          en: 'I already have something planned',
          ja: 'もう予定が入っていて',
          register: 'neutral',
          ja_when: '具体的な内容を言わずに断れる便利な表現。prévu は「予定された」。',
          when: 'Declines without revealing what the plan is.'
        },
        {
          fr: 'Ah, dommage ! Je ne suis pas là ce week-end',
          en: "Oh, what a shame! I'm not here this weekend",
          ja: 'あー残念、今週末はいないんだ',
          register: 'casual',
          ja_when: 'dommage（残念）は断りの枕として非常によく使われます。単独で Dommage ! とも。',
          when: 'dommage is the standard opener for a regretful no.'
        }
      ]
    },

    {
      type: 'dialogue',
      title: '会話：誘って断られて、また誘う',
      scene: '同僚同士。1回目は断られますが、話が続いています。',
      lines: [
        { who: 'A', fr: "Ça te dit d'aller au cinéma ce soir ?", en: 'Do you feel like going to the cinema tonight?', ja: '今夜映画どう？' },
        { who: 'B', fr: "Ah, c'est gentil, mais je suis occupée ce soir.", en: "Oh, that's kind, but I'm busy tonight.", ja: 'ありがとう、でも今夜は予定があって。' },
        { who: 'A', fr: 'Ah dommage. Et demain ?', en: 'Oh, shame. And tomorrow?', ja: '残念。じゃあ明日は？' },
        { who: 'B', fr: 'Demain, oui ! Avec plaisir.', en: 'Tomorrow, yes! With pleasure.', ja: '明日ならぜひ！' },
        { who: 'A', fr: 'Super. On se retrouve à quelle heure ?', en: 'Great. What time shall we meet?', ja: 'よかった。何時にする？' },
        { who: 'B', fr: "Vingt heures, ça marche ?", en: 'Eight, does that work?', ja: '20時で大丈夫？' },
        { who: 'A', fr: "Ça marche !", en: 'That works!', ja: '了解！' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: '「いい考えだね！」の正しい形は？',
          options: ['Bon idée !', 'Bonne idée !', 'Belle idée !', 'Grande idée !'],
          answer: 1,
          why: 'idée は女性名詞なので bonne。よく間違えるところです。'
        },
        {
          q: "Ça te dit de ... ? の意味は？",
          options: ['それを言って', '〜する気ある？', 'それは何？', 'いつ言った？'],
          answer: 1,
          why: '直訳は通じませんが「〜する気ある？」という決まり文句。丸ごと覚えてください。'
        },
        {
          q: '断るときに最も大切なのは？',
          options: ['Non とはっきり言う', '理由を詳しく説明する', '次につなげる一言を添える', '謝罪を繰り返す'],
          answer: 2,
          why: 'Une autre fois ? のような代案を添えるかどうかで印象が大きく変わります。理由は簡潔で構いません。'
        },
        {
          q: '会話で最もよく使われる誘い方の形は？',
          options: ['On + 現在形 ?', 'Voulez-vous ... ?', 'Puis-je vous inviter ?', 'Souhaitez-vous ... ?'],
          answer: 0,
          why: 'On fait une promenade ? のように、On + 現在形 + 上げ調子が圧倒的に多い形です。'
        }
      ]
    }
  ]
};
