/* ============================================================
   Section 1 — Introducing Yourself & The Alphabet
   ============================================================ */

window.S1 = {
  id: 1,
  level: 'A0',
  duration: '55分',
  title: { en: 'Introducing Yourself & The Alphabet', fr: "Se présenter — L'alphabet" },

  goals: [
    '初対面のフランス語話者に、自分の名前を言って挨拶できる',
    'tu と vous を、相手と場面で正しく使い分けられる',
    '動詞 s\'appeler（〜という名前です）を主語ごとに言える',
    'アルファベット26文字をフランス語式に読み、自分の名前を綴れる',
    '授業や会話で詰まったときに聞き返すフレーズが言える'
  ],

  blocks: [

    /* ---------------------------------------------------- */
    {
      type: 'note',
      title: 'はじめに — なぜ発音を先にやるのか',
      body: 'フランス語は「書いてある文字」と「実際の音」のズレが大きい言語です。' +
            'Bonjour の最後の r は書いてあるのに、日本語のラ行では絶対に出ない音。' +
            'ここを最初に押さえておくと、あとの30セクションが全部ラクになります。' +
            'このコースでは、すべてのフランス語にカタカナ・英語風の読み・IPA の3つを付けてあります。' +
            '音声ボタンを押して、必ず声に出してから次へ進んでください。'
    },

    {
      type: 'note',
      tone: 'gold',
      title: '3つの発音表記の使い分け',
      list: [
        'カタカナ … 口の形の出発点。ただしフランス語には日本語に無い音があるので「近似」でしかない',
        '英語風 … 英語を知っている強みを使う。measure の s = フランス語の j など、英語の方が近い音がある',
        'IPA … 正解の音そのもの。慣れると一番速い。分からない記号はカードの下の警告に説明が出る'
      ]
    },

    /* ---------------------------------------------------- */
    {
      type: 'phrases',
      title: '最初の一言',
      intro: 'フランスでは、店・エレベーター・病院の待合室でも、まず挨拶をするのが強いマナーです。無言で用件に入ると失礼にあたります。',
      items: [
        {
          fr: 'Bonjour',
          en: 'Hello / Good morning / Good afternoon',
          ja: 'こんにちは（朝〜夕方）',
          register: 'neutral',
          ja_when: '朝から夕方（だいたい18時ごろ）まで、誰に対しても使える最強の一語。店に入る、パン屋で並ぶ、エレベーターで人と乗り合わせる — この全部で言います。言わないと「感じの悪い人」と思われるレベルで必須。',
          when: 'Say it on entering any shop, and to anyone you pass in a small space. Omitting it reads as rude in France, not merely quiet.'
        },
        {
          fr: 'Bonsoir',
          en: 'Good evening',
          ja: 'こんばんは',
          register: 'neutral',
          ja_when: '夕方18時ごろから。Bonjour と同じ場面で、時間帯だけが違います。レストランに入るとき、夜の集まりに着いたときなど。',
          when: 'Same situations as bonjour, from roughly 6pm. Used on arriving, not on leaving.'
        },
        {
          fr: 'Salut',
          en: 'Hi / Bye',
          ja: 'やあ／じゃあね',
          register: 'casual',
          ja_when: '友達・同年代・親しい同僚だけ。会ったときにも別れるときにも使える便利な語ですが、店員さん・先生・年上・初対面には使いません。日本語の「ちわっす」に近い距離感。',
          when: 'Friends and peers only. Works for both hello and goodbye. Never to a shopkeeper, teacher, or anyone you have just met.'
        },
        {
          fr: "Je m'appelle Marie",
          en: "My name is Marie",
          ja: '私はマリーといいます',
          literal: '私は自分をマリーと呼ぶ',
          register: 'neutral',
          ja_when: '名前を名乗る一番標準的な言い方。フォーマルでもカジュアルでも使えます。自己紹介の場、電話、受付など全部これでいけます。',
          when: 'The default way to give your name, safe in every register.'
        },
        {
          fr: 'Je suis Marie',
          en: "I'm Marie",
          ja: '私はマリーです',
          register: 'casual',
          ja_when: 'Je m\'appelle より少しくだけた、短い名乗り。友達の集まりや、すでに場が和んでいるときに。ビジネスの初対面なら Je m\'appelle の方が無難。',
          when: 'A shorter, slightly more casual self-introduction than je m\'appelle.'
        },
        {
          fr: 'Enchanté',
          en: 'Nice to meet you',
          ja: 'はじめまして',
          literal: '魅了された',
          register: 'formal',
          ja_when: '初対面の挨拶。名乗り合った直後に言います。書くときは女性なら Enchantée と e が増えますが、音はまったく同じです。',
          when: 'Said right after names are exchanged. Women write Enchantée; the extra e is silent, so it sounds identical.'
        },
        {
          fr: 'Comment tu t\'appelles ?',
          en: "What's your name?",
          ja: '名前なんていうの？',
          register: 'casual',
          ja_when: '友達・同年代・子供に。学校やパーティーで同世代に聞くならこれ。年上や店員には使いません。',
          when: 'To peers, friends, and children.'
        },
        {
          fr: 'Comment vous appelez-vous ?',
          en: "What is your name?",
          ja: 'お名前は何とおっしゃいますか？',
          register: 'formal',
          ja_when: '初対面の大人、仕事相手、受付、年上の人に。迷ったらこちらを使えば失礼になりません。',
          when: 'To adults you have just met, in any professional setting. When unsure, this one is never wrong.'
        }
      ]
    },

    /* ---------------------------------------------------- */
    {
      type: 'note',
      tone: 'warm',
      title: 'tu と vous — フランス語で最初に越える壁',
      body: '英語の you は1つですが、フランス語は相手との距離で2つに分かれます。' +
            '日本語の「タメ口／敬語」に非常に近い感覚なので、日本語話者はむしろ理解しやすいところです。',
      list: [
        'tu … 友達、家族、子供、同年代、親しい同僚。日本語のタメ口',
        'vous … 初対面の大人、店員、先生、上司、年上。日本語の敬語',
        'vous は「あなたたち」（複数）の意味も兼ねる。複数の相手には親しくても必ず vous',
        '迷ったら vous。丁寧すぎて怒る人はいないが、いきなり tu は失礼になりうる',
        '相手が On peut se tutoyer ?（tu で呼び合わない？）と言ってきたら、そこから tu に切り替える合図'
      ]
    },

    /* ---------------------------------------------------- */
    {
      type: 'conjugation',
      title: "動詞 s'appeler（〜という名前です）",
      intro: '「自分を〜と呼ぶ」という形の動詞（代名動詞）です。主語ごとに、前の me / te / se も一緒に変わるのがポイント。',
      forms: [
        { pronoun: 'je',          form: "m'appelle" },
        { pronoun: 'tu',          form: "t'appelles" },
        { pronoun: 'il / elle',   form: "s'appelle" },
        { pronoun: 'nous',        form: 'nous appelons' },
        { pronoun: 'vous',        form: 'vous appelez' },
        { pronoun: 'ils / elles', form: "s'appellent", ipa: 'sapɛl' }
      ],
      note: 'm\'appelle / t\'appelles / s\'appelle / s\'appellent はすべて音が「アペル」で同じ。書き分けは目で、聞き分けは主語（je, tu, il...）でします。nous appelons と vous appelez だけ音が変わります。'
    },

    /* ---------------------------------------------------- */
    {
      type: 'dialogue',
      title: '会話：カフェで初対面',
      scene: 'パリのカフェ。共通の友人に紹介されたばかりの2人。初対面なので vous で話しています。',
      lines: [
        { who: 'A', fr: 'Bonjour ! Comment vous appelez-vous ?', en: 'Hello! What is your name?', ja: 'こんにちは。お名前は？' },
        { who: 'B', fr: "Bonjour, je m'appelle Yuki. Et vous ?", en: "Hello, my name is Yuki. And you?", ja: 'こんにちは、ユキといいます。あなたは？' },
        { who: 'A', fr: 'Moi, je suis Thomas. Enchanté !', en: "Me, I'm Thomas. Nice to meet you!", ja: '僕はトマです。はじめまして。' },
        { who: 'B', fr: 'Enchantée !', en: 'Nice to meet you!', ja: 'はじめまして。' }
      ]
    },

    {
      type: 'note',
      title: 'この会話で押さえるところ',
      list: [
        'Et vous ?（で、あなたは？）… 同じ質問を返す万能フレーズ。Et toi ? がタメ口版',
        'Moi, je suis... … 文頭の Moi は「僕はね」と自分を軽く強調する言い方。会話でとてもよく出る',
        'B は女性なので Enchantée と書いているが、A の Enchanté と音は完全に同じ'
      ]
    },

    /* ---------------------------------------------------- */
    {
      type: 'tiles',
      title: 'アルファベット（L\'alphabet）',
      intro: '文字は英語と同じ26個。読み方だけが違います。電話で名前を綴る、メールアドレスを伝える、といった場面で必ず要ります。タップで発音を確認してください。',
      items: [
        { label: 'A', fr: 'A', ipa: 'a',        kana: 'ア' },
        { label: 'B', fr: 'B', ipa: 'be',       kana: 'ベ' },
        { label: 'C', fr: 'C', ipa: 'se',       kana: 'セ' },
        { label: 'D', fr: 'D', ipa: 'de',       kana: 'デ' },
        { label: 'E', fr: 'E', ipa: 'ø',        kana: 'ウ',    en: '要注意' },
        { label: 'F', fr: 'F', ipa: 'ɛf',       kana: 'エフ' },
        { label: 'G', fr: 'G', ipa: 'ʒe',       kana: 'ジェ',  en: '要注意' },
        { label: 'H', fr: 'H', ipa: 'aʃ',       kana: 'アシュ', en: '無音' },
        { label: 'I', fr: 'I', ipa: 'i',        kana: 'イ' },
        { label: 'J', fr: 'J', ipa: 'ʒi',       kana: 'ジ',    en: '要注意' },
        { label: 'K', fr: 'K', ipa: 'ka',       kana: 'カ' },
        { label: 'L', fr: 'L', ipa: 'ɛl',       kana: 'エル' },
        { label: 'M', fr: 'M', ipa: 'ɛm',       kana: 'エム' },
        { label: 'N', fr: 'N', ipa: 'ɛn',       kana: 'エヌ' },
        { label: 'O', fr: 'O', ipa: 'o',        kana: 'オ' },
        { label: 'P', fr: 'P', ipa: 'pe',       kana: 'ペ' },
        { label: 'Q', fr: 'Q', ipa: 'ky',       kana: 'キュ',  en: '要注意' },
        { label: 'R', fr: 'R', ipa: 'ɛʁ',       kana: 'エル',  en: '最難関' },
        { label: 'S', fr: 'S', ipa: 'ɛs',       kana: 'エス' },
        { label: 'T', fr: 'T', ipa: 'te',       kana: 'テ' },
        { label: 'U', fr: 'U', ipa: 'y',        kana: 'ユ',    en: '要注意' },
        { label: 'V', fr: 'V', ipa: 've',       kana: 'ヴェ' },
        { label: 'W', fr: 'W', ipa: 'dubləve',  kana: 'ドゥブルヴェ' },
        { label: 'X', fr: 'X', ipa: 'iks',      kana: 'イクス' },
        { label: 'Y', fr: 'Y', ipa: 'igʁɛk',    kana: 'イグレック' },
        { label: 'Z', fr: 'Z', ipa: 'zɛd',      kana: 'ゼッド' }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: '日本語話者がつまずく6文字',
      list: [
        'E … 英語の「イー」ではなく「ウ」に近い音（/ø/）。唇を丸めて「エ」',
        'G と J … 英語と入れ替わっているように感じる。G=ジェ、J=ジ。どちらも英語 measure の s の音',
        'H … 文字の名前は「アシュ」だが、単語の中では常に無音。hôtel は「オテル」',
        'R … 喉の奥の音。ラ行でも英語の r でもない。うがいの位置から',
        'U … 「ユ」の唇のまま「イ」。tu（きみ）と tout（すべて）はこれで区別される',
        'Y … イグレック。「ギリシャの i」という意味'
      ]
    },

    /* ---------------------------------------------------- */
    {
      type: 'tiles',
      title: 'アクセント記号（Les accents）',
      intro: '母音の上下に付く記号。飾りではなく、音や意味が変わります。',
      items: [
        { label: 'é', fr: 'café',    en: 'アクサン・テギュ／エ' },
        { label: 'è', fr: 'père',    en: 'アクサン・グラーヴ／開いたエ' },
        { label: 'ê', fr: 'être',    en: 'アクサン・シルコンフレクス' },
        { label: 'ç', fr: 'français', en: 'セディーユ／c を s の音に' },
        { label: 'ë', fr: 'Noël',    en: 'トレマ／母音を分けて読む' },
        { label: 'à', fr: 'voilà',   en: 'アクサン・グラーヴ' }
      ]
    },

    {
      type: 'note',
      list: [
        'é（テギュ）… はっきりした「エ」。café, été, décembre',
        'è / ê（グラーヴ／シルコンフレクス）… 口を開いた「エ」。père, être',
        'ç（セディーユ）… a, o, u の前で c を「ス」の音にする。garçon がなければ「ガルコン」になってしまう',
        'ë（トレマ）… 前の母音とくっつけずに分けて読む合図。Noël は「ノエル」で「ヌール」ではない',
        'à … 音は a のまま。a（動詞avoir）と à（〜に）を区別するためだけの記号'
      ]
    },

    /* ---------------------------------------------------- */
    {
      type: 'phrases',
      title: '詰まったときの命綱',
      intro: '初心者にとって、この6つは単語100個より役に立ちます。会話が止まったときに黙ってしまわないための道具です。',
      items: [
        {
          fr: 'Je ne comprends pas',
          en: "I don't understand",
          ja: 'わかりません',
          register: 'neutral',
          ja_when: '一番大事なフレーズ。分からないまま頷き続けると会話が破綻します。会話では ne が落ちて「ジュ・コンプラン・パ」と聞こえることが多いです。',
          when: 'The single most useful beginner phrase. In speech the ne usually drops.'
        },
        {
          fr: 'Répétez, s\'il vous plaît',
          en: 'Please repeat',
          ja: 'もう一度お願いします',
          register: 'formal',
          ja_when: '聞き取れなかったときに。友達相手なら Répète, s\'il te plaît とタメ口版になります。',
          when: 'To a stranger or in any formal setting. With a friend: Répète, s\'il te plaît.'
        },
        {
          fr: 'Plus lentement, s\'il vous plaît',
          en: 'More slowly, please',
          ja: 'もっとゆっくりお願いします',
          register: 'formal',
          ja_when: 'フランス語のネイティブは本当に速いです。遠慮せずに使ってください。繰り返してもらうより、速度を落としてもらう方が効きます。',
          when: 'Often more effective than asking for a repeat at the same speed.'
        },
        {
          fr: 'Comment dit-on "table" en français ?',
          en: 'How do you say "table" in French?',
          ja: '「table」はフランス語で何と言いますか？',
          register: 'neutral',
          ja_when: '知らない単語を、その場で相手から教えてもらうための型。引用符の中を入れ替えて使い回せます。',
          when: 'A reusable frame: swap the quoted word for whatever you need.'
        },
        {
          fr: 'Comment ça s\'écrit ?',
          en: 'How is it spelled?',
          ja: 'どう綴りますか？',
          register: 'neutral',
          ja_when: 'アルファベットを習った直後に必ず要ります。名前・住所・店の名前を聞き取るときに。相手が一文字ずつ言ってくれます。',
          when: 'Pairs directly with the alphabet you just learned.'
        },
        {
          fr: 'Qu\'est-ce que ça veut dire ?',
          en: 'What does that mean?',
          ja: 'それはどういう意味ですか？',
          register: 'neutral',
          ja_when: '相手の言った単語の意味を尋ねる。長く見えますが「ケスク・サ・ヴ・ディール」の一塊で覚えてしまうのが速いです。',
          when: 'Learn it as one chunk rather than four words.'
        }
      ]
    },

    /* ---------------------------------------------------- */
    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: '初めて会った取引先の人に名前を尋ねます。正しいのは？',
          options: ['Comment tu t\'appelles ?', 'Comment vous appelez-vous ?', 'Salut, ton nom ?', 'Tu es qui ?'],
          answer: 1,
          why: '初対面かつ仕事の相手なので vous を使います。tu は友達・同年代・子供に限定。'
        },
        {
          q: 'フランス語の文字 J の読み方は？',
          options: ['ジェ', 'ジ', 'ヤ', 'イ'],
          answer: 1,
          why: 'J は「ジ」、G が「ジェ」。英語と入れ替わっているように感じるところです。'
        },
        {
          q: 'garçon の ç がなかったら、どう読まれてしまう？',
          options: ['ガルソン', 'ガルション', 'ガルコン', 'ガルジョン'],
          answer: 2,
          why: 'セディーユは a・o・u の前で c を「ス」の音に変える記号。無ければ c は「ク」と読まれます。'
        },
        {
          q: 'tu（きみ）と tout（すべて）の音の違いを作っているのは？',
          options: ['最後の t', 'アクセントの位置', '母音 u /y/ と ou /u/', '長さ'],
          answer: 2,
          why: 'tu は /ty/、tout は /tu/。「ユ」の唇で「イ」と言うのが /y/ です。日本語話者は「ユ」の口を出発点にできる分、英語話者より有利。'
        },
        {
          q: '夜19時にレストランに入りました。最初のひと言は？',
          options: ['Bonjour', 'Bonsoir', 'Salut', 'Au revoir'],
          answer: 1,
          why: '18時ごろから Bonsoir。Salut は店員さんには使いません。Au revoir は帰るときの挨拶です。'
        }
      ]
    }
  ]
};
