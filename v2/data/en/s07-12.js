/* ============================================================
   English content layer — sections 7-12
   ============================================================ */

window.EN_7 = {
  goals: [
    'Choose le, la, or les by the gender and number of the noun',
    'Explain how the indefinite un / une / des differs from that',
    'Use the partitive du / de la for "some of" an uncountable thing',
    'Apply the rule that turns every article into de under negation'
  ],
  blocks: [
    { title: 'French nouns almost always carry an article',
      body: 'English lets you say "I like music" bare; French requires j\'aime la musique. ' +
            'Speakers of languages without articles have to build the habit deliberately, and simply not forgetting them ' +
            'lifts your accuracy a long way. There are three kinds, and each has a clearly separate job.',
      list: ['Definite le / la / les — a specific thing, or a whole category',
             'Indefinite un / une / des — one or several of something countable',
             'Partitive du / de la — some quantity of something uncountable'] },
    { title: 'The definite article (the)',
      intro: 'For things that can be identified, and for a category taken as a whole.',
      items: ['masculine singular', 'feminine singular', 'before a vowel (either gender)', 'plural (either gender)'] },
    { title: 'Where the definite article goes' },
    { title: 'The indefinite article (a / an / some)',
      intro: 'For countable things — one of them, or several.',
      items: ['masculine singular', 'feminine singular', 'plural'] },
    { title: 'des has no English equivalent',
      body: 'English can drop the "some" in "I have books". French cannot: j\'ai des livres needs its des. ' +
            'Treat it mechanically — plural means des — because it is one of the most commonly dropped words.' },
    { title: 'Indefinite and partitive in use' },
    { title: 'Same noun, different article, different meaning',
      list: ["J'aime le poisson — I like fish (the category)",
             'Je mange du poisson — I eat (some) fish (a quantity)',
             "J'achète un poisson — I buy one fish (an individual)",
             'Le poisson est sur la table — that particular fish',
             'Let the verb decide: aimer takes the definite, manger and boire the partitive, acheter the indefinite'] },
    { title: 'Clues to a noun\'s gender',
      body: 'There is no complete rule, but the endings lean strongly. When in doubt, the dictionary is faster than guessing.',
      list: ['Often feminine: -e, -tion, -sion, -té, -ette, -ance, -ence (la nation, la liberté)',
             'Often masculine: -age, -ment, -eau, -isme, -eur (le fromage, le moment)',
             'Plenty of exceptions: le musée, le lycée, la page, la plage',
             'The habit that works: learn every new noun with its article — "la table", never "table"'] },
    { title: 'Conversation: ordering in a café',
      scene: 'A café in the morning. All three article types appear.' },
    { title: 'Check yourself',
      questions: [
        { q: 'How do you say "I like cheese"?',
          options: ["J'aime fromage", "J'aime du fromage", "J'aime le fromage", "J'aime un fromage"],
          why: 'aimer always takes the definite article. It means cheese as a category.' },
        { q: 'And "I eat cheese"?',
          options: ['Je mange le fromage', 'Je mange du fromage', 'Je mange fromage', 'Je mange un fromage'],
          why: 'You eat some cheese, so the partitive du. This is exactly where aimer and manger part ways.' },
        { q: "What is the negative of J'ai des amis?",
          options: ["Je n'ai pas des amis", "Je n'ai pas de amis", "Je n'ai pas d'amis", "Je n'ai pas les amis"],
          why: "Negation turns des into de, which elides to d' before a vowel." },
        { q: 'After which verb does the article NOT become de under negation?',
          options: ['avoir', 'manger', 'être', 'acheter'],
          why: "être is the exception: ce n'est pas un problème keeps its article." }
      ] }
  ]
};

window.EN_8 = {
  goals: [
    'Name family members with the right gender',
    'Choose mon / ma / mes by the gender and number of what is owned',
    'Describe your family and marital status',
    'Say where and in what kind of home you live'
  ],
  blocks: [
    { title: 'Family words',
      intro: 'Learning them with their article fixes the gender at the same time.',
      items: ['family', 'father', 'mother', 'parents', 'son', 'daughter, girl', 'children',
              'brother', 'sister', 'grandfather', 'grandmother', 'uncle', 'aunt',
              'cousin (m) → la cousine', 'husband', 'wife, woman', 'nephew', 'niece'] },
    { title: 'Spelling and sound traps',
      list: ['le fils — "feess". One of the rare words with an audible final s',
             'la fille — "fee-yuh". The ll becomes a /j/. Easy to confuse with fils',
             'la femme — "fam". The em is not the usual nasal — a genuine one-off',
             'la sœur — round your lips for "oo" and say "er". British her is close',
             'French does not distinguish older from younger siblings. Add grand or petit if you need to'] },
    { title: 'Possessives follow the thing owned, not the owner',
      body: 'English my never changes. French does, according to the gender and number of what follows. ' +
            'This is the single most common slip for learners from any background.',
      list: ['mon père — because père is masculine',
             'ma mère — because mère is feminine',
             'mes parents — because it is plural',
             'The speaker\'s own gender is irrelevant: a man still says ma mère',
             'A feminine noun starting with a vowel still takes mon: mon amie'] },
    { title: 'The possessives (masculine / feminine / plural)',
      intro: 'The owner is on the left; the three forms on the right go with masculine, feminine, and plural nouns.',
      note: 'son and sa mean both "his" and "her". son père can be either, and context decides. ' +
            'To be explicit, rephrase as le père de Marie.' },
    { title: 'Talking about your family' },
    { title: 'Where you live',
      items: ['a house', 'a flat', 'in town', 'in the countryside', 'in the suburbs', 'by the sea'] },
    { title: 'Conversation: about the family',
      scene: 'At the table with a host family, being asked about home.' },
    { title: 'Check yourself',
      questions: [
        { q: 'A man saying "my mother" uses…',
          options: ['mon mère', 'ma mère', 'mes mère', 'son mère'],
          why: 'The possessive follows the noun, not the speaker. mère is feminine, so ma.' },
        { q: 'How is le fils pronounced?',
          options: ['feel', 'feess', 'fee-yuh', 'fee'],
          why: 'An exception with an audible final s. Do not confuse it with la fille.' },
        { q: 'Why is it mon amie rather than ma amie?',
          options: ['amie is masculine', 'ma amie is awkward to pronounce', "It's plural", 'No rule, just an exception'],
          why: 'A feminine noun beginning with a vowel takes mon purely for ease of pronunciation.' },
        { q: 'Which possessive goes with grands-parents?',
          options: ['mon', 'ma', 'mes', 'notre'],
          why: 'It is plural, so mes.' }
      ] }
  ]
};

window.EN_9 = {
  goals: [
    'Use qui, que, où, quand, comment, and pourquoi',
    'Say the days and months',
    'Match quel to the gender and number of its noun',
    'Ask for and give the date and the time'
  ],
  blocks: [
    { title: 'Three ways to build a question',
      body: 'French questions come in three levels of formality. ' +
            'Which one you reach for depends on who you are talking to and where.',
      list: ['1. Raise your intonation — Tu viens ? The most casual, and the backbone of conversation',
             '2. Add est-ce que — Est-ce que tu viens ? Neutral and always safe',
             '3. Invert subject and verb — Viens-tu ? Formal and written',
             'Forms 1 and 2 alone will carry you through any conversation'] },
    { title: 'Question words' },
    { title: 'Days of the week',
      intro: 'Days are written in lower case, unlike English.',
      items: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] },
    { title: 'lundi and le lundi mean different things',
      list: ['Je travaille lundi — I work on (this coming) Monday, one specific day',
             'Je travaille le lundi — I work on Mondays, as a habit',
             'One little article changes the meaning entirely. Watch it when arranging plans',
             'The French week starts on Monday, and calendars put lundi on the left'] },
    { title: 'Months',
      intro: 'Also lower case. Dates run day then month.',
      items: ['January', 'February', 'March', 'April', 'May', 'June',
              'July', 'August', 'September', 'October', 'November', 'December'] },
    { title: 'quel — four spellings, one sound',
      body: 'The interrogative adjective meaning "which" or "what". It agrees with its noun in writing, ' +
            'but all four forms are pronounced identically. It is purely a spelling matter.',
      list: ['quel + masculine singular — Quel jour ? Quel âge ?',
             'quelle + feminine singular — Quelle heure ? Quelle date ?',
             'quels + masculine plural — Quels livres ?',
             'quelles + feminine plural — Quelles couleurs ?'] },
    { title: 'Asking the date and the time' },
    { title: 'Conversation: making a plan',
      scene: 'Two friends arranging something for next week.' },
    { title: 'Check yourself',
      questions: [
        { q: 'How do you ask "what time is it"?',
          options: ['Quel heure est-il ?', 'Quelle heure est-il ?', 'Quels heure est-il ?', 'Quel est heure ?'],
          why: 'heure is feminine, so quelle — though all four forms sound the same.' },
        { q: 'What does Je travaille le lundi mean?',
          options: ['I work this Monday', 'I work on Mondays', 'Mondays are my day off', 'I work until Monday'],
          why: 'The definite article makes it habitual.' },
        { q: 'Which question form dominates spoken French?',
          options: ['Intonation alone', 'est-ce que', 'Inversion', 'All equally'],
          why: 'Raising the intonation is by far the most common. Inversion belongs to writing and formal speech.' },
        { q: 'How does an answer to Pourquoi ? begin?',
          options: ['Pour', 'Parce que', 'Pourtant', 'Comment'],
          why: 'Pourquoi ? is answered with Parce que … Learn the pair together.' }
      ] }
  ]
};

window.EN_10 = {
  goals: [
    'Build the numbers from 100 to 1000',
    'Read large numbers — thousands, millions, billions',
    'Form ordinals (first, second, third…)',
    'Say years, floors, and prices correctly'
  ],
  blocks: [
    { title: '100 to 1000',
      intro: 'Just place a figure before cent. No et is involved.',
      items: [null, 'no et here', 'exactly 200 takes an s', 'the s drops when more follows',
              null, null, null, null] },
    { title: 'When cent takes an s and when it loses it',
      list: ['deux cents (200) — exactly two hundred, so the s appears',
             'deux cent cinquante (250) — a figure follows, so the s goes',
             'cent (100) — no un before it, and no s',
             'mille never takes an s: deux mille, dix mille',
             'French groups digits with a space or a dot and uses a comma for decimals: 1 234,56'] },
    { title: 'Large numbers',
      items: ['1,000', '2,000', '10,000', '100,000', '1,000,000', '2,000,000', '1,000,000,000'] },
    { title: 'million and milliard are nouns',
      body: 'mille is a numeral, but million and milliard are nouns, which changes how they behave.',
      list: ['They take a plural s: deux millions, trois milliards',
             "They need de before the thing counted: un million d'euros",
             'mille does neither: deux mille euros, with no de and no s',
             'There is no single word for ten thousand — think of it as dix mille'] },
    { title: 'Ordinals',
      intro: 'Add -ième to the numeral. Only "first" is a separate word.',
      items: ['first (m) → première', 'second', 'third', 'fourth', 'fifth — gains a u',
              'ninth — f becomes v', 'tenth', 'twentieth'] },
    { title: 'Building ordinals, and the exceptions',
      list: ['The rule: numeral + ième (trois → troisième)',
             'Drop a final e first: quatre → quatrième, onze → onzième',
             'cinq gains a u: cinquième',
             'neuf turns its f into a v: neuvième',
             'Only "first" is a different word — but 21st is vingt-et-unième'] },
    { title: 'Numbers in real situations' },
    { title: 'Conversation: looking for a flat',
      scene: 'At an estate agent, going through a listing.' },
    { title: 'Check yourself',
      questions: [
        { q: 'Which is the correct way to write 250?',
          options: ['deux cents cinquante', 'deux cent cinquante', 'deux cent et cinquante', 'deuxcent cinquante'],
          why: 'The s on cent disappears when another figure follows. Exactly 200 is deux cents.' },
        { q: 'The French troisième étage is which floor in English terms?',
          options: ['Third', 'Fourth', 'Second', 'Fifth'],
          why: 'The French ground floor is the rez-de-chaussée, so the premier étage is the first one above it.' },
        { q: 'How do you say "a million euros"?',
          options: ['un million euros', "un million d'euros", 'un millions euros', 'mille million euros'],
          why: 'million is a noun, so it needs de before what it counts.' },
        { q: 'Which dates use an ordinal?',
          options: ['All of them', 'Only the 1st', 'The 1st and 2nd', 'Only month ends'],
          why: 'Only le premier janvier. Every other date uses a plain number.' }
      ] }
  ]
};

window.EN_11 = {
  goals: [
    'Name the main places in a town with their articles',
    'Use il y a in the affirmative, negative, and as a question',
    'Make adjectives agree with the noun they describe',
    'Describe the place you live in a few sentences'
  ],
  blocks: [
    { title: 'Places in town',
      intro: 'Played with their article so the gender comes along for free.',
      items: ['town hall', 'church (f)', 'hospital (m)', 'school (f)', 'library', 'supermarket',
              'bakery', 'pharmacy', 'bank', 'post office', 'station', 'park',
              'cinema', 'hotel (m)', 'restaurant', 'market'] },
    { title: 'Shop names are the goods plus -erie',
      list: ['le pain (bread) → la boulangerie (bakery)',
             'la pâtisserie — cakes, often in the same shop as the bakery',
             'la boucherie — butcher, from la viande',
             'la poissonnerie — fishmonger',
             'la librairie — a BOOKSHOP, not a library. The library is la bibliothèque',
             'le magasin is a shop in general. Do not confuse it with la maison, a house'] },
    { title: 'il y a — the all-purpose "there is"',
      body: 'Literally "it has there", which is odd, but it is the direct equivalent of there is and there are. ' +
            'The form never changes for number.',
      list: ['Affirmative — Il y a un parc',
             "Negative — Il n'y a pas de parc, with the article becoming de",
             "Question — Est-ce qu'il y a un parc ?",
             'In speech it blurs to "ee-lya", and the negative to something like "een-ya-pa"',
             'The past is Il y avait'] },
    { title: 'Using il y a' },
    { title: 'Adjectives go after the noun — with one famous exception group',
      body: 'French adjectives normally follow the noun (une ville historique), the reverse of English. ' +
            'A small set of short, everyday adjectives goes in front instead. ' +
            'English-speaking students remember them by the initials BANGS.',
      list: ['Beauty — beau, joli',
             'Age — jeune, vieux, nouveau',
             'Number — premier, deuxième',
             'Goodness — bon, mauvais',
             'Size — grand, petit, gros',
             'Everything else follows the noun: une ville animée, un quartier calme'] },
    { title: 'Describing a town' },
    { title: 'Conversation: introducing where you are from',
      scene: 'Two students at a language school describing their home towns.' },
    { title: 'Check yourself',
      questions: [
        { q: 'How do you say "there are many restaurants"?',
          options: ['Il y a beaucoup des restaurants', 'Il y a beaucoup de restaurants',
                    'Il y a beaucoup restaurants', 'Il y a des beaucoup restaurants'],
          why: 'Quantity words like beaucoup, peu, and trop are always followed by de, never des.' },
        { q: 'What does la librairie mean?',
          options: ['Library', 'Bookshop', 'Stationer', 'Lending desk'],
          why: 'A bookshop. The library is la bibliothèque — a classic false friend.' },
        { q: 'Which adjective goes BEFORE the noun?',
          options: ['historique', 'animé', 'petit', 'tranquille'],
          why: 'petit is the S in BANGS. The other three follow the noun.' },
        { q: 'What is the negative of Il y a un parc?',
          options: ["Il n'y a pas un parc", "Il n'y a pas de parc", 'Il y a ne pas parc', "Il n'y a pas le parc"],
          why: 'Negation turns un into de.' }
      ] }
  ]
};

window.EN_12 = {
  goals: [
    'Ask for directions politely',
    'Use the prepositions of position',
    'Follow the directions that come back at you',
    'Check distance and how long it takes'
  ],
  blocks: [
    { title: 'Always open with Bonjour',
      body: 'Leading with Où est la gare ? sounds distinctly rude in France. ' +
            'Put Bonjour or Excusez-moi in front of it. ' +
            'That one word visibly changes how helpful the answer is.' },
    { title: 'Asking the way' },
    { title: 'Prepositions of position',
      intro: 'Most of them take de, which then contracts with the following article.',
      items: ['near', 'far from', 'next to', 'opposite', 'in front of', 'behind',
              'between', 'at the end of', 'on the corner', 'at the lights', 'on', 'under'] },
    { title: 'de plus the article',
      list: ['de + le → du — à côté du parc (next to the park)',
             'de + la → de la, unchanged — près de la gare',
             "de + l' → de l', unchanged — en face de l'hôtel",
             'de + les → des — loin des magasins',
             'devant, derrière and entre take no de at all: devant la gare'] },
    { title: 'The directions you get back',
      intro: 'These are for recognising rather than producing. They come at you in the imperative.' },
    { title: 'Conversation: finding the station',
      scene: 'A street corner in Paris. A visitor asking a passer-by.' },
    { title: 'Check yourself',
      questions: [
        { q: 'How do you say "go straight ahead"?',
          options: ['Allez à droite', 'Allez tout droit', 'Allez à gauche', 'Allez au coin'],
          why: 'tout droit is straight on; à droite is to the right. Mixing them up is the classic direction disaster.' },
        { q: 'How do you say "next to the park"?',
          options: ['à côté de le parc', 'à côté du parc', 'à côté le parc', 'à côté de la parc'],
          why: 'de + le always contracts to du.' },
        { q: 'Which preposition takes no de?',
          options: ['près', 'à côté', 'devant', 'en face'],
          why: 'devant, derrière and entre attach straight to the noun: devant la gare.' },
        { q: 'What is the most idiomatic way to ask the way?',
          options: ['Où est la poste ?', "Pour aller à la poste, s'il vous plaît ?",
                    'La poste ?', 'Je cherche poste'],
          why: 'It asks for the route rather than the location, and it is what French speakers actually say.' }
      ] }
  ]
};
