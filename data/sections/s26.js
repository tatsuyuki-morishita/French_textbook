/* ============================================================
   Section 26 — The Three Question Forms
   ============================================================ */

window.S26 = {
  id: 26,
  level: 'A2',
  duration: '25分',
  title: { en: 'The Three Question Forms', fr: 'Les 3 formes du questionnement' },

  goals: [
    '3つの疑問文の作り方を書き分けられる',
    '場面と相手に応じて形を選べる',
    '倒置のときの t の挿入を扱える',
    '疑問詞を各形式に組み込める'
  ],

  blocks: [

    {
      type: 'note',
      title: '同じ質問を3通りに言える',
      body: 'フランス語の疑問文には3つの形があり、意味は同じでも「格」が違います。' +
            '日本語の「来る？」「来ますか」「いらっしゃいますか」に近い段階分けだと考えてください。',
      list: [
        '① イントネーション … Tu viens ?【会話・くだけた】',
        '② est-ce que … Est-ce que tu viens ?【中立・どこでも安全】',
        '③ 倒置 … Viens-tu ?【書き言葉・公式】',
        '★ 会話での使用頻度は ① > ② >>> ③ ★',
        '③ は硬すぎて、日常会話で使うとよそよそしく響くことがあります'
      ]
    },

    {
      type: 'phrases',
      title: '同じ内容を3通りで',
      intro: '内容はすべて「あなたはフランス語を話しますか」です。',
      items: [
        {
          fr: 'Tu parles français ?',
          en: 'Do you speak French?',
          ja: 'フランス語話す？',
          register: 'casual',
          ja_when: '語順は普通の文のまま、語尾を上げるだけ。友達同士の会話の圧倒的多数がこの形です。書くときは疑問符が唯一の手がかりになります。',
          when: 'Statement order with rising intonation — the vast majority of spoken questions.'
        },
        {
          fr: 'Est-ce que tu parles français ?',
          en: 'Do you speak French?',
          ja: 'フランス語を話しますか？',
          register: 'neutral',
          ja_when: '★迷ったらこれ★ 文頭に est-ce que を足すだけで語順は変えません。カジュアルにもフォーマルにも使えて失敗がありません。',
          when: 'The safe default: add est-ce que and change nothing else.'
        },
        {
          fr: 'Parlez-vous français ?',
          en: 'Do you speak French?',
          ja: 'フランス語をお話しになりますか？',
          register: 'formal',
          ja_when: '主語と動詞を入れ替えてハイフンで結びます。書き言葉・公式文書・格式ある場面で。会話で使うと少し芝居がかって聞こえることもあります。',
          when: 'Written and formal registers. Can sound theatrical in casual speech.'
        }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: '倒置の作り方と例外',
      list: [
        '基本 … 動詞 + ハイフン + 主語代名詞。Viens-tu ? / Parlez-vous ?',
        '★ 母音が続くと t を挿入 ★ A-t-il ? / Parle-t-elle ? / Va-t-on ?（Ail ? では発音しにくいため）',
        '★ je の倒置はほぼ使わない ★ Parlé-je ? は現代語では不自然。Est-ce que je ... を使う',
        '名詞主語のときは代名詞を足す … Marie parle-t-elle français ?',
        '複合過去では助動詞を倒置 … As-tu mangé ? / Est-elle allée ?'
      ]
    },

    {
      type: 'phrases',
      title: '倒置の実例',
      items: [
        {
          fr: 'A-t-il des enfants ?',
          en: 'Does he have children?',
          ja: '彼には子供がいますか？',
          register: 'formal',
          ja_when: '★ a と il が母音同士なので t を挟みます ★ この t には意味がなく、発音をつなぐためだけのものです。',
          when: 'The inserted t has no meaning — it only makes the join pronounceable.'
        },
        {
          fr: 'Où allez-vous ?',
          en: 'Where are you going?',
          ja: 'どちらへ行かれますか？',
          register: 'formal',
          ja_when: '疑問詞を文頭に置いてから倒置します。この形は会話でも比較的よく使われます。',
          when: 'Question word first, then the inversion. Common even in speech.'
        },
        {
          fr: 'As-tu mangé ?',
          en: 'Have you eaten?',
          ja: 'ご飯食べた？',
          register: 'neutral',
          ja_when: '複合過去では助動詞 avoir を倒置します。過去分詞は後ろに残ります。',
          when: 'In the passé composé it is the auxiliary that inverts.'
        },
        {
          fr: 'Marie parle-t-elle français ?',
          en: 'Does Marie speak French?',
          ja: 'マリーはフランス語を話しますか？',
          register: 'formal',
          ja_when: '名詞が主語のときは、名詞を先に置いてから対応する代名詞を倒置します。二重に主語が出るのがこの形の特徴です。',
          when: 'A noun subject appears first and is echoed by the inverted pronoun.'
        }
      ]
    },

    {
      type: 'note',
      tone: 'warm',
      title: '疑問詞を3形式に組み込む',
      body: '疑問詞（où, quand, comment, pourquoi, combien）はどの形式にも入れられます。' +
            'カジュアルな会話では疑問詞を文末に置く形も非常によく使われます。',
      list: [
        '① Tu vas où ?【疑問詞を最後に置く・最もくだけた】',
        '① Où tu vas ?【疑問詞を最初に置く・くだけた】',
        '② Où est-ce que tu vas ?【中立】',
        '③ Où vas-tu ?【フォーマル】',
        '★ pourquoi だけは文末に置けない ★ Tu viens pourquoi ? は不自然'
      ]
    },

    {
      type: 'phrases',
      title: '疑問詞つきの実例',
      items: [
        {
          fr: 'Tu habites où ?',
          en: 'Where do you live?',
          ja: 'どこ住んでるの？',
          register: 'casual',
          ja_when: '★会話で最も自然な形★ 疑問詞を文末に置くのは、学校ではあまり教えませんが実際には非常に多い形です。',
          when: 'Rarely taught, extremely common in real speech.'
        },
        {
          fr: "Qu'est-ce que tu fais ?",
          en: 'What are you doing?',
          ja: '何してるの？',
          register: 'neutral',
          ja_when: '「何を」を尋ねる最頻出の形。que は単独では使いにくいので、この形を丸ごと覚えます。',
          when: 'que rarely stands alone — learn this whole chunk.'
        },
        {
          fr: 'Combien de temps restez-vous ?',
          en: 'How long are you staying?',
          ja: 'どのくらい滞在されますか？',
          register: 'formal',
          ja_when: '入国審査やホテルで聞かれる形。combien de + 名詞【§4】。',
          when: 'What immigration and hotels ask you.'
        },
        {
          fr: 'Pourquoi est-ce que tu dis ça ?',
          en: 'Why do you say that?',
          ja: 'なんでそんなこと言うの？',
          register: 'casual',
          ja_when: '★ pourquoi は文末に置けない ★ Tu dis ça pourquoi ? は不自然です。',
          when: 'pourquoi cannot move to the end, unlike the other question words.'
        }
      ]
    },

    {
      type: 'dialogue',
      title: '会話：3つの形が全部出てくる',
      scene: '空港の入国審査（フォーマル）から、その後の友人との会話（カジュアル）へ。',
      lines: [
        { who: '審', fr: 'Bonjour. Où allez-vous ?', en: 'Hello. Where are you going?', ja: 'こんにちは。どちらへ行かれますか？' },
        { who: '客', fr: 'À Lyon, chez des amis.', en: 'To Lyon, to friends.', ja: 'リヨンの友人宅です。' },
        { who: '審', fr: 'Combien de temps restez-vous en France ?', en: 'How long are you staying in France?', ja: 'フランスにはどのくらい滞在されますか？' },
        { who: '客', fr: 'Deux semaines.', en: 'Two weeks.', ja: '2週間です。' },
        { who: '友', fr: "Salut ! Tu es arrivé quand ?", en: 'Hi! When did you arrive?', ja: 'やあ、いつ着いた？' },
        { who: '客', fr: "Ce matin. Est-ce que tu as le temps de déjeuner ?", en: 'This morning. Do you have time for lunch?', ja: '今朝。昼ごはん食べる時間ある？' },
        { who: '友', fr: "Bien sûr ! On va où ?", en: 'Of course! Where shall we go?', ja: 'もちろん。どこ行く？' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: '会話で最もよく使われる疑問文の形は？',
          options: ['倒置', 'est-ce que', 'イントネーションのみ', '3つとも同じ'],
          answer: 2,
          why: '語尾を上げるだけの形が圧倒的多数です。倒置は書き言葉寄りで硬く響きます。'
        },
        {
          q: 'A-t-il の t は何のため？',
          options: ['意味を強める', '母音の連続を避ける', '過去を示す', '複数を示す'],
          answer: 1,
          why: 'a と il が母音同士で発音しにくいため挿入されます。意味はありません。'
        },
        {
          q: '文末に置けない疑問詞は？',
          options: ['où', 'quand', 'comment', 'pourquoi'],
          answer: 3,
          why: 'Tu viens pourquoi ? は不自然です。他の疑問詞は文末に置けます。'
        },
        {
          q: '「マリーはフランス語を話しますか」を倒置で言うと？',
          options: ['Parle Marie français ?', 'Marie parle-t-elle français ?', 'Parle-Marie français ?', 'Est-ce Marie parle français ?'],
          answer: 1,
          why: '名詞主語を先に置き、対応する代名詞 elle を倒置します。'
        }
      ]
    }
  ]
};
