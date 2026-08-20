/* ============================================================
   Section 22 — Holidays & the Past Tense
   ============================================================ */

window.S22 = {
  id: 22,
  level: 'A1-A2',
  duration: '39分',
  title: { en: 'Holidays & the Past Tense', fr: 'Parler de ses vacances' },

  goals: [
    '複合過去（passé composé）の作り方を理解する',
    'avoir を使う動詞と être を使う動詞を見分けられる',
    'être 動詞の過去分詞の一致を扱える',
    '休暇の思い出を過去形で語れる'
  ],

  blocks: [

    {
      type: 'note',
      title: '複合過去 — フランス語の「〜した」',
      body: 'ここが A1 と A2 を分ける最大の関門です。' +
            'フランス語の過去形は動詞1語では作れず、必ず2つの部品を並べます。' +
            '「助動詞（avoir か être）の現在形」＋「過去分詞」という組み立てです。',
      list: [
        'J\'ai mangé … 食べた（avoir + mangé）',
        'Je suis allé … 行った（être + allé）',
        '★ 助動詞をどちらにするかで規則が変わる ★ ここが最大の分かれ道',
        '大多数の動詞は avoir を使う',
        '移動・状態変化を表す一部の動詞と、すべての代名動詞は être を使う'
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: '過去分詞の作り方',
      list: [
        '-er 動詞 → -é … parler → parlé、manger → mangé、aller → allé',
        '-ir 動詞 → -i … finir → fini、dormir → dormi',
        '-re 動詞 → -u … attendre → attendu、vendre → vendu',
        '★ 不規則なものは暗記 ★ avoir → eu、être → été、faire → fait、prendre → pris',
        'voir → vu、boire → bu、lire → lu、écrire → écrit、mettre → mis、venir → venu'
      ]
    },

    {
      type: 'conjugation',
      title: 'avoir を使う複合過去 — visiter（訪れる）',
      intro: '大多数の動詞はこちら。過去分詞は主語によって変化しません。',
      forms: [
        { pronoun: 'je',          form: "ai visité", ipa: 'ʒe vizite' },
        { pronoun: 'tu',          form: 'as visité' },
        { pronoun: 'il / elle',   form: 'a visité' },
        { pronoun: 'nous',        form: 'avons visité' },
        { pronoun: 'vous',        form: 'avez visité' },
        { pronoun: 'ils / elles', form: 'ont visité' }
      ],
      note: '過去分詞 visité は主語が誰でも形が変わりません。否定文は助動詞をはさみます … Je n\'ai pas visité。'
    },

    {
      type: 'conjugation',
      title: 'être を使う複合過去 — aller（行く）',
      intro: 'こちらは過去分詞が主語の性と数に一致します。',
      forms: [
        { pronoun: 'je',    form: 'suis allé' },
        { pronoun: 'tu',    form: 'es allé' },
        { pronoun: 'il',    form: 'est allé' },
        { pronoun: 'elle',  form: 'est allée' },
        { pronoun: 'nous',  form: 'sommes allés' },
        { pronoun: 'elles', form: 'sont allées' }
      ],
      note: '★ 一致は書くときだけの問題で、音は allé / allée / allés / allées すべて同じ「アレ」★ 聞き分けはできません。書くときに気をつけてください。'
    },

    {
      type: 'note',
      tone: 'warm',
      title: 'être を使う動詞（DR & MRS VANDERTRAMP）',
      body: '英語圏の学習者は頭字語 DR & MRS VANDERTRAMP で覚えます。' +
            '共通しているのは「移動」または「状態の変化」です。',
      list: [
        'aller（行く）／ venir（来る）',
        'arriver（着く）／ partir（出発する）',
        'entrer（入る）／ sortir（出る）',
        'monter（上がる）／ descendre（下りる）',
        'naître（生まれる）／ mourir（死ぬ）',
        'rester（とどまる）／ retourner（戻る）／ tomber（落ちる）',
        'rentrer（帰る）／ devenir（〜になる）／ passer（立ち寄る）',
        '★ すべての代名動詞も être ★ Je me suis levé / Je me suis reposé'
      ]
    },

    {
      type: 'phrases',
      title: '休暇を過去形で語る',
      items: [
        {
          fr: "J'ai passé une semaine en Italie",
          en: 'I spent a week in Italy',
          ja: 'イタリアで1週間過ごしました',
          register: 'neutral',
          ja_when: 'passer は avoir を使います。休暇の話を始める定番の入り口。',
          when: 'The standard opener when telling someone about a trip.'
        },
        {
          fr: 'Je suis allée à la plage tous les jours',
          en: 'I went to the beach every day',
          ja: '毎日ビーチに行きました',
          register: 'neutral',
          ja_when: 'aller は être 動詞。女性が言うので allée と e が付いていますが、音は allé と同じです。',
          when: 'The extra e for a female speaker is silent.'
        },
        {
          fr: "J'ai visité des monuments magnifiques",
          en: 'I visited some magnificent monuments',
          ja: '素晴らしい建造物を見ました',
          register: 'neutral',
          ja_when: '★ visiter は場所に使う ★ 人を訪ねるときは rendre visite à。J\'ai visité mon ami は誤りです。',
          when: 'visiter is for places. Visiting a person is rendre visite à.'
        },
        {
          fr: 'Nous sommes partis très tôt le matin',
          en: 'We left very early in the morning',
          ja: '朝とても早く出発しました',
          register: 'neutral',
          ja_when: 'partir は être 動詞。nous なので過去分詞に s が付きます。',
          when: 'partir takes être, so the participle agrees.'
        },
        {
          fr: "Je me suis bien reposé",
          en: 'I rested well',
          ja: 'よく休めました',
          register: 'neutral',
          ja_when: '★ 代名動詞は必ず être ★ 女性なら reposée。休暇の感想としてよく使われます。',
          when: 'All pronominal verbs take être, without exception.'
        },
        {
          fr: "Il faisait beau toute la semaine",
          en: 'The weather was nice all week',
          ja: '一週間ずっと天気が良かったです',
          register: 'neutral',
          ja_when: '★ 天気や状態の描写は半過去（imparfait）★ 「〜していた」という背景を表す別の過去形で、複合過去とは役割が違います。',
          when: 'Weather and background states use the imperfect, not the passé composé.'
        },
        {
          fr: "C'était vraiment génial !",
          en: 'It was really great!',
          ja: '本当に最高でした！',
          register: 'casual',
          ja_when: "C'était は c'est の半過去。感想を述べる最頻出の形です。génial / super / magnifique と入れ替えて使えます。",
          when: "C'était is the imperfect of c'est — the standard way to give an impression."
        },
        {
          fr: "J'aimerais y retourner",
          en: "I'd like to go back there",
          ja: 'また行きたいです',
          register: 'neutral',
          ja_when: '★ y は「そこへ」を指す代名詞 ★ 一度出た場所を繰り返さずに済みます。retourner à l\'Italie と言わずに y で受けます。',
          when: 'y stands in for a place already mentioned.'
        },
        {
          fr: "Je n'ai pas eu le temps de tout voir",
          en: "I didn't have time to see everything",
          ja: '全部見る時間がありませんでした',
          register: 'neutral',
          ja_when: '★ 否定は助動詞をはさむ ★ Je n\'ai pas eu であって Je n\'ai eu pas ではありません。eu は avoir の過去分詞。',
          when: 'ne and pas wrap the auxiliary, not the participle.'
        }
      ]
    },

    {
      type: 'tiles',
      title: '休暇の語彙',
      items: [
        { label: 'la plage', fr: 'la plage', en: 'ビーチ' },
        { label: 'la montagne', fr: 'la montagne', en: '山' },
        { label: 'la mer', fr: 'la mer', en: '海' },
        { label: 'la campagne', fr: 'la campagne', en: '田舎' },
        { label: 'le camping', fr: 'le camping', en: 'キャンプ' },
        { label: 'le château', fr: 'le château', en: '城' },
        { label: 'une île', fr: 'une île', en: '島', ipa: 'yn il' },
        { label: 'un voyage', fr: 'un voyage', en: '旅行' },
        { label: 'la valise', fr: 'la valise', en: 'スーツケース' },
        { label: 'le passeport', fr: 'le passeport', en: 'パスポート' },
        { label: 'le billet', fr: 'le billet', en: '切符' },
        { label: 'un appareil photo', fr: 'un appareil photo', en: 'カメラ' },
        { label: 'faire de la randonnée', fr: 'faire de la randonnée', en: 'ハイキングをする' },
        { label: 'prendre des photos', fr: 'prendre des photos', en: '写真を撮る' },
        { label: 'se baigner', fr: 'se baigner', en: '泳ぐ・水浴びする' },
        { label: 'se reposer', fr: 'se reposer', en: '休む' }
      ]
    },

    {
      type: 'dialogue',
      title: '会話：休暇の話',
      scene: '休暇明けの職場。同僚が旅行の話を聞いています。',
      lines: [
        { who: 'A', fr: "Alors, tu as passé de bonnes vacances ?", en: 'So, did you have a good holiday?', ja: 'で、休暇はどうだった？' },
        { who: 'B', fr: "Oui ! Je suis allée en Grèce pendant deux semaines.", en: 'Yes! I went to Greece for two weeks.', ja: 'うん！ ギリシャに2週間行ってきた。' },
        { who: 'A', fr: "Génial. Tu as fait quoi là-bas ?", en: 'Great. What did you do there?', ja: 'いいね。何したの？' },
        { who: 'B', fr: "J'ai visité des îles et je me suis baignée tous les jours.", en: 'I visited some islands and swam every day.', ja: '島を回って、毎日泳いでた。' },
        { who: 'A', fr: 'Il faisait beau ?', en: 'Was the weather nice?', ja: '天気よかった？' },
        { who: 'B', fr: "Magnifique ! Mais je n'ai pas eu le temps de tout voir.", en: "Magnificent! But I didn't have time to see everything.", ja: '最高だった。でも全部は回りきれなかった。' },
        { who: 'A', fr: "Tu vas y retourner alors ?", en: 'So will you go back?', ja: 'じゃあまた行くの？' },
        { who: 'B', fr: "J'aimerais bien, oui !", en: "I'd really like to, yes!", ja: 'ぜひね！' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: '複合過去で être を使うのはどの動詞？',
          options: ['manger', 'aller', 'visiter', 'regarder'],
          answer: 1,
          why: 'aller は移動を表す être 動詞。他の3つは avoir を使います。'
        },
        {
          q: "「私（女性）は行きました」の正しい形は？",
          options: ['Je suis allé', 'Je suis allée', "J'ai allé", "J'ai allée"],
          answer: 1,
          why: 'être 動詞なので過去分詞が主語に一致し、女性は allée。ただし音は allé と同じです。'
        },
        {
          q: "J'ai mangé を否定文にすると？",
          options: ["Je n'ai mangé pas", "Je n'ai pas mangé", "Je ne mangé pas", "J'ai ne pas mangé"],
          answer: 1,
          why: 'ne と pas は助動詞をはさみます。過去分詞は後ろに残ります。'
        },
        {
          q: '代名動詞の複合過去で使う助動詞は？',
          options: ['avoir', 'être', 'どちらでもよい', '動詞による'],
          answer: 1,
          why: 'すべての代名動詞は例外なく être を使います。Je me suis levé。'
        },
        {
          q: '「友達を訪ねた」の正しい形は？',
          options: ["J'ai visité mon ami", "J'ai rendu visite à mon ami", "J'ai visité à mon ami", "Je suis visité mon ami"],
          answer: 1,
          why: 'visiter は場所に使います。人を訪ねるときは rendre visite à です。'
        }
      ]
    }
  ]
};
