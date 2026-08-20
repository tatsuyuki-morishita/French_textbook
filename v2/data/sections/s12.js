/* ============================================================
   Section 12 — Understanding Directions
   ============================================================ */

window.S12 = {
  id: 12,
  level: 'A1',
  duration: '34分',
  title: { en: 'Understanding Directions', fr: 'Comprendre un itinéraire' },

  goals: [
    '道を尋ねる決まり文句を丁寧に言える',
    '位置関係の前置詞を使い分けられる',
    '返ってきた道案内を聞き取れる',
    '距離と所要時間を確認できる'
  ],

  blocks: [

    {
      type: 'note',
      title: '道を聞くときは必ず Bonjour から',
      body: 'いきなり Où est la gare ? と切り出すのは、フランスではかなり無礼に響きます。' +
            '必ず Bonjour / Excusez-moi を前に置いてください。' +
            'この一言があるかないかで、相手の親切さがはっきり変わります。'
    },

    {
      type: 'phrases',
      title: '道を尋ねる',
      items: [
        {
          fr: 'Excusez-moi, où est la gare ?',
          en: 'Excuse me, where is the station?',
          ja: 'すみません、駅はどこですか？',
          register: 'formal',
          ja_when: '最も基本的な形。Excusez-moi を必ず先に。gare を banque, poste などに入れ替えて使い回せます。',
          when: 'Never open with the question itself — excusez-moi first.'
        },
        {
          fr: "Pour aller à la poste, s'il vous plaît ?",
          en: 'How do I get to the post office, please?',
          ja: '郵便局へはどう行けばいいですか？',
          literal: '郵便局へ行くために、お願いします',
          register: 'formal',
          ja_when: 'フランス人が実際に一番よく使う形。動詞を含まない省略形ですが完全に自然です。「どこにあるか」より「どう行くか」を聞いているのがポイント。',
          when: 'The most idiomatic phrasing — it asks the route, not the location.'
        },
        {
          fr: "C'est loin d'ici ?",
          en: 'Is it far from here?',
          ja: 'ここから遠いですか？',
          register: 'neutral',
          ja_when: '歩けるか判断するための質問。答えが Non, c\'est tout près なら徒歩圏内です。',
          when: 'Decides whether you walk or take transport.'
        },
        {
          fr: "C'est à combien de minutes à pied ?",
          en: 'How many minutes is it on foot?',
          ja: '徒歩何分ですか？',
          register: 'neutral',
          ja_when: 'à pied（徒歩で）を付けると具体的に答えてもらえます。en voiture なら車で、en métro なら地下鉄で。',
          when: 'Adding à pied gets you a far more useful answer.'
        },
        {
          fr: 'Je suis perdu',
          en: "I'm lost",
          ja: '道に迷いました',
          register: 'neutral',
          ja_when: '女性は perdue と書きますが音は同じ。この一言で相手が親切に助けてくれることが多いです。',
          when: 'Women write perdue; it sounds identical.'
        },
        {
          fr: 'Vous pouvez répéter plus lentement ?',
          en: 'Can you repeat more slowly?',
          ja: 'もっとゆっくり言ってもらえますか？',
          register: 'formal',
          ja_when: '★道案内は早口で返ってくるのが普通★ 聞き取れなくて当然なので、遠慮せずこれを使ってください。',
          when: 'Directions come back fast. Expect to need this.'
        },
        {
          fr: 'Vous pouvez me montrer sur la carte ?',
          en: 'Can you show me on the map?',
          ja: '地図で示してもらえますか？',
          register: 'formal',
          ja_when: '最終手段にして最強の手。聞き取れなくても地図があれば解決します。スマホの地図でも通じます。',
          when: 'The reliable fallback when listening fails.'
        }
      ]
    },

    {
      type: 'tiles',
      title: '位置を表す前置詞',
      intro: 'ほとんどが de を伴い、後ろの名詞で du / de la に変わります。',
      items: [
        { label: 'près de', fr: 'près de', en: '〜の近くに' },
        { label: 'loin de', fr: 'loin de', en: '〜から遠い' },
        { label: 'à côté de', fr: 'à côté de', en: '〜の隣に' },
        { label: 'en face de', fr: 'en face de', en: '〜の向かいに' },
        { label: 'devant', fr: 'devant', en: '〜の前に' },
        { label: 'derrière', fr: 'derrière', en: '〜の後ろに' },
        { label: 'entre', fr: 'entre', en: '〜の間に' },
        { label: 'au bout de', fr: 'au bout de', en: '〜の突き当りに' },
        { label: 'au coin', fr: 'au coin', en: '角に' },
        { label: 'au feu', fr: 'au feu', en: '信号のところで' },
        { label: 'sur', fr: 'sur', en: '〜の上に' },
        { label: 'sous', fr: 'sous', en: '〜の下に' }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: 'de + 冠詞の縮約',
      list: [
        'de + le → du … à côté du parc（公園の隣）',
        'de + la → de la（変化なし）… près de la gare（駅の近く）',
        "de + l' → de l'（変化なし）… en face de l'hôtel",
        'de + les → des … loin des magasins',
        '★ devant / derrière / entre だけは de を取らない ★ devant la gare'
      ]
    },

    {
      type: 'phrases',
      title: '返ってくる道案内',
      intro: 'これらは自分で言うより「聞き取る」ための表現です。命令形で来ます。',
      items: [
        {
          fr: 'Allez tout droit',
          en: 'Go straight ahead',
          ja: 'まっすぐ行ってください',
          register: 'formal',
          ja_when: '★ tout droit（まっすぐ）と à droite（右へ）は非常に紛らわしい★ droit と droite の違いだけです。tout が付いたら「まっすぐ」。',
          when: 'tout droit (straight) vs à droite (right) — the tout is your cue.'
        },
        {
          fr: 'Tournez à droite',
          en: 'Turn right',
          ja: '右に曲がってください',
          register: 'formal',
          ja_when: 'à droite で「右へ」。手のジェスチャーが付くことが多いので、そちらも見てください。',
          when: 'Usually accompanied by a hand gesture — watch it.'
        },
        {
          fr: 'Tournez à gauche',
          en: 'Turn left',
          ja: '左に曲がってください',
          register: 'formal',
          ja_when: 'gauche は「左」。政治の「左派」も同じ語です。',
          when: 'gauche also means the political left.'
        },
        {
          fr: 'Prenez la première rue à droite',
          en: 'Take the first street on the right',
          ja: '最初の道を右に',
          register: 'formal',
          ja_when: '序数（première, deuxième）が出てきます。Section 10 の序数がここで効いてきます。',
          when: 'This is where the ordinals from Section 10 pay off.'
        },
        {
          fr: 'Continuez jusqu\'au feu',
          en: 'Continue to the traffic light',
          ja: '信号まで進んでください',
          register: 'formal',
          ja_when: "jusqu'à（〜まで）+ le feu = jusqu'au feu。目印まで進め、という指示。",
          when: "jusqu'à + le contracts to jusqu'au."
        },
        {
          fr: "C'est en face de la banque",
          en: "It's across from the bank",
          ja: '銀行の向かいです',
          register: 'neutral',
          ja_when: '目的地の位置を目印との関係で示す言い方。最後にこう言われることが多いです。',
          when: 'Usually the final line of a set of directions.'
        },
        {
          fr: "C'est juste à côté",
          en: "It's right next door",
          ja: 'すぐ隣です',
          register: 'neutral',
          ja_when: 'juste で「ちょうど・すぐ」を強調。C\'est tout près（すぐ近く）も同様。',
          when: 'juste intensifies — "right there".'
        }
      ]
    },

    {
      type: 'dialogue',
      title: '会話：駅までの道',
      scene: 'パリの街角。観光客が通行人に道を尋ねています。',
      lines: [
        { who: '客', fr: "Excusez-moi madame, pour aller à la gare, s'il vous plaît ?", en: 'Excuse me madam, how do I get to the station please?', ja: 'すみません、駅へはどう行けばいいですか？' },
        { who: '人', fr: "Alors, vous allez tout droit jusqu'au feu.", en: 'So, you go straight ahead to the traffic light.', ja: 'まず信号までまっすぐ行ってください。' },
        { who: '人', fr: 'Puis vous tournez à gauche.', en: 'Then you turn left.', ja: 'そこで左に曲がります。' },
        { who: '客', fr: 'Pardon, à gauche au feu ?', en: 'Sorry, left at the light?', ja: 'すみません、信号を左ですか？' },
        { who: '人', fr: "Oui. La gare est au bout de la rue, en face d'un café.", en: 'Yes. The station is at the end of the street, across from a café.', ja: 'はい。駅は通りの突き当り、カフェの向かいです。' },
        { who: '客', fr: "C'est à combien de minutes à pied ?", en: 'How many minutes on foot?', ja: '徒歩何分ですか？' },
        { who: '人', fr: "Cinq minutes, c'est tout près.", en: "Five minutes, it's very close.", ja: '5分です、すぐそこですよ。' },
        { who: '客', fr: 'Merci beaucoup, bonne journée !', en: 'Thank you very much, have a good day!', ja: 'ありがとうございます、よい一日を。' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: '「まっすぐ行ってください」は？',
          options: ['Allez à droite', 'Allez tout droit', 'Allez à gauche', 'Allez au coin'],
          answer: 1,
          why: 'tout droit が「まっすぐ」。à droite は「右へ」。この2つの取り違えが道案内の最大の落とし穴です。'
        },
        {
          q: '「公園の隣に」の正しい形は？',
          options: ['à côté de le parc', 'à côté du parc', 'à côté le parc', 'à côté de la parc'],
          answer: 1,
          why: 'de + le は必ず du に縮まります。'
        },
        {
          q: 'de を取らない前置詞はどれ？',
          options: ['près', 'à côté', 'devant', 'en face'],
          answer: 2,
          why: 'devant / derrière / entre は de なしで直接名詞につきます。devant la gare。'
        },
        {
          q: '道を尋ねる最も自然な言い方は？',
          options: ['Où est la poste ?', "Pour aller à la poste, s'il vous plaît ?", 'La poste ?', 'Je cherche poste'],
          answer: 1,
          why: 'フランス人が最もよく使う形。「どこにあるか」より「どう行くか」を尋ねています。'
        }
      ]
    }
  ]
};
