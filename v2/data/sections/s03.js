/* ============================================================
   Section 3 — Greeting & Saying Goodbye
   ============================================================ */

window.S3 = {
  id: 3,
  level: 'A0',
  duration: '21分',
  title: { en: 'Greeting & Saying Goodbye', fr: 'Saluer & dire au revoir' },

  goals: [
    '時間帯と相手に応じて挨拶を選べる',
    '「元気？」を丁寧・カジュアルの両方で言え、返事もできる',
    '別れの挨拶を、次に会う予定に応じて使い分けられる',
    'お礼・謝罪の定番表現を場面ごとに使える'
  ],

  blocks: [

    {
      type: 'note',
      title: '挨拶は「言うか言わないか」ではなく「必ず言う」もの',
      body: 'フランスでは挨拶が社会的な義務に近い扱いです。' +
            '店に入って何も言わずに商品を見始める、エレベーターで無言、といった行動は' +
            '日本では普通でも、フランスでは「無礼」と受け取られます。' +
            '逆に言えば Bonjour ひとつで印象が大きく変わるので、費用対効果が非常に高い一語です。'
    },

    {
      type: 'phrases',
      title: '出会いの挨拶',
      items: [
        {
          fr: 'Bonjour',
          en: 'Hello / Good day',
          ja: 'こんにちは',
          register: 'neutral',
          ja_when: '朝〜夕方18時ごろまで。誰にでも。フランス語で最初に覚えるべき一語。',
          when: 'Morning until roughly 6pm, to anyone.'
        },
        {
          fr: 'Bonsoir',
          en: 'Good evening',
          ja: 'こんばんは',
          register: 'neutral',
          ja_when: '18時ごろから。到着したときに言う挨拶で、帰るときには使いません。',
          when: 'From about 6pm, on arrival only.'
        },
        {
          fr: 'Salut',
          en: 'Hi / Bye',
          ja: 'やあ／じゃあね',
          register: 'casual',
          ja_when: '友達・同年代のみ。会うときも別れるときも使える便利な語ですが、店員や年上には絶対に使いません。',
          when: 'Peers only, for both greeting and parting.'
        },
        {
          fr: 'Coucou',
          en: 'Hey there',
          ja: 'やっほー',
          register: 'casual',
          ja_when: '親しい友達・家族・恋人へのごく砕けた挨拶。LINE のようなメッセージの書き出しにもよく使われます。大人の男性同士ではあまり使いません。',
          when: 'Very informal, common in messages between close friends and family.'
        },
        {
          fr: 'Bonne journée',
          en: 'Have a good day',
          ja: 'よい一日を',
          register: 'neutral',
          ja_when: '別れ際に言う言葉。店を出るとき店員さんが必ず言ってくれるので、Merci, vous aussi ! と返せると自然です。',
          when: 'Said on parting, not on arrival. Shopkeepers say it as you leave.'
        },
        {
          fr: 'Bonne soirée',
          en: 'Have a good evening',
          ja: 'よい夜を',
          register: 'neutral',
          ja_when: '夕方以降の別れ際。Bonsoir が「到着」、Bonne soirée が「別れ」と対になっています。',
          when: 'The evening counterpart of bonne journée, used when leaving.'
        }
      ]
    },

    {
      type: 'phrases',
      title: '「元気？」と聞く',
      intro: '丁寧度が3段階あります。相手との距離で選んでください。',
      items: [
        {
          fr: 'Comment allez-vous ?',
          en: 'How are you?',
          ja: 'お元気ですか？',
          register: 'formal',
          ja_when: '一番丁寧。初対面の大人、上司、年配の方に。直訳は「どのように行っていますか」で、体調・調子を尋ねる決まり文句です。',
          when: 'The most formal of the three. Literally "how do you go".'
        },
        {
          fr: 'Comment ça va ?',
          en: 'How are you?',
          ja: '調子どう？',
          register: 'neutral',
          ja_when: '中間の丁寧さ。同僚、顔見知り、少し親しくなった相手に。迷ったときに使いやすい形。',
          when: 'The safe middle register — colleagues and acquaintances.'
        },
        {
          fr: 'Ça va ?',
          en: 'You OK?',
          ja: '元気？',
          register: 'casual',
          ja_when: '友達に。フランス語で最も短い会話は「Ça va ?」「Ça va.」で成立します。同じ語が質問にも答えにもなる便利な表現。',
          when: 'Friends. Doubles as both question and answer.'
        },
        {
          fr: 'Ça va bien, merci. Et vous ?',
          en: "I'm fine, thanks. And you?",
          ja: '元気です、ありがとう。あなたは？',
          register: 'formal',
          ja_when: '定番の返し。Et vous ? を付けて質問を返すのが礼儀です。友達なら Et toi ? に変えます。',
          when: 'Returning the question with et vous ? is expected, not optional.'
        },
        {
          fr: 'Pas mal',
          en: 'Not bad',
          ja: 'まあまあ',
          literal: '悪くない',
          register: 'casual',
          ja_when: '「絶好調ではないが問題ない」という正直な返事。フランス人は Ça va très bien ! と大げさに答えないことが多く、これくらいが自然です。',
          when: 'A very common, understated reply. French speakers rarely gush.'
        },
        {
          fr: 'Ça va pas trop',
          en: 'Not so great',
          ja: 'あんまり良くない',
          register: 'casual',
          ja_when: '本当に調子が悪いときに。親しい相手にだけ。書き言葉なら Ça ne va pas trop と ne が入ります。',
          when: 'Close friends only. In writing the ne comes back: ça ne va pas trop.'
        }
      ]
    },

    {
      type: 'phrases',
      title: '別れの挨拶',
      intro: '「次にいつ会うか」で言い方が変わります。',
      items: [
        {
          fr: 'Au revoir',
          en: 'Goodbye',
          ja: 'さようなら',
          literal: '再会まで',
          register: 'neutral',
          ja_when: '一番標準的な別れの挨拶。誰にでも、どんな場面でも使えます。店を出るときは Au revoir, bonne journée ! とセットで。',
          when: 'The default goodbye, safe in every situation.'
        },
        {
          fr: 'À bientôt',
          en: 'See you soon',
          ja: 'また近いうちに',
          register: 'neutral',
          ja_when: '具体的な日は決まっていないが、また会うつもりがあるとき。',
          when: 'No date set, but you expect to meet again.'
        },
        {
          fr: 'À demain',
          en: 'See you tomorrow',
          ja: 'また明日',
          register: 'neutral',
          ja_when: '明日また会うことが確定しているとき。職場や学校で毎日使います。',
          when: 'Only when you will actually see them tomorrow.'
        },
        {
          fr: 'À tout à l\'heure',
          en: 'See you in a bit',
          ja: 'また後でね',
          register: 'casual',
          ja_when: '同じ日のうちにまた会うとき。昼休みに別れて午後また会う、など。「トゥタルール」と一気に言います。',
          when: 'Later the same day. Said as one blurred chunk.'
        },
        {
          fr: 'Bonne nuit',
          en: 'Good night',
          ja: 'おやすみなさい',
          register: 'neutral',
          ja_when: '★注意★ これは「寝る前」だけ。夜に人と別れるときは Bonne soirée です。Bonne nuit を別れ際に使うと「もう寝るの？」という意味になってしまいます。',
          when: 'Only before sleep. Leaving an evening event takes bonne soirée instead.'
        },
        {
          fr: 'Bon week-end',
          en: 'Have a good weekend',
          ja: 'よい週末を',
          register: 'neutral',
          ja_when: '金曜日の別れ際の定番。職場でも店でも言われます。',
          when: 'Standard Friday parting line.'
        }
      ]
    },

    {
      type: 'phrases',
      title: 'お礼と謝罪',
      items: [
        {
          fr: 'Merci beaucoup',
          en: 'Thank you very much',
          ja: 'どうもありがとう',
          register: 'neutral',
          ja_when: 'Merci だけでも十分ですが、beaucoup を足すと丁寧さが上がります。',
          when: 'Merci alone is fine; beaucoup raises the warmth.'
        },
        {
          fr: 'De rien',
          en: "You're welcome",
          ja: 'どういたしまして',
          literal: '何でもないことから',
          register: 'neutral',
          ja_when: 'Merci への一番普通の返し。カジュアルにも丁寧にも使えます。',
          when: 'The default reply to merci.'
        },
        {
          fr: 'Je vous en prie',
          en: "You're very welcome",
          ja: 'どういたしまして（丁寧）',
          register: 'formal',
          ja_when: 'De rien より格式が高い返し。ホテル、レストラン、ビジネスの場で。「どうぞ」と何かを勧める意味でも使います。',
          when: 'More formal than de rien. Also means "please, go ahead".'
        },
        {
          fr: 'Excusez-moi',
          en: 'Excuse me',
          ja: 'すみません',
          register: 'formal',
          ja_when: '人に声をかけるとき、道を尋ねるとき、人前を通るとき。「これから何かをお願いします」の合図。友達には Excuse-moi。',
          when: 'To get attention or pass by. Precedes a request.'
        },
        {
          fr: 'Pardon',
          en: 'Sorry / Pardon',
          ja: 'ごめんなさい／失礼',
          register: 'neutral',
          ja_when: 'ぶつかった、足を踏んだなど「すでにやってしまった」ときの一言。聞き取れなくて聞き返すときにも使えます。',
          when: 'After the fact — bumping into someone. Also "sorry, what?"'
        },
        {
          fr: "Je suis désolé",
          en: "I'm sorry",
          ja: '申し訳ありません',
          register: 'formal',
          ja_when: '本格的な謝罪。遅刻した、迷惑をかけた、悪い知らせを伝えるとき。女性は désolée と書きますが音は同じ。',
          when: 'A real apology, heavier than pardon.'
        }
      ]
    },

    {
      type: 'dialogue',
      title: '会話：パン屋にて',
      scene: '朝のパン屋。客と店員のやりとりは、ほぼこの型で決まっています。',
      lines: [
        { who: '客', fr: 'Bonjour madame !', en: 'Hello madam!', ja: 'こんにちは。' },
        { who: '店', fr: 'Bonjour ! Comment allez-vous ?', en: 'Hello! How are you?', ja: 'こんにちは。お元気ですか？' },
        { who: '客', fr: 'Ça va bien, merci. Et vous ?', en: "I'm well, thanks. And you?", ja: '元気です、ありがとう。そちらは？' },
        { who: '店', fr: 'Très bien, merci. Voilà.', en: 'Very well, thanks. Here you are.', ja: 'おかげさまで。はいどうぞ。' },
        { who: '客', fr: 'Merci beaucoup. Au revoir !', en: 'Thank you very much. Goodbye!', ja: 'ありがとうございます。さようなら。' },
        { who: '店', fr: 'Au revoir, bonne journée !', en: 'Goodbye, have a good day!', ja: 'さようなら、よい一日を。' }
      ]
    },

    {
      type: 'note',
      tone: 'warm',
      title: 'la bise — 頬にキスする挨拶',
      body: '親しい間柄では、頬を軽く合わせて音を鳴らす挨拶（la bise）をします。' +
            '実際に唇をつけるわけではなく、頬と頬を触れさせるだけです。',
      list: [
        '回数は地域差が大きい。パリは2回、南仏は3回、一部地域は4回',
        '男性同士は握手が普通。ごく親しい家族や幼馴染なら bise もある',
        '初対面のビジネスでは握手。bise は友人関係になってから',
        '判断に迷ったら相手の動きを待つ。手を出されたら握手、頬を寄せられたら bise'
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: '夜21時、友人宅のディナーから帰ります。玄関で言うのは？',
          options: ['Bonne nuit', 'Bonsoir', 'Bonne soirée', 'Bonjour'],
          answer: 2,
          why: 'Bonne soirée（よい夜を）。Bonne nuit は寝る直前だけ、Bonsoir は到着の挨拶です。'
        },
        {
          q: 'Merci に対する一番標準的な返事は？',
          options: ['De rien', 'Pardon', 'Ça va', 'Salut'],
          answer: 0,
          why: 'De rien。もっと丁寧にするなら Je vous en prie です。'
        },
        {
          q: '人混みで人にぶつかってしまいました。言うのは？',
          options: ['Excusez-moi', 'Pardon', 'S\'il vous plaît', 'Bonjour'],
          answer: 1,
          why: 'Pardon は「してしまった後」。Excusez-moi は「これから声をかける／通ります」の前置きです。'
        },
        {
          q: '同じ日の午後にまた会う約束をして別れます。',
          options: ['À demain', 'À bientôt', "À tout à l'heure", 'Au revoir'],
          answer: 2,
          why: "À tout à l'heure は同じ日のうちにまた会うとき。À bientôt は日付未定です。"
        }
      ]
    }
  ]
};
