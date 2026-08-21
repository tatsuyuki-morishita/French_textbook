/* ============================================================
   lexicon.js — exception dictionary
   ------------------------------------------------------------
   Consulted before the rule engine. Holds the high-frequency
   words whose spelling lies about their sound, so the rules in
   phonetics.js can stay simple and predictable.

   IPA is stored without syllable dots; phonetics.js syllabifies.
   ============================================================ */

window.LEXICON = {

  /* ---------- être / avoir / aller / faire ---------- */
  'suis': 'sɥi', 'es': 'ɛ', 'est': 'ɛ', 'sommes': 'sɔm', 'êtes': 'ɛt', 'sont': 'sɔ̃',
  'ai': 'e', 'as': 'a', 'a': 'a', 'avons': 'avɔ̃', 'avez': 'ave', 'ont': 'ɔ̃',
  'vais': 'vɛ', 'vas': 'va', 'va': 'va', 'allons': 'alɔ̃', 'allez': 'ale', 'vont': 'vɔ̃',
  'fais': 'fɛ', 'fait': 'fɛ', 'faisons': 'fəzɔ̃', 'faites': 'fɛt', 'font': 'fɔ̃',
  'été': 'ete', 'eu': 'y', 'être': 'ɛtʁ', 'avoir': 'avwaʁ', 'faire': 'fɛʁ', 'aller': 'ale',

  /* -er words short enough that the r stays audible */
  'mer': 'mɛʁ', 'cher': 'ʃɛʁ', 'chère': 'ʃɛʁ', 'fer': 'fɛʁ', 'hier': 'jɛʁ',
  'hiver': 'ivɛʁ', 'amer': 'amɛʁ', 'fier': 'fjɛʁ', 'enfer': 'ɑ̃fɛʁ', 'ver': 'vɛʁ',
  'super': 'sypɛʁ', 'hôtel': 'otɛl',

  /* ---------- irregular everyday words ---------- */
  'monsieur': 'məsjø', 'messieurs': 'mesjø',
  'madame': 'madam', 'mademoiselle': 'madmwazɛl',
  'femme': 'fam', 'femmes': 'fam',
  'fils': 'fis',
  'temps': 'tɑ̃',
  'aujourd\'hui': 'oʒuʁdɥi', 'aujourdhui': 'oʒuʁdɥi',
  'pays': 'pei',
  'second': 'səgɔ̃', 'seconde': 'səgɔ̃d',
  'automne': 'otɔn',
  'oignon': 'ɔɲɔ̃',
  'gentil': 'ʒɑ̃ti', 'gentille': 'ʒɑ̃tij',
  'œil': 'œj', 'oeil': 'œj', 'yeux': 'jø',
  'œuf': 'œf', 'oeuf': 'œf', 'œufs': 'ø', 'oeufs': 'ø',
  'os': 'ɔs',
  'examen': 'ɛgzamɛ̃',
  'parfum': 'paʁfœ̃',
  'sculpture': 'skyltyʁ',
  'clef': 'kle',
  'chef': 'ʃɛf',
  'neuf': 'nœf',
  'bœuf': 'bœf', 'boeuf': 'bœf',
  'tabac': 'taba',
  'estomac': 'ɛstɔma',
  'porc': 'pɔʁ',
  'nerf': 'nɛʁ',
  'assez': 'ase',
  'chez': 'ʃe',
  'nez': 'ne',
  'riz': 'ʁi',
  'gars': 'ga',

  /* -ill- pronounced /il/ rather than /ij/ */
  'ville': 'vil', 'villes': 'vil', 'village': 'vilaʒ',
  'mille': 'mil',
  'tranquille': 'tʁɑ̃kil',
  'million': 'miljɔ̃',

  /* ---------- numbers ---------- */
  'un': 'œ̃', 'une': 'yn',
  'deux': 'dø', 'trois': 'tʁwa', 'quatre': 'katʁ', 'cinq': 'sɛ̃k',
  'six': 'sis', 'sept': 'sɛt', 'huit': 'ɥit', 'dix': 'dis',
  'onze': 'ɔ̃z', 'douze': 'duz', 'treize': 'tʁɛz', 'quatorze': 'katɔʁz',
  'quinze': 'kɛ̃z', 'seize': 'sɛz',
  'vingt': 'vɛ̃', 'trente': 'tʁɑ̃t', 'quarante': 'kaʁɑ̃t',
  'cinquante': 'sɛ̃kɑ̃t', 'soixante': 'swasɑ̃t',
  'cent': 'sɑ̃', 'cents': 'sɑ̃', 'premier': 'pʁəmje', 'première': 'pʁəmjɛʁ',
  'zéro': 'zeʁo', 'mille': 'mil',
  /* the x of deux/six/dix voices to /z/ before -ième */
  'deuxième': 'døzjɛm', 'sixième': 'sizjɛm', 'dixième': 'dizjɛm',
  'neuvième': 'nœvjɛm', 'millier': 'milje', 'million': 'miljɔ̃', 'milliard': 'miljaʁ',
  'millions': 'miljɔ̃', 'milliards': 'miljaʁ',
  /* the x of dix turns to /z/ in 18 and 19 but stays /s/ in 17 */
  'dix-sept': 'disɛt', 'dix-huit': 'dizɥit', 'dix-neuf': 'diznœf',
  'quatre-vingts': 'katʁəvɛ̃', 'quatre-vingt': 'katʁəvɛ̃',
  'soixante-dix': 'swasɑ̃tdis', 'quatre-vingt-dix': 'katʁəvɛ̃dis',
  'vingt-et-un': 'vɛ̃teœ̃', 'trente-et-un': 'tʁɑ̃teœ̃', 'quarante-et-un': 'kaʁɑ̃teœ̃',
  'soixante-et-onze': 'swasɑ̃teɔ̃z', 'quatre-vingt-un': 'katʁəvɛ̃œ̃',
  'quatre-vingt-dix-neuf': 'katʁəvɛ̃diznœf',

  /* ---------- -ent / -ant words that ARE pronounced ---------- */
  'comment': 'kɔmɑ̃', 'souvent': 'suvɑ̃', 'vraiment': 'vʁɛmɑ̃',
  'maintenant': 'mɛ̃tnɑ̃', 'argent': 'aʁʒɑ̃', 'moment': 'mɔmɑ̃',
  'appartement': 'apaʁtəmɑ̃', 'document': 'dɔkymɑ̃', 'content': 'kɔ̃tɑ̃',
  'contente': 'kɔ̃tɑ̃t', 'différent': 'difeʁɑ̃', 'présent': 'pʁezɑ̃',
  'accent': 'aksɑ̃', 'dent': 'dɑ̃', 'lent': 'lɑ̃', 'client': 'klijɑ̃',
  'seulement': 'sœlmɑ̃', 'également': 'egalmɑ̃', 'évidemment': 'evidamɑ̃',
  'récemment': 'ʁesamɑ̃', 'lentement': 'lɑ̃tmɑ̃', 'doucement': 'dusmɑ̃',
  'absolument': 'apsɔlymɑ̃', 'exactement': 'ɛgzaktəmɑ̃',

  /* ---------- verb 3rd-person plural: -ent is SILENT ---------- */
  'parlent': 'paʁl', 'aiment': 'ɛm', 'habitent': 'abit', 'travaillent': 'tʁavaj',
  'écoutent': 'ekut', 'regardent': 'ʁəgaʁd', 'mangent': 'mɑ̃ʒ', 'jouent': 'ʒu',
  'étudient': 'etydi', 'arrivent': 'aʁiv', 'restent': 'ʁɛst', 'entrent': 'ɑ̃tʁ',
  'cherchent': 'ʃɛʁʃ', 'trouvent': 'tʁuv', 'donnent': 'dɔn', 'portent': 'pɔʁt',
  's\'appellent': 'sapɛl', 'appellent': 'apɛl',
  'veulent': 'vœl', 'peuvent': 'pœv', 'doivent': 'dwav', 'prennent': 'pʁɛn',
  'viennent': 'vjɛn', 'tiennent': 'tjɛn', 'boivent': 'bwav', 'voient': 'vwa',
  'savent': 'sav', 'disent': 'diz', 'lisent': 'liz', 'écrivent': 'ekʁiv',
  'sortent': 'sɔʁt', 'partent': 'paʁt', 'dorment': 'dɔʁm', 'ouvrent': 'uvʁ',
  'attendent': 'atɑ̃d', 'vendent': 'vɑ̃d', 'répondent': 'ʁepɔ̃d',
  'finissent': 'finis', 'choisissent': 'ʃwazis', 'connaissent': 'kɔnɛs',
  'mettent': 'mɛt', 'sentent': 'sɑ̃t', 'servent': 'sɛʁv', 'suivent': 'sɥiv',
  'vivent': 'viv', 'rient': 'ʁi', 'croient': 'kʁwa', 'envoient': 'ɑ̃vwa',

  /* ---------- common function words ---------- */
  'je': 'ʒə', 'tu': 'ty', 'il': 'il', 'elle': 'ɛl', 'on': 'ɔ̃',
  'nous': 'nu', 'vous': 'vu', 'ils': 'il', 'elles': 'ɛl',
  'le': 'lə', 'la': 'la', 'les': 'le', 'un': 'œ̃', 'des': 'de', 'du': 'dy',
  'de': 'də', 'et': 'e', 'ou': 'u', 'où': 'u', 'à': 'a', 'au': 'o', 'aux': 'o',
  'ce': 'sə', 'cet': 'sɛt', 'cette': 'sɛt', 'ces': 'se',
  'mon': 'mɔ̃', 'ma': 'ma', 'mes': 'me',
  'ton': 'tɔ̃', 'ta': 'ta', 'tes': 'te',
  'son': 'sɔ̃', 'sa': 'sa', 'ses': 'se',
  'notre': 'nɔtʁ', 'nos': 'no', 'votre': 'vɔtʁ', 'vos': 'vo',
  'leur': 'lœʁ', 'leurs': 'lœʁ',
  'qui': 'ki', 'que': 'kə', 'quoi': 'kwa', 'quand': 'kɑ̃',
  'quel': 'kɛl', 'quelle': 'kɛl', 'quels': 'kɛl', 'quelles': 'kɛl',
  'pourquoi': 'puʁkwa', 'parce': 'paʁs',
  "qu'est-ce": 'kɛs', 'est-ce': 'ɛs', "qu'est": 'kɛ',
  'comprends': 'kɔ̃pʁɑ̃', 'comprend': 'kɔ̃pʁɑ̃', 'comprenez': 'kɔ̃pʁəne',
  'oui': 'wi', 'non': 'nɔ̃', 'si': 'si',
  'pas': 'pa', 'ne': 'nə', 'plus': 'ply', 'très': 'tʁɛ',
  'beaucoup': 'boku', 'trop': 'tʁo', 'peu': 'pø', 'aussi': 'osi',
  'bien': 'bjɛ̃', 'mal': 'mal', 'mieux': 'mjø',
  'toujours': 'tuʒuʁ', 'jamais': 'ʒamɛ', 'encore': 'ɑ̃kɔʁ', 'déjà': 'deʒa',
  'ici': 'isi', 'là': 'la', 'dans': 'dɑ̃', 'sur': 'syʁ', 'sous': 'su',
  'avec': 'avɛk', 'sans': 'sɑ̃', 'pour': 'puʁ', 'par': 'paʁ',
  'chez': 'ʃe', 'entre': 'ɑ̃tʁ', 'vers': 'vɛʁ', 'depuis': 'dəpɥi',
  'mais': 'mɛ', 'donc': 'dɔ̃k', 'alors': 'alɔʁ', 'puis': 'pɥi',
  'tout': 'tu', 'toute': 'tut', 'tous': 'tu', 'toutes': 'tut',
  'même': 'mɛm', 'autre': 'otʁ', 'autres': 'otʁ',
  'moi': 'mwa', 'toi': 'twa', 'lui': 'lɥi', 'eux': 'ø',
  'rien': 'ʁjɛ̃', 'quelque': 'kɛlkə', 'chose': 'ʃoz',
  'monsieur': 'məsjø',

  /* ---------- greetings and courtesy ---------- */
  'bonjour': 'bɔ̃ʒuʁ', 'bonsoir': 'bɔ̃swaʁ', 'salut': 'saly',
  'merci': 'mɛʁsi', 'pardon': 'paʁdɔ̃', 'excusez': 'ɛkskyze',
  'plaît': 'plɛ', 'plait': 'plɛ',
  'revoir': 'ʁəvwaʁ', 'bientôt': 'bjɛ̃to', 'demain': 'dəmɛ̃',
  'enchanté': 'ɑ̃ʃɑ̃te', 'enchantée': 'ɑ̃ʃɑ̃te',
  'désolé': 'dezɔle', 'désolée': 'dezɔle',
  'appelle': 'apɛl', 'appelles': 'apɛl', 'appelez': 'aple',

  /* ---------- days, months ---------- */
  'lundi': 'lœ̃di', 'mardi': 'maʁdi', 'mercredi': 'mɛʁkʁədi',
  'jeudi': 'ʒødi', 'vendredi': 'vɑ̃dʁədi', 'samedi': 'samdi', 'dimanche': 'dimɑ̃ʃ',
  'janvier': 'ʒɑ̃vje', 'février': 'fevʁije', 'mars': 'maʁs', 'avril': 'avʁil',
  'mai': 'mɛ', 'juin': 'ʒɥɛ̃', 'juillet': 'ʒɥijɛ', 'août': 'ut',
  'septembre': 'sɛptɑ̃bʁ', 'octobre': 'ɔktɔbʁ', 'novembre': 'nɔvɑ̃bʁ', 'décembre': 'desɑ̃bʁ',

  /* ---------- nationalities and places ---------- */
  'français': 'fʁɑ̃sɛ', 'française': 'fʁɑ̃sɛz', 'france': 'fʁɑ̃s',
  'anglais': 'ɑ̃glɛ', 'anglaise': 'ɑ̃glɛz',
  'japonais': 'ʒapɔnɛ', 'japonaise': 'ʒapɔnɛz', 'japon': 'ʒapɔ̃',
  'américain': 'ameʁikɛ̃', 'américaine': 'ameʁikɛn',
  'allemand': 'almɑ̃', 'allemande': 'almɑ̃d',
  'espagnol': 'ɛspaɲɔl', 'espagnole': 'ɛspaɲɔl',
  'italien': 'italjɛ̃', 'italienne': 'italjɛn',
  'chinois': 'ʃinwa', 'chinoise': 'ʃinwaz',
  'canadien': 'kanadjɛ̃', 'canadienne': 'kanadjɛn',
  'paris': 'paʁi', 'tokyo': 'tɔkjo', 'londres': 'lɔ̃dʁ',

  /* ---------- frequent nouns / adjectives ---------- */
  'homme': 'ɔm', 'hommes': 'ɔm', 'enfant': 'ɑ̃fɑ̃', 'enfants': 'ɑ̃fɑ̃',
  'ami': 'ami', 'amie': 'ami', 'amis': 'ami',
  'eau': 'o', 'pain': 'pɛ̃', 'vin': 'vɛ̃', 'café': 'kafe', 'thé': 'te',
  'maison': 'mɛzɔ̃', 'travail': 'tʁavaj', 'école': 'ekɔl',
  'jour': 'ʒuʁ', 'nuit': 'nɥi', 'matin': 'matɛ̃', 'soir': 'swaʁ',
  'semaine': 'səmɛn', 'mois': 'mwa', 'année': 'ane', 'an': 'ɑ̃',
  'heure': 'œʁ', 'heures': 'œʁ', 'minute': 'minyt',
  'nom': 'nɔ̃', 'prénom': 'pʁenɔ̃', 'âge': 'ɑʒ',
  'grand': 'gʁɑ̃', 'grande': 'gʁɑ̃d', 'petit': 'pəti', 'petite': 'pətit',
  'bon': 'bɔ̃', 'bonne': 'bɔn', 'mauvais': 'movɛ', 'mauvaise': 'movɛz',
  'beau': 'bo', 'belle': 'bɛl', 'nouveau': 'nuvo', 'nouvelle': 'nuvɛl',
  'jeune': 'ʒœn', 'vieux': 'vjø', 'vieille': 'vjɛj',
  'blanc': 'blɑ̃', 'blanche': 'blɑ̃ʃ', 'noir': 'nwaʁ', 'vert': 'vɛʁ',
  'rouge': 'ʁuʒ', 'bleu': 'blø', 'jaune': 'ʒon',
  'patient': 'pasjɑ̃', 'patiente': 'pasjɑ̃t', 'impatient': 'ɛ̃pasjɑ̃',
  'tennis': 'tenis', 'bus': 'bys', 'tunnel': 'tynɛl', 'internet': 'ɛ̃tɛʁnɛt',
  'restaurant': 'ʁɛstoʁɑ̃', 'cinéma': 'sinema', 'théâtre': 'teɑtʁ',
  'gare': 'gaʁ', 'aéroport': 'aeʁɔpɔʁ', 'hôtel': 'otɛl', 'hôpital': 'ɔpital',
  'magasin': 'magazɛ̃', 'marché': 'maʁʃe', 'banque': 'bɑ̃k',
  'voiture': 'vwatyʁ', 'train': 'tʁɛ̃', 'bus': 'bys', 'métro': 'metʁo',
  'famille': 'famij', 'père': 'pɛʁ', 'mère': 'mɛʁ', 'frère': 'fʁɛʁ',
  'sœur': 'sœʁ', 'soeur': 'sœʁ', 'parents': 'paʁɑ̃',
  'monde': 'mɔ̃d', 'chose': 'ʃoz', 'fois': 'fwa', 'vie': 'vi'
};

/* Words whose final -s / -x / -t IS pronounced, against the general rule.
   Kept separate so phonetics.js can consult it during final-consonant handling. */
/* "vingt" is /vɛ̃/ alone but /vɛ̃t/ inside 22-29. */
window.HYPHEN_FORMS = { 'vingt': 'vɛ̃t' };

window.PRONOUNCED_FINAL = new Set([
  'fils', 'os', 'sens', 'ours', 'tous', 'plus', 'mars', 'six', 'dix',
  'bus', 'plus', 'sud', 'ouest', 'est', 'août', 'net', 'chut'
]);

window.lookupLexicon = function (word) {
  if (!word) return null;
  const key = word.toLowerCase();
  return Object.prototype.hasOwnProperty.call(window.LEXICON, key)
    ? window.LEXICON[key]
    : null;
};
