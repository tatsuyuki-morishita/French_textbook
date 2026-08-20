/* ============================================================
   Section 5 — Talking About Yourself, Part 1
   ============================================================ */

window.S5 = {
  id: 5,
  level: 'A0-A1',
  duration: '28分',
  title: { en: 'Talking About Yourself, Part 1', fr: 'Parler de soi (1/2)' },

  goals: [
    '動詞 avoir を6つの形すべてで言える',
    '自分の職業を、男性形・女性形を選んで言える',
    'ne ... pas で否定文を作れる',
    '名前・国籍・年齢・職業を続けて自己紹介できる'
  ],

  blocks: [

    {
      type: 'conjugation',
      title: '動詞 avoir（持つ）',
      intro: 'être と並ぶ最重要動詞。年齢・空腹・寒さなど、英語なら be を使う場面の多くで avoir を使います。',
      forms: [
        { pronoun: 'je',          form: 'ai', ipa: 'ʒe' },
        { pronoun: 'tu',          form: 'as' },
        { pronoun: 'il / elle',   form: 'a' },
        { pronoun: 'nous',        form: 'avons' },
        { pronoun: 'vous',        form: 'avez' },
        { pronoun: 'ils / elles', form: 'ont' }
      ],
      note: 'je ai とは言わず、必ず縮めて j\'ai。tu as / il a / ils ont はどれも短く、聞き取りにくいので主語とセットで覚えます。ils ont（イルゾン）と ils sont（イルソン）は意味が正反対なので、ゾとソの違いに注意。'
    },

    {
      type: 'note',
      tone: 'warm',
      title: '英語の be が avoir になる場面',
      body: '日本語話者は英語経由でフランス語を考えることが多いので、ここは意識的に切り替える必要があります。',
      list: [
        'J\'ai 25 ans … 25歳です（I am 25）',
        'J\'ai faim … お腹が空いた（I am hungry）',
        'J\'ai soif … 喉が渇いた（I am thirsty）',
        'J\'ai froid / chaud … 寒い／暑い（I am cold / hot）',
        'J\'ai peur … 怖い（I am afraid）',
        'J\'ai sommeil … 眠い（I am sleepy）',
        'いずれも直訳は「〜を持っている」。「空腹を持っている」と考えると腑に落ちます'
      ]
    },

    {
      type: 'phrases',
      title: 'avoir を使った日常表現',
      items: [
        {
          fr: "J'ai faim",
          en: "I'm hungry",
          ja: 'お腹が空いた',
          literal: '私は空腹を持っている',
          register: 'neutral',
          ja_when: '食事に誘うとき、レストランを探すときの前置き。Je suis faim は完全な間違いなので注意。',
          when: 'Never je suis faim — hunger is something you have.'
        },
        {
          fr: "J'ai soif",
          en: "I'm thirsty",
          ja: '喉が渇いた',
          register: 'neutral',
          ja_when: 'カフェに入る前や、飲み物を頼む前の一言。',
          when: 'Same pattern as j\'ai faim.'
        },
        {
          fr: "J'ai un chien",
          en: 'I have a dog',
          ja: '犬を飼っています',
          register: 'neutral',
          ja_when: '本来の「持っている」の意味。ペット・兄弟・車など所有を言うとき。',
          when: 'The literal sense of avoir.'
        },
        {
          fr: "J'ai deux frères",
          en: 'I have two brothers',
          ja: '兄弟が2人います',
          register: 'neutral',
          ja_when: '家族構成を話すとき。フランス語では「兄」「弟」を区別せず、どちらも frère です。年齢差を言いたいときは grand frère（兄）/ petit frère（弟）。',
          when: 'French does not distinguish older and younger siblings by default.'
        },
        {
          fr: "Qu'est-ce que vous faites dans la vie ?",
          en: 'What do you do for a living?',
          ja: 'お仕事は何をされていますか？',
          literal: '人生の中で何をしていますか',
          register: 'formal',
          ja_when: '職業を尋ねる最も自然な言い方。直接 Quel est votre métier ? と聞くよりも柔らかく響きます。',
          when: 'Softer and far more idiomatic than asking for someone\'s métier directly.'
        },
        {
          fr: 'Je suis étudiante',
          en: "I'm a student (female)",
          ja: '学生です（女性）',
          register: 'neutral',
          ja_when: '★重要★ 職業には冠詞を付けません。Je suis une étudiante は不自然。英語の I am a student との違いに注意。',
          when: 'No article before a profession — unlike English "a student".'
        },
        {
          fr: 'Je travaille dans une banque',
          en: 'I work in a bank',
          ja: '銀行で働いています',
          register: 'neutral',
          ja_when: '職種名がぱっと出てこないときの逃げ道として便利。「どこで働くか」なら誰でも言えます。',
          when: 'A useful fallback when you do not know the job title.'
        }
      ]
    },

    {
      type: 'tiles',
      title: '職業（男性形 / 女性形）',
      intro: 'タップで男性形が再生されます。女性形の作り方は語尾によって4パターンあります。',
      items: [
        { label: 'médecin', fr: 'médecin', en: '医師（男女同形）' },
        { label: 'professeur', fr: 'professeur', en: '教師 → professeure' },
        { label: 'étudiant', fr: 'étudiant', en: '学生 → étudiante' },
        { label: 'avocat', fr: 'avocat', en: '弁護士 → avocate' },
        { label: 'cuisinier', fr: 'cuisinier', en: '料理人 → cuisinière' },
        { label: 'ingénieur', fr: 'ingénieur', en: '技術者 → ingénieure' },
        { label: 'policier', fr: 'policier', en: '警察官 → policière' },
        { label: 'mécanicien', fr: 'mécanicien', en: '整備士 → mécanicienne' },
        { label: 'écrivain', fr: 'écrivain', en: '作家 → écrivaine' },
        { label: 'artiste', fr: 'artiste', en: '芸術家（男女同形）' },
        { label: 'musicien', fr: 'musicien', en: '音楽家 → musicienne' },
        { label: 'photographe', fr: 'photographe', en: '写真家（男女同形）' },
        { label: 'pilote', fr: 'pilote', en: 'パイロット（男女同形）' },
        { label: 'infirmier', fr: 'infirmier', en: '看護師 → infirmière' },
        { label: 'vendeur', fr: 'vendeur', en: '販売員 → vendeuse' },
        { label: 'serveur', fr: 'serveur', en: '給仕 → serveuse' }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: '女性形の4パターン',
      list: [
        '+e … étudiant → étudiante、avocat → avocate（前の子音が発音されるようになる）',
        '-ier → -ière … cuisinier → cuisinière、infirmier → infirmière',
        '-ien → -ienne … musicien → musicienne、mécanicien → mécanicienne',
        '-eur → -euse … vendeur → vendeuse、serveur → serveuse',
        '-e で終わる語は変化なし … artiste, pilote, photographe, journaliste'
      ]
    },

    {
      type: 'note',
      title: '否定文 — ne と pas で動詞をはさむ',
      body: '英語の not に当たるものが、フランス語では ne ... pas の2語で動詞を前後からはさむ形になります。' +
            'この「はさむ」感覚がフランス語の否定の基本です。',
      list: [
        'Je parle français → Je ne parle pas français（私はフランス語を話さない）',
        'J\'ai un chien → Je n\'ai pas de chien（母音の前では ne が n\' に縮む）',
        '否定文では un / une / des が de に変わる。J\'ai un chien → Je n\'ai pas de chien',
        '★会話では ne がほぼ必ず落ちます★ Je sais pas / J\'ai pas faim。書くときは必ず ne を入れる',
        'être の否定は冠詞が変わらない。Je ne suis pas étudiant'
      ]
    },

    {
      type: 'phrases',
      title: '否定してみる',
      items: [
        {
          fr: 'Je ne parle pas français',
          en: "I don't speak French",
          ja: 'フランス語は話せません',
          register: 'neutral',
          ja_when: '観光中に最もよく使う一文。ただしこれをフランス語で言えている時点で少しは話せているので、実際には Je parle un peu français（少し話せます）の方が会話が続きます。',
          when: 'Ironically, saying this in French proves it wrong — un peu français often works better.'
        },
        {
          fr: "Je n'ai pas de frères",
          en: "I don't have brothers",
          ja: '兄弟はいません',
          register: 'neutral',
          ja_when: '否定文なので des frères が de frères に変わっています。この冠詞の変化は初心者が最も落とすところ。',
          when: 'Note des becomes de under negation.'
        },
        {
          fr: 'Je ne comprends pas bien',
          en: "I don't understand well",
          ja: 'よく分かりません',
          register: 'neutral',
          ja_when: '「全く分からない」ではなく「部分的には分かる」と伝えられるので、会話を切らずに済みます。',
          when: 'Softer than a flat "I don\'t understand" — keeps the conversation open.'
        },
        {
          fr: "Je ne suis pas d'ici",
          en: "I'm not from here",
          ja: 'この辺の者ではありません',
          register: 'neutral',
          ja_when: '道を聞かれて答えられないときの決まり文句。Désolé, je ne suis pas d\'ici と続けます。',
          when: 'The standard reply when someone asks you for directions.'
        }
      ]
    },

    {
      type: 'dialogue',
      title: '会話：自己紹介をつなげる',
      scene: '新しい職場の歓迎会。同僚に自己紹介しています。',
      lines: [
        { who: 'A', fr: "Bonjour, je m'appelle Kenji. Je suis japonais.", en: "Hello, I'm Kenji. I'm Japanese.", ja: 'こんにちは、ケンジです。日本人です。' },
        { who: 'B', fr: "Enchantée ! Qu'est-ce que vous faites dans la vie ?", en: 'Nice to meet you! What do you do?', ja: 'はじめまして。お仕事は？' },
        { who: 'A', fr: "Je suis ingénieur. J'ai trente-deux ans.", en: "I'm an engineer. I'm 32.", ja: '技術者です。32歳です。' },
        { who: 'B', fr: 'Vous parlez très bien français !', en: 'You speak French very well!', ja: 'フランス語お上手ですね。' },
        { who: 'A', fr: "Merci, mais je ne comprends pas toujours tout.", en: "Thanks, but I don't always understand everything.", ja: 'ありがとう、でも全部は聞き取れないんです。' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: '「私は学生です」の正しい形は？',
          options: ['Je suis un étudiant', 'Je suis étudiant', "J'ai étudiant", 'Je suis le étudiant'],
          answer: 1,
          why: '職業の前に冠詞は付けません。英語の a student につられて un を入れないように。'
        },
        {
          q: "J'ai un chien を否定文にすると？",
          options: ["Je n'ai pas un chien", "Je n'ai pas de chien", 'Je ne suis pas chien', "J'ai pas un chien"],
          answer: 1,
          why: '否定文では un / une / des が de に変わります。'
        },
        {
          q: '「お腹が空いた」は？',
          options: ['Je suis faim', "J'ai faim", 'Je fais faim', 'Il y a faim'],
          answer: 1,
          why: '空腹・喉の渇き・寒さ・年齢はすべて avoir です。'
        },
        {
          q: 'ils ont と ils sont の違いは？',
          options: ['同じ意味', 'ont は「持つ」、sont は「である」', '時制が違う', '丁寧さが違う'],
          answer: 1,
          why: 'ont は avoir、sont は être。音は「イルゾン」と「イルソン」で、濁るかどうかだけの差なので聞き分けに注意。'
        }
      ]
    }
  ]
};
