/* ============================================================
   English content layer — sections 1-6
   Block-aligned by index with data/sections/sNN.js.
   Phrase items already carry en / when, so only headings, notes,
   tile glosses, and quizzes appear here.
   ============================================================ */

window.EN_1 = {
  goals: [
    'Greet a French speaker you have just met and give your name',
    'Choose correctly between tu and vous for the person and the setting',
    "Conjugate s'appeler (to be called) for every subject",
    'Read the 26 letters the French way and spell your own name',
    'Ask someone to slow down or repeat when a conversation stalls'
  ],
  blocks: [
    { title: 'First, why pronunciation comes first',
      body: 'French puts more distance between spelling and sound than most languages. ' +
            'The r at the end of Bonjour is written but is nothing the English or Japanese r can produce. ' +
            'Settling that early makes the remaining thirty sections easier. ' +
            'Every French item in this course carries katakana, an English-style reading, and IPA. ' +
            'Press the audio button and say it aloud before moving on.' },
    { title: 'Three notations, three jobs',
      list: ['Katakana — a starting shape for the mouth. An approximation, since some French sounds have no Japanese equivalent',
             'English-style — leverage the English you already have. The s of measure IS the French j',
             'IPA — the sound itself. Fastest once it clicks. Unfamiliar symbols are explained under each card'] },
    { title: 'Your first words',
      intro: 'In France you greet first — in a shop, a lift, a waiting room. Going straight to your business reads as rude.' },
    { title: 'tu and vous — the first real hurdle',
      body: 'English has one you. French splits it by distance, much as English once did with thou. ' +
            'If you know a language with formal and informal address, the instinct transfers directly.',
      list: ['tu — friends, family, children, peers, close colleagues',
             'vous — adults you have just met, shopkeepers, teachers, superiors, elders',
             'vous is also the plural. Several people always take vous, however close they are',
             'When unsure, use vous. Nobody is offended by politeness; an unearned tu can offend',
             'On peut se tutoyer ? is the invitation to switch to tu'] },
    { title: "The verb s'appeler (to be called)",
      intro: 'A pronominal verb — literally "to call oneself". The me / te / se in front changes with the subject.',
      note: "m'appelle, t'appelles, s'appelle and s'appellent all sound identical. The spelling differs on the page; " +
            'in speech only the subject tells them apart. Only nous appelons and vous appelez change the sound.' },
    { title: 'Conversation: meeting in a café',
      scene: 'A Paris café. Two people just introduced by a mutual friend, so they are using vous.' },
    { title: 'What to take from this exchange',
      list: ['Et vous ? — returns the question. Et toi ? is the tu version',
             'Moi, je suis… — the fronted Moi lightly stresses "me". Extremely common in speech',
             'B is female and writes Enchantée, but it sounds exactly like A\'s Enchanté'] },
    { title: "The alphabet (L'alphabet)",
      intro: 'The same 26 letters as English; only the names differ. You will need them to spell your name on the phone or give an email address. Tap to hear each one.',
      items: [null, null, null, null, 'careful', null, 'careful', 'silent', null, 'careful',
              null, null, null, null, null, null, 'careful', 'hardest', null, null,
              'careful', null, null, null, null, null] },
    { title: 'Six letters that trip up learners',
      list: ['E — not "ee" but closer to "uh" (/ø/). Round the lips and say "ay"',
             'G and J — they feel swapped: G is "zhay", J is "zhee". Both use the s of measure',
             'H — the letter is named "ash", but inside a word it is always silent. hôtel is "oh-TEL"',
             'R — from the back of the throat. Neither the English r nor a tapped r',
             'U — say "ee" with "oo" lips. This is what separates tu from tout',
             'Y — i grec, "Greek i"'] },
    { title: 'Accent marks (Les accents)',
      intro: 'Marks above and below vowels. Not decoration — they change the sound, and sometimes the word.',
      items: ['acute — a closed "ay"', 'grave — an open "eh"', 'circumflex', 'cedilla — makes c an s sound',
              'diaeresis — split the vowels', 'grave — sound unchanged'] },
    { list: ['é (acute) — a clear closed "ay": café, été, décembre',
             'è / ê (grave, circumflex) — a more open "eh": père, être',
             'ç (cedilla) — makes c sound like s before a, o, u. Without it garçon would be "gar-KON"',
             'ë (diaeresis) — read the vowels separately. Noël is "no-EL", not "nurl"',
             'à — sounds the same as a. It exists purely to separate a (has) from à (to)'] },
    { title: 'Your lifeline when you get stuck',
      intro: 'For a beginner these six phrases are worth more than a hundred nouns. They keep you from falling silent.' },
    { title: 'Check yourself',
      questions: [
        { q: 'You are asking a new business contact for their name. Which is right?',
          options: ["Comment tu t'appelles ?", 'Comment vous appelez-vous ?', 'Salut, ton nom ?', 'Tu es qui ?'],
          why: 'A first meeting in a professional setting takes vous. tu is for friends, peers, and children.' },
        { q: 'How is the letter J pronounced in French?',
          options: ['zhay', 'zhee', 'yah', 'ee'],
          why: 'J is "zhee" and G is "zhay" — the reverse of what an English speaker expects.' },
        { q: 'Without its cedilla, how would garçon be read?',
          options: ['gar-SON', 'gar-SHON', 'gar-KON', 'gar-ZHON'],
          why: 'The cedilla makes c sound like s before a, o, and u. Without it, c is hard.' },
        { q: 'What distinguishes tu from tout?',
          options: ['The final t', 'Where the stress falls', 'The vowel: /y/ versus /u/', 'Length'],
          why: 'tu is /ty/ and tout is /tu/. /y/ means "ee" said with rounded lips — a real word-distinguishing contrast.' },
        { q: 'You walk into a restaurant at 7pm. What do you say first?',
          options: ['Bonjour', 'Bonsoir', 'Salut', 'Au revoir'],
          why: 'Bonsoir from around 6pm. Salut is too familiar for staff, and Au revoir is for leaving.' }
      ] }
  ]
};

window.EN_2 = {
  goals: [
    'Produce all six forms of être, the most important verb in French',
    'State your nationality with the correct masculine or feminine ending',
    'Ask where someone is from and answer the same question',
    'Choose between le, la, and les with country names'
  ],
  blocks: [
    { title: 'The verb être (to be)',
      intro: 'The most-used verb in the language. Completely irregular, so memorise the sounds rather than looking for logic.',
      note: 'tu es and il est both sound like "eh" — only the subject separates them. vous êtes always links into "voo-ZET"; ' +
            'breaking it into two words sounds wrong.' },
    { title: 'Masculine and feminine — the speaker changes the word',
      body: 'Unlike English "I am Japanese", the ending shifts with the speaker\'s gender. ' +
            'The base rule is to add e for the feminine. Whether the sound changes depends on what the e follows.',
      list: ['Consonant + e — that consonant becomes audible. français /frahn-SEH/ becomes française /frahn-SEZ/',
             'Vowel + e — no change in sound. espagnol sounds the same either way',
             'Adjectives already ending in -e (russe, belge, suisse) do not change at all',
             '-ien becomes -ienne, a large change: italien /ee-tal-YAN/ to italienne /ee-tal-YEN/'] },
    { title: 'Saying your nationality',
      intro: 'Nationalities are written in lower case (je suis japonais). Capitalised, the word means the person rather than the adjective.' },
    { title: 'Nationalities (masculine / feminine)',
      intro: 'Tapping plays the masculine form. As a rule, the feminine makes the final consonant audible.',
      items: ['French → française', 'Japanese → japonaise', 'English → anglaise', 'American → américaine',
              'German → allemande', 'Spanish → espagnole', 'Italian → italienne', 'Chinese → chinoise',
              'Korean → coréenne', 'Canadian → canadienne', 'Brazilian → brésilienne', 'Russian (same both)',
              'Belgian (same both)', 'Swiss (same both)', 'Mexican → mexicaine', 'Australian → australienne'] },
    { title: 'Countries and their articles',
      intro: 'Country names always carry an article. Countries ending in -e are usually feminine; the rest usually masculine.',
      items: ['feminine', 'masculine', 'feminine', 'feminine', 'feminine', 'feminine',
              'feminine', 'masculine', 'masculine', 'feminine', 'plural', 'feminine'] },
    { title: 'Living in and going to a country',
      list: ['Feminine country → en: j\'habite en France, je vais en Italie',
             'Masculine country → au: j\'habite au Japon, je vais au Canada',
             'Plural country → aux: je vais aux États-Unis',
             'Country starting with a vowel → en, whatever its gender: en Angleterre',
             'City → à: à Paris, à Tokyo, à Montréal'] },
    { title: 'Conversation: asking where someone is from',
      scene: 'First day at a language school. Two new classmates introduce themselves.' },
    { title: 'Check yourself',
      questions: [
        { q: 'Which form of être goes with vous?',
          options: ['sommes', 'êtes', 'sont', 'es'],
          why: 'vous êtes, always linked into a single "voo-ZET".' },
        { q: 'A woman saying "I am Japanese" uses…',
          options: ['Je suis japonais', 'Je suis japonaise', 'Je suis Japon', 'Je suis du japonais'],
          why: 'The feminine adds e, and that e makes the preceding s audible as a /z/.' },
        { q: 'How do you say "I live in Japan"?',
          options: ["J'habite en Japon", "J'habite au Japon", "J'habite à Japon", "J'habite le Japon"],
          why: 'le Japon is masculine, so au. A feminine country like la France takes en.' },
        { q: 'Which nationality has the same form for both genders?',
          options: ['italien', 'allemand', 'russe', 'américain'],
          why: 'Words already ending in -e — russe, belge, suisse — do not change.' }
      ] }
  ]
};

window.EN_3 = {
  goals: [
    'Pick the right greeting for the hour and the person',
    'Ask how someone is, formally and casually, and answer',
    'Choose a parting phrase based on when you will next meet',
    'Handle thanks and apologies in the right register'
  ],
  blocks: [
    { title: 'Greeting is not optional in France',
      body: 'Greeting carries close to the force of an obligation. ' +
            'Walking into a shop and starting to browse in silence, or riding a lift without a word, ' +
            'reads as rude rather than merely quiet. The upside is that a single Bonjour changes how you are treated — ' +
            'few words in any language pay off so well.' },
    { title: 'Greetings on arrival' },
    { title: 'Asking how someone is',
      intro: 'Three levels of politeness. Choose by how close you are.' },
    { title: 'Parting',
      intro: 'Which one you use depends on when you expect to meet again.' },
    { title: 'Thanks and apologies' },
    { title: 'Conversation: at the bakery',
      scene: 'A bakery in the morning. The exchange between customer and staff is almost formulaic.' },
    { title: 'la bise — greeting cheek to cheek',
      body: 'Between people who know each other, greetings involve touching cheeks and making a small kiss sound. ' +
            'The lips do not actually touch the other person.',
      list: ['The number varies by region: two in Paris, three in the south, four in some areas',
             'Men usually shake hands. Close family or lifelong friends may do la bise',
             'A first business meeting is a handshake. La bise comes once you are friends',
             'When unsure, let the other person lead: a hand means a handshake, a leaning cheek means la bise'] },
    { title: 'Check yourself',
      questions: [
        { q: "It's 9pm and you are leaving a friend's dinner. At the door you say…",
          options: ['Bonne nuit', 'Bonsoir', 'Bonne soirée', 'Bonjour'],
          why: 'Bonne soirée. Bonne nuit is only for going to sleep, and Bonsoir is for arriving.' },
        { q: 'What is the standard reply to Merci?',
          options: ['De rien', 'Pardon', 'Ça va', 'Salut'],
          why: 'De rien, or the more formal Je vous en prie.' },
        { q: 'You bump into someone in a crowd. You say…',
          options: ['Excusez-moi', 'Pardon', "S'il vous plaît", 'Bonjour'],
          why: 'Pardon is for something already done. Excusez-moi precedes a request or an interruption.' },
        { q: 'You agree to meet again the same afternoon and part. You say…',
          options: ['À demain', 'À bientôt', "À tout à l'heure", 'Au revoir'],
          why: "À tout à l'heure means later the same day. À bientôt leaves the date open." }
      ] }
  ]
};

window.EN_4 = {
  goals: [
    'Say 0 to 20 without hesitating',
    'Build 21 to 69 from tens and units',
    'Decode the arithmetic French uses for 70 to 99',
    'Understand and give prices, ages, and phone numbers'
  ],
  blocks: [
    { title: '0 to 20',
      intro: 'Pure memorisation. There is no pattern below 20, so learn them as sounds.' },
    { title: '17, 18 and 19 are sums',
      body: 'Like English seventeen and eighteen, French switches to "ten plus n" at 17. ' +
            'The catch is that the x of dix changes sound along the way.',
      list: ['17 = dix-sept — the x is an /s/',
             '18 = dix-huit — the x turns into a /z/',
             '19 = dix-neuf — the x turns into a /z/',
             '6 is /sis/ alone, but six ans links into "see-ZAHN"'] },
    { title: 'The tens (20 to 60)',
      intro: 'So far so English — each ten has its own word up to 60.' },
    { title: 'Building 21 to 69',
      intro: 'Join tens and units with a hyphen. The only irregularity is that 1 takes et.',
      items: ['only 1 takes et', null, null, 'only 1 takes et', null, null, null, null, null] },
    { title: '70 to 99 — the part that surprises everyone',
      body: 'From 70 French stops inventing words and starts calculating. ' +
            'Belgian and Swiss French do have ordinary words (septante, nonante), but France does not use them. ' +
            'Expect to do arithmetic in your head until it becomes automatic.',
      list: ['70 = soixante-dix — 60 + 10',
             '71 = soixante-et-onze — 60 + 11',
             '75 = soixante-quinze — 60 + 15',
             '80 = quatre-vingts — 4 × 20, and it takes a plural s',
             '81 = quatre-vingt-un — 4×20 + 1, the s disappears and no et appears',
             '90 = quatre-vingt-dix — 4×20 + 10',
             '95 = quatre-vingt-quinze — 4×20 + 15',
             '99 = quatre-vingt-dix-neuf — 4×20 + 10 + 9'] },
    { title: '70 to 100',
      items: ['60+10', '60+11', '60+15', '4×20', '4×20+1', '4×20+10', '4×20+15', '4×20+10+9', null] },
    { title: 'Numbers in use' },
    { title: 'Conversation: at the market',
      scene: 'Sunday morning market. Buying apples.' },
    { title: 'Check yourself',
      questions: [
        { q: 'How do you say 80 in French?',
          options: ['octante', 'huitante', 'quatre-vingts', 'soixante-vingt'],
          why: '4 × 20 gives quatre-vingts. The s appears only at exactly 80.' },
        { q: 'How do you say "I am 30 years old"?',
          options: ['Je suis trente', 'Je suis trente ans', "J'ai trente ans", "J'ai trente"],
          why: 'Age uses avoir, and ans cannot be dropped.' },
        { q: 'How is 75 built?',
          options: ['soixante-quinze', 'septante-cinq', 'sept-cinq', 'quatre-vingt-quinze'],
          why: '60 + 15. septante is Belgian and Swiss, not French.' },
        { q: 'Why does 21 contain et?',
          options: ['Every number above 20 has it', 'Only when the unit is 1', 'Only for odd numbers', 'There is no rule'],
          why: 'vingt-et-un, trente-et-un, and so on — but 81 is quatre-vingt-un, with no et.' }
      ] }
  ]
};

window.EN_5 = {
  goals: [
    'Produce all six forms of avoir',
    'Give your profession with the right masculine or feminine form',
    'Build negative sentences with ne ... pas',
    'String together name, nationality, age, and job'
  ],
  blocks: [
    { title: 'The verb avoir (to have)',
      intro: 'As important as être. Age, hunger, and cold all use avoir where English would use "be".',
      note: "je ai is impossible — always j'ai. tu as, il a, and ils ont are all short and easy to miss, " +
            'so learn them attached to their subjects. ils ont ("eel-ZON") and ils sont ("eel-SON") mean opposite things.' },
    { title: 'Where English "be" becomes avoir',
      body: 'English speakers have to switch deliberately here, because the mapping is not intuitive.',
      list: ["J'ai 25 ans — I am 25",
             "J'ai faim — I am hungry",
             "J'ai soif — I am thirsty",
             "J'ai froid / chaud — I am cold / hot",
             "J'ai peur — I am afraid",
             "J'ai sommeil — I am sleepy",
             'Each one literally means "I have…". Think of hunger as something you possess'] },
    { title: 'Everyday expressions with avoir' },
    { title: 'Professions (masculine / feminine)',
      intro: 'Tapping plays the masculine. Feminine forms follow four patterns.',
      items: ['doctor (same both)', 'teacher → professeure', 'student → étudiante', 'lawyer → avocate',
              'cook → cuisinière', 'engineer → ingénieure', 'police officer → policière', 'mechanic → mécanicienne',
              'writer → écrivaine', 'artist (same both)', 'musician → musicienne', 'photographer (same both)',
              'pilot (same both)', 'nurse → infirmière', 'sales assistant → vendeuse', 'waiter → serveuse'] },
    { title: 'Four feminine patterns',
      list: ['+e — étudiant → étudiante, avocat → avocate. The preceding consonant becomes audible',
             '-ier → -ière — cuisinier → cuisinière, infirmier → infirmière',
             '-ien → -ienne — musicien → musicienne, mécanicien → mécanicienne',
             '-eur → -euse — vendeur → vendeuse, serveur → serveuse',
             'Words already ending in -e do not change: artiste, pilote, photographe, journaliste'] },
    { title: 'Negation — wrap the verb in ne and pas',
      body: 'Where English has a single not, French has two words that sandwich the verb. ' +
            'That wrapping instinct is the foundation of French negation.',
      list: ['Je parle français → Je ne parle pas français',
             "J'ai un chien → Je n'ai pas de chien — ne shortens to n' before a vowel",
             'Under negation un / une / des all become de',
             'In speech ne almost always drops: je sais pas, j\'ai pas faim. Always write it though',
             'After être the article does not change: je ne suis pas étudiant'] },
    { title: 'Try negating' },
    { title: 'Conversation: putting an introduction together',
      scene: 'A welcome drink at a new job. Introducing yourself to a colleague.' },
    { title: 'Check yourself',
      questions: [
        { q: 'How do you say "I am a student"?',
          options: ['Je suis un étudiant', 'Je suis étudiant', "J'ai étudiant", 'Je suis le étudiant'],
          why: 'No article before a profession. The English "a student" is what leads people astray.' },
        { q: "What is the negative of J'ai un chien?",
          options: ["Je n'ai pas un chien", "Je n'ai pas de chien", 'Je ne suis pas chien', "J'ai pas un chien"],
          why: 'Negation turns un / une / des into de.' },
        { q: 'How do you say "I am hungry"?',
          options: ['Je suis faim', "J'ai faim", 'Je fais faim', 'Il y a faim'],
          why: 'Hunger, thirst, cold, and age all use avoir.' },
        { q: 'What is the difference between ils ont and ils sont?',
          options: ['They are the same', 'ont is "have", sont is "are"', 'Different tenses', 'Different politeness'],
          why: 'ont is avoir, sont is être. They differ only by a voiced consonant, so listen carefully.' }
      ] }
  ]
};

window.EN_6 = {
  goals: [
    'Learn the six -er endings and conjugate any verb in the group',
    'Hear why -e, -es, -e and -ent are indistinguishable',
    'Know where liaison happens and where it must not',
    'Talk about your hobbies and daily activities'
  ],
  blocks: [
    { title: '-er verbs — around 90% of all French verbs',
      body: 'The overwhelming majority of French verbs end in -er, and they all conjugate identically. ' +
            'Learning six endings once unlocks thousands of verbs. ' +
            'Nothing else in French pays back the effort this well.',
      list: ['Drop -er to get the stem, then add the six endings',
             'parler → parl- + e / es / e / ons / ez / ent',
             'Four of them — -e, -es, -e, -ent — sound exactly alike. The page distinguishes them; the ear cannot',
             'Only nous (-ons) and vous (-ez) actually change the sound'] },
    { title: 'parler (to speak)',
      intro: 'These endings are shared by every regular -er verb.',
      note: 'je parle, tu parles, il parle and ils parlent are all "parl". Even native speakers mis-spell them. ' +
            'In speech the subject is your only clue.' },
    { title: 'Common -er verbs',
      intro: 'All conjugate like parler. Tap to hear the infinitive.',
      items: ['to speak', 'to work', 'to live', 'to study', 'to like, to love', 'to listen',
              'to watch', 'to eat', 'to dance', 'to sing', 'to play', 'to look for',
              'to walk', 'to travel', 'to buy', 'to give'] },
    { title: 'Liaison — where word boundaries disappear',
      body: 'This is the main reason French sounds fast. ' +
            'A normally silent final consonant wakes up when the next word starts with a vowel, and joins onto it. ' +
            'The written boundaries and the spoken ones stop lining up, which is why a sentence can sound like one long word.',
      list: ['vous êtes — "voo-ZET", not "voo ET". The s returns as a /z/',
             'nous avons — "noo-za-VON"',
             'les amis — "lay-za-MEE"',
             'un ami — "uh-na-MEE"',
             'petit ami — "puh-tee-ta-MEE"',
             's, x and z all come back as a /z/ sound',
             'Never link after et: et un stays "ay UH"'] },
    { title: 'Phrases built on liaison',
      intro: 'Look at the katakana and you can see the word boundaries dissolving.' },
    { title: 'Where liaison must not happen',
      list: ['After et — et un is always two separate pieces',
             'Before an aspirated h — les haricots stays "lay ah-ree-KO"',
             'Between a noun subject and its verb — Les enfants | arrivent',
             'Between a singular noun and its adjective — un étudiant | intelligent',
             'When unsure, do not link. Over-linking sounds worse than under-linking'] },
    { title: 'Hobbies and routines' },
    { title: 'Conversation: weekend plans',
      scene: 'Friday at work. Two colleagues chatting.' },
    { title: 'Check yourself',
      questions: [
        { q: 'Which ending goes with nous for an -er verb?',
          options: ['-ez', '-ons', '-ent', '-es'],
          why: 'nous parlons. Only nous (-ons) and vous (-ez) change the sound.' },
        { q: 'Which one sounds different from the others?',
          options: ['je parle', 'tu parles', 'nous parlons', 'ils parlent'],
          why: 'The other three are all "parl". Only nous parlons differs.' },
        { q: 'Where does liaison NOT happen?',
          options: ['vous êtes', 'les amis', 'et un', 'nous avons'],
          why: 'Never after et.' },
        { q: 'How do you say "I play the piano"?',
          options: ['Je joue au piano', 'Je joue du piano', 'Je joue le piano', 'Je joue piano'],
          why: 'Instruments take jouer de, and de + le contracts to du. Sports take jouer à.' }
      ] }
  ]
};
