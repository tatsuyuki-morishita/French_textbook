/* ============================================================
   Section 29 — Sentence Construction
   ============================================================ */

window.S29 = {
  id: 29,
  level: 'A2',
  duration: '40分',
  title: { en: 'Sentence Construction', fr: 'La construction de la phrase' },

  goals: [
    'フランス語の基本語順を把握する',
    '目的語代名詞を正しい位置に置ける',
    '複雑な文でも否定を作れる',
    '接続詞で文をつないで長く話せる'
  ],

  blocks: [

    {
      type: 'note',
      title: '基本語順は英語とほぼ同じ、ただし例外がある',
      body: 'フランス語の基本は「主語 + 動詞 + 目的語」で、英語と同じです。' +
            'ずれるのは3か所だけなので、そこを押さえれば大半の文は作れます。',
      list: [
        '① 形容詞は名詞の後ろ … une voiture rouge【§11 の BANGS は例外】',
        '② 目的語代名詞は動詞の前 … Je le vois（英語 I see him と逆）',
        '③ 副詞は動詞の直後 … Je vais souvent【§21】',
        'それ以外は英語の感覚がそのまま使えます'
      ]
    },

    {
      type: 'note',
      tone: 'warm',
      title: '目的語代名詞 — 動詞の前に置く',
      body: 'フランス語で最も語順の感覚が英語とずれるところです。' +
            '「彼を見る」は Je vois lui ではなく Je le vois。代名詞が動詞の前に飛びます。',
      list: [
        '直接目的語 … me, te, le / la, nous, vous, les',
        '間接目的語（à つき）… me, te, lui, nous, vous, leur',
        'Je le vois … 彼を見る',
        'Je lui parle … 彼に話す（parler à なので間接）',
        '★ 否定文でも動詞の前 ★ Je ne le vois pas',
        '★ 複合過去では助動詞の前 ★ Je l\'ai vu',
        '★ 原形がある文では原形の前 ★ Je vais le voir'
      ]
    },

    {
      type: 'phrases',
      title: '代名詞の位置を確かめる',
      items: [
        {
          fr: 'Je le vois tous les jours',
          en: 'I see him every day',
          ja: '毎日彼に会います',
          register: 'neutral',
          ja_when: '★英語と語順が逆★ I see him ではなく Je le vois。代名詞が動詞の前に来ます。',
          when: 'The pronoun precedes the verb, the reverse of English.'
        },
        {
          fr: 'Je lui ai téléphoné hier',
          en: 'I phoned him yesterday',
          ja: '昨日彼に電話しました',
          register: 'neutral',
          ja_when: 'téléphoner à なので間接目的語 lui。複合過去では助動詞 ai の前に置きます。',
          when: 'téléphoner takes à, so the indirect lui. It sits before the auxiliary.'
        },
        {
          fr: 'Je ne les connais pas',
          en: "I don't know them",
          ja: '彼らを知りません',
          register: 'neutral',
          ja_when: '否定文でも代名詞は動詞の前。ne は代名詞の前に来ます … ne + les + connais + pas。',
          when: 'ne comes before the pronoun, pas after the verb.'
        },
        {
          fr: 'Je vais te montrer',
          en: "I'm going to show you",
          ja: '見せてあげる',
          register: 'casual',
          ja_when: '★原形があるときは原形の前★ Je te vais montrer ではありません。近接未来【§27】との組み合わせ。',
          when: 'With an infinitive the pronoun attaches to the infinitive, not the conjugated verb.'
        },
        {
          fr: "Je l'ai déjà vu",
          en: "I've already seen it",
          ja: 'それはもう見ました',
          register: 'neutral',
          ja_when: "le が母音の前で l' に縮まります。déjà は助動詞と過去分詞の間に入ります。",
          when: "le elides to l', and déjà sits between auxiliary and participle."
        },
        {
          fr: 'Donne-le-moi',
          en: 'Give it to me',
          ja: 'それちょうだい',
          register: 'casual',
          ja_when: '★命令形だけは代名詞が後ろ★ しかも me が moi に変わります。肯定命令のときだけの例外です。',
          when: 'Affirmative imperatives are the one case where pronouns follow — and me becomes moi.'
        }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: '否定のバリエーション',
      list: [
        'ne ... pas … 〜ない【基本】',
        'ne ... jamais … 決して〜ない【§21】',
        'ne ... plus … もう〜ない … Je n\'ai plus faim',
        'ne ... rien … 何も〜ない … Je ne vois rien',
        'ne ... personne … 誰も〜ない … Je ne connais personne',
        'ne ... que … 〜しかない … Je n\'ai que dix euros【否定ではなく限定】',
        '★ 複合過去では rien は助動詞と過去分詞の間、personne は後ろ ★',
        'Je n\'ai rien vu / Je n\'ai vu personne'
      ]
    },

    {
      type: 'tiles',
      title: '文をつなぐ語',
      items: [
        { label: 'et', fr: 'et', en: 'そして' },
        { label: 'ou', fr: 'ou', en: 'または' },
        { label: 'mais', fr: 'mais', en: 'しかし' },
        { label: 'parce que', fr: 'parce que', en: 'なぜなら' },
        { label: 'car', fr: 'car', en: 'というのは（書き言葉）' },
        { label: 'donc', fr: 'donc', en: 'だから' },
        { label: 'alors', fr: 'alors', en: 'それで' },
        { label: 'puis', fr: 'puis', en: 'それから' },
        { label: 'ensuite', fr: 'ensuite', en: '次に' },
        { label: 'quand', fr: 'quand', en: '〜のとき' },
        { label: 'si', fr: 'si', en: 'もし' },
        { label: 'pendant que', fr: 'pendant que', en: '〜する間' },
        { label: 'même si', fr: 'même si', en: 'たとえ〜でも' },
        { label: 'pourtant', fr: 'pourtant', en: 'それなのに' },
        { label: "d'abord", fr: "d'abord", en: 'まず' },
        { label: 'enfin', fr: 'enfin', en: '最後に' }
      ]
    },

    {
      type: 'phrases',
      title: '接続詞で文を伸ばす',
      intro: '短い文を並べるより、つないだ方が一気に「話せる人」に聞こえます。',
      items: [
        {
          fr: "Je suis fatigué parce que j'ai mal dormi",
          en: "I'm tired because I slept badly",
          ja: 'よく眠れなかったので疲れています',
          register: 'neutral',
          ja_when: 'parce que は文中で理由を述べます。文頭には置けません（Pourquoi ? への答えは例外）。',
          when: 'parce que goes mid-sentence, except when answering pourquoi.'
        },
        {
          fr: "Il pleut, donc je reste à la maison",
          en: "It's raining, so I'm staying home",
          ja: '雨なので家にいます',
          register: 'neutral',
          ja_when: 'donc は結論を導きます。会話では「だから」と軽く挟むこともよくあります。',
          when: 'donc introduces the consequence.'
        },
        {
          fr: "J'aimerais venir, mais je ne peux pas",
          en: "I'd like to come, but I can't",
          ja: '行きたいけど無理なんです',
          register: 'neutral',
          ja_when: '断りの定型【§16】。条件法 + mais の組み合わせで柔らかくなります。',
          when: 'The conditional plus mais is the standard soft refusal.'
        },
        {
          fr: "Quand j'étais petit, j'habitais à la campagne",
          en: 'When I was little, I lived in the countryside',
          ja: '子供のころは田舎に住んでいました',
          register: 'neutral',
          ja_when: 'quand + 半過去【§28】。過去の話では quand の後も過去形です（未来の話では未来形【§27】）。',
          when: 'quand takes the imperfect for past narration, the future for plans.'
        },
        {
          fr: "D'abord je me lève, ensuite je prends une douche",
          en: 'First I get up, then I take a shower',
          ja: 'まず起きて、それからシャワーを浴びます',
          register: 'neutral',
          ja_when: '順序の語【§20】。日課を語るときにつなぐと自然になります。',
          when: 'Sequencing words make a routine sound fluent.'
        },
        {
          fr: "Je n'ai que dix euros sur moi",
          en: 'I only have ten euros on me',
          ja: '10ユーロしか持っていません',
          register: 'casual',
          ja_when: '★ ne ... que は「〜しかない」で否定ではありません ★ 数量を限定する形です。sur moi で「手持ちに」。',
          when: 'ne ... que restricts rather than negates.'
        },
        {
          fr: "Je n'ai rien compris",
          en: "I didn't understand anything",
          ja: '全然わかりませんでした',
          register: 'casual',
          ja_when: '★ rien は複合過去では助動詞と過去分詞の間 ★ Je n\'ai compris rien は誤りです。',
          when: 'rien sits between the auxiliary and the participle.'
        }
      ]
    },

    {
      type: 'dialogue',
      title: '会話：長めのやりとり',
      scene: 'ここまでの文法をすべて使った、自然な長さの会話です。',
      lines: [
        { who: 'A', fr: "Tu as vu le nouveau film ? Je l'ai regardé hier.", en: 'Have you seen the new film? I watched it yesterday.', ja: '新しい映画見た？ 昨日見たんだ。' },
        { who: 'B', fr: "Non, pas encore. Il est bien ?", en: 'No, not yet. Is it good?', ja: 'まだ。面白い？' },
        { who: 'A', fr: "Oui, mais je n'ai rien compris à la fin.", en: "Yes, but I didn't understand anything at the end.", ja: 'うん、でも最後が全然わからなかった。' },
        { who: 'B', fr: "Ah bon ? Alors je vais le voir avec toi, si tu veux.", en: 'Oh really? Then I\'ll see it with you, if you like.', ja: 'そうなんだ。じゃあ一緒に見に行こうか、よければ。' },
        { who: 'A', fr: "Avec plaisir. Mais je n'ai que dix euros sur moi.", en: 'With pleasure. But I only have ten euros on me.', ja: 'ぜひ。でも今10ユーロしかないや。' },
        { who: 'B', fr: "Ce n'est pas grave, je t'invite.", en: "It doesn't matter, it's on me.", ja: '大丈夫、おごるよ。' },
        { who: 'A', fr: "Merci ! Alors je te paie le café après.", en: "Thanks! Then I'll buy you a coffee afterwards.", ja: 'ありがとう。じゃあ後でコーヒーおごるね。' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: '「彼を見ます」の正しい語順は？',
          options: ['Je vois le', 'Je le vois', 'Le je vois', 'Je vois lui'],
          answer: 1,
          why: '目的語代名詞は動詞の前。英語 I see him と語順が逆になります。'
        },
        {
          q: '「もう見ました」の正しい形は？',
          options: ["J'ai le vu", "Je l'ai vu", "J'ai vu le", "Je vu l'ai"],
          answer: 1,
          why: "複合過去では代名詞が助動詞の前。le が母音の前で l' に縮まります。"
        },
        {
          q: '「10ユーロしかない」の形は？',
          options: ["Je n'ai pas dix euros", "Je n'ai que dix euros", "Je n'ai rien dix euros", "Je n'ai jamais dix euros"],
          answer: 1,
          why: 'ne ... que は「〜しかない」という限定で、否定ではありません。'
        },
        {
          q: '「何もわからなかった」で rien が入る位置は？',
          options: ["Je n'ai compris rien", "Je n'ai rien compris", "Je rien n'ai compris", "Rien je n'ai compris"],
          answer: 1,
          why: 'rien は助動詞と過去分詞の間。ただし personne は後ろに置きます（Je n\'ai vu personne）。'
        },
        {
          q: '代名詞が動詞の後ろに来るのはどの場合？',
          options: ['否定文', '複合過去', '肯定の命令形', '疑問文'],
          answer: 2,
          why: 'Donne-le-moi のように、肯定命令のときだけ後ろに置きます。しかも me が moi に変わります。'
        }
      ]
    }
  ]
};
