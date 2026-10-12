// T3 · 19–22.10.2026 · mecz sob 24.10 · OTWARCIE GRY vs WYSOKI PRESSING (De Zerbi cz. I)
// Mikrotaktyka: #06 przyjęcie, #02 wsparcie utrzymujące, #05 podanie wsteczne. Pon 19.10 = dzień po meczu 18.10 (MD+1/MD-5).
import { drill, session, tac } from '../lib.mjs';

export const meta = { code: 'T03', range: '19-22.10', slug: 'otwarcie_vs_pressing', title: 'Otwarcie gry vs wysoki pressing' };

export function build({ W, S }) {
  const OTW = ['Atak-Otwarcie'], OB = ['Atak-Otwarcie', 'Atak-Budowanie'];

  // ── PON 19.10 (MD+1 po meczu, MD-5) – bez bramkarzy ───────────────────
  const pon2 = drill({
    id: 't03-pon-rondo-bufor', date: '2026-10-19', name: 'T3 Pon · Rondo 4v2 ze strefą buforową – przyjęcie zdobywające (MP #06)',
    category: '2 · Techniczne, mała złożoność · rondo', duration: 15, players: '18–22 (3 pola × 6–7)', size: [16, 12], phases: OB,
    objective: 'Przyjęcie piłki jako przygotowanie kolejnej akcji: skan przed przyjęciem, otwarta sylwetka, pierwszy kontakt w wolną przestrzeń (przyjęcie zdobywające zamiast przyjęcia „od presji”).',
    scoring: '8 podań = 1 pkt. Przyjęcie pierwszym kontaktem do strefy buforowej i podanie z niej = +1 pkt. Obrońcy: odbiór = zamiana z tym, kto stracił.',
    organization: '3 pola 16×12 m, w środku strefa buforowa 4 m (pas wzdłuż pola). Na polu 4 atakujących na bokach + 2 obrońców w środku (7. zawodnik = joker po stronie posiadających, max 1 kontakt). Max 2 kontakty.',
    start: 'Trener (lub zawodnik z boku) wprowadza piłkę do zawodnika na boku pola.',
    flow: ['Czterech utrzymuje piłkę przeciw dwóm, max 2 kontakty.', 'Zawodnik w bocznym sektorze po otrzymaniu podania musi pierwszym kontaktem zaatakować strefę buforową (przyjęcie w kierunku gry), gdy obrońca nie zamyka tej drogi.', 'Ze strefy buforowej podanie do zawodnika po drugiej stronie – piłka „przechodzi” przez pole.'],
    continuity: 'Piłka za polem lub odbiór → natychmiast nowa piłka od zawodnika, który stracił (zapas piłek w narożnikach). Bez przerw w serii.',
    series: '4 × 3 min, przerwa 45 s (rozciąganie dynamiczne).',
    rotation: 'Obrońca, który odbierze, zamienia się z tym, kto stracił. Po każdej serii zamiana jokera.',
    keys: ['Skan przed przyjęciem – zanim piłka przyjdzie, wiem, gdzie jest wolne.', 'Otwarta pozycja ciała – widzę więcej i zmniejszam presję rywala.', 'Mocne podanie → amortyzacja; wolne podanie → wyjście do piłki.', 'Pierwszeństwo ma przyjęcie zdobywające (do przodu), dopiero potem „od presji”.'],
    concept: '#06 Przyjęcie piłki – pierwszy kontakt (środek treningowy z odcinka).',
    say: 'Zanim dostaniesz piłkę – spójrz przez ramię. Pierwszy kontakt w wolne, w stronę strefy!',
    variations: '18 zawodników: 3 pola 4v2. 22: 2 pola 5v2 + 1 pole 4+1v2 (joker). Utrudnienie: 1 kontakt poza strefą. Ułatwienie: pole 18×14 m.',
    draw: (a) => {
      a.corners(); a.zone(6, 0, 4, 12, '#f59e0b', 0.18); a.text('strefa buforowa', 8, 6.2);
      a.a('', 0.5, 3); a.a('', 0.5, 9); a.a('', 15.5, 3); a.a('', 15.5, 9);
      a.b('', 5, 5); a.b('', 11, 7); a.n('J', 8, 11);
      a.ball(0.5, 9); a.pass([0.5, 8.4], [0.5, 3.6]); a.step(1, 1.6, 6);
      a.dribble([1.1, 3], [7, 3]); a.step(2, 4, 1.8); a.key([7.4, 3.4], [15, 8.6]); a.step(3, 11.5, 5.2);
    },
  });

  const pon3 = drill({
    id: 't03-pon-4v2-4-wsparcie', date: '2026-10-19', name: 'T3 Pon · Gra 4v2+4: wsparcie utrzymujące i podanie wsteczne (MP #02, #05)',
    category: '3 · Ćwiczenie główne · gra pozycyjna z kierunkiem', duration: 25, players: '20 (2 pola × 10)', size: [30, 24], phases: OB,
    objective: 'Wsparcie utrzymujące (opcja „tył”) i podanie wsteczne jako przynęta: wyciągnij obrońców do przodu, a potem zdobądź przestrzeń za ich plecami.',
    scoring: 'Przejście piłki do strefy końcowej (do zawodnika wbiegającego za plecy obrońców) = 1 pkt; jeśli wcześniej było podanie wsteczne do wsparcia utrzymującego, które wyciągnęło obrońcę = 2 pkt. Obrońcy: odbiór i podanie do swojego zawodnika w strefie startowej = 1 pkt.',
    organization: '2 pola 30×24 m. Pole: strefa startowa 6 m (2 zawodników wsparcia utrzymującego – „ŚO”), strefa środkowa 18 m (4 atakujących vs 2 obrońców), strefa końcowa 6 m (2 zawodników – cel). 10 zawodników na pole: 2 ŚO + 4 + 2 obrońców + 2 cele. Bez bramkarzy (poniedziałek).',
    start: 'ŚO ze strefy startowej podaje do jednego z 4 w strefie środkowej.',
    flow: ['4v2 w strefie środkowej – szukamy podania do celu w strefie końcowej.', 'Gdy presja jest duża – podanie wsteczne do ŚO (wsparcie utrzymujące, przodem do gry).', 'Obrońca, który skoczy za podaniem wstecznym, otwiera przestrzeń – ŚO gra zdobywająco do wbiegającego / do celu.'],
    continuity: 'Po punkcie cel ze strefy końcowej rozpoczyna akcję w przeciwną stronę (cele ↔ ŚO zamieniają role). Po odbiorze: obrońcy grają do ŚO, a 4 atakujących natychmiast kontrpressing 5 s.',
    series: '4 × 5 min, przerwa 1 min.',
    rotation: 'Co serię 2 obrońców zamienia się z 2 atakującymi; co 2 serie cele ↔ ŚO.',
    keys: ['Wsparcie utrzymujące: linia podania poniżej piłki – nie za krótka (ponowna presja), nie za długa (obrona zdąży się ustawić).', 'Otwarta pozycja ciała – przodem do kierunku przyszłego ataku.', 'Podanie w tył nie po to, by oddać odpowiedzialność, tylko by wyciągnąć rywala.', 'Partner do podania wstecznego musi stać otwarty – widzi całe boisko.'],
    concept: '#02 Wsparcie utrzymujące (środek 4v2+4), #05 Podanie wsteczne.',
    say: 'Do tyłu grasz po to, żeby rywal skoczył. Jak skoczy – za jego plecami jest wolne!',
    variations: '18: 2 pola × 9 (1 cel). 22: 2 pola × 11 (+1 joker). Utrudnienie: 3 obrońców. Ułatwienie: 2 kontakty tylko dla obrońców.',
    draw: (a) => {
      a.corners(); a.line([6, 0], [6, 24]); a.line([24, 0], [24, 24]);
      a.a('ŚO', 3, 8); a.a('ŚO', 3, 16); a.ball(3, 8);
      a.a('', 10, 5); a.a('', 11, 19); a.a('', 17, 10); a.a('', 18, 16);
      a.b('', 13, 10); a.b('', 15, 15);
      a.a('C', 27, 7); a.a('C', 27, 17);
      a.pass([3.6, 8.3], [9.6, 5.3]); a.step(1, 6, 5.5);
      a.pass([9.6, 5.8], [3.6, 15.5]); a.step(2, 5.2, 11.5);
      a.run([13, 10], [11.5, 7.5]);
      a.key([3.8, 16], [17.4, 10.4]); a.step(3, 10.5, 14.5);
      a.pass([17.8, 10], [26.4, 7.3]); a.step(4, 22.5, 7.6);
    },
  });

  const pon4 = drill({
    id: 't03-pon-gra-mini', date: '2026-10-19', name: 'T3 Pon · Gra 9v9+2 na 4 mini-bramki: przynęta i gra do przodu',
    category: '4 · Gra · utrzymanie i progresja (bez bramkarzy)', duration: 30, players: '18–22 (9v9 + 2 neutralnych)', size: [50, 40], phases: OB,
    objective: 'Gra o umiarkowanej intensywności dzień po meczu: utrzymanie piłki, przynęta (podanie wsteczne / pauza) i szybkie podanie zdobywające do mini-bramek.',
    scoring: 'Gol do mini-bramki = 1 pkt. Gol w 6 s po podaniu wstecznym, które wyciągnęło rywala = 2 pkt. 10 podań bez straty = 1 pkt.',
    organization: 'Pole 50×40 m, po 2 mini-bramki na każdej linii końcowej (w półprzestrzeniach). 9v9 + 2 neutralnych (żółci, grają z drużyną przy piłce, max 2 kontakty). Bramkarz (jeśli jest) gra jako neutralny. Strzał tylko z połowy rywala.',
    start: 'Trener z zapasem piłek przy linii bocznej wprowadza piłkę do drużyny, która nie straciła ostatniego gola.',
    flow: ['Drużyna z piłką buduje od tyłu z neutralnymi.', 'Szukamy momentu, w którym rywal skacze do pressingu (po podaniu wstecznym / pauzie).', 'Szybko do przodu – strzał do jednej z 2 mini-bramek rywala.'],
    continuity: 'Gra ciągła. Gol lub piłka za linią → trener natychmiast wprowadza nową piłkę do drużyny, która nie zdobyła gola / nie wybiła.',
    series: '4 × 6 min, przerwa 1:30 (dzień po meczu – kontroluj intensywność, RPE ok. 5–6).',
    rotation: 'Neutralni zmieniają się co serię (po jednym z każdej drużyny).',
    keys: ['Cierpliwość z piłką – nie każde podanie musi iść do przodu.', 'Wsparcie utrzymujące zawsze pod piłką.', 'Gdy rywal skoczy – podanie zdobywające od razu (krótki czas piłki w jednym sektorze – MP #15).'],
    concept: '#05 Podanie wsteczne, #02 Wsparcie utrzymujące.',
    say: 'Zapraszamy ich do pressingu, a potem jedno podanie do przodu!',
    variations: '18: 8v8+2. 22: 10v10+2 (pole 55×42). Dzień po meczu: zawodnicy, którzy grali ponad 60 min – 3 serie zamiast 4.',
    draw: (a) => {
      a.corners(); a.mini('L', 13); a.mini('L', 27); a.mini('R', 13); a.mini('R', 27); a.line([25, 0], [25, 40]);
      a.a('', 6, 12); a.a('', 6, 28); a.a('', 14, 20); a.a('', 17, 8); a.a('', 17, 32); a.a('', 27, 14); a.a('', 28, 26); a.a('', 36, 6); a.a('', 37, 33);
      a.b('', 44, 13); a.b('', 44, 27); a.b('', 36, 20); a.b('', 31, 10); a.b('', 32, 30); a.b('', 22, 15); a.b('', 23, 25); a.b('', 13, 14); a.b('', 14, 27);
      a.n('N', 20, 3); a.n('N', 30, 37); a.coach(25, 41);
      a.ball(14, 20); a.pass([14.5, 20], [6.5, 12.5]); a.step(1, 10, 15); a.run([13, 14], [8.5, 13.5]);
      a.key([6.8, 12.5], [27, 14]); a.step(2, 17, 11.5); a.pass([27.5, 14], [49, 13]); a.step(3, 38, 12);
    },
  });

  // ── WT 20.10 (MD-4, siła, małe pola) ─────────────────────────────
  const wt2 = drill({
    id: 't03-wt-s-aktywacja', date: '2026-10-20', name: 'T3 Wt · Aktywacja S-kombinacji ze zmianą ról (De Zerbi)',
    category: '2 · Techniczne, mała złożoność · automatyzm podań', duration: 15, players: '18–22 (3 stanowiska × 6–7)', size: [30, 15], phases: OTW,
    objective: 'Automatyzm S-kombinacji: ŚO → ŚO → pivot schodzący (6) → po skosie do drugiego pivota (8) idącego do przodu → podanie na 1 kontakt do mini-bramki. Przyjęcie na półobrocie i podanie na 1 kontakt.',
    scoring: 'Rywalizacja stanowisk: trafienie mini-bramki pełną kombinacją na 1 kontakt (6 i 8) = 2 pkt, z 2 kontaktami = 1 pkt. Wygrywa stanowisko z największą liczbą punktów w serii.',
    organization: '3 stanowiska 30×15 m, na końcu 2 mini-bramki. Na stanowisku: 2 ŚO (piłki u pierwszego), 6, 8 + kolejka 2–3. Manekiny jako pierwsza linia pressingu rywala.',
    start: 'ŚO (5) ma piłkę na linii startowej, 6 i 8 za manekinami.',
    flow: ['5 → 4 (podanie wszerz po ziemi, mocno).', '4 → 6 schodzący do piłki (zejście bokiem, przyjęcie na półobrocie); 8 rusza do przodu.', '6 → 8 po skosie na 1 kontakt; 8 na 1 kontakt do mini-bramki (lewa/prawa – wskazuje trener).'],
    continuity: 'Kolejna akcja startuje, gdy piłka minie manekiny (2 piłki w obiegu). Zawodnik po strzale zbiera piłkę i wraca do kolejki ŚO.',
    series: '3 × 4 min, przerwa 45 s; seria 2 lustrzanie (start od lewego ŚO), seria 3 – wybór strony na sygnał.',
    rotation: 'Za podaniem: 5 → 4 → 6 → 8 → kolejka.',
    keys: ['Ruch 6 do piłki bokiem – przyjęcie na półobrocie.', 'Timing 8: start w momencie podania do 6.', 'Mocne, płaskie podania – „kto podaje słabo, ten zaprasza rywala”.', 'Komunikacja głosem: „sam”, „puść”.'],
    concept: '#04 Gra na trzeciego (zapowiedź T4), #06 przyjęcie na półobrocie.',
    say: 'Pięć – cztery – sześć – osiem – strzał. Szybko, na jeden kontakt, jak w zegarku!',
    variations: '18: 3 × 6. 22: 2 stanowiska po 8 i 1 po 6. Utrudnienie: bierny obrońca zamiast manekina.',
    draw: (a) => {
      a.disc(0, 0); a.disc(30, 0); a.disc(0, 15); a.disc(30, 15); a.mini('R', 4); a.mini('R', 11);
      a.mannequin(11, 6); a.mannequin(11, 9.5); a.mannequin(19, 5); a.mannequin(19, 10);
      a.a('5', 2, 4); a.a('4', 2, 11); a.a('6', 13, 3); a.a('8', 15, 12); a.a('', 0.5, 2.5); a.a('', 0.5, 5.5);
      a.ball(2, 4); a.pass([2.4, 4.5], [2.4, 10.5]); a.step(1, 3.3, 7.5);
      a.run([13, 3], [9, 5.5]); a.pass([2.8, 11], [8.6, 6]); a.step(2, 6, 9.6);
      a.run([15, 12], [21, 9]); a.pass([9.4, 5.6], [20.6, 8.5]); a.step(3, 15, 6.4);
      a.key([21.4, 8.6], [29.6, 4.4]); a.step(4, 26, 5.5);
    },
  });

  const wt3 = drill({
    id: 't03-wt-6v6-pivoty', date: '2026-10-20', name: 'T3 Wt · Gra 6v6 przez pivoty na 4 mini-bramki (De Zerbi)',
    category: '3 · Ćwiczenie główne · mała gra, dużo starć', duration: 25, players: '20–22 (2 pola 6v6 / 5v5 + zmiennicy)', size: [40, 25], phases: OB,
    objective: 'Relacje pary ŚO, dwóch pivotów i dwóch napastników przy progresji S-kombinacją (De Zerbi: 6v6 small sided game). Małe pole = dużo pojedynków (dzień siłowy).',
    scoring: 'Gol = 1 pkt, ale tylko po podaniu przez pivota (6 lub 8). Gol po S-kombinacji pivotów = 2 pkt. Po odbiorze: gol w 5 s bez obowiązku gry przez pivotów = 1 pkt.',
    organization: '2 pola 40×25 m, po 2 mini-bramki na każdej linii końcowej. Drużyny 6 zawodników: 2 ŚO, 6, 8, 9, 10. Przy 20 zawodnikach: pole 1 6v6, pole 2 5v5 + 2 zmienników (zmiana co 2 min).',
    start: 'ŚO drużyny rozpoczynającej ma piłkę na swojej linii końcowej.',
    flow: ['Budujemy od ŚO, rywal pressuje od razu.', 'Piłka musi przejść przez 6 lub 8 – szukamy S-kombinacji (6 → 8 po skosie).', 'Po przejściu przez pivoty – szybko do napastników i strzał.'],
    continuity: 'Gra ciągła z naturalnym przebiegiem. Gol / piłka za linią końcową → wznowienie od ŚO drużyny broniącej (rywal cofa się na swoją połowę na 3 s). Aut → wprowadzenie nogą.',
    series: '5 × 3 min, przerwa 1:30 (krótkie, intensywne serie – dzień siłowy).',
    rotation: 'Po 2 seriach zamiana pozycji: ŚO ↔ pivoty ↔ napastnicy.',
    keys: ['Pivoty blisko siebie, ale na różnych wysokościach (jeden niżej, drugi wyżej).', 'Ochrona piłki ramieniem i biodrem przy przyjęciu pod presją (MP #11).', 'Po stracie – pierwsze 5 s (kontrpressing).', 'Trzeci zawodnik – myślę o drugim podaniu.'],
    concept: '#11 Ochrona piłki – ramię i biodro (przyjęcie pod presją), #04 Gra na trzeciego.',
    say: 'Najpierw przez szóstkę lub ósemkę, potem do przodu. Stracisz – pięć sekund na odbiór!',
    variations: '18: 2 pola 5v5 + 2 zmienników. 22: 2 pola 6v6 (+ 2 zmienników) lub 7v7 na 45×28. Utrudnienie: max 2 kontakty.',
    draw: (a) => {
      a.corners(); a.mini('L', 7); a.mini('L', 18); a.mini('R', 7); a.mini('R', 18);
      a.a('5', 3, 6); a.a('4', 4, 19); a.a('6', 14, 10); a.a('8', 21, 15); a.a('10', 30, 5); a.a('9', 33, 18);
      a.b('4', 36, 7); a.b('5', 36, 18); a.b('8', 24, 9); a.b('6', 18, 16); a.b('10', 10, 6); a.b('9', 9, 17);
      a.ball(4, 19); a.pass([4.4, 18.5], [13.6, 10.5]); a.step(1, 8, 14.6);
      a.pass([14.4, 10.3], [20.6, 14.6]); a.step(2, 17.8, 11.6);
      a.key([21.5, 14.6], [29.6, 5.6]); a.step(3, 25.5, 11); a.pass([30.4, 5.4], [39.6, 7]); a.step(4, 35, 4.3);
    },
  });

  const wt4 = drill({
    id: 't03-wt-7v7-br', date: '2026-10-20', name: 'T3 Wt · Gra BR+7v7+BR: przez pivoty, S-kombinacja = 2 pkt (De Zerbi)',
    category: '4 · Gra · małe boisko, wysoka intensywność', duration: 30, players: '16 + 2 BR (+ 2–6 zmienników)', size: [55, 40], phases: OB,
    objective: 'Relacje BR – para ŚO – pivoty – napastnicy przy progresji S-kombinacją w grze z bramkarzami (De Zerbi: 7v7 small sided game).',
    scoring: 'Gol = 1 pkt, gol po S-kombinacji pivotów = 2 pkt. Po odbiorze: gol w 5 s bez obowiązku gry przez pivotów = 1 pkt. Gol po akcji rozpoczętej od BR bez wybicia = +1 pkt.',
    organization: 'Boisko 55×40 m, 2 duże bramki z BR. Drużyny BR + 7 (2 ŚO, 6, 8, 10, 9, skrzydłowy). Przed bramką strzał musi poprzedzić podanie przez pivota. Zmiennicy przy linii, zmiana „lotna” co 2 min.',
    start: 'BR drużyny niebieskiej z piłką (pierwsza akcja); potem gra ciągła.',
    flow: ['BR → ŚO, rywal pressuje.', 'Pivoty szukają S-kombinacji, napastnicy dają głębię.', 'Po przejściu przez pivoty – atak bramki.'],
    continuity: 'Gra ciągła. Gol / aut bramkowy → BR wznawia od razu krótkim podaniem (rywal 3 s na cofnięcie się). Aut boczny → trener natychmiast wrzuca nową piłkę drużynie, która nie wybiła.',
    series: '4 × 6 min, przerwa 1:30.',
    rotation: 'Zmiennicy wchodzą co 2 min (każdy gra min. 3 serie). Po 2 seriach zamiana BR stronami.',
    keys: ['BR jako dodatkowy zawodnik – przewaga +1 w budowaniu.', 'Wejście spod pressingu przez środek, a gdy środek zamknięty – na zewnątrz („play around”).', 'Natychmiastowa reakcja po stracie i po odbiorze.'],
    concept: '#02 Wsparcie utrzymujące (BR i ŚO pod piłką).',
    say: 'Bramkarz gra z nami. Przez szóstkę i ósemkę – a jak zamkną, to bokiem!',
    variations: '18: BR+7v7+BR + 2 zmienników. 22: BR+8v8+BR na 60×42 lub 7v7 + 6 zmienników w 2 falach.',
    draw: (a) => {
      a.corners(); a.goal('L'); a.goal('R'); a.gkA(1.5, 20); a.gkB(53.5, 20);
      a.a('5', 7, 11); a.a('4', 7, 29); a.a('6', 17, 17); a.a('8', 24, 24); a.a('10', 35, 13); a.a('9', 40, 22); a.a('7', 34, 35);
      a.b('4', 47, 13); a.b('5', 47, 27); a.b('6', 34, 20); a.b('8', 28, 30); a.b('10', 20, 9); a.b('9', 13, 22); a.b('7', 22, 34);
      a.ball(1.5, 20); a.pass([2.2, 20.5], [6.6, 28.5]); a.step(1, 3.8, 25.6);
      a.pass([7.5, 28.5], [16.6, 17.6]); a.step(2, 11.2, 24.4); a.pass([17.4, 17.6], [23.6, 23.5]); a.step(3, 20.8, 19.6);
      a.key([24.4, 23.5], [34.6, 13.6]); a.step(4, 29.6, 17.5);
    },
  });

  // ── ŚR 21.10 (MD-3, RSA, duże pola, najwyższa złożoność) ─────────────
  const sr2 = drill({
    id: 't03-sr-rondo-4v4-3', date: '2026-10-21', name: 'T3 Śr · Rondo pozycyjne 4v4+3 z kontrpressingiem (De Zerbi)',
    category: '2 · Techniczne, mała złożoność · rondo pozycyjne', duration: 15, players: '20–22 (2 pola × 10–11)', size: [20, 15], phases: ['Atak-Otwarcie', 'A/O'],
    objective: 'Kontrola posiadania w ciasnej przestrzeni i natychmiastowe przejście po stracie: drużyna, która odbiera, wychodzi na pozycje na obwodzie, a tracąca od razu kontrpressuje (De Zerbi: 4v4+3 positional rondo).',
    scoring: '12 podań z rzędu = 1 pkt (książka: 15 – dla U14 12). Odbiór w 5 s po stracie = 1 pkt dla kontrpressujących.',
    organization: '2 pola 20×15 m. 4v4 + 3 neutralnych (2 na krótkich bokach, 1 w środku – grają z drużyną przy piłce). Drużyna w posiadaniu ustawia się na obwodzie, broniąca w środku. Zaczynamy bez limitu kontaktów, od serii 3 max 2.',
    start: 'Trener podaje do neutralnego na krótkim boku.',
    flow: ['4 + 3 utrzymuje piłkę przeciw 4.', 'Po odbiorze: odbierający natychmiast przechodzą na obwód, tracący – kontrpressing w środku.', 'Neutralny w środku szuka gry na trzeciego.'],
    continuity: 'Gra ciągła, piłki w narożnikach. Piłka za polem → nowa od neutralnego dla drużyny, która nie wybiła.',
    series: '4 × 2:30, przerwa 45 s.',
    rotation: 'Neutralni zmieniają się co serię.',
    keys: ['Trójkąty i romby – zawsze 2 linie podania.', 'Kiedy stać szeroko, a kiedy podejść bliżej.', 'Po stracie: najbliższy atakuje piłkę, reszta zamyka podania.'],
    concept: '#10 Asekuracja w ataku – myślę o stracie, mając piłkę.',
    say: 'Mając piłkę – myśl o stracie. Stracisz – od razu odbierasz!',
    variations: '18: 4v4+1 (2 pola × 9). 22: 4v4+3 (2 pola × 11).',
    draw: (a) => {
      a.corners();
      a.n('N', 0.5, 7.5); a.n('N', 19.5, 7.5); a.n('N', 10, 7.5);
      a.a('', 5, 0.5); a.a('', 14, 0.5); a.a('', 5, 14.5); a.a('', 14, 14.5);
      a.b('', 7, 5); a.b('', 13, 5); a.b('', 7, 10); a.b('', 13, 10);
      a.ball(5, 14.5); a.pass([5.4, 14], [9.6, 8]); a.step(1, 6.6, 11.6); a.pass([10.4, 7.6], [18.8, 7.5]); a.step(2, 14.5, 6.6);
    },
  });

  const sr3 = drill({
    id: 't03-sr-klepsydra-8v6', date: '2026-10-21', name: 'T3 Śr · BR+8 v 6 w klepsydrze: z budowania do strefy wykończenia (De Zerbi)',
    category: '3 · Ćwiczenie główne · gra pozycyjna z kierunkiem', duration: 25, players: '15 + rotacja (20–22)', size: [40, 40], phases: OTW,
    objective: 'Budowanie w kształcie klepsydry przeciw wysokiemu pressingowi: BR, boczni obrońcy, ŚO, pivoty i napastnicy (De Zerbi: 8+GK v 6). Kształt pola zmusza bocznych do gry przez pivotów.',
    scoring: 'Niebiescy: 5 podań w strefie budowania + podanie do strefy wykończenia = 1 pkt; gol w mini-bramkę w 5 s po wejściu do strefy = 2 pkt. Czerwoni: odbiór = 5 s na gol do dużej bramki = 1 pkt.',
    organization: 'Pole 40×40 m w kształcie klepsydry (zwężenie na środku – pachołki). Strefa budowania: BR + 2 ŚO + 2 bocznych + 6 + 8 (niebiescy) vs 4 czerwonych (2-2). Strefa wykończenia: 9 i 10 niebiescy vs 2 czerwonych + 4 mini-bramki. 5 zawodników poza polem: rondo 4v1 obok, zmiana grup co seria.',
    start: 'BR niebieskich z piłką.',
    flow: ['BR → ŚO, czerwoni pressują w 2-2.', '5 podań w strefie budowania, kształt klepsydry: boczni grają do pivotów.', 'Podanie do 9/10 w strefie wykończenia – jeden z budujących dołącza (3v2), 5 s na gola.'],
    continuity: 'Każde zakończenie (gol, strata, upływ 5 s) → nowa piłka od BR niebieskich. Między akcjami max 5 s.',
    series: '4 × 5 min, przerwa 1 min; po 2 seriach zamiana grupy rondo ↔ pressujący.',
    rotation: 'Czterech czerwonych pressujących zmienia się z grupą z ronda co 2 serie. Pozycje w budowaniu rotują co serię.',
    keys: ['Pivoty na różnych wysokościach (klepsydra).', 'Gra w kierunku presji – wykorzystaj pęd pressującego.', 'Zaproś pressing cierpliwością w strefie budowania.', 'Po wejściu do strefy – szybko, 5 s.'],
    concept: '#05 Podanie wsteczne (przynęta), #06 przyjęcie zdobywające.',
    say: 'Pięć podań na dole – zapraszamy ich. Potem przez szóstkę lub ósemkę do przodu i szybko na bramkę!',
    variations: '18: rondo obok 3v1. 22: rondo 5v2. Utrudnienie: czerwoni 2-2-1 (5 pressujących).',
    draw: (a) => {
      a.poly([[0, 0], [16, 12], [24, 12], [40, 0], [40, 40], [24, 28], [16, 28], [0, 40]], '#64748b', 0.06);
      a.solid([0, 0], [16, 12]); a.solid([16, 12], [16, 28]); a.solid([16, 28], [0, 40]); a.solid([40, 0], [24, 12]); a.solid([24, 12], [24, 28]); a.solid([24, 28], [40, 40]);
      a.line([28, 0], [28, 40]); a.text('strefa wykończenia', 34, 2);
      a.goal('L'); a.gkA(1.5, 20); a.mini('R', 8); a.mini('R', 16); a.mini('R', 24); a.mini('R', 32);
      a.a('5', 6, 12); a.a('4', 6, 28); a.a('3', 6, 7.5); a.a('2', 6, 32.5); a.a('6', 15, 17); a.a('8', 21, 23);
      a.a('9', 33, 16); a.a('10', 34, 26);
      a.b('', 10, 16); a.b('', 10, 25); a.b('', 18, 21); a.b('', 23, 17); a.b('', 36, 12); a.b('', 37, 28);
      a.ball(1.5, 20); a.pass([2.2, 19.5], [5.6, 12.6]); a.step(1, 3.2, 15.5);
      a.pass([6.4, 12.4], [14.6, 16.6]); a.step(2, 10.6, 13.2); a.pass([15.4, 17.4], [20.6, 22.6]); a.step(3, 18.6, 19.2);
      a.key([21.6, 22.6], [33.6, 25.6]); a.step(4, 27.5, 21.8); a.run([21, 23], [30, 30]);
    },
  });

  const sr4 = drill({
    id: 't03-sr-faza-10v10', date: '2026-10-21', name: 'T3 Śr · Faza gry BR+9 v 9 (do 10v10): budowanie 2-4-2-2 vs pressing 4-4-2 (De Zerbi)',
    category: '4 · Gra · faza gry, cała struktura', duration: 30, players: '19–21 + 1 BR (Śr: 2 BR – drugi w bramce rywala jako zmiennik po 2 seriach)', size: [65, 60], phases: ['Atak-Otwarcie', 'Atak-Budowanie', 'A/O'],
    objective: 'Cały model otwarcia: pudełko 2-4-2-2, BR jako 11. zawodnik, pauza, gra w kierunku presji, S-kombinacja i „sztuczne przejście” 4v4 przeciw pressingowi 4-4-2 (De Zerbi: 10+GK v 10 phase of play, schemat O1–O2).',
    scoring: 'Niebiescy: gol do jednej z 5 mini-bramek w kanałach na linii środkowej = 1 pkt; gol po akcji z co najmniej jednym podaniem wstecznym, które wyciągnęło pressing = 2 pkt. Czerwoni: odbiór → 8 s na gol do dużej bramki = 1 pkt; niebiescy natychmiast kontrpressing.',
    organization: '2/3 boiska (65×60 m). Na linii ok. 50 m od bramki 5 mini-bramek (po jednej w każdym kanale pionowym). Niebiescy: BR + 9 (2 ŚO, 2 bocznych, 6, 8, 10, 9, skrzydłowy). Czerwoni: 9 w pressingu 4-4-1 (przy 21 zawodnikach 10 – 4-4-2). Ukośne linie przy bramce (z książki) – niebiescy nie mogą wyprowadzać piłki w narożnikach, muszą przez środek lub bocznych na wysokości pivotów.',
    start: 'Każda akcja od BR niebieskich (piłki w bramce).',
    flow: ['BR → ŚO; ŚO szeroko i nisko, pivoty na wysokości bocznych (linia 4).', 'Cierpliwie – pauza, podanie do tyłu, czekamy na wyjście pressingu.', 'Gdy rywal zaangażuje 6+ zawodników – gra w kierunku presji / S-kombinacja i szybki atak 4v4 na mini-bramki.'],
    continuity: 'Każde zakończenie (gol, strata zakończona akcją czerwonych, aut) → nowa piłka od BR niebieskich w ciągu 5 s. Czerwoni wracają do ustawienia pressingu.',
    series: '4 × 6 min, przerwa 1:30 (RSA – wysiłek przerywany, pełne przerwy).',
    rotation: 'Po 2 seriach zamiana ról drużyn (czerwoni budują od BR). Zawodnicy w drużynie rotują pozycjami w ramach linii.',
    keys: ['Zaproś pressing – cierpliwość w niskich strefach.', 'Gra w kierunku presji: jedno dobrze zagrane podanie omija kilku pressujących.', 'Trzeci zawodnik – BR i ŚO tworzą przewagę.', 'Strata = 5 s kontrpressingu, zabezpieczenie 3+2.'],
    concept: '#05 Podanie wsteczne, #02 Wsparcie utrzymujące, #04 Gra na trzeciego (zapowiedź T4).',
    say: 'Niech biegną do nas – za ich plecami będzie 4 na 4!',
    variations: '18–19: BR+8 v 8 (czerwoni 4-3-1). 22: BR+10 v 10 (4-4-2 jak w książce). Utrudnienie: 2 kontakty w strefie budowania.',
    draw: (a) => {
      a.corners(); a.goal('L'); a.gkA(1.5, 30);
      a.solid([0, 4], [14, 18]); a.solid([0, 56], [14, 42]); a.line([50, 0], [50, 60]);
      [6, 18, 30, 42, 54].forEach(y => a.mini('R', y)); a.solid([60, 0], [60, 60]);
      a.a('5', 9, 22); a.a('4', 9, 38); a.a('3', 22, 6); a.a('2', 22, 54); a.a('6', 21, 25); a.a('8', 22, 36);
      a.a('10', 44, 24); a.a('9', 46, 34); a.a('11', 42, 8); a.a('7', 42, 52);
      a.b('9', 15, 26); a.b('10', 14, 36); a.b('11', 25, 12); a.b('6', 28, 26); a.b('8', 29, 36); a.b('7', 25, 48); a.b('3', 48, 12); a.b('4', 51, 24); a.b('5', 51, 36); a.b('2', 48, 48);
      a.ball(9, 38); a.pass([1.8, 30.5], [8.6, 37.5]); a.step(1, 4, 35.5);
      a.pass([8.6, 37.6], [21.6, 25.6]); a.step(2, 14.5, 30.2); a.pass([21.6, 25.4], [21.8, 35.4]); a.step(3, 23.3, 30.5);
      a.key([22.6, 35.6], [43.6, 24.6]); a.step(4, 33, 31); a.run([42, 8], [55, 16]);
    },
  });

  // ── CZW 22.10 (MD-2, szybkość, mała złożoność, SFG) ─────────────────
  const czw2 = drill({
    id: 't03-czw-pudelko-2-2v2', date: '2026-10-22', name: 'T3 Czw · Rondo pozycyjne 2+2v2 „pudełko” z mini-bramkami (De Zerbi)',
    category: '2 · Techniczne, mała złożoność · rondo pozycyjne', duration: 15, players: '18–22 (3–4 pola × 6)', size: [10, 10], phases: OTW,
    objective: 'Gra pary ŚO i pary pivotów w „pudełku”: przeniesienie piłki między połowami na max 2 kontakty (De Zerbi: 2+2v2 positional rondo).',
    scoring: '8 przeniesień między połowami z rzędu = 1 pkt. Czerwoni: odbiór → strzał do jednej z 4 mini-bramek (bez limitu kontaktów) = 1 pkt; niebiescy kontrpressing.',
    organization: '3–4 pola 10×10 m podzielone na 2 połowy, mini-bramki w narożnikach (po 2 na każdej linii końcowej). Niebiescy: 2 w każdej połowie (ŚO / pivoty), muszą zostać w swoich połowach. 2 czerwonych pressuje (mogą wszędzie).',
    start: 'Trener wprowadza piłkę do ŚO.',
    flow: ['Para w jednej połowie podaje między sobą, szukając podania do pary w drugiej połowie.', 'Czerwoni pressują intensywnie (krótko, max 30 s w środku).', 'Przeniesienie na 2 kontakty → druga para gra z powrotem.'],
    continuity: 'Po golu czerwonych lub piłce za polem – nowa piłka od niebieskich, natychmiast.',
    series: '4 × 2 min, przerwa 1 min (czwartek – krótko, intensywnie, pełne przerwy).',
    rotation: 'Co serię para czerwonych zamienia się z parą niebieskich.',
    keys: ['Ustawienie pod kątem do partnera – nie w jednej linii.', 'Pierwszy kontakt przygotowuje podanie do drugiej połowy.', 'Szybkie decyzje – tempo jak w meczu.'],
    concept: '#06 Przyjęcie (pierwszy kontakt przygotowuje drugie podanie).',
    say: 'Szybko i krótko – dwa kontakty, przeniesienie!',
    variations: '22: 2 pola 6v3 z książki (20×15, 4 prostokąty). Utrudnienie: 1 kontakt przy przeniesieniu.',
    draw: (a) => {
      a.solid([0, 0], [10, 0]); a.solid([0, 10], [10, 10]); a.solid([0, 0], [0, 10]); a.solid([10, 0], [10, 10]); a.solid([5, 0], [5, 10]);
      a.mini('L', 2.5); a.mini('L', 7.5); a.mini('R', 2.5); a.mini('R', 7.5);
      a.a('5', 1.5, 8); a.a('4', 3.5, 2); a.a('8', 7, 2.5); a.a('6', 8.5, 8); a.b('', 3.5, 6); a.b('', 7, 5);
      a.ball(1.5, 8); a.pass([1.8, 7.6], [3.3, 2.5]); a.pass([3.8, 2.2], [6.6, 2.5]);
    },
  });

  const czw3 = drill({
    id: 't03-czw-sztuczne-przejscie', date: '2026-10-22', name: 'T3 Czw · „Sztuczne przejście”: 3v2 wyjście spod pressingu → 4v4 + BR w 8 s (De Zerbi)',
    category: '3 · Ćwiczenie główne · szybki atak (mała złożoność, szybkość)', duration: 20, players: '18–22 + 1–2 BR', size: [55, 40], phases: ['Atak-Otwarcie', 'O/A'],
    objective: 'Gdy rywal zaangażuje wielu zawodników w pressing, z tyłu powstaje 4v4 – trzeba go wykorzystać szybko (De Zerbi: artificial transitions). Akcent szybkości: krótkie, maksymalne akcje i pełne przerwy.',
    scoring: 'Gol w 8 s od przejścia piłki przez linię środkową = 2 pkt, później = 1 pkt. Czerwoni: odbiór i podanie do swojego zawodnika w strefie budowania = 1 pkt.',
    organization: 'Pole 55×40 m podzielone linią w połowie. Strefa budowania (przy linii startowej): 3 niebieskich (ŚO, ŚO, pivot) vs 2 czerwonych. Strefa ataku: 4 niebieskich vs 4 czerwonych + BR w dużej bramce. Pozostali w 2 falach przy liniach (zmiana co akcję).',
    start: 'ŚO niebieskich z piłką na linii startowej.',
    flow: ['3v2 w strefie budowania – max 4 podania, wyjście spod pressingu.', 'Podanie do jednego z 4 w strefie ataku (gra w kierunku presji lub trzeci zawodnik).', '4v4 na bramkę – 8 s na strzał, sprint wbiegających.'],
    continuity: 'Akcja co ok. 40 s: następna fala ustawia się, gdy trwa poprzednia. Po zakończeniu fala schodzi truchtem do kolejki.',
    series: '2 × 8 min, przerwa 2 min (pełne przerwy między powtórzeniami – szybkość).',
    rotation: 'Fale: atakujący → broniący → kolejka. Każdy zawodnik ok. 6 akcji.',
    keys: ['Decyzja w 1–2 kontaktach.', 'Pierwsze spojrzenie do przodu po wyjściu spod pressingu.', 'Wbiegnięcia za linię obrony w tempo podania.'],
    concept: '#17 Piłka otwarta i atak przestrzeni (zapowiedź T8).',
    say: 'Wyszliśmy spod pressingu – teraz sprint! Osiem sekund na strzał.',
    variations: '18: 3v2 + 3v3. 22: 3v2 + 5v5. Bez BR: 2 mini-bramki.',
    draw: (a) => {
      a.corners(); a.line([27.5, 0], [27.5, 40]); a.goal('R'); a.gkB(53.5, 20);
      a.a('5', 4, 13); a.a('4', 4, 27); a.a('6', 13, 20); a.b('', 10, 15); a.b('', 10, 26);
      a.a('10', 34, 14); a.a('9', 40, 21); a.a('11', 36, 4); a.a('7', 36, 36);
      a.b('', 43, 12); a.b('', 45, 22); a.b('', 41, 31); a.b('', 32, 21);
      a.ball(4, 27); a.pass([4.4, 26.5], [12.6, 20.4]); a.step(1, 7.6, 24.6); a.key([13.6, 19.6], [33.6, 14.4]); a.step(2, 22.5, 15.5);
      a.run([36, 4], [48, 11]); a.run([40, 21], [48, 19]);
    },
  });

  const s1 = S.rożnyObrona;
  const sessions = [
    session({
      id: 't03-pon', date: '2026-10-19', title: 'T3 · Pon 19.10 (MD+1 / MD-5) · Przyjęcie i wsparcie utrzymujące',
      goal: 'Dzień po meczu (18.10): umiarkowana intensywność, dużo kontaktów z piłką. Mikrotaktyka: #06 przyjęcie zdobywające, #02 wsparcie utrzymujące, #05 podanie wsteczne jako przynęta. Bez bramkarzy (0–1 BR) – mini-bramki. Akcent motoryczny: koordynacja.',
      phases: OB,
      notes: `ORGANIZACJA: 3 pola 16×12 (rondo), 2 pola 30×24 (4v2+4), pole 50×40 z 4 mini-bramkami. ~25 piłek, znaczniki 3 kolory.\n\nKARTA TRENERA – tydzień T3: OTWARCIE GRY vs WYSOKI PRESSING (De Zerbi cz. I, schematy O1, O2, O3)\nZasady dnia: przyjęcie w kierunku gry; wsparcie utrzymujące zawsze pod piłką; podanie wsteczne = przynęta, nie ucieczka.\nPytania: Gdzie jest wolne, zanim dostanę piłkę? Kto daje mi opcję „tył”? Czy rywal skoczył za podaniem wstecznym?\nSukces: w grze 9v9 min. 3 akcje „przynęta → podanie zdobywające → gol” na drużynę.\nObciążenie: dzień po meczu – zawodnicy z >60 min w meczu: 3 serie w grze zamiast 4.`,
      blocks: [
        { title: 'Odprawa', minutes: 2, note: 'Wnioski z meczu 18.10 (1 rzecz dobra, 1 do poprawy). Hasło tygodnia: „Zapraszamy – i do przodu!”.' },
        { drill: W.pon, minutes: 18 }, { drill: pon2 }, { drill: pon3 }, { drill: pon4 },
      ],
    }),
    session({
      id: 't03-wt', date: '2026-10-20', title: 'T3 · Wt 20.10 (MD-4) · Pudełko i S-kombinacja – małe pola',
      goal: 'Automatyzm S-kombinacji i gra przez pivoty w małych grach (dużo starć – dzień siłowy). Mikrotaktyka: #11 ochrona piłki (ramię i biodro) przy przyjęciu pod presją, #04 gra na trzeciego. Akcent motoryczny: siła masą ciała + plyometria wolna.',
      phases: OB,
      notes: `ORGANIZACJA: 3 stanowiska 30×15 (manekiny, 6 mini-bramek), 2 pola 40×25 (8 mini-bramek), boisko 55×40 z 2 bramkami. ~25 piłek.\n\nKARTA TRENERA – T3\nZasady dnia: pivoty na różnych wysokościach; przyjęcie na półobrocie; najpierw środek, potem bok.\nPytania: Gdzie jest drugi pivot? Czy mogę zagrać na jeden kontakt? Kto jest trzecim zawodnikiem?\nSukces: min. 2 gole po S-kombinacji w grze 7v7 na drużynę.`,
      blocks: [
        { title: 'Odprawa', minutes: 2, note: 'Schemat O1 (pudełko, S-kombinacja) w zakładce Taktyka.' },
        { drill: W.wt, minutes: 18 }, { drill: wt2 }, { drill: wt3 }, { drill: wt4 },
      ],
    }),
    session({
      id: 't03-sr', date: '2026-10-21', title: 'T3 · Śr 21.10 (MD-3) · Klepsydra i budowanie 2-4-2-2 vs pressing',
      goal: 'Dzień najwyższej złożoności: pełny model otwarcia przeciw wysokiemu pressingowi na dużym polu. Pudełko → klepsydra → „sztuczne przejście” 4v4. Akcent motoryczny: wytrzymałość (RSA) w grach.',
      phases: ['Atak-Otwarcie', 'Atak-Budowanie', 'A/O'],
      notes: `ORGANIZACJA: 2 pola 20×15 (rondo 4v4+3), pole 40×40 w kształcie klepsydry (pachołki) + 4 mini-bramki + pole 10×10 na rondo, 2/3 boiska z 5 mini-bramkami na ~50. m. ~25 piłek.\n\nKARTA TRENERA – T3\nZasady dnia: zaproś pressing; gra w kierunku presji; BR jako 11. zawodnik; po stracie 5 s.\nPytania: Ilu rywali pressuje? Gdzie jest 4v4? Kiedy grać krótko, a kiedy bezpośrednio?\nSukces: ≥ 50% akcji od BR kończy się przejściem linii środkowej bez wybicia.`,
      blocks: [
        { title: 'Odprawa', minutes: 2, note: 'Schematy O1 (pudełko), O3 (klepsydra i szerokie romby) i O2 (sztuczne przejście 4v4).' },
        { drill: W.sr, minutes: 18 }, { drill: sr2 }, { drill: sr3 }, { drill: sr4 },
      ],
    }),
    session({
      id: 't03-czw', date: '2026-10-22', title: 'T3 · Czw 22.10 (MD-2) · Sztuczne przejście + SFG (rożny w obronie)',
      goal: 'Mała złożoność, szybkość i świeżość przed meczem 24.10. Wyjście spod pressingu i szybki atak 4v4, obrona rzutu rożnego (MP #07 – oś boiska). Akcent motoryczny: szybkość + plyometria szybka.',
      phases: ['Atak-Otwarcie', 'O/A', 'SFG'],
      notes: `ORGANIZACJA: 4 pola 10×10 z mini-bramkami, pole 55×40 z bramką, pół boiska na SFG. ~25 piłek.\n\nKARTA TRENERA – T3\nZasady dnia: szybkie decyzje, pełne przerwy; SFG – atakujemy piłkę, oś boiska decyduje o kierunku wybicia.\nSukces: 3 gole w 8 s w „sztucznym przejściu” na zespół; w SFG ≥ 8/12 wybić poza pole karne.\nPo treningu: skład i zadania na mecz 24.10.`,
      blocks: [
        { title: 'Odprawa', minutes: 2, note: 'Plan na mecz 24.10 + schemat S2 (rożny w obronie).' },
        { drill: W.czw, minutes: 18 }, { drill: czw2 }, { drill: czw3 }, { drill: s1, minutes: 15 },
        { drill: wt3, minutes: 18, note: 'Gra końcowa 6v6: 3 × 5 min, pełne przerwy, bez limitu kontaktów – świeżość przed meczem.' },
      ],
    }),
  ];

  const schemes = {
    'Atak-Otwarcie': [{
      id: 20261019001, name: 'O3 · Klepsydra i szerokie romby (De Zerbi)',
      comments: tac.html('Z pudełka do klepsydry', [
        'Do pudełka (2 ŚO + 6 + 8) dochodzą 10 i 9 – powstaje klepsydra: pionowe schodkowanie zawodników w środku.',
        'Klepsydra ułatwia S-kombinację: ŚO → pivot → po skosie drugi pivot → podanie do 10/9.',
        'Klepsydra ściąga rywala do środka – na bokach powstają szerokie romby: boczny obrońca, pivot, skrzydłowy, napastnik/10.',
        'Szerokie romby pozwalają szybko przenieść grę ze środka na bok i z powrotem.',
      ], 'K. Gerega, Roberto De Zerbi – The Master of Timing, s. 17, 22'),
      frames: [
        tac.frame({ gk: [350, 1030], lb: [100, 760], lcb: [260, 920], rcb: [440, 920], rb: [600, 760], ldm: [300, 790], rdm: [410, 710], lw: [80, 430], cam: [290, 590], rw: [620, 430], st: [400, 540] }, { ogk: [350, 60], olb: [150, 420], olcb: [290, 470], orcb: [420, 470], orb: [560, 420], oldm: [250, 680], ordm: [470, 640], olw: [130, 690], ocam: [440, 860], orw: [570, 690], ost: [300, 870] }, [440, 920], [], [{ type: 'polygon', points: [{ x: 235, y: 950 }, { x: 465, y: 950 }, { x: 430, y: 750 }, { x: 445, y: 515 }, { x: 255, y: 515 }, { x: 280, y: 750 }], color: '#1d4ed8', opacity: 0.1 }, tac.text('KLEPSYDRA', 350, 990, '#1d4ed8')]),
        tac.frame({ gk: [350, 1030], lb: [100, 760], lcb: [260, 920], rcb: [440, 920], rb: [600, 760], ldm: [300, 790], rdm: [410, 710], lw: [80, 430], cam: [290, 590], rw: [620, 430], st: [400, 540] }, tac.with({ ogk: [350, 60], olb: [150, 420], olcb: [290, 470], orcb: [420, 470], orb: [560, 420], oldm: [250, 680], ordm: [470, 640], olw: [130, 690], ocam: [440, 860], orw: [570, 690], ost: [300, 870] }, { ost: [330, 900], ocam: [430, 880] }), [300, 790], [tac.pass([440, 920], [305, 795])]),
        tac.frame({ gk: [350, 1030], lb: [100, 760], lcb: [260, 920], rcb: [440, 920], rb: [600, 760], ldm: [300, 790], rdm: [410, 710], lw: [80, 430], cam: [290, 590], rw: [620, 430], st: [400, 540] }, tac.with({ ogk: [350, 60], olb: [150, 420], olcb: [290, 470], orcb: [420, 470], orb: [560, 420], oldm: [250, 680], ordm: [470, 640], olw: [130, 690], ocam: [440, 860], orw: [570, 690], ost: [300, 870] }, { ost: [330, 900], ocam: [430, 880], oldm: [290, 740] }), [410, 710], [tac.pass([300, 790], [405, 715])]),
        tac.frame(tac.with({ gk: [350, 1030], lb: [100, 760], lcb: [260, 920], rcb: [440, 920], rb: [600, 760], ldm: [300, 790], rdm: [410, 710], lw: [80, 430], cam: [290, 590], rw: [620, 430], st: [400, 540] }, { rb: [590, 650], rw: [600, 480] }), tac.with({ ogk: [350, 60], olb: [150, 420], olcb: [290, 470], orcb: [420, 470], orb: [560, 420], oldm: [250, 680], ordm: [470, 640], olw: [130, 690], ocam: [440, 860], orw: [570, 690], ost: [300, 870] }, { ost: [330, 900], ocam: [430, 880], oldm: [300, 750], ordm: [450, 680] }), [400, 540], [tac.key([410, 710], [400, 550]), tac.run([600, 760], [590, 655])], [{ type: 'polygon', points: [{ x: 590, y: 650 }, { x: 410, y: 710 }, { x: 400, y: 540 }, { x: 600, y: 480 }], color: '#16a34a', opacity: 0.15 }, tac.text('szeroki romb', 520, 600, '#16a34a')]),
      ],
    }],
  };
  return { drills: [W.pon, W.wt, W.sr, W.czw, s1, pon2, pon3, pon4, wt2, wt3, wt4, sr2, sr3, sr4, czw2, czw3], sessions, schemes };
}
