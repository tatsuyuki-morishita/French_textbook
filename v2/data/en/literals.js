/* ============================================================
   English content layer — literal glosses
   ------------------------------------------------------------
   The `literal` field shows what a phrase says word for word,
   which is usually the point where the idiom stops making sense
   in translation. Keyed by the French itself rather than by
   index, since these are scattered across many blocks.
   ============================================================ */

window.EN_LITERALS = {
  "Je m'appelle Marie":                       'I call myself Marie',
  'Enchanté':                                 'enchanted',
  'Pas mal':                                  'not bad',
  'Au revoir':                                'until the re-seeing',
  'De rien':                                  'of nothing',
  "J'ai vingt-cinq ans":                      'I have twenty-five years',
  "J'ai faim":                                'I have hunger',
  "Qu'est-ce que vous faites dans la vie ?":  'what do you do in life',
  "Pour aller à la poste, s'il vous plaît ?": 'in order to go to the post office, please',
  'Ça ne me plaît pas trop':                  'it does not please me much',
  "Ça te dit d'aller prendre un café ?":      'does it say to you to go take a coffee',
  "À ta place, j'irais voir un médecin":      'in your place, I would go see a doctor',
  'Tu me plais beaucoup':                     'you please me a lot',
  'Tu me manques':                            'you are missing from me',
  'Le coup de foudre':                        'the strike of lightning',
  'Avoir la chair de poule':                  'to have hen flesh',
  'Il fait un froid de canard':               'it makes a cold of duck',
  'Je ne sais quoi':                          'I do not know what',
  'La vache !':                               'the cow',
  'Punaise !':                                'drawing pin, bedbug',
  'Laisse tomber':                            'let it fall',
  'Ça déchire !':                             'it tears',
  'Nickel !':                                 'nickel (the metal)',
  'Ça marche':                                'it walks',
  'Santé !':                                  'health',
  'À vos souhaits !':                         'to your wishes',
  "N'importe quoi !":                         'no matter what',
  'Ça vaut le coup':                          'it is worth the blow'
};

/* Fold them into the section data the same way i18n.js does. */
(function () {
  if (!window.CURRICULUM) return;
  var map = window.EN_LITERALS;
  window.CURRICULUM.sections.forEach(function (s) {
    var sec = window['S' + s.id];
    if (!sec) return;
    (sec.blocks || []).forEach(function (b) {
      (b.items || []).forEach(function (i) {
        if (i.literal && map[i.fr]) i.literal_en = map[i.fr];
      });
    });
  });
})();
