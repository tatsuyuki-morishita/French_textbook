/* ============================================================
   Section 17 — Suggesting an Outing, Part 2
   ============================================================ */

window.S17 = {
  id: 17,
  level: 'A1-A2',
  duration: '40分',
  title: { en: 'Suggesting an Outing, Part 2', fr: 'Proposer une sortie (2/2)' },

  goals: [
    '待ち合わせの場所と時刻を決められる',
    '24時間制で時刻を言える',
    '外出先の語彙を使える',
    '誘いから合流までを一続きの会話でこなせる'
  ],

  blocks: [

    {
      type: 'note',
      title: '時刻は24時間制が基本',
      body: 'フランスでは予定・切符・番組表など、公式な場面はすべて24時間制です。' +
            '会話でも午後の予定は「20時」のように言うのが普通で、' +
            '「夜8時」と言いたいときは huit heures du soir と補います。',
      list: [
        '20h … vingt heures（夜8時）',
        '14h30 … quatorze heures trente（午後2時半）',
        '書くときは 20h00 のように h を使う。コロンは使いません',
        '会話で12時間制を使うなら du matin / de l\'après-midi / du soir を足す',
        '正午は midi、真夜中は minuit。douze heures とはあまり言いません'
      ]
    },

    {
      type: 'phrases',
      title: '時刻を言う',
      items: [
        {
          fr: 'Il est huit heures',
          en: "It's eight o'clock",
          ja: '8時です',
          register: 'neutral',
          ja_when: '時刻を言うときの主語は必ず il。「それは」ではなく形式的な主語です。heures は必ず複数形（1時だけ une heure）。',
          when: 'The subject is always il. heures stays plural except at one o\'clock.'
        },
        {
          fr: 'Il est huit heures et quart',
          en: "It's a quarter past eight",
          ja: '8時15分です',
          register: 'neutral',
          ja_when: 'et quart（15分過ぎ）。公式には huit heures quinze。',
          when: 'The formal equivalent is huit heures quinze.'
        },
        {
          fr: 'Il est huit heures et demie',
          en: "It's half past eight",
          ja: '8時半です',
          register: 'neutral',
          ja_when: '★ demie に e が付くのは heure が女性名詞だから ★ ただし midi et demi / minuit et demi は男性名詞なので e が付きません。',
          when: 'demie agrees with the feminine heure; midi et demi has no e.'
        },
        {
          fr: 'Il est huit heures moins le quart',
          en: "It's a quarter to eight",
          ja: '7時45分です',
          register: 'neutral',
          ja_when: 'moins（引く）で「〜分前」。moins dix なら10分前。日本語と発想が違うので慣れが要ります。',
          when: 'moins counts backwards from the coming hour.'
        },
        {
          fr: 'Rendez-vous à vingt heures',
          en: "Let's meet at 8pm",
          ja: '20時に待ち合わせで',
          register: 'neutral',
          ja_when: 'rendez-vous は名詞で「約束・待ち合わせ」。恋愛の意味に限りません。医者の予約もこれ。',
          when: 'rendez-vous covers any appointment, not just dates.'
        },
        {
          fr: 'On se retrouve où ?',
          en: 'Where shall we meet?',
          ja: 'どこで待ち合わせる？',
          register: 'casual',
          ja_when: 'se retrouver は代名動詞で「落ち合う」。疑問詞を文末に置くのが会話的です。',
          when: 'Question word at the end is the conversational order.'
        },
        {
          fr: 'On se retrouve à quelle heure ?',
          en: 'What time shall we meet?',
          ja: '何時に待ち合わせる？',
          register: 'casual',
          ja_when: '場所とセットで聞く定番。答えは À vingt heures. のように à を付けます。',
          when: 'Answered with à: à vingt heures.'
        },
        {
          fr: 'Devant le cinéma, ça te va ?',
          en: 'In front of the cinema, does that work for you?',
          ja: '映画館の前で大丈夫？',
          register: 'casual',
          ja_when: 'ça te va ?（それで大丈夫？）は合意を取る便利な一言。vous なら ça vous va ?',
          when: 'ça te va ? is the quick way to confirm agreement.'
        },
        {
          fr: 'Je serai un peu en retard',
          en: "I'll be a little late",
          ja: '少し遅れます',
          register: 'neutral',
          ja_when: '遅刻の連絡。en retard（遅れて）／ à l\'heure（時間通り）／ en avance（早めに）。',
          when: 'en retard / à l\'heure / en avance — the three states.'
        }
      ]
    },

    {
      type: 'tiles',
      title: '時間の表現',
      items: [
        { label: 'ce soir', fr: 'ce soir', ja: '今夜' },
        { label: 'demain soir', fr: 'demain soir', ja: '明日の夜' },
        { label: 'ce week-end', fr: 'ce week-end', ja: '今週末' },
        { label: 'la semaine prochaine', fr: 'la semaine prochaine', ja: '来週' },
        { label: 'après-demain', fr: 'après-demain', ja: '明後日' },
        { label: 'dans une heure', fr: 'dans une heure', ja: '1時間後に' },
        { label: 'tout de suite', fr: 'tout de suite', ja: 'すぐに', ipa: 'tu də sɥit' },
        { label: 'plus tard', fr: 'plus tard', ja: '後で' },
        { label: 'midi', fr: 'midi', ja: '正午' },
        { label: 'minuit', fr: 'minuit', ja: '真夜中' },
        { label: "l'après-midi", fr: "l'après-midi", ja: '午後' },
        { label: 'en retard', fr: 'en retard', ja: '遅れて' }
      ]
    },

    {
      type: 'tiles',
      title: '外出先とイベント',
      items: [
        { label: 'un film', fr: 'un film', ja: '映画' },
        { label: 'une pièce de théâtre', fr: 'une pièce de théâtre', ja: '演劇' },
        { label: 'un concert', fr: 'un concert', ja: 'コンサート' },
        { label: 'une exposition', fr: 'une exposition', ja: '展覧会', ipa: 'yn ɛkspozisjɔ̃' },
        { label: 'un spectacle', fr: 'un spectacle', ja: 'ショー' },
        { label: 'un bar', fr: 'un bar', ja: 'バー' },
        { label: 'une boîte', fr: 'une boîte', ja: 'クラブ' },
        { label: 'un musée', fr: 'un musée', ja: '美術館' },
        { label: 'un match', fr: 'un match', ja: '試合' },
        { label: 'une terrasse', fr: 'une terrasse', ja: 'テラス席' },
        { label: 'un pique-nique', fr: 'un pique-nique', ja: 'ピクニック' },
        { label: 'une balade', fr: 'une balade', ja: '散歩' }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: 'フランスの外出でよく出る前提',
      list: [
        'une terrasse … カフェの外の席。天気がよい日は必ず「en terrasse ?」と聞かれます',
        'une boîte（de nuit）… ナイトクラブ。直訳は「箱」',
        'un apéro … 夕食前の軽い飲み。誘いとして非常によく使われます',
        '★ le quart d\'heure de politesse ★ 個人宅の招待は15分ほど遅れて着くのが礼儀。時間ぴったりは早すぎます',
        'レストランやカフェの待ち合わせは時間通りに'
      ]
    },

    {
      type: 'phrases',
      title: '合流してからの一言',
      items: [
        {
          fr: 'Désolé pour le retard !',
          en: 'Sorry for being late!',
          ja: '遅れてごめん！',
          register: 'casual',
          ja_when: '遅れて着いたときの第一声。フォーマルなら Je suis désolé pour le retard。',
          when: 'The first thing you say on arriving late.'
        },
        {
          fr: 'Tu attends depuis longtemps ?',
          en: 'Have you been waiting long?',
          ja: '長く待った？',
          register: 'casual',
          ja_when: 'depuis + 期間は現在形【§13】。Tu as attendu とはしません。',
          when: 'Present tense with depuis, as in §13.'
        },
        {
          fr: "Non, je viens d'arriver",
          en: "No, I've just arrived",
          ja: 'ううん、今来たところ',
          register: 'casual',
          ja_when: '★ venir de + 原形 で「〜したばかり」★ 近い過去を表す便利な形。Je viens de manger（食べたばかり）。',
          when: 'venir de + infinitive = "have just done" — a very useful near-past.'
        },
        {
          fr: 'On y va ?',
          en: 'Shall we go?',
          ja: '行こうか？',
          register: 'casual',
          ja_when: 'y は「そこへ」。On y va ! は「行こう！」という掛け声にもなります。',
          when: 'Also works as a call to action: on y va !'
        },
        {
          fr: "C'était super, merci pour la soirée !",
          en: 'That was great, thanks for the evening!',
          ja: '楽しかった、今夜はありがとう！',
          register: 'casual',
          ja_when: '別れ際の締め。誘ってくれた相手に必ず言いたい一言です。',
          when: 'The expected closing line to whoever organised it.'
        }
      ]
    },

    {
      type: 'dialogue',
      title: '会話：待ち合わせを決めて合流する',
      scene: '前半はメッセージのやりとり、後半は当日の合流です。',
      lines: [
        { who: 'A', fr: 'Salut ! On se retrouve où ce soir ?', en: 'Hi! Where shall we meet tonight?', ja: 'やあ、今夜どこで待ち合わせる？' },
        { who: 'B', fr: 'Devant le cinéma ? Le film commence à vingt heures trente.', en: 'In front of the cinema? The film starts at 8:30pm.', ja: '映画館の前は？ 上映は20時半から。' },
        { who: 'A', fr: "D'accord, rendez-vous à vingt heures quinze alors.", en: 'OK, let\'s meet at 8:15 then.', ja: '了解、じゃあ20時15分で。' },
        { who: 'B', fr: 'Ça marche. À ce soir !', en: 'That works. See you tonight!', ja: 'オッケー。じゃあ今夜。' },
        { who: 'A', fr: 'Désolé pour le retard ! Tu attends depuis longtemps ?', en: 'Sorry I\'m late! Have you been waiting long?', ja: '遅れてごめん、待った？' },
        { who: 'B', fr: "Non, je viens d'arriver. On y va ?", en: "No, I've just arrived. Shall we go?", ja: 'ううん、今来たとこ。行こうか？' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: '「8時半です」の正しい形は？',
          options: ['Il est huit heures et demi', 'Il est huit heures et demie', 'Il est huit heure et demie', "C'est huit heures demie"],
          answer: 1,
          why: 'heure が女性名詞なので demie に e が付きます。midi et demi は男性名詞なので e なし。'
        },
        {
          q: '「7時45分」をフランス語式に言うと？',
          options: ['sept heures quarante-cinq のみ', 'huit heures moins le quart', 'huit heures quinze', 'sept heures et quart'],
          answer: 1,
          why: 'moins le quart で「次の時刻の15分前」。会話ではこちらが自然です。'
        },
        {
          q: "Je viens d'arriver の意味は？",
          options: ['これから着く', '着いたばかり', '着く予定だった', '着けなかった'],
          answer: 1,
          why: 'venir de + 原形 で「〜したばかり」。近い過去を表します。'
        },
        {
          q: '個人宅のディナーに招かれました。何時に着くのが礼儀？',
          options: ['15分前', '時間ぴったり', '15分ほど遅れて', '1時間遅れて'],
          answer: 2,
          why: 'le quart d\'heure de politesse。個人宅では少し遅れるのが礼儀です。レストランでは時間通りに。'
        }
      ]
    }
  ]
};
