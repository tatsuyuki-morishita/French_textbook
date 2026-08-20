/* ============================================================
   Section 7 — Articles
   ============================================================ */

window.S7 = {
  id: 7,
  level: 'A0-A1',
  duration: '22分',
  title: { en: 'Articles', fr: 'Les articles' },

  goals: [
    '定冠詞 le / la / les を名詞の性と数で選べる',
    '不定冠詞 un / une / des との違いを説明できる',
    '部分冠詞 du / de la を使って「量の一部」を言える',
    '否定文で冠詞が de に変わる規則を使える'
  ],

  blocks: [

    {
      type: 'note',
      title: 'フランス語の名詞には冠詞がほぼ必ず付く',
      body: '英語では I like music と裸で言えますが、フランス語は J\'aime la musique と冠詞が要ります。' +
            '日本語には冠詞という発想自体がないので、ここは「付け忘れないこと」を意識するだけで精度が上がります。' +
            'そして冠詞は3種類あり、それぞれ役割がはっきり分かれています。',
      list: [
        '定冠詞 le / la / les … 特定のもの、または「〜というもの全般」',
        '不定冠詞 un / une / des … 数えられるものの「ひとつ」「いくつか」',
        '部分冠詞 du / de la … 数えられないものの「いくらか」'
      ]
    },

    {
      type: 'tiles',
      title: '定冠詞（the）',
      intro: '特定できるもの、および「〜というもの一般」に付けます。',
      items: [
        { label: 'le', fr: 'le livre', en: '男性単数' },
        { label: 'la', fr: 'la table', en: '女性単数' },
        { label: "l'", fr: "l'ami", en: '母音の前（男女とも）' },
        { label: 'les', fr: 'les livres', en: '複数（男女とも）' }
      ]
    },

    {
      type: 'phrases',
      title: '定冠詞を使う場面',
      items: [
        {
          fr: "J'aime le café",
          en: 'I like coffee',
          ja: 'コーヒーが好きです',
          register: 'neutral',
          ja_when: '「コーヒーというもの全般が好き」。aimer / adorer / détester の後は必ず定冠詞です。J\'aime café とは言いません。',
          when: 'aimer, adorer, and détester always take the definite article.'
        },
        {
          fr: 'Le livre est sur la table',
          en: 'The book is on the table',
          ja: 'その本はテーブルの上にあります',
          register: 'neutral',
          ja_when: '話し手と聞き手の両方が「どの本か」分かっている場合。英語の the と同じ使い方。',
          when: 'Both speakers know which book — the same as English "the".'
        },
        {
          fr: 'Les Français aiment le fromage',
          en: 'The French like cheese',
          ja: 'フランス人はチーズが好きです',
          register: 'neutral',
          ja_when: '「〜人は」と集団全体を言うときも定冠詞。国民・民族を指すときは大文字で書きます。',
          when: 'Whole-category statements take les. Note the capital when it means the people.'
        }
      ]
    },

    {
      type: 'tiles',
      title: '不定冠詞（a / an / some）',
      intro: '数えられるものに付けます。「どれでもいい1つ」「いくつか」。',
      items: [
        { label: 'un', fr: 'un livre', en: '男性単数' },
        { label: 'une', fr: 'une table', en: '女性単数' },
        { label: 'des', fr: 'des livres', en: '複数' }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: 'des は英語にない冠詞',
      body: '英語では some books の some を省略して I have books と言えますが、' +
            'フランス語では J\'ai des livres と des が必須です。' +
            '「複数形には des」と機械的に覚えてしまってください。落としやすい代表格です。'
    },

    {
      type: 'phrases',
      title: '不定冠詞と部分冠詞',
      items: [
        {
          fr: "J'ai un frère et une sœur",
          en: 'I have a brother and a sister',
          ja: '兄弟が1人と姉妹が1人います',
          register: 'neutral',
          ja_when: '数えられるものが1つずつ。frère は男性名詞、sœur は女性名詞なので冠詞が変わります。',
          when: 'Countable singulars — the gender of each noun picks the article.'
        },
        {
          fr: 'Je voudrais du pain',
          en: 'I would like some bread',
          ja: 'パンをください',
          register: 'formal',
          ja_when: '★部分冠詞★ パンは「1個」ではなく「いくらか」なので du。パン屋やレストランで最もよく使う形です。Je voudrais は Je veux より丁寧。',
          when: 'Partitive: an unspecified quantity of an uncountable thing.'
        },
        {
          fr: "Je bois de l'eau",
          en: 'I drink water',
          ja: '水を飲みます',
          register: 'neutral',
          ja_when: '水は数えられないので部分冠詞。eau は母音で始まるので de l\' になります。',
          when: "de la becomes de l' before a vowel."
        },
        {
          fr: 'Je mange de la viande',
          en: 'I eat meat',
          ja: '肉を食べます',
          register: 'neutral',
          ja_when: 'viande は女性名詞で数えられないので de la。「肉というもの全般が好き」なら J\'aime la viande と定冠詞に変わります。',
          when: 'Contrast with j\'aime la viande — liking takes the definite article.'
        },
        {
          fr: "Je n'ai pas de voiture",
          en: "I don't have a car",
          ja: '車は持っていません',
          register: 'neutral',
          ja_when: '★否定の de★ 否定文では un / une / des / du / de la がすべて de ひとつに変わります。J\'ai une voiture → Je n\'ai pas de voiture。',
          when: 'Under negation every indefinite and partitive article collapses to de.'
        },
        {
          fr: "Ce n'est pas un problème",
          en: "That's not a problem",
          ja: '問題ありません',
          register: 'neutral',
          ja_when: '★例外★ être の否定では冠詞が de に変わりません。「〜ではない」と正体を否定しているだけだからです。',
          when: 'The de rule does not apply after être.'
        }
      ]
    },

    {
      type: 'note',
      tone: 'warm',
      title: '同じ名詞、違う冠詞 — 意味がどう変わるか',
      list: [
        "J'aime le poisson … 魚（というもの）が好き【定冠詞・全般】",
        "Je mange du poisson … 魚を（いくらか）食べる【部分冠詞・量の一部】",
        "J'achète un poisson … 魚を1匹買う【不定冠詞・個体】",
        "Le poisson est sur la table … その魚はテーブルの上【定冠詞・特定】",
        '動詞で決まると考えると速い：aimer 系 → 定冠詞、manger / boire → 部分冠詞、acheter → 不定冠詞'
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: '名詞の性を見分ける手がかり',
      body: '完全な規則はありませんが、語尾に強い傾向があります。迷ったら辞書を引くのが結局は速いです。',
      list: [
        '女性が多い語尾 … -e, -tion, -sion, -té, -ette, -ance, -ence（la nation, la liberté）',
        '男性が多い語尾 … -age, -ment, -eau, -isme, -eur（le fromage, le moment）',
        '例外は多い … le musée, le lycée, la page, la plage',
        '★覚え方★ 新しい名詞は必ず冠詞ごと覚える。「table」ではなく「la table」で暗記する'
      ]
    },

    {
      type: 'dialogue',
      title: '会話：カフェで注文',
      scene: '朝のカフェ。冠詞の3種類が全部出てきます。',
      lines: [
        { who: '店', fr: 'Bonjour ! Vous désirez ?', en: 'Hello! What would you like?', ja: 'いらっしゃいませ。ご注文は？' },
        { who: '客', fr: 'Je voudrais un café et un croissant.', en: 'I would like a coffee and a croissant.', ja: 'コーヒーとクロワッサンをひとつずつ。' },
        { who: '店', fr: 'Très bien. Vous voulez du sucre ?', en: 'Very good. Would you like some sugar?', ja: 'かしこまりました。砂糖はお使いになりますか？' },
        { who: '客', fr: "Non merci, je ne prends pas de sucre.", en: "No thanks, I don't take sugar.", ja: 'いえ、砂糖は入れません。' },
        { who: '店', fr: "J'aime le café sans sucre aussi.", en: 'I like coffee without sugar too.', ja: '私も砂糖なしのコーヒーが好きです。' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: '「私はチーズが好きです」の正しい形は？',
          options: ["J'aime fromage", "J'aime du fromage", "J'aime le fromage", "J'aime un fromage"],
          answer: 2,
          why: 'aimer の後は必ず定冠詞。「チーズというもの全般が好き」という意味になります。'
        },
        {
          q: '「私はチーズを食べます」なら？',
          options: ['Je mange le fromage', 'Je mange du fromage', 'Je mange fromage', 'Je mange un fromage'],
          answer: 1,
          why: '「いくらかのチーズ」を食べるので部分冠詞 du。aimer との違いがここです。'
        },
        {
          q: "J'ai des amis を否定文にすると？",
          options: ["Je n'ai pas des amis", "Je n'ai pas de amis", "Je n'ai pas d'amis", "Je n'ai pas les amis"],
          answer: 2,
          why: '否定で des → de に変わり、amis が母音で始まるので d\' に縮まります。'
        },
        {
          q: '冠詞が de に変わらないのはどの動詞の否定？',
          options: ['avoir', 'manger', 'être', 'acheter'],
          answer: 2,
          why: "être は例外。Ce n'est pas un problème のように冠詞がそのまま残ります。"
        }
      ]
    }
  ]
};
