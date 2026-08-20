/* ============================================================
   Section 18 — Personality & Appearance
   ============================================================ */

window.S18 = {
  id: 18,
  level: 'A1-A2',
  duration: '34分',
  title: { en: 'Personality & Appearance', fr: 'Décrire la personnalité et le physique' },

  goals: [
    '人の外見を髪・目・体型で描写できる',
    '性格を表す形容詞を男女の形で使える',
    '形容詞の位置（前か後か）を判断できる',
    '人物を数文で紹介できる'
  ],

  blocks: [

    {
      type: 'note',
      title: '外見を描写する3つの動詞',
      body: '何を描写するかで使う動詞が変わります。ここを取り違えると通じません。',
      list: [
        'être + 形容詞 … 体型・全体の印象。Il est grand.（背が高い）',
        'avoir + 体の部分 … 髪・目。Elle a les cheveux bruns.（茶髪だ）',
        'porter … 身につけているもの。Il porte des lunettes.（眼鏡をかけている）',
        '★ 髪や目は avoir ★ Elle est cheveux bruns は誤り',
        '★ 体の部分には定冠詞 ★ avoir les cheveux（ses cheveux ではない）'
      ]
    },

    {
      type: 'phrases',
      title: '外見を言う',
      items: [
        {
          fr: 'Il est grand et mince',
          en: 'He is tall and slim',
          ja: '彼は背が高くて細身です',
          register: 'neutral',
          ja_when: '体型は être。女性なら Elle est grande et mince（mince は男女同形）。',
          when: 'Build takes être. mince is invariable.'
        },
        {
          fr: 'Elle est de taille moyenne',
          en: 'She is of average height',
          ja: '彼女は中背です',
          register: 'neutral',
          ja_when: 'grand / petit と言い切りにくいときの便利な表現。taille は「身長・サイズ」。',
          when: 'Useful when neither grand nor petit fits.'
        },
        {
          fr: 'Elle a les cheveux bruns',
          en: 'She has brown hair',
          ja: '彼女は茶髪です',
          register: 'neutral',
          ja_when: '★ 髪は必ず avoir + 定冠詞 les ★ cheveux は常に複数形で扱います。',
          when: 'cheveux is always plural, and always takes les.'
        },
        {
          fr: "Il a les yeux bleus",
          en: 'He has blue eyes',
          ja: '彼は青い目をしています',
          register: 'neutral',
          ja_when: '目も avoir + les。yeux は œil（目）の不規則複数形です。',
          when: 'yeux is the irregular plural of œil.'
        },
        {
          fr: 'Elle a les cheveux longs et raides',
          en: 'She has long straight hair',
          ja: '彼女は長いストレートヘアです',
          register: 'neutral',
          ja_when: 'cheveux が複数なので形容詞にも s。raide（まっすぐ）／ frisé（カールした）／ ondulé（ウェーブ）。',
          when: 'The adjectives pluralise to match cheveux.'
        },
        {
          fr: 'Il porte des lunettes',
          en: 'He wears glasses',
          ja: '彼は眼鏡をかけています',
          register: 'neutral',
          ja_when: '身につけるものは porter。lunettes は常に複数形。',
          when: 'porter for anything worn. lunettes is always plural.'
        },
        {
          fr: 'Il a une barbe',
          en: 'He has a beard',
          ja: '彼はひげを生やしています',
          register: 'neutral',
          ja_when: '髭は avoir。une moustache（口ひげ）。剃っているなら Il est rasé。',
          when: 'une moustache for a moustache; il est rasé for clean-shaven.'
        },
        {
          fr: 'Elle ressemble à sa mère',
          en: 'She looks like her mother',
          ja: '彼女はお母さん似です',
          register: 'neutral',
          ja_when: 'ressembler à で「〜に似ている」。前置詞 à を落とさないように。',
          when: 'ressembler always takes à.'
        }
      ]
    },

    {
      type: 'tiles',
      title: '外見の語彙',
      items: [
        { label: 'grand', fr: 'grand', ja: '背が高い → grande' },
        { label: 'petit', fr: 'petit', ja: '背が低い → petite' },
        { label: 'mince', fr: 'mince', ja: '細身（男女同形）' },
        { label: 'gros', fr: 'gros', ja: '太った → grosse' },
        { label: 'blond', fr: 'blond', ja: '金髪 → blonde' },
        { label: 'brun', fr: 'brun', ja: '茶髪 → brune' },
        { label: 'roux', fr: 'roux', ja: '赤毛 → rousse' },
        { label: 'les cheveux', fr: 'les cheveux', ja: '髪（常に複数）' },
        { label: 'les yeux', fr: 'les yeux', ja: '目（œil の複数）' },
        { label: 'une barbe', fr: 'une barbe', ja: 'あごひげ' },
        { label: 'une moustache', fr: 'une moustache', ja: '口ひげ' },
        { label: 'des lunettes', fr: 'des lunettes', ja: '眼鏡（常に複数）' },
        { label: 'court', fr: 'court', ja: '短い → courte' },
        { label: 'long', fr: 'long', ja: '長い → longue' },
        { label: 'frisé', fr: 'frisé', ja: 'カールした' },
        { label: 'chauve', fr: 'chauve', ja: 'はげた（男女同形）' }
      ]
    },

    {
      type: 'tiles',
      title: '性格の形容詞',
      intro: 'カッコ内は女性形の作り方です。',
      items: [
        { label: 'gentil', fr: 'gentil', ja: '優しい → gentille' },
        { label: 'sympa', fr: 'sympa', ja: '感じがいい（男女同形）' },
        { label: 'timide', fr: 'timide', ja: '内気（男女同形）' },
        { label: 'bavard', fr: 'bavard', ja: 'おしゃべり → bavarde' },
        { label: 'drôle', fr: 'drôle', ja: '面白い（男女同形）' },
        { label: 'intelligent', fr: 'intelligent', ja: '賢い → intelligente' },
        { label: 'courageux', fr: 'courageux', ja: '勇敢 → courageuse' },
        { label: 'calme', fr: 'calme', ja: '穏やか（男女同形）' },
        { label: 'dynamique', fr: 'dynamique', ja: '活発（男女同形）' },
        { label: 'généreux', fr: 'généreux', ja: '寛大 → généreuse' },
        { label: 'têtu', fr: 'têtu', ja: '頑固 → têtue' },
        { label: 'paresseux', fr: 'paresseux', ja: '怠け者 → paresseuse' },
        { label: 'sérieux', fr: 'sérieux', ja: '真面目 → sérieuse' },
        { label: 'patient', fr: 'patient', ja: '忍耐強い → patiente' },
        { label: 'ouvert', fr: 'ouvert', ja: '開放的 → ouverte' },
        { label: 'travailleur', fr: 'travailleur', ja: '働き者 → travailleuse' }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: '形容詞の女性形 — 語尾別のまとめ',
      list: [
        '-eux → -euse … courageux → courageuse、heureux → heureuse',
        '-if → -ive … sportif → sportive、actif → active',
        '-il → -ille … gentil → gentille',
        '-er → -ère … cher → chère、premier → première',
        '-eur → -euse … travailleur → travailleuse',
        '-e で終わる語は不変 … calme, timide, drôle, sympa, dynamique',
        'それ以外は + e … grand → grande、intelligent → intelligente'
      ]
    },

    {
      type: 'phrases',
      title: '性格を言う',
      items: [
        {
          fr: 'Elle est très sympa',
          en: "She's really nice",
          ja: '彼女はとても感じがいい人です',
          register: 'casual',
          ja_when: '★ sympa は会話で最頻出の褒め言葉 ★ sympathique の略ですが、略した形の方がずっとよく使われます。男女同形。',
          when: 'The single most common compliment in casual French. Invariable.'
        },
        {
          fr: 'Il est un peu timide',
          en: "He's a bit shy",
          ja: '彼は少し内気です',
          register: 'neutral',
          ja_when: 'un peu（少し）を足すと断定が和らぎます。否定的な形容詞にはこれを付けるのが親切。',
          when: 'un peu softens a less flattering adjective.'
        },
        {
          fr: 'Elle a beaucoup d\'humour',
          en: 'She has a great sense of humour',
          ja: '彼女はユーモアがある人です',
          register: 'neutral',
          ja_when: 'avoir de l\'humour で「ユーモアがある」。フランスでは高い評価につながる資質です。',
          when: 'Highly valued in French social life.'
        },
        {
          fr: "C'est quelqu'un de très généreux",
          en: "He's someone very generous",
          ja: 'とても気前のいい人です',
          register: 'neutral',
          ja_when: '★ quelqu\'un de + 形容詞 ★ この de は必須です。quelqu\'un très généreux は誤り。',
          when: "quelqu'un always takes de before an adjective."
        },
        {
          fr: 'On ne se ressemble pas du tout',
          en: "We're not alike at all",
          ja: '私たち全然似ていません',
          register: 'casual',
          ja_when: 'pas du tout（全く〜ない）で否定を強めます。se ressembler は「互いに似ている」。',
          when: 'pas du tout intensifies the negation.'
        },
        {
          fr: "Comment il est, ton frère ?",
          en: "What's your brother like?",
          ja: 'お兄さんってどんな人？',
          register: 'casual',
          ja_when: 'comment est で性格や様子を尋ねます。会話では主語を後ろに置くこの語順がよく使われます。',
          when: 'The dislocated word order is very typical of spoken French.'
        }
      ]
    },

    {
      type: 'dialogue',
      title: '会話：待ち合わせ相手の特徴',
      scene: '空港で友人の同僚を迎えることになり、特徴を聞いています。',
      lines: [
        { who: 'A', fr: "Je ne le connais pas. Il est comment ?", en: "I don't know him. What does he look like?", ja: '会ったことないんだ。どんな人？' },
        { who: 'B', fr: 'Il est grand, il a les cheveux bruns et courts.', en: 'He is tall, with short brown hair.', ja: '背が高くて、短い茶髪。' },
        { who: 'A', fr: 'Il porte des lunettes ?', en: 'Does he wear glasses?', ja: '眼鏡かけてる？' },
        { who: 'B', fr: "Oui, et il a une barbe. Tu le reconnaîtras.", en: "Yes, and he has a beard. You'll recognise him.", ja: 'うん、ひげもある。分かると思うよ。' },
        { who: 'A', fr: "Et comme caractère ?", en: 'And what is he like?', ja: '性格は？' },
        { who: 'B', fr: "Très sympa, un peu timide au début, mais drôle.", en: 'Really nice, a bit shy at first, but funny.', ja: 'すごくいい人。最初は少し内気だけど面白いよ。' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: '「彼女は茶髪です」の正しい形は？',
          options: ['Elle est cheveux bruns', 'Elle a les cheveux bruns', 'Elle a des cheveux bruns', 'Elle est les cheveux bruns'],
          answer: 1,
          why: '髪や目は avoir + 定冠詞 les。être は使いません。'
        },
        {
          q: 'courageux の女性形は？',
          options: ['courageuse', 'courageuxe', 'courageuze', 'courageux'],
          answer: 0,
          why: '-eux は -euse に変わります。heureux → heureuse も同じ規則です。'
        },
        {
          q: "「とても優しい人です」の正しい形は？",
          options: ["C'est quelqu'un très gentil", "C'est quelqu'un de très gentil", "C'est un quelqu'un gentil", "C'est quelqu'un le gentil"],
          answer: 1,
          why: "quelqu'un の後に形容詞を続けるときは de が必須です。"
        },
        {
          q: '会話で最もよく使われる「感じがいい」は？',
          options: ['sympathique', 'sympa', 'agréable', 'gentil'],
          answer: 1,
          why: '略形の sympa が圧倒的に多く使われます。男女同形で変化しません。'
        }
      ]
    }
  ]
};
