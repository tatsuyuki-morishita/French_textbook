/* ============================================================
   Section 24 — Food & Dining
   ============================================================ */

window.S24 = {
  id: 24,
  level: 'A1-A2',
  duration: '48分',
  title: { en: 'Food & Dining', fr: 'Parler de son alimentation' },

  goals: [
    '食べ物と飲み物の語彙を使える',
    '部分冠詞で「いくらか」を正しく言える',
    'レストランでの注文から会計までをこなせる',
    '好みや制限（アレルギー・ベジタリアン）を伝えられる'
  ],

  blocks: [

    {
      type: 'tiles',
      title: '食べ物',
      items: [
        { label: 'le pain', fr: 'le pain', en: 'パン' },
        { label: 'le fromage', fr: 'le fromage', en: 'チーズ' },
        { label: 'la viande', fr: 'la viande', en: '肉' },
        { label: 'le poulet', fr: 'le poulet', en: '鶏肉' },
        { label: 'le poisson', fr: 'le poisson', en: '魚' },
        { label: 'la salade', fr: 'la salade', en: 'サラダ' },
        { label: 'les fruits', fr: 'les fruits', en: '果物' },
        { label: 'les légumes', fr: 'les légumes', en: '野菜' },
        { label: 'les œufs', fr: 'les œufs', en: '卵' },
        { label: 'le riz', fr: 'le riz', en: '米' },
        { label: 'les pâtes', fr: 'les pâtes', en: 'パスタ' },
        { label: 'la soupe', fr: 'la soupe', en: 'スープ' },
        { label: 'le dessert', fr: 'le dessert', en: 'デザート' },
        { label: 'le gâteau', fr: 'le gâteau', en: 'ケーキ' },
        { label: 'le beurre', fr: 'le beurre', en: 'バター' },
        { label: 'le sucre', fr: 'le sucre', en: '砂糖' }
      ]
    },

    {
      type: 'tiles',
      title: '飲み物',
      items: [
        { label: "l'eau", fr: "l'eau", en: '水' },
        { label: 'le café', fr: 'le café', en: 'コーヒー' },
        { label: 'le thé', fr: 'le thé', en: '紅茶' },
        { label: 'le vin', fr: 'le vin', en: 'ワイン' },
        { label: 'la bière', fr: 'la bière', en: 'ビール' },
        { label: "le jus d'orange", fr: "le jus d'orange", en: 'オレンジジュース' },
        { label: 'le lait', fr: 'le lait', en: '牛乳' },
        { label: 'une carafe d\'eau', fr: "une carafe d'eau", en: '水差し（無料）' }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: '注文で必ず出てくる冠詞の使い分け',
      body: '§7 の冠詞がここで実戦になります。動詞で決まると考えると迷いません。',
      list: [
        'aimer / adorer / détester → 定冠詞 … J\'aime le poisson（魚が好き）',
        'manger / boire / prendre → 部分冠詞 … Je mange du poisson（魚を食べる）',
        'commander / vouloir → 不定冠詞 … Je voudrais une salade（サラダを1つ）',
        '否定 → すべて de … Je ne mange pas de viande（肉は食べません）',
        '★ この4つを取り違えると意味が変わります ★'
      ]
    },

    {
      type: 'phrases',
      title: 'レストランで',
      items: [
        {
          fr: "Une table pour deux, s'il vous plaît",
          en: 'A table for two, please',
          ja: '2人ですが席はありますか',
          register: 'formal',
          ja_when: '入店してすぐ。予約があるなら J\'ai réservé au nom de ... と続けます。',
          when: 'The first thing you say on entering.'
        },
        {
          fr: "La carte, s'il vous plaît",
          en: 'The menu, please',
          ja: 'メニューをお願いします',
          register: 'formal',
          ja_when: '★重要な用語の違い★ la carte が「メニュー表」。le menu は「セット・コース」を指します。英語の menu につられないように。',
          when: 'la carte is the menu; le menu is a fixed-price set — the reverse of English.'
        },
        {
          fr: "Qu'est-ce que vous recommandez ?",
          en: 'What do you recommend?',
          ja: 'おすすめは何ですか？',
          register: 'formal',
          ja_when: '★使うと店員が喜ぶ質問★ 地元の名物や日替わりを教えてもらえます。le plat du jour（本日のおすすめ）も聞いてみてください。',
          when: 'Staff enjoy this question — it often gets you the best dish.'
        },
        {
          fr: 'Je vais prendre le poulet',
          en: "I'll have the chicken",
          ja: '鶏肉にします',
          register: 'neutral',
          ja_when: '★ 注文は Je vais prendre が最も自然 ★ Je veux は失礼に響きます。Je voudrais も丁寧で使えます。',
          when: 'Je vais prendre is the most natural ordering formula.'
        },
        {
          fr: "Une carafe d'eau, s'il vous plaît",
          en: 'A carafe of water, please',
          ja: 'お水をお願いします',
          register: 'formal',
          ja_when: '★覚えておくと得をする★ フランスのレストランでは水道水の水差しを無料で頼めます。頼まないと有料のミネラルウォーターが出てきます。',
          when: 'Tap water is free on request. Not asking gets you bottled water on the bill.'
        },
        {
          fr: 'Je suis végétarien',
          en: "I'm vegetarian",
          ja: 'ベジタリアンです',
          register: 'neutral',
          ja_when: '女性は végétarienne。フランスの伝統料理は肉が中心なので、先に伝えておくと安心です。',
          when: 'Worth saying up front — traditional French menus are meat-heavy.'
        },
        {
          fr: "Je suis allergique aux fruits de mer",
          en: "I'm allergic to seafood",
          ja: '甲殻類アレルギーがあります',
          register: 'neutral',
          ja_when: '★安全に関わる重要表現★ allergique à + 食品。aux は à + les。必ず言えるようにしておいてください。',
          when: 'A safety phrase — make sure you can say it without hesitating.'
        },
        {
          fr: "L'addition, s'il vous plaît",
          en: 'The bill, please',
          ja: 'お会計をお願いします',
          register: 'formal',
          ja_when: '★フランスでは伝票は自動では来ません★ 頼むまで待たされます。急かされていないという意味なので、ゆっくりして構いません。',
          when: 'The bill never comes unasked — that is politeness, not neglect.'
        },
        {
          fr: "C'était délicieux !",
          en: 'It was delicious!',
          ja: 'とても美味しかったです！',
          register: 'neutral',
          ja_when: '帰り際に。C\'était は半過去【§22】。言うと必ず喜ばれます。',
          when: 'Say it on the way out — always appreciated.'
        }
      ]
    },

    {
      type: 'note',
      tone: 'warm',
      title: 'フランスの食事のしくみ',
      list: [
        'l\'entrée … 前菜。★英語の entrée（主菜）とは違います★',
        'le plat principal … 主菜',
        'le dessert … デザート',
        'la formule / le menu … 前菜＋主菜など組み合わせの定額セット。単品より安い',
        'à la carte … 単品で頼む',
        '★ チップ ★ サービス料は込み（service compris）。端数を置く程度で十分で、義務ではありません',
        '昼食は12時〜14時、夕食は19時30分以降。それ以外の時間は厨房が閉まっている店が多い'
      ]
    },

    {
      type: 'phrases',
      title: '好みと食習慣を話す',
      items: [
        {
          fr: "J'adore la cuisine française",
          en: 'I love French cuisine',
          ja: 'フランス料理が大好きです',
          register: 'neutral',
          ja_when: 'adorer の後は定冠詞。cuisine は「料理・台所」の両方の意味があります。',
          when: 'cuisine means both the cooking and the kitchen.'
        },
        {
          fr: 'Je ne mange pas de viande',
          en: "I don't eat meat",
          ja: '肉は食べません',
          register: 'neutral',
          ja_when: '否定なので de la viande が de viande に。ベジタリアンの説明として最も簡潔な言い方です。',
          when: 'The negation collapses de la to de.'
        },
        {
          fr: "Je bois du café le matin",
          en: 'I drink coffee in the morning',
          ja: '朝はコーヒーを飲みます',
          register: 'neutral',
          ja_when: 'boire + 部分冠詞。le matin で「毎朝」【§9】。',
          when: 'boire takes the partitive; le matin makes it habitual.'
        },
        {
          fr: "Je n'aime pas trop les légumes",
          en: "I'm not that keen on vegetables",
          ja: '野菜はあまり得意じゃないです',
          register: 'casual',
          ja_when: 'pas trop で否定を和らげます。aimer の否定なので冠詞は les のまま変わりません。',
          when: 'pas trop softens it; aimer keeps the definite article even negated.'
        },
        {
          fr: "J'ai encore faim",
          en: "I'm still hungry",
          ja: 'まだお腹が空いています',
          register: 'casual',
          ja_when: 'avoir faim【§5】に encore（まだ）。逆は Je n\'ai plus faim（もうお腹いっぱい）。',
          when: 'The opposite is je n\'ai plus faim.'
        }
      ]
    },

    {
      type: 'dialogue',
      title: '会話：レストランで',
      scene: '入店から会計まで、一通りの流れです。',
      lines: [
        { who: '店', fr: 'Bonsoir ! Vous avez réservé ?', en: 'Good evening! Do you have a reservation?', ja: 'こんばんは。ご予約はありますか？' },
        { who: '客', fr: "Non. Une table pour deux, s'il vous plaît.", en: 'No. A table for two, please.', ja: 'いいえ。2人お願いします。' },
        { who: '店', fr: 'Bien sûr. Voici la carte.', en: 'Of course. Here is the menu.', ja: 'かしこまりました。メニューです。' },
        { who: '客', fr: "Qu'est-ce que vous recommandez ?", en: 'What do you recommend?', ja: 'おすすめは何ですか？' },
        { who: '店', fr: "Le plat du jour, c'est du poisson grillé.", en: "Today's special is grilled fish.", ja: '本日のおすすめは焼き魚です。' },
        { who: '客', fr: "Parfait, je vais prendre ça. Et une carafe d'eau.", en: "Perfect, I'll have that. And a carafe of water.", ja: 'それにします。あとお水も。' },
        { who: '店', fr: 'Très bien. Et comme boisson ?', en: 'Very good. And to drink?', ja: 'かしこまりました。お飲み物は？' },
        { who: '客', fr: 'Un verre de vin blanc, merci.', en: 'A glass of white wine, thanks.', ja: '白ワインをグラスで。' },
        { who: '客', fr: "C'était délicieux ! L'addition, s'il vous plaît.", en: 'That was delicious! The bill, please.', ja: 'とても美味しかったです。お会計をお願いします。' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: 'レストランで「メニュー表」を指すのは？',
          options: ['le menu', 'la carte', "l'addition", "l'entrée"],
          answer: 1,
          why: 'la carte がメニュー表。le menu は定額のセットを指します。英語と逆なので注意。'
        },
        {
          q: '「魚を食べます」の正しい冠詞は？',
          options: ['Je mange le poisson', 'Je mange du poisson', 'Je mange un poisson', 'Je mange poisson'],
          answer: 1,
          why: 'manger は部分冠詞。J\'aime le poisson（好き）とは冠詞が変わります。'
        },
        {
          q: 'レストランで無料の水を頼むには？',
          options: ["Une bouteille d'eau", "Une carafe d'eau", "De l'eau minérale", "L'eau, s'il vous plaît"],
          answer: 1,
          why: "une carafe d'eau が水道水の水差し。頼まないと有料のミネラルウォーターが出てきます。"
        },
        {
          q: "l'entrée の意味は？",
          options: ['主菜', '前菜', 'デザート', '入口'],
          answer: 1,
          why: 'フランス語の entrée は前菜。アメリカ英語の entrée（主菜）とは意味が逆です。'
        },
        {
          q: 'フランスのレストランで伝票は？',
          options: ['食後に自動で来る', '頼むまで来ない', '先払い', 'レジで受け取る'],
          answer: 1,
          why: "L'addition, s'il vous plaît と頼むまで来ません。急かさないのが礼儀とされています。"
        }
      ]
    }
  ]
};
