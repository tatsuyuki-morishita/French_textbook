/* ============================================================
   English content layer — sections 25-30
   ============================================================ */

window.EN_25 = {
  goals: [
    'Form the conditional',
    'Give advice with devoir and pouvoir in the conditional',
    'Pick a frame that suggests rather than instructs',
    'Respond when someone advises you'
  ],
  blocks: [
    { title: 'The conditional — French for hedging',
      body: 'The conditional (le conditionnel) exists to avoid stating things flatly. ' +
            'Advice, requests, and wishes all run through it, and being able to use it changes how polite you sound. ' +
            'Building it is simple: the future stem plus the imperfect endings.',
      list: ['The stem is the infinitive (drop the e of -re verbs): parler-, finir-, prendr-',
             'The endings are -ais, -ais, -ait, -ions, -iez, -aient',
             'je parlerais, tu parlerais, il parlerait, nous parlerions, vous parleriez, ils parleraient',
             'Irregular stems: avoir → aur-, être → ser-, aller → ir-, faire → fer-, pouvoir → pourr-, devoir → devr-, vouloir → voudr-',
             'You have already been using one: Je voudrais from §14 is a conditional'] },
    { title: 'devoir in the conditional (should)',
      intro: 'The backbone of advice. The stem becomes devr-.',
      note: 'devrais, devrait and devraient all sound the same. The present tense tu dois means "you must" ' +
            'and lands close to an order, so advice should use the conditional tu devrais.' },
    { title: 'Giving advice, from gentlest to firmest',
      intro: 'The further down the list, the more pressure. Pick by your relationship.' },
    { title: 'The conditional does more than advise',
      list: ['Polite requests — Pourriez-vous m\'aider ? (could you help me?)',
             "Wishes — J'aimerais visiter Paris (I'd like to visit Paris)",
             'Ordering — Je voudrais un café (§14)',
             "Hypotheticals — Si j'avais le temps, je viendrais (if I had time, I'd come)",
             'In any service situation, treat the conditional as the default rather than the polite extra'] },
    { title: 'Responding to advice' },
    { title: 'Conversation: a tired friend',
      scene: 'A colleague has been run down lately. Several advice frames appear.' },
    { title: 'Check yourself',
      questions: [
        { q: 'Which is the gentlest way to advise?',
          options: ['Tu dois arrêter', 'Tu devrais arrêter', 'Pourquoi ne pas arrêter ?', 'Arrête !'],
          why: 'Pourquoi ne pas … ? leaves the decision entirely with them. Tu dois is close to an order.' },
        { q: 'What is the je form of devoir in the conditional?',
          options: ['je dois', 'je devrais', 'je devais', 'je devrai'],
          why: 'The stem devr- plus -ais. je devrai is the simple future, a different tense.' },
        { q: 'Which frame means "if I were you"?',
          options: ['Si je suis toi', 'À ta place', 'Comme toi', 'Pour toi'],
          why: 'À ta place, je … Framing it as your own choice makes it easy to accept.' },
        { q: 'Which preposition does conseiller need?',
          options: ['à', 'de', 'pour', 'None'],
          why: 'Je te conseille DE prendre le train. The de is not optional.' }
      ] }
  ]
};

window.EN_26 = {
  goals: [
    'Write all three question forms',
    'Choose one to suit the person and the setting',
    'Handle the inserted t in inversion',
    'Fit question words into each form'
  ],
  blocks: [
    { title: 'One question, three ways',
      body: 'French questions come in three forms with the same meaning but different standing. ' +
            'Think of the gap between "coming?", "are you coming?", and "might you be joining us?".',
      list: ['1. Intonation — Tu viens ? Casual, and the backbone of speech',
             '2. est-ce que — Est-ce que tu viens ? Neutral, safe anywhere',
             '3. Inversion — Viens-tu ? Written and formal',
             'By frequency in speech: 1 far ahead of 2, and 3 a distant last',
             'Form 3 can sound stilted or theatrical in ordinary conversation'] },
    { title: 'The same thing three ways',
      intro: 'All three mean "do you speak French".' },
    { title: 'Building an inversion, and its exceptions',
      list: ['Basic: verb + hyphen + subject pronoun. Viens-tu ? Parlez-vous ?',
             'Two vowels meeting take an inserted t: A-t-il ? Parle-t-elle ? Va-t-on ?',
             'Inverting je is effectively obsolete. Use Est-ce que je …',
             'A noun subject is stated first and echoed: Marie parle-t-elle français ?',
             'In the passé composé it is the auxiliary that inverts: As-tu mangé ?'] },
    { title: 'Inversion in practice' },
    { title: 'Fitting question words into the three forms',
      body: 'Question words (où, quand, comment, pourquoi, combien) work with all three. ' +
            'In casual speech they very often move to the end of the sentence — ' +
            'something textbooks rarely teach but speakers do constantly.',
      list: ['Tu vas où ? — question word last, the most casual',
             'Où tu vas ? — question word first, still casual',
             'Où est-ce que tu vas ? — neutral',
             'Où vas-tu ? — formal',
             'pourquoi is the exception: it cannot go last'] },
    { title: 'Questions with question words' },
    { title: 'Conversation: all three forms',
      scene: 'Passport control (formal), then meeting a friend (casual).' },
    { title: 'Check yourself',
      questions: [
        { q: 'Which form dominates spoken French?',
          options: ['Inversion', 'est-ce que', 'Intonation alone', 'All equally'],
          why: 'Simply raising the pitch. Inversion belongs to writing and sounds stiff in conversation.' },
        { q: 'Why does A-t-il contain a t?',
          options: ['It intensifies', 'To stop two vowels colliding',
                    'It marks the past', 'It marks the plural'],
          why: 'a and il would be unpronounceable together. The t carries no meaning.' },
        { q: 'Which question word cannot go at the end?',
          options: ['où', 'quand', 'comment', 'pourquoi'],
          why: 'Tu viens pourquoi ? does not work. The others are fine sentence-finally.' },
        { q: 'How do you invert "does Marie speak French"?',
          options: ['Parle Marie français ?', 'Marie parle-t-elle français ?',
                    'Parle-Marie français ?', 'Est-ce Marie parle français ?'],
          why: 'The noun comes first and is echoed by the inverted pronoun.' }
      ] }
  ]
};

window.EN_27 = {
  goals: [
    'Use the near future for plans',
    'Build the simple future',
    'Choose between them by situation',
    'Talk about plans and ambitions'
  ],
  blocks: [
    { title: 'Two futures',
      body: 'French has a near future and a simple future, and the relationship is almost exactly ' +
            'English "going to" versus "will". Speech leans heavily on the near future, so start there.',
      list: ['Near future — aller in the present + infinitive: Je vais partir',
             'Simple future — a stem plus dedicated endings: Je partirai',
             'Most spoken futures are the near one, and it only requires you to know aller',
             'The simple future belongs to writing, forecasts, promises, and the distant future'] },
    { title: 'The near future — aller + infinitive',
      intro: 'Conjugate aller and put the infinitive after it. That is the whole rule.',
      note: 'Negation wraps aller: Je ne vais pas partir. The infinitive stays at the end.' },
    { title: 'The simple future — parler',
      intro: 'The stem is the infinitive (minus the e of -re verbs). The endings never vary.',
      note: 'The endings -ai, -as, -a, -ons, -ez, -ont are nearly the present tense of avoir. ' +
            'The irregular stems are shared with the conditional in §25: avoir → aur-, être → ser-, ' +
            'aller → ir-, faire → fer-, venir → viendr-, pouvoir → pourr-.' },
    { title: 'Which one to use',
      list: ['Near future — a settled plan, something soon, spoken. Je vais manger',
             'Simple future — a prediction, a promise, something distant, written. Il fera beau demain',
             'When unsure, use the near future. It rarely sounds wrong in speech',
             'After quand, French uses the FUTURE — unlike English "when I have time"',
             'After si, French uses the PRESENT. The exact opposite of quand'] },
    { title: 'Talking about plans' },
    { title: 'Future time expressions',
      items: ['tomorrow', 'the day after tomorrow', 'next week', 'next month',
              'next year', 'soon', 'one day', 'in two years', 'later', 'in future'] },
    { title: 'dans and en are not the same',
      list: ['dans deux heures — in two hours, meaning it starts then',
             'en deux heures — within two hours, meaning that is how long it takes',
             'Je pars dans une heure — I leave in an hour',
             "J'ai fait ça en une heure — I did it in an hour",
             'English "in" covers both, so this one needs conscious attention'] },
    { title: 'Conversation: plans ahead',
      scene: 'Two friends talking about next year.' },
    { title: 'Check yourself',
      questions: [
        { q: 'How is the near future built?',
          options: ['être + infinitive', 'aller + infinitive',
                    'avoir + past participle', 'stem + endings'],
          why: 'aller in the present plus the infinitive: je vais partir.' },
        { q: 'What tense follows quand in "when I have time, I\'ll call you"?',
          options: ['Present', 'Future', 'Past', 'Conditional'],
          why: "Quand j'aurai le temps. French puts both halves in the future." },
        { q: 'And what follows si?',
          options: ['Present', 'Future', 'Conditional', 'Imperfect'],
          why: "Si j'ai le temps, je viendrai. si takes the present — the opposite of quand." },
        { q: 'How do you say "I leave in an hour"?',
          options: ['Je pars en une heure', 'Je pars dans une heure',
                    'Je pars pour une heure', 'Je pars à une heure'],
          why: 'dans means "in, from now"; en means "within, taking".' },
        { q: 'What is the simple future stem of aller?',
          options: ['aller-', 'all-', 'ir-', 'allâ-'],
          why: "j'irai. An irregular stem, shared with the conditional." }
      ] }
  ]
};

window.EN_28 = {
  goals: [
    'See all the tenses in one place',
    'Explain how the passé composé differs from the imperfect',
    'Combine both past tenses in one sentence',
    'Choose a tense by what you are doing with it'
  ],
  blocks: [
    { title: 'Every tense covered so far',
      body: 'This is all you need up to A2, and each has a clearly separate job.',
      list: ['Present — Je mange. Now, habits, general truths',
             "Passé composé — J'ai mangé. A finished event (§22)",
             'Imperfect — Je mangeais. Background, description, repetition',
             'Near future — Je vais manger. A settled plan (§27)',
             'Simple future — Je mangerai. A prediction or promise (§27)',
             'Conditional — Je mangerais. Hypothetical or polite (§25)'] },
    { title: 'The imperfect — the other past',
      body: 'If the passé composé is a point, the imperfect is a line. ' +
            'It does not care when something started or stopped; it paints the situation or the repetition. ' +
            'It is also far easier to build than the passé composé, with essentially one exception.',
      list: ['Stem: take nous in the present, drop -ons. nous parlons → parl-',
             'Endings: -ais, -ais, -ait, -ions, -iez, -aient',
             'être is the only irregular stem: ét-',
             "j'étais, il était and ils étaient all sound identical",
             'Use it for weather, age, feelings, appearance, and repeated habits'] },
    { title: 'The imperfect — être',
      intro: 'The one irregular. Everything else builds off the nous form of the present.',
      note: 'étais, était and étaient are all "eh-TEH". Only the subject separates them.' },
    { title: 'Passé composé or imperfect?',
      list: ['Passé composé — once, completed, the story advances. Hier, j\'ai visité le musée',
             "Imperfect — background, state, repetition, the story pauses. Quand j'étais petit…",
             'Signals for the passé composé: hier, soudain, une fois, à 8 heures',
             "Signals for the imperfect: souvent, toujours, tous les jours, quand j'étais",
             'Weather, age, feelings, and appearance are almost always imperfect',
             'The classic pattern: imperfect background interrupted by a passé composé event'] },
    { title: 'Combining the two past tenses',
      intro: 'Background in the imperfect, the event that cuts across it in the passé composé.' },
    { title: 'être in every tense',
      list: ['Present — je suis',
             "Passé composé — j'ai été (was, as a completed stretch)",
             "Imperfect — j'étais (was, as a state)",
             'Near future — je vais être',
             'Simple future — je serai',
             'Conditional — je serais',
             "In practice the past of être is nearly always the imperfect; j'ai été is uncommon"] },
    { title: 'Conversation: then and now',
      scene: 'Talking about childhood. The two past tenses alternate throughout.' },
    { title: 'Check yourself',
      questions: [
        { q: 'Which tense fits "when I was little, I often went to the sea"?',
          options: ['Passé composé', 'Imperfect', 'Simple future', 'Conditional'],
          why: 'A repeated childhood habit — imperfect. souvent is the giveaway.' },
        { q: 'How do you split "she was reading when the phone rang"?',
          options: ['Both passé composé', 'Both imperfect',
                    'reading = imperfect / rang = passé composé',
                    'reading = passé composé / rang = imperfect'],
          why: 'The ongoing background is imperfect; the interrupting event is passé composé.' },
        { q: 'Which verb has the only irregular imperfect stem?',
          options: ['avoir', 'aller', 'faire', 'être'],
          why: 'être becomes ét-. Everything else comes off the nous form.' },
        { q: 'Which tense states an age in the past?',
          options: ['Passé composé', 'Imperfect', 'Present', 'Future'],
          why: "J'avais vingt ans. Age is a state, so always imperfect." },
        { q: 'How do you get the imperfect stem?',
          options: ['Drop -er from the infinitive', 'Drop -ons from the nous form',
                    'Use the je form as is', 'Build it from the participle'],
          why: 'nous parlons → parl-. This works for irregular verbs too, which is why it is the rule taught.' }
      ] }
  ]
};

window.EN_29 = {
  goals: [
    'Know the basic French word order',
    'Place object pronouns correctly',
    'Negate more complex sentences',
    'Join clauses so you can speak at length'
  ],
  blocks: [
    { title: 'Word order is close to English, with three exceptions',
      body: 'The basic order is subject, verb, object — the same as English. ' +
            'Only three things move, and knowing them covers most sentences.',
      list: ['1. Adjectives follow the noun — une voiture rouge (BANGS in §11 are the exception)',
             '2. Object pronouns go BEFORE the verb — Je le vois, the reverse of "I see him"',
             '3. Adverbs go straight after the verb — Je vais souvent (§21)',
             'Everything else behaves the way your English instinct expects'] },
    { title: 'Object pronouns come before the verb',
      body: 'This is where French word order departs furthest from English. ' +
            '"I see him" is not Je vois lui but Je le vois — the pronoun jumps in front.',
      list: ['Direct object: me, te, le / la, nous, vous, les',
             'Indirect object (with à): me, te, lui, nous, vous, leur',
             'Je le vois — I see him',
             'Je lui parle — I speak to him (parler à, so indirect)',
             'Still before the verb when negated: Je ne le vois pas',
             "Before the auxiliary in the passé composé: Je l'ai vu",
             'Before the infinitive when there is one: Je vais le voir'] },
    { title: 'Checking pronoun position' },
    { title: 'The other negations',
      list: ['ne … pas — the basic not',
             'ne … jamais — never (§21)',
             "ne … plus — no longer. Je n'ai plus faim",
             'ne … rien — nothing. Je ne vois rien',
             'ne … personne — nobody. Je ne connais personne',
             'ne … que — only. A restriction rather than a negation',
             'In the passé composé, rien goes inside the verb and personne after it',
             "Je n'ai rien vu / Je n'ai vu personne"] },
    { title: 'Words that join clauses',
      items: ['and', 'or', 'but', 'because', 'for (written)', 'so', 'then', 'then, next',
              'next', 'when', 'if', 'while', 'even if', 'and yet', 'first', 'finally'] },
    { title: 'Stretching a sentence with conjunctions',
      intro: 'Joining short sentences does more for how fluent you sound than extra vocabulary does.' },
    { title: 'Conversation: a longer exchange',
      scene: 'Everything from this section, at a natural conversational length.' },
    { title: 'Check yourself',
      questions: [
        { q: 'What is the right order for "I see him"?',
          options: ['Je vois le', 'Je le vois', 'Le je vois', 'Je vois lui'],
          why: 'The object pronoun precedes the verb — the reverse of English.' },
        { q: 'How do you say "I have already seen it"?',
          options: ["J'ai le vu", "Je l'ai vu", "J'ai vu le", "Je vu l'ai"],
          why: "The pronoun goes before the auxiliary, and le elides to l'." },
        { q: 'How do you say "I only have ten euros"?',
          options: ["Je n'ai pas dix euros", "Je n'ai que dix euros",
                    "Je n'ai rien dix euros", "Je n'ai jamais dix euros"],
          why: 'ne … que restricts rather than negates.' },
        { q: 'Where does rien go in "I understood nothing"?',
          options: ["Je n'ai compris rien", "Je n'ai rien compris",
                    "Je rien n'ai compris", "Rien je n'ai compris"],
          why: 'rien sits between auxiliary and participle. personne goes after the participle.' },
        { q: 'When does a pronoun follow the verb?',
          options: ['In negatives', 'In the passé composé',
                    'In affirmative imperatives', 'In questions'],
          why: 'Donne-le-moi. Only there — and me becomes moi.' }
      ] }
  ]
};

window.EN_30 = {
  goals: [
    'Take stock of what A2 gives you',
    'See what B1 adds',
    'Pick concrete ways to keep going alone',
    'Create situations where you actually use it'
  ],
  blocks: [
    { title: 'Where you have got to',
      body: 'Twenty-nine sections in, you are at roughly CEFR A2: ' +
            'able to handle simple exchanges on familiar, everyday topics. In practice that means:',
      list: ['Introducing yourself and describing family, work, and home',
             'Getting through shops, restaurants, hotels, and a pharmacy',
             'Asking directions and following the answer',
             'Speaking across three time frames — present, past, and future',
             'Inviting people, accepting, and declining',
             'Stating preferences and opinions, and giving simple advice'] },
    { title: 'What separates A2 from B1',
      body: 'B1 means holding a connected conversation on topics that interest you. ' +
            'The gap is less about vocabulary than about the ability to link ideas into longer stretches.',
      list: ['The subjunctive — Il faut que tu viennes',
             'Relative pronouns — qui, que, dont, où to join clauses',
             "The pluperfect — j'avais mangé, the past behind the past",
             'The passive — La lettre a été écrite par Marie',
             "Reported speech — Il a dit qu'il viendrait",
             'Vocabulary roughly from 1,500 words to 3,000'] },
    { title: 'Phrases for keeping the learning going' },
    { title: 'Concrete ways to continue alone',
      list: ['Keep the sound alive. Five minutes a day on the audio buttons. Pronunciation decays without use',
             'Flashcards — the card button reviews every phrase in the course on a spaced schedule',
             "Graded readers and children's books. Finish something easy rather than abandoning something hard",
             'Video with French audio AND French subtitles. English subtitles stall your progress',
             'Music with the lyrics in front of you — a free supply of real liaison examples',
             'A language exchange. Thirty minutes a week of speaking beats hours of reading',
             'News: RFI\'s Journal en français facile is read slowly for learners'] },
    { title: 'What to watch next',
      body: 'Past A2 the character of your mistakes changes. ' +
            'Grammar matters less and sound and connection matter more.',
      list: ['The R — comprehensible but the strongest marker of a foreign accent. Keep the throat engaged',
             '/y/ versus /u/ — tu and tout stay slippery for a long time',
             'Nasal vowels — do not let the tongue land on the roof of the mouth',
             'Liaison — clear separate words sound unnatural, however correct each one is',
             'Linking clauses — build the habit of mais, donc, parce que instead of stacking short sentences',
             "Backchannels — Ah bon ?, D'accord, Effectivement keep a conversation alive"] },
    { title: 'Backchannels that keep a conversation going',
      intro: 'They carry almost no content, and they are what stops the conversation dying.' },
    { title: 'Conversation: keeping it up',
      scene: 'The end of the course, and a realistic exchange with a French speaker.' },
    { title: 'One last thing',
      body: 'You can now get through most of daily life in French. ' +
            'What you need from here is not new grammar but repetition. ' +
            'Speaking imperfectly and often beats waiting until the sentence is right. ' +
            'Sections 31 to 33 hold the things textbooks leave out — dating, slang, and everyday speech. ' +
            'Your grammar is already good enough to read them, so treat them as a reward. ' +
            'Bonne continuation !' },
    { title: 'Final check',
      questions: [
        { q: 'Which grammar point is new at B1?',
          options: ['Passé composé', 'Subjunctive', 'Partitive article', 'Near future'],
          why: 'The subjunctive is the central B1 hurdle. The other three are covered in this course.' },
        { q: 'What do you say when someone switches to English on you?',
          options: ['Je ne parle pas anglais', 'On peut se parler en français ?',
                    'Parlez plus lentement', 'Je ne comprends pas'],
          why: 'They switch to be helpful. Asking gets your practice back.' },
        { q: 'Which sound stays hardest longest?',
          options: ['The vowel a', 'The consonant p', 'The R', 'The consonant m'],
          why: '/ʁ/ exists in neither English nor Japanese and needs sustained attention.' },
        { q: 'What do you say to someone facing an exam?',
          options: ['Bonne journée', 'Bon courage', 'Bonne nuit', 'Bon appétit'],
          why: 'Bon courage is for anyone about to face something demanding.' }
      ] }
  ]
};
