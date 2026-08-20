/* ============================================================
   grammar.js — the grammar reference
   ------------------------------------------------------------
   One entry per pattern. Phrase cards link to these by id, so a
   rule is explained once here and reachable from every phrase
   that uses it, instead of being buried in whichever section
   happened to introduce it.

   entry = {
     id, title{ja,en}, summary{ja,en},
     forms?  : [{pronoun, form}]        conjugation table
     rules?  : {ja:[], en:[]}           the bullet points
     ex?     : [{fr, ja, en}]           worked examples
     sections: [ids]                    where it is taught
   }
   ============================================================ */

window.GRAMMAR = {

  categories: [
    { id: 'verbs',   title: { ja: '動詞の活用',   en: 'Verb conjugation' } },
    { id: 'tenses',  title: { ja: '時制',         en: 'Tenses' } },
    { id: 'articles',title: { ja: '冠詞',         en: 'Articles' } },
    { id: 'negation',title: { ja: '否定',         en: 'Negation' } },
    { id: 'nouns',   title: { ja: '名詞と形容詞', en: 'Nouns & adjectives' } },
    { id: 'pronouns',title: { ja: '代名詞',       en: 'Pronouns' } },
    { id: 'questions',title:{ ja: '疑問文',       en: 'Questions' } },
    { id: 'sounds',  title: { ja: '音の規則',     en: 'Sound rules' } },
    { id: 'misc',    title: { ja: 'よく使う型',   en: 'Frequent patterns' } }
  ],

  entries: [

    /* ---------------------------------------------------------------
       VERBS
       --------------------------------------------------------------- */
    {
      id: 'etre', cat: 'verbs', sections: [2, 15],
      title:   { ja: 'être（〜である）', en: 'être — to be' },
      summary: { ja: '国籍・職業・状態・性質を言うときの動詞。完全に不規則なので音で覚えます。',
                 en: 'Used for nationality, profession, state, and quality. Fully irregular — learn it by sound.' },
      forms: [
        { pronoun: 'je', form: 'suis' }, { pronoun: 'tu', form: 'es' },
        { pronoun: 'il / elle', form: 'est' }, { pronoun: 'nous', form: 'sommes' },
        { pronoun: 'vous', form: 'êtes' }, { pronoun: 'ils / elles', form: 'sont' }
      ],
      rules: {
        ja: ['tu es と il est はどちらも「エ」で同音。主語で聞き分ける',
             'vous êtes は必ずリエゾンして「ヴゼットゥ」',
             'ils sont（イルソン）と ils ont（イルゾン, avoir）は意味が正反対'],
        en: ['tu es and il est sound identical — the subject is your only clue',
             'vous êtes always links: "voo-ZET"',
             'ils sont (are) vs ils ont (have) differ by one voiced consonant']
      },
      ex: [{ fr: 'Je suis japonais', ja: '私は日本人です', en: 'I am Japanese' },
           { fr: 'Vous êtes étudiant ?', ja: '学生さんですか？', en: 'Are you a student?' }]
    },
    {
      id: 'avoir', cat: 'verbs', sections: [5, 15],
      title:   { ja: 'avoir（持つ）', en: 'avoir — to have' },
      summary: { ja: '所有だけでなく、年齢・空腹・寒さなど、英語なら be を使う場面の多くで使います。',
                 en: 'Possession, but also age, hunger, cold — many things English expresses with "be".' },
      forms: [
        { pronoun: 'je', form: 'ai' }, { pronoun: 'tu', form: 'as' },
        { pronoun: 'il / elle', form: 'a' }, { pronoun: 'nous', form: 'avons' },
        { pronoun: 'vous', form: 'avez' }, { pronoun: 'ils / elles', form: 'ont' }
      ],
      rules: {
        ja: ['je ai とは言わず必ず j\'ai と縮約',
             'J\'ai 25 ans（25歳）… 年齢は être ではなく avoir',
             'J\'ai faim / soif / froid / chaud / peur / sommeil もすべて avoir'],
        en: ['je ai is impossible — always j\'ai',
             'J\'ai 25 ans for age, never je suis 25',
             'Hunger, thirst, cold, fear, sleepiness all take avoir']
      },
      ex: [{ fr: "J'ai deux frères", ja: '兄弟が2人います', en: 'I have two brothers' },
           { fr: "J'ai faim", ja: 'お腹が空いた', en: "I'm hungry" }]
    },
    {
      id: 'er-verbs', cat: 'verbs', sections: [6],
      title:   { ja: '-er 動詞（規則動詞）', en: '-er verbs (regular)' },
      summary: { ja: 'フランス語の動詞の約9割。語幹に決まった6つの語尾を足すだけで、何千という動詞が使えます。',
                 en: 'Around 90% of French verbs. Learn six endings and thousands of verbs open up.' },
      forms: [
        { pronoun: 'je', form: 'parle' }, { pronoun: 'tu', form: 'parles' },
        { pronoun: 'il / elle', form: 'parle' }, { pronoun: 'nous', form: 'parlons' },
        { pronoun: 'vous', form: 'parlez' }, { pronoun: 'ils / elles', form: 'parlent' }
      ],
      rules: {
        ja: ['原形から -er を取って語幹を作り、-e / -es / -e / -ons / -ez / -ent を足す',
             '★ -e, -es, -e, -ent の4つは音がまったく同じ ★ 書き分けは目、聞き分けは主語',
             '音が変わるのは nous（-ons）と vous（-ez）だけ',
             'aller だけは -er で終わるのに不規則'],
        en: ['Drop -er, add -e / -es / -e / -ons / -ez / -ent',
             'Four of the six sound identical — only the subject distinguishes them',
             'Only nous (-ons) and vous (-ez) change the sound',
             'aller ends in -er but is irregular']
      },
      ex: [{ fr: 'Je travaille à Tokyo', ja: '東京で働いています', en: 'I work in Tokyo' },
           { fr: 'Ils parlent français', ja: '彼らはフランス語を話します', en: 'They speak French' }]
    },
    {
      id: 'faire', cat: 'verbs', sections: [13],
      title:   { ja: 'faire（する・作る）', en: 'faire — to do, to make' },
      summary: { ja: '天気・料理・スポーツ・活動と、非常に広く使う不規則動詞。',
                 en: 'Irregular, and used for weather, cooking, sport, and activities of every kind.' },
      forms: [
        { pronoun: 'je', form: 'fais' }, { pronoun: 'tu', form: 'fais' },
        { pronoun: 'il / elle', form: 'fait' }, { pronoun: 'nous', form: 'faisons' },
        { pronoun: 'vous', form: 'faites' }, { pronoun: 'ils / elles', form: 'font' }
      ],
      rules: {
        ja: ['je / tu / il はすべて「フェ」で同音',
             'nous faisons は綴りが ai なのに「フゾン」と読む例外',
             'vous faites は -ez にならない数少ない動詞',
             'faire de + 活動 … faire du sport, faire de la photo'],
        en: ['je / tu / il all sound like "feh"',
             'nous faisons is pronounced "fuh-ZON" despite the ai spelling',
             'vous faites is one of the few verbs not ending in -ez',
             'faire de + activity: faire du sport, faire de la photo']
      },
      ex: [{ fr: 'Il fait beau', ja: '天気がいいです', en: 'The weather is nice' },
           { fr: 'Je fais du vélo', ja: '自転車に乗ります', en: 'I cycle' }]
    },
    {
      id: 'aller', cat: 'verbs', sections: [27],
      title:   { ja: 'aller（行く）', en: 'aller — to go' },
      summary: { ja: '移動そのものに加え、近接未来（〜するつもり）を作る助動詞としても働きます。',
                 en: 'Movement, and also the auxiliary that builds the near future.' },
      forms: [
        { pronoun: 'je', form: 'vais' }, { pronoun: 'tu', form: 'vas' },
        { pronoun: 'il / elle', form: 'va' }, { pronoun: 'nous', form: 'allons' },
        { pronoun: 'vous', form: 'allez' }, { pronoun: 'ils / elles', form: 'vont' }
      ],
      rules: {
        ja: ['aller + 動詞の原形 で近接未来 … Je vais partir',
             '行き先は à（都市）/ en（女性の国）/ au（男性の国）/ aux（複数の国）',
             'Comment allez-vous ? は「元気ですか」の意味'],
        en: ['aller + infinitive makes the near future: je vais partir',
             'Destination: à for cities, en / au / aux for countries',
             'Comment allez-vous ? means "how are you", not "where are you going"']
      },
      ex: [{ fr: 'Je vais au travail', ja: '仕事に行きます', en: 'I go to work' },
           { fr: 'On y va ?', ja: '行こうか？', en: 'Shall we go?' }]
    },
    {
      id: 'prendre', cat: 'verbs', sections: [21],
      title:   { ja: 'prendre（取る・食べる・乗る）', en: 'prendre — to take' },
      summary: { ja: '食事・交通機関・シャワーなど、英語の take より広く使います。',
                 en: 'Meals, transport, showers — broader than English "take".' },
      forms: [
        { pronoun: 'je', form: 'prends' }, { pronoun: 'tu', form: 'prends' },
        { pronoun: 'il / elle', form: 'prend' }, { pronoun: 'nous', form: 'prenons' },
        { pronoun: 'vous', form: 'prenez' }, { pronoun: 'ils / elles', form: 'prennent' }
      ],
      rules: {
        ja: ['★ 食事は manger ではなく prendre ★ prendre le petit-déjeuner',
             'nous / vous では n が1つ、ils では2つに戻る',
             '同じ形の動詞 … apprendre（学ぶ）, comprendre（理解する）'],
        en: ['Meals take prendre, not manger: prendre le petit-déjeuner',
             'One n for nous / vous, two for ils',
             'Same pattern: apprendre (learn), comprendre (understand)']
      },
      ex: [{ fr: 'Je prends le métro', ja: '地下鉄に乗ります', en: 'I take the metro' },
           { fr: 'Je vais prendre le poulet', ja: '鶏肉にします', en: "I'll have the chicken" }]
    },
    {
      id: 'pronominal', cat: 'verbs', sections: [1, 20, 21],
      title:   { ja: '代名動詞（se + 動詞）', en: 'Pronominal verbs (se + verb)' },
      summary: { ja: '「自分自身に対してその動作をする」形。日課を語るのに必須です。',
                 en: 'The action turns back on the subject. Essential for describing a daily routine.' },
      forms: [
        { pronoun: 'je', form: 'me lève' }, { pronoun: 'tu', form: 'te lèves' },
        { pronoun: 'il / elle', form: 'se lève' }, { pronoun: 'nous', form: 'nous levons' },
        { pronoun: 'vous', form: 'vous levez' }, { pronoun: 'ils / elles', form: 'se lèvent' }
      ],
      rules: {
        ja: ['代名詞も主語に合わせて変わる … me / te / se / nous / vous / se',
             '★ 否定は「代名詞＋動詞」の全体をはさむ ★ Je ne me lève pas',
             '★ 体の部分には所有形容詞を使わず定冠詞 ★ Je me brosse les dents',
             '★ 複合過去では必ず être ★ Je me suis levé',
             'laver（洗う）→ se laver（自分を洗う）のように意味が変わる'],
        en: ['The pronoun agrees with the subject: me / te / se / nous / vous / se',
             'Negation wraps pronoun and verb together: je ne me lève pas',
             'Body parts take the definite article, not a possessive: je me brosse les dents',
             'Always être in the passé composé: je me suis levé',
             'laver (to wash) becomes se laver (to wash oneself)']
      },
      ex: [{ fr: 'Je me réveille à sept heures', ja: '7時に目が覚めます', en: 'I wake up at seven' },
           { fr: 'Comment tu t\'appelles ?', ja: '名前なんていうの？', en: "What's your name?" }]
    },

    /* ---------------------------------------------------------------
       TENSES
       --------------------------------------------------------------- */
    {
      id: 'passe-compose', cat: 'tenses', sections: [22],
      title:   { ja: '複合過去（〜した）', en: 'Passé composé (completed past)' },
      summary: { ja: '助動詞（avoir か être）の現在形＋過去分詞。完了した出来事を表します。',
                 en: 'Auxiliary (avoir or être) in the present, plus a past participle. For completed events.' },
      rules: {
        ja: ['過去分詞 … -er → -é、-ir → -i、-re → -u',
             '不規則 … avoir→eu、être→été、faire→fait、prendre→pris、voir→vu',
             '大多数の動詞は avoir を使う',
             '★ 移動・状態変化の動詞と、すべての代名動詞は être ★',
             'être のときは過去分詞が主語の性数に一致（音は同じ）',
             '★ 否定は助動詞をはさむ ★ Je n\'ai pas mangé'],
        en: ['Participles: -er → -é, -ir → -i, -re → -u',
             'Irregulars: avoir→eu, être→été, faire→fait, prendre→pris, voir→vu',
             'Most verbs take avoir',
             'Verbs of movement or change of state, and all pronominal verbs, take être',
             'With être the participle agrees with the subject — silently',
             'ne and pas wrap the auxiliary: je n\'ai pas mangé']
      },
      ex: [{ fr: "J'ai visité le musée", ja: '美術館に行きました', en: 'I visited the museum' },
           { fr: 'Je suis allée à la plage', ja: 'ビーチに行きました', en: 'I went to the beach' }]
    },
    {
      id: 'etre-verbs', cat: 'tenses', sections: [22],
      title:   { ja: '複合過去で être を使う動詞', en: 'Verbs that take être' },
      summary: { ja: '移動と状態変化の動詞。過去分詞が主語に一致します。',
                 en: 'Movement and change of state. Their participle agrees with the subject.' },
      rules: {
        ja: ['aller / venir … 行く・来る',
             'arriver / partir … 着く・発つ',
             'entrer / sortir … 入る・出る',
             'monter / descendre … 上がる・下りる',
             'naître / mourir … 生まれる・死ぬ',
             'rester / retourner / tomber / rentrer / devenir / passer',
             '★ すべての代名動詞も être ★'],
        en: ['aller / venir — go, come',
             'arriver / partir — arrive, leave',
             'entrer / sortir — enter, go out',
             'monter / descendre — go up, go down',
             'naître / mourir — be born, die',
             'rester / retourner / tomber / rentrer / devenir / passer',
             'Plus every pronominal verb']
      },
      ex: [{ fr: 'Nous sommes partis tôt', ja: '早く出発しました', en: 'We left early' },
           { fr: 'Je me suis reposé', ja: '休みました', en: 'I rested' }]
    },
    {
      id: 'imparfait', cat: 'tenses', sections: [28],
      title:   { ja: '半過去（〜していた）', en: 'Imperfect (background past)' },
      summary: { ja: '複合過去が「点」なら半過去は「線」。背景・状態・繰り返しを描きます。',
                 en: 'If the passé composé is a point, this is a line: background, states, repetition.' },
      forms: [
        { pronoun: 'je', form: 'étais' }, { pronoun: 'tu', form: 'étais' },
        { pronoun: 'il / elle', form: 'était' }, { pronoun: 'nous', form: 'étions' },
        { pronoun: 'vous', form: 'étiez' }, { pronoun: 'ils / elles', form: 'étaient' }
      ],
      rules: {
        ja: ['語幹は nous の現在形から -ons を取る … nous parlons → parl-',
             '語尾は -ais / -ais / -ait / -ions / -iez / -aient',
             '★ 唯一の不規則は être（語幹 ét-）★',
             '天気・年齢・気持ち・外見の描写はほぼ半過去',
             'savoir, penser, croire, vouloir などの心の動きも半過去が基本'],
        en: ['Stem: take nous in the present and drop -ons — nous parlons → parl-',
             'Endings: -ais / -ais / -ait / -ions / -iez / -aient',
             'être is the only irregular stem (ét-)',
             'Weather, age, feelings, and appearance are almost always imperfect',
             'Mental states (savoir, penser, croire) default to it too']
      },
      ex: [{ fr: "Quand j'étais petit…", ja: '子供のころ…', en: 'When I was little…' },
           { fr: 'Il faisait beau', ja: '天気が良かった', en: 'The weather was nice' }]
    },
    {
      id: 'pc-vs-imparfait', cat: 'tenses', sections: [28],
      title:   { ja: '複合過去 vs 半過去', en: 'Passé composé vs imperfect' },
      summary: { ja: '「起きたこと」は複合過去、「そのときの状況」は半過去。',
                 en: 'What happened goes in the passé composé; what was going on goes in the imperfect.' },
      rules: {
        ja: ['複合過去 … 一度きり、完了、話が前に進む',
             '半過去 … 背景、状態、繰り返し、話が止まっている',
             '目安の語（複合過去）… hier, soudain, une fois, à 8 heures',
             '目安の語（半過去）… souvent, toujours, tous les jours, quand j\'étais',
             '★ 典型形 ★ 半過去（背景）＋ 複合過去（割り込んだ出来事）'],
        en: ['Passé composé: once, finished, the story moves forward',
             'Imperfect: setting, state, repetition, the story pauses',
             'Signals for the passé composé: hier, soudain, une fois, à 8 heures',
             'Signals for the imperfect: souvent, toujours, tous les jours',
             'The classic shape: imperfect background + passé composé event']
      },
      ex: [{ fr: 'Elle lisait quand le téléphone a sonné',
             ja: '彼女が本を読んでいたら電話が鳴った', en: 'She was reading when the phone rang' }]
    },
    {
      id: 'futur', cat: 'tenses', sections: [27],
      title:   { ja: '未来（近接未来と単純未来）', en: 'Future (near and simple)' },
      summary: { ja: '会話の未来はほぼ近接未来。単純未来は予測・約束・書き言葉に使います。',
                 en: 'Speech uses the near future almost exclusively; the simple future is for predictions and writing.' },
      rules: {
        ja: ['近接未来 … aller の現在形 + 原形。Je vais partir',
             '単純未来 … 原形 + -ai / -as / -a / -ons / -ez / -ont。Je partirai',
             '不規則語幹 … avoir→aur-、être→ser-、aller→ir-、faire→fer-、venir→viendr-',
             '★ quand の後は未来形 ★ Quand j\'aurai le temps, je viendrai',
             '★ si の後は現在形 ★ Si j\'ai le temps, je viendrai',
             'dans（〜後に）と en（〜かけて）は別物'],
        en: ['Near future: aller in the present + infinitive — je vais partir',
             'Simple future: infinitive + -ai / -as / -a / -ons / -ez / -ont',
             'Irregular stems: avoir→aur-, être→ser-, aller→ir-, faire→fer-',
             'quand takes the future, unlike English "when I have time"',
             'si takes the present — the exact opposite',
             'dans = in (from now); en = within (duration)']
      },
      ex: [{ fr: 'Je vais partir demain', ja: '明日出発します', en: "I'm leaving tomorrow" },
           { fr: 'Il fera beau demain', ja: '明日は晴れるでしょう', en: 'It will be nice tomorrow' }]
    },
    {
      id: 'conditionnel', cat: 'tenses', sections: [25],
      title:   { ja: '条件法（〜でしょう・丁寧形）', en: 'Conditional (polite and hypothetical)' },
      summary: { ja: '断定を避けて柔らかく述べる形。助言・依頼・願望のすべてで使われます。',
                 en: 'Softens a statement. Advice, requests, and wishes all rely on it.' },
      rules: {
        ja: ['未来形と同じ語幹 + 半過去の語尾（-ais / -ais / -ait / -ions / -iez / -aient）',
             'Je voudrais … 〜が欲しいのですが【Je veux より必ず丁寧】',
             'Tu devrais … 〜したほうがいい【助言】',
             'Pourriez-vous … していただけますか【依頼】',
             '★ サービス業の場面では条件法が既定と考える ★'],
        en: ['Future stem + imperfect endings',
             'Je voudrais — the polite "I would like", always better than je veux',
             'Tu devrais — "you should", for advice',
             'Pourriez-vous — "could you", for requests',
             'In any service situation, treat the conditional as the default']
      },
      ex: [{ fr: 'Je voudrais un café', ja: 'コーヒーをお願いします', en: "I'd like a coffee" },
           { fr: 'Tu devrais dormir plus', ja: 'もっと寝たほうがいい', en: 'You should sleep more' }]
    },

    /* ---------------------------------------------------------------
       ARTICLES
       --------------------------------------------------------------- */
    {
      id: 'articles', cat: 'articles', sections: [7],
      title:   { ja: '冠詞の3種類', en: 'The three articles' },
      summary: { ja: 'どれを使うかは動詞で決まると考えると迷いません。',
                 en: 'Let the verb decide which one you need.' },
      rules: {
        ja: ['定冠詞 le / la / l\' / les … 特定のもの、または「〜というもの全般」',
             '不定冠詞 un / une / des … 数えられるものの「ひとつ」「いくつか」',
             '部分冠詞 du / de la / de l\' … 数えられないものの「いくらか」',
             '★ aimer / adorer / détester → 定冠詞 ★ J\'aime le café',
             '★ manger / boire / prendre → 部分冠詞 ★ Je bois du café',
             '★ acheter / vouloir → 不定冠詞 ★ Je voudrais un café',
             '★ 否定 → すべて de ★ Je ne bois pas de café'],
        en: ['Definite le / la / l\' / les — a specific thing, or the category as a whole',
             'Indefinite un / une / des — one or several countable things',
             'Partitive du / de la / de l\' — some amount of an uncountable thing',
             'aimer, adorer, détester take the definite article',
             'manger, boire, prendre take the partitive',
             'acheter, vouloir take the indefinite',
             'Under negation they all collapse to de']
      },
      ex: [{ fr: "J'aime le poisson", ja: '魚が好き【全般】', en: 'I like fish (in general)' },
           { fr: 'Je mange du poisson', ja: '魚を食べる【いくらか】', en: 'I eat (some) fish' }]
    },
    {
      id: 'contractions', cat: 'articles', sections: [2, 12, 23],
      title:   { ja: '前置詞と冠詞の縮約', en: 'Preposition + article contractions' },
      summary: { ja: 'à と de は le / les の前で必ず形が変わります。',
                 en: 'à and de must contract before le and les. This is not optional.' },
      rules: {
        ja: ['à + le → au … Je vais au cinéma',
             'à + les → aux … J\'ai mal aux dents',
             'à + la / l\' … 変化なし。à la gare',
             'de + le → du … à côté du parc',
             'de + les → des … loin des magasins',
             'de + la / l\' … 変化なし。près de la gare'],
        en: ['à + le → au — je vais au cinéma',
             'à + les → aux — j\'ai mal aux dents',
             'à + la / l\' — no change',
             'de + le → du — à côté du parc',
             'de + les → des — loin des magasins',
             'de + la / l\' — no change']
      },
      ex: [{ fr: 'Je joue au tennis', ja: 'テニスをします', en: 'I play tennis' },
           { fr: 'Je joue du piano', ja: 'ピアノを弾きます', en: 'I play the piano' }]
    },
    {
      id: 'places', cat: 'articles', sections: [2],
      title:   { ja: '場所につける前置詞', en: 'Prepositions with places' },
      summary: { ja: '都市・国・地域で使い分けます。国は性で変わります。',
                 en: 'Cities, countries, and regions each take a different preposition.' },
      rules: {
        ja: ['都市 → à … à Paris, à Tokyo',
             '女性の国 → en … en France, en Italie',
             '男性の国 → au … au Japon, au Canada',
             '複数の国 → aux … aux États-Unis',
             '母音で始まる国 → en（性を問わず）… en Angleterre',
             '出身は de / du / des … Je viens du Japon'],
        en: ['Cities take à — à Paris, à Tokyo',
             'Feminine countries take en — en France, en Italie',
             'Masculine countries take au — au Japon, au Canada',
             'Plural countries take aux — aux États-Unis',
             'Vowel-initial countries take en regardless of gender',
             'Origin uses de / du / des — je viens du Japon']
      }
    },

    /* ---------------------------------------------------------------
       NEGATION
       --------------------------------------------------------------- */
    {
      id: 'negation', cat: 'negation', sections: [5, 21, 29],
      title:   { ja: '否定 — ne と pas ではさむ', en: 'Negation — wrapping the verb' },
      summary: { ja: '英語の not にあたるものが2語で動詞をはさみます。',
                 en: 'French negation is two words that wrap the verb, not one word before it.' },
      rules: {
        ja: ['基本 … Je ne parle pas français',
             '母音の前で ne → n\' … Je n\'ai pas',
             '★ 複合過去では助動詞をはさむ ★ Je n\'ai pas mangé',
             '★ 原形があるときは活用した動詞をはさむ ★ Je ne vais pas partir',
             '★ 代名動詞は代名詞ごとはさむ ★ Je ne me lève pas',
             '★ 会話では ne がほぼ必ず落ちる ★ Je sais pas / J\'ai pas faim',
             '★ un / une / des / du / de la → de に変わる ★（être の後は除く）'],
        en: ['Basic: je ne parle pas français',
             'ne elides to n\' before a vowel',
             'In the passé composé the pair wraps the auxiliary',
             'With an infinitive it wraps the conjugated verb',
             'With a pronominal verb it wraps pronoun and verb together',
             'In speech ne almost always drops: je sais pas',
             'Indefinite and partitive articles become de — except after être']
      },
      ex: [{ fr: "Je n'ai pas de voiture", ja: '車は持っていません', en: "I don't have a car" },
           { fr: "Ce n'est pas un problème", ja: '問題ありません【être は例外】', en: "That's not a problem (être is the exception)" }]
    },
    {
      id: 'negation-others', cat: 'negation', sections: [21, 29],
      title:   { ja: 'pas 以外の否定', en: 'Negations other than pas' },
      summary: { ja: 'pas の位置に別の語を入れると意味が変わります。pas と併用はしません。',
                 en: 'Swap pas for another word. Never use both.' },
      rules: {
        ja: ['ne ... jamais … 決して〜ない',
             'ne ... plus … もう〜ない',
             'ne ... rien … 何も〜ない',
             'ne ... personne … 誰も〜ない',
             'ne ... que … 〜しかない【否定ではなく限定】',
             '★ 複合過去では rien は助動詞と過去分詞の間、personne は後ろ ★',
             'Je n\'ai rien vu / Je n\'ai vu personne'],
        en: ['ne ... jamais — never',
             'ne ... plus — no longer',
             'ne ... rien — nothing',
             'ne ... personne — nobody',
             'ne ... que — only (a restriction, not a negation)',
             'In the passé composé, rien sits inside the verb and personne after it',
             'Je n\'ai rien vu / Je n\'ai vu personne']
      }
    },

    /* ---------------------------------------------------------------
       NOUNS & ADJECTIVES
       --------------------------------------------------------------- */
    {
      id: 'gender', cat: 'nouns', sections: [7, 8],
      title:   { ja: '名詞の性', en: 'Noun gender' },
      summary: { ja: '完全な規則はありませんが語尾に強い傾向があります。冠詞ごと覚えるのが結局は速い。',
                 en: 'No complete rule, but endings lean strongly. Learn each noun with its article.' },
      rules: {
        ja: ['女性が多い語尾 … -e, -tion, -sion, -té, -ette, -ance, -ence',
             '男性が多い語尾 … -age, -ment, -eau, -isme, -eur',
             '例外は多い … le musée, le lycée, la page, la plage',
             '★ 新しい名詞は「la table」の形で覚える ★ 「table」だけで覚えない'],
        en: ['Often feminine: -e, -tion, -sion, -té, -ette, -ance, -ence',
             'Often masculine: -age, -ment, -eau, -isme, -eur',
             'Plenty of exceptions: le musée, le lycée, la page, la plage',
             'Always memorise the article with the noun — "la table", never just "table"']
      }
    },
    {
      id: 'adjectives', cat: 'nouns', sections: [11, 18, 19],
      title:   { ja: '形容詞の一致と位置', en: 'Adjective agreement and position' },
      summary: { ja: '名詞の性と数に合わせて形が変わり、原則は名詞の後ろに置きます。',
                 en: 'They agree with the noun, and normally follow it — the reverse of English.' },
      rules: {
        ja: ['基本 … 女性形は + e、複数は + s',
             '-eux → -euse（courageux → courageuse）',
             '-if → -ive（sportif → sportive）',
             '-ien → -ienne、-er → -ère、-eur → -euse',
             '-e で終わる形容詞は男女同形（calme, timide, sympa）',
             '★ 位置は名詞の後ろが原則 ★ une voiture rouge',
             '★ 例外は BANGS ★ Beauty / Age / Number / Goodness / Size は名詞の前',
             'beau, joli, jeune, vieux, nouveau, premier, bon, mauvais, grand, petit, gros',
             '★ marron と orange は変化しない ★'],
        en: ['Basic: add e for feminine, s for plural',
             '-eux → -euse (courageux → courageuse)',
             '-if → -ive (sportif → sportive)',
             '-ien → -ienne, -er → -ère, -eur → -euse',
             'Adjectives already ending in -e do not change',
             'Position: after the noun by default — une voiture rouge',
             'Exception: BANGS — Beauty, Age, Number, Goodness, Size go before',
             'beau, joli, jeune, vieux, nouveau, premier, bon, mauvais, grand, petit',
             'marron and orange never change form']
      }
    },
    {
      id: 'possessive', cat: 'nouns', sections: [8],
      title:   { ja: '所有形容詞（mon / ma / mes）', en: 'Possessive adjectives' },
      summary: { ja: '★ 持ち主ではなく持ち物の性と数で形が決まります ★ ここが最大の落とし穴。',
                 en: 'The form follows the thing owned, not the owner. This is the classic trap.' },
      forms: [
        { pronoun: 'je の', form: 'mon / ma / mes' },
        { pronoun: 'tu の', form: 'ton / ta / tes' },
        { pronoun: 'il elle の', form: 'son / sa / ses' },
        { pronoun: 'nous の', form: 'notre / notre / nos' },
        { pronoun: 'vous の', form: 'votre / votre / vos' },
        { pronoun: 'ils elles の', form: 'leur / leur / leurs' }
      ],
      rules: {
        ja: ['mon père … père が男性名詞だから',
             'ma mère … mère が女性名詞だから。★ 話し手が男性でも ma ★',
             'mes parents … 複数だから',
             '★ 女性名詞でも母音で始まれば mon ★ mon amie（発音の都合）',
             'son / sa は「彼の」「彼女の」の両方。文脈で判断する'],
        en: ['mon père because père is masculine',
             'ma mère because mère is feminine — even if the speaker is male',
             'mes parents because it is plural',
             'A vowel-initial feminine noun still takes mon: mon amie',
             'son / sa means both "his" and "her" — context decides']
      }
    },

    /* ---------------------------------------------------------------
       PRONOUNS
       --------------------------------------------------------------- */
    {
      id: 'object-pronouns', cat: 'pronouns', sections: [29],
      title:   { ja: '目的語代名詞の位置', en: 'Object pronoun placement' },
      summary: { ja: '★ 動詞の前に置きます ★ 英語 I see him と語順が逆になるところ。',
                 en: 'They go before the verb — the reverse of English "I see him".' },
      rules: {
        ja: ['直接目的語 … me, te, le / la, nous, vous, les',
             '間接目的語（à つき）… me, te, lui, nous, vous, leur',
             '基本 … Je le vois（彼を見る）',
             '★ 否定文でも動詞の前 ★ Je ne le vois pas',
             '★ 複合過去では助動詞の前 ★ Je l\'ai vu',
             '★ 原形があるときは原形の前 ★ Je vais le voir',
             '★ 肯定の命令形だけ後ろ ★ Donne-le-moi（me → moi に変わる）'],
        en: ['Direct: me, te, le / la, nous, vous, les',
             'Indirect (with à): me, te, lui, nous, vous, leur',
             'Default: je le vois',
             'Still before the verb under negation: je ne le vois pas',
             'Before the auxiliary in the passé composé: je l\'ai vu',
             'Before the infinitive when there is one: je vais le voir',
             'Only affirmative imperatives put it after — and me becomes moi']
      }
    },
    {
      id: 'y-en', cat: 'pronouns', sections: [17, 22, 25],
      title:   { ja: '代名詞 y と en', en: 'The pronouns y and en' },
      summary: { ja: '一度出た場所やものを繰り返さずに受ける小さな語。',
                 en: 'Two small words that avoid repeating something already mentioned.' },
      rules: {
        ja: ['y … 「そこへ」「それについて」。à + 場所 / à + もの を受ける',
             'On y va ?（そこへ行く？）/ J\'y pense（それについて考える）',
             'en … 「それの」「そこから」。de + もの を受ける',
             'J\'en ai marre（それにうんざり）/ J\'en veux（それが欲しい）',
             '位置は目的語代名詞と同じで動詞の前'],
        en: ['y replaces à + a place or thing',
             'On y va ? (shall we go there) / J\'y pense (I\'m thinking about it)',
             'en replaces de + a thing',
             'J\'en ai marre (I\'m fed up with it) / J\'en veux (I want some)',
             'Both sit before the verb, like other object pronouns']
      }
    },
    {
      id: 'on', cat: 'pronouns', sections: [6],
      title:   { ja: 'on — 会話の「私たち」', en: 'on — the spoken "we"' },
      summary: { ja: '意味は nous ですが活用は il / elle と同じ。会話ではこちらが主役です。',
                 en: 'Means nous but conjugates like il. In speech it has almost replaced nous.' },
      rules: {
        ja: ['On habite à Paris … 私たちはパリに住んでいる',
             '★ 活用は3人称単数 ★ on va, on fait, on est',
             'On + 現在形 + 上げ調子 で誘いになる … On y va ?',
             '「人は一般に」の意味にもなる … On parle français ici'],
        en: ['On habite à Paris — we live in Paris',
             'It conjugates in the third person singular: on va, on fait, on est',
             'on + present + rising intonation is an invitation: on y va ?',
             'It also means "people in general": on parle français ici']
      }
    },

    /* ---------------------------------------------------------------
       QUESTIONS
       --------------------------------------------------------------- */
    {
      id: 'question-forms', cat: 'questions', sections: [9, 26],
      title:   { ja: '疑問文の3つの形', en: 'The three question forms' },
      summary: { ja: '同じ意味でも「格」が違います。会話ではほぼ①か②です。',
                 en: 'Same meaning, different register. Speech uses the first two almost exclusively.' },
      rules: {
        ja: ['① イントネーション … Tu viens ?【最もくだけた・会話の主役】',
             '② est-ce que … Est-ce que tu viens ?【中立・どこでも安全】',
             '③ 倒置 … Viens-tu ?【書き言葉・公式】',
             '★ 倒置で母音が続くと t を挿入 ★ A-t-il ? / Parle-t-elle ?',
             '★ je の倒置はほぼ使わない ★ Est-ce que je ... を使う',
             '名詞主語のときは代名詞を足す … Marie parle-t-elle français ?'],
        en: ['1. Intonation — tu viens ? The workhorse of spoken French',
             '2. est-ce que — safe in any register, changes no word order',
             '3. Inversion — viens-tu ? Written and formal',
             'Inversion inserts t between two vowels: a-t-il ?',
             'Inversion with je is effectively unused — say est-ce que je',
             'A noun subject is echoed by the inverted pronoun']
      }
    },
    {
      id: 'question-words', cat: 'questions', sections: [9, 26],
      title:   { ja: '疑問詞', en: 'Question words' },
      summary: { ja: 'どの形式にも組み込めます。会話では文末に置く形も非常によく使われます。',
                 en: 'They fit any of the three forms — and in speech they often move to the end.' },
      rules: {
        ja: ['qui（誰）/ que・quoi（何）/ où（どこ）/ quand（いつ）',
             'comment（どのように）/ pourquoi（なぜ）/ combien（いくつ）',
             '★ 会話では文末に置ける ★ Tu habites où ? / Tu viens quand ?',
             '★ pourquoi だけは文末に置けない ★',
             'quel は名詞に合わせて quel / quelle / quels / quelles（音は全部同じ）',
             'Pourquoi ? への答えは Parce que ... で始める'],
        en: ['qui (who), que / quoi (what), où (where), quand (when)',
             'comment (how), pourquoi (why), combien (how much)',
             'In speech they can go last: tu habites où ?',
             'pourquoi is the one that cannot move to the end',
             'quel agrees in writing only — all four forms sound the same',
             'Answer pourquoi with parce que']
      }
    },

    /* ---------------------------------------------------------------
       SOUND RULES
       --------------------------------------------------------------- */
    {
      id: 'liaison', cat: 'sounds', sections: [6],
      title:   { ja: 'リエゾン', en: 'Liaison' },
      summary: { ja: '普段は無音の語末子音が、次の語が母音で始まるときだけ復活してつながります。',
                 en: 'A silent final consonant wakes up and joins the next word when that word starts with a vowel.' },
      rules: {
        ja: ['vous êtes … 「ヴゼットゥ」（s が z の音で復活）',
             'nous avons … 「ヌザヴォン」/ les amis … 「レザミ」',
             'un ami … 「アナミ」/ petit ami … 「プティタミ」',
             '★ s / x / z は復活すると必ず z の音 ★',
             '★ et の後は絶対にリエゾンしない ★',
             '★ 有音の h の前もしない ★ les haricots は「レ・アリコ」',
             '迷ったら切ってよい。し過ぎる方が不自然'],
        en: ['vous êtes sounds like "voo-ZET"',
             'nous avons, les amis, un ami, petit ami all link',
             's, x, and z all come back as a /z/ sound',
             'Never link after et',
             'Never link before an aspirated h: les haricots stays separate',
             'When unsure, do not link — over-linking sounds worse']
      }
    },
    {
      id: 'silent-letters', cat: 'sounds', sections: [1],
      title:   { ja: '語末の無音', en: 'Silent endings' },
      summary: { ja: 'フランス語は語末の子音を原則読みません。ここが綴りと音のズレの正体です。',
                 en: 'Final consonants are normally silent. This is the main gap between spelling and sound.' },
      rules: {
        ja: ['語末の子音は原則無音 … petit /pəti/, grand /gʁɑ̃/',
             '★ 例外は c, r, f, l（CaReFuL）★ avec, sur, chef, mal',
             '語末の e は無音 … table /tabl/',
             '-er / -ez は「エ」… parler /paʁle/, avez /ave/',
             '★ -ent は動詞なら無音、名詞・副詞なら「アン」★ parlent /paʁl/ vs souvent /suvɑ̃/',
             '語末の子音がまとまっていても全部無音 … comprends /kɔ̃pʁɑ̃/',
             'h はどこでも無音 … hôtel /otɛl/'],
        en: ['Final consonants are silent: petit, grand',
             'The exceptions are c, r, f, l — remember CaReFuL',
             'Final e is silent: table',
             '-er and -ez are both /e/: parler, avez',
             '-ent is silent on verbs but pronounced on nouns and adverbs',
             'A whole final cluster goes silent: comprends',
             'h is always silent: hôtel']
      }
    },
    {
      id: 'elision', cat: 'sounds', sections: [1],
      title:   { ja: 'エリジオン（母音の脱落）', en: 'Elision' },
      summary: { ja: '短い語の母音が、次の語の母音の前で消えてアポストロフィになります。',
                 en: 'A short word drops its vowel before another vowel and takes an apostrophe.' },
      rules: {
        ja: ['je → j\' … j\'ai, j\'habite',
             'le / la → l\' … l\'ami, l\'école',
             'de → d\' … d\'accord',
             'ne → n\' … je n\'ai pas',
             'que → qu\' … qu\'est-ce que',
             'me / te / se → m\' / t\' / s\' … je m\'appelle',
             '★ 省略できない ★ je ai とは書けません'],
        en: ['je → j\' — j\'ai, j\'habite',
             'le / la → l\' — l\'ami, l\'école',
             'de → d\', ne → n\', que → qu\'',
             'me / te / se → m\' / t\' / s\' — je m\'appelle',
             'This is obligatory, not a shortcut — je ai is impossible']
      }
    },

    {
      id: 'imperative', cat: 'verbs', sections: [12, 23],
      title:   { ja: '命令形（〜してください）', en: 'The imperative' },
      summary: { ja: '主語を落とすだけで作れます。道案内はほぼこの形で返ってきます。',
                 en: 'Just drop the subject pronoun. Directions come back almost entirely in this form.' },
      rules: {
        ja: ['vous の形から vous を取る … vous tournez → Tournez',
             'tu の形から tu を取り、-er 動詞は語末の s も落とす … tu parles → Parle',
             'nous の形から nous を取ると「〜しよう」… Allons-y !',
             '★ 代名動詞は代名詞が後ろに回る ★ Reposez-vous / Assieds-toi',
             '★ 肯定命令では me → moi ★ Donne-le-moi',
             '否定命令では語順が戻る … Ne me donne pas ça'],
        en: ['Take the vous form and drop vous: vous tournez → tournez',
             'Take the tu form and drop tu — and the final s on -er verbs',
             'The nous form means "let\'s": allons-y !',
             'Pronominal verbs move their pronoun after the verb: reposez-vous',
             'In an affirmative imperative me becomes moi: donne-le-moi',
             'A negative imperative puts the pronoun back in front']
      },
      ex: [{ fr: 'Tournez à droite', ja: '右に曲がってください', en: 'Turn right' },
           { fr: 'Excusez-moi', ja: 'すみません', en: 'Excuse me' }]
    },
    {
      id: 'c-est', cat: 'misc', sections: [11, 24],
      title:   { ja: "c'est（これは〜です）", en: "c'est — it is / this is" },
      summary: { ja: '最も使う紹介・断定の型。単数は c\'est、複数は ce sont。',
                 en: 'The workhorse frame for identifying and judging. Plural is ce sont.' },
      rules: {
        ja: ["C'est + 名詞 … C'est une bonne idée",
             "C'est + 形容詞 … C'est difficile（この形容詞は常に男性単数）",
             '否定は Ce n\'est pas … ★ 冠詞は de に変わらない ★',
             '複数は Ce sont … Ce sont mes amis',
             "過去は C'était … C'était délicieux !",
             "★ il est との違い ★ C'est un médecin（紹介）vs Il est médecin（職業）"],
        en: ["C'est + noun — c'est une bonne idée",
             "C'est + adjective, always in the masculine singular — c'est difficile",
             "Negative: ce n'est pas — and the article does not become de",
             'Plural: ce sont mes amis',
             "Past: c'était délicieux !",
             "c'est un médecin introduces; il est médecin states the profession"]
      },
      ex: [{ fr: "C'est une grande ville", ja: '大きな街です', en: "It's a big city" },
           { fr: "C'était délicieux !", ja: 'とても美味しかった！', en: 'That was delicious!' }]
    },

    /* ---------------------------------------------------------------
       FREQUENT PATTERNS
       --------------------------------------------------------------- */
    {
      id: 'il-y-a', cat: 'misc', sections: [11],
      title:   { ja: 'il y a（〜がある）', en: 'il y a — there is / there are' },
      summary: { ja: '単数でも複数でも形は変わりません。英語の there is / there are にあたります。',
                 en: 'One form for both singular and plural.' },
      rules: {
        ja: ['肯定 … Il y a un parc',
             '否定 … Il n\'y a pas de parc（冠詞が de に）',
             '疑問 … Est-ce qu\'il y a un parc ?',
             '会話では「イリヤ」、否定は「イニャパ」に近い',
             '会話では il が落ちて Y a pas de ... とも言う',
             '過去は Il y avait'],
        en: ['Affirmative: il y a un parc',
             'Negative: il n\'y a pas de parc — the article becomes de',
             'Question: est-ce qu\'il y a un parc ?',
             'In speech it blurs to "ee-lya", and the il often drops entirely',
             'Past: il y avait']
      }
    },
    {
      id: 'depuis', cat: 'misc', sections: [13, 23],
      title:   { ja: 'depuis（〜前から）', en: 'depuis — for / since' },
      summary: { ja: '★ 現在形で使います ★ 英語の現在完了進行形にあたる内容を現在形で表します。',
                 en: 'Takes the present tense where English uses a perfect.' },
      rules: {
        ja: ['J\'apprends le français depuis un an … 1年前から学んでいる',
             '★ 過去形にしない ★ J\'ai appris depuis un an は誤り',
             'depuis + 期間（un an）でも depuis + 時点（2020）でも使える',
             '質問は Depuis quand ? / Depuis combien de temps ?'],
        en: ['J\'apprends le français depuis un an — I\'ve been learning for a year',
             'Never put it in a past tense',
             'Works with a duration (un an) or a start point (2020)',
             'Ask with depuis quand ? or depuis combien de temps ?']
      }
    },
    {
      id: 'avoir-mal', cat: 'misc', sections: [23],
      title:   { ja: 'avoir mal à（〜が痛い）', en: 'avoir mal à — to have a pain in' },
      summary: { ja: '痛みはすべてこの型で言えます。à が冠詞と縮約する点だけ注意。',
                 en: 'Every ache uses this frame. Only the contraction needs care.' },
      rules: {
        ja: ['à + le → au … J\'ai mal au dos',
             'à + la … J\'ai mal à la tête',
             'à + les → aux … J\'ai mal aux dents',
             '★ 体の部位に所有形容詞は使わない ★ mal à ma tête とは言わない',
             '熱だけ別 … J\'ai de la fièvre（部分冠詞）'],
        en: ['à + le → au — j\'ai mal au dos',
             'à + la — j\'ai mal à la tête',
             'à + les → aux — j\'ai mal aux dents',
             'Never a possessive with the body part',
             'Fever is the exception: j\'ai de la fièvre']
      }
    },
    {
      id: 'jouer', cat: 'misc', sections: [6, 13],
      title:   { ja: 'jouer à / jouer de / faire de', en: 'jouer à / jouer de / faire de' },
      summary: { ja: '「〜をする」は活動の種類で動詞と前置詞が変わります。',
                 en: 'Which verb and preposition you need depends on the kind of activity.' },
      rules: {
        ja: ['jouer à + スポーツ・ゲーム … jouer au tennis, jouer aux cartes',
             'jouer de + 楽器 … jouer du piano, jouer de la guitare',
             'faire de + 活動全般 … faire du sport, faire de la photo',
             '専用の動詞があるものはそれを使う … nager, cuisiner, lire'],
        en: ['jouer à for sports and games — jouer au tennis',
             'jouer de for instruments — jouer du piano',
             'faire de for activities in general — faire du sport',
             'Some activities have their own verb: nager, cuisiner, lire']
      }
    },
    {
      id: 'time', cat: 'misc', sections: [9, 17],
      title:   { ja: '時刻と頻度', en: 'Telling time and frequency' },
      summary: { ja: '公式な場面は24時間制。定冠詞が付くと「毎〜」の意味になります。',
                 en: 'Official contexts use the 24-hour clock, and a definite article makes it habitual.' },
      rules: {
        ja: ['Il est huit heures … 主語は必ず il',
             'et quart（15分過ぎ）/ et demie（30分）/ moins le quart（15分前）',
             '★ demie に e が付くのは heure が女性名詞だから ★ midi et demi は e なし',
             '★ 定冠詞で「毎〜」★ le lundi（毎週月曜）、le matin（毎朝）',
             '頻度の副詞は動詞の直後 … Je vais souvent au cinéma',
             '「週2回」… deux fois par semaine'],
        en: ['Il est huit heures — the subject is always il',
             'et quart (quarter past), et demie (half past), moins le quart (quarter to)',
             'demie agrees with the feminine heure; midi et demi has no e',
             'A definite article makes it habitual: le lundi means every Monday',
             'Frequency adverbs follow the verb: je vais souvent au cinéma',
             'Twice a week: deux fois par semaine']
      }
    },
    {
      id: 'quantity', cat: 'misc', sections: [11],
      title:   { ja: '量を表す語の後は de', en: 'Quantity words take de' },
      summary: { ja: 'beaucoup, peu, trop などの後は必ず de。des にはなりません。',
                 en: 'After beaucoup, peu, trop and friends, always de — never des.' },
      rules: {
        ja: ['beaucoup de restaurants … たくさんのレストラン',
             'peu de temps / trop de travail / assez d\'argent',
             'un peu de … 少しの',
             '★ des にしない ★ beaucoup des restaurants は誤り',
             '容器・単位も同じ … une carafe d\'eau, un kilo de pommes'],
        en: ['beaucoup de restaurants — many restaurants',
             'peu de temps, trop de travail, assez d\'argent',
             'un peu de — a little',
             'Never des after a quantity word',
             'Containers and units behave the same: une carafe d\'eau']
      }
    }
  ]
};
