// Wspólne narzędzia generatora plików importu do aplikacji Model Gry (ćwiczenia, konspekty, schematy taktyki).
// Boisko ćwiczenia = pole gry w metrach, poziomo: x wzdłuż długości (niebiescy atakują w prawo), y wzdłuż szerokości (0 = góra).

export const COLORS = {
  A: '#1d4ed8', B: '#dc2626', C: '#eab308', GK_A: '#16a34a', GK_B: '#7c3aed',
  ink: '#111827', red: '#dc2626', run: '#2563eb', cone: '#f97316', disc: '#f59e0b', zone: '#f59e0b',
};

const RIGHT = Math.PI / 2, LEFT = -Math.PI / 2;

/**
 * Tworzy ćwiczenie w formacie biblioteki aplikacji.
 * spec: { id, name, category, duration, players, size: [długość, szerokość], objective,
 *         scoring, organization, start, flow[], continuity, series, rotation,
 *         keys[], concept, say, variations, phases[], date, draw(api) }
 */
export function drill(spec) {
  const [L, W] = spec.size;
  const s = 1000 / Math.max(L, W);
  const P = (x, y) => [Math.round(20 + x * s), Math.round(20 + y * s)];
  let next = 1;
  const items = [], lines = [], zones = [];
  const add = (o) => { const it = { id: next++, scale: 1, rotation: 0, ...o }; items.push(it); return it; };
  const at = (x, y) => { const [px, py] = P(x, y); return { x: px, y: py }; };
  const seg = (a, b, type, color, extra = {}) => {
    const [sx, sy] = P(...a), [ex, ey] = P(...b);
    lines.push({ id: next++, type, startX: sx, startY: sy, endX: ex, endY: ey, color, ...extra });
  };
  const api = {
    L, W,
    /** Zawodnik drużyny A (niebiescy, atakują w prawo). */
    a: (label, x, y) => add({ type: 'player', team: 'A', ...at(x, y), rotation: RIGHT, color: COLORS.A, label }),
    /** Zawodnik drużyny B (czerwoni, atakują w lewo). */
    b: (label, x, y) => add({ type: 'player', team: 'B', ...at(x, y), rotation: LEFT, color: COLORS.B, label }),
    /** Neutralny / joker (żółty). */
    n: (label, x, y) => add({ type: 'player', team: 'C', ...at(x, y), rotation: 0, color: COLORS.C, label }),
    gkA: (x, y, label = 'BR') => add({ type: 'player', team: 'A', gk: true, ...at(x, y), rotation: RIGHT, color: COLORS.GK_A, label }),
    gkB: (x, y, label = 'BR') => add({ type: 'player', team: 'B', gk: true, ...at(x, y), rotation: LEFT, color: COLORS.GK_B, label }),
    gkN: (x, y, label = 'BR') => add({ type: 'player', team: 'C', gk: true, ...at(x, y), rotation: 0, color: COLORS.C, label }),
    coach: (x, y) => add({ type: 'coach', ...at(x, y), color: '#334155', label: 'T' }),
    ball: (x, y) => { const p = at(x, y); add({ type: 'ball', x: p.x + 14, y: p.y - 14, color: '#ffffff' }); },
    balls: (x, y) => { const p = at(x, y); [[0, 0], [10, 6], [-8, 8]].forEach(([dx, dy]) => add({ type: 'ball', x: p.x + dx, y: p.y + dy, color: '#ffffff' })); },
    cone: (x, y) => add({ type: 'cone', ...at(x, y), color: COLORS.cone }),
    disc: (x, y) => add({ type: 'disc', ...at(x, y), color: COLORS.disc }),
    pole: (x, y) => add({ type: 'pole', ...at(x, y), color: '#ef4444' }),
    mannequin: (x, y) => add({ type: 'mannequin', ...at(x, y), color: '#334155' }),
    hurdle: (x, y) => add({ type: 'hurdle', ...at(x, y), color: '#f97316' }),
    ladder: (x, y) => add({ type: 'ladder', ...at(x, y), rotation: RIGHT, color: '#f59e0b' }),
    /** Duża bramka na linii końcowej: side 'L' (x=0) lub 'R' (x=L); y = środek bramki (domyślnie środek pola). */
    goal: (side, y = W / 2) => { const p = at(side === 'L' ? 0 : L, y); add({ type: 'goal', x: p.x + (side === 'L' ? -13 : 13), y: p.y, rotation: side === 'L' ? LEFT : RIGHT, color: '#ffffff' }); },
    /** Mini-bramka: side 'L'/'R' na liniach końcowych, 'T'/'B' na liniach bocznych. */
    mini: (side, pos) => {
      const map = { L: [0, pos, -7, 0, LEFT], R: [L, pos, 7, 0, RIGHT], T: [pos, 0, 0, -7, 0], B: [pos, W, 0, 7, Math.PI] };
      const [x, y, dx, dy, rot] = map[side];
      const p = at(x, y);
      add({ type: 'mini-goal', x: p.x + dx, y: p.y + dy, rotation: rot, color: '#ffffff' });
    },
    /** Pachołki w narożnikach pola gry. */
    corners: () => [[0, 0], [L, 0], [0, W], [L, W]].forEach(([x, y]) => api.disc(x, y)),
    text: (t, x, y, color = '#334155') => add({ type: 'text', ...at(x, y), scale: 0.8, color, text: t }),
    step: (n, x, y) => add({ type: 'step', ...at(x, y), color: '#0f172a', label: String(n) }),
    pass: (a, b) => seg(a, b, 'arrow-solid', COLORS.ink),
    key: (a, b) => seg(a, b, 'arrow-solid', COLORS.red),
    run: (a, b) => seg(a, b, 'arrow-dashed', COLORS.run),
    dribble: (a, b) => seg(a, b, 'arrow-wavy', COLORS.ink),
    curve: (a, b, c) => { const [cx, cy] = P(...c); seg(a, b, 'curve-arrow-solid', COLORS.ink, { controlX: cx, controlY: cy }); },
    line: (a, b) => seg(a, b, 'line-dashed', '#64748b'),
    solid: (a, b) => seg(a, b, 'line-solid', '#475569'),
    /** Strefa funkcyjna (np. strefa wykończenia) — prostokąt w metrach. */
    zone: (x, y, w, h, color = COLORS.zone, opacity = 0.15) => {
      const [x0, y0] = P(x, y), [x1, y1] = P(x + w, y + h);
      zones.push({ id: next++, type: 'rectangle', x: x0, y: y0, width: x1 - x0, height: y1 - y0, color, opacity });
    },
    poly: (pts, color = '#64748b', opacity = 0.12) => zones.push({ id: next++, type: 'polygon', points: pts.map(([x, y]) => { const [px, py] = P(x, y); return { x: px, y: py }; }), color, opacity }),
  };
  spec.draw(api);

  const ts = `${spec.date || '2026-10-12'}T08:00:00.000Z`;
  const text = (v) => (Array.isArray(v) ? v.join('\n') : v || '');
  const organization = [
    `PUNKTACJA: ${spec.scoring}`,
    text(spec.organization),
  ].join('\n\n');
  const description = [
    spec.start && `START: ${spec.start}`,
    spec.flow && `PRZEBIEG:\n${spec.flow.map((f, i) => `${i + 1}. ${f}`).join('\n')}`,
    spec.continuity && `CIĄGŁOŚĆ (co dalej): ${spec.continuity}`,
    spec.series && `SERIE: ${spec.series}`,
    spec.rotation && `ROTACJA: ${spec.rotation}`,
    spec.description,
  ].filter(Boolean).join('\n\n');
  const side = (icon, sd) => sd && [`${icon} ${sd.label.toUpperCase()}`, ...sd.keys.map(k => `• ${k}`), sd.say && `🗣 Powiedz: ${sd.say}`].filter(Boolean).join('\n');
  const coachingPoints = [
    // wskazówki przeciwstawne: drużyna trenująca fazę tygodnia vs drużyna trenująca fazę lustrzaną
    spec.sides && side('🔵', spec.sides.a),
    spec.sides && side('🔴', spec.sides.b),
    spec.keys && spec.keys.map(k => `• ${k}`).join('\n'),
    spec.concept && `MIKROTAKTYKA: ${spec.concept}`,
    spec.say && `🗣 POWIEDZ ZAWODNIKOM: ${spec.say}`,
    spec.coachingPoints,
  ].filter(Boolean).join('\n\n');

  return {
    id: spec.id, name: spec.name, createdAt: ts, updatedAt: ts, version: 2,
    frames: [{ items, lines, zones }],
    pitch: { type: 'custom', orientation: 'horizontal', width: W, length: L },
    meta: {
      category: spec.category, duration: String(spec.duration), players: spec.players, area: `${L}×${W} m`,
      objective: spec.objective, organization, description, coachingPoints,
      variations: text(spec.variations), phases: spec.phases || [],
    },
    teamAColor: COLORS.A, teamBColor: COLORS.B,
  };
}

/** Rozgrzewka BetterWay jako ćwiczenie (tekst ćwiczeń w polu Organizacja, rysunek torów). */
export function warmup({ id, name, accent, duration, objective, blocks, description, coachingPoints, variations, date }) {
  const organization = blocks.map(b => `${b.title}\n${b.items.map((it, i) => `${it.n ?? i + 1}. ${it.name}\n   • Pozycja wyjściowa: ${it.start}\n   • Wykonanie: ${it.how}\n   • Dawka: ${it.dose}\n   • Na co patrzeć: ${it.look}`).join('\n')}`).join('\n\n');
  return {
    ...drill({
      id, name, date, category: `1 · Rozgrzewka BetterWay · akcent: ${accent}`, duration, players: '18–22 (4 tory)',
      size: [30, 20], objective, scoring: '— (rozgrzewka bez rywalizacji; w potencjacji krótka rywalizacja w parach)',
      organization: `Ustawienie: 4 tory po 15 m (stożek start – talerzyk na 10 m – stożek meta), 4–6 zawodników na tor; potencjacja w polu 9×18 m obok.\n\n${organization}`,
      description, coachingPoints, variations, phases: [],
      draw: (a) => {
        [3, 7, 11, 15].forEach((y, i) => { a.cone(2, y); a.disc(12, y); a.cone(17, y); a.a('', 1, y); a.run([3, y], [16, y]); if (i === 3) a.text('tory 15 m', 9, y + 2.5); });
        a.zone(20, 1, 9, 18, '#22c55e', 0.12); a.text('potencjacja', 24.5, 3);
        a.a('', 23, 9); a.b('', 26, 9); a.a('', 23, 14); a.b('', 26, 14); a.coach(24.5, 18);
      },
    }),
  };
}

/** Konspekt (trening). blocks: [{drill} | {title, minutes, note}] */
export function session({ id, title, date, goal, notes, phases, blocks }) {
  const ts = `${date}T12:00:00.000Z`;
  return {
    id, title, date, group: 'U14 (18–22 zawodników)', goal, notes, phases,
    blocks: blocks.map((b, i) => (b.drill
      ? { id: `${id}-b${i}`, drillId: b.drill.id, minutes: String(b.minutes ?? b.drill.meta.duration), note: b.note || '' }
      : { id: `${id}-b${i}`, drillId: null, title: b.title, minutes: String(b.minutes), note: b.note || '' })),
    createdAt: ts, updatedAt: ts,
  };
}

// ── Taktyka (11v11, płótno 700×1080, nasza bramka na dole) ───────────────────
const TEAM = [['gk', '1'], ['lb', '3'], ['lcb', '4'], ['rcb', '5'], ['rb', '2'], ['ldm', '6'], ['rdm', '8'], ['lw', '11'], ['cam', '10'], ['rw', '7'], ['st', '9']];
const OPP = [['ogk', '1'], ['olb', '3'], ['olcb', '4'], ['orcb', '5'], ['orb', '2'], ['oldm', '6'], ['ordm', '8'], ['olw', '11'], ['ocam', '10'], ['orw', '7'], ['ost', '9']];
const mk = (list, pos, rot) => list.map(([id, number]) => ({ id, x: pos[id][0], y: pos[id][1], number, rotation: rot }));

export const tac = {
  frame: (team, opp, ball, lines = [], zones = []) => ({ team: mk(TEAM, team, 0), opponent: mk(OPP, opp, Math.PI), ball: { x: ball[0], y: ball[1] }, lines, zones }),
  pass: (a, b) => ({ startX: a[0], startY: a[1], endX: b[0], endY: b[1], type: 'arrow-solid', color: '#111827' }),
  key: (a, b) => ({ startX: a[0], startY: a[1], endX: b[0], endY: b[1], type: 'arrow-solid', color: '#dc2626' }),
  run: (a, b) => ({ startX: a[0], startY: a[1], endX: b[0], endY: b[1], type: 'arrow-dashed', color: '#2563eb' }),
  press: (a, b) => ({ startX: a[0], startY: a[1], endX: b[0], endY: b[1], type: 'arrow-dashed', color: '#dc2626' }),
  rect: (x, y, w, h, color = '#facc15', opacity = 0.22) => ({ type: 'rectangle', x, y, width: w, height: h, color, opacity }),
  text: (text, x, y, color = '#111827') => ({ type: 'text', x, y, text, color, size: 22 }),
  dribble: (a, b) => ({ startX: a[0], startY: a[1], endX: b[0], endY: b[1], type: 'arrow-wavy', color: '#111827' }),
  line: (a, b, color = '#64748b') => ({ startX: a[0], startY: a[1], endX: b[0], endY: b[1], type: 'line-dashed', color }),
  curve: (a, b, c, color = '#111827') => ({ startX: a[0], startY: a[1], endX: b[0], endY: b[1], controlX: c[0], controlY: c[1], type: 'curve-arrow-solid', color }),
  poly: (pts, color = '#1d4ed8', opacity = 0.12) => ({ type: 'polygon', points: pts.map(([x, y]) => ({ x, y })), color, opacity }),
  html: (title, points, source) => `<b>${title}</b><ul>${points.map(p => `<li>${p}</li>`).join('')}</ul>${source ? `<p><i>Źródło: ${source}</i></p>` : ''}`,
  /** Pozycja wyjściowa: zmień wybrane pozycje. */
  with: (base, changes) => ({ ...base, ...changes }),
};

// Fazy i subfazy modelu gry klubu (MODEL_GRY_U14_1-4-2-3-1.md). Klucz schematu/ćwiczenia: 'Faza-Subfaza' albo 'Faza'.
export const PHASES = {
  'Atak': ['Otwarcie', 'Budowanie', 'Tworzenie szans', 'Finalizacja'],
  'A/O': ['Zabezpieczenie', 'Kontrpressing', 'Powrót do bloku'],
  'Obrona': ['Pressing wysoki', 'Blok średni', 'Blok niski', 'Pole karne'],
  'O/A': ['Kontra', 'Utrzymanie'],
  'SFG': ['Atak', 'Obrona'],
  'Plan B': [],
};

export function backup(sections, exportedAt) {
  return { format: 'model-gry-backup', version: 1, exportedAt: exportedAt || new Date().toISOString(), sections };
}
