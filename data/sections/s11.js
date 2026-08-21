/* ============================================================
   Section 11 — Describing Your City
   ============================================================ */

window.S11 = {
  id: 11,
  level: 'A1',
  duration: '30分',
  title: { en: 'Describing Your City', fr: 'Décrire sa ville' },

  goals: [
    '街の主要な施設を冠詞ごと言える',
    'il y a で「〜がある」を肯定・否定・疑問で使える',
    '形容詞を名詞の性に合わせて変化させられる',
    '自分の住む街を数文で説明できる'
  ],

  blocks: [

    {
      type: 'tiles',
      title: '街の施設',
      intro: '性別を一緒に覚えるため、冠詞ごと再生されます。',
      items: [
        { label: 'la mairie', fr: 'la mairie', ja: '市役所' },
        { label: "l'église", fr: "l'église", ja: '教会（女性）', ipa: 'legliz' },
        { label: "l'hôpital", fr: "l'hôpital", ja: '病院（男性）' },
        { label: "l'école", fr: "l'école", ja: '学校（女性）' },
        { label: 'la bibliothèque', fr: 'la bibliothèque', ja: '図書館', ipa: 'la biblijɔtɛk' },
        { label: 'le supermarché', fr: 'le supermarché', ja: 'スーパー' },
        { label: 'la boulangerie', fr: 'la boulangerie', ja: 'パン屋', ipa: 'la bulɑ̃ʒʁi' },
        { label: 'la pharmacie', fr: 'la pharmacie', ja: '薬局', ipa: 'la faʁmasi' },
        { label: 'la banque', fr: 'la banque', ja: '銀行' },
        { label: 'la poste', fr: 'la poste', ja: '郵便局' },
        { label: 'la gare', fr: 'la gare', ja: '駅' },
        { label: 'le parc', fr: 'le parc', ja: '公園' },
        { label: 'le cinéma', fr: 'le cinéma', ja: '映画館' },
        { label: "l'hôtel", fr: "l'hôtel", ja: 'ホテル（男性）' },
        { label: 'le restaurant', fr: 'le restaurant', ja: 'レストラン' },
        { label: 'le marché', fr: 'le marché', ja: '市場' }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: '店の名前は「売っているもの + erie」',
      list: [
        'le pain（パン）→ la boulangerie（パン屋）',
        'la pâtisserie（菓子）→ 菓子店。boulangerie と兼業が多い',
        'la boucherie … 肉屋（la viande を売る）',
        'la poissonnerie … 魚屋',
        'la librairie … ★書店★ 図書館ではありません。図書館は la bibliothèque',
        '★注意★ le magasin は「店」全般。la maison（家）と音が似ているので気をつけて'
      ]
    },

    {
      type: 'note',
      title: 'il y a — 「〜がある」の万能表現',
      body: '直訳すると「それはそこに持っている」という不思議な形ですが、' +
            '英語の there is / there are にあたる最重要表現です。' +
            '単数でも複数でも形は il y a のまま変わりません。',
      list: [
        '肯定 … Il y a un parc.（公園がある）',
        '否定 … Il n\'y a pas de parc.（公園はない）→ 冠詞が de に変わる',
        '疑問 … Est-ce qu\'il y a un parc ?（公園はありますか）',
        '会話では「イリヤ」と一息。否定は「イニャパ」に近く聞こえます',
        '過去形は Il y avait（〜があった）'
      ]
    },

    {
      type: 'phrases',
      title: 'il y a を使う',
      items: [
        {
          fr: 'Dans ma ville, il y a un grand parc',
          en: 'In my city, there is a big park',
          ja: '私の街には大きな公園があります',
          register: 'neutral',
          ja_when: '街の紹介の基本形。grand は parc が男性名詞なので変化なし。',
          when: 'The standard frame for describing a place.'
        },
        {
          fr: 'Il y a beaucoup de restaurants',
          en: 'There are many restaurants',
          ja: 'レストランがたくさんあります',
          register: 'neutral',
          ja_when: '★量を表す語の後は必ず de★ beaucoup de / peu de / trop de。des restaurants にはなりません。',
          when: 'Quantity words always take de, never des.'
        },
        {
          fr: "Il n'y a pas de métro",
          en: 'There is no metro',
          ja: '地下鉄はありません',
          register: 'neutral',
          ja_when: '否定なので un métro が de métro に。会話では ne が落ちて Y a pas de métro とも言います。',
          when: 'In speech this often shortens to y a pas de métro.'
        },
        {
          fr: "Est-ce qu'il y a une banque près d'ici ?",
          en: 'Is there a bank near here?',
          ja: 'この近くに銀行はありますか？',
          register: 'neutral',
          ja_when: '旅行中に最も使う疑問文の型。banque の部分を入れ替えるだけで何にでも応用できます。',
          when: 'The single most reusable travel question — just swap the noun.'
        },
        {
          fr: "Qu'est-ce qu'il y a à voir ici ?",
          en: 'What is there to see here?',
          ja: 'ここには何が見どころですか？',
          register: 'neutral',
          ja_when: '観光案内所や地元の人に。à voir で「見るべきもの」。',
          when: 'Ask at a tourist office or of a local.'
        }
      ]
    },

    {
      type: 'note',
      tone: 'warm',
      title: '形容詞 — 名詞の後ろが基本、でも例外がある',
      body: 'フランス語の形容詞は名詞の後ろに置くのが原則です（une ville historique）。' +
            'ただし日常的で短い形容詞のグループだけは前に置きます。' +
            'この前置きグループは頭文字から BANGS と呼ばれます。',
      list: [
        'Beauty … beau, joli',
        'Age … jeune, vieux, nouveau',
        'Number … premier, deuxième',
        'Goodness … bon, mauvais',
        'Size … grand, petit, gros',
        'それ以外はすべて名詞の後ろ … une ville animée, un quartier calme'
      ]
    },

    {
      type: 'phrases',
      title: '街を描写する',
      items: [
        {
          fr: 'Ma ville est belle',
          en: 'My city is beautiful',
          ja: '私の街は美しいです',
          register: 'neutral',
          ja_when: 'ville が女性名詞なので beau → belle。男性名詞なら beau のままです。',
          when: 'beau becomes belle before a feminine noun.'
        },
        {
          fr: "C'est une grande ville",
          en: "It's a big city",
          ja: '大きな街です',
          register: 'neutral',
          ja_when: 'grand は BANGS の S（Size）なので名詞の前。女性名詞なので grande。',
          when: 'grand belongs to the small set that precedes the noun.'
        },
        {
          fr: "C'est très animé",
          en: "It's very lively",
          ja: 'とても賑やかです',
          register: 'neutral',
          ja_when: '街の雰囲気を言う定番。夜も店が開いていて人通りがある、というニュアンス。',
          when: 'Suggests shops open late and people about.'
        },
        {
          fr: "C'est calme et tranquille",
          en: "It's calm and quiet",
          ja: '静かで落ち着いています',
          register: 'neutral',
          ja_when: 'animé の対。田舎や住宅街を説明するとき。',
          when: 'The opposite of animé — suburbs and villages.'
        },
        {
          fr: "C'est une ville historique",
          en: "It's a historic city",
          ja: '歴史のある街です',
          register: 'neutral',
          ja_when: 'historique は BANGS ではないので名詞の後ろ。長い形容詞は後ろ、と覚えると外しにくいです。',
          when: 'Longer adjectives go after the noun.'
        },
        {
          fr: "J'habite dans le centre-ville",
          en: 'I live in the city centre',
          ja: '中心街に住んでいます',
          register: 'neutral',
          ja_when: 'centre-ville は「中心街」。郊外なら en banlieue、周辺地区なら dans un quartier。',
          when: 'Contrast with en banlieue for the suburbs.'
        }
      ]
    },

    {
      type: 'dialogue',
      title: '会話：出身地の紹介',
      scene: '語学学校で、お互いの街を紹介し合っています。',
      lines: [
        { who: 'A', fr: "Tu viens d'où exactement ?", en: 'Where exactly are you from?', ja: '正確にはどこの出身？' },
        { who: 'B', fr: "De Kanazawa. C'est une ville historique.", en: "From Kanazawa. It's a historic city.", ja: '金沢です。歴史のある街です。' },
        { who: 'A', fr: "Il y a quoi d'intéressant ?", en: 'What is there that\'s interesting?', ja: '何か見どころある？' },
        { who: 'B', fr: "Il y a un très beau jardin et beaucoup de musées.", en: 'There is a very beautiful garden and many museums.', ja: 'とても美しい庭園と、美術館がたくさんあります。' },
        { who: 'A', fr: "C'est une grande ville ?", en: 'Is it a big city?', ja: '大きな街？' },
        { who: 'B', fr: "Non, c'est assez calme. Il n'y a pas de métro.", en: "No, it's fairly quiet. There's no metro.", ja: 'いえ、かなり静かです。地下鉄もありません。' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: '「レストランがたくさんあります」の正しい形は？',
          options: ['Il y a beaucoup des restaurants', 'Il y a beaucoup de restaurants', 'Il y a beaucoup restaurants', 'Il y a des beaucoup restaurants'],
          answer: 1,
          why: 'beaucoup / peu / trop などの量を表す語の後は必ず de。des にはなりません。'
        },
        {
          q: 'la librairie の意味は？',
          options: ['図書館', '書店', '文房具店', '本の貸出所'],
          answer: 1,
          why: '書店です。図書館は la bibliothèque。英語 library につられやすい代表例です。'
        },
        {
          q: '名詞の前に置く形容詞はどれ？',
          options: ['historique', 'animé', 'petit', 'tranquille'],
          answer: 2,
          why: 'petit は BANGS の Size。他の3つは名詞の後ろに置きます。'
        },
        {
          q: 'Il y a un parc を否定文にすると？',
          options: ["Il n'y a pas un parc", "Il n'y a pas de parc", 'Il y a ne pas parc', "Il n'y a pas le parc"],
          answer: 1,
          why: '否定文で un が de に変わります。'
        }
      ]
    }
  ]
};
