/* ============================================================
   Section 4 — Numbers, Part 1
   ============================================================ */

window.S4 = {
  id: 4,
  level: 'A0-A1',
  duration: '23分',
  title: { en: 'Numbers, Part 1', fr: 'Les nombres (1/2)' },

  goals: [
    '0〜20 をよどみなく言える',
    '21〜69 の組み立て方（十の位＋一の位）を理解する',
    '70〜99 のフランス独特の計算式を読み解ける',
    '値段・年齢・電話番号を聞き取り、言える'
  ],

  blocks: [

    {
      type: 'tiles',
      title: '0 〜 20',
      intro: 'ここは丸暗記の範囲です。20 までは規則がないので、音で覚えてしまってください。',
      items: [
        { label: '0', fr: 'zéro' }, { label: '1', fr: 'un' }, { label: '2', fr: 'deux' },
        { label: '3', fr: 'trois' }, { label: '4', fr: 'quatre' }, { label: '5', fr: 'cinq' },
        { label: '6', fr: 'six' }, { label: '7', fr: 'sept' }, { label: '8', fr: 'huit' },
        { label: '9', fr: 'neuf' }, { label: '10', fr: 'dix' }, { label: '11', fr: 'onze' },
        { label: '12', fr: 'douze' }, { label: '13', fr: 'treize' }, { label: '14', fr: 'quatorze' },
        { label: '15', fr: 'quinze' }, { label: '16', fr: 'seize' },
        { label: '17', fr: 'dix-sept' }, { label: '18', fr: 'dix-huit' },
        { label: '19', fr: 'dix-neuf' }, { label: '20', fr: 'vingt' }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: '17・18・19 は足し算になっている',
      body: '英語の seventeen, eighteen, nineteen と同じ発想で、フランス語も 17 から「10＋7」の形になります。' +
            'ただし読み方が変則的で、dix の x が 18・19 では「ズ」に変わります。',
      list: [
        '17 = dix-sept … ディセットゥ（x は「ス」）',
        '18 = dix-huit … ディズュイットゥ（x が「ズ」に変わる）',
        '19 = dix-neuf … ディズヌフ（x が「ズ」に変わる）',
        '6 も単独なら「スィス」、後ろに名詞が来ると six ans は「スィザン」と変化する'
      ]
    },

    {
      type: 'tiles',
      title: '十の位（20 〜 60）',
      intro: 'ここまでは英語と同じ発想。60 までは十の位に専用の語があります。',
      items: [
        { label: '20', fr: 'vingt' }, { label: '30', fr: 'trente' },
        { label: '40', fr: 'quarante' }, { label: '50', fr: 'cinquante' },
        { label: '60', fr: 'soixante' }
      ]
    },

    {
      type: 'tiles',
      title: '21 〜 69 の組み立て',
      intro: '「十の位 + ハイフン + 一の位」でつなぎます。1 のときだけ et が入るのが唯一の例外です。',
      items: [
        { label: '21', fr: 'vingt-et-un', en: '1 のときだけ et' },
        { label: '22', fr: 'vingt-deux' },
        { label: '25', fr: 'vingt-cinq' },
        { label: '31', fr: 'trente-et-un', en: '1 のときだけ et' },
        { label: '32', fr: 'trente-deux' },
        { label: '45', fr: 'quarante-cinq' },
        { label: '57', fr: 'cinquante-sept' },
        { label: '64', fr: 'soixante-quatre' },
        { label: '69', fr: 'soixante-neuf' }
      ]
    },

    {
      type: 'note',
      tone: 'warm',
      title: '70〜99 — フランス語で一番驚くところ',
      body: '70 以降、フランス語には専用の語がありません。すべて計算式になります。' +
            'ベルギーやスイスのフランス語には septante(70)・nonante(90) という普通の語があるのですが、' +
            'フランス本国では使われません。慣れるまでは頭の中で計算することになります。',
      list: [
        '70 = soixante-dix … 60 + 10',
        '71 = soixante-et-onze … 60 + 11',
        '75 = soixante-quinze … 60 + 15',
        '80 = quatre-vingts … 4 × 20（複数の s が付く）',
        '81 = quatre-vingt-un … 4×20 + 1（この s は消える。et も入らない）',
        '90 = quatre-vingt-dix … 4×20 + 10',
        '95 = quatre-vingt-quinze … 4×20 + 15',
        '99 = quatre-vingt-dix-neuf … 4×20 + 10 + 9'
      ]
    },

    {
      type: 'tiles',
      title: '70 〜 100',
      items: [
        { label: '70', fr: 'soixante-dix', en: '60+10' },
        { label: '71', fr: 'soixante-et-onze', en: '60+11' },
        { label: '75', fr: 'soixante-quinze', en: '60+15' },
        { label: '80', fr: 'quatre-vingts', en: '4×20' },
        { label: '81', fr: 'quatre-vingt-un', en: '4×20+1' },
        { label: '90', fr: 'quatre-vingt-dix', en: '4×20+10' },
        { label: '95', fr: 'quatre-vingt-quinze', en: '4×20+15' },
        { label: '99', fr: 'quatre-vingt-dix-neuf', en: '4×20+10+9' },
        { label: '100', fr: 'cent' }
      ]
    },

    {
      type: 'phrases',
      title: '数字を実際に使う',
      items: [
        {
          fr: "J'ai vingt-cinq ans",
          en: 'I am 25 years old',
          ja: '25歳です',
          literal: '私は25の年を持っている',
          register: 'neutral',
          ja_when: '★重要★ フランス語の年齢は être ではなく avoir（持つ）を使います。Je suis 25 は間違い。ans を落とすのも不可で、必ず必要です。',
          when: 'Age uses avoir, never être. And ans cannot be dropped.'
        },
        {
          fr: 'Ça fait combien ?',
          en: 'How much is it?',
          ja: 'いくらですか？',
          register: 'neutral',
          ja_when: '店やレストランで会計を聞くときの一番自然な言い方。C\'est combien ? もほぼ同じように使えます。',
          when: 'The most natural way to ask a price in a shop.'
        },
        {
          fr: 'Ça fait douze euros cinquante',
          en: "That's 12 euros 50",
          ja: '12ユーロ50サンチームです',
          register: 'neutral',
          ja_when: '値段は「ユーロ数 + サンチーム数」を並べるだけ。et や virgule は入れません。12,50 € を読むときはこの形。',
          when: 'Prices simply juxtapose the euro and cent figures.'
        },
        {
          fr: 'Quel est votre numéro de téléphone ?',
          en: 'What is your phone number?',
          ja: '電話番号は何番ですか？',
          register: 'formal',
          ja_when: 'フランスの電話番号は10桁を2桁ずつ5組で読みます。06 12 34 56 78 なら「zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit」。1桁ずつ読まないので、70〜99 の計算に慣れていないと聞き取れません。',
          when: 'French numbers are read in five two-digit chunks, not digit by digit.'
        },
        {
          fr: 'Il y a combien de personnes ?',
          en: 'How many people are there?',
          ja: '何人いますか？',
          register: 'neutral',
          ja_when: 'レストランの予約や集まりの人数確認で。combien de + 名詞 で「いくつの〜」。',
          when: 'combien de + noun for counting anything.'
        }
      ]
    },

    {
      type: 'dialogue',
      title: '会話：市場で買い物',
      scene: '日曜の朝市。りんごを買っています。',
      lines: [
        { who: '客', fr: 'Bonjour ! Ça fait combien, les pommes ?', en: 'Hello! How much are the apples?', ja: 'こんにちは。りんごはいくらですか？' },
        { who: '店', fr: 'Trois euros quatre-vingts le kilo.', en: '3 euros 80 per kilo.', ja: '1キロ3ユーロ80です。' },
        { who: '客', fr: 'Deux kilos, s\'il vous plaît.', en: 'Two kilos, please.', ja: '2キロお願いします。' },
        { who: '店', fr: 'Ça fait sept euros soixante.', en: "That's 7 euros 60.", ja: '7ユーロ60になります。' },
        { who: '客', fr: 'Voilà. Merci beaucoup !', en: 'Here you go. Thank you!', ja: 'はい。ありがとうございます。' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: '80 をフランス語で言うと？',
          options: ['octante', 'huitante', 'quatre-vingts', 'soixante-vingt'],
          answer: 2,
          why: '4×20 で quatre-vingts。80 ちょうどのときだけ s が付きます。'
        },
        {
          q: '「私は30歳です」の正しい形は？',
          options: ['Je suis trente', 'Je suis trente ans', "J'ai trente ans", "J'ai trente"],
          answer: 2,
          why: 'フランス語の年齢は avoir（持つ）を使い、ans も省略できません。'
        },
        {
          q: '75 の組み立ては？',
          options: ['soixante-quinze', 'septante-cinq', 'sept-cinq', 'quatre-vingt-quinze'],
          answer: 0,
          why: '60 + 15 で soixante-quinze。septante はベルギー・スイスの言い方で、フランスでは使いません。'
        },
        {
          q: '21 に et が入るのはなぜ？',
          options: ['20 以上すべてに入る', '一の位が 1 のときだけ', '奇数のときだけ', '規則はない'],
          answer: 1,
          why: 'vingt-et-un, trente-et-un... のように一の位が 1 のときだけ。ただし 81 は quatre-vingt-un で et は入りません。'
        }
      ]
    }
  ]
};
