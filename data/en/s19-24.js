/* ============================================================
   English content layer — sections 19-24
   ============================================================ */

window.EN_19 = {
  goals: [
    'Name clothes and colours',
    'Handle a full exchange with a shop assistant',
    'Ask about size, trying things on, and price',
    'Say clearly whether you are buying or not'
  ],
  blocks: [
    { title: 'Say Bonjour on entering any shop',
      body: 'Whether it is a clothes shop or a corner store, you greet the staff on the way in. ' +
            'Browsing in silence is rude. ' +
            'And if you are asked Je peux vous aider ?, answer even when you are only looking — ' +
            'Je regarde, merci. Saying nothing is the worst possible response.' },
    { title: 'Clothes',
      items: ['t-shirt', 'shirt', 'trousers', 'skirt', 'dress', 'coat', 'jacket', 'jumper',
              'shoes', 'boots', 'scarf', 'hat', 'bag', 'belt', 'jeans', 'socks'] },
    { title: 'Traps in the clothing nouns',
      list: ['un pantalon is singular — one pair of trousers, one word',
             'des chaussures and des chaussettes are always plural. A single shoe is une chaussure',
             'une veste is a jacket, not a waistcoat',
             'un pull is short for pull-over — a jumper',
             'To wear is porter; to try on is essayer'] },
    { title: 'Colours',
      intro: 'Colours are adjectives, so they agree with the noun in gender and number.',
      items: ['red (invariable)', 'blue → bleue', 'green → verte', 'yellow (invariable)',
              'black → noire', 'white → blanche', 'grey → grise', 'pink (invariable)',
              'orange (NEVER changes)', 'purple → violette', 'brown (NEVER changes)', 'beige (invariable)'] },
    { title: 'Colours follow the noun, and they change',
      body: 'A colour adjective always goes after the noun (une robe rouge), the opposite of English word order. ' +
            'It takes conscious effort until it becomes automatic.',
      list: ['une robe rouge — a red dress',
             'des chaussures noires — black shoes, plural so the s appears',
             'une chemise blanche — blanc becomes blanche',
             'orange and marron never change, because they are really the fruit and the chestnut',
             'des chaussures marron, never marrons'] },
    { title: 'In the shop' },
    { title: 'Conversation: buying clothes',
      scene: 'A clothes shop, from walking in to paying.' },
    { title: 'Check yourself',
      questions: [
        { q: 'Which verb asks about clothing size?',
          options: ['être', 'avoir', 'faire', 'prendre'],
          why: 'Quelle taille faites-vous ?, answered with je fais du 38.' },
        { q: 'What is the right word order for "a red dress"?',
          options: ['une rouge robe', 'une robe rouge', 'une robe rouges', 'un robe rouge'],
          why: 'The colour follows the noun. rouge itself does not change.' },
        { q: 'Which colour has no feminine form?',
          options: ['vert', 'blanc', 'marron', 'violet'],
          why: 'marron and orange come from a nut and a fruit, and never inflect.' },
        { q: 'What do you say when you are only browsing?',
          options: ['Nothing at all', 'Je regarde, merci', 'Non', 'Au revoir'],
          why: 'Silence is the worst reply. Je regarde, merci is expected.' }
      ] }
  ]
};

window.EN_20 = {
  goals: [
    'Understand how pronominal verbs work',
    'Describe your morning step by step',
    'Attach times to what you do',
    'Conjugate se lever for every subject'
  ],
  blocks: [
    { title: 'Pronominal verbs — the action turns back on you',
      body: 'Describing a routine needs pronominal verbs (les verbes pronominaux). ' +
            'A pronoun — me, te, se — sits in front of the verb and means the action is done to oneself. ' +
            'English mostly hides this ("I get up", "I wash"), which is why it looks strange at first, ' +
            'but the rule is simple.',
      list: ['réveiller — to wake someone else',
             'se réveiller — to wake up yourself',
             'laver — to wash; se laver — to wash oneself',
             'coucher — to put to bed; se coucher — to go to bed',
             'The pronoun agrees with the subject: je me, tu te, il se, nous nous, vous vous, ils se'] },
    { title: 'The verb se lever (to get up)',
      intro: 'Both the pronoun and the verb change with the subject, and this one also shifts its accent.',
      note: 'Only nous and vous flatten the accent, into "noo luh-VON" and "voo luh-VAY". ' +
            'The other four are all "lehv". The negative wraps both pronoun and verb: je ne me lève pas.' },
    { title: 'The morning routine',
      intro: 'Nearly all pronominal. Played as infinitives.',
      items: ['to wake up', 'to get up', 'to shower', 'to wash', 'to brush your teeth', 'to get dressed',
              'to do your hair', 'to shave', 'to put on make-up', 'to have breakfast',
              'to leave for work', 'to hurry'] },
    { title: 'Body parts take the article, not a possessive',
      body: 'When a pronominal verb meets a body part, French uses the definite article rather than a possessive. ' +
            'The me / te / se has already established whose body it is.',
      list: ['Right: Je me brosse les dents',
             'Wrong: Je brosse mes dents — the English "my teeth" leading you astray',
             'Right: Il se lave les mains',
             'Right: Elle se coupe les cheveux',
             "This applies to pronominal verbs. J'ai les cheveux bruns follows its own pattern"] },
    { title: 'Starting the day' },
    { title: 'Words that put things in order',
      body: 'A routine sounds far more fluent when the steps are linked rather than simply listed.',
      list: ["D'abord — first",
             'Ensuite / Puis — then',
             'Après — after that',
             'Enfin / Finalement — finally',
             'Vers — around (vers huit heures)',
             "Généralement / D'habitude — usually"] },
    { title: 'Conversation: the morning routine',
      scene: 'With a host family, talking about how the morning goes.' },
    { title: 'Check yourself',
      questions: [
        { q: 'How do you say "I brush my teeth"?',
          options: ['Je brosse mes dents', 'Je me brosse les dents',
                    'Je me brosse mes dents', 'Je brosse les dents'],
          why: 'The definite article, not a possessive. The me already says whose teeth.' },
        { q: 'Which negative is correct?',
          options: ['Je me ne lève pas', 'Je ne me lève pas', 'Je ne lève me pas', 'Ne je me lève pas'],
          why: 'ne and pas wrap the pronoun and verb together.' },
        { q: 'Which verb goes with meals?',
          options: ['manger', 'prendre', 'faire', 'avoir'],
          why: 'prendre le petit-déjeuner, prendre un café.' },
        { q: 'What is the difference between se réveiller and se lever?',
          options: ['They are the same', 'To wake / to get out of bed',
                    'To wake / to sleep', 'Morning / night'],
          why: 'French separates opening your eyes from actually getting up.' }
      ] }
  ]
};

window.EN_21 = {
  goals: [
    'Describe the evening through to going to bed',
    'Talk about a working or school day',
    'Use adverbs of frequency',
    'Narrate a whole day end to end'
  ],
  blocks: [
    { title: 'The evening routine',
      items: ['to come home', 'to have dinner', 'to do the washing-up', 'to watch TV',
              'to read a book', 'to take a bath', 'to relax', 'to go to bed',
              'to fall asleep', 'to sleep', 'to tidy up', 'to call friends'] },
    { title: 'Three different words for "sleep"',
      list: ['se coucher — to get into bed. The act. Je me couche à minuit',
             "s'endormir — to fall asleep. The moment. Je m'endors tout de suite",
             'dormir — to be asleep. The state. Je dors huit heures',
             'English "go to bed" and "sleep" blur these, so pick by what you actually mean',
             'faire la grasse matinée — to have a lie-in, literally "to do the fat morning"'] },
    { title: 'The verb prendre (to take, eat, catch)',
      intro: 'Irregular, and startlingly wide-ranging: meals, transport, showers, decisions.',
      note: 'je, tu and il all sound like "prahn". nous prenons and vous prenez drop to one n, ' +
            'and ils prennent takes it back. apprendre and comprendre follow the same pattern.' },
    { title: 'A day at work or school' },
    { title: 'Adverbs of frequency',
      body: 'A routine needs these. They are listed from most to least often.',
      list: ['toujours — always',
             'souvent — often',
             'quelquefois / parfois — sometimes',
             'rarement — rarely',
             "ne … jamais — never (je ne fais jamais de sport)",
             'tous les jours — every day; toutes les semaines — every week',
             'une fois par semaine — once a week; deux fois par mois — twice a month',
             'They go straight after the verb: je vais souvent au cinéma, never je souvent vais'] },
    { title: 'Putting frequency to work' },
    { title: 'Conversation: how a day goes',
      scene: 'Two friends in a café comparing daily rhythms.' },
    { title: 'Check yourself',
      questions: [
        { q: 'What is the right word order for "I often go to the cinema"?',
          options: ['Je souvent vais au cinéma', 'Souvent je vais au cinéma',
                    'Je vais souvent au cinéma', 'Je vais au cinéma souvent'],
          why: 'The adverb follows the verb — not the English order.' },
        { q: 'How do you say "I never do any sport"?',
          options: ['Je ne fais pas jamais de sport', 'Je ne fais jamais de sport',
                    'Je fais jamais pas de sport', 'Je ne fais jamais du sport'],
          why: 'jamais replaces pas, and the negation still turns du into de.' },
        { q: 'Which preposition goes with "by metro"?',
          options: ['à métro', 'en métro', 'par métro', 'de métro'],
          why: 'Transport you get inside takes en. Only à pied and à vélo take à.' },
        { q: "What does s'endormir mean?",
          options: ['To get into bed', 'To fall asleep', 'To be asleep', 'To wake up'],
          why: 'se coucher → s\'endormir → dormir: getting in, dropping off, being asleep.' }
      ] }
  ]
};

window.EN_22 = {
  goals: [
    'Build the passé composé',
    'Tell apart the verbs that take avoir from those that take être',
    'Handle participle agreement with être',
    'Talk about a past holiday'
  ],
  blocks: [
    { title: 'The passé composé — French for "I did"',
      body: 'This is the biggest step between A1 and A2. ' +
            'French cannot make a past tense from one word: it always needs two pieces, ' +
            'an auxiliary (avoir or être) in the present, plus a past participle.',
      list: ["J'ai mangé — I ate (avoir + mangé)",
             'Je suis allé — I went (être + allé)',
             'Which auxiliary you pick changes the rules that follow. This is the fork in the road',
             'The large majority of verbs take avoir',
             'Verbs of movement or change of state, and every pronominal verb, take être'] },
    { title: 'Forming the past participle',
      list: ['-er verbs → -é: parler → parlé, manger → mangé, aller → allé',
             '-ir verbs → -i: finir → fini, dormir → dormi',
             '-re verbs → -u: attendre → attendu, vendre → vendu',
             'Irregulars must be memorised: avoir → eu, être → été, faire → fait, prendre → pris',
             'voir → vu, boire → bu, lire → lu, écrire → écrit, mettre → mis, venir → venu'] },
    { title: 'The passé composé with avoir — visiter',
      intro: 'The majority case. The participle does not change with the subject.',
      note: "The participle visité is the same whoever the subject is. Negation wraps the auxiliary: je n'ai pas visité." },
    { title: 'The passé composé with être — aller',
      intro: 'Here the participle agrees with the subject in gender and number.',
      note: 'The agreement is a spelling matter only — allé, allée, allés and allées are all pronounced the same. ' +
            'You cannot hear it, so it is a writing problem, not a speaking one.' },
    { title: 'The verbs that take être',
      body: 'English-speaking students remember them as DR & MRS VANDERTRAMP. ' +
            'What they share is movement or a change of state.',
      list: ['aller (go) / venir (come)',
             'arriver (arrive) / partir (leave)',
             'entrer (enter) / sortir (go out)',
             'monter (go up) / descendre (go down)',
             'naître (be born) / mourir (die)',
             'rester (stay) / retourner (return) / tomber (fall)',
             'rentrer (go home) / devenir (become) / passer (drop by)',
             'And every pronominal verb: je me suis levé, je me suis reposé'] },
    { title: 'A holiday in the past tense' },
    { title: 'Holiday vocabulary',
      items: ['beach', 'mountain', 'sea', 'countryside', 'camping', 'castle', 'an island', 'a trip',
              'suitcase', 'passport', 'ticket', 'camera',
              'to go hiking', 'to take photos', 'to swim', 'to rest'] },
    { title: 'Conversation: talking about a holiday',
      scene: 'Back at work after a break, and a colleague wants to hear about it.' },
    { title: 'Check yourself',
      questions: [
        { q: 'Which verb takes être in the passé composé?',
          options: ['manger', 'aller', 'visiter', 'regarder'],
          why: 'aller is a verb of movement. The other three take avoir.' },
        { q: 'How does a woman say "I went"?',
          options: ['Je suis allé', 'Je suis allée', "J'ai allé", "J'ai allée"],
          why: 'être means the participle agrees — allée — though it sounds identical.' },
        { q: "What is the negative of J'ai mangé?",
          options: ["Je n'ai mangé pas", "Je n'ai pas mangé", "Je ne mangé pas", "J'ai ne pas mangé"],
          why: 'ne and pas wrap the auxiliary; the participle stays behind.' },
        { q: 'Which auxiliary do pronominal verbs take?',
          options: ['avoir', 'être', 'Either', 'Depends on the verb'],
          why: 'Always être, without exception: je me suis levé.' },
        { q: 'How do you say "I visited my friend"?',
          options: ["J'ai visité mon ami", "J'ai rendu visite à mon ami",
                    "J'ai visité à mon ami", 'Je suis visité mon ami'],
          why: 'visiter is for places. Visiting a person is rendre visite à.' }
      ] }
  ]
};

window.EN_23 = {
  goals: [
    'Name the parts of the body',
    'Say where it hurts with avoir mal à',
    'Describe symptoms to a doctor',
    'Ask for what you need at a pharmacy'
  ],
  blocks: [
    { title: 'The body (le corps)',
      items: ['head', 'eyes', 'ears', 'nose', 'mouth', 'teeth', 'throat', 'neck',
              'arm', 'hand', 'back', 'stomach', 'leg', 'foot', 'heart', 'skin'] },
    { title: 'avoir mal à — one frame for every ache',
      body: 'Every complaint of pain uses this. ' +
            'mal means the pain, and what follows à is where it is. ' +
            'The only thing to watch is the contraction.',
      list: ["à + le → au — J'ai mal au dos (my back hurts)",
             "à + la → à la — J'ai mal à la tête (headache)",
             "à + l' → à l' — J'ai mal à l'oreille (earache)",
             "à + les → aux — J'ai mal aux dents (toothache)",
             'Never a possessive with the body part: mal à la tête, not mal à ma tête'] },
    { title: 'Describing symptoms' },
    { title: 'The doctor and the pharmacy' },
    { title: 'If you fall ill in France',
      list: ['Start at la pharmacie — the green cross. Pharmacists listen to symptoms and advise',
             'A doctor means le médecin généraliste, normally by appointment',
             'Emergencies: 15 for medical (SAMU), or 112 across the EU',
             'les urgences is A&E. Expect a long wait',
             'la carte vitale is the French health card. Visitors should carry their insurance papers'] },
    { title: 'Conversation: at the pharmacy',
      scene: 'Feeling unwell while travelling, and going to the pharmacy first.' },
    { title: 'Check yourself',
      questions: [
        { q: 'How do you say "I have a toothache"?',
          options: ["J'ai mal à les dents", "J'ai mal aux dents",
                    "J'ai mal à la dents", "J'ai mal de dents"],
          why: 'dents is plural, so à + les contracts to aux.' },
        { q: 'How do you say "I have a fever"?',
          options: ["J'ai mal à la fièvre", "J'ai de la fièvre", 'Je suis fièvre', "J'ai une fièvre"],
          why: 'Fever takes the partitive, not avoir mal.' },
        { q: 'What goes before a body part here?',
          options: ['A possessive (ma, mon)', 'The definite article (la, le, les)',
                    'The indefinite (une, un)', 'Nothing'],
          why: "J'ai mal à la tête. Never ma tête — the same rule as with pronominal verbs." },
        { q: 'How do you ask a pharmacist for something for a symptom?',
          options: ["J'ai besoin de quelque chose pour …", 'Je veux un médicament',
                    'Donnez-moi …', "Qu'est-ce que c'est ?"],
          why: 'You never need the drug name — describing the symptom is enough.' }
      ] }
  ]
};

window.EN_24 = {
  goals: [
    'Name food and drink',
    'Use the partitive to say "some"',
    'Get through a restaurant meal from door to bill',
    'State dietary limits and allergies'
  ],
  blocks: [
    { title: 'Food',
      items: ['bread', 'cheese', 'meat', 'chicken', 'fish', 'salad', 'fruit', 'vegetables',
              'eggs', 'rice', 'pasta', 'soup', 'dessert', 'cake', 'butter', 'sugar'] },
    { title: 'Drinks',
      items: ['water', 'coffee', 'tea', 'wine', 'beer', 'orange juice', 'milk', 'a jug of tap water (free)'] },
    { title: 'The articles you will need to order',
      body: 'Section 7 becomes practical here. Letting the verb decide removes the guesswork.',
      list: ["aimer / adorer / détester → definite article — J'aime le poisson (I like fish)",
             'manger / boire / prendre → partitive — Je mange du poisson (I eat some fish)',
             'commander / vouloir → indefinite — Je voudrais une salade (one salad)',
             'Negation → everything becomes de — Je ne mange pas de viande',
             'Mixing these up genuinely changes what you have said'] },
    { title: 'At the restaurant' },
    { title: 'How a French meal is organised',
      list: ["l'entrée — the starter. NOT the main course, unlike American English",
             'le plat principal — the main course',
             'le dessert',
             'la formule / le menu — a fixed-price combination, cheaper than ordering separately',
             'à la carte — ordering individual dishes',
             'Tipping: service is included (service compris). Rounding up is plenty and never obligatory',
             'Lunch runs 12 to 2, dinner from 7:30. Outside those hours many kitchens are closed'] },
    { title: 'Talking about what you eat' },
    { title: 'Conversation: at the restaurant',
      scene: 'The full sequence, from being seated to asking for the bill.' },
    { title: 'Check yourself',
      questions: [
        { q: 'Which word means the menu you read?',
          options: ['le menu', 'la carte', "l'addition", "l'entrée"],
          why: 'la carte is the list of dishes; le menu is a fixed-price set. The reverse of English.' },
        { q: 'Which article goes with "I eat fish"?',
          options: ['Je mange le poisson', 'Je mange du poisson',
                    'Je mange un poisson', 'Je mange poisson'],
          why: "manger takes the partitive. J'aime le poisson uses a different one." },
        { q: 'How do you ask for free tap water?',
          options: ["Une bouteille d'eau", "Une carafe d'eau",
                    "De l'eau minérale", "L'eau, s'il vous plaît"],
          why: "une carafe d'eau. Without asking, you get bottled water on the bill." },
        { q: "What does l'entrée mean?",
          options: ['Main course', 'Starter', 'Dessert', 'Entrance'],
          why: 'The starter — the opposite of the American use of the word.' },
        { q: 'When does the bill arrive in a French restaurant?',
          options: ['Automatically after the meal', 'Only when you ask',
                    'Before you eat', 'At the till'],
          why: "L'addition, s'il vous plaît. Not bringing it unasked is considered polite." }
      ] }
  ]
};
