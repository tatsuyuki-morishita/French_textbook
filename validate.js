/* Loads every v2 data file the way the browser does and checks that each
   French string resolves to IPA, katakana, and an English-style reading. */
global.window = {};
require('./v2/js/phonemes.js');
require('./v2/js/lexicon.js');
require('./v2/js/phonetics.js');
require('./v2/data/curriculum.js');

const fs = require('fs');
const P = window.Phonetics;
let done = 0, pending = [], items = 0, problems = [];

for (const meta of window.CURRICULUM.sections) {
  const f = './v2/data/sections/s' + String(meta.id).padStart(2, '0') + '.js';
  try { require(f); } catch (e) { problems.push(`s${meta.id}: LOAD ERROR ${e.message}`); continue; }
  const S = window['S' + meta.id];
  if (!S) { pending.push(meta.id); continue; }
  done++;

  if (!S.title || !S.title.en || !S.title.fr) problems.push(`s${meta.id}: missing title`);
  if (!S.blocks || !S.blocks.length) problems.push(`s${meta.id}: no blocks`);

  const check = (txt, ipa, where) => {
    items++;
    if (!txt) { problems.push(`s${meta.id} ${where}: empty fr`); return; }
    const r = P.analyze(txt, ipa);
    if (!r.ipa)  problems.push(`s${meta.id} ${where}: no IPA for "${txt}"`);
    if (!r.kana) problems.push(`s${meta.id} ${where}: no kana for "${txt}"`);
    if (!r.en)   problems.push(`s${meta.id} ${where}: no EN reading for "${txt}"`);
  };

  (S.blocks || []).forEach((b, bi) => {
    const w = `block${bi}(${b.type})`;
    if (!['phrases','tiles','conjugation','dialogue','note','quiz'].includes(b.type))
      problems.push(`s${meta.id} ${w}: unknown block type`);
    (b.items || []).forEach(i => {
      check(i.fr, i.ipa, w);
      if (b.type === 'phrases' && !i.en) problems.push(`s${meta.id} ${w}: "${i.fr}" has no en`);
    });
    (b.lines || []).forEach(l => { check(l.fr, l.ipa, w); if (!l.who) problems.push(`s${meta.id} ${w}: line has no speaker`); });
    (b.forms || []).forEach(f2 => check(f2.pronoun.split('/')[0].trim() + ' ' + f2.form, f2.ipa, w));
    (b.questions || []).forEach((q, qi) => {
      if (!q.options || q.options.length < 2) problems.push(`s${meta.id} ${w} q${qi}: too few options`);
      if (typeof q.answer !== 'number' || q.answer < 0 || q.answer >= (q.options || []).length)
        problems.push(`s${meta.id} ${w} q${qi}: answer index out of range`);
    });
  });
}

console.log(`sections converted : ${done}/33`);
console.log(`french strings     : ${items}`);
console.log(`still pending      : ${pending.length ? pending.join(', ') : 'none'}`);
console.log(`problems           : ${problems.length}`);
problems.slice(0, 40).forEach(p => console.log('  - ' + p));
process.exit(problems.length ? 1 : 0);
