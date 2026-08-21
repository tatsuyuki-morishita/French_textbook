/* ============================================================
   Section 21 — Daily Routine, Part 2
   ============================================================ */

window.S21 = {
  id: 21,
  level: 'A1-A2',
  duration: '39分',
  title: { en: 'Daily Routine, Part 2', fr: 'Parler de son quotidien (2/2)' },

  goals: [
    '夕方から就寝までの日課を言える',
    '仕事や学校の一日を説明できる',
    '頻度を表す副詞を使い分けられる',
    '自分の一日を通しで語れる'
  ],

  blocks: [

    {
      type: 'tiles',
      title: '夜の日課',
      items: [
        { label: 'rentrer à la maison', fr: 'rentrer à la maison', ja: '帰宅する' },
        { label: 'dîner', fr: 'dîner', ja: '夕食をとる' },
        { label: 'faire la vaisselle', fr: 'faire la vaisselle', ja: '皿を洗う' },
        { label: 'regarder la télé', fr: 'regarder la télé', ja: 'テレビを見る' },
        { label: 'lire un livre', fr: 'lire un livre', ja: '本を読む' },
        { label: 'prendre un bain', fr: 'prendre un bain', ja: '風呂に入る' },
        { label: 'se détendre', fr: 'se détendre', ja: 'くつろぐ' },
        { label: 'se coucher', fr: 'se coucher', ja: '寝る' },
        { label: "s'endormir", fr: "s'endormir", ja: '眠りにつく' },
        { label: 'dormir', fr: 'dormir', ja: '眠る' },
        { label: 'ranger', fr: 'ranger', ja: '片付ける' },
        { label: 'appeler des amis', fr: 'appeler des amis', ja: '友達に電話する' }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: '「寝る」を表す3語の違い',
      list: [
        'se coucher … ベッドに入る【行為】Je me couche à minuit',
        "s'endormir … 眠りに落ちる【瞬間】Je m'endors tout de suite",
        'dormir … 眠っている【状態】Je dors huit heures',
        '★ 日本語の「寝る」は3つ全部を含むので、場面で選び分ける必要があります',
        'faire la grasse matinée … 朝寝坊する（直訳は「太った朝をする」）'
      ]
    },

    {
      type: 'conjugation',
      title: '動詞 prendre（取る・食べる・乗る）',
      intro: '食事・交通機関・シャワーなど、驚くほど広く使う不規則動詞です。',
      forms: [
        { pronoun: 'je',          form: 'prends' },
        { pronoun: 'tu',          form: 'prends' },
        { pronoun: 'il / elle',   form: 'prend' },
        { pronoun: 'nous',        form: 'prenons' },
        { pronoun: 'vous',        form: 'prenez' },
        { pronoun: 'ils / elles', form: 'prennent' }
      ],
      note: 'je / tu / il の3つは「プラン」で同音。nous prenons と vous prenez では n が1つになり、ils prennent で2つに戻ります。同じ形の動詞に apprendre（学ぶ）、comprendre（理解する）があります。'
    },

    {
      type: 'phrases',
      title: '仕事・学校の一日',
      items: [
        {
          fr: 'Je vais au travail en métro',
          en: 'I go to work by metro',
          ja: '地下鉄で通勤しています',
          register: 'neutral',
          ja_when: '★ 交通手段は en ★ en métro / en bus / en voiture / en train。ただし徒歩と自転車は à … à pied / à vélo。',
          when: 'en for enclosed transport, à for foot and bicycle.'
        },
        {
          fr: 'Je prends le métro tous les jours',
          en: 'I take the metro every day',
          ja: '毎日地下鉄に乗ります',
          register: 'neutral',
          ja_when: '交通機関は prendre。tous les jours（毎日）は頻度の基本表現です。',
          when: 'prendre for catching transport.'
        },
        {
          fr: 'Je travaille de neuf heures à dix-sept heures',
          en: 'I work from 9 to 5',
          ja: '9時から17時まで働きます',
          register: 'neutral',
          ja_when: 'de ... à ... で時間の範囲。日付なら du ... au ...【§14】と形が変わります。',
          when: 'de ... à ... for times; du ... au ... for dates.'
        },
        {
          fr: 'Je déjeune à midi',
          en: 'I have lunch at noon',
          ja: '正午に昼食をとります',
          register: 'neutral',
          ja_when: 'déjeuner は動詞で「昼食をとる」、名詞で「昼食」。フランスの昼休みは1時間以上取ることも多く、しっかり座って食べる文化です。',
          when: 'French lunch breaks are long and taken seriously.'
        },
        {
          fr: 'Je fais une pause café',
          en: 'I take a coffee break',
          ja: 'コーヒー休憩をとります',
          register: 'casual',
          ja_when: 'faire une pause で「休憩する」。職場で最もよく交わされる誘いのひとつ。',
          when: 'One of the most common workplace invitations.'
        },
        {
          fr: 'Je finis à dix-huit heures',
          en: 'I finish at 6pm',
          ja: '18時に終わります',
          register: 'neutral',
          ja_when: 'finir は -ir 動詞。je finis / tu finis / il finit / nous finissons / vous finissez / ils finissent。',
          when: 'finir is a regular -ir verb.'
        },
        {
          fr: 'Je rentre vers dix-neuf heures',
          en: 'I get home around 7pm',
          ja: '19時ごろ帰宅します',
          register: 'neutral',
          ja_when: '★ rentrer は「自分の場所に戻る」★ retourner（別の場所に戻る）、revenir（こちらに戻る）と使い分けます。vers で「〜ごろ」。',
          when: 'rentrer means returning to your own place, unlike retourner.'
        },
        {
          fr: 'Je me couche vers minuit',
          en: 'I go to bed around midnight',
          ja: '0時ごろ寝ます',
          register: 'neutral',
          ja_when: '代名動詞【§20】。minuit は「真夜中」で男性名詞です。',
          when: 'Pronominal verb from §20.'
        }
      ]
    },

    {
      type: 'note',
      tone: 'warm',
      title: '頻度を表す副詞',
      body: '日課を語るには頻度の語が欠かせません。強さの順に並べておきます。',
      list: [
        'toujours … いつも',
        'souvent … よく',
        'quelquefois / parfois … ときどき',
        'rarement … めったに〜ない',
        'ne ... jamais … 決して〜ない（Je ne fais jamais de sport）',
        'tous les jours … 毎日 / toutes les semaines … 毎週',
        'une fois par semaine … 週に1回 / deux fois par mois … 月に2回',
        '★ 位置は動詞の直後 ★ Je vais souvent au cinéma（Je souvent vais は誤り）'
      ]
    },

    {
      type: 'phrases',
      title: '頻度を使って話す',
      items: [
        {
          fr: 'Je vais souvent au cinéma',
          en: 'I often go to the cinema',
          ja: 'よく映画に行きます',
          register: 'neutral',
          ja_when: '★ 頻度の副詞は動詞の直後 ★ 英語の I often go と語順が違います。',
          when: 'The adverb follows the verb, unlike English word order.'
        },
        {
          fr: 'Je ne fais jamais de sport',
          en: 'I never do sport',
          ja: '運動は全然しません',
          register: 'casual',
          ja_when: '★ ne ... jamais は ne ... pas と同じはさむ形 ★ pas は入りません。否定なので du sport が de sport に変わります。',
          when: 'jamais replaces pas — never both. And du becomes de.'
        },
        {
          fr: 'Je fais du sport deux fois par semaine',
          en: 'I do sport twice a week',
          ja: '週2回運動します',
          register: 'neutral',
          ja_when: '「回数 + fois + par + 期間」。une fois par jour（1日1回）。',
          when: 'number + fois + par + period.'
        },
        {
          fr: 'Le soir, je me détends devant une série',
          en: 'In the evening I relax in front of a series',
          ja: '夜はドラマを見ながらくつろぎます',
          register: 'casual',
          ja_when: 'le soir に定冠詞が付くと「毎晩」【§9】。文頭に置くと「夜はね」と話題を提示する形になります。',
          when: 'Fronting le soir sets it as the topic.'
        },
        {
          fr: "D'habitude je dors sept heures",
          en: 'I usually sleep seven hours',
          ja: '普段は7時間寝ます',
          register: 'neutral',
          ja_when: "d'habitude（普段は）は文頭に置くのが自然。généralement も同じように使えます。",
          when: "d'habitude sits naturally at the front of the sentence."
        }
      ]
    },

    {
      type: 'dialogue',
      title: '会話：一日の流れ',
      scene: 'カフェで友人同士が生活リズムの話をしています。',
      lines: [
        { who: 'A', fr: 'Tu travailles de quelle heure à quelle heure ?', en: 'What hours do you work?', ja: '何時から何時まで働いてるの？' },
        { who: 'B', fr: 'De neuf heures à dix-huit heures, avec une heure de pause à midi.', en: 'From nine to six, with an hour break at noon.', ja: '9時から18時まで、昼に1時間休憩。' },
        { who: 'A', fr: 'Tu rentres comment ?', en: 'How do you get home?', ja: '帰りは？' },
        { who: 'B', fr: 'Je prends le métro. Je rentre vers dix-neuf heures.', en: 'I take the metro. I get home around seven.', ja: '地下鉄。19時ごろ帰ります。' },
        { who: 'A', fr: "Et le soir, qu'est-ce que tu fais ?", en: 'And in the evening, what do you do?', ja: '夜は何してるの？' },
        { who: 'B', fr: "Je dîne, je me détends, et je me couche vers minuit.", en: 'I have dinner, relax, and go to bed around midnight.', ja: '夕飯を食べて、くつろいで、0時ごろ寝ます。' },
        { who: 'A', fr: 'Tu fais du sport ?', en: 'Do you do sport?', ja: '運動はする？' },
        { who: 'B', fr: "Presque jamais. Je devrais, mais je n'ai pas le temps !", en: "Almost never. I should, but I don't have time!", ja: 'ほとんどしない。やるべきなんだけど時間がなくて。' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: '「よく映画に行きます」の正しい語順は？',
          options: ['Je souvent vais au cinéma', 'Souvent je vais au cinéma', 'Je vais souvent au cinéma', 'Je vais au cinéma souvent'],
          answer: 2,
          why: '頻度の副詞は動詞の直後。英語の I often go とは語順が違います。'
        },
        {
          q: '「運動は全然しません」の正しい形は？',
          options: ['Je ne fais pas jamais de sport', 'Je ne fais jamais de sport', 'Je fais jamais pas de sport', 'Je ne fais jamais du sport'],
          answer: 1,
          why: 'jamais が pas の代わりになります。両方は入りません。また否定で du → de に変わります。'
        },
        {
          q: '「地下鉄で行きます」の前置詞は？',
          options: ['à métro', 'en métro', 'par métro', 'de métro'],
          answer: 1,
          why: '乗り物の中に入るものは en。徒歩と自転車だけ à pied / à vélo です。'
        },
        {
          q: "s'endormir の意味は？",
          options: ['ベッドに入る', '眠りに落ちる', '眠っている', '目を覚ます'],
          answer: 1,
          why: 'se coucher（ベッドに入る）→ s\'endormir（眠りに落ちる）→ dormir（眠っている）という3段階です。'
        }
      ]
    }
  ]
};
