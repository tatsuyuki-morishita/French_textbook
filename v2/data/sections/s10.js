/* ============================================================
   Section 10 — Numbers, Part 2
   ============================================================ */

window.S10 = {
  id: 10,
  level: 'A1',
  duration: '27分',
  title: { en: 'Numbers, Part 2', fr: 'Les nombres (2/2)' },

  goals: [
    '100 から 1000 までを組み立てられる',
    '大きな数（万・百万・十億）を読める',
    '序数（1番目、2番目…）を作れる',
    '西暦・階数・値段を正しく言える'
  ],

  blocks: [

    {
      type: 'tiles',
      title: '100 〜 1000',
      intro: '100 の位は「数字 + cent」を並べるだけ。et は使いません。',
      items: [
        { label: '100', fr: 'cent' },
        { label: '101', fr: 'cent un', en: 'et は入らない' },
        { label: '200', fr: 'deux cents', en: 'ちょうどなら s が付く' },
        { label: '250', fr: 'deux cent cinquante', en: '続きがあると s が消える' },
        { label: '300', fr: 'trois cents' },
        { label: '500', fr: 'cinq cents' },
        { label: '999', fr: 'neuf cent quatre-vingt-dix-neuf' },
        { label: '1000', fr: 'mille' }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: 'cent の s が付くとき・消えるとき',
      list: [
        'deux cents（200）… ちょうど 200 なので s が付く',
        'deux cent cinquante（250）… 後ろに数字が続くので s が消える',
        'cent（100）… 1つのときは un を付けず、s も付かない',
        '★ mille は絶対に s が付かない ★ deux mille, dix mille すべて s なし',
        'フランス語の桁区切りはスペースかピリオド、小数点はカンマ。1 234,56 と書きます'
      ]
    },

    {
      type: 'tiles',
      title: '大きな数',
      items: [
        { label: '1 000', fr: 'mille' },
        { label: '2 000', fr: 'deux mille' },
        { label: '10 000', fr: 'dix mille' },
        { label: '100 000', fr: 'cent mille' },
        { label: '1 000 000', fr: 'un million' },
        { label: '2 000 000', fr: 'deux millions' },
        { label: '1 000 000 000', fr: 'un milliard' }
      ]
    },

    {
      type: 'note',
      title: 'million と milliard は名詞',
      body: 'mille は数詞ですが、million と milliard は名詞です。そのため扱いが違います。',
      list: [
        '複数の s が付く … deux millions, trois milliards',
        '後ろに名詞が来ると de が必要 … un million d\'euros（100万ユーロ）',
        'mille にはどちらも起きない … deux mille euros（de も s も不要）',
        '日本語の「万」に当たる単位はない。3万は trente mille（30×1000）と考える'
      ]
    },

    {
      type: 'tiles',
      title: '序数（〜番目）',
      intro: '基本は「数詞 + ième」。1 番目だけが完全に別の語です。',
      items: [
        { label: '1er', fr: 'premier', en: '1番目（男性）→ première' },
        { label: '2e', fr: 'deuxième', en: '2番目' },
        { label: '3e', fr: 'troisième', en: '3番目' },
        { label: '4e', fr: 'quatrième', en: '4番目' },
        { label: '5e', fr: 'cinquième', en: '5番目・u が入る' },
        { label: '9e', fr: 'neuvième', en: '9番目・f が v に' },
        { label: '10e', fr: 'dixième', en: '10番目' },
        { label: '20e', fr: 'vingtième', en: '20番目' }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: '序数の作り方と例外',
      list: [
        '基本 … 数詞 + ième（trois → troisième）',
        '語末の e は落とす … quatre → quatrième、onze → onzième',
        'cinq は u を足す … cinq → cinquième（発音の都合）',
        'neuf は f が v に … neuf → neuvième',
        '1 番目だけ別語 … premier / première。ただし 21 番目は vingt-et-unième'
      ]
    },

    {
      type: 'phrases',
      title: '数字を使う場面',
      items: [
        {
          fr: "J'habite au troisième étage",
          en: 'I live on the third floor',
          ja: '4階に住んでいます',
          register: 'neutral',
          ja_when: '★注意★ フランスの1階は rez-de-chaussée（RDC）で、その上が premier étage。つまり troisième étage は日本の4階です。エレベーターのボタンも 0 から始まります。',
          when: 'The French ground floor is the rez-de-chaussée, so the third étage is a Japanese 4th floor.'
        },
        {
          fr: "C'est la première fois",
          en: "It's the first time",
          ja: '初めてです',
          register: 'neutral',
          ja_when: 'fois が女性名詞なので première。旅行先や初めての店で「初めて来ました」と言うときに。',
          when: 'fois is feminine, so première.'
        },
        {
          fr: 'Je suis né en mille neuf cent quatre-vingt-quinze',
          en: 'I was born in 1995',
          ja: '1995年生まれです',
          register: 'neutral',
          ja_when: '西暦は普通の数として読みます。英語のように「19-95」と2桁ずつには分けません。女性は née と書きます（音は同じ）。',
          when: 'Years are read as whole numbers, not split into two pairs like English.'
        },
        {
          fr: "Ça coûte mille deux cents euros",
          en: 'It costs 1,200 euros',
          ja: '1200ユーロです',
          register: 'neutral',
          ja_when: 'mille には s が付かず、cents には付いています。この組み合わせが一番間違えやすいところ。',
          when: 'mille never takes an s; cents does when it ends the number.'
        },
        {
          fr: 'Il y a un million d\'habitants',
          en: 'There are a million inhabitants',
          ja: '人口100万人です',
          register: 'neutral',
          ja_when: 'million の後には de が必要。un million habitants は誤りです。',
          when: 'million always needs de before the noun it counts.'
        },
        {
          fr: 'Le premier janvier',
          en: 'January 1st',
          ja: '1月1日',
          register: 'neutral',
          ja_when: '★日付で序数を使うのは1日だけ★ 2日以降は普通の数字で le deux janvier, le trois janvier となります。',
          when: 'Only the 1st uses an ordinal; every other date uses the plain number.'
        }
      ]
    },

    {
      type: 'dialogue',
      title: '会話：アパートを探す',
      scene: '不動産屋で物件の説明を受けています。',
      lines: [
        { who: '客', fr: "Le loyer, c'est combien par mois ?", en: 'How much is the rent per month?', ja: '家賃は月いくらですか？' },
        { who: '店', fr: 'Huit cent cinquante euros, charges comprises.', en: '850 euros, charges included.', ja: '諸費用込みで850ユーロです。' },
        { who: '客', fr: "C'est à quel étage ?", en: 'What floor is it on?', ja: '何階ですか？' },
        { who: '店', fr: "Au quatrième, avec ascenseur.", en: 'On the fourth, with a lift.', ja: '4階（日本の5階）で、エレベーターがあります。' },
        { who: '客', fr: "Et c'est disponible à partir de quand ?", en: 'And when is it available from?', ja: 'いつから入居できますか？' },
        { who: '店', fr: 'À partir du premier septembre.', en: 'From September 1st.', ja: '9月1日からです。' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: '250 の正しい書き方は？',
          options: ['deux cents cinquante', 'deux cent cinquante', 'deux cent et cinquante', 'deuxcent cinquante'],
          answer: 1,
          why: '後ろに数字が続くと cent の s は消えます。200 ちょうどなら deux cents。'
        },
        {
          q: 'フランスの troisième étage は日本の何階？',
          options: ['3階', '4階', '2階', '5階'],
          answer: 1,
          why: 'フランスの1階は rez-de-chaussée。その上が premier étage なので、troisième étage は日本の4階です。'
        },
        {
          q: '「100万ユーロ」の正しい形は？',
          options: ['un million euros', "un million d'euros", 'un millions euros', 'mille million euros'],
          answer: 1,
          why: 'million は名詞なので、後ろに名詞が来るときは de が必要です。'
        },
        {
          q: '日付で序数を使うのは？',
          options: ['毎日', '1日だけ', '1日と2日', '月末だけ'],
          answer: 1,
          why: 'le premier janvier だけが序数。2日以降は le deux janvier のように普通の数字です。'
        }
      ]
    }
  ]
};
