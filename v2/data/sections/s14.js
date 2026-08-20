/* ============================================================
   Section 14 — Booking Accommodation
   ============================================================ */

window.S14 = {
  id: 14,
  level: 'A1',
  duration: '39分',
  title: { en: 'Booking Accommodation', fr: 'Réserver un hébergement' },

  goals: [
    'ホテルの設備と部屋の種類を言える',
    '電話やメールで部屋を予約できる',
    '日程・人数・料金を確認できる',
    'チェックイン時に必要なやりとりができる'
  ],

  blocks: [

    {
      type: 'tiles',
      title: 'ホテルの語彙',
      items: [
        { label: "l'hôtel", fr: "l'hôtel", en: 'ホテル' },
        { label: 'une chambre', fr: 'une chambre', en: '部屋' },
        { label: 'chambre simple', fr: 'une chambre simple', en: 'シングル' },
        { label: 'chambre double', fr: 'une chambre double', en: 'ダブル' },
        { label: 'la clé', fr: 'la clé', en: '鍵' },
        { label: 'la réception', fr: 'la réception', en: 'フロント' },
        { label: 'le petit-déjeuner', fr: 'le petit-déjeuner', en: '朝食' },
        { label: 'le wifi', fr: 'le wifi', en: 'Wi-Fi' },
        { label: 'le parking', fr: 'le parking', en: '駐車場' },
        { label: 'la salle de bains', fr: 'la salle de bains', en: '浴室' },
        { label: 'la douche', fr: 'la douche', en: 'シャワー' },
        { label: "l'ascenseur", fr: "l'ascenseur", en: 'エレベーター', ipa: 'lasɑ̃sœʁ' },
        { label: 'la climatisation', fr: 'la climatisation', en: '冷房', ipa: 'la klimatizasjɔ̃' },
        { label: 'une nuit', fr: 'une nuit', en: '1泊' },
        { label: 'la vue', fr: 'la vue', en: '眺め' },
        { label: 'les draps', fr: 'les draps', en: 'シーツ', ipa: 'le dʁa' }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: 'ホテルまわりの用語で気をつけること',
      list: [
        'la chambre は「寝室・客室」。「部屋」全般は la pièce、部屋を借りるなら le studio',
        'le petit-déjeuner は「小さな昼食」が直訳。会話では petit-déj と略されることも',
        'compris = 込み。Petit-déjeuner compris で「朝食込み」',
        'les charges = 光熱費などの諸費用。賃貸物件で必ず出てきます',
        '★ le parking はフランス語 ★ 英語からの借用ですが完全に定着しています'
      ]
    },

    {
      type: 'phrases',
      title: '予約する',
      items: [
        {
          fr: 'Je voudrais réserver une chambre',
          en: 'I would like to book a room',
          ja: '部屋を予約したいのですが',
          register: 'formal',
          ja_when: '★ Je voudrais は Je veux の丁寧版 ★ 店・ホテル・レストランでは必ずこちらを使ってください。Je veux は「〜が欲しい」と直接的すぎて子供っぽく響きます。',
          when: 'Je voudrais, never je veux — the latter sounds blunt and childish in service settings.'
        },
        {
          fr: 'Pour combien de nuits ?',
          en: 'For how many nights?',
          ja: '何泊ですか？',
          register: 'formal',
          ja_when: 'フロントから聞かれる側の表現。答えは Pour trois nuits. のように。',
          when: 'What reception asks you. Answer: pour trois nuits.'
        },
        {
          fr: 'Du 12 au 15 avril',
          en: 'From 12 to 15 April',
          ja: '4月12日から15日まで',
          register: 'neutral',
          ja_when: 'du ... au ... で期間を表します。日付は「日 + 月」の順。',
          when: 'du ... au ... frames any date range.'
        },
        {
          fr: "C'est combien par nuit ?",
          en: 'How much per night?',
          ja: '1泊いくらですか？',
          register: 'neutral',
          ja_when: 'par nuit（1泊あたり）。par personne なら1人あたり。',
          when: 'par nuit, par personne — the same frame.'
        },
        {
          fr: 'Le petit-déjeuner est compris ?',
          en: 'Is breakfast included?',
          ja: '朝食は込みですか？',
          register: 'neutral',
          ja_when: '★必ず確認すべき項目★ フランスのホテルの朝食は別料金で15〜25ユーロすることも珍しくありません。',
          when: 'Always worth asking — hotel breakfast is often a costly extra in France.'
        },
        {
          fr: "À quelle heure est l'arrivée ?",
          en: 'What time is check-in?',
          ja: 'チェックインは何時からですか？',
          register: 'formal',
          ja_when: "l'arrivée（到着）と le départ（出発）でチェックイン・チェックアウトを表します。英語の check-in も通じます。",
          when: "l'arrivée and le départ are the native terms for check-in and check-out."
        },
        {
          fr: 'Avez-vous une chambre avec vue sur la mer ?',
          en: 'Do you have a room with a sea view?',
          ja: '海の見える部屋はありますか？',
          register: 'formal',
          ja_when: 'avec vue sur ... で「〜が見える」。vue sur la rue（通りに面した）、vue sur la cour（中庭側）。',
          when: 'avec vue sur — the standard frame for any view.'
        },
        {
          fr: "J'ai une réservation au nom de Tanaka",
          en: 'I have a reservation under the name Tanaka',
          ja: '田中の名前で予約しています',
          register: 'formal',
          ja_when: 'チェックイン時の第一声。au nom de で「〜の名前で」。この後 Comment ça s\'écrit ? と綴りを聞かれることが多いので、Section 1 のアルファベットが役立ちます。',
          when: 'Expect to be asked to spell it — the alphabet from Section 1 pays off here.'
        },
        {
          fr: 'Le wifi, quel est le mot de passe ?',
          en: 'What is the wifi password?',
          ja: 'Wi-Fi のパスワードは何ですか？',
          register: 'neutral',
          ja_when: 'le mot de passe（パスワード）。直訳は「通行の言葉」。',
          when: 'mot de passe — literally "word of passage".'
        }
      ]
    },

    {
      type: 'note',
      tone: 'warm',
      title: 'Je voudrais — 丁寧さの主力表現',
      body: 'vouloir（〜したい）の条件法という形ですが、文法は後回しで構いません。' +
            'まず「Je voudrais + 名詞 / 動詞の原形」の型を丸ごと使えるようにしてください。' +
            'これがフランスの店・ホテル・レストランで最も頼りになる表現です。',
      list: [
        'Je voudrais une chambre … 部屋をお願いします',
        'Je voudrais réserver … 予約したいのですが',
        'Je voudrais un café, s\'il vous plaît … コーヒーをお願いします',
        'Nous voudrions … 私たちは（複数形）',
        '★ 語尾に s\'il vous plaît を足すとさらに丁寧 ★'
      ]
    },

    {
      type: 'dialogue',
      title: '会話：電話で予約',
      scene: 'ホテルに電話をかけて部屋を予約しています。',
      lines: [
        { who: 'H', fr: "Hôtel du Parc, bonjour !", en: 'Hôtel du Parc, hello!', ja: 'オテル・デュ・パルクでございます。' },
        { who: 'C', fr: 'Bonjour, je voudrais réserver une chambre double.', en: 'Hello, I would like to book a double room.', ja: 'こんにちは、ダブルの部屋を予約したいのですが。' },
        { who: 'H', fr: 'Bien sûr. Pour combien de nuits ?', en: 'Of course. For how many nights?', ja: 'かしこまりました。何泊でしょうか。' },
        { who: 'C', fr: 'Trois nuits, du 12 au 15 avril.', en: 'Three nights, from 12 to 15 April.', ja: '3泊、4月12日から15日までです。' },
        { who: 'H', fr: "Très bien. C'est quatre-vingt-dix euros par nuit.", en: 'Very good. That is 90 euros per night.', ja: 'はい。1泊90ユーロになります。' },
        { who: 'C', fr: 'Le petit-déjeuner est compris ?', en: 'Is breakfast included?', ja: '朝食は込みですか？' },
        { who: 'H', fr: "Non, c'est douze euros en plus.", en: "No, it's 12 euros extra.", ja: 'いえ、別途12ユーロです。' },
        { who: 'C', fr: "D'accord, c'est parfait. Au nom de Tanaka.", en: "OK, that's perfect. Under the name Tanaka.", ja: '分かりました。田中の名前でお願いします。' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: 'ホテルで「部屋を予約したい」と丁寧に言うには？',
          options: ['Je veux une chambre', 'Je voudrais réserver une chambre', 'Donnez-moi une chambre', "J'ai une chambre"],
          answer: 1,
          why: 'Je voudrais が丁寧形。Je veux は直接的すぎてサービス業の場面では失礼に響きます。'
        },
        {
          q: '「朝食込み」は？',
          options: ['petit-déjeuner inclus', 'petit-déjeuner compris', 'petit-déjeuner avec', 'petit-déjeuner gratuit'],
          answer: 1,
          why: 'compris が「込み」。charges comprises（諸費用込み）も同じ形です。'
        },
        {
          q: '「4月12日から15日まで」の正しい形は？',
          options: ['De 12 à 15 avril', 'Du 12 au 15 avril', 'Depuis 12 jusqu\'à 15 avril', 'Entre 12 et 15 avril'],
          answer: 1,
          why: 'du ... au ... が期間の定型です。'
        },
        {
          q: 'チェックインを表すフランス語は？',
          options: ["l'arrivée", 'le départ', "l'entrée", 'la réception'],
          answer: 0,
          why: "l'arrivée（到着）がチェックイン、le départ（出発）がチェックアウトです。"
        }
      ]
    }
  ]
};
