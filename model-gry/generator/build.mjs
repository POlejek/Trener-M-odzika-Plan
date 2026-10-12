// Buduje pliki importu do aplikacji Model Gry:
//  - MODEL_GRY_TAKTYKA_U14.json – wszystkie schematy modelu gry (zakładka Taktyka),
//  - TNN_…json – ćwiczenia i konspekty bieżącego tygodnia (konspekty robimy tydzień po tygodniu).
// Uruchomienie: node model-gry/generator/build.mjs
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { warmups } from './warmups.mjs';
import { sfg } from './sfg.mjs';
import { backup } from './lib.mjs';
import { buildTactics } from './taktyka.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, '..', 'import');
mkdirSync(OUT, { recursive: true });
const NOW = '2026-10-12T20:00:00.000Z';

// ── Taktyka ──────────────────────────────────────────────────────
const tactics = buildTactics();
const all = Object.values(tactics.schemes['11v11']).flat();
const ids = new Set(all.map(s => s.id));
if (ids.size !== all.length) throw new Error('Taktyka: powtórzone id schematów');
for (const key of Object.keys(tactics.schemes['11v11'])) {
  const [phase, sub] = key.split('-');
  const subs = tactics.phases[phase];
  if (!subs || (sub ? !subs.includes(sub) : subs.length)) throw new Error(`Taktyka: klucz ${key} nie pasuje do faz`);
}
writeFileSync(join(OUT, 'MODEL_GRY_TAKTYKA_U14.json'), JSON.stringify(backup({ tactics }, NOW), null, 1));
console.log(`MODEL_GRY_TAKTYKA_U14.json: ${all.length} schematów, ${all.reduce((n, s) => n + s.frames.length, 0)} klatek`);

// ── Tydzień ──────────────────────────────────────────────────────
// tydzień → mezocykl (progresja rozgrzewek BetterWay: I = T2–T5, II = T6–T8, III = T9–T11).
// Kolejny tydzień: dopisz plik weeks/tNN.mjs i dodaj go tutaj (szkic T3 czeka w szkice/).
const WEEKS = [
  ['t02', 1],
];
const validKeys = new Set(Object.entries(tactics.phases).flatMap(([p, subs]) => (subs.length ? subs.map(s => `${p}-${s}`) : [p])));

for (const [file, meso] of WEEKS) {
  const mod = await import(`./weeks/${file}.mjs`);
  const { drills, sessions } = mod.build({ W: warmups(meso, '2026-10-12'), S: sfg('2026-10-12') });
  const uniq = [...new Map(drills.map(d => [d.id, d])).values()];
  const missing = sessions.flatMap(s => s.blocks.filter(b => b.drillId && !uniq.some(d => d.id === b.drillId)).map(b => `${s.id}:${b.drillId}`));
  if (missing.length) throw new Error(`${file}: konspekty odwołują się do ćwiczeń spoza listy: ${missing.join(', ')}`);
  const badKeys = [...uniq.flatMap(d => d.meta.phases), ...sessions.flatMap(s => s.phases)].filter(k => !validKeys.has(k));
  if (badKeys.length) throw new Error(`${file}: nieznane fazy: ${[...new Set(badKeys)].join(', ')}`);
  const name = `${mod.meta.code}_${mod.meta.range}_${mod.meta.slug}.json`;
  writeFileSync(join(OUT, name), JSON.stringify(backup({ drills: uniq, sessions }, NOW), null, 1));
  console.log(`${name}: ${uniq.length} ćwiczeń, ${sessions.length} konspektów`);
}
