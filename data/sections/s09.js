/* ============================================================
   Section 9 — Asking Questions
   ============================================================ */

window.S9 = {
  id: 9,
  level: 'A1',
  duration: '26分',
  title: { en: 'Asking Questions', fr: 'Questionner' },

  goals: [
    '疑問詞 qui / que / où / quand / comment / pourquoi を使い分けられる',
    '曜日と月をフランス語で言える',
    'quel を名詞の性と数に合わせて選べる',
    '日付と時刻を尋ね、答えられる'
  ],

  blocks: [

    {
      type: 'note',
      title: '疑問文は3通りの作り方がある',
      body: 'フランス語の疑問文には丁寧さの違う3つの形があります。' +
            '会話でどれを使うかは、相手との距離と場面で決まります。',
      list: [
        '① 語尾を上げるだけ … Tu viens ? 【最もカジュアル、会話の主役】',
        '② est-ce que を付ける … Est-ce que tu viens ? 【中立、いつでも安全】',
        '③ 主語と動詞を入れ替える … Viens-tu ? 【硬い、書き言葉や公式な場】',
        '初心者は ① と ② だけ使えれば会話は十分に成立します'
      ]
    },

    {
      type: 'phrases',
      title: '疑問詞',
      items: [
        {
          fr: 'Qui est-ce ?',
          en: 'Who is it?',
          ja: '誰ですか？',
          register: 'neutral',
          ja_when: '写真を見ながら、ドアのノックに答えて、など。qui は「誰」。',
          when: 'Pointing at a photo, or answering a knock.'
        },
        {
          fr: "Qu'est-ce que c'est ?",
          en: 'What is it?',
          ja: 'これは何ですか？',
          register: 'neutral',
          ja_when: '知らないものを指して尋ねる万能フレーズ。長いですが「ケスクセ」の一塊で覚えます。市場やレストランで大活躍。',
          when: 'Learn it as one chunk: "kess-kuh-SAY". Invaluable in markets.'
        },
        {
          fr: 'Où est la gare ?',
          en: 'Where is the station?',
          ja: '駅はどこですか？',
          register: 'neutral',
          ja_when: 'où は「どこ」。場所を尋ねる基本形。gare の部分を入れ替えて使い回せます。',
          when: 'A reusable frame — swap the noun.'
        },
        {
          fr: 'Quand est-ce que tu arrives ?',
          en: 'When do you arrive?',
          ja: 'いつ着くの？',
          register: 'casual',
          ja_when: 'quand は「いつ」。カジュアルに Tu arrives quand ? と疑問詞を最後に置くのも会話では普通です。',
          when: 'In speech the question word often moves to the end: tu arrives quand ?'
        },
        {
          fr: 'Comment ça marche ?',
          en: 'How does it work?',
          ja: 'これどうやって使うの？',
          register: 'neutral',
          ja_when: '機械・切符の券売機・アプリなどの使い方を尋ねる決まり文句。comment は「どのように」。',
          when: 'Ticket machines, apps, anything with buttons.'
        },
        {
          fr: 'Pourquoi ?',
          en: 'Why?',
          ja: 'なぜ？',
          register: 'neutral',
          ja_when: '答えは Parce que...（なぜなら）で始めます。pourquoi と parce que はセットで覚えてください。',
          when: 'The answer starts with parce que — learn the pair together.'
        },
        {
          fr: 'Combien ça coûte ?',
          en: 'How much does it cost?',
          ja: 'いくらですか？',
          register: 'neutral',
          ja_when: 'combien は「いくつ・いくら」。値段なら Ça coûte combien ? / C\'est combien ? も同じ意味。',
          when: 'Three interchangeable phrasings for the same question.'
        },
        {
          fr: 'Est-ce que vous parlez anglais ?',
          en: 'Do you speak English?',
          ja: '英語を話せますか？',
          register: 'formal',
          ja_when: '困ったときの切り札。ただしフランスでは英語が通じない場面も多いので、まず Bonjour から入るのが礼儀です。',
          when: 'Open with bonjour first — leading with this can read as rude.'
        }
      ]
    },

    {
      type: 'tiles',
      title: '曜日（les jours）',
      intro: '★曜日は小文字で書きます★ 英語のように大文字にはしません。',
      items: [
        { label: 'lundi', fr: 'lundi', ja: '月曜' },
        { label: 'mardi', fr: 'mardi', ja: '火曜' },
        { label: 'mercredi', fr: 'mercredi', ja: '水曜' },
        { label: 'jeudi', fr: 'jeudi', ja: '木曜' },
        { label: 'vendredi', fr: 'vendredi', ja: '金曜' },
        { label: 'samedi', fr: 'samedi', ja: '土曜' },
        { label: 'dimanche', fr: 'dimanche', ja: '日曜' }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: 'lundi と le lundi は意味が違う',
      list: [
        'Je travaille lundi … （今度の）月曜に働く【特定の1日】',
        'Je travaille le lundi … 毎週月曜に働く【習慣】',
        '定冠詞が付くだけで「毎週」の意味になります。予定を伝えるときは要注意',
        'フランスの週は月曜始まり。カレンダーも lundi が左端です'
      ]
    },

    {
      type: 'tiles',
      title: '月（les mois）',
      intro: '月も小文字。日付は「日 + 月」の順で言います。',
      items: [
        { label: 'janvier', fr: 'janvier', ja: '1月' },
        { label: 'février', fr: 'février', ja: '2月' },
        { label: 'mars', fr: 'mars', ja: '3月' },
        { label: 'avril', fr: 'avril', ja: '4月' },
        { label: 'mai', fr: 'mai', ja: '5月' },
        { label: 'juin', fr: 'juin', ja: '6月' },
        { label: 'juillet', fr: 'juillet', ja: '7月' },
        { label: 'août', fr: 'août', ja: '8月' },
        { label: 'septembre', fr: 'septembre', ja: '9月' },
        { label: 'octobre', fr: 'octobre', ja: '10月' },
        { label: 'novembre', fr: 'novembre', ja: '11月' },
        { label: 'décembre', fr: 'décembre', ja: '12月' }
      ]
    },

    {
      type: 'note',
      title: 'quel — 名詞に合わせて4つの形',
      body: '「どの・何の」を意味する疑問形容詞。後ろの名詞の性と数に合わせて形が変わりますが、' +
            '4つとも発音はまったく同じ「ケル」です。書き分けだけの問題です。',
      list: [
        'quel + 男性単数 … Quel jour ? / Quel âge ?',
        'quelle + 女性単数 … Quelle heure ? / Quelle date ?',
        'quels + 男性複数 … Quels livres ?',
        'quelles + 女性複数 … Quelles couleurs ?'
      ]
    },

    {
      type: 'phrases',
      title: '日付と時刻を尋ねる',
      items: [
        {
          fr: 'Quel jour sommes-nous ?',
          en: 'What day is it?',
          ja: '今日は何曜日ですか？',
          register: 'neutral',
          ja_when: '答えは Nous sommes lundi. または On est lundi.（会話ではこちら）。',
          when: 'Answered with nous sommes lundi, or on est lundi in speech.'
        },
        {
          fr: 'Quelle heure est-il ?',
          en: 'What time is it?',
          ja: '今何時ですか？',
          register: 'formal',
          ja_when: 'heure は女性名詞なので quelle。カジュアルには Il est quelle heure ? とも言います。',
          when: 'heure is feminine, hence quelle. Casually: il est quelle heure ?'
        },
        {
          fr: 'Quel âge avez-vous ?',
          en: 'How old are you?',
          ja: 'おいくつですか？',
          register: 'formal',
          ja_when: '答えは J\'ai ... ans。avoir を使うことを忘れずに。年齢を尋ねるのは初対面ではやや踏み込んだ質問です。',
          when: 'Answered with avoir, never être. Somewhat personal for a first meeting.'
        },
        {
          fr: "Quelle est ta date d'anniversaire ?",
          en: 'What is your birthday?',
          ja: '誕生日はいつ？',
          register: 'casual',
          ja_when: '答えは「日 + 月」の順。C\'est le 15 mars.（3月15日）。1日だけ le premier を使います。',
          when: 'Answer as day + month. The 1st is le premier, not le un.'
        },
        {
          fr: "On est le combien aujourd'hui ?",
          en: "What's the date today?",
          ja: '今日は何日？',
          register: 'casual',
          ja_when: '日付を尋ねる会話的な言い方。答えは On est le 12.',
          when: 'The everyday spoken way to ask the date.'
        }
      ]
    },

    {
      type: 'dialogue',
      title: '会話：予定を決める',
      scene: '友人同士が来週の約束をしています。',
      lines: [
        { who: 'A', fr: "Qu'est-ce que tu fais mardi ?", en: 'What are you doing on Tuesday?', ja: '火曜なにしてる？' },
        { who: 'B', fr: 'Rien de spécial. Pourquoi ?', en: 'Nothing special. Why?', ja: '特に何も。どうして？' },
        { who: 'A', fr: 'On va au cinéma ? Le film commence à huit heures.', en: 'Shall we go to the cinema? The film starts at eight.', ja: '映画行かない？8時からなんだ。' },
        { who: 'B', fr: "Bonne idée ! On se retrouve où ?", en: 'Good idea! Where shall we meet?', ja: 'いいね。どこで待ち合わせる？' },
        { who: 'A', fr: 'Devant le cinéma, à sept heures et demie.', en: 'In front of the cinema, at half past seven.', ja: '映画館の前で7時半に。' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: '「今何時ですか」の正しい形は？',
          options: ['Quel heure est-il ?', 'Quelle heure est-il ?', 'Quels heure est-il ?', 'Quel est heure ?'],
          answer: 1,
          why: 'heure は女性名詞なので quelle。ただし4つの形は全部「ケル」と同じ発音です。'
        },
        {
          q: 'Je travaille le lundi の意味は？',
          options: ['今度の月曜に働く', '毎週月曜に働く', '月曜は休み', '月曜まで働く'],
          answer: 1,
          why: '定冠詞 le が付くと「毎週〜」という習慣の意味になります。'
        },
        {
          q: '会話で最もよく使われる疑問文の形は？',
          options: ['語尾を上げるだけ', 'est-ce que を付ける', '主語と動詞を入れ替える', 'どれも同じ頻度'],
          answer: 0,
          why: '倒置（Viens-tu ?）は書き言葉寄りで硬い形。日常会話では Tu viens ? が圧倒的です。'
        },
        {
          q: '「なぜ？」への答えの書き出しは？',
          options: ['Pour', 'Parce que', 'Pourtant', 'Comment'],
          answer: 1,
          why: 'Pourquoi ? には Parce que ... で答えます。セットで覚えてください。'
        }
      ]
    }
  ]
};
