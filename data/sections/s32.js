/* ============================================================
   Section 32 — Slang & Strong Language
   ============================================================ */

window.S32 = {
  id: 32,
  level: 'A2+',
  duration: '40分',
  title: { en: 'Slang & Strong Language', fr: "L'argot et les gros mots" },

  goals: [
    '映画やドラマで聞こえる俗語を理解できる',
    '自分で使ってよい語と、聞くだけの語を区別できる',
    '日常的な砕けた語彙を身につける',
    'ケベックのフランス語との違いを知る'
  ],

  blocks: [

    {
      type: 'note',
      tone: 'warm',
      title: 'このセクションの目的は「使う」ことではなく「分かる」こと',
      body: 'フランス映画・ドラマ・音楽・SNS には、教科書に載らない語が大量に出てきます。' +
            'それを知らないと、内容の半分を取り落とすことになります。' +
            'また、意味を知らずに真似して使ってしまう事故を防ぐ意味でも、正しい強さを把握しておく価値があります。',
      list: [
        '★ 各カードの丁寧度（●の数）と注意書きを必ず読んでください ★',
        '外国語話者が強い言葉を使うと、ネイティブが使う以上に不快に受け取られることがあります',
        '迷ったら使わない。理解できれば十分です',
        '仕事・目上・初対面では、このセクションの語は一切使いません'
      ]
    },

    {
      type: 'phrases',
      title: '穏やかな感嘆詞 — 誰の前でも使える',
      intro: '驚きや苛立ちを表す、まったく問題のない語です。強い語の代わりに使えます。',
      items: [
        {
          fr: 'Zut !',
          en: 'Darn!',
          ja: 'しまった！',
          register: 'casual',
          ja_when: '子供でも使える最も穏やかな表現。物を落とした、電車を逃した、といった場面で。Zut alors ! と強めることも。',
          when: 'Mild enough for children. Missed trains, dropped things.'
        },
        {
          fr: 'Mince !',
          en: 'Shoot!',
          ja: 'やば！',
          register: 'casual',
          ja_when: 'Zut と同程度。もともと「細い」という意味の語を感嘆詞に転用したものです。',
          when: 'Same level as zut.'
        },
        {
          fr: 'La vache !',
          en: 'Wow! / Blimey!',
          ja: 'うわ！',
          literal: '雌牛！',
          register: 'casual',
          ja_when: '驚きを表します。良い驚きにも悪い驚きにも。Oh la vache ! とも言います。',
          when: 'Surprise, good or bad.'
        },
        {
          fr: 'Punaise !',
          en: 'Sugar!',
          ja: 'もう！',
          literal: '画鋲・南京虫',
          register: 'casual',
          ja_when: 'より強い語の代わりに使われる、いわゆる婉曲表現。安全です。',
          when: 'A minced oath standing in for something stronger.'
        },
        {
          fr: 'Flûte !',
          en: 'Bother!',
          ja: 'ちぇっ！',
          register: 'casual',
          ja_when: 'やや古風で上品な響き。年配の方がよく使います。',
          when: 'Slightly old-fashioned and genteel.'
        }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: '強い言葉について — 理解のための整理',
      body: '以下は日常的に耳にする語ですが、使う場面はごく限られます。' +
            '意味と強さだけ把握して、自分では使わないでおくのが安全です。',
      list: [
        'Merde … 英語の shit 相当。苛立ちの表現として非常に頻繁に聞きます。★ ただし「Merde !」は舞台や試験の前に「頑張れ」の意味でも使われます（Bonne chance は縁起が悪いとされるため）',
        'Putain … 単独では強い間投詞。フランス語で最も頻繁に聞く強い語ですが、外国語話者が使うと浮きます',
        'Bordel … 「めちゃくちゃ」の意味。C\'est le bordel（ぐちゃぐちゃだ）は部屋の散らかりにも使われます',
        'Fait chier … 「うんざりだ」。強い苛立ちの表現',
        'Con / conne … 「ばか」。親しい間柄では軽口にもなりますが、他人に言えば侮辱です',
        '★ 人に向けた侮辱語（connard, salaud, enfoiré など）は、意味を知っていれば十分です。使う場面はありません ★',
        '★ 家族を含む侮辱表現は、フランスでは深刻な侮辱と受け取られます。決して口にしないでください ★'
      ]
    },

    {
      type: 'phrases',
      title: '日常の俗語 — 使って問題ない砕けた語',
      intro: '友人同士なら普通に使われる語彙です。仕事や初対面では標準語に切り替えてください。',
      items: [
        {
          fr: 'un mec',
          en: 'a guy',
          ja: '男・やつ',
          register: 'casual',
          ja_when: '「男性」の砕けた言い方。標準語は un homme。女性版は une meuf（後述の verlan）。',
          when: 'The casual word for a man. Standard: un homme.'
        },
        {
          fr: 'un truc',
          en: 'a thing / a thingy',
          ja: 'なんか・あれ',
          register: 'casual',
          ja_when: '★実用度が非常に高い★ 単語が出てこないときの逃げ道。Le truc pour ouvrir（開けるやつ）のように使えます。',
          when: 'Extremely useful when a word escapes you.'
        },
        {
          fr: 'du fric',
          en: 'cash / dough',
          ja: 'カネ',
          register: 'casual',
          ja_when: 'お金の砕けた言い方。標準語は l\'argent。他に du blé, de la thune とも。',
          when: 'Standard: l\'argent. Also du blé, de la thune.'
        },
        {
          fr: 'une bagnole',
          en: 'a car / motor',
          ja: '車',
          register: 'casual',
          ja_when: '標準語は une voiture。愛着や軽視のニュアンスが混じります。',
          when: 'Standard: une voiture. Carries affection or dismissal.'
        },
        {
          fr: 'les flics',
          en: 'the cops',
          ja: '警察',
          register: 'casual',
          ja_when: '標準語は la police。警察官本人の前では使いません。',
          when: 'Standard: la police. Not to an officer\'s face.'
        },
        {
          fr: 'bouffer',
          en: 'to eat / to scoff',
          ja: '食う',
          register: 'casual',
          ja_when: '標準語は manger。名詞 la bouffe（食べ物）も同じくらいよく使われます。',
          when: 'Standard: manger. The noun la bouffe is equally common.'
        },
        {
          fr: 'le boulot',
          en: 'work / job',
          ja: '仕事',
          register: 'casual',
          ja_when: '標準語は le travail。Je vais au boulot は日常会話でごく普通です。',
          when: 'Standard: le travail. Very common in everyday speech.'
        },
        {
          fr: 'kiffer',
          en: 'to love / be into',
          ja: '好き・ハマる',
          register: 'casual',
          ja_when: '若者言葉。アラビア語由来。Je kiffe ce film（この映画好き）。40代以上はあまり使いません。',
          when: 'Youth slang of Arabic origin. Rare above about 40.'
        },
        {
          fr: 'Laisse tomber',
          en: 'Forget it / Never mind',
          ja: '気にしないで・もういいよ',
          literal: '落ちるままにしておけ',
          register: 'casual',
          ja_when: '★非常に便利★ 説明が面倒なとき、話を切り上げたいときに。丁寧に言うなら Ce n\'est pas grave。',
          when: 'Very handy for dropping a topic. Politer: ce n\'est pas grave.'
        },
        {
          fr: "J'ai la flemme",
          en: "I can't be bothered",
          ja: 'だるい・めんどくさい',
          register: 'casual',
          ja_when: 'la flemme は「気だるさ」。J\'ai la flemme de sortir（出かけるのめんどい）。若者からよく聞きます。',
          when: 'la flemme is the feeling of not wanting to bother.'
        }
      ]
    },

    {
      type: 'note',
      tone: 'warm',
      title: 'le verlan — 音節をひっくり返す言葉遊び',
      body: 'フランスの若者言葉には、単語の音節を逆さにする verlan という仕組みがあります。' +
            'verlan という語自体が l\'envers（逆さ）を逆さにしたものです。' +
            '完全に定着して辞書に載っているものもあります。',
      list: [
        'femme → meuf … 女性',
        'mec → keum … 男',
        'fou → ouf … クレイジー（C\'est ouf ! でよく使われます）',
        'arabe → beur … アラブ系',
        'énervé → vénère … イライラした',
        'fête → teuf … パーティー',
        '★ 使うより理解できることが大切 ★ 音楽や映画の会話に頻出します'
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: 'ケベックのフランス語は罵り言葉が違う',
      body: 'カナダのケベックでは、強い言葉が教会用語から来ています（les sacres）。' +
            'フランス本国の語とはまったく体系が違うので、フランス人にも通じないことがあります。' +
            '理解のためだけに挙げておきます。',
      list: [
        'Tabarnak（tabernacle・聖櫃）… 最も強い部類',
        'Câlice（calice・聖杯）',
        'Crisse（Christ）',
        'Ostie（hostie・聖体）',
        '★ ケベックではこれらが本国の putain 以上に強く響きます ★',
        'ケベックのフランス語は語彙も発音も本国とかなり異なります。旅行の際は別物と考えてください'
      ]
    },

    {
      type: 'phrases',
      title: '砕けた会話でよく出る言い回し',
      items: [
        {
          fr: "C'est ouf !",
          en: "That's crazy!",
          ja: 'やばい！',
          register: 'casual',
          ja_when: 'fou（狂った）の verlan。良い意味でも悪い意味でも「すごい」。若者言葉ですが広く通じます。',
          when: 'verlan of fou. Positive or negative.'
        },
        {
          fr: 'Ça craint',
          en: 'That sucks',
          ja: 'サイテー',
          register: 'casual',
          ja_when: '状況が良くないことを表します。人に対しては使いません。',
          when: 'About situations, not people.'
        },
        {
          fr: 'Ça me soûle',
          en: "It's driving me nuts",
          ja: 'うんざりする',
          register: 'casual',
          ja_when: 'soûler は本来「酔わせる」。転じて「うんざりさせる」。かなり砕けた表現です。',
          when: 'Literally to intoxicate — here, to exasperate.'
        },
        {
          fr: "Ça déchire !",
          en: 'That rocks!',
          ja: '最高！',
          literal: 'それは引き裂く',
          register: 'casual',
          ja_when: '強い賞賛。音楽やイベントの感想として。',
          when: 'Strong praise, typically for music or events.'
        },
        {
          fr: 'Grave !',
          en: 'Totally!',
          ja: 'まじで！／それな！',
          register: 'casual',
          ja_when: '★同意の相槌★ 本来は「重大な」ですが、若者言葉では強い同意を表します。',
          when: 'Literally grave — as slang, strong agreement.'
        },
        {
          fr: 'Nickel !',
          en: 'Perfect!',
          ja: 'バッチリ！',
          literal: 'ニッケル',
          register: 'casual',
          ja_when: '「完璧」の意味。金属のニッケルが錆びず光沢を保つことに由来します。Impec（impeccable の略）も同じ意味。',
          when: 'From the metal, which stays untarnished. Impec means the same.'
        }
      ]
    },

    {
      type: 'dialogue',
      title: '会話：友人同士のくだけたやりとり',
      scene: '20代の友人2人。標準語との差を意識して読んでみてください。',
      lines: [
        { who: 'A', fr: 'Salut ! Ça va le boulot ?', en: 'Hi! How\'s work?', ja: 'やあ、仕事どう？' },
        { who: 'B', fr: "Bof. J'ai la flemme en ce moment.", en: "Meh. I can't be bothered lately.", ja: 'まあまあ。最近だるくて。' },
        { who: 'A', fr: "On va bouffer un truc ce soir ?", en: 'Shall we grab something to eat tonight?', ja: '今夜なんか食べに行く？' },
        { who: 'B', fr: "Grave ! Mais j'ai pas trop de fric.", en: "Totally! But I don't have much cash.", ja: 'いいね。でもあんまり金がない。' },
        { who: 'A', fr: "Laisse tomber, je t'invite.", en: "Forget it, it's on me.", ja: '気にすんな、おごるよ。' },
        { who: 'B', fr: "Nickel ! Merci mec.", en: 'Perfect! Thanks man.', ja: 'サンキュー！' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: '誰の前でも安全に使える感嘆詞は？',
          options: ['Putain', 'Zut', 'Merde', 'Bordel'],
          answer: 1,
          why: 'Zut と Mince は子供でも使える穏やかな表現です。'
        },
        {
          q: 'le verlan とは？',
          options: ['地方の方言', '音節を逆さにする言葉遊び', '古いフランス語', '外来語'],
          answer: 1,
          why: "l'envers（逆さ）を逆さにした語。femme → meuf、fou → ouf など。"
        },
        {
          q: '「仕事」の砕けた言い方は？',
          options: ['le boulot', 'le travail', "l'emploi", 'la carrière'],
          answer: 0,
          why: 'le boulot が日常会話での言い方。le travail が標準語です。'
        },
        {
          q: '舞台や試験の前に「頑張れ」の意味で使われる語は？',
          options: ['Bonne chance', 'Merde', 'Zut', 'Nickel'],
          answer: 1,
          why: 'Bonne chance は縁起が悪いとされ、代わりに Merde ! と言う習慣があります。英語の break a leg と同じ発想です。'
        },
        {
          q: 'ケベックの強い言葉の由来は？',
          options: ['英語', '教会用語', '先住民の言語', '古フランス語'],
          answer: 1,
          why: 'tabernacle, calice, hostie など教会用語が元になっています（les sacres）。'
        }
      ]
    }
  ]
};
