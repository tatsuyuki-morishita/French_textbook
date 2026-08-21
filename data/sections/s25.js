/* ============================================================
   Section 25 — Giving Advice
   ============================================================ */

window.S25 = {
  id: 25,
  level: 'A2',
  duration: '25分',
  title: { en: 'Giving Advice', fr: 'Donner des conseils' },

  goals: [
    '条件法の作り方を理解する',
    'devoir / pouvoir の条件法で助言できる',
    '押しつけずに提案する型を使い分けられる',
    '助言を受けて反応できる'
  ],

  blocks: [

    {
      type: 'note',
      title: '条件法 — フランス語の「〜でしょう・〜したら」',
      body: '条件法（le conditionnel）は、断定を避けて柔らかく述べるための形です。' +
            '助言・依頼・願望のすべてで使われ、これが使えるかどうかで丁寧さが大きく変わります。' +
            '作り方は単純で、未来形の語幹に半過去の語尾を足すだけです。',
      list: [
        '語幹は動詞の原形（-re は e を落とす）… parler- / finir- / prendr-',
        '語尾は -ais, -ais, -ait, -ions, -iez, -aient',
        'je parlerais / tu parlerais / il parlerait / nous parlerions / vous parleriez / ils parleraient',
        '★ 不規則な語幹 ★ avoir → aur-、être → ser-、aller → ir-、faire → fer-、pouvoir → pourr-、devoir → devr-、vouloir → voudr-',
        'Je voudrais【§14】もこの条件法です。すでに使っていました'
      ]
    },

    {
      type: 'conjugation',
      title: 'devoir の条件法（〜すべき）',
      intro: '助言の主力。語幹が devr- になる不規則動詞です。',
      forms: [
        { pronoun: 'je',          form: 'devrais' },
        { pronoun: 'tu',          form: 'devrais' },
        { pronoun: 'il / elle',   form: 'devrait' },
        { pronoun: 'nous',        form: 'devrions' },
        { pronoun: 'vous',        form: 'devriez' },
        { pronoun: 'ils / elles', form: 'devraient' }
      ],
      note: 'devrais / devrait / devraient はすべて「ドゥヴレ」で同音。現在形の Tu dois（〜しなければならない）は命令に近く強いので、助言では条件法の Tu devrais を使ってください。'
    },

    {
      type: 'phrases',
      title: '助言する — 弱い順',
      intro: '下にいくほど押しが強くなります。相手との関係で選んでください。',
      items: [
        {
          fr: 'Pourquoi ne pas essayer ?',
          en: 'Why not try?',
          ja: '試してみたら？',
          register: 'casual',
          ja_when: '最も押しつけがましくない形。判断を完全に相手に委ねています。',
          when: 'The least pushy option — leaves the decision entirely to them.'
        },
        {
          fr: 'Tu pourrais essayer ce restaurant',
          en: 'You could try this restaurant',
          ja: 'このレストラン試してみたら',
          register: 'casual',
          ja_when: 'pouvoir の条件法で「〜できるかも」。選択肢を示すだけの柔らかい提案。',
          when: 'Offers an option rather than a recommendation.'
        },
        {
          fr: "À ta place, j'irais voir un médecin",
          en: "If I were you, I'd see a doctor",
          ja: '私だったら医者に行くけどな',
          literal: 'あなたの場所なら、私は行くだろう',
          register: 'casual',
          ja_when: '★自分の立場に置き換えて言う型★ 相手を指さないので受け入れられやすい。vous なら À votre place。',
          when: 'Framing it as your own choice makes it easier to accept.'
        },
        {
          fr: 'Tu devrais faire plus de sport',
          en: 'You should do more sport',
          ja: 'もっと運動したほうがいいよ',
          register: 'casual',
          ja_when: '最も標準的な助言の形。plus de + 名詞 で「もっと多くの」。',
          when: 'The standard advice formula.'
        },
        {
          fr: 'Vous devriez dormir plus',
          en: 'You should sleep more',
          ja: 'もっと寝たほうがいいですよ',
          register: 'formal',
          ja_when: 'vous 版。医師や上司から言われる形でもあります。',
          when: 'The vous version — also what a doctor says to you.'
        },
        {
          fr: 'Il vaut mieux réserver à l\'avance',
          en: "It's better to book in advance",
          ja: '前もって予約したほうがいいですよ',
          register: 'neutral',
          ja_when: 'il vaut mieux + 原形。特定の相手を指さないので、一般的な忠告に向いています。',
          when: 'Impersonal — good for general advice rather than personal criticism.'
        },
        {
          fr: "Je te conseille de prendre le train",
          en: 'I advise you to take the train',
          ja: '電車にするのをおすすめするよ',
          register: 'neutral',
          ja_when: '★ conseiller de + 原形 ★ この de は必須です。vous なら Je vous conseille de。',
          when: 'conseiller always takes de before the infinitive.'
        },
        {
          fr: 'Il faudrait partir plus tôt',
          en: 'We should leave earlier',
          ja: 'もっと早く出たほうがいいね',
          register: 'neutral',
          ja_when: 'falloir の条件法。主語がないので誰かを名指しせずに済み、集団への提案に便利です。',
          when: 'Subjectless — useful for suggesting something to a group.'
        },
        {
          fr: 'Tu dois arrêter de fumer',
          en: 'You must stop smoking',
          ja: 'タバコをやめなきゃだめだよ',
          register: 'casual',
          ja_when: '★これは助言ではなく命令に近い★ 現在形の devoir は強く響きます。親しい相手か、本当に強く言いたいときだけ。',
          when: 'The present tense is close to an order — reserve it for when you mean it.'
        }
      ]
    },

    {
      type: 'note',
      tone: 'gold',
      title: '条件法は助言以外にも効く',
      list: [
        '丁寧な依頼 … Pourriez-vous m\'aider ?（手伝っていただけますか）',
        '願望 … J\'aimerais visiter Paris（パリに行きたいです）',
        '注文 … Je voudrais un café【§14】',
        '仮定の帰結 … Si j\'avais le temps, je viendrais（時間があれば行くのに）',
        '★ 現在形より条件法の方が常に丁寧 ★ サービス業の場面では条件法が既定と考えてください'
      ]
    },

    {
      type: 'phrases',
      title: '助言を受けて答える',
      items: [
        {
          fr: "Tu as raison, je vais essayer",
          en: "You're right, I'll try",
          ja: '確かにね、やってみる',
          register: 'casual',
          ja_when: 'avoir raison（正しい）／ avoir tort（間違っている）。どちらも avoir を使います。',
          when: 'Both avoir raison and avoir tort use avoir, not être.'
        },
        {
          fr: "C'est une bonne idée, merci du conseil",
          en: 'That\'s a good idea, thanks for the advice',
          ja: 'いい考えだね、アドバイスありがとう',
          register: 'neutral',
          ja_when: 'merci de + 名詞 で「〜をありがとう」。de + le = du。',
          when: 'merci de + noun; de + le contracts to du.'
        },
        {
          fr: "Oui, mais ce n'est pas si simple",
          en: "Yes, but it's not that simple",
          ja: 'そうなんだけど、そう簡単じゃなくて',
          register: 'casual',
          ja_when: '助言をやんわり退ける形。相手を否定せずに事情を示せます。',
          when: 'Deflects the advice without contradicting the person.'
        },
        {
          fr: "J'y penserai",
          en: "I'll think about it",
          ja: '考えておくよ',
          register: 'neutral',
          ja_when: '★ y は「それについて」★ penser à quelque chose の à ... を y で受けています。条件法ではなく未来形。',
          when: 'y stands in for à + the thing being thought about.'
        }
      ]
    },

    {
      type: 'dialogue',
      title: '会話：疲れている友人に',
      scene: '同僚が最近疲れ気味です。助言の型がいくつも出てきます。',
      lines: [
        { who: 'A', fr: "Tu as l'air fatigué en ce moment.", en: 'You look tired lately.', ja: '最近疲れてるみたいだね。' },
        { who: 'B', fr: "Oui, je dors mal depuis deux semaines.", en: "Yes, I've been sleeping badly for two weeks.", ja: 'うん、2週間くらいよく眠れてなくて。' },
        { who: 'A', fr: "Tu devrais peut-être faire un peu de sport.", en: 'Maybe you should do a bit of sport.', ja: '少し運動したほうがいいんじゃない？' },
        { who: 'B', fr: "Je sais, mais je n'ai pas le temps.", en: "I know, but I don't have time.", ja: '分かってるけど時間がなくて。' },
        { who: 'A', fr: "À ta place, je marcherais un peu le soir. C'est simple.", en: "If I were you, I'd walk a bit in the evening. It's simple.", ja: '私だったら夜に少し歩くかな。それなら簡単だし。' },
        { who: 'B', fr: "Tu as raison. Je vais essayer.", en: "You're right. I'll try.", ja: '確かに。やってみる。' },
        { who: 'A', fr: "Et il vaut mieux éviter le café après dix-huit heures.", en: "And it's better to avoid coffee after 6pm.", ja: 'あと18時以降のコーヒーは避けたほうがいいよ。' },
        { who: 'B', fr: "Ah, ça, c'est plus difficile ! Merci du conseil.", en: "Ah, that's harder! Thanks for the advice.", ja: 'それは難しいなあ。アドバイスありがとう。' }
      ]
    },

    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          q: '最も柔らかい助言の形はどれ？',
          options: ['Tu dois arrêter', 'Tu devrais arrêter', 'Pourquoi ne pas arrêter ?', 'Arrête !'],
          answer: 2,
          why: 'Pourquoi ne pas ... ? が最も押しつけがましくない形。Tu dois は命令に近い強さです。'
        },
        {
          q: 'devoir の条件法 je の形は？',
          options: ['je dois', 'je devrais', 'je devais', 'je devrai'],
          answer: 1,
          why: '語幹 devr- ＋語尾 -ais で devrais。je devrai は単純未来で別の形です。'
        },
        {
          q: '「私だったら医者に行く」の型は？',
          options: ['Si je suis toi', 'À ta place', 'Comme toi', 'Pour toi'],
          answer: 1,
          why: 'À ta place, je ... で「私があなたの立場なら」。相手を指さないので受け入れられやすい形です。'
        },
        {
          q: 'conseiller の後に必要な前置詞は？',
          options: ['à', 'de', 'pour', '不要'],
          answer: 1,
          why: 'Je te conseille de prendre le train。de は省略できません。'
        }
      ]
    }
  ]
};
