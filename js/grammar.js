/* ============================================================
   grammar.js — which rules is this phrase actually using?
   ------------------------------------------------------------
   Rather than hand-authoring a grammar note on every card, each
   French phrase is matched against a conservative pattern list.
   A phrase then links to the reference entries it demonstrates,
   so the explanation appears on the card AND stays reachable in
   one place.

   Patterns are deliberately narrow. A rule that fires on half the
   corpus teaches nothing, so anything that common (plain articles,
   ordinary present-tense verbs) is left out on purpose.

   An item may still set `g: ['etre', 'negation']` by hand; that
   list wins over detection.
   ============================================================ */

(function () {
  'use strict';

  /* Ordered by usefulness: when a phrase matches more rules than a
     card can show, the earlier ones win. */
  /* JS \b is ASCII-only, so it does not fire next to an accented
     letter: /\bmal\s+à\b/ never matched "mal à la tête". Anywhere an
     accent can sit at the edge of a match, use an explicit boundary. */
  var B = "(?:^|[\\s'\u2019(])";      /* start, space, apostrophe, bracket */
  var E = "(?=$|[\\s'\u2019.,!?;:)])"; /* end, space, punctuation */

  function rx(body, flags) { return new RegExp(body, flags || 'i'); }

  var DETECTORS = [
    /* --- structures worth pointing at --- */
    /* covers the spoken form too, where ne is dropped: "ça va pas" */
    { id: 'negation',        re: rx(B + "(?:ne|n[' \u2019]|pas|jamais|plus|rien|personne)" + E),
                             and: rx(B + "(?:pas|jamais|plus|rien|personne|que)" + E) },
    { id: 'negation-others', re: rx(B + "(?:ne|n[']?)\\s*\\w*\\s*(?:jamais|plus|rien|personne)" + E) },
    { id: 'passe-compose',   re: rx(B + "(?:ai|as|avons|avez|ont|suis|es|est|sommes|\u00eates|sont)\\s+\\w+(?:\u00e9|\u00e9e|\u00e9s|\u00e9es|i|is|it|u|us|ue)" + E) },
    { id: 'futur',           re: /\b(vais|vas|va|allons|allez|vont)\s+\w+(er|ir|re)\b/i },
    { id: 'conditionnel',    re: /\b\w*(voudrai|devrai|pourrai|aimerai|serai|aurai|irai|faudrai)(s|t|ent|ez|ons)\b/i },
    { id: 'imparfait',       re: /\b(étais|était|étaient|étions|étiez|avais|avait|avaient|faisais|faisait|allais|allait|habitais|habitait|jouais|jouait|lisait|mangeait)\b/i },
    { id: 'pronominal',      re: /\b(je\s+m[e']|tu\s+t[e']|il\s+s[e']|elle\s+s[e']|on\s+s[e']|nous\s+nous|vous\s+vous|ils\s+s[e']|se\s+\w+er)\b/i },
    { id: 'object-pronouns', re: /\b(je|tu|il|elle|on|nous|vous|ils)\s+(le|la|l'|les|lui|leur|me|te|m'|t')\s*\w/i },
    { id: 'y-en',            re: /\b(on y|j'y|y va|j'en|en ai|en veux)\b/i },

    /* --- frequent frames --- */
    { id: 'il-y-a',          re: /\bil y a\b|\bil n'y a\b|\by a pas\b/i },
    { id: 'avoir-mal',       re: rx("mal\\s+(?:\u00e0|au|aux)" + E) },
    { id: 'depuis',          re: /\bdepuis\b/i },
    { id: 'jouer',           re: /\b(jou\w+|fai\w+|faire)\s+(au|aux|du|de la|de l')\b/i },
    { id: 'quantity',        re: /\b(beaucoup|peu|trop|assez|combien)\s+d[e']/i },
    { id: 'time',            re: /\b(heures?|midi|minuit|quart|demie?)\b/i },
    { id: 'places',          re: /\b(en|au|aux)\s+(France|Italie|Japon|Canada|Espagne|Angleterre|Allemagne|Chine|Grèce|Australie|Russie|Brésil|États-Unis)\b/ },

    /* --- word-level --- */
    { id: 'imperative',      re: rx(B + "(?:allez|tournez|prenez|continuez|excusez|r\u00e9p\u00e9tez|reposez|donne|donnez|\u00e9coutez|regardez|venez|attendez|asseyez)" + E) },
    { id: 'c-est',           re: rx(B + "(?:c'est|ce n'est|c\u2019est|ce sont)" + E) },
    { id: 'adjectives',      re: rx(B + "(?:bonne|bon|belle|beau|grande|grand|petite|petit|nouvelle|nouveau|vieille|vieux|premi\u00e8re|premier)\\s+\\w") },
    { id: 'contractions',    re: rx(B + "(?:au|aux|du|des)\\s+\\w") },
    { id: 'possessive',      re: /\b(mon|ma|mes|ton|ta|tes|son|sa|ses|notre|nos|votre|vos|leur|leurs)\s+\w/i },
    { id: 'articles',        re: /\b(du|de la|de l')\s+\w/i },
    /* only inside an actual question, and never on the que of parce que */
    { id: 'question-words',  re: rx(B + "(?:qui|quoi|o\u00f9|quand|comment|pourquoi|combien|quel|quelle|quels|quelles|qu'est-ce)" + E),
                             and: /\?/ },
    { id: 'question-forms',  re: /\?/ },

    /* --- verbs, checked last so a structure above wins the slot --- */
    { id: 'etre',            re: rx(B + "(?:je suis|tu es|il est|elle est|on est|nous sommes|vous \u00eates|ils sont|elles sont|est|sont|\u00e9tait|\u00e9taient)" + E) },
    { id: 'avoir',           re: /\b(j'ai|tu as|il a|elle a|on a|nous avons|vous avez|ils ont|elles ont)\b/i },
    { id: 'aller',           re: /\b(je vais|tu vas|il va|elle va|on va|nous allons|vous allez|ils vont)\b/i },
    { id: 'faire',           re: /\b(je fais|tu fais|il fait|elle fait|on fait|nous faisons|vous faites|ils font)\b/i },
    { id: 'prendre',         re: /\b(prends|prend|prenons|prenez|prennent|prendre)\b/i },
    { id: 'elision',         re: /\b[jlmtsndc]'/i },
    { id: 'liaison',         re: null },   /* filled from the phonetic analysis */
    { id: 'silent-letters',  re: null }
  ];

  var byId = null;
  function index() {
    if (byId) return byId;
    byId = {};
    (window.GRAMMAR ? window.GRAMMAR.entries : []).forEach(function (e) { byId[e.id] = e; });
    return byId;
  }

  function entry(id) { return index()[id] || null; }

  /**
   * Grammar entry ids demonstrated by a phrase.
   * @param {string} text     the French
   * @param {object} analysis Phonetics.analyze() result, for liaison
   * @param {string[]} manual an item's hand-written `g` list, which wins
   * @param {number} limit    how many to return
   */
  function detect(text, analysis, manual, limit) {
    limit = limit || 3;
    var known = index();

    if (manual && manual.length) {
      return manual.filter(function (id) { return known[id]; }).slice(0, limit);
    }

    var s = String(text || '');
    var hits = [];

    for (var i = 0; i < DETECTORS.length && hits.length < limit; i++) {
      var d = DETECTORS[i];
      if (!known[d.id] || hits.indexOf(d.id) >= 0) continue;

      var ok;
      if (d.id === 'liaison')        ok = !!(analysis && analysis.hasLiaison);
      else if (d.id === 'silent-letters') ok = false;   /* too universal to be worth a slot */
      else if (!d.re)                ok = false;
      else                           ok = d.re.test(s) && (!d.and || d.and.test(s));

      if (ok) hits.push(d.id);
    }
    return hits;
  }

  function categories() {
    return (window.GRAMMAR ? window.GRAMMAR.categories : []).map(function (c) {
      return {
        id: c.id,
        title: c.title,
        entries: (window.GRAMMAR.entries || []).filter(function (e) { return e.cat === c.id; })
      };
    }).filter(function (c) { return c.entries.length; });
  }

  /** Entries taught in a given section, for the section footer. */
  function forSection(id) {
    return (window.GRAMMAR ? window.GRAMMAR.entries : []).filter(function (e) {
      return (e.sections || []).indexOf(id) >= 0;
    });
  }

  window.Grammar = {
    detect: detect,
    entry: entry,
    categories: categories,
    forSection: forSection,
    count: function () { return (window.GRAMMAR ? window.GRAMMAR.entries.length : 0); }
  };
})();
