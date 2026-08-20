/* ============================================================
   Section 27 — The Future
   ============================================================ */

window.S27 = {
  id: 27,
  level: 'A2',
  duration: '25分',
  title: { en: 'Talking About the Future', fr: 'Parler de ses projets — le futur' },

  goals: [
    '近接未来（aller + 原形）で予定を言える',
    '単純未来の作り方を理解する',
    '2つの未来形を場面で使い分けられる',
    '将来の計画や夢を語れる'
  ],

  blocks: [

    {
      type: 'note',
      title: '未来の言い方は2つある',
      body: 'フランス語の未来には「近接未来」と「単純未来」があります。' +
            '英語の be going to と will の関係にとてもよく似ています。' +
            '会話では近接未来が圧倒的に多く、まずこちらを使えるようにしてください。',
      list: [
        '近接未来 … aller の現在形 + 動詞の原形。Je vais partir（出発するつもり）',
        '単純未来 … 語幹 + 専用の語尾。Je partirai（出発するだろう）',
        '★ 会話の未来の大半は近接未来 ★ 作り方も簡単で、活用は aller だけ覚えればよい',
        '単純未来は書き言葉・予報・約束・遠い未来に向いています'
      ]
    },

    {
      type: 'conjugation',
      title: '近接未来 — aller + 原形',
      intro: 'aller の現在形を活用して、後ろに動詞の原形を置くだけです。',
      forms: [
        { pronoun: 'je',          form: 'vais partir' },
        { pronoun: 'tu',          form: 'vas partir' },
        { pronoun: 'il / elle',   form: 'va partir' },
        { pronoun: 'nous',        form: 'allons partir' },
        { pronoun: 'vous',        form: 'allez partir' },
        { pronoun: 'ils / elles', form: 'vont partir' }
      ],
      note: '否定文は aller をはさみます … Je ne vais pas partir。原形は最後に残ります。'
    },

    {
      type: 'conjugation',
      title: '単純未来 — parler の場合',
      intro: '語幹は動詞の原形（-re は e を落とす）。語尾はすべての動詞で共通です。',
      forms: [
        { pronoun: 'je',          form: 'parlerai' },
        { pronoun: 'tu',          form: 'parleras' },
        { pronoun: 'il / elle',   form: 'parlera' },
        { pronoun: 'nous',        form: 'parlerons' },
        { pronoun: 'vous',        form: 'parlerez' },
        { pronoun: 'ils / elles', form: 'parleront' }
      ],
      note: '語尾 -ai, -as, -a, -ons, -ez, -ont は avoir の現在形とほぼ同じ形です。語幹の不規則は条件法【§25】と共通 … avoir → aur-、être → ser-、aller → ir-、faire → fer-、venir → viendr-、pouvoir → pourr-。'
    },

    {
      type: 'note',
      tone: 'gold',
      title: 'どちらを使うか — 判断の目安',
      list: [
        '近接未来 … 決まっている予定、すぐ先のこと、口頭。Je vais manger（もう食べる）',
        '単純未来 … 予測、約束、遠い未来、書き言葉。Il fera beau demain（明日は晴れるでしょう）',
        '★ 迷ったら近接未来 ★ 会話でおかしく響くことはまずありません',
        '★ quand の後は未来形 ★ Quand j\'aurai le temps, je viendrai。英語の when I have time と違い、フランス語は未来形にします',
        'si（もし）の後は現在形 … Si j\'ai le temps, je viendrai。ここだけ未来形にしません'
      ]
    },

    {
      type: 'phrases',
      title: '予定を言う',
      items: [
        {
          fr: 'Je vais partir demain',
          en: "I'm going to leave tomorrow",
          ja: '明日出発します',
          register: 'neutral',
          ja_when: '決まっている予定。近接未来の最も典型的な使い方です。',
          when: 'A settled plan — the archetypal use of the near future.'
        },
        {
          fr: "Qu'est-ce que tu vas faire ce week-end ?",
          en: 'What are you going to do this weekend?',
          ja: '今週末なにするの？',
          register: 'casual',
          ja_when: '★予定を尋ねる最頻出の形★ 現在形の Tu fais quoi ce week-end ? でも同じ意味になります。',
          when: 'The present tense works equally well here in casual speech.'
        },
        {
          fr: 'Nous allons déménager le mois prochain',
          en: "We're going to move next month",
          ja: '来月引っ越します',
          register: 'neutral',
          ja_when: 'déménager（引っ越す）。le mois prochain（来週・来月・来年は prochain）。',
          when: 'prochain marks the coming week, month, or year.'
        },
        {
          fr: 'Je ne vais pas venir ce soir',
          en: "I'm not going to come tonight",
          ja: '今夜は行けません',
          register: 'neutral',
          ja_when: '★否定は aller をはさむ★ 原形 venir は後ろに残ります。Je vais ne pas venir は誤り。',
          when: 'ne and pas wrap aller; the infinitive stays behind.'
        },
        {
          fr: 'Il fera beau demain',
          en: 'It will be nice tomorrow',
          ja: '明日は晴れるでしょう',
          register: 'neutral',
          ja_when: '★天気予報は単純未来★ faire の語幹は fer-。ニュースやアプリの表現はこの形です。',
          when: 'Weather forecasts always use the simple future.'
        },
        {
          fr: "Un jour, j'irai vivre en France",
          en: "One day I'll go and live in France",
          ja: 'いつかフランスに住みます',
          register: 'neutral',
          ja_when: '遠い未来・夢なので単純未来。aller の語幹は ir- で、原形と形が離れているので注意。',
          when: 'A distant hope — simple future. The stem ir- looks nothing like aller.'
        },
        {
          fr: "Quand j'aurai le temps, je t'appellerai",
          en: "When I have time, I'll call you",
          ja: '時間ができたら電話するね',
          register: 'casual',
          ja_when: '★ quand の後は未来形 ★ 英語 when I have time は現在形ですが、フランス語は両方とも未来形にします。日本語話者が最も落とすところ。',
          when: 'Both clauses go into the future, unlike English.'
        },
        {
          fr: "Si j'ai le temps, je viendrai",
          en: "If I have time, I'll come",
          ja: '時間があれば行きます',
          register: 'neutral',
          ja_when: '★ si の後は現在形 ★ quand とは逆です。この対比を必ず押さえてください。',
          when: 'si takes the present — the exact opposite of quand.'
        },
        {
          fr: "J'aimerais apprendre le japonais",
          en: "I'd like to learn Japanese",
          ja: '日本語を学びたいです',
          register: 'neutral',
          ja_when: '願望は条件法【§25】。未来の希望を柔らかく述べる形です。',
          when: 'Wishes use the conditional from §25.'
        }
      ]
    },

    {
      type: 'tiles',
      title: '未来を表す時間の語',
      items: [
        { label: 'demain', fr: 'demain', en: '明日' },
        { label: 'après-demain', fr: 'après-demain', en: '明後日' },
        { label: 'la semaine prochaine', fr: 'la semaine prochaine', en: '来週' },
        { label: 'le mois prochain', fr: 'le mois prochain', en: '来月' },
        { label: "l'année prochaine", fr: "l'année prochaine", en: '来年' },
        { label: 'bientôt', fr: 'bientôt', en: 'まもなく' },
        { label: 'un jour', fr: 'un jour', en: 'いつか' },
        { label: 'dans deux ans', fr: 'dans deux ans', en: '2年後に' },
        { label: 'plus tard', fr: 'plus tard', en: '後で' },
        { label: 'à l\'avenir', fr: "à l'avenir", en: '今後は' }
      ]
    },

    {
      type: 'note',
      tone: 'warm',
      title: 'dans と en の違い',
      list: [
        'dans deux heures … 2時間後に【いつ始まるか】',
        'en deux heures … 2時間で【どれだけかかるか】',
        'Je pars dans une heure … 1時間後に出発する',
        "J'ai fait ça en une heure … それを1時間で終えた",
        '★ 日本語だとどちらも「〜で」になりがちなので、意識して区別してください'
      ]
    },

    {
      type: 'dialogue',
      title: '会話：将来の計画',
      scene: '友人同士が来年の計画を話しています。',
      lines: [
        { who: 'A', fr: "Qu'est-ce que tu vas faire l'année prochaine ?", en: 'What are you going to do next year?', ja: '来年どうするの？' },
        { who: 'B', fr: "Je vais changer de travail, je pense.", en: "I'm going to change jobs, I think.", ja: '転職しようかと思ってる。' },
        { who: 'A', fr: 'Ah oui ? Tu as déjà quelque chose ?', en: 'Oh really? Do you have something already?', ja: 'そうなんだ。もう決まってるの？' },
        { who: 'B', fr: "Pas encore. Quand j'aurai le temps, je chercherai sérieusement.", en: "Not yet. When I have time, I'll look seriously.", ja: 'まだ。時間ができたら本気で探すよ。' },
        { who: 'A', fr: "Et un jour, tu partiras à l'étranger ?", en: 'And one day, will you go abroad?', ja: 'いつか海外にも行く？' },
        { who: 'B', fr: "J'aimerais bien. Si je trouve un poste, je partirai.", en: "I'd like to. If I find a position, I'll go.", ja: 'ぜひね。ポジションが見つかったら行くつもり。' },
        { who: 'A', fr: "Tu vas nous manquer !", en: "We're going to miss you!", ja: '寂しくなるなあ。' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: '近接未来の作り方は？',
          options: ['être + 原形', 'aller + 原形', 'avoir + 過去分詞', '語幹 + 語尾'],
          answer: 1,
          why: 'aller の現在形 + 動詞の原形。Je vais partir。'
        },
        {
          q: '「時間ができたら電話するね」で quand の後は何形？',
          options: ['現在形', '未来形', '過去形', '条件法'],
          answer: 1,
          why: 'Quand j\'aurai le temps。英語の when I have time と違い、フランス語は未来形にします。'
        },
        {
          q: 'si（もし）の後は何形？',
          options: ['現在形', '未来形', '条件法', '半過去'],
          answer: 0,
          why: 'Si j\'ai le temps, je viendrai。quand とは逆で、si の後は現在形です。'
        },
        {
          q: '「1時間後に出発する」の正しい形は？',
          options: ['Je pars en une heure', 'Je pars dans une heure', 'Je pars pour une heure', 'Je pars à une heure'],
          answer: 1,
          why: 'dans は「〜後に」、en は「〜かけて」。混同しやすい組み合わせです。'
        },
        {
          q: 'aller の単純未来の語幹は？',
          options: ['aller-', 'all-', 'ir-', 'allâ-'],
          answer: 2,
          why: 'j\'irai。原形と形が大きく離れる不規則語幹です。条件法【§25】でも同じ ir- を使います。'
        }
      ]
    }
  ]
};
