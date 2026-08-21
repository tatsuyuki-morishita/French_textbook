/* ============================================================
   Section 33 — Everyday Native Expressions
   ============================================================ */

window.S33 = {
  id: 33,
  level: 'A2+',
  duration: '50分',
  title: { en: 'Everyday Native Expressions', fr: 'Expressions du quotidien' },

  goals: [
    '教科書に載らないが毎日聞く表現を理解する',
    '会話をつなぐ小さな語（du coup, en fait など）を使える',
    '感情や反応を自然に表せる',
    '「フランス語らしい」言い回しを身につける'
  ],

  blocks: [

    {
      type: 'note',
      title: '最後のセクション — 教科書と現実の差を埋める',
      body: 'ここまでの32セクションで、正しいフランス語は身につきました。' +
            'このセクションで扱うのは、正しさではなく「自然さ」です。' +
            'フランス人が1日に何十回も使うのに、教科書にはほとんど載らない語を集めてあります。' +
            'これらが使えるようになると、文法は同じでも一気にネイティブらしく聞こえます。'
    },

    {
      type: 'phrases',
      title: '毎日使う定型表現',
      items: [
        {
          fr: 'Ça marche',
          en: 'Works for me / OK',
          ja: 'オッケー・了解',
          literal: 'それは歩く',
          register: 'casual',
          ja_when: '★使用頻度が非常に高い★ 予定の合意、了承、確認すべてに使えます。D\'accord とほぼ同義でより軽い。',
          when: 'Agreement, confirmation, acceptance — all of it.'
        },
        {
          fr: 'Pas de problème',
          en: 'No problem',
          ja: '問題ないよ',
          register: 'casual',
          ja_when: '依頼を受けるとき、謝られたときの返し。Pas de souci も同じ意味で、こちらの方が今風です。',
          when: 'Pas de souci is the more current equivalent.'
        },
        {
          fr: 'Bon appétit',
          en: 'Enjoy your meal',
          ja: 'いただきます・召し上がれ',
          register: 'neutral',
          ja_when: '★食事の前に必ず言います★ 同席者だけでなく、レストランで隣のテーブルに言うこともあります。言わないと違和感を持たれます。',
          when: 'Genuinely obligatory before eating together.'
        },
        {
          fr: 'Santé !',
          en: 'Cheers!',
          ja: '乾杯！',
          literal: '健康！',
          register: 'casual',
          ja_when: '★乾杯するときは必ず目を見る★ 目を合わせないと縁起が悪いとされます。À la tienne / À la vôtre とも言います。',
          when: 'Make eye contact — not doing so is considered bad luck.'
        },
        {
          fr: 'À vos souhaits !',
          en: 'Bless you!',
          ja: 'お大事に（くしゃみに）',
          literal: 'あなたの願いに',
          register: 'formal',
          ja_when: 'くしゃみをした人に。親しい相手には À tes souhaits。',
          when: 'To someone who has sneezed. Casual: à tes souhaits.'
        },
        {
          fr: 'Bon courage !',
          en: 'Hang in there!',
          ja: 'がんばって！',
          register: 'neutral',
          ja_when: '★これから大変なことをする人に★ 試験前、忙しい日の始まり、引っ越しなど。Bonne chance（運が要ること）とは使い分けます。',
          when: 'For effort ahead. Bonne chance is for luck.'
        },
        {
          fr: 'Ça te dit ?',
          en: 'Fancy it?',
          ja: 'どう？やる？',
          register: 'casual',
          ja_when: '§16 で学んだ形の短縮版。提案の後に付けるだけで誘いになります。',
          when: 'The compact version of the §16 invitation frame.'
        },
        {
          fr: "N'importe quoi !",
          en: 'Nonsense! / Whatever!',
          ja: 'ありえない！／適当なこと言うな',
          literal: '何であろうと',
          register: 'casual',
          ja_when: '相手の発言に呆れたときの反応。C\'est n\'importe quoi ! で「めちゃくちゃだ」。',
          when: 'Dismissing something as absurd.'
        }
      ]
    },

    {
      type: 'note',
      tone: 'warm',
      title: '会話をつなぐ小さな語',
      body: 'フランス人の会話を聞いていると、意味の薄い短い語が絶えず挟まっています。' +
            'これらは「間」を埋め、次の言葉を考える時間を作る役割を持っています。' +
            '使えるようになると、沈黙が減って会話が続くようになります。',
      list: [
        'Ben … 「えーと」。文頭で考える時間を作る。Ben, je sais pas',
        'Du coup … 「それで・だから」。若い世代が非常に多用します',
        'En fait … 「実は・というか」。訂正や補足を導く。「アンフェット」と発音',
        'Genre … 「〜みたいな」。英語の like と同じ使われ方',
        'Quoi … 文末に置いて「〜ってことね」。C\'est bizarre, quoi',
        'Voilà … 「はい」「そういうこと」。説明の締めに置く万能語',
        'Bref … 「要するに」。長い話を切り上げるとき'
      ]
    },

    {
      type: 'phrases',
      title: 'つなぎ語を実際に使う',
      items: [
        {
          fr: "Ben... je sais pas trop",
          en: "Well... I'm not really sure",
          ja: 'えーと…よく分からないな',
          register: 'casual',
          ja_when: '★ ben は考える時間を作る音 ★ 沈黙より自然です。会話では ne が落ちて je sais pas になります。',
          when: 'ben buys thinking time. Note the dropped ne.'
        },
        {
          fr: "Du coup, on fait quoi ?",
          en: 'So, what are we doing?',
          ja: 'で、どうする？',
          register: 'casual',
          ja_when: '★若い世代が多用する★ 前の話を受けて次に進めるときの接続。使いすぎを指摘されるほど流行しています。',
          when: 'So common among younger speakers that it draws comment.'
        },
        {
          fr: "En fait, je préfère rester",
          en: 'Actually, I\'d rather stay',
          ja: '実は残りたいんだよね',
          register: 'casual',
          ja_when: '訂正や本音を切り出すとき。「アンフェット」と t を発音するのが普通です。',
          when: 'The t is pronounced, unusually for French.'
        },
        {
          fr: 'Voilà, c\'est tout',
          en: "There you go, that's all",
          ja: 'そういうこと、以上です',
          register: 'neutral',
          ja_when: '★ voilà は万能語 ★ 説明の締め、物を渡すとき、同意、確認。フランス語で最も便利な一語かもしれません。',
          when: 'Closing an explanation, handing something over, agreeing.'
        },
        {
          fr: "Bref, c'était compliqué",
          en: 'Anyway, it was complicated',
          ja: 'まあとにかく、ややこしかった',
          register: 'casual',
          ja_when: '長い説明を打ち切って結論に飛ぶとき。Bref だけで「話は長いけど省略」の意味になります。',
          when: 'Cuts a long story short — bref alone carries the meaning.'
        },
        {
          fr: "C'est bizarre, quoi",
          en: "It's weird, you know",
          ja: '変なんだよね',
          register: 'casual',
          ja_when: '文末の quoi は「〜ってことね」と念を押す働き。意味は薄いですが会話にリズムを与えます。',
          when: 'Sentence-final quoi adds emphasis rather than meaning.'
        }
      ]
    },

    {
      type: 'phrases',
      title: '強調と反応',
      items: [
        {
          fr: 'Franchement',
          en: 'Honestly / Frankly',
          ja: '正直言って',
          register: 'casual',
          ja_when: '意見を強めるとき。Franchement, c\'est nul（正直、これはひどい）。',
          when: 'Strengthens an opinion.'
        },
        {
          fr: 'Carrément',
          en: 'Totally / Absolutely',
          ja: 'めっちゃ・完全に',
          register: 'casual',
          ja_when: '強い同意の相槌としても、副詞としても使えます。単独で Carrément ! なら「まったくその通り」。',
          when: 'Both an adverb and a standalone strong agreement.'
        },
        {
          fr: 'Vraiment ?',
          en: 'Really?',
          ja: '本当に？',
          register: 'neutral',
          ja_when: '驚きの相槌。Ah bon ? より少し強い。',
          when: 'Slightly stronger than ah bon.'
        },
        {
          fr: 'Ça alors !',
          en: 'Well I never!',
          ja: 'えー！まさか！',
          register: 'casual',
          ja_when: '意外な知らせへの反応。少し古風ですが今も使われます。',
          when: 'Slightly old-fashioned but still current.'
        },
        {
          fr: 'Tant pis',
          en: 'Oh well / Too bad',
          ja: 'しょうがない',
          register: 'casual',
          ja_when: '★対になる表現★ Tant pis（残念だけど仕方ない）／ Tant mieux（それならよかった）。両方セットで覚えてください。',
          when: 'Pairs with tant mieux — learn them together.'
        },
        {
          fr: 'Tant mieux !',
          en: 'So much the better!',
          ja: 'それならよかった！',
          register: 'casual',
          ja_when: '良い知らせへの反応。Tant pis の対義語です。',
          when: 'The positive counterpart of tant pis.'
        },
        {
          fr: 'Ça vaut le coup',
          en: "It's worth it",
          ja: 'その価値はある',
          literal: 'それは一撃に値する',
          register: 'casual',
          ja_when: '値段・労力に見合うかを言うとき。否定なら Ça ne vaut pas le coup。',
          when: 'About whether something justifies the cost or effort.'
        },
        {
          fr: "J'en ai marre",
          en: "I'm fed up",
          ja: 'もううんざり',
          register: 'casual',
          ja_when: '★頻出★ en は「そのことについて」を指します。J\'en ai marre de ce travail のように de で続けられます。',
          when: 'Very common. Continue with de + the thing.'
        }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: '会話でフランス語がどう縮むか',
      body: '教科書のフランス語と実際の話し言葉には、音の面でも大きな差があります。' +
            '聞き取れない原因の多くはここにあります。',
      list: [
        '★ ne が落ちる ★ Je ne sais pas → Je sais pas → 「シェパ」',
        'tu es → t\'es（「テ」）／ tu as → t\'as（「タ」）',
        'il y a → y a（「ヤ」）／ il n\'y a pas → y a pas',
        'celui-là → çui-là、je suis → chuis（「シュイ」）',
        'qu\'est-ce que → keske（「ケスク」）',
        'parce que → parce qu\'（「パスク」）',
        '★ 書くときは必ず正式な形に戻してください ★'
      ]
    },

    {
      type: 'phrases',
      title: '縮んだ話し言葉を聞き取る',
      intro: '左が実際に聞こえる形です。音声を聞いて、正式な形とのつながりを確かめてください。',
      items: [
        {
          fr: 'Je sais pas',
          en: "I don't know",
          ja: '分かんない',
          register: 'casual',
          ja_when: '正式には Je ne sais pas。実際には「シェパ」の一語に聞こえます。フランス語で最も頻繁に聞く縮約形です。',
          when: 'Formally je ne sais pas. Sounds like one word.'
        },
        {
          fr: "T'as raison",
          en: "You're right",
          ja: 'その通りだね',
          register: 'casual',
          ja_when: '正式には Tu as raison。tu が t\' に縮んでいます。書き言葉では使いません。',
          when: 'Formally tu as raison. Speech only.'
        },
        {
          fr: "Y a pas de souci",
          en: 'No worries',
          ja: '心配ないよ',
          register: 'casual',
          ja_when: '正式には Il n\'y a pas de souci。il と ne が両方消えています。',
          when: 'Formally il n\'y a pas de souci — both il and ne vanish.'
        },
        {
          fr: "Chuis crevé",
          en: "I'm knackered",
          ja: 'もうへとへと',
          register: 'casual',
          ja_when: '正式には Je suis crevé。crevé は fatigué の砕けた言い方で「疲れ果てた」。',
          when: 'Formally je suis crevé. crevé is stronger than fatigué.'
        },
        {
          fr: "Faut y aller",
          en: 'Gotta go',
          ja: 'そろそろ行かなきゃ',
          register: 'casual',
          ja_when: '正式には Il faut y aller。il が落ちています。別れ際の定番。',
          when: 'Formally il faut y aller. A standard parting line.'
        }
      ]
    },

    {
      type: 'dialogue',
      title: '会話：全部入りの自然な会話',
      scene: 'このコースで扱った表現を、実際の話し言葉の形で使った会話です。',
      lines: [
        { who: 'A', fr: "Salut ! Ça va ?", en: 'Hi! How are you?', ja: 'やあ、元気？' },
        { who: 'B', fr: "Bof, chuis crevé. Et toi ?", en: "Meh, I'm knackered. And you?", ja: 'まあまあ。へとへとだよ。そっちは？' },
        { who: 'A', fr: "Ça va. Du coup, on mange ensemble ce soir ?", en: 'I\'m OK. So, shall we eat together tonight?', ja: '元気だよ。で、今夜一緒に食べる？' },
        { who: 'B', fr: "Ben... en fait j'ai la flemme de sortir.", en: "Well... actually I can't be bothered to go out.", ja: 'えーと…実は出かけるのだるくて。' },
        { who: 'A', fr: "Pas de souci ! On peut commander quelque chose.", en: 'No worries! We can order something.', ja: '大丈夫。なんか頼めばいいよ。' },
        { who: 'B', fr: "Ah, ça marche ! Tant mieux, j'avais pas envie de bouger.", en: "Ah, that works! Great, I didn't feel like moving.", ja: 'それいいね。よかった、動きたくなかったんだ。' },
        { who: 'A', fr: "Voilà. Je passe vers vingt heures ?", en: 'There we go. Shall I come by around eight?', ja: 'そうこなくちゃ。20時ごろ行く？' },
        { who: 'B', fr: "Nickel. À tout à l'heure !", en: 'Perfect. See you later!', ja: 'バッチリ。じゃあ後で！' }
      ]
    },

    {
      type: 'note',
      tone: 'warm',
      title: 'ここまで来たあなたへ',
      body: '33セクション、お疲れさまでした。' +
            'このコースの中身はすべて、いつでも戻って復習できます。' +
            '右上の検索から全1000以上のフレーズを横断検索でき、' +
            'カードボタンから間隔反復で復習できます。' +
            '発音ボタンは何度でも押してください。使わなくなった音から先に忘れていきます。' +
            'Bonne continuation, et bon courage !'
    },

    {
      type: 'quiz',
      title: '最終クイズ',
      questions: [
        {
          q: 'Je sais pas は正式にはどう書く？',
          options: ['Je sais pas', 'Je ne sais pas', 'Je sais non', 'Je ne sais'],
          answer: 1,
          why: '会話では ne が落ちますが、書くときは必ず Je ne sais pas と戻します。'
        },
        {
          q: 'Tant pis の意味は？',
          options: ['それならよかった', 'しょうがない', 'とても悪い', 'もっと悪い'],
          answer: 1,
          why: '「残念だが仕方ない」。対になる Tant mieux（それならよかった）とセットで覚えてください。'
        },
        {
          q: '若い世代が特に多用する接続表現は？',
          options: ['donc', 'du coup', 'car', 'ainsi'],
          answer: 1,
          why: 'du coup は非常に流行していて、使いすぎを指摘されることもあるほどです。'
        },
        {
          q: '乾杯のときのマナーは？',
          options: ['グラスを高く上げる', '相手の目を見る', '一気に飲む', '左手を添える'],
          answer: 1,
          why: '目を合わせないと縁起が悪いとされます。Santé ! と言いながら必ず目を見てください。'
        },
        {
          q: 'Bon courage と Bonne chance の違いは？',
          options: ['同じ意味', '努力が要ること / 運が要ること', '朝 / 夜', 'フォーマル / カジュアル'],
          answer: 1,
          why: 'Bon courage は大変な作業に向かう人へ、Bonne chance は運に左右されることへ使います。'
        }
      ]
    }
  ]
};
