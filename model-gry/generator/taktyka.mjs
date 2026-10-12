// Schematy do zakładki Taktyka: pełny model gry klubu U14 (1-4-2-3-1), zgodny z MODEL_GRY_U14_1-4-2-3-1.md.
// Płótno 11v11: 700×1080, nasza bramka na dole (y≈1060), bramka rywala u góry (y≈20), linia środkowa y=540.
// Numeracja schematów = numeracja subfaz w dokumencie modelu (1.1a, 1.2b, …).
import { tac, PHASES } from './lib.mjs';

const { frame: F, pass: P, key: K, run: R, press: PR, dribble: D, text: T, rect: Z, poly: PL, line: LN, curve: C, html: H, with: W } = tac;
const SRC_DZ = 'K. Gerega, Roberto De Zerbi – The Master of Timing';
const SRC_XA = 'K. Gerega, Xabi Alonso – Positionism and Relationism';
const SRC_MOD = 'Model gry U14 1-4-2-3-1';

// ── Ustawienia bazowe: MY ──────────────────────────────────────────────
const BOX = { gk: [350, 1030], lcb: [240, 945], rcb: [460, 945], lb: [85, 850], ldm: [295, 820], rdm: [415, 775], rb: [615, 850], cam: [290, 620], st: [410, 590], lw: [80, 520], rw: [620, 520] };
const B3241 = { gk: [350, 1010], lb: [150, 800], lcb: [350, 830], rcb: [550, 800], ldm: [300, 690], rdm: [420, 655], lw: [70, 430], cam: [240, 430], rw: [460, 430], rb: [630, 440], st: [350, 330] };
const A325 = { gk: [350, 980], lb: [190, 600], lcb: [350, 630], rcb: [510, 600], ldm: [300, 470], rdm: [410, 440], lw: [70, 260], cam: [230, 255], st: [350, 205], rw: [470, 255], rb: [630, 265] };
const D442 = { gk: [350, 1030], lb: [140, 790], lcb: [280, 805], rcb: [420, 805], rb: [560, 790], lw: [130, 650], ldm: [290, 665], rdm: [410, 665], rw: [570, 650], cam: [410, 520], st: [290, 505] };
const D451 = { gk: [350, 1035], lb: [170, 920], lcb: [290, 930], rcb: [410, 930], rb: [530, 920], lw: [130, 825], cam: [250, 815], ldm: [350, 800], rdm: [450, 815], rw: [570, 825], st: [330, 570] };

// ── Ustawienia bazowe: RYWAL (ich lewa strona = prawa strona ekranu) ─────
const HP442 = { ogk: [350, 60], orb: [130, 470], orcb: [280, 430], olcb: [420, 430], olb: [570, 470], orw: [150, 770], oldm: [330, 700], ordm: [440, 690], olw: [560, 770], ost: [290, 880], ocam: [430, 880] };
const MID442 = { ogk: [350, 60], orb: [140, 350], orcb: [280, 370], olcb: [420, 370], olb: [560, 350], orw: [150, 500], oldm: [300, 515], ordm: [410, 505], olw: [550, 500], ost: [300, 620], ocam: [410, 610] };
const LOW451 = { ogk: [350, 45], orb: [150, 185], orcb: [280, 180], olcb: [420, 180], olb: [550, 185], orw: [110, 315], oldm: [250, 320], ocam: [350, 335], ordm: [450, 320], olw: [590, 315], ost: [360, 560] };
const OPPBUILD = { ogk: [350, 110], orcb: [260, 300], olcb: [440, 300], orb: [90, 400], olb: [610, 400], oldm: [350, 400], ordm: [470, 585], ocam: [240, 590], orw: [80, 715], olw: [620, 715], ost: [350, 730] };
const OPPATT = { ogk: [350, 300], orcb: [270, 520], olcb: [430, 520], orb: [90, 680], olb: [610, 680], oldm: [350, 640], ordm: [460, 730], ocam: [240, 730], orw: [70, 880], olw: [630, 880], ost: [350, 885] };
const OPPGK = { ogk: [350, 50], orcb: [220, 130], olcb: [480, 130], orb: [70, 260], olb: [630, 260], oldm: [350, 230], ordm: [480, 360], ocam: [230, 360], orw: [100, 450], olw: [600, 450], ost: [350, 470] };

const AXIS = LN([350, 897], [350, 1060]);

export function buildTactics() {
  const s = {};
  const add = (key, list) => { s[key] = [...(s[key] || []), ...list]; };
  let n = 20261013000;
  const sc = (name, comments, frames) => ({ id: ++n, name, comments, frames });

  // ═════════════════════ 1. ATAK ═════════════════════
  // 1.1 OTWARCIE
  add('Atak-Otwarcie', [
    sc('1.1a · Pudełko 2-4-2-2: pauza i gra w kierunku presji',
      H('Otwarcie vs wysoki pressing – pudełko', [
        'Struktura 2-4-2-2: ŚO szeroko (krawędź pola karnego), 6 i 8 tworzą z nimi „pudełko”, 3 i 2 szeroko na wysokości pivotów, 10 i 9 w środku, 11 i 7 wysoko i szeroko. BR = trzeci ŚO.',
        'Klatka 1–2: ŚO przyjmuje bokiem i PAUZUJE z piłką – czeka na doskok napastnika rywala.',
        'Klatka 3: gra w kierunku presji – piłka do 6, którego napastnik właśnie zostawił.',
        'Klatka 4: S-kombinacja – 6 po skosie do 8, 8 do 10 / 9 między liniami.',
        'Komendy: „Czas!” (pauza), „Plecy!” (presja za tobą), „Trzeci!”.',
      ], `${SRC_DZ}, s. 16–24; ${SRC_MOD}, 1.1`),
      [
        F(BOX, HP442, [350, 1030], [P([350, 1025], [248, 950])], [PL([[230, 960], [470, 960], [425, 760], [285, 805]]), T('PUDEŁKO', 350, 900, '#1d4ed8')]),
        F(BOX, W(HP442, { ost: [262, 905] }), [240, 945], [PR([290, 880], [262, 903])], [T('pauza', 175, 960, '#1d4ed8')]),
        F(BOX, W(HP442, { ost: [272, 918], oldm: [320, 720] }), [295, 820], [P([244, 938], [292, 826])], [T('w kierunku presji', 200, 880, '#1d4ed8')]),
        F(W(BOX, { cam: [300, 600] }), W(HP442, { ost: [272, 918], oldm: [310, 770], ordm: [450, 720] }), [300, 600], [P([298, 816], [410, 780]), K([415, 770], [303, 607]), R([410, 590], [440, 470])], [T('S-kombinacja', 520, 700, '#dc2626')]),
      ]),
    sc('1.1b · Zasada +1: rywal pressuje dwoma – LO do trójki',
      H('Przewaga w pierwszej linii', [
        'Rywal pressuje dwoma napastnikami na naszych ŚO → 2 v 2, brak przewagi (klatka 1).',
        'LO schodzi do linii ŚO, ŚO przesuwają się w prawo → trójka + BR = 3 v 2 (+1). PO idzie wysoko jako wahadło (klatka 2).',
        'Wolny zawodnik trójki (LO) prowadzi piłkę w wolne – przyciąga skrzydłowego rywala (klatka 3).',
        'Gdy skrzydłowy rywala doskoczy – podanie do 11 schodzącego (romb) albo do 6 (klatka 4).',
        'Wariant: zamiast LO między ŚO schodzi 6 (gdy rywal kryje 6 – zob. 1.2e).',
      ], `${SRC_XA}; ${SRC_MOD}, 0.5 i 1.1`),
      [
        F(BOX, W(HP442, { ost: [250, 895], ocam: [450, 895] }), [350, 1030], [], [T('2 v 2', 350, 990, '#dc2626')]),
        F(W(BOX, { lb: [130, 920], lcb: [330, 960], rcb: [550, 920], rb: [630, 700], rdm: [430, 790] }), W(HP442, { ost: [280, 900], ocam: [470, 885], olw: [580, 760] }), [350, 1030], [R([85, 850], [130, 915]), R([615, 850], [630, 705])], [T('3 v 2 (+1)', 350, 1000, '#1d4ed8')]),
        F(W(BOX, { lb: [160, 840], lcb: [330, 960], rcb: [550, 920], rb: [630, 700], rdm: [430, 790] }), W(HP442, { ost: [280, 900], ocam: [470, 885], olw: [580, 760], orw: [150, 790] }), [160, 840], [P([345, 1025], [135, 920]), D([135, 915], [158, 846])], [T('wejście z piłką', 120, 990, '#1d4ed8')]),
        F(W(BOX, { lb: [160, 840], lcb: [330, 960], rcb: [550, 920], rb: [630, 700], rdm: [430, 790], lw: [110, 650] }), W(HP442, { ost: [280, 900], ocam: [470, 885], olw: [580, 760], orw: [205, 800] }), [110, 650], [PR([150, 790], [202, 798]), R([80, 520], [110, 645]), P([160, 835], [112, 656])], [T('romb', 200, 700, '#16a34a')]),
      ]),
    sc('1.1c · Klepsydra i szerokie romby: środek zamknięty → po obwodzie',
      H('Z pudełka do klepsydry', [
        'Do pudełka dochodzą 10 i 9 – powstaje klepsydra (pionowe schodkowanie w środku).',
        'Gdy rywal zamyka środek cieniami podań – gramy po obwodzie: ŚO → boczny (klatka 2).',
        'Szeroki romb: boczny – pivot – skrzydłowy – 10/9. Skrzydłowy schodzi do zgrania, odgrywa do pivota, ten gra do przodu (klatka 3).',
        'Klepsydra ściąga rywala do środka, romby wykorzystują bok – i odwrotnie.',
      ], `${SRC_DZ}, s. 17, 22`),
      [
        F(BOX, W(HP442, { ost: [300, 870], ocam: [410, 860], oldm: [330, 740], ordm: [430, 720] }), [460, 945], [], [PL([[225, 965], [475, 965], [430, 760], [440, 570], [270, 570], [300, 790]], '#1d4ed8', 0.1), T('KLEPSYDRA', 350, 1000, '#1d4ed8'), T('środek zamknięty', 360, 650, '#dc2626')]),
        F(BOX, W(HP442, { ost: [300, 870], ocam: [430, 880], oldm: [330, 740], ordm: [430, 720], olw: [580, 800] }), [615, 850], [P([465, 940], [610, 855])], []),
        F(W(BOX, { rw: [600, 650], rdm: [470, 740] }), W(HP442, { ost: [300, 870], ocam: [430, 880], oldm: [330, 740], ordm: [420, 700], olw: [565, 785] }), [410, 590], [R([620, 520], [600, 645]), P([612, 845], [602, 656]), P([596, 655], [476, 738]), K([468, 735], [413, 597])], [PL([[615, 850], [470, 740], [410, 590], [600, 650]], '#16a34a', 0.15), T('szeroki romb', 560, 590, '#16a34a')]),
      ]),
    sc('1.1d · Krycie 1:1 – gra bezpośrednia na 9 i 4 v 4',
      H('Rywal kryje każdego (pressing 1:1)', [
        'Gdy rywal kryje wszystkich, z przodu zostaje 4 v 4 (10, 9, 11, 7 vs czwórka obrońców).',
        'BR lub ŚO gra długo na 9 – 9 zgrywa głową/nogą do 10, skrzydłowi startują za plecy bocznych obrońców (zbiórka i atak 4 v 4).',
        'Rywal, który zaangażował 6+ zawodników w pressing, ma za plecami przestrzeń – „sztuczne przejście”.',
      ], `${SRC_DZ}, s. 23–24; ${SRC_MOD}, 1.1`),
      [
        F(BOX, { ogk: [350, 60], ost: [250, 890], ocam: [450, 890], oldm: [300, 765], ordm: [420, 720], orw: [100, 795], olw: [600, 795], orcb: [290, 570], olcb: [410, 540], orb: [90, 470], olb: [610, 470] }, [350, 1030], [], [T('każdy kryty → 4 v 4', 350, 420, '#dc2626'), Z(40, 420, 620, 210, '#facc15', 0.12)]),
        F(BOX, { ogk: [350, 60], ost: [250, 890], ocam: [450, 890], oldm: [300, 765], ordm: [420, 720], orw: [100, 795], olw: [600, 795], orcb: [290, 570], olcb: [410, 545], orb: [90, 470], olb: [610, 470] }, [410, 590], [K([350, 1020], [408, 598])]),
        F(W(BOX, { cam: [330, 560], lw: [130, 330], rw: [560, 340] }), { ogk: [350, 60], ost: [250, 890], ocam: [450, 890], oldm: [300, 765], ordm: [420, 720], orw: [100, 795], olw: [600, 795], orcb: [300, 520], olcb: [420, 545], orb: [110, 430], olb: [590, 440] }, [560, 340], [P([408, 585], [335, 565]), K([335, 558], [556, 346]), R([80, 520], [130, 335]), R([620, 520], [560, 345])], [T('4 v 4', 350, 380, '#1d4ed8')]),
      ]),
  ]);

  // 1.2 BUDOWANIE
  add('Atak-Budowanie', [
    sc('1.2a · Struktura 3-2-4-1 vs blok średni 4-4-2',
      H('Budowanie gry przeciw blokowi średniemu', [
        'Z 1-4-2-3-1 przechodzimy do 3-2-4-1: LO schodzi do trójki z ŚO, PO jest wahadłem po prawej.',
        '3 + 2 (trójka + pivoty) kontroluje grę i zabezpiecza stratę.',
        '11 i 2 dają szerokość, 9 głębię (przypina ŚO rywala).',
        '10 i 7 w kieszeniach: między linią pomocy a obrony rywala, w półprzestrzeniach (konflikt decyzyjny dla rywala).',
        'Pivoty blisko siebie (10–12 m), na różnych wysokościach.',
      ], `${SRC_XA}; ${SRC_MOD}, 1.2`),
      [F(B3241, MID442, [350, 830], [], [PL([[140, 815], [560, 815], [430, 640], [290, 680]], '#1d4ed8', 0.1), T('3 + 2', 350, 900, '#1d4ed8'), Z(195, 395, 90, 75, '#facc15', 0.3), Z(415, 395, 90, 75, '#facc15', 0.3), T('kieszeń', 240, 488), T('kieszeń', 460, 488)])]),
    sc('1.2b · Przynęta → „góra–dół–przez”',
      H('Prowokowanie pressingu i trzeci zawodnik', [
        'Klatka 2: podanie do tyłu (6 → ŚO) – przynęta. Napastnik rywala skacze, blok rozciąga się w pionie.',
        'Klatka 3 – GÓRA: ŚO gra pionowo do 10 schodzącego tyłem.',
        'Klatka 4 – DÓŁ: 10 zgrywa na 1 kontakt do 8 wchodzącego przodem do gry.',
        'Klatka 5 – PRZEZ: 8 gra między linie do 9 albo za linię do wbiegającego 7.',
        'Hipnoza piłką zwrotną (MP #04): obrońcy patrzą na zgranie, trzeci wbiega im za plecy.',
      ], `${SRC_DZ}, s. 27–29; Mikrotaktyczny Poniedziałek #04, #05`),
      [
        F(B3241, MID442, [300, 690]),
        F(B3241, W(MID442, { ost: [372, 748] }), [350, 830], [P([302, 696], [348, 824]), PR([300, 620], [368, 744])], [T('przynęta', 420, 880, '#1d4ed8')]),
        F(W(B3241, { cam: [270, 500] }), W(MID442, { ost: [395, 770], oldm: [280, 460] }), [270, 500], [P([350, 825], [272, 507]), R([240, 430], [268, 495])], [T('GÓRA', 200, 560, '#1d4ed8')]),
        F(W(B3241, { cam: [270, 500], rdm: [400, 580] }), W(MID442, { ost: [395, 770], oldm: [270, 465], ocam: [455, 650] }), [400, 580], [P([275, 503], [395, 578]), R([420, 655], [402, 586])], [T('DÓŁ', 330, 600, '#1d4ed8')]),
        F(W(B3241, { cam: [270, 500], rdm: [400, 580], rw: [470, 300] }), W(MID442, { ost: [395, 770], oldm: [270, 465], ocam: [455, 650], ordm: [475, 520] }), [470, 300], [K([402, 574], [468, 307]), R([460, 430], [470, 305])], [T('PRZEZ', 470, 470, '#dc2626')]),
      ]),
    sc('1.2c · Wejście z piłką ŚO → podanie do kieszeni',
      H('Skrajny ŚO przyciąga skrzydłowego rywala', [
        'Gdy nikt nie doskakuje do skrajnego ŚO (tu LO w trójce) – prowadzi piłkę w wolne.',
        'Skrzydłowy rywala musi wyjść – za jego plecami otwiera się podanie do 10 w kieszeni.',
        '10 przyjmuje bokiem, obraca się i gra do 9 albo za linię do 11.',
      ], `${SRC_MOD}, 1.2 (zasada 4)`),
      [
        F(B3241, MID442, [150, 800]),
        F(W(B3241, { lb: [190, 650] }), W(MID442, { orw: [180, 580] }), [190, 650], [D([152, 795], [188, 657]), PR([150, 500], [178, 575])], [T('wejście z piłką', 120, 720, '#1d4ed8')]),
        F(W(B3241, { lb: [190, 650] }), W(MID442, { orw: [185, 600] }), [240, 430], [K([192, 645], [238, 437])]),
        F(W(B3241, { lb: [190, 650], lw: [120, 250] }), W(MID442, { orw: [185, 600], oldm: [270, 480] }), [120, 250], [K([243, 425], [123, 257]), R([70, 430], [120, 255])], [T('za linię', 120, 210, '#dc2626')]),
      ]),
    sc('1.2d · Zamknięty środek → zmiana strony do wahadła',
      H('Przeładuj stronę, przenieś grę', [
        'Przeładowanie lewej strony (LO, 11, 10, 6 blisko piłki) – blok rywala przesuwa się do piłki.',
        'Szybka zmiana strony przez 6 lub przerzut ŚO do PO (wahadło) po słabej stronie.',
        'PO przyjmuje w biegu, 7 w kieszeni lub podminięcie – dośrodkowanie po ziemi / wycofanie.',
        'Krótki czas piłki w jednym sektorze (MP #15).',
      ], `${SRC_DZ}, s. 27; ${SRC_MOD}, 1.2`),
      [
        F(W(B3241, { ldm: [240, 640], cam: [190, 470] }), { ogk: [350, 60], orb: [90, 360], orcb: [230, 370], olcb: [370, 370], olb: [510, 360], orw: [100, 520], oldm: [240, 520], ordm: [350, 510], olw: [490, 500], ost: [300, 590], ocam: [380, 610] }, [150, 800], [], [T('przeładowanie', 150, 880, '#1d4ed8')]),
        F(W(B3241, { ldm: [240, 640], cam: [190, 470] }), { ogk: [350, 60], orb: [90, 360], orcb: [230, 370], olcb: [370, 370], olb: [510, 360], orw: [100, 520], oldm: [240, 540], ordm: [350, 510], olw: [490, 500], ost: [300, 595], ocam: [380, 620] }, [630, 440], [P([155, 795], [237, 645]), C([245, 638], [625, 445], [440, 430], '#dc2626')], [T('zmiana strony', 450, 590, '#dc2626')]),
        F(W(B3241, { ldm: [240, 640], cam: [190, 470], rb: [640, 300], rw: [520, 280] }), { ogk: [350, 60], orb: [110, 360], orcb: [260, 370], olcb: [400, 360], olb: [560, 330], orw: [130, 520], oldm: [280, 530], ordm: [400, 510], olw: [560, 470], ost: [310, 600], ocam: [390, 620] }, [640, 300], [R([630, 440], [640, 305]), R([460, 430], [520, 285]), P([640, 300], [525, 285])], [T('wahadło', 630, 230, '#1d4ed8')]),
      ]),
    sc('1.2e · Wariant B: 6 między ŚO (rywal kryje 6)',
      H('Rotacja, gdy rywal pilnuje 6', [
        'Klatka 1: rywal ustawia 10 na naszym 6 – w 3-2-4-1 trudno wyjść przez środek.',
        'Klatka 2: 6 schodzi między ŚO (trójka 4-6-5), LO zostaje szeroko jako wahadło, 11 wchodzi do lewej kieszeni, 10 schodzi obok 8.',
        'Rywal musi zdecydować: iść za 6 (otwiera środek) czy zostać (nasz ŚO z piłką jest wolny).',
      ], `${SRC_MOD}, 1.2 (wariant B)`),
      [
        F(W(B3241, { lb: [100, 760], lcb: [260, 830], rcb: [450, 830], rb: [630, 440] }), W(MID442, { ocam: [310, 640], ost: [380, 700] }), [260, 830], [], [T('6 kryty', 300, 600, '#dc2626')]),
        F({ gk: [350, 1010], lcb: [200, 840], ldm: [350, 870], rcb: [500, 840], lb: [70, 520], lw: [230, 430], cam: [300, 610], rdm: [420, 600], rw: [470, 430], rb: [630, 440], st: [350, 330] }, W(MID442, { ocam: [340, 760], ost: [420, 720] }), [200, 840], [R([300, 690], [348, 862]), R([100, 760], [72, 527]), R([70, 430], [228, 432]), R([240, 430], [298, 603])], [T('6 między ŚO', 350, 930, '#1d4ed8')]),
      ]),
    sc('1.2f · Fałszywa 9: zejście wyciąga ŚO, kanał dla 7',
      H('Przestrzeń między II a III linią', [
        '9 schodzi między linie – ŚO rywala idzie za nim albo zostawia go wolnego.',
        'Gdy ŚO wyjdzie, w linii obrony powstaje kanał – 7 (lub 10) wbiega w niego.',
        '6/8 gra do 9, 9 na 1 kontakt za linię do wbiegającego (trzeci zawodnik).',
      ], `${SRC_DZ}, s. 27; ${SRC_MOD}, 1.2`),
      [
        F(B3241, W(MID442, { ocam: [460, 620] }), [420, 655], [R([350, 330], [350, 460]), PR([420, 370], [372, 418])], [T('9 schodzi', 270, 330, '#1d4ed8')]),
        F(W(B3241, { st: [350, 460] }), W(MID442, { olcb: [370, 420], ocam: [460, 620] }), [350, 460], [P([418, 650], [352, 467])]),
        F(W(B3241, { st: [350, 460], rw: [430, 260] }), W(MID442, { olcb: [335, 418], ocam: [460, 620] }), [430, 260], [K([354, 455], [428, 268]), R([460, 430], [430, 265])], [T('kanał', 470, 330, '#dc2626')]),
      ]),
  ]);

  // 1.3 TWORZENIE SZANS
  add('Atak-Tworzenie szans', [
    sc('1.3a · 3-2-5 przeciw blokowi niskiemu → 2-3-2 / 3-1-6',
      H('Struktura ataku na niski blok', [
        '3-2-5: trójka + pivoty zabezpieczają, pięciu w pięciu kanałach (11, 10, 9, 7, 2).',
        'Najpierw środek: 10 i 7 schodzą z półprzestrzeni → szybkie kombinacje w środku (klatka 2).',
        'Środek zamknięty: 3-1-6 – 8 dołącza do przodu, sześciu tworzy dwa szerokie trójkąty (klatka 3).',
        'Wariant 2-3-5 (rywal zostawia 1 napastnika): LO wchodzi do linii pomocy obok 6.',
        '42% asyst z półprzestrzeni, 34% z boku (MP #21).',
      ], `${SRC_DZ}, s. 33–34; ${SRC_MOD}, 1.3`),
      [
        F(A325, LOW451, [300, 470], [LN([150, 120], [150, 560]), LN([280, 120], [280, 560]), LN([420, 120], [420, 560]), LN([550, 120], [550, 560])], [T('3-2-5', 600, 560, '#1d4ed8'), T('5 kanałów', 600, 590, '#1d4ed8')]),
        F(W(A325, { cam: [270, 380], rw: [430, 380] }), LOW451, [270, 380], [P([302, 465], [272, 386]), R([230, 255], [268, 375]), R([470, 255], [430, 375])], [T('10 i 7 schodzą', 600, 560, '#1d4ed8')]),
        F(W(A325, { rdm: [460, 240], rw: [520, 300], rb: [640, 230] }), LOW451, [520, 300], [R([410, 440], [460, 245]), P([302, 465], [516, 304])], [T('3-1-6', 600, 560, '#1d4ed8'), PL([[640, 230], [520, 300], [460, 240]], '#16a34a', 0.2), PL([[70, 260], [230, 255], [350, 205]], '#16a34a', 0.2)]),
      ]),
    sc('1.3b · „Góra–dół–za linię” z napastnikiem (środek)',
      H('Kombinacja centralna', [
        'GÓRA: 6/8 gra pionowo do 9 ustawionego tyłem przed ŚO.',
        'DÓŁ: 9 zgrywa na 1 kontakt do 10 nabiegającej do piłki.',
        'ZA LINIĘ: 9 natychmiast obraca się i wbiega za ŚO – 10 podaje prostopadle, strzał po 1–2 kontaktach.',
        'Rywal: nie śledź tylko piłki zwrotnej – kontroluj wbiegającego (MP #04).',
      ], `${SRC_XA}; Mikrotaktyczny Poniedziałek #04`),
      [
        F(A325, LOW451, [300, 470], [P([302, 465], [348, 212])], [T('GÓRA', 430, 380, '#1d4ed8')]),
        F(W(A325, { cam: [300, 285] }), LOW451, [300, 285], [P([348, 210], [304, 281]), R([230, 255], [297, 282])], [T('DÓŁ', 200, 240, '#1d4ed8')]),
        F(W(A325, { cam: [300, 285], st: [380, 110] }), W(LOW451, { orcb: [290, 195] }), [380, 110], [R([350, 205], [378, 115]), K([303, 281], [376, 117])], [T('ZA LINIĘ', 470, 110, '#dc2626')]),
      ]),
    sc('1.3c · Przechylenie + escadinhas i dwie tabele (lewa)',
      H('Relacjonizm przeciw niskiemu blokowi (Xabi)', [
        'Przechylenie: 5–6 zawodników po stronie piłki, dalsze wahadło (2) szeroko na zmianę strony.',
        'Escadinhas (drabinka): ukośny łańcuch 11 – 10 – 9 – 6, nigdy w jednej linii poziomej.',
        'Tabela 1: 11 → 10 i wbiega do środka, 10 odgrywa. Tabela 2: 11 → 9, 9 odgrywa za plecy obrońcy – 11 w polu karnym.',
        'Podaj i biegnij („toco y me voy”). Gdy blok przesunie się do piłki – zmiana strony do 2.',
      ], `${SRC_XA}; Mikrotaktyczny Poniedziałek #16`),
      (() => {
        const T_ = { gk: [350, 980], lb: [160, 580], lcb: [300, 620], rcb: [470, 600], ldm: [240, 420], rdm: [370, 440], lw: [70, 300], cam: [190, 270], st: [290, 205], rw: [440, 250], rb: [630, 290] };
        const O_ = { ogk: [350, 45], orb: [120, 190], orcb: [240, 180], olcb: [370, 180], olb: [500, 185], orw: [130, 365], oldm: [220, 330], ocam: [320, 340], ordm: [420, 330], olw: [540, 320], ost: [300, 490] };
        return [
          F(T_, O_, [160, 580], [], [PL([[70, 300], [190, 270], [290, 205], [240, 420]], '#16a34a', 0.15), T('przechylenie', 160, 650, '#1d4ed8')]),
          F(T_, O_, [70, 300], [P([162, 574], [72, 307])]),
          F(W(T_, { lw: [165, 228] }), W(O_, { orw: [110, 322] }), [165, 228], [P([74, 296], [186, 274]), R([70, 300], [160, 232]), P([186, 266], [169, 232])], [T('tabela 1', 110, 220, '#1d4ed8')]),
          F(W(T_, { lw: [230, 110] }), W(O_, { orw: [105, 300], orcb: [225, 172] }), [230, 110], [P([169, 224], [286, 208]), R([165, 228], [228, 116]), K([288, 200], [233, 116])], [T('tabela 2', 340, 120, '#dc2626')]),
        ];
      })()),
    sc('1.3d · Corta luz – trzech w linii (prawa)',
      H('Przepuszczenie piłki', [
        'Ukośny łańcuch: wahadło (2) – 7 – 9.',
        '2 gra w kierunku 7, który markuje przyjęcie i PRZEPUSZCZA piłkę do 9, a sam startuje w pole karne.',
        '9 na 1 kontakt za obrońców do 7 – sam na sam z bramkarzem. Uwaga obrońców skupiona na 7 = luka.',
      ], `${SRC_XA}`),
      [
        F(W(A325, { rb: [620, 300], rw: [480, 280], st: [400, 210] }), W(LOW451, { olw: [575, 380], olcb: [455, 172] }), [410, 440], [P([412, 435], [616, 305])]),
        F(W(A325, { rb: [620, 300], rw: [460, 130], st: [400, 210] }), W(LOW451, { olw: [575, 380], olcb: [455, 172] }), [400, 215], [P([616, 300], [404, 214]), R([480, 280], [462, 135])], [T('przepuszcza', 520, 230, '#dc2626')]),
        F(W(A325, { rb: [620, 300], rw: [450, 90], st: [400, 210] }), W(LOW451, { olw: [575, 380], olcb: [480, 160] }), [450, 95], [K([403, 206], [448, 98])], [T('sam na sam', 520, 70, '#dc2626')]),
      ]),
    sc('1.3e · Izolacja 1v1: 11 przy linii, wycofanie na 11. metr',
      H('Pojedynki skrzydłowych (wzorzec Hiszpanii 2024–26)', [
        'Zmiana strony do 11 izolowanego 1 v 1 z bocznym obrońcą rywala.',
        '11 przyjmuje do nogi i atakuje obrońcę – drybling do linii końcowej.',
        'Wycofanie po ziemi na 11. metr (8 lub 10 wbiegający w drugim tempie); 9 bliższy słupek, 7 dalszy słupek.',
        'Prawa strona: 7 z kieszeni drybluje do środka – strzał lub prostopadłe.',
      ], `Hiszpania 2024–26 (analizy); ${SRC_MOD}, 1.3`),
      [
        F(W(A325, { lw: [60, 300] }), W(LOW451, { orb: [110, 230], orw: [180, 340] }), [60, 300], [C([408, 438], [64, 304], [240, 300], '#dc2626')], [T('1 v 1', 120, 360, '#1d4ed8')]),
        F(W(A325, { lw: [140, 80], st: [390, 90], rw: [300, 70], rdm: [350, 150] }), W(LOW451, { orb: [160, 130] }), [140, 80], [D([62, 296], [136, 86]), R([350, 205], [388, 95]), R([470, 255], [302, 76]), R([410, 440], [350, 155])]),
        F(W(A325, { lw: [140, 80], st: [390, 90], rw: [300, 70], rdm: [350, 150] }), W(LOW451, { orb: [160, 130] }), [350, 150], [K([142, 84], [346, 148])], [T('wycofanie', 260, 170, '#dc2626')]),
      ]),
    sc('1.3f · Kanał ŚO–boczny: podminięcie 7 i wycofanie',
      H('Kanał między środkowym a bocznym obrońcą', [
        'Wahadło (2) z piłką szeroko przyciąga bocznego obrońcę rywala.',
        '7 podminięciem (underlap) wbiega w kanał między ŚO a bocznym.',
        '2 → 7 w tempo biegu, 7 wycofuje spod linii końcowej na 11. metr (10 / 8).',
      ], `${SRC_DZ}, s. 34; ${SRC_MOD}, 1.3`),
      [
        F(W(A325, { rb: [630, 300] }), W(LOW451, { olb: [580, 250] }), [630, 300], [PR([550, 185], [578, 245])]),
        F(W(A325, { rb: [630, 300], rw: [520, 120] }), W(LOW451, { olb: [645, 250] }), [520, 120], [R([470, 255], [518, 126]), K([627, 296], [523, 126])], [T('kanał', 470, 150, '#dc2626')]),
        F(W(A325, { rb: [630, 300], rw: [540, 60], cam: [330, 140] }), W(LOW451, { olb: [645, 250] }), [330, 140], [D([521, 116], [538, 66]), R([230, 255], [328, 146]), K([536, 66], [334, 140])], [T('11. metr', 330, 185, '#1d4ed8')]),
      ]),
  ]);

  // 1.4 FINALIZACJA
  add('Atak-Finalizacja', [
    sc('1.4a · Zajęcie pola karnego: 5 stref',
      H('Kto gdzie przy dośrodkowaniu / wycofaniu', [
        'Bliższy słupek: 9. Dalszy słupek: skrzydłowy z drugiej strony (11). 11. metr: 10 lub 8. Zbiórka (skraj pola karnego): 8 / 6. Zabezpieczenie: trójka + 6.',
        '80% goli pada z pola karnego, większość po 1–2 kontaktach (MP #21).',
        'Ruch „do i od” przed wbiegnięciem (MP #18).',
      ], `${SRC_MOD}, 1.4; Mikrotaktyczny Poniedziałek #18, #21`),
      [F({ gk: [350, 900], lb: [200, 560], lcb: [350, 640], rcb: [500, 560], ldm: [330, 420], rdm: [420, 230], lw: [290, 90], cam: [340, 145], st: [410, 70], rw: [600, 60], rb: [560, 260] }, LOW451, [600, 60], [], [T('bliższy', 450, 40, '#1d4ed8'), T('dalszy', 250, 55, '#1d4ed8'), T('11. m', 290, 160, '#1d4ed8'), T('zbiórka', 470, 260, '#1d4ed8'), T('zabezpieczenie', 350, 700, '#1d4ed8')])]),
    sc('1.4b · Korytarz niepewności i wycofanie',
      H('Dośrodkowanie po ziemi', [
        'Klatka 1: mocne podanie po ziemi w przestrzeń między linią obrony a bramkarzem (korytarz niepewności).',
        'Klatka 2: spod linii końcowej – wycofanie na 11. metr do wbiegającego z głębi (drugie tempo).',
        'Bramkarz nie może wyjść, obrońcy biegną do własnej bramki – napastnik atakuje piłkę pierwszy.',
      ], 'Mikrotaktyczny Poniedziałek #21; ' + SRC_XA),
      [
        F(W(A325, { lw: [70, 160], st: [340, 130], cam: [210, 205], rw: [450, 150] }), W(LOW451, { orb: [130, 175], orcb: [270, 165], olcb: [410, 165], olb: [530, 170] }), [70, 160], [K([75, 158], [360, 85]), R([340, 130], [350, 85]), R([450, 150], [430, 80])], [Z(160, 60, 380, 70, '#facc15', 0.3), T('korytarz niepewności', 560, 150, '#92400e')]),
        F(W(A325, { lw: [130, 40], cam: [330, 135], rdm: [330, 220], st: [440, 110] }), W(LOW451, { orb: [170, 80], orcb: [280, 70], olcb: [400, 70] }), [330, 135], [K([134, 44], [326, 132]), R([410, 440], [332, 225])], [T('wycofanie', 330, 180, '#dc2626')]),
      ]),
  ]);

  // ═════════════════════ 2. PRZEJŚCIE A/O ═════════════════════
  add('A/O-Zabezpieczenie', [
    sc('2.1 · Zabezpieczenie 3+2 w ataku',
      H('Myślę o stracie, mając piłkę', [
        'Trójka (LO + ŚO) i pivoty zostają za akcją – kryją napastnika rywala, zanim stracimy piłkę.',
        'Zawężamy i skracamy pole: zawodnicy blisko piłki, dwie linie asekuracji pod piłką (MP #10).',
        'BR wysoko – przechwytuje długie podanie za linię.',
      ], `${SRC_MOD}, 2.1; Mikrotaktyczny Poniedziałek #10`),
      [F(A325, LOW451, [470, 255], [], [PL([[180, 610], [520, 610], [420, 430], [290, 460]], '#1d4ed8', 0.14), T('3 + 2', 350, 680, '#1d4ed8'), T('BR wysoko', 350, 930, '#16a34a')])]),
  ]);
  add('A/O-Kontrpressing', [
    sc('2.2 · Kontrpressing 5 sekund',
      H('Pierwsze 5 sekund po stracie', [
        'Strata w prawej kieszeni: trzech najbliższych (7, 8, 9) atakuje piłkę z różnych stron.',
        'Pozostali zamykają podania do przodu (10, 6), trójka kryje napastnika.',
        'Sygnały: złe podanie, przegrany drybling, rywal tyłem do gry, złe przyjęcie.',
        'Pressuj dalej, gdy rywal ma złe przyjęcie lub mało opcji; cofnij się, gdy przyjął przodem i jest wolny (zob. 2.4).',
      ], `${SRC_MOD}, 2.2–2.3`),
      [
        F(A325, W(LOW451, { ordm: [460, 290] }), [460, 290], [PR([470, 255], [462, 283]), PR([410, 440], [458, 300]), PR([350, 205], [452, 286]), R([230, 255], [330, 300]), R([300, 470], [380, 400])], [T('strata', 520, 330, '#dc2626'), T('5 s', 400, 260, '#dc2626')]),
        F(W(A325, { rw: [470, 280], rdm: [450, 320], st: [420, 255], cam: [330, 300], ldm: [380, 400] }), W(LOW451, { ordm: [500, 355] }), [450, 320], [], [T('odbiór ≤ 5 s', 590, 420, '#16a34a')]),
      ]),
  ]);
  add('A/O-Powrót do bloku', [
    sc('2.4 · Rywal wyszedł → powrót do 4-4-2 (asymetria po 3-2-4-1)',
      H('Cofnij się, gdy rywal ma czystą piłkę', [
        'Rywal przyjął wolny, przodem do gry → komenda „Blok!”.',
        'LO jest już z tyłu. PO był wysoko – 5 przesuwa się do prawego kanału, 8 zamyka prawą półprzestrzeń.',
        '7 wraca na pozycję prawego pomocnika, 11 na lewą stronę linii pomocy, 10 obok 9.',
        'Najbliższy opóźnia rywala (kieruje do boku), reszta biegnie za linię piłki – najpierw środek.',
      ], `${SRC_MOD}, 2.3–2.4`),
      [
        F(B3241, W(MID442, { ocam: [365, 545] }), [365, 545], [R([630, 440], [580, 720]), R([550, 800], [520, 790]), R([420, 655], [440, 600]), R([460, 430], [560, 600]), R([70, 430], [140, 610]), PR([300, 690], [356, 560])], [T('Blok!', 250, 560, '#dc2626')]),
        F({ gk: [350, 1030], lb: [150, 800], lcb: [330, 820], rcb: [510, 800], rb: [590, 760], ldm: [370, 610], rdm: [450, 620], lw: [150, 620], rw: [570, 620], cam: [360, 480], st: [260, 470] }, W(MID442, { ocam: [365, 545], ost: [300, 690], orw: [140, 700], olw: [600, 700] }), [365, 545], [], [T('4-4-2', 620, 860, '#1d4ed8')]),
      ]),
  ]);

  // ═════════════════════ 3. OBRONA ═════════════════════
  add('Obrona-Pressing wysoki', [
    sc('3.1 · Pressing wysoki: sygnał podanie BR do ŚO, +1 z tyłu',
      H('Rywal buduje od bramkarza', [
        'Sygnał: podanie BR do ŚO (też: podanie do tyłu do BR, złe przyjęcie).',
        '9 biegnie łukiem na ŚO z piłką i odcina podanie zwrotne do BR. 10 na drugiego ŚO – ustawia się w cieniu ich drugiego pomocnika.',
        '8 na pivota rywala, 6 na pomocnika po stronie piłki, skrzydłowi na bocznych obrońców, nasi boczni na skrzydłowych.',
        'Z tyłu przewaga +1 (2 ŚO na 1 napastnika), BR wysoko jako libero. Najdalszy pomocnik rywala „wolny”, ale w cieniu 10.',
        'Albo wszyscy, albo nikt.',
      ], `${SRC_XA}; ${SRC_MOD}, 3.1`),
      [
        F({ gk: [350, 820], lb: [130, 520], lcb: [300, 580], rcb: [400, 580], rb: [570, 520], ldm: [250, 420], rdm: [350, 310], lw: [130, 310], rw: [570, 310], cam: [440, 260], st: [290, 265] }, OPPGK, [350, 50], [P([345, 55], [226, 126])], [T('sygnał: BR → ŚO', 540, 70, '#dc2626')]),
        F({ gk: [350, 700], lb: [120, 480], lcb: [320, 520], rcb: [400, 520], rb: [580, 480], ldm: [240, 395], rdm: [350, 270], lw: [90, 290], rw: [610, 290], cam: [470, 195], st: [250, 160] }, OPPGK, [220, 130], [C([290, 265], [254, 162], [320, 170], '#dc2626'), PR([440, 260], [468, 200]), PR([130, 310], [94, 294]), PR([570, 310], [606, 294]), PR([130, 520], [118, 484]), PR([570, 520], [578, 484])], [T('wolny – w cieniu 10', 560, 390, '#dc2626'), T('+1', 360, 570, '#1d4ed8')]),
      ]),
  ]);
  add('Obrona-Blok średni', [
    sc('3.2a · Blok średni 4-4-2: cień i kierowanie do boku',
      H('Podstawa bronienia', [
        '4-4-2: 10 obok 9. Odległość między liniami 8–12 m, szerokość bloku ok. 30–35 m, linia obrony ok. 30–35 m od bramki.',
        '9 i 10 zamykają podania do pivota rywala („Cień!”), kierują grę do boku („Bok!”).',
        '6 i 8 blisko siebie, chronią strefę 14: jeden doskakuje, drugi asekuruje.',
        'Skrzydłowi na linii pomocy w półprzestrzeniach; po słabej stronie zawężają.',
        'Drugie piłki: przy długiej piłce rywala 6 i 8 zbierają przed linią obrony.',
      ], `${SRC_MOD}, 3.2`),
      [F(D442, OPPBUILD, [260, 300], [LN([350, 400], [290, 505], '#dc2626')], [Z(110, 480, 480, 340, '#1d4ed8', 0.07), T('cień', 330, 455, '#dc2626'), T('8–12 m', 650, 590, '#1d4ed8'), T('8–12 m', 650, 730, '#1d4ed8')])]),
    sc('3.2b · Pułapka przy linii bocznej',
      H('Linia boczna = dodatkowy obrońca', [
        'Sygnał: podanie do bocznego obrońcy rywala.',
        '11 doskakuje od środka (kieruje do linii), 3 na skrzydłowego rywala, 6 zamyka podanie do środka, 9 odcina powrót do ŚO.',
        'Przewaga 3 v 2 przy linii – odbiór albo wybicie na aut.',
      ], `${SRC_MOD}, 3.2 (zasada 3); Mikrotaktyczny Poniedziałek #13`),
      [
        F(D442, OPPBUILD, [90, 400], [P([256, 305], [94, 396])], [T('sygnał', 150, 360, '#dc2626')]),
        F(W(D442, { lw: [115, 455], lb: [110, 690], ldm: [210, 560], st: [190, 380], cam: [340, 440], lcb: [240, 790] }), OPPBUILD, [90, 400], [PR([130, 650], [116, 462]), PR([140, 790], [110, 695]), PR([290, 665], [212, 566]), PR([290, 505], [194, 386])], [Z(40, 360, 180, 360, '#dc2626', 0.1), T('pułapka', 130, 340, '#dc2626')]),
      ]),
    sc('3.2c · Obrona przed zmianą strony',
      H('Przesuwamy się, gdy piłka leci', [
        'Blok przesunięty do strony piłki, zawodnicy po słabej stronie zawężają.',
        'Rywal przerzuca piłkę: cały blok przesuwa się w czasie lotu piłki, 7 atakuje przyjęcie bocznego, 2 bierze skrzydłowego, 8 przesuwa się za piłką.',
      ], `${SRC_DZ} (cz. o kompaktowości i obronie zmiany strony); ${SRC_MOD}, 3.2`),
      [
        F(W(D442, { lw: [115, 455], lb: [110, 690], ldm: [210, 560], st: [190, 380], cam: [340, 440], lcb: [240, 790], rdm: [330, 640], rw: [440, 620], rcb: [370, 800], rb: [480, 770] }), OPPBUILD, [90, 400], [C([94, 396], [604, 404], [350, 230], '#dc2626')], [T('zmiana strony', 350, 290, '#dc2626')]),
        F(W(D442, { rw: [590, 470], rb: [600, 680], rdm: [440, 625], ldm: [320, 640], cam: [450, 470], st: [330, 465], lw: [200, 600], lb: [170, 760], lcb: [300, 800], rcb: [440, 800] }), OPPBUILD, [610, 400], [R([440, 620], [588, 476]), R([480, 770], [598, 686]), R([330, 640], [436, 620])], [T('przesuwamy się, gdy piłka leci', 350, 950, '#1d4ed8')]),
      ]),
  ]);
  add('Obrona-Blok niski', [
    sc('3.3 · Blok niski 4-5-1: strefa 14 i podwojenie na boku',
      H('Ochrona pola karnego', [
        '10 wchodzi do linii pomocy, skrzydłowi wracają do bocznych obrońców – 4-5-1. 9 zostaje wyżej (pierwsza opcja kontry).',
        '6 w strefie 14 – nie wychodzi z niej, blokuje strzały z dystansu.',
        'Skrzydłowy + boczny podwajają skrzydłowego rywala (2 v 1), blokują dośrodkowanie.',
        'ŚO: ustawienie bokiem, kontakt fizyczny z napastnikiem.',
      ], `${SRC_MOD}, 3.3`),
      [F(D451, OPPATT, [610, 680], [], [Z(255, 740, 190, 150, '#dc2626', 0.12), T('strefa 14', 350, 730, '#dc2626'), T('2 v 1', 600, 780, '#1d4ed8')])]),
  ]);
  add('Obrona-Pole karne', [
    sc('3.4 · Pole karne: oś bramki i krycie wbiegających',
      H('Obrona przed dośrodkowaniem (MP #01, #07)', [
        'Orientacja na zawodnika wbiegającego w strefę, nie na pustą strefę.',
        'Ustawienie bokiem: widzę piłkę i swojego rywala; kontakt przed dośrodkowaniem.',
        'Klatka 1: piłka NIE minęła osi bramki → wybijam przed siebie (tam, skąd przyszła).',
        'Klatka 2: piłka MINĘŁA oś → wybijam za siebie (aut bramkowy / rożny).',
        'Strefa wycofania (11. metr) zawsze zajęta przez 6 lub 8.',
      ], 'Mikrotaktyczny Poniedziałek #01, #07; ' + SRC_MOD + ', 3.4'),
      [
        F({ gk: [350, 1040], lb: [190, 960], lcb: [300, 985], rcb: [400, 985], rb: [520, 975], ldm: [330, 915], rdm: [460, 900], lw: [130, 860], cam: [260, 860], rw: [600, 930], st: [350, 700] }, { ogk: [350, 300], orcb: [270, 600], olcb: [430, 600], orb: [100, 760], olb: [620, 990], oldm: [330, 800], ordm: [470, 830], ocam: [230, 920], orw: [180, 1000], olw: [620, 870], ost: [345, 965] }, [620, 990], [K([616, 990], [430, 1005]), R([345, 965], [420, 990])], [AXIS, T('przed osią → przed siebie', 350, 780, '#1d4ed8')]),
        F({ gk: [350, 1040], lb: [200, 975], lcb: [300, 985], rcb: [400, 985], rb: [520, 975], ldm: [330, 915], rdm: [460, 900], lw: [130, 860], cam: [260, 860], rw: [600, 930], st: [350, 700] }, { ogk: [350, 300], orcb: [270, 600], olcb: [430, 600], orb: [100, 760], olb: [620, 990], oldm: [330, 800], ordm: [470, 830], ocam: [230, 920], orw: [240, 1008], olw: [620, 870], ost: [345, 965] }, [200, 995], [C([616, 985], [205, 990], [420, 880]), P([196, 990], [120, 1052])], [AXIS, T('za osią → za siebie', 350, 780, '#1d4ed8')]),
      ]),
  ]);

  // ═════════════════════ 4. PRZEJŚCIE O/A ═════════════════════
  add('O/A-Kontra', [
    sc('4.2a · Kontra po odbiorze w środku: 9 trzyma, 3 biegi w głąb',
      H('≤ 10 sekund do strzału', [
        'Pierwsze spojrzenie do przodu; pierwszy kontakt od presji; pierwsze podanie do 9.',
        '9 trzyma piłkę (ramię i biodro – MP #11) i zgrywa do 10.',
        'Trzy biegi w głąb: 11, 7 i wahadło 2 sprintem w wolne za wysoko ustawionym rywalem.',
        '6 + ŚO zostają za akcją (zabezpieczenie).',
      ], `${SRC_XA}; ${SRC_MOD}, 4.1–4.2`),
      [
        F(D442, W(OPPBUILD, { ocam: [245, 615] }), [290, 650], [P([292, 645], [348, 470])], [T('ODBIÓR', 200, 720, '#16a34a')]),
        F(W(D442, { st: [350, 470], cam: [430, 480], lw: [120, 450], rw: [560, 450], rb: [600, 560] }), W(OPPBUILD, { ocam: [245, 615], ordm: [470, 620] }), [350, 470], [P([348, 465], [425, 476]), R([130, 650], [120, 455]), R([570, 650], [560, 455]), R([560, 790], [600, 565])]),
        F(W(D442, { st: [330, 300], cam: [430, 480], lw: [140, 250], rw: [560, 260], rb: [640, 470] }), W(OPPBUILD, { ocam: [245, 615], ordm: [470, 620] }), [560, 260], [K([428, 474], [556, 266]), R([350, 470], [332, 306]), R([120, 450], [140, 255])], [T('≤ 10 s', 450, 220, '#dc2626')]),
      ]),
    sc('4.2b · Odbiór wysoko: strzał w 5 s',
      H('Najkrótsza droga do bramki', [
        'Odbiór w strefie wysokiej (po pressingu 3.1): najbliższy do bramki, dwóch wbiega w pole karne.',
        'Decyzja w 1–2 kontaktach – rywal nie zdążył się ustawić.',
      ], `${SRC_DZ}, s. 37; ${SRC_MOD}, 4.2`),
      [
        F({ gk: [350, 700], lb: [120, 480], lcb: [320, 520], rcb: [400, 520], rb: [580, 480], ldm: [240, 395], rdm: [350, 270], lw: [90, 290], rw: [610, 290], cam: [470, 195], st: [250, 160] }, W(OPPGK, { orcb: [210, 150] }), [255, 165], [], [T('ODBIÓR', 170, 200, '#16a34a')]),
        F({ gk: [350, 700], lb: [120, 480], lcb: [320, 520], rcb: [400, 520], rb: [580, 480], ldm: [240, 395], rdm: [350, 270], lw: [250, 95], rw: [610, 290], cam: [400, 110], st: [300, 120] }, W(OPPGK, { orcb: [210, 150] }), [400, 110], [D([255, 162], [298, 126]), P([302, 118], [396, 112]), R([470, 195], [402, 116]), R([90, 290], [246, 100])], [T('5 s', 450, 160, '#dc2626')]),
      ]),
  ]);
  add('O/A-Utrzymanie', [
    sc('4.3 · Brak przewagi → utrzymanie i budowanie',
      H('Kontra bez przewagi to strata', [
        'Rywal zdążył się ustawić – zabezpieczamy piłkę: podanie do tyłu do 6, ŚO lub BR.',
        'Przechodzimy do budowania (1.2): LO do trójki, wahadło szeroko, 10 i 7 do kieszeni.',
      ], `${SRC_MOD}, 4.3 (wzorzec Hiszpanii 2010)`),
      [F(W(D451, { lw: [120, 760], ldm: [330, 820] }), W(MID442, { ost: [300, 650], ocam: [420, 660], orw: [170, 600], oldm: [300, 560], ordm: [420, 560] }), [330, 820], [P([326, 825], [295, 925]), R([170, 920], [150, 820]), R([530, 920], [630, 600])], [T('utrzymaj → buduj', 350, 990, '#1d4ed8')])]),
  ]);

  // ═════════════════════ 5. SFG ═════════════════════
  add('SFG-Atak', [
    sc('5.1a · Rzut rożny w ataku: warianty A / B / C',
      H('Rożny z prawej (lustrzanie z lewej)', [
        'Wariant pokazywany kartką: A – bliższy słupek z przedłużeniem; B – 11. metr do wbiegającego z głębi; C – krótki 2 v 1 i wycofanie.',
        '„Pociąg” przy 11. metrze, start w tempo ręki wykonawcy. Blok przy bramkarzu.',
        'Zbiórka: 8 na skraju pola karnego. Zabezpieczenie: 3, 2, 6 na połowie rywala.',
        'U14: limit 6 główek na zawodnika na trening.',
      ], `${SRC_MOD}, 5.1 (wzorzec Arsenalu)`),
      [F({ gk: [350, 860], lb: [200, 430], rb: [500, 430], ldm: [350, 470], rdm: [330, 220], rw: [680, 25], st: [305, 140], lcb: [345, 148], rcb: [385, 140], cam: [425, 148], lw: [385, 65] }, { ogk: [350, 40], orb: [310, 60], orcb: [300, 100], olcb: [350, 95], olb: [410, 100], orw: [430, 70], oldm: [265, 168], ocam: [458, 178], ordm: [470, 110], olw: [250, 220], ost: [350, 330] }, [680, 25], [R([305, 140], [420, 75]), R([345, 148], [290, 80]), R([385, 140], [350, 108]), R([425, 148], [395, 125]), C([675, 30], [415, 80], [560, 160])], [T('A: bliższy', 470, 50, '#1d4ed8'), T('B: 11. m', 300, 170, '#1d4ed8'), T('zbiórka', 270, 250, '#1d4ed8')])]),
    sc('5.1b · Rzut wolny boczny w ataku: dwa tempa',
      H('Pierwsza fala ściąga, druga strzela', [
        'Atakujący w linii na wysokości obrońców rywala (spalony!).',
        'Pierwsza fala rusza na podniesienie ręki wykonawcy (bliższy słupek, 5. metr), druga 1 s później z głębi na 11. metr.',
        'Wariant C: po ziemi do wbiegającego na skraj pola karnego i strzał.',
      ], `${SRC_MOD}, 5.1`),
      [
        F({ gk: [350, 860], lb: [200, 450], rb: [520, 470], ldm: [350, 480], rw: [560, 300], st: [305, 212], lcb: [355, 212], rcb: [405, 212], cam: [300, 275], rdm: [400, 280], lw: [250, 310] }, { ogk: [350, 45], orb: [280, 185], orcb: [330, 185], olcb: [380, 185], olb: [430, 185], orw: [480, 190], oldm: [512, 250], ordm: [538, 263], ocam: [300, 340], olw: [200, 240], ost: [350, 420] }, [560, 300]),
        F({ gk: [350, 860], lb: [200, 450], rb: [520, 470], ldm: [350, 480], rw: [560, 300], st: [380, 75], lcb: [300, 85], rcb: [445, 95], cam: [305, 165], rdm: [395, 170], lw: [250, 310] }, { ogk: [350, 45], orb: [270, 120], orcb: [335, 115], olcb: [380, 125], olb: [420, 135], orw: [480, 145], oldm: [512, 250], ordm: [538, 263], ocam: [300, 340], olw: [200, 240], ost: [350, 420] }, [560, 300], [R([305, 212], [378, 81]), R([355, 212], [302, 91]), R([405, 212], [443, 101]), R([300, 275], [305, 171]), R([400, 280], [395, 176]), C([555, 295], [390, 165], [470, 170])], [T('1. tempo', 470, 80, '#1d4ed8'), T('2. tempo', 250, 160, '#1d4ed8')]),
      ]),
  ]);
  add('SFG-Obrona', [
    sc('5.2a · Rzut rożny w obronie: 4 w strefie + 3 kryjących + zbiórka + 2 do kontry',
      H('Rożny z lewej (lustrzanie z prawej)', [
        'Strefa: bliższy słupek, 5. metr środek, dalszy słupek, 11. metr. Kryjący: 3 najgroźniejszych (kontakt, widzę piłkę i rywala).',
        'Zbiórka: 1 na skraju pola karnego. Kontra: 2 zawodników na połowie.',
        'Oś bramki decyduje o kierunku wybicia (MP #07). Po wybiciu wyjście całą linią.',
      ], `${SRC_MOD}, 5.2; Mikrotaktyczny Poniedziałek #07`),
      [F({ gk: [350, 1045], lcb: [310, 1040], rcb: [360, 1008], ldm: [415, 1040], rdm: [330, 950], lb: [262, 982], rb: [478, 975], cam: [395, 950], lw: [360, 875], st: [250, 560], rw: [450, 560] }, { ogk: [350, 300], orcb: [300, 600], olcb: [420, 600], orb: [20, 1060], orw: [300, 990], oldm: [470, 940], ocam: [380, 918], ordm: [240, 950], olw: [470, 880], ost: [425, 985], olb: [500, 780] }, [20, 1060], [C([25, 1055], [345, 1000], [150, 940])], [AXIS, T('S1', 290, 1066, '#1d4ed8'), T('S3', 440, 1066, '#1d4ed8'), T('kontra', 350, 520, '#16a34a')])]),
    sc('5.2b · Rzut wolny boczny w obronie: linia na 16. metrze',
      H('Linia, mur i wyjście', [
        'Mur 1–2 zawodników zamyka strzał z bliższej strony. Linia 4–5 na 16. metrze, przodem do piłki, jeden lider („Wyjście!”, „Stop!”).',
        'Wykonawca podnosi rękę → linia 2 kroki w tył; podanie → atak piłki do przodu.',
        'Orientacja na wbiegającego, przekazywanie krycia (MP #14).',
      ], `${SRC_MOD}, 5.2; Mikrotaktyczny Poniedziałek #14`),
      [
        F({ gk: [350, 1035], lw: [163, 856], cam: [193, 874], lb: [230, 895], lcb: [300, 895], rcb: [370, 895], rb: [440, 895], ldm: [510, 895], rdm: [350, 820], rw: [570, 760], st: [350, 560] }, { ogk: [350, 300], orcb: [300, 600], olcb: [420, 600], orw: [110, 800], orb: [250, 870], oldm: [320, 870], ocam: [390, 870], ordm: [460, 870], ost: [530, 870], olw: [600, 820], olb: [450, 700] }, [110, 800], [], [LN([200, 897], [560, 897], '#1d4ed8'), T('16. m', 620, 905, '#1d4ed8')]),
        F({ gk: [350, 1035], lw: [163, 856], cam: [193, 874], lb: [250, 930], lcb: [310, 945], rcb: [380, 940], rb: [450, 935], ldm: [510, 920], rdm: [350, 820], rw: [570, 760], st: [350, 560] }, { ogk: [350, 300], orcb: [300, 600], olcb: [420, 600], orw: [110, 800], orb: [260, 965], oldm: [320, 978], ocam: [390, 975], ordm: [468, 970], ost: [535, 958], olw: [600, 820], olb: [450, 700] }, [330, 960], [C([115, 805], [330, 955], [220, 860]), R([310, 905], [315, 940])], [T('atak piłki', 330, 1000, '#1d4ed8')]),
      ]),
  ]);

  // ═════════════════════ 6. PLAN B ═════════════════════
  add('Plan B', [
    sc('6 · Plan B: blok 4-4-1-1 i kontra',
      H('Gdy rywal wyraźnie mocniejszy / prowadzimy w końcówce', [
        'Blok 4-4-1-1 średni lub niski: 10 za 9 w cieniu pivota rywala.',
        'Asymetria: skrzydłowy po słabej stronie (tu 11) zostaje wyżej – gotowy do kontry.',
        'Odbiór w środku → kontra w 3–4 podaniach: 10 łącznik, skrzydłowi w głąb po skosie; 6, 4 i 5 zostają za akcją.',
        'Hasło: „Plan B!” – zmiana na sygnał trenera.',
      ], `J. Mourinho, Real Madryt 2011–12 (analizy); ${SRC_MOD}, 6`),
      [
        F({ gk: [350, 1035], lb: [160, 860], lcb: [290, 875], rcb: [410, 875], rb: [540, 850], ldm: [300, 740], rdm: [420, 735], rw: [560, 720], lw: [150, 610], cam: [360, 625], st: [330, 548] }, { ogk: [350, 200], orcb: [270, 430], olcb: [430, 430], orb: [90, 560], olb: [620, 700], oldm: [380, 480], ordm: [470, 640], ocam: [260, 650], orw: [100, 760], olw: [610, 800], ost: [370, 800] }, [620, 700], [], [T('11 wyżej', 150, 560, '#1d4ed8'), T('4-4-1-1', 640, 950, '#1d4ed8')]),
        F({ gk: [350, 1035], lb: [160, 860], lcb: [290, 875], rcb: [410, 875], rb: [540, 850], ldm: [300, 740], rdm: [470, 680], rw: [560, 720], lw: [140, 380], cam: [360, 560], st: [370, 400] }, { ogk: [350, 200], orcb: [270, 430], olcb: [430, 430], orb: [90, 560], olb: [600, 690], oldm: [380, 480], ordm: [480, 640], ocam: [260, 650], orw: [100, 760], olw: [610, 800], ost: [370, 800] }, [140, 380], [P([468, 675], [364, 566]), K([358, 556], [144, 386]), R([150, 610], [140, 386]), R([330, 548], [370, 405])], [T('ODBIÓR', 520, 640, '#16a34a'), T('kontra 3–4 podania', 260, 330, '#dc2626')]),
      ]),
  ]);

  return { phases: PHASES, schemes: { '11v11': s } };
}
