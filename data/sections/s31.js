/* ============================================================
   Section 31 — Dating & Affectionate French
   ============================================================ */

window.S31 = {
  id: 31,
  level: 'A1-A2',
  duration: '45分',
  title: { en: 'Dating & Affectionate French', fr: "L'amour et les expressions amusantes" },

  goals: [
    '恋愛関係の語彙を理解する',
    '褒め言葉を場面に合った強さで言える',
    '誘い方の温度差を判断できる',
    'フランス語らしい愛称や慣用句に触れる'
  ],

  blocks: [

    {
      type: 'note',
      title: 'このセクションの読み方',
      body: 'ここからの3セクションは、教科書には載らないが実際にはよく使われる表現を扱います。' +
            '§31 は恋愛と親しい間柄の言葉です。' +
            '大切なのは「言えること」より「相手が言ったときに意味と温度が分かること」。' +
            '丁寧度の表示（●の数）を必ず見て、使う相手を間違えないようにしてください。'
    },

    {
      type: 'tiles',
      title: '恋愛の基本語彙',
      items: [
        { label: 'un bisou', fr: 'un bisou', ja: 'キス（軽い）' },
        { label: 'un baiser', fr: 'un baiser', ja: 'キス（本格的）' },
        { label: 'un rendez-vous', fr: 'un rendez-vous', ja: 'デート・約束' },
        { label: 'un copain', fr: 'un copain', ja: '彼氏・男友達' },
        { label: 'une copine', fr: 'une copine', ja: '彼女・女友達' },
        { label: 'sortir avec', fr: 'sortir avec', ja: '付き合う' },
        { label: 'tomber amoureux', fr: 'tomber amoureux', ja: '恋に落ちる' },
        { label: 'le coup de foudre', fr: 'le coup de foudre', ja: '一目惚れ' },
        { label: 'un couple', fr: 'un couple', ja: 'カップル' },
        { label: 'célibataire', fr: 'célibataire', ja: '独身' },
        { label: 'draguer', fr: 'draguer', ja: 'ナンパする' },
        { label: 'se marier', fr: 'se marier', ja: '結婚する' }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: '誤解を招きやすい語',
      list: [
        'un copain / une copine … 文脈で「友達」にも「恋人」にもなります。C\'est mon copain なら恋人、un copain à moi なら友達',
        'un ami / une amie … 基本は友達。ただし mon amie は「彼女」の意味になることも',
        '★ un baiser（名詞）はキスですが、動詞 baiser は非常に下品な意味 ★ 動詞では絶対に使わず、embrasser（キスする）を使ってください',
        'sortir avec … 「付き合う」。sortir だけなら単に「出かける」',
        'draguer … ナンパする。褒め言葉ではありません'
      ]
    },

    {
      type: 'phrases',
      title: '褒める',
      intro: '上から順に、誰にでも言える無難なものから、はっきり好意を示すものへ並んでいます。',
      items: [
        {
          fr: 'Tu as un sourire magnifique',
          en: 'You have a beautiful smile',
          ja: '素敵な笑顔ですね',
          register: 'neutral',
          ja_when: '比較的安全な褒め言葉。友人にも言えます。magnifique は「見事な」。',
          when: 'Relatively safe — works between friends too.'
        },
        {
          fr: 'Tu es vraiment charmant',
          en: "You're really charming",
          ja: '本当に素敵ですね',
          register: 'neutral',
          ja_when: '女性には charmante。人柄への褒め言葉なので外見より踏み込みが浅く、使いやすい。',
          when: 'About personality rather than looks, so less forward.'
        },
        {
          fr: 'Tu as de beaux yeux',
          en: 'You have beautiful eyes',
          ja: '目がきれいですね',
          register: 'casual',
          ja_when: '★はっきり好意が伝わる★ 顔の一部を褒めるのは踏み込んだ行為です。初対面のビジネスでは使いません。',
          when: 'Clearly flirtatious. Not for a professional first meeting.'
        },
        {
          fr: 'Je te trouve très belle',
          en: 'I find you very beautiful',
          ja: 'とてもきれいだと思います',
          register: 'casual',
          ja_when: 'trouver（〜だと思う）を使うことで「私の主観として」というニュアンスが加わります。男性には beau。',
          when: 'trouver frames it as a personal impression.'
        },
        {
          fr: 'Tu me plais beaucoup',
          en: 'I like you a lot',
          ja: 'あなたに惹かれています',
          literal: 'あなたは私の気に入る',
          register: 'casual',
          ja_when: '★明確な告白の一歩手前★ plaire は主語が逆転する動詞で、「あなたが私を喜ばせる」という形。Je t\'aime bien（友達として好き）よりずっと強い。',
          when: 'A clear step towards a declaration — much stronger than je t\'aime bien.'
        },
        {
          fr: "Je t'aime",
          en: 'I love you',
          ja: '愛しています',
          register: 'casual',
          ja_when: '★重い言葉★ 英語の I love you より重く、家族と恋人にしか使いません。友達には Je t\'aime bien【§13】と bien を付けます。',
          when: 'Heavier than English I love you. Family and partners only.'
        }
      ]
    },

    {
      type: 'phrases',
      title: '誘う',
      items: [
        {
          fr: 'Tu veux prendre un café ?',
          en: 'Do you want to get a coffee?',
          ja: 'コーヒーでもどう？',
          register: 'casual',
          ja_when: '★最も安全な誘い方★ 恋愛の意図があってもなくても成立するので、断られても気まずくなりません。',
          when: 'The safest opener — works with or without romantic intent.'
        },
        {
          fr: 'On va boire un verre ?',
          en: 'Shall we go for a drink?',
          ja: '一杯飲みに行かない？',
          register: 'casual',
          ja_when: 'boire un verre（一杯飲む）。café より少し踏み込みますが、同僚同士でも普通に使います。',
          when: 'A small step up from coffee, still normal between colleagues.'
        },
        {
          fr: 'Je peux avoir ton numéro ?',
          en: 'Can I have your number?',
          ja: '連絡先を聞いてもいい？',
          register: 'casual',
          ja_when: 'はっきりした意思表示。断るときは Je préfère pas, désolé(e) で十分です。',
          when: 'Unambiguous. A refusal is simply je préfère pas.'
        },
        {
          fr: "On se revoit quand ?",
          en: 'When will we see each other again?',
          ja: 'また今度いつ会う？',
          register: 'casual',
          ja_when: '会って別れるときに。次があることを前提にした言い方です。',
          when: 'Assumes there will be a next time.'
        },
        {
          fr: 'Tu me manques',
          en: 'I miss you',
          ja: '寂しいよ・会いたいな',
          literal: 'あなたが私に欠けている',
          register: 'casual',
          ja_when: '★主語が英語と逆★ 英語 I miss you では I が主語ですが、フランス語は「あなたが欠けている」で tu が主語。Je te manque は「あなたが私を恋しく思っている」という逆の意味になります。',
          when: 'The subject is reversed from English. Je te manque means the opposite.'
        }
      ]
    },

    {
      type: 'tiles',
      title: '愛称（les petits noms）',
      intro: 'フランス語の愛称は動物や食べ物が多く、日本語の感覚では不思議に響きます。',
      items: [
        { label: 'mon chéri', fr: 'mon chéri', ja: '最も標準的（女性 ma chérie）' },
        { label: 'mon cœur', fr: 'mon cœur', ja: '私の心' },
        { label: 'mon amour', fr: 'mon amour', ja: '私の愛' },
        { label: 'mon trésor', fr: 'mon trésor', ja: '私の宝物' },
        { label: 'mon chou', fr: 'mon chou', ja: '私のキャベツ（！）' },
        { label: 'mon petit chat', fr: 'mon petit chat', ja: '私の子猫' },
        { label: 'mon lapin', fr: 'mon lapin', ja: '私のうさぎ' },
        { label: 'ma puce', fr: 'ma puce', ja: '私のノミ（！）' },
        { label: 'mon canard', fr: 'mon canard', ja: '私のあひる' },
        { label: 'ma biche', fr: 'ma biche', ja: '私の雌鹿' }
      ]
    },

    {
      type: 'note',
      tone: 'warm',
      title: '愛称の使いどころ',
      body: 'mon chou（私のキャベツ）や ma puce（私のノミ）は直訳すると奇妙ですが、' +
            'フランス語では完全に自然な愛情表現です。日本語の「ハニー」を直訳したら蜂蜜になるのと同じことです。',
      list: [
        '★ 恋人・家族・小さな子供に対してのみ ★ 職場や初対面では絶対に使いません',
        'mon chéri / ma chérie が最も一般的で無難',
        'mon chou は子供にもよく使われます（chou はシュークリームの chou でもある）',
        '所有形容詞は愛称の性で決まる … 男性に ma puce と言うこともあります（puce が女性名詞のため）',
        '相手が使ってきたら、同じくらいの温度で返すのが自然です'
      ]
    },

    {
      type: 'phrases',
      title: 'フランス語らしい慣用句',
      intro: '直訳では意味が取れない、でも会話でよく出てくる表現です。',
      items: [
        {
          fr: 'Le coup de foudre',
          en: 'Love at first sight',
          ja: '一目惚れ',
          literal: '雷の一撃',
          register: 'neutral',
          ja_when: '「雷に打たれたような」という比喩。C\'était le coup de foudre のように使います。',
          when: 'Literally a lightning strike — used as a noun.'
        },
        {
          fr: 'Avoir la chair de poule',
          en: 'To have goosebumps',
          ja: '鳥肌が立つ',
          literal: '鶏の肉を持つ',
          register: 'casual',
          ja_when: '感動したとき、寒いとき、怖いときのいずれにも使えます。J\'ai la chair de poule。',
          when: 'Works for emotion, cold, and fear alike.'
        },
        {
          fr: 'Il fait un froid de canard',
          en: "It's freezing cold",
          ja: '凍えるほど寒い',
          literal: 'あひるの寒さがする',
          register: 'casual',
          ja_when: '★天気の話は会話の潤滑油★ 鴨猟の季節が寒かったことに由来すると言われます。',
          when: 'Said to come from the cold of the duck-hunting season.'
        },
        {
          fr: "Je ne sais quoi",
          en: 'An indefinable something',
          ja: '何とも言えない魅力',
          literal: '私は何か分からない',
          register: 'neutral',
          ja_when: 'Elle a un je ne sais quoi のように名詞として使います。英語にもそのまま借用されている表現。',
          when: 'Used as a noun, and borrowed wholesale into English.'
        },
        {
          fr: 'Oh là là !',
          en: 'Oh my!',
          ja: 'あらまあ！',
          register: 'casual',
          ja_when: '★驚き・呆れ・感嘆すべてに使えます★ 良いことにも悪いことにも。là の数を増やすと感情が強まります。',
          when: 'Positive or negative — more làs means more emotion.'
        },
        {
          fr: 'Bof',
          en: 'Meh',
          ja: 'まあ…／別に',
          register: 'casual',
          ja_when: '★非常にフランス語らしい相槌★ 気乗りしない、たいしたことない、という気分を一語で表します。肩をすくめる仕草とセット。',
          when: 'Very French. Comes with a shrug.'
        }
      ]
    },

    {
      type: 'dialogue',
      title: '会話：カフェでの誘い',
      scene: '語学学校で知り合った2人。踏み込みすぎない誘い方の例です。',
      lines: [
        { who: 'A', fr: "Dis, tu fais quoi après le cours ?", en: 'Say, what are you doing after class?', ja: 'ねえ、授業のあと何かある？' },
        { who: 'B', fr: 'Rien de spécial. Pourquoi ?', en: 'Nothing special. Why?', ja: '特に何も。どうして？' },
        { who: 'A', fr: 'Tu veux prendre un café ?', en: 'Do you want to get a coffee?', ja: 'コーヒーでもどう？' },
        { who: 'B', fr: 'Avec plaisir !', en: 'With pleasure!', ja: 'いいね！' },
        { who: 'A', fr: "Super. Je te trouve très sympa, tu sais.", en: "Great. I find you really nice, you know.", ja: 'よかった。君ってすごくいい人だよね。' },
        { who: 'B', fr: 'Merci, toi aussi ! On y va ?', en: 'Thanks, you too! Shall we go?', ja: 'ありがとう、そっちもね。行こうか？' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: 'Tu me manques の意味は？',
          options: ['あなたに足りない', '会いたい・寂しい', 'あなたを逃した', '私を忘れた'],
          answer: 1,
          why: '「あなたが私に欠けている」が直訳。主語が英語と逆で、Je te manque は「あなたが私を恋しがっている」になります。'
        },
        {
          q: '友達に「好きだよ」と言うときは？',
          options: ["Je t'aime", "Je t'aime bien", 'Tu me plais', 'Je te trouve belle'],
          answer: 1,
          why: 'bien を足すと恋愛感情が消えて友情になります【§13】。Je t\'aime は家族と恋人だけ。'
        },
        {
          q: 'mon chou の直訳は？',
          options: ['私の甘いもの', '私のキャベツ', '私の靴', '私の小鳥'],
          answer: 1,
          why: 'キャベツです。フランス語の愛称は食べ物や動物が多く、直訳すると奇妙に見えます。'
        },
        {
          q: '動詞として使ってはいけないのは？',
          options: ['embrasser', 'baiser', 'aimer', 'sortir'],
          answer: 1,
          why: '名詞 un baiser は「キス」ですが、動詞の baiser は非常に下品な意味になります。キスするは embrasser を使ってください。'
        }
      ]
    }
  ]
};
