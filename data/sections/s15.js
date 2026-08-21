/* ============================================================
   Section 15 — Comprehensive Review (A1)
   ============================================================ */

window.S15 = {
  id: 15,
  level: 'A1',
  duration: '50分',
  title: { en: 'Comprehensive Review', fr: 'Révisions !' },

  goals: [
    'être と avoir を反射的に使い分けられる',
    '3種類の冠詞を場面で選べる',
    '否定文とリエゾンの規則を確認する',
    'A2 に進む前の弱点を自分で見つける'
  ],

  blocks: [

    {
      type: 'note',
      title: 'ここまでの14セクションで身についたこと',
      body: 'ここは新出事項のない復習回です。' +
            '下の各項目を見て「説明できるか」を自分に問いかけてください。' +
            '曖昧なものがあれば、該当セクションに戻ってから A2 に進むのが結局は近道です。',
      list: [
        'être / avoir / -er 動詞 / faire の活用【§2, §5, §6, §13】',
        '定冠詞・不定冠詞・部分冠詞の使い分け【§7】',
        'ne ... pas と否定の de【§5, §7】',
        '所有形容詞は持ち物の性で決まる【§8】',
        '数字 0〜1000 と序数【§4, §10】',
        'リエゾンが起きる場所・起きない場所【§6】',
        '疑問詞と3種類の疑問文【§9】'
      ]
    },

    {
      type: 'conjugation',
      title: '最重要動詞 être（もう一度）',
      forms: [
        { pronoun: 'je',          form: 'suis' },
        { pronoun: 'tu',          form: 'es' },
        { pronoun: 'il / elle',   form: 'est' },
        { pronoun: 'nous',        form: 'sommes' },
        { pronoun: 'vous',        form: 'êtes' },
        { pronoun: 'ils / elles', form: 'sont' }
      ],
      note: '国籍・職業・状態・性質を言うときに使います。Je suis japonais / Je suis étudiant / Je suis fatigué。'
    },

    {
      type: 'conjugation',
      title: '最重要動詞 avoir（もう一度）',
      forms: [
        { pronoun: 'je',          form: 'ai', ipa: 'ʒe' },
        { pronoun: 'tu',          form: 'as' },
        { pronoun: 'il / elle',   form: 'a' },
        { pronoun: 'nous',        form: 'avons' },
        { pronoun: 'vous',        form: 'avez' },
        { pronoun: 'ils / elles', form: 'ont' }
      ],
      note: '所有だけでなく、年齢・空腹・寒さ・恐怖にも使います。J\'ai 25 ans / J\'ai faim / J\'ai froid。英語の be につられないことがポイント。'
    },

    {
      type: 'phrases',
      title: '自己紹介の総まとめ',
      intro: 'ここまでの文法をすべて使って、自分の自己紹介を組み立ててみてください。',
      items: [
        {
          fr: "Bonjour, je m'appelle Yuki",
          en: "Hello, my name is Yuki",
          ja: 'こんにちは、ユキといいます',
          register: 'neutral',
          ja_when: '代名動詞 s\'appeler【§1】。',
          when: 'Reflexive verb from §1.'
        },
        {
          fr: 'Je suis japonaise et je viens de Kyoto',
          en: "I'm Japanese and I come from Kyoto",
          ja: '日本人で、京都出身です',
          register: 'neutral',
          ja_when: '国籍の女性形【§2】と venir de【§2】。',
          when: 'Feminine nationality plus venir de, both from §2.'
        },
        {
          fr: "J'ai vingt-huit ans",
          en: "I'm 28 years old",
          ja: '28歳です',
          register: 'neutral',
          ja_when: '年齢は avoir【§5】、数字は【§4】。',
          when: 'Age with avoir from §5, numbers from §4.'
        },
        {
          fr: 'Je suis ingénieure dans une entreprise japonaise',
          en: "I'm an engineer at a Japanese company",
          ja: '日本の会社で技術者をしています',
          register: 'neutral',
          ja_when: '職業に冠詞なし【§5】、形容詞は名詞の後ろ【§11】。',
          when: 'No article before the profession; the adjective follows the noun.'
        },
        {
          fr: "J'ai un frère mais je n'ai pas de sœur",
          en: "I have a brother but I don't have a sister",
          ja: '兄がいますが、姉妹はいません',
          register: 'neutral',
          ja_when: '否定の de【§7】。une sœur が de sœur に変わっているのが要点。',
          when: 'The negation turns une into de — the §7 rule.'
        },
        {
          fr: "J'habite dans un appartement en centre-ville",
          en: 'I live in a flat in the city centre',
          ja: '中心街のアパートに住んでいます',
          register: 'neutral',
          ja_when: '住居【§8】と街【§11】。dans un がリエゾンして「ダンザン」。',
          when: 'dans un links into one sound.'
        },
        {
          fr: "J'adore la cuisine française et je fais du sport le week-end",
          en: 'I love French food and I do sport at weekends',
          ja: 'フランス料理が大好きで、週末は運動をします',
          register: 'neutral',
          ja_when: 'aimer 系＋定冠詞【§13】、faire de【§13】、le week-end で習慣【§9】。',
          when: 'Three §13 rules and the habitual article from §9 in one sentence.'
        }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: '日本語話者がここまでで最も間違えるところ',
      list: [
        '年齢に être を使ってしまう … × Je suis 25 ans → ○ J\'ai 25 ans',
        '職業に冠詞を付けてしまう … × Je suis un étudiant → ○ Je suis étudiant',
        '好きなものに冠詞を付け忘れる … × J\'aime musique → ○ J\'aime la musique',
        '否定文で冠詞を変えない … × Je n\'ai pas un chien → ○ Je n\'ai pas de chien',
        '複数に des を付け忘れる … × J\'ai livres → ○ J\'ai des livres',
        '所有形容詞を自分の性で選ぶ … 男性でも「私の母」は ma mère',
        'リエゾンを切ってしまう … vous êtes は「ヴゼットゥ」と続ける'
      ]
    },

    {
      type: 'dialogue',
      title: '会話：総合練習',
      scene: 'ここまでの全項目が登場する会話です。分からない箇所があれば、その文法を扱ったセクションに戻ってください。',
      lines: [
        { who: 'A', fr: "Bonjour ! Vous êtes nouvelle ici ?", en: 'Hello! Are you new here?', ja: 'こんにちは。新しくいらした方ですか？' },
        { who: 'B', fr: "Oui, je m'appelle Yuki. Je suis japonaise.", en: "Yes, my name is Yuki. I'm Japanese.", ja: 'はい、ユキです。日本人です。' },
        { who: 'A', fr: "Enchanté ! Qu'est-ce que vous faites dans la vie ?", en: 'Nice to meet you! What do you do?', ja: 'はじめまして。お仕事は？' },
        { who: 'B', fr: "Je suis ingénieure. Et j'apprends le français depuis six mois.", en: "I'm an engineer. And I've been learning French for six months.", ja: '技術者です。フランス語は半年前から勉強しています。' },
        { who: 'A', fr: 'Six mois seulement ? Vous parlez très bien !', en: 'Only six months? You speak very well!', ja: '半年だけ？ とてもお上手ですね。' },
        { who: 'B', fr: "Merci, mais je n'ai pas beaucoup de vocabulaire.", en: "Thanks, but I don't have much vocabulary.", ja: 'ありがとう、でも語彙が少なくて。' },
        { who: 'A', fr: "Ça viendra. Il y a un café juste à côté, on y va ?", en: "It'll come. There's a café right next door, shall we go?", ja: 'すぐ増えますよ。隣にカフェがあるんですが、行きませんか？' },
        { who: 'B', fr: "Avec plaisir !", en: 'With pleasure!', ja: 'よろこんで。' }
      ]
    },

    {
      type: 'quiz',
      title: '総合クイズ（A2 に進む前のチェック）',
      questions: [
        {
          q: '「私は32歳の学生です」を正しく言うと？',
          options: [
            "Je suis un étudiant et je suis 32 ans",
            "Je suis étudiant et j'ai 32 ans",
            "J'ai étudiant et j'ai 32 ans",
            "Je suis étudiant et je suis 32"
          ],
          answer: 1,
          why: '職業に冠詞は付けず、年齢は avoir。この2つを同時に問う定番の引っかけです。'
        },
        {
          q: "J'aime ___ chocolat, mais je ne mange pas ___ chocolat.",
          options: ['le / le', 'du / du', 'le / de', 'du / le'],
          answer: 2,
          why: 'aimer の後は定冠詞 le、否定文では部分冠詞が de に変わります。'
        },
        {
          q: 'リエゾンが起きるのはどれ？',
          options: ['et il', 'les haricots', 'nous avons', 'un étudiant intelligent'],
          answer: 2,
          why: 'nous avons →「ヌザヴォン」。et の後、有音の h の前、単数名詞と形容詞の間ではリエゾンしません。'
        },
        {
          q: '女性が父について話すときの所有形容詞は？',
          options: ['ma père', 'mon père', 'mes père', 'sa père'],
          answer: 1,
          why: 'père が男性名詞なので mon。話し手の性別は関係ありません。'
        },
        {
          q: '「地下鉄はありません」の正しい形は？',
          options: ["Il n'y a pas le métro", "Il n'y a pas de métro", "Il n'y a pas un métro", "Il y a pas des métro"],
          answer: 1,
          why: 'il y a の否定で un が de に変わります。'
        },
        {
          q: '95 をフランス語で言うと？',
          options: ['nonante-cinq', 'quatre-vingt-quinze', 'quatre-vingt-cinq', 'soixante-trente-cinq'],
          answer: 1,
          why: '4×20 + 15。nonante はベルギー・スイスの言い方です。'
        }
      ]
    },

    {
      type: 'note',
      tone: 'warm',
      title: 'ここから先（A1 → A2）',
      body: 'ここまでで、自分のこと・家族・住んでいる場所・好みを現在形で話せるようになりました。' +
            'A2 では「時間軸」が増えます。過去に何をしたか、これから何をするか、' +
            'そして相手を誘ったり断ったりする社会的なやりとりが中心になります。',
      list: [
        '§16-17 … 人を誘う・断る',
        '§18 … 人の外見と性格を描写する',
        '§19 … 買い物のやりとり',
        '§20-21 … 日課と代名動詞',
        '§22 … 過去形（複合過去）で休暇の話をする',
        '§27 … 未来形で予定を話す'
      ]
    }
  ]
};
