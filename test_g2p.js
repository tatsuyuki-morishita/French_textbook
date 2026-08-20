global.window = {};
require('./v2/js/phonemes.js');
require('./v2/js/lexicon.js');
require('./v2/js/phonetics.js');
const P = window.Phonetics;
const cases = [
  ['Bonjour','bɔ̃ʒuʁ'],['Salut','saly'],['Merci','mɛʁsi'],['Au revoir','o ʁəvwaʁ'],
  ["Je m'appelle",'ʒə mapɛl'],['Enchanté','ɑ̃ʃɑ̃te'],['petit','pəti'],['elle','ɛl'],
  ['maison','mɛzɔ̃'],['une','yn'],['bonne','bɔn'],['maman','mamɑ̃'],['fille','fij'],
  ['ville','vil'],['chat','ʃa'],['quatre','katʁ'],['eau','o'],['beaucoup','boku'],
  ['travail','tʁavaj'],['espagnol','ɛspaɲɔl'],['heureux','øʁø'],['fleur','flœʁ'],
  ['deux','dø'],['tu','ty'],['tout','tu'],['nuit','nɥi'],['moi','mwa'],
  ['famille','famij'],['nation','nasjɔ̃'],['parler','paʁle'],['mer','mɛʁ'],
  ['chemise','ʃəmiz'],['français','fʁɑ̃sɛ'],['table','tabl'],['livre','livʁ'],
  ['rouge','ʁuʒ'],['pain','pɛ̃'],['train','tʁɛ̃'],['jardin','ʒaʁdɛ̃'],['garçon','gaʁsɔ̃']
];
let pass=0, fail=0, bad=[];
for (const [txt, want] of cases) {
  const r = P.analyze(txt);
  const ok = r.ipa===want;
  ok?pass++:(fail++, bad.push([txt,r.ipa,want]));
  console.log(`${ok?'ok':'XX'} ${txt.padEnd(14)} /${r.ipa}/`.padEnd(40) + `${(r.kana||'').padEnd(14)} ${r.en}`);
}
console.log(`\npass ${pass}  fail ${fail}`);
if(bad.length){console.log('\nFAILURES:');bad.forEach(([t,g,w])=>console.log(`  ${t}: got /${g}/  want /${w}/`))}
console.log('\n--- liaison ---');
['vous êtes','les amis','nous avons','un ami','très intéressant'].forEach(t=>{
  const r=P.analyze(t); console.log(`  ${t.padEnd(18)} /${r.ipa}/  ${r.kana}`);
});
