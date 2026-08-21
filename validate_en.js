/* Checks the English content layer lines up with the Japanese sections.
   Index-aligned merges fail silently if a block is added or reordered,
   so this asserts the shapes match before anything reaches the page. */
global.window = {};
require('./js/phonemes.js');
require('./js/lexicon.js');
require('./js/phonetics.js');
require('./data/curriculum.js');
for (const m of window.CURRICULUM.sections) {
  require('./data/sections/s' + String(m.id).padStart(2, '0') + '.js');
}

const fs = require('fs');
const dir = './data/en';
if (fs.existsSync(dir)) {
  for (const f of fs.readdirSync(dir).filter(x => x.endsWith('.js')).sort()) {
    require(dir + '/' + f);
  }
}
require('./js/i18n.js');

const problems = [];
let translated = 0, fields = 0;

for (const m of window.CURRICULUM.sections) {
  const S = window['S' + m.id];
  const EN = window['EN_' + m.id];
  if (!EN) continue;
  translated++;

  const tag = 's' + m.id;
  if (EN.goals && S.goals && EN.goals.length !== S.goals.length) {
    problems.push(`${tag}: ${EN.goals.length} en goals vs ${S.goals.length}`);
  }
  if (EN.blocks && EN.blocks.length !== S.blocks.length) {
    problems.push(`${tag}: ${EN.blocks.length} en blocks vs ${S.blocks.length} source blocks`);
  }

  (EN.blocks || []).forEach((t, i) => {
    const b = S.blocks[i];
    if (!b) { problems.push(`${tag} block${i}: no source block`); return; }
    if (!t) return;

    if (t.items && !b.items) problems.push(`${tag} block${i}(${b.type}): en has items, source does not`);
    if (t.items && b.items && t.items.length !== b.items.length) {
      problems.push(`${tag} block${i}(${b.type}): ${t.items.length} en items vs ${b.items.length}`);
    }
    if (t.questions && b.questions && t.questions.length !== b.questions.length) {
      problems.push(`${tag} block${i}: ${t.questions.length} en questions vs ${b.questions.length}`);
    }
    (t.questions || []).forEach((q, qi) => {
      const sq = b.questions && b.questions[qi];
      if (!sq) return;
      if (q.options && q.options.length !== sq.options.length) {
        problems.push(`${tag} block${i} q${qi}: ${q.options.length} en options vs ${sq.options.length}`);
      }
      if (q.options && new Set(q.options).size !== q.options.length) {
        problems.push(`${tag} block${i} q${qi}: duplicate en options`);
      }
    });
    if (t.list && b.list && t.list.length !== b.list.length) {
      problems.push(`${tag} block${i}: ${t.list.length} en list items vs ${b.list.length}`);
    }
    ['title', 'intro', 'body', 'note', 'scene'].forEach(f => { if (t[f]) fields++; });
  });
}

/* what still falls back to Japanese in English mode */
const missing = [];
for (const m of window.CURRICULUM.sections) {
  const S = window['S' + m.id];
  if (!S) continue;
  let gaps = 0;
  if (S.goals && !S.goals_en) gaps++;
  (S.blocks || []).forEach(b => {
    if (b.title && !b.title_en) gaps++;
    if (b.intro && !b.intro_en) gaps++;
    if (b.body && !b.body_en) gaps++;
    if (b.list && !b.list_en) gaps++;
    if (b.note && !b.note_en) gaps++;
    if (b.scene && !b.scene_en) gaps++;
    (b.items || []).forEach(i => { if (b.type === 'tiles' && i.ja && !i.en) gaps++; });
    (b.questions || []).forEach(q => { if (!q.q_en) gaps++; });
  });
  if (gaps) missing.push(`s${m.id}:${gaps}`);
}

console.log(`sections translated : ${translated}/33`);
console.log(`prose fields        : ${fields}`);
console.log(`alignment problems  : ${problems.length}`);
problems.slice(0, 30).forEach(p => console.log('  - ' + p));
console.log(`sections with gaps  : ${missing.length}`);
if (missing.length) console.log('  ' + missing.join(' '));
process.exit(problems.length ? 1 : 0);
