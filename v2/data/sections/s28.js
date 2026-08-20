/* ============================================================
   Section 28 — Tense Review
   ============================================================ */

window.S28 = {
  id: 28,
  level: 'A2',
  duration: '30分',
  title: { en: 'Tense Review', fr: 'Révision des temps' },

  goals: [
    '5つの時制を一覧で整理する',
    '複合過去と半過去の役割の違いを説明できる',
    '同じ文で2つの過去形を組み合わせられる',
    '時制を場面で選べるようになる'
  ],

  blocks: [

    {
      type: 'note',
      title: 'ここまでで扱った時制',
      body: 'A2 までに必要な時制はこれだけです。それぞれ役割がはっきり分かれています。',
      list: [
        '現在 … Je mange【今・習慣・一般的事実】',
        '複合過去 … J\'ai mangé【完了した出来事】§22',
        '半過去 … Je mangeais【continuing な背景・習慣・描写】',
        '近接未来 … Je vais manger【決まった予定】§27',
        '単純未来 … Je mangerai【予測・約束】§27',
        '条件法 … Je mangerais【仮定・丁寧】§25'
      ]
    },

    {
      type: 'note',
      tone: 'warm',
      title: '半過去（imparfait）— もうひとつの過去',
      body: '複合過去が「点」なら、半過去は「線」です。' +
            'いつ始まっていつ終わったかを問題にせず、そのときの状況や繰り返しを描きます。' +
            '作り方は例外がほぼなく、複合過去よりずっと簡単です。',
      list: [
        '作り方 … nous の現在形から -ons を取って語幹にし、語尾を足す',
        'nous parlons → parl- + ais, ais, ait, ions, iez, aient',
        '★ 唯一の不規則は être ★ 語幹は ét- … j\'étais, tu étais, il était',
        'j\'étais / il était / ils étaient はすべて「エテ」で同音',
        '使いどころ … 天気・年齢・気持ち・外見・繰り返していた習慣'
      ]
    },

    {
      type: 'conjugation',
      title: '半過去 — être の場合',
      intro: '唯一の不規則動詞です。他はすべて nous の現在形から作れます。',
      forms: [
        { pronoun: 'je',          form: 'étais' },
        { pronoun: 'tu',          form: 'étais' },
        { pronoun: 'il / elle',   form: 'était' },
        { pronoun: 'nous',        form: 'étions' },
        { pronoun: 'vous',        form: 'étiez' },
        { pronoun: 'ils / elles', form: 'étaient' }
      ],
      note: 'étais / était / étaient は音がすべて同じ「エテ」。区別は主語だけです。'
    },

    {
      type: 'note',
      tone: 'gold',
      title: '複合過去 vs 半過去 — 判断の目安',
      list: [
        '複合過去 … 一度きり、完了、話が前に進む。Hier, j\'ai visité le musée',
        '半過去 … 背景、状態、繰り返し、話が止まっている。Quand j\'étais petit, j\'allais souvent au parc',
        '★ 目安になる語 ★ 複合過去 … hier, soudain, une fois, à 8 heures',
        '★ 目安になる語 ★ 半過去 … souvent, toujours, tous les jours, quand j\'étais',
        '天気・年齢・気持ち・外見の描写はほぼ半過去',
        '「〜していた（そこへ何かが起きた）」の背景側が半過去、起きた側が複合過去'
      ]
    },

    {
      type: 'phrases',
      title: '2つの過去形を組み合わせる',
      intro: '「背景（半過去）＋ 出来事（複合過去）」が典型的な組み合わせです。',
      items: [
        {
          fr: 'Il faisait beau quand je suis arrivé',
          en: 'The weather was nice when I arrived',
          ja: '私が着いたとき、天気が良かった',
          register: 'neutral',
          ja_when: '★典型例★ 天気は続いている状態なので半過去、到着は一度きりの出来事なので複合過去。',
          when: 'Weather is a continuing state; arriving is a single event.'
        },
        {
          fr: 'Elle lisait quand le téléphone a sonné',
          en: 'She was reading when the phone rang',
          ja: '彼女が本を読んでいたら電話が鳴った',
          register: 'neutral',
          ja_when: '読んでいた（進行中の背景）に、鳴った（割り込んだ出来事）。英語の was reading / rang とまったく同じ構図です。',
          when: 'Exactly the English was reading / rang structure.'
        },
        {
          fr: "Quand j'étais petit, j'allais souvent à la mer",
          en: 'When I was little, I often went to the sea',
          ja: '子供のころ、よく海に行っていました',
          register: 'neutral',
          ja_when: '★繰り返していた習慣は半過去★ souvent があるのが手がかり。両方とも半過去になります。',
          when: 'A repeated childhood habit — both verbs are imperfect.'
        },
        {
          fr: "Hier, j'ai visité le musée du Louvre",
          en: 'Yesterday I visited the Louvre',
          ja: '昨日ルーヴル美術館に行きました',
          register: 'neutral',
          ja_when: 'hier があり、一度きりの完了した行動なので複合過去。',
          when: 'A single completed action, marked by hier.'
        },
        {
          fr: "J'avais vingt ans quand je suis parti en France",
          en: 'I was 20 when I left for France',
          ja: 'フランスに発ったとき20歳でした',
          register: 'neutral',
          ja_when: '★年齢は必ず半過去★ 「そのとき〜歳だった」という状態です。出発は複合過去。',
          when: 'Age in the past is always imperfect.'
        },
        {
          fr: "Je ne savais pas que tu étais là",
          en: "I didn't know you were here",
          ja: 'ここにいるとは知りませんでした',
          register: 'neutral',
          ja_when: '★ savoir, penser, croire, vouloir などの心の動きは半過去が基本★ 「知っている状態が続いていた」ためです。',
          when: 'Mental states (savoir, penser, croire) default to the imperfect.'
        },
        {
          fr: "On mangeait quand ils sont arrivés",
          en: 'We were eating when they arrived',
          ja: '食事中に彼らが来ました',
          register: 'casual',
          ja_when: '背景と出来事の組み合わせ。会話では nous より on【§6】。',
          when: 'The background-plus-event pattern again, with on for nous.'
        }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: 'être の全時制まとめ',
      list: [
        '現在 … je suis',
        '複合過去 … j\'ai été（〜だった）',
        '半過去 … j\'étais（〜であった・状態）',
        '近接未来 … je vais être',
        '単純未来 … je serai',
        '条件法 … je serais',
        '★ être の過去は圧倒的に半過去 ★ j\'ai été はあまり使いません'
      ]
    },

    {
      type: 'dialogue',
      title: '会話：昔と今',
      scene: '子供時代の話。半過去と複合過去が交互に出てきます。',
      lines: [
        { who: 'A', fr: "Tu habitais où quand tu étais petit ?", en: 'Where did you live when you were little?', ja: '子供のころどこに住んでたの？' },
        { who: 'B', fr: "À la campagne. On avait un grand jardin.", en: 'In the countryside. We had a big garden.', ja: '田舎。大きな庭があったよ。' },
        { who: 'A', fr: "C'était bien ?", en: 'Was it good?', ja: 'よかった？' },
        { who: 'B', fr: "Oui, je jouais dehors tous les jours.", en: 'Yes, I played outside every day.', ja: 'うん、毎日外で遊んでた。' },
        { who: 'A', fr: 'Et tu es parti quand ?', en: 'And when did you leave?', ja: 'いつ出たの？' },
        { who: 'B', fr: "J'avais dix-huit ans quand je suis venu à Paris.", en: 'I was 18 when I came to Paris.', ja: 'パリに来たのは18のとき。' },
        { who: 'A', fr: "Ça a été difficile ?", en: 'Was it difficult?', ja: '大変だった？' },
        { who: 'B', fr: "Au début oui. Je ne connaissais personne.", en: 'At first yes. I knew no one.', ja: '最初はね。誰も知らなかったから。' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: '「子供のころ、よく海に行っていました」で使う時制は？',
          options: ['複合過去', '半過去', '単純未来', '条件法'],
          answer: 1,
          why: '繰り返していた習慣なので半過去。souvent が手がかりになります。'
        },
        {
          q: '「彼女が本を読んでいたら電話が鳴った」の組み合わせは？',
          options: ['両方とも複合過去', '両方とも半過去', '読む=半過去 / 鳴る=複合過去', '読む=複合過去 / 鳴る=半過去'],
          answer: 2,
          why: '続いている背景が半過去、割り込んだ出来事が複合過去です。'
        },
        {
          q: '半過去で唯一不規則な動詞は？',
          options: ['avoir', 'aller', 'faire', 'être'],
          answer: 3,
          why: 'être だけ語幹が ét- になります。他はすべて nous の現在形から作れます。'
        },
        {
          q: '過去の年齢を言うときの時制は？',
          options: ['複合過去', '半過去', '現在', '未来'],
          answer: 1,
          why: "J'avais vingt ans。年齢は状態なので必ず半過去です。"
        },
        {
          q: '半過去の語幹の作り方は？',
          options: ['原形から -er を取る', 'nous の現在形から -ons を取る', 'je の現在形をそのまま', '過去分詞から作る'],
          answer: 1,
          why: 'nous parlons → parl-。この作り方なら不規則動詞にもそのまま使えます。'
        }
      ]
    }
  ]
};
