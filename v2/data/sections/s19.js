/* ============================================================
   Section 19 — Shopping
   ============================================================ */

window.S19 = {
  id: 19,
  level: 'A1-A2',
  duration: '42分',
  title: { en: 'Shopping', fr: 'Faire du shopping' },

  goals: [
    '衣類と色の語彙を使える',
    '店員とのやりとりを一通りこなせる',
    'サイズ・試着・値段を尋ねられる',
    '買う・買わないをはっきり伝えられる'
  ],

  blocks: [

    {
      type: 'note',
      title: 'フランスの店に入ったら必ず Bonjour',
      body: '服屋でも雑貨屋でも、入店したら店員に Bonjour と言うのが基本です。' +
            '黙って商品を見始めるのは失礼にあたります。' +
            'また Je peux vous aider ?（何かお探しですか）と声をかけられたら、' +
            '見ているだけでも Je regarde, merci と必ず返してください。無言は最も印象が悪い反応です。'
    },

    {
      type: 'tiles',
      title: '衣類',
      items: [
        { label: 'un t-shirt', fr: 'un t-shirt', en: 'Tシャツ', ipa: 'œ̃ tiʃœʁt' },
        { label: 'une chemise', fr: 'une chemise', en: 'シャツ' },
        { label: 'un pantalon', fr: 'un pantalon', en: 'ズボン' },
        { label: 'une jupe', fr: 'une jupe', en: 'スカート' },
        { label: 'une robe', fr: 'une robe', en: 'ワンピース' },
        { label: 'un manteau', fr: 'un manteau', en: 'コート' },
        { label: 'une veste', fr: 'une veste', en: 'ジャケット' },
        { label: 'un pull', fr: 'un pull', en: 'セーター', ipa: 'œ̃ pyl' },
        { label: 'des chaussures', fr: 'des chaussures', en: '靴' },
        { label: 'des bottes', fr: 'des bottes', en: 'ブーツ' },
        { label: 'une écharpe', fr: 'une écharpe', en: 'マフラー' },
        { label: 'un chapeau', fr: 'un chapeau', en: '帽子' },
        { label: 'un sac', fr: 'un sac', en: 'バッグ' },
        { label: 'une ceinture', fr: 'une ceinture', en: 'ベルト' },
        { label: 'un jean', fr: 'un jean', en: 'ジーンズ', ipa: 'œ̃ dʒin' },
        { label: 'des chaussettes', fr: 'des chaussettes', en: '靴下' }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: '衣類の名詞で気をつけること',
      list: [
        'un pantalon は単数 … 英語の trousers と違い、フランス語では1本でも単数',
        'des chaussures / des chaussettes は常に複数 … 片方だけなら une chaussure',
        'une veste は「ジャケット」。英語の vest（ベスト）ではありません',
        'un pull は pull-over の略。セーターのことです',
        '★ 服を「着る」は porter、「着てみる」は essayer ★'
      ]
    },

    {
      type: 'tiles',
      title: '色（les couleurs）',
      intro: '色は形容詞なので、名詞の性と数に合わせて変化します。',
      items: [
        { label: 'rouge', fr: 'rouge', en: '赤（不変）' },
        { label: 'bleu', fr: 'bleu', en: '青 → bleue' },
        { label: 'vert', fr: 'vert', en: '緑 → verte' },
        { label: 'jaune', fr: 'jaune', en: '黄（不変）' },
        { label: 'noir', fr: 'noir', en: '黒 → noire' },
        { label: 'blanc', fr: 'blanc', en: '白 → blanche' },
        { label: 'gris', fr: 'gris', en: '灰 → grise' },
        { label: 'rose', fr: 'rose', en: 'ピンク（不変）' },
        { label: 'orange', fr: 'orange', en: 'オレンジ（★不変★）' },
        { label: 'violet', fr: 'violet', en: '紫 → violette' },
        { label: 'marron', fr: 'marron', en: '茶（★不変★）' },
        { label: 'beige', fr: 'beige', en: 'ベージュ（不変）' }
      ]
    },

    {
      type: 'note',
      tone: 'warm',
      title: '色は名詞の後ろ、そして変化する',
      body: '色を表す形容詞は必ず名詞の後ろに置きます（une robe rouge）。' +
            '英語の a red dress と語順が逆になるので、慣れるまで意識してください。',
      list: [
        'une robe rouge … 赤いワンピース',
        'des chaussures noires … 黒い靴（複数なので s）',
        'une chemise blanche … 白いシャツ（blanc → blanche）',
        '★ orange と marron は変化しない ★ もとが果物・栗の名前なので形容詞として活用しません',
        'des chaussures marron（marrons にはならない）'
      ]
    },

    {
      type: 'phrases',
      title: '店でのやりとり',
      items: [
        {
          fr: 'Je peux vous aider ?',
          en: 'Can I help you?',
          ja: '何かお探しですか？',
          register: 'formal',
          ja_when: '店員から言われる側。答えは Oui, je cherche... か Non merci, je regarde。',
          when: 'What staff say to you. Always answer, even if just browsing.'
        },
        {
          fr: 'Je regarde, merci',
          en: "I'm just looking, thanks",
          ja: '見ているだけです、ありがとう',
          register: 'neutral',
          ja_when: '★覚えておくと必ず役立つ★ 見ているだけのときの返答。無言でいるより格段に印象がよくなります。',
          when: 'The single most useful shop phrase — never stay silent.'
        },
        {
          fr: 'Je cherche une veste noire',
          en: "I'm looking for a black jacket",
          ja: '黒いジャケットを探しています',
          register: 'neutral',
          ja_when: 'chercher で「探す」。色は名詞の後ろ、女性名詞なので noire。',
          when: 'Colour follows the noun and agrees with it.'
        },
        {
          fr: 'Quelle taille faites-vous ?',
          en: 'What size are you?',
          ja: 'サイズはおいくつですか？',
          register: 'formal',
          ja_when: '★ サイズは faire を使う ★ 答えは Je fais du 40。Je suis 40 とは言いません。靴は pointure と別の語を使います。',
          when: 'Sizes use faire, not être. Shoes use pointure instead of taille.'
        },
        {
          fr: 'Je fais du quarante',
          en: "I'm a size 40",
          ja: '40サイズです',
          register: 'neutral',
          ja_when: 'du + 数字。フランスのサイズは日本と違うので、店で測ってもらうのが確実です。',
          when: 'French sizing differs from Japanese — get measured in store.'
        },
        {
          fr: "Je peux l'essayer ?",
          en: 'Can I try it on?',
          ja: '試着できますか？',
          register: 'neutral',
          ja_when: "l' は前に出た服を指す代名詞。試着室は la cabine d'essayage です。",
          when: "The fitting room is la cabine d'essayage."
        },
        {
          fr: "C'est trop cher",
          en: "It's too expensive",
          ja: '高すぎます',
          register: 'neutral',
          ja_when: '★フランスの店では値切りません★ 市場や蚤の市は別ですが、通常の店で値段交渉はしません。これは断る理由として言う表現です。',
          when: 'Not a bargaining move — normal shops do not haggle. Markets and flea markets do.'
        },
        {
          fr: 'Vous avez ça en bleu ?',
          en: 'Do you have this in blue?',
          ja: 'これの青はありますか？',
          register: 'neutral',
          ja_when: 'en + 色 で「〜色の」。en plus grand（もっと大きいの）も同じ形。',
          when: 'en + colour, or en plus grand for a bigger one.'
        },
        {
          fr: 'Je le prends',
          en: "I'll take it",
          ja: 'これにします',
          register: 'neutral',
          ja_when: '購入を決めたときの一言。女性名詞なら Je la prends、複数なら Je les prends。',
          when: 'Agrees with the gender: le / la / les prends.'
        },
        {
          fr: 'Je vais réfléchir, merci',
          en: "I'll think about it, thanks",
          ja: '少し考えます、ありがとう',
          register: 'neutral',
          ja_when: '買わずに店を出るときの丁寧な言い方。そのまま Au revoir と続けます。',
          when: 'The polite exit line when you are not buying.'
        }
      ]
    },

    {
      type: 'dialogue',
      title: '会話：服を買う',
      scene: '服屋。入店から会計まで。',
      lines: [
        { who: '客', fr: 'Bonjour !', en: 'Hello!', ja: 'こんにちは。' },
        { who: '店', fr: 'Bonjour, je peux vous aider ?', en: 'Hello, can I help you?', ja: 'いらっしゃいませ、何かお探しですか？' },
        { who: '客', fr: 'Oui, je cherche une veste noire.', en: "Yes, I'm looking for a black jacket.", ja: 'はい、黒いジャケットを探しています。' },
        { who: '店', fr: 'Quelle taille faites-vous ?', en: 'What size are you?', ja: 'サイズはおいくつですか？' },
        { who: '客', fr: 'Je fais du trente-huit. Je peux l\'essayer ?', en: "I'm a 38. Can I try it on?", ja: '38です。試着できますか？' },
        { who: '店', fr: "Bien sûr, la cabine est au fond à droite.", en: 'Of course, the fitting room is at the back on the right.', ja: 'もちろんです。試着室は奥の右側です。' },
        { who: '客', fr: "Elle me va bien. Ça coûte combien ?", en: 'It fits me well. How much is it?', ja: 'ぴったりです。おいくらですか？' },
        { who: '店', fr: 'Quatre-vingt-neuf euros.', en: '89 euros.', ja: '89ユーロです。' },
        { who: '客', fr: 'Très bien, je la prends.', en: "Very good, I'll take it.", ja: '分かりました、これにします。' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: '「サイズはおいくつですか」で使う動詞は？',
          options: ['être', 'avoir', 'faire', 'prendre'],
          answer: 2,
          why: 'Quelle taille faites-vous ? 答えも Je fais du 38 と faire を使います。'
        },
        {
          q: '「赤いワンピース」の正しい語順は？',
          options: ['une rouge robe', 'une robe rouge', 'une robe rouges', 'un robe rouge'],
          answer: 1,
          why: '色は必ず名詞の後ろ。robe は女性名詞ですが rouge は不変です。'
        },
        {
          q: '女性形にならない色はどれ？',
          options: ['vert', 'blanc', 'marron', 'violet'],
          answer: 2,
          why: 'marron と orange は果物・栗の名前が元なので変化しません。des chaussures marron。'
        },
        {
          q: '見ているだけのとき店員に言うのは？',
          options: ['何も言わない', 'Je regarde, merci', 'Non', 'Au revoir'],
          answer: 1,
          why: '無言が最も印象の悪い反応です。Je regarde, merci と必ず返しましょう。'
        }
      ]
    }
  ]
};
