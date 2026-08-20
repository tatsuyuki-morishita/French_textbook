/* ============================================================
   Section 13 — Preferences & Activities
   ============================================================ */

window.S13 = {
  id: 13,
  level: 'A1',
  duration: '39分',
  title: { en: 'Preferences & Activities', fr: 'Parler de ses goûts et de ses activités' },

  goals: [
    '好き嫌いを5段階の強さで言い分けられる',
    'aimer 系の動詞の後に定冠詞を付ける規則を守れる',
    'faire / jouer を活動の種類で使い分けられる',
    '趣味について会話を続けられる'
  ],

  blocks: [

    {
      type: 'note',
      title: '好き嫌いは強さの段階で覚える',
      body: '「好き」を表す語は複数あり、強さの順に並びます。' +
            '会話では強さを間違えると変な印象になるので、この序列を意識してください。',
      list: [
        "J'adore … 大好き【最上級】",
        "J'aime beaucoup … とても好き",
        "J'aime bien … 好き【★ bien が付くと弱まる ★】",
        "J'aime … 好き（人に対しては「愛している」になるので注意）",
        "Je n'aime pas … 好きじゃない",
        "Je déteste … 大嫌い【最下級】"
      ]
    },

    {
      type: 'note',
      tone: 'warm',
      title: "J'aime と J'aime bien の違いは重要",
      body: '英語の I like it well のような感覚で bien を足すと強まりそうですが、フランス語では逆に弱まります。' +
            '特に人に対して使うときは意味が大きく変わるので注意が必要です。',
      list: [
        "Je t'aime … 愛してる【恋愛の告白】",
        "Je t'aime bien … あなたのこと好きだよ【友達として】",
        '★ bien を足すと恋愛感情が消える ★ 告白のつもりで bien を付けると友達宣言になります',
        'ものに対して使うときはこの区別はほぼ気にしなくて構いません'
      ]
    },

    {
      type: 'phrases',
      title: '好き嫌いを言う',
      items: [
        {
          fr: "J'adore la musique",
          en: 'I love music',
          ja: '音楽が大好きです',
          register: 'neutral',
          ja_when: '★ aimer 系の後は必ず定冠詞 ★ J\'adore musique は誤り。la / le / les を落とさないでください。',
          when: 'The definite article is obligatory after adorer and aimer.'
        },
        {
          fr: "J'aime bien le sport",
          en: 'I quite like sports',
          ja: 'スポーツはわりと好きです',
          register: 'casual',
          ja_when: '「そこそこ好き」。bien が付くことで「大好きではないが嫌いでもない」というトーンになります。',
          when: 'Deliberately moderate — not enthusiasm.'
        },
        {
          fr: "Je n'aime pas regarder la télé",
          en: "I don't like watching TV",
          ja: 'テレビを見るのは好きじゃないです',
          register: 'neutral',
          ja_when: 'aimer の後に動詞が来るときは原形のまま。この場合は冠詞の de 変化は起きません。',
          when: 'aimer + infinitive; no article change under negation here.'
        },
        {
          fr: 'Je déteste faire le ménage',
          en: 'I hate cleaning',
          ja: '掃除が大嫌いです',
          register: 'casual',
          ja_when: 'faire le ménage で「掃除をする」。détester はかなり強い語なので、軽い不満には使いません。',
          when: 'détester is strong — not for mild dislikes.'
        },
        {
          fr: "Ça ne me plaît pas trop",
          en: "I'm not really into it",
          ja: 'あまり好みじゃないです',
          literal: 'それは私をあまり喜ばせない',
          register: 'neutral',
          ja_when: 'détester より柔らかい否定。相手の勧めを断るときに角が立ちません。plaire は「〜の気に入る」という主語が逆転する動詞です。',
          when: 'Softer than détester — good for declining a suggestion politely.'
        },
        {
          fr: "Qu'est-ce que tu aimes faire ?",
          en: 'What do you like doing?',
          ja: '何をするのが好き？',
          register: 'casual',
          ja_when: '趣味を尋ねる最も自然な形。Quels sont tes hobbies ? は教科書的で、実際にはあまり使われません。',
          when: 'Far more idiomatic than asking about "hobbies" directly.'
        }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: 'faire / jouer / 単独動詞 — 活動の言い方3種',
      body: '同じ「〜をする」でも、活動の種類で使う動詞が変わります。ここは丸暗記より、下の対応で覚えると速いです。',
      list: [
        'jouer à + スポーツ・ゲーム … jouer au foot, jouer aux cartes',
        'jouer de + 楽器 … jouer du piano, jouer de la guitare',
        'faire de + 活動全般 … faire du vélo, faire de la natation, faire de la photo',
        '専用の動詞があるものはそれを使う … nager（泳ぐ）, cuisiner（料理する）, lire（読む）',
        '同じ活動に2通りあることも … nager = faire de la natation'
      ]
    },

    {
      type: 'tiles',
      title: '趣味・活動',
      items: [
        { label: 'lire', fr: 'lire', en: '読書する' },
        { label: 'écouter de la musique', fr: 'écouter de la musique', en: '音楽を聴く' },
        { label: 'regarder la télé', fr: 'regarder la télé', en: 'テレビを見る' },
        { label: 'jouer aux jeux vidéo', fr: 'jouer aux jeux vidéo', en: 'ゲームをする' },
        { label: 'jouer au football', fr: 'jouer au football', en: 'サッカーをする' },
        { label: 'jouer au tennis', fr: 'jouer au tennis', en: 'テニスをする' },
        { label: 'faire de la natation', fr: 'faire de la natation', en: '水泳をする' },
        { label: 'faire du vélo', fr: 'faire du vélo', en: '自転車に乗る' },
        { label: 'faire la cuisine', fr: 'faire la cuisine', en: '料理をする' },
        { label: 'dessiner', fr: 'dessiner', en: '絵を描く' },
        { label: 'faire de la photo', fr: 'faire de la photo', en: '写真を撮る' },
        { label: 'voyager', fr: 'voyager', en: '旅行する' },
        { label: 'faire du sport', fr: 'faire du sport', en: '運動する' },
        { label: 'sortir avec des amis', fr: 'sortir avec des amis', en: '友達と出かける' },
        { label: 'faire les magasins', fr: 'faire les magasins', en: '買い物をする' },
        { label: 'se promener', fr: 'se promener', en: '散歩する' }
      ]
    },

    {
      type: 'conjugation',
      title: '動詞 faire（する・作る）',
      intro: '不規則動詞ですが使用頻度が非常に高く、天気・料理・スポーツなど幅広く使います。',
      forms: [
        { pronoun: 'je',          form: 'fais' },
        { pronoun: 'tu',          form: 'fais' },
        { pronoun: 'il / elle',   form: 'fait' },
        { pronoun: 'nous',        form: 'faisons' },
        { pronoun: 'vous',        form: 'faites' },
        { pronoun: 'ils / elles', form: 'font' }
      ],
      note: 'je fais / tu fais / il fait はすべて「フェ」で同音。nous faisons は綴りが ai なのに「フゾン」と読む例外です。vous faites も「フェットゥ」で、-ez にならない数少ない動詞のひとつ。'
    },

    {
      type: 'phrases',
      title: '活動について話す',
      items: [
        {
          fr: 'Je fais du vélo le week-end',
          en: 'I cycle at weekends',
          ja: '週末は自転車に乗ります',
          register: 'neutral',
          ja_when: '定冠詞 le が付いた le week-end は「毎週末」の意味。Section 9 の le lundi と同じ規則です。',
          when: 'le week-end with the article means every weekend.'
        },
        {
          fr: 'Je joue aux cartes avec mes amis',
          en: 'I play cards with my friends',
          ja: '友達とトランプをします',
          register: 'casual',
          ja_when: 'ゲームなので jouer à。à + les = aux。',
          when: 'à + les contracts to aux.'
        },
        {
          fr: 'Je fais de la guitare depuis cinq ans',
          en: "I've been playing guitar for five years",
          ja: '5年前からギターをやっています',
          register: 'neutral',
          ja_when: '★ depuis + 期間は現在形で使う ★ 英語の現在完了進行形にあたる内容を、フランス語は現在形で表します。Je faisais とはしません。',
          when: 'depuis takes the present tense, where English uses a perfect.'
        },
        {
          fr: 'On sort ce soir ?',
          en: 'Shall we go out tonight?',
          ja: '今夜出かけない？',
          register: 'casual',
          ja_when: '会話では nous より on。語尾を上げるだけで誘いの疑問文になります。',
          when: 'on plus rising intonation is the everyday way to propose something.'
        }
      ]
    },

    {
      type: 'dialogue',
      title: '会話：趣味の話',
      scene: '同僚とランチ。趣味の話になっています。',
      lines: [
        { who: 'A', fr: "Qu'est-ce que tu aimes faire le week-end ?", en: 'What do you like doing at weekends?', ja: '週末は何するのが好き？' },
        { who: 'B', fr: "J'adore faire du vélo. Et toi ?", en: 'I love cycling. And you?', ja: '自転車が大好き。そっちは？' },
        { who: 'A', fr: "Moi, je fais de la photo. J'aime bien la nature.", en: 'Me, I do photography. I quite like nature.', ja: '僕は写真。自然が好きなんだ。' },
        { who: 'B', fr: 'Tu joues d\'un instrument aussi ?', en: 'Do you play an instrument too?', ja: '楽器もやるの？' },
        { who: 'A', fr: "Oui, je joue du piano depuis dix ans.", en: "Yes, I've played piano for ten years.", ja: 'うん、ピアノを10年やってる。' },
        { who: 'B', fr: "Dix ans ! Moi, je déteste ça, je n'ai pas la patience.", en: "Ten years! Me, I hate that, I don't have the patience.", ja: '10年！ 私は無理、根気がないの。' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: "Je t'aime bien の意味は？",
          options: ['とても愛している', '友達として好き', '大嫌い', '愛し始めている'],
          answer: 1,
          why: 'bien が付くと恋愛感情が消えて「友達として好き」になります。告白では絶対に付けないでください。'
        },
        {
          q: '「ギターを弾きます」の正しい形は？',
          options: ['Je joue à la guitare', 'Je joue de la guitare', 'Je joue la guitare', 'Je fais la guitare'],
          answer: 1,
          why: '楽器は jouer de。スポーツは jouer à です。'
        },
        {
          q: '「5年前からやっています」の時制は？',
          options: ['現在形', '過去形', '未来形', '複合過去'],
          answer: 0,
          why: 'depuis + 期間は現在形。英語の現在完了進行形にあたる内容を現在形で表します。'
        },
        {
          q: 'nous faisons の発音は？',
          options: ['ヌ・フェゾン', 'ヌ・フゾン', 'ヌ・ファイゾン', 'ヌ・フェソン'],
          answer: 1,
          why: '綴りは ai ですが「フゾン」と読む例外です。'
        }
      ]
    }
  ]
};
