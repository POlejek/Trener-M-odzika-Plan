// Buduje pliki importu do aplikacji Model Gry dla bieżącego tygodnia (konspekty robimy tydzień po tygodniu).
// Uruchomienie: node model-gry/generator/build.mjs
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { warmups } from './warmups.mjs';
import { sfg } from './sfg.mjs';
import { backup, PHASES } from './lib.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, '..', 'import');
mkdirSync(OUT, { recursive: true });

// tydzień → mezocykl (progresja rozgrzewek BetterWay: I = T2–T5, II = T6–T8, III = T9–T11).
// Kolejny tydzień: dopisz plik weeks/tNN.mjs i dodaj go tutaj (szkic T3 czeka w szkice/).
const WEEKS = [
  ['t02', 1],
];

const S = sfg('2026-10-12');
const all = { drills: new Map(), sessions: [], schemes: {} };

for (const [file, meso] of WEEKS) {
  let mod;
  try { mod = await import(`./weeks/${file}.mjs`); } catch (e) {
    if (e.code === 'ERR_MODULE_NOT_FOUND') { console.log(`(pominięto ${file} – brak pliku)`); continue; }
    throw e;
  }
  const W = warmups(meso, '2026-10-12');
  const { drills, sessions, schemes = {} } = mod.build({ W, S });
  const uniq = [...new Map(drills.map(d => [d.id, d])).values()];
  const missing = sessions.flatMap(s => s.blocks.filter(b => b.drillId && !uniq.some(d => d.id === b.drillId)).map(b => `${s.id}:${b.drillId}`));
  if (missing.length) throw new Error(`${file}: konspekty odwołują się do ćwiczeń spoza listy: ${missing.join(', ')}`);
  const tactics = { phases: PHASES, schemes: { '11v11': schemes } };
  const name = `${mod.meta.code}_${mod.meta.range}_${mod.meta.slug}.json`;
  writeFileSync(join(OUT, name), JSON.stringify(backup({ tactics, drills: uniq, sessions }), null, 1));
  console.log(`${name}: ${uniq.length} ćwiczeń, ${sessions.length} konspektów, ${Object.values(schemes).flat().length} schematów`);
  uniq.forEach(d => all.drills.set(d.id, d));
  all.sessions.push(...sessions);
  for (const [k, list] of Object.entries(schemes)) (all.schemes[k] ||= []).push(...list);
}

console.log(`RAZEM: ${all.drills.size} ćwiczeń, ${all.sessions.length} konspektów`);
