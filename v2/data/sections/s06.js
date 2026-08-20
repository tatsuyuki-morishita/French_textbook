/* ============================================================
   Section 6 — Talking About Yourself, Part 2
   ============================================================ */

window.S6 = {
  id: 6,
  level: 'A0-A1',
  duration: '24分',
  title: { en: 'Talking About Yourself, Part 2', fr: 'Parler de soi (2/2)' },

  goals: [
    '-er 動詞の6つの語尾を覚え、未知の -er 動詞も活用できる',
    '-e, -es, -e, -ent が全部同じ音になることを聞き分けられる',
    'リエゾンが起きる場所と起きない場所を判断できる',
    '自分の趣味・日課を文で言える'
  ],

  blocks: [

    {
      type: 'note',
      title: '-er 動詞 — フランス語の動詞の約9割',
      body: 'フランス語の動詞のうち、原形が -er で終わるものが圧倒的多数を占めます。' +
            'しかもこのグループは全部同じ活用をするので、語尾を一度覚えれば何千という動詞が使えるようになります。' +
            'フランス語学習で最も投資効率が高いのがここです。',
      list: [
        'やり方は簡単：原形から -er を取って「語幹」を作り、決まった6つの語尾を足すだけ',
        'parler → parl- + e / es / e / ons / ez / ent',
        '★ -e, -es, -e, -ent の4つは音がまったく同じ ★ 書き分けは目、聞き分けは主語で',
        '実際に音が変わるのは nous（-ons）と vous（-ez）だけ'
      ]
    },

    {
      type: 'conjugation',
      title: 'parler（話す）の活用',
      intro: '太字の語尾が、すべての -er 動詞で共通です。',
      forms: [
        { pronoun: 'je',          form: 'parle' },
        { pronoun: 'tu',          form: 'parles' },
        { pronoun: 'il / elle',   form: 'parle' },
        { pronoun: 'nous',        form: 'parlons' },
        { pronoun: 'vous',        form: 'parlez' },
        { pronoun: 'ils / elles', form: 'parlent' }
      ],
      note: 'je parle / tu parles / il parle / ils parlent はすべて「パルル」で同一の音。フランス人も書くときに間違えるほどです。会話では主語が唯一の手がかりになります。'
    },

    {
      type: 'tiles',
      title: 'よく使う -er 動詞',
      intro: 'すべて parler と同じ活用をします。タップで原形の発音を確認してください。',
      items: [
        { label: 'parler', fr: 'parler', en: '話す' },
        { label: 'travailler', fr: 'travailler', en: '働く' },
        { label: 'habiter', fr: 'habiter', en: '住む' },
        { label: 'étudier', fr: 'étudier', en: '勉強する' },
        { label: 'aimer', fr: 'aimer', en: '好き・愛する' },
        { label: 'écouter', fr: 'écouter', en: '聴く' },
        { label: 'regarder', fr: 'regarder', en: '見る' },
        { label: 'manger', fr: 'manger', en: '食べる' },
        { label: 'danser', fr: 'danser', en: '踊る' },
        { label: 'chanter', fr: 'chanter', en: '歌う' },
        { label: 'jouer', fr: 'jouer', en: '遊ぶ・演奏する' },
        { label: 'chercher', fr: 'chercher', en: '探す' },
        { label: 'marcher', fr: 'marcher', en: '歩く' },
        { label: 'voyager', fr: 'voyager', en: '旅行する' },
        { label: 'acheter', fr: 'acheter', en: '買う' },
        { label: 'donner', fr: 'donner', en: '与える' }
      ]
    },

    {
      type: 'note',
      tone: 'warm',
      title: 'リエゾン — 単語の切れ目が消える',
      body: 'フランス語が速く聞こえる最大の理由がこれです。' +
            '普段は発音しない語末の子音が、次の語が母音で始まるときだけ復活して、次の語とくっつきます。' +
            '文字の切れ目と音の切れ目がずれるので、知らないと「一語も聞き取れない」状態になります。',
      list: [
        'vous êtes … ヴ・エトゥ ではなく「ヴゼットゥ」（s が z の音で復活）',
        'nous avons … 「ヌザヴォン」',
        'les amis … 「レザミ」',
        'un ami … 「アナミ」（n が復活）',
        'petit ami … 「プティタミ」（t が復活）',
        '★ s / x / z は復活すると必ず「z」の音になる ★',
        'et（そして）の後は絶対にリエゾンしない … et un は「エ・アン」'
      ]
    },

    {
      type: 'phrases',
      title: 'リエゾンを含む定番フレーズ',
      intro: 'カタカナ表記を見ると、単語の切れ目が消えているのが分かります。',
      items: [
        {
          fr: 'Vous êtes étudiant ?',
          en: 'Are you a student?',
          ja: '学生さんですか？',
          register: 'formal',
          ja_when: 'リエゾンが2か所（vous_êtes と êtes_étudiant）。「ヴゼットゼテュディヤン」と一続きに聞こえます。',
          when: 'Two liaisons in a row — the word boundaries vanish entirely.'
        },
        {
          fr: 'Nous avons un rendez-vous',
          en: 'We have an appointment',
          ja: '約束があります',
          register: 'neutral',
          ja_when: 'nous_avons と un_rendez-vous。rendez-vous は「デート」だけでなく、医者や美容院の「予約」でも普通に使います。',
          when: 'rendez-vous covers any appointment, not just romantic ones.'
        },
        {
          fr: 'Ils ont deux enfants',
          en: 'They have two children',
          ja: '彼らには子供が2人います',
          register: 'neutral',
          ja_when: 'ils_ont（イルゾン）と deux_enfants（ドゥザンファン）。ils sont（イルソン）との違いは濁るかどうかだけ。',
          when: 'ils ont vs ils sont differ only in one voiced consonant.'
        },
        {
          fr: "J'aime beaucoup la musique",
          en: 'I really like music',
          ja: '音楽が大好きです',
          register: 'neutral',
          ja_when: '好きなものを言うときは定冠詞 la / le / les を付けます。J\'aime musique とは言いません。beaucoup を足すと「とても」。',
          when: 'aimer takes the definite article: la musique, not just musique.'
        },
        {
          fr: 'Je travaille dans un bureau',
          en: 'I work in an office',
          ja: 'オフィスで働いています',
          register: 'neutral',
          ja_when: 'dans_un がリエゾンして「ダンザン」。職場を説明する定型。',
          when: 'dans un links into a single "dahn-zuhn".'
        },
        {
          fr: 'On habite à Paris',
          en: 'We live in Paris',
          ja: 'パリに住んでいます',
          register: 'casual',
          ja_when: '★重要★ 会話では nous より on を使います。意味は「私たち」ですが、活用は il / elle と同じ3人称単数。フランス人の日常会話では nous はほとんど聞きません。',
          when: 'In speech, on replaces nous almost entirely. It conjugates like il.'
        }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: 'リエゾンしてはいけない場所',
      list: [
        'et の後 … et un は必ず「エ・アン」と切る',
        '有音の h の前 … les haricots は「レ・アリコ」（レザリコ とは言わない）',
        '主語の名詞と動詞の間 … Les enfants|arrivent は切る',
        '単数名詞と形容詞の間 … un étudiant|intelligent は切る',
        '迷ったら切ってよい。リエゾンし過ぎる方が不自然に聞こえます'
      ]
    },

    {
      type: 'phrases',
      title: '趣味と日課を言う',
      items: [
        {
          fr: "J'aime lire",
          en: 'I like reading',
          ja: '読書が好きです',
          register: 'neutral',
          ja_when: 'aimer の後に動詞を続けるときは原形のまま。英語の I like to read と同じ発想です。',
          when: 'aimer + infinitive, exactly like "like to read".'
        },
        {
          fr: 'Je joue au tennis',
          en: 'I play tennis',
          ja: 'テニスをします',
          register: 'neutral',
          ja_when: '★スポーツは jouer à、楽器は jouer de★ Je joue au tennis / Je joue du piano。この区別は必ず問われます。',
          when: 'Sports take jouer à; instruments take jouer de.'
        },
        {
          fr: 'Je joue du piano',
          en: 'I play the piano',
          ja: 'ピアノを弾きます',
          register: 'neutral',
          ja_when: '楽器なので de + le = du。ギターなら Je joue de la guitare。',
          when: 'de + le contracts to du before a masculine instrument.'
        },
        {
          fr: 'Je regarde des séries',
          en: 'I watch series',
          ja: 'ドラマを見ます',
          register: 'casual',
          ja_when: 'Netflix などの連続ドラマは série。映画は film。テレビ全般は la télé。',
          when: 'série for shows, film for movies, la télé for TV in general.'
        },
        {
          fr: "Je n'aime pas cuisiner",
          en: "I don't like cooking",
          ja: '料理は好きじゃないです',
          register: 'neutral',
          ja_when: 'aimer の否定。この場合 pas de には変わりません（後ろが動詞なので）。',
          when: 'No article change here — the negation is followed by a verb.'
        }
      ]
    },

    {
      type: 'dialogue',
      title: '会話：週末の予定',
      scene: '職場の金曜日。同僚同士の雑談です。',
      lines: [
        { who: 'A', fr: "Qu'est-ce que tu fais ce week-end ?", en: 'What are you doing this weekend?', ja: '今週末なにするの？' },
        { who: 'B', fr: "Je joue au foot samedi. Et toi ?", en: "I'm playing football on Saturday. And you?", ja: '土曜にサッカー。そっちは？' },
        { who: 'A', fr: "On visite un musée avec des amis.", en: "We're visiting a museum with friends.", ja: '友達と美術館に行くよ。' },
        { who: 'B', fr: "Ah, j'aime beaucoup les musées !", en: 'Ah, I really like museums!', ja: 'いいね、美術館好きなんだ。' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: 'nous に対応する -er 動詞の語尾は？',
          options: ['-ez', '-ons', '-ent', '-es'],
          answer: 1,
          why: 'nous parlons。nous(-ons) と vous(-ez) だけが音の変わる形です。'
        },
        {
          q: '音が他と違うのはどれ？',
          options: ['je parle', 'tu parles', 'nous parlons', 'ils parlent'],
          answer: 2,
          why: '他の3つはすべて「パルル」で同音。nous parlons だけ「パルロン」になります。'
        },
        {
          q: 'リエゾンが起きないのはどれ？',
          options: ['vous êtes', 'les amis', 'et un', 'nous avons'],
          answer: 2,
          why: 'et の後では絶対にリエゾンしません。「エ・アン」と切ります。'
        },
        {
          q: '「ピアノを弾きます」の正しい形は？',
          options: ['Je joue au piano', 'Je joue du piano', 'Je joue le piano', 'Je joue piano'],
          answer: 1,
          why: '楽器は jouer de。de + le = du で Je joue du piano。スポーツなら jouer à です。'
        }
      ]
    }
  ]
};
