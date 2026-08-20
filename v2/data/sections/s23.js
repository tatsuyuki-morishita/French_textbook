/* ============================================================
   Section 23 — At the Doctor's
   ============================================================ */

window.S23 = {
  id: 23,
  level: 'A1-A2',
  duration: '28分',
  title: { en: "At the Doctor's", fr: 'Chez le docteur' },

  goals: [
    '体の部位を言える',
    'avoir mal à で痛む場所を伝えられる',
    '症状を医師に説明できる',
    '薬局で必要なものを頼める'
  ],

  blocks: [

    {
      type: 'tiles',
      title: '体の部位（le corps）',
      items: [
        { label: 'la tête', fr: 'la tête', ja: '頭' },
        { label: 'les yeux', fr: 'les yeux', ja: '目' },
        { label: 'les oreilles', fr: 'les oreilles', ja: '耳' },
        { label: 'le nez', fr: 'le nez', ja: '鼻' },
        { label: 'la bouche', fr: 'la bouche', ja: '口' },
        { label: 'les dents', fr: 'les dents', ja: '歯' },
        { label: 'la gorge', fr: 'la gorge', ja: 'のど' },
        { label: 'le cou', fr: 'le cou', ja: '首' },
        { label: 'le bras', fr: 'le bras', ja: '腕' },
        { label: 'la main', fr: 'la main', ja: '手' },
        { label: 'le dos', fr: 'le dos', ja: '背中' },
        { label: 'le ventre', fr: 'le ventre', ja: 'お腹' },
        { label: 'la jambe', fr: 'la jambe', ja: '脚' },
        { label: 'le pied', fr: 'le pied', ja: '足' },
        { label: 'le cœur', fr: 'le cœur', ja: '心臓' },
        { label: 'la peau', fr: 'la peau', ja: '肌' }
      ]
    },

    {
      type: 'note',
      title: 'avoir mal à — 痛みを伝える万能の型',
      body: '「〜が痛い」はすべてこの型で言えます。' +
            'mal は「痛み」で、à の後に痛む場所を置きます。' +
            '前置詞 à が冠詞と縮約するので、そこだけ注意してください。',
      list: [
        'à + le → au … J\'ai mal au dos（背中が痛い）',
        'à + la → à la … J\'ai mal à la tête（頭が痛い）',
        "à + l' → à l' … J'ai mal à l'oreille（耳が痛い）",
        'à + les → aux … J\'ai mal aux dents（歯が痛い）',
        '★ 体の部位には所有形容詞を使わない ★ mal à ma tête ではなく mal à la tête'
      ]
    },

    {
      type: 'phrases',
      title: '症状を伝える',
      items: [
        {
          fr: "J'ai mal à la tête",
          en: 'I have a headache',
          ja: '頭が痛いです',
          register: 'neutral',
          ja_when: 'tête は女性名詞なので à la。最も使う機会の多い一文です。',
          when: 'The most frequently needed sentence in this section.'
        },
        {
          fr: "J'ai mal au ventre",
          en: 'I have a stomach ache',
          ja: 'お腹が痛いです',
          register: 'neutral',
          ja_when: 'ventre は男性名詞なので à + le = au。estomac も使えますが、日常では ventre が普通です。',
          when: 'ventre is the everyday word; estomac is more clinical.'
        },
        {
          fr: "J'ai mal à la gorge",
          en: 'I have a sore throat',
          ja: 'のどが痛いです',
          register: 'neutral',
          ja_when: '風邪の症状として最頻出。薬局でこれを言えば適切なものを出してもらえます。',
          when: 'Saying this at a pharmacy gets you the right thing.'
        },
        {
          fr: "J'ai mal aux dents",
          en: 'I have a toothache',
          ja: '歯が痛いです',
          register: 'neutral',
          ja_when: 'dents は複数なので aux。歯医者は le dentiste。',
          when: 'dents is plural, hence aux.'
        },
        {
          fr: "J'ai de la fièvre",
          en: 'I have a fever',
          ja: '熱があります',
          register: 'neutral',
          ja_when: '★ 熱は avoir mal ではなく avoir de la fièvre ★ 部分冠詞を使います。フランスの体温計は摂氏です。',
          when: 'Fever takes the partitive, not avoir mal.'
        },
        {
          fr: 'Je suis enrhumé',
          en: 'I have a cold',
          ja: '風邪をひいています',
          register: 'neutral',
          ja_when: '女性は enrhumée。J\'ai un rhume も同じ意味で使えます。',
          when: "J'ai un rhume works equally well."
        },
        {
          fr: 'Je tousse beaucoup',
          en: 'I cough a lot',
          ja: 'よく咳が出ます',
          register: 'neutral',
          ja_when: 'tousser（咳をする）。名詞は la toux。',
          when: 'The noun is la toux.'
        },
        {
          fr: 'Je suis fatigué depuis trois jours',
          en: "I've been tired for three days",
          ja: '3日前から疲れています',
          register: 'neutral',
          ja_when: 'depuis + 期間は現在形【§13】。医師に症状の期間を伝えるときに必ず使います。',
          when: 'depuis with the present tense — how you give a duration to a doctor.'
        },
        {
          fr: "J'ai envie de vomir",
          en: 'I feel like vomiting',
          ja: '吐き気がします',
          register: 'neutral',
          ja_when: 'avoir envie de（〜したい）を体調に使った形。J\'ai la nausée とも言えます。',
          when: "J'ai la nausée is an alternative."
        },
        {
          fr: 'Ça fait mal ici',
          en: 'It hurts here',
          ja: 'ここが痛いです',
          register: 'neutral',
          ja_when: '★語彙がなくても指させば通じる★ 部位の名前が出てこないときの最強の一言。',
          when: 'The fallback when you cannot name the body part — just point.'
        }
      ]
    },

    {
      type: 'phrases',
      title: '診察と薬局',
      items: [
        {
          fr: 'Je voudrais prendre rendez-vous',
          en: "I'd like to make an appointment",
          ja: '予約を取りたいのですが',
          register: 'formal',
          ja_when: 'prendre rendez-vous で「予約を取る」。医者・美容院・役所すべてこの形です。',
          when: 'Works for doctors, hairdressers, and administrative offices alike.'
        },
        {
          fr: "Où avez-vous mal ?",
          en: 'Where does it hurt?',
          ja: 'どこが痛みますか？',
          register: 'formal',
          ja_when: '医師から聞かれる側。答えは J\'ai mal à ... の形で。',
          when: 'What the doctor asks you.'
        },
        {
          fr: 'Depuis quand ?',
          en: 'Since when?',
          ja: 'いつからですか？',
          register: 'formal',
          ja_when: '答えは Depuis trois jours（3日前から）。期間を答えます。',
          when: 'Answer with depuis + duration.'
        },
        {
          fr: "Vous avez une ordonnance ?",
          en: 'Do you have a prescription?',
          ja: '処方箋はお持ちですか？',
          register: 'formal',
          ja_when: '★ ordonnance は「処方箋」★ フランスでは多くの薬が処方箋なしでは買えません。薬局で聞かれます。',
          when: 'Many medicines in France require one.'
        },
        {
          fr: "J'ai besoin de quelque chose pour la toux",
          en: 'I need something for a cough',
          ja: '咳に効くものが欲しいのですが',
          register: 'neutral',
          ja_when: '★ 薬局で最も便利な型 ★ avoir besoin de（〜が必要）+ pour + 症状。薬名を知らなくても通じます。',
          when: 'The most useful pharmacy frame — no drug name needed.'
        },
        {
          fr: 'Ce sont des médicaments sans ordonnance ?',
          en: 'Are these over-the-counter medicines?',
          ja: 'これは処方箋なしで買えますか？',
          register: 'formal',
          ja_when: 'sans ordonnance（処方箋なし）。フランスの薬剤師は相談に応じてくれるので、軽い症状なら薬局で足ります。',
          when: 'French pharmacists give real advice — for minor issues, start there.'
        },
        {
          fr: 'Reposez-vous bien',
          en: 'Rest well',
          ja: 'よく休んでください',
          register: 'formal',
          ja_when: '医師や薬剤師からの締めの言葉。代名動詞の命令形です。',
          when: 'The parting line from a doctor or pharmacist.'
        }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: 'フランスで具合が悪くなったら',
      list: [
        'まず la pharmacie（薬局）へ。緑の十字が目印で、薬剤師が症状を聞いて対応してくれます',
        '医師の診察は le médecin généraliste（かかりつけ医）から。予約制が基本',
        '緊急時は 15（SAMU・救急医療）。EU 共通の緊急番号は 112',
        'les urgences … 救急外来。待ち時間は長いことが多い',
        '★ la carte vitale ★ フランスの健康保険証。旅行者なら海外旅行保険の書類を持参してください'
      ]
    },

    {
      type: 'dialogue',
      title: '会話：薬局にて',
      scene: '旅行中に体調を崩し、薬局に来ています。',
      lines: [
        { who: '客', fr: 'Bonjour, je ne me sens pas bien.', en: "Hello, I'm not feeling well.", ja: 'こんにちは、体調が良くないんです。' },
        { who: '薬', fr: 'Bonjour. Où avez-vous mal ?', en: 'Hello. Where does it hurt?', ja: 'こんにちは。どこが痛みますか？' },
        { who: '客', fr: "J'ai mal à la gorge et j'ai de la fièvre.", en: 'I have a sore throat and a fever.', ja: 'のどが痛くて、熱があります。' },
        { who: '薬', fr: 'Depuis quand ?', en: 'Since when?', ja: 'いつからですか？' },
        { who: '客', fr: 'Depuis deux jours. Je tousse aussi.', en: 'For two days. I cough too.', ja: '2日前から。咳も出ます。' },
        { who: '薬', fr: "Je vous conseille ce sirop. C'est sans ordonnance.", en: 'I recommend this syrup. It is over the counter.', ja: 'このシロップをおすすめします。処方箋は不要です。' },
        { who: '客', fr: "Merci. Ça coûte combien ?", en: 'Thank you. How much is it?', ja: 'ありがとうございます。いくらですか？' },
        { who: '薬', fr: "Sept euros cinquante. Reposez-vous bien !", en: '7.50 euros. Rest well!', ja: '7ユーロ50です。お大事に。' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: '「歯が痛い」の正しい形は？',
          options: ["J'ai mal à les dents", "J'ai mal aux dents", "J'ai mal à la dents", "J'ai mal de dents"],
          answer: 1,
          why: 'dents は複数なので à + les = aux に縮約します。'
        },
        {
          q: '「熱があります」の正しい形は？',
          options: ["J'ai mal à la fièvre", "J'ai de la fièvre", 'Je suis fièvre', "J'ai une fièvre"],
          answer: 1,
          why: '熱は avoir mal ではなく avoir de la fièvre。部分冠詞を使います。'
        },
        {
          q: '体の部位の前に置くのは？',
          options: ['所有形容詞（ma, mon）', '定冠詞（la, le, les）', '不定冠詞（une, un）', '何も置かない'],
          answer: 1,
          why: 'J\'ai mal à la tête。ma tête とは言いません。代名動詞のときと同じ規則です。'
        },
        {
          q: '薬局で症状に合うものを頼む型は？',
          options: ["J'ai besoin de quelque chose pour ...", 'Je veux un médicament', 'Donnez-moi ...', "Qu'est-ce que c'est ?"],
          answer: 0,
          why: '薬名を知らなくても症状を言えば通じます。avoir besoin de + pour + 症状。'
        }
      ]
    }
  ]
};
