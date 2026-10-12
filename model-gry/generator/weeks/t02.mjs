// T2 · 13–15.10.2026 (Wt–Czw) · mecz nd 18.10
// FAZA TYGODNIA: Atak – tworzenie szans przeciw niskiemu blokowi (lustro: Obrona – niski blok).
// Czwartek: przejście A/O – kontrpressing (lustro: O/A – wyjście spod kontrpressingu).
// Umiejętności tygodnia:
//   indywidualna – atak:   podanie zdobywające (prostopadłe za linię / wycofanie)
//   indywidualna – obrona: krycie wbiegającego (orientacja na zawodnika, kontakt) – MP #01
//   grupowa:               gra na trzeciego „góra–dół–przez” – MP #04 (lustro: kontrola wbiegającego za plecy)
//   zespołowa:             2-3-5 przeciw niskiemu blokowi (lustro: niski blok 4-4-1, kompaktowy środek)
// Źródła: De Zerbi cz. II–III (s. 28–29, 33–37), Xabi cz. III–IV, Mikrotaktyczny Poniedziałek #01, #04, #10.
import { drill, session, tac } from '../lib.mjs';

export const meta = { code: 'T02', range: '13-15.10', slug: 'tworzenie_szans_vs_niski_blok', title: 'Tworzenie szans vs niski blok' };

const WEEK_CARD = `KARTA TYGODNIA T2 (13–15.10, mecz nd 18.10)
Faza: ATAK – TWORZENIE SZANS przeciw niskiemu blokowi ↔ lustro: OBRONA – NISKI BLOK. Czwartek: A/O kontrpressing ↔ O/A wyjście spod kontrpressingu.
Umiejętności tygodnia (te same przez 3 dni, rośnie złożoność: Wt grupowa, Śr zespołowa, Czw przejście):
• Indywidualna – atak: PODANIE ZDOBYWAJĄCE (prostopadłe za linię w tempo biegu / wycofanie spod linii końcowej).
• Indywidualna – obrona: KRYCIE WBIEGAJĄCEGO (orientacja na zawodnika, nie na strefę; widzę piłkę i rywala; kontakt) – MP #01.
• Grupowa: GRA NA TRZECIEGO „góra–dół–przez” (MP #04) ↔ obrona: nie daj się zahipnotyzować piłce zwrotnej – kontroluj wbiegającego za plecy.
• Zespołowa: 2-3-5 PRZECIW NISKIEMU BLOKOWI ↔ obrona: NISKI BLOK 4-4-1 (8–12 m między liniami, chroń środek, kieruj do boku).
Zasada: każde ćwiczenie ma wskazówki przeciwstawne – 🔵 niebiescy trenują atak, 🔴 czerwoni trenują obronę. Drużyny zamieniają się rolami w połowie ćwiczenia, więc każdy trenuje obie strony.`;

const A_KEYS = {
  pass: 'Podanie zdobywające: w tempo biegu partnera, za linię obrońców – nie do nogi stojącego.',
  cut: 'Wycofanie spod linii końcowej po ziemi na 11. metr – tam stoi wbiegający z głębi.',
  third: 'Góra–dół–przez: podanie do „ściany” plecami, zgranie na 1 kontakt, trzeci wbiega za plecy.',
  wall: '„Ściana” po zgraniu natychmiast wraca do gry (nowa linia podania).',
};
const B_KEYS = {
  mark: 'Krycie wbiegającego: orientacja na zawodnika, który wbiega w strefę – nie na pustą strefę.',
  body: 'Ustawienie bokiem: widzę piłkę i swojego rywala jednocześnie.',
  contact: 'Kontakt fizyczny w polu karnym – rywal nie może uderzyć czysto.',
  hypno: 'Nie śledź wzrokiem piłki zwrotnej („hipnoza”) – sprawdź, kto wbiega za twoje plecy.',
  compact: 'Blisko siebie: 8–12 m między liniami, chronimy środek, kierujemy grę do boku.',
};

export function build({ W, S }) {
  const NB = ['Atak-Tworzenie szans', 'Obrona'];

  // ── WT 13.10 (MD-5, siła, małe pola) – akcent: umiejętność GRUPOWA ─────────
  const wt2 = drill({
    id: 't02-wt-rondo-transfer-gdp', date: '2026-10-13', name: 'T2 Wt · Rondo przeniesienia 4+1 v 2: „góra–dół–przez” (De Zerbi)',
    category: '2 · Techniczne, mała złożoność · rondo – trzeci zawodnik', duration: 15, players: '18–22 (3 pola × 7)', size: [20, 10], phases: NB,
    objective: 'Umiejętność grupowa tygodnia w najprostszej formie: piłka może przejść do drugiej połowy pola tylko kombinacją „góra–dół–przez”. Indywidualnie: podanie zdobywające (ostatnie podanie „przez”) i krycie wbiegającego (obrońcy).',
    scoring: 'Każde przeniesienie piłki do drugiej połowy kombinacją „góra–dół–przez” = 1 pkt (3 przeniesienia z rzędu = +1). Obrońcy: odbiór = gol do jednej z 4 mini-bramek (bez limitu kontaktów) = 1 pkt.',
    organization: '3 pola 20×10 m podzielone na 2 połowy, po 2 mini-bramki na krótkich bokach. Niebiescy: 4 w jednej połowie + 1 („cel”) w drugiej. Czerwoni: 2 w połowie z piłką. Max 2 kontakty dla niebieskich.',
    start: 'Trener (lub zawodnik z boku) wprowadza piłkę do niebieskich w połowie z dwoma obrońcami.',
    flow: ['4v2: krótkie podania, szukamy „ściany” – zawodnika ustawionego plecami przy linii środkowej.', 'GÓRA: podanie do „ściany”; DÓŁ: zgranie na 1 kontakt do zawodnika przodem do gry; PRZEZ: podanie do celu w drugiej połowie.', 'Po przeniesieniu 3 niebieskich przechodzi do drugiej połowy (znów 4v2), 2 obrońców za nimi.'],
    continuity: 'Gra ciągła – piłka przechodzi z połowy do połowy. Odbiór → po strzale czerwonych nowa piłka od trenera. Piłka za polem → nowa od zawodnika, który nie wybił.',
    series: '4 × 3 min, przerwa 45 s.',
    rotation: 'Co serię nowa para obrońców (zamiana z dwoma niebieskimi). Każdy zawodnik minimum 1 seria w obronie.',
    sides: {
      a: { label: 'Niebiescy – atak: gra na trzeciego', keys: [A_KEYS.third, A_KEYS.wall, A_KEYS.pass, 'Pierwszy kontakt przygotowuje drugie podanie.'], say: 'Do góry, w dół i przez! Zgrałeś – od razu nowa pozycja.' },
      b: { label: 'Czerwoni – obrona: kontrola trzeciego', keys: [B_KEYS.hypno, 'Jeden doskakuje do „ściany”, drugi pilnuje zawodnika przodem do gry.', 'Zamknij podanie „przez” ustawieniem ciała.'], say: 'Nie patrz tylko na piłkę – kto biegnie za twoje plecy?' },
    },
    concept: '#04 Gra na trzeciego (struktura: bliższa linia podania → zgranie → atak wolnej przestrzeni; „hipnoza piłką zwrotną”).',
    variations: '18: 3 pola 4+1v2 (6 os.) z jednym obrońcą wchodzącym. 22: 2 pola × 8 (5+1v2) + 1 pole × 6. Ułatwienie: bez limitu kontaktów. Utrudnienie: zgranie tylko na 1 kontakt.',
    draw: (a) => {
      a.corners(); a.solid([10, 0], [10, 10]); a.mini('L', 3); a.mini('L', 7); a.mini('R', 3); a.mini('R', 7);
      a.a('', 1, 5); a.a('', 5, 0.6); a.a('', 5, 9.4); a.a('Ś', 8.8, 5); a.a('C', 16, 5);
      a.b('', 4, 3.8); a.b('', 6.2, 6.6); a.ball(1, 5);
      a.pass([1.6, 5], [8.2, 5]); a.step(1, 4.5, 5.9); a.pass([8.6, 4.4], [5.4, 1.2]); a.step(2, 7.6, 2.3);
      a.key([5.6, 1], [15.4, 4.6]); a.step(3, 10.8, 2.2); a.run([5, 9.4], [12.5, 8]); a.run([8.8, 5.6], [12.5, 6.5]);
    },
  });

  const wt3 = drill({
    id: 't02-wt-4v4-2-strefy', date: '2026-10-13', name: 'T2 Wt · Gra 4v4+2: do strefy wykończenia tylko po „góra–dół–przez” (De Zerbi)',
    category: '3 · Ćwiczenie główne · gra pozycyjna z kierunkiem, dużo starć', duration: 25, players: '20–22 (2 pola × 10–11)', size: [30, 16], phases: NB,
    objective: 'Gra na trzeciego pod presją przeciwnika, który broni nisko przed strefą wykończenia. Atakujący: podanie zdobywające do wbiegającego. Broniący: krycie wbiegającego – nie wpuść rywala za plecy.',
    scoring: 'Gol do mini-bramki ze strefy wykończenia = 1 pkt; wejście do strefy możliwe tylko po „góra–dół–przez” – inne wejście = piłka dla rywala. Gol na 1 kontakt = 2 pkt. Broniący: przechwyt podania „przez” = 1 pkt.',
    organization: '2 pola 30×16 m: strefa gry 20 m + 2 strefy wykończenia po 5 m, w każdej 2 mini-bramki. 4v4 + 2 neutralnych (żółci, na bokach strefy gry, 1 kontakt, grają z drużyną przy piłce). Max 2 kontakty w strefie gry od serii 3. Przy 21–22 zawodnikach 3. neutralny.',
    start: 'Neutralny wprowadza piłkę do drużyny, która zaczyna (na zmianę).',
    flow: ['4+2 v 4 w strefie gry – drużyna z piłką szuka „ściany”.', 'Góra–dół–przez: podanie zdobywające do zawodnika wbiegającego do strefy wykończenia.', 'W strefie wykończenia 1 kontakt na strzał (ew. 2 od serii 4).'],
    continuity: 'Gra ciągła, zmiana kierunku po każdym golu: drużyna, która straciła gola, wznawia od swojej linii. Piłka za polem → neutralny wprowadza piłkę drużynie, która nie wybiła.',
    series: '5 × 4 min, przerwa 1 min (dzień siłowy – intensywnie, krótko).',
    rotation: 'Neutralni zmieniają się co serię. Drużyny co serię zmieniają pole (rywal).',
    sides: {
      a: { label: 'Niebiescy (drużyna przy piłce) – tworzenie szans', keys: [A_KEYS.third, A_KEYS.pass, 'Timing: wbiegasz w momencie zgrania, nie wcześniej.', 'Gdy „góra–dół–przez” zamknięte – utrzymaj i zmień stronę.'], say: 'Zgranie i od razu za plecy – podanie w twój bieg!' },
      b: { label: 'Czerwoni (drużyna bez piłki) – niski blok', keys: [B_KEYS.mark, B_KEYS.body, B_KEYS.hypno, 'Przekaż krycie głosem i ręką, gdy rywal przebiega przez twoją strefę.'], say: 'Patrz na piłkę i na swojego – wbiegający jest twój!' },
    },
    concept: '#04 Gra na trzeciego ↔ #01 Krycie.',
    variations: '18: 2 pola 4v4+1. 22: 2 pola 4v4+3 (De Zerbi). Utrudnienie: strefa wykończenia 4 m. Ułatwienie: 3 neutralnych.',
    draw: (a) => {
      a.corners(); a.zone(0, 0, 5, 16); a.zone(25, 0, 5, 16); a.mini('L', 4); a.mini('L', 12); a.mini('R', 4); a.mini('R', 12);
      a.n('N', 15, 0.5); a.n('N', 15, 15.5);
      a.a('', 8, 5); a.a('', 9, 12); a.a('Ś', 19, 8); a.a('', 15, 3);
      a.b('', 12, 7); a.b('', 14, 12); a.b('', 21, 10); a.b('', 23, 13);
      a.ball(8, 5); a.pass([8.6, 5.4], [18.4, 7.8]); a.step(1, 13, 5.5); a.pass([18.6, 8.6], [10, 11.6]); a.step(2, 14.5, 9.2);
      a.run([15, 3], [26, 3]); a.key([10.6, 11.4], [25.6, 3.4]); a.step(3, 18.5, 6.5); a.pass([26.4, 3.4], [30, 4]);
    },
  });

  const wt4 = drill({
    id: 't02-wt-7v7-gdp', date: '2026-10-13', name: 'T2 Wt · Gra BR+7v7+BR: strefa wykończenia po „góra–dół–przez” (De Zerbi)',
    category: '4 · Gra · małe boisko, wysoka intensywność', duration: 30, players: '16 + 2 BR (+ 2–6 zmienników)', size: [50, 40], phases: NB,
    objective: 'Umiejętność grupowa w grze z bramkarzami: progresja i wejście w pole karne kombinacją na trzeciego przeciw drużynie broniącej nisko. Broniący trenują krycie wbiegającego w polu karnym.',
    scoring: 'Gol po wejściu do strefy wykończenia kombinacją „góra–dół–przez” = 2 pkt; inny gol = 1 pkt. Broniący: odbiór i gol w 6 s = 1 pkt.',
    organization: 'Boisko 50×40 m, 2 duże bramki z BR. Strefy wykończenia 12 m przed bramkami (linia talerzyków). Drużyny BR + 7. Drużyna bez piłki broni nisko: tylko 2 zawodników może przekroczyć połowę boiska. W strefie wykończenia max 2 kontakty. Zmiennicy przy linii, zmiana co 2 min.',
    start: 'BR drużyny rozpoczynającej, potem gra ciągła.',
    flow: ['Budowanie od BR, rywal broni w bloku na swojej połowie.', 'Szukamy „ściany” (napastnik plecami, 10 w kieszeni) – zgranie do wbiegającego z głębi.', 'Podanie „przez” do strefy wykończenia i strzał po 1–2 kontaktach.'],
    continuity: 'Gra ciągła. Gol / aut bramkowy → BR wznawia od razu (rywal 3 s na powrót do bloku). Aut boczny → trener wrzuca nową piłkę drużynie, która nie wybiła.',
    series: '4 × 6 min, przerwa 1:30.',
    rotation: 'Zmiennicy co 2 min; BR zamieniają się stronami po 2 seriach.',
    sides: {
      a: { label: 'Drużyna przy piłce – tworzenie szans', keys: [A_KEYS.third, A_KEYS.pass, A_KEYS.cut, 'Strzał po 1–2 kontaktach w polu karnym (MP #21).'], say: 'Szukamy ściany i trzeciego. Podanie w bieg – i strzał z pierwszej!' },
      b: { label: 'Drużyna bez piłki – niski blok', keys: [B_KEYS.compact, B_KEYS.mark, B_KEYS.contact, B_KEYS.hypno], say: 'Wszyscy razem, blisko. W polu karnym każdy ma swojego wbiegającego!' },
    },
    concept: '#04 Gra na trzeciego ↔ #01 Krycie.',
    variations: '18: 7v7 + 2 zmienników. 22: BR+8v8+BR na 55×42 + 2 zmienników. Utrudnienie: tylko 1 zawodnik broniących może przekroczyć połowę (głębszy blok).',
    draw: (a) => {
      a.corners(); a.goal('L'); a.goal('R'); a.gkA(1.5, 20); a.gkB(48.5, 20); a.line([12, 0], [12, 40]); a.line([38, 0], [38, 40]); a.line([25, 0], [25, 40]);
      a.zone(38, 0, 12, 40, '#f59e0b', 0.1); a.zone(0, 0, 12, 40, '#f59e0b', 0.1);
      a.a('4', 8, 13); a.a('5', 8, 27); a.a('6', 17, 20); a.a('8', 26, 28); a.a('10', 31, 15); a.a('9', 36, 22); a.a('7', 30, 36);
      a.b('', 42, 13); a.b('', 43, 21); a.b('', 42, 29); a.b('', 34, 11); a.b('', 33, 26); a.b('', 28, 14); a.b('', 23, 13);
      a.ball(17, 20); a.pass([17.6, 20.2], [35.4, 21.8]); a.step(1, 26, 22.4); a.pass([35.6, 22.6], [26.6, 27.6]); a.step(2, 31.5, 26.4);
      a.run([31, 15], [41, 17]); a.key([27, 27.4], [40.6, 17.4]); a.step(3, 35, 18.8); a.pass([41.4, 17.6], [49, 19]);
    },
  });

  // ── ŚR 14.10 (MD-4, RSA, duże pola) – akcent: umiejętność ZESPOŁOWA ─────────
  const sr2 = drill({
    id: 't02-sr-podanie-zdobywajace-krycie', date: '2026-10-14', name: 'T2 Śr · Podanie zdobywające kontra krycie wbiegającego: 3v2 + BR (2 stanowiska)',
    category: '2 · Techniczne, mała złożoność · umiejętności indywidualne', duration: 15, players: '18–22 + 2 BR (2 stanowiska × 9–11)', size: [30, 30], phases: ['Atak-Tworzenie szans', 'Atak-Finalizacja', 'Obrona'],
    objective: 'Dwie umiejętności indywidualne tygodnia w bezpośrednim pojedynku: skrzydłowy wybiera podanie zdobywające (prostopadłe do wbiegającego lub wycofanie spod linii końcowej), obrońcy kryją wbiegających (orientacja na zawodnika, kontakt).',
    scoring: 'Gol po prostopadłym lub wycofaniu = 2 pkt; gol na 1 kontakt = +1. Obrońcy: przechwyt / wybicie = 1 pkt, przechwyt i podanie do trenera = 2 pkt.',
    organization: '2 stanowiska (obie połowy boiska), na każdym duża bramka z BR. Atakujący: podający „6” (kolejka z piłkami), skrzydłowy w bocznym sektorze, 2 wbiegających (9 i 10). Obrońcy: 2 (kryją wbiegających). Kolejki: atakujący i obrońcy; akcja na zmianę z lewej i prawej strony.',
    start: '„6” podaje do skrzydłowego w bocznym sektorze – start wbiegnięć.',
    flow: ['Skrzydłowy przyjmuje w ruchu i prowadzi piłkę w kierunku pola karnego.', '9 i 10 wbiegają: jeden na bliższy słupek / za linię, drugi z głębi na 11. metr.', 'Skrzydłowy wybiera: prostopadłe za obrońców albo wycofanie spod linii końcowej – strzał na 1–2 kontakty.'],
    continuity: 'Akcja co ok. 20 s, na zmianę stron. Po akcji atakujący zostają obrońcami następnej, obrońcy idą do kolejki atakujących. BR wznawia do trenera.',
    series: '3 × 4 min, przerwa 1 min (obrońcy w serii 1 półaktywni, potem aktywni).',
    rotation: 'Atak → obrona → kolejka. Co serię zmiana pozycji: skrzydłowy ↔ wbiegający.',
    sides: {
      a: { label: 'Niebiescy – podanie zdobywające', keys: [A_KEYS.pass, A_KEYS.cut, 'Głowa w górę przed podaniem – gdzie stoi obrońca, a gdzie jest wolne?', 'Wbiegający: ruch „do i od” i start w momencie piłki otwartej.'], say: 'Patrz, zanim podasz: obrońca wysoko – prostopadle; obrońca przy bramce – wycofanie!' },
      b: { label: 'Czerwoni – krycie wbiegającego', keys: [B_KEYS.mark, B_KEYS.body, B_KEYS.contact, 'Ruch po skosie do piłki – wybij albo wejdź w kontakt.'], say: 'Trzymaj swojego. Widzisz piłkę i jego – nie odwracaj się tyłem!' },
    },
    concept: '#01 Krycie ↔ #21 Wnioski z goli MŚ 2022 (wycofanie, wbiegnięcie z głębi, 1–2 kontakty).',
    variations: '18: 3v1 + BR. 22: 4v2 + BR (dodatkowy wbiegający z głębi). Utrudnienie: 3. obrońca startuje z linii końcowej.',
    draw: (a) => {
      a.corners(); a.goal('R', 15); a.gkB(28.5, 15); a.solid([14, 3], [30, 3]); a.solid([14, 27], [30, 27]); a.solid([14, 3], [14, 27]);
      a.a('6', 4, 15); a.a('', 2, 13); a.a('', 2, 17); a.ball(4, 15);
      a.a('7', 12, 2.5); a.a('9', 14, 12); a.a('10', 10, 18); a.b('', 18, 13); a.b('', 17, 19);
      a.pass([4.6, 14.6], [11.6, 3]); a.step(1, 7.4, 7.6); a.dribble([12.6, 2.5], [24, 2.6]); a.step(2, 18, 1.4);
      a.run([14, 12], [25, 11]); a.run([10, 18], [19, 17]);
      a.key([24.4, 3], [24.6, 10.4]); a.pass([24.4, 3.4], [19.6, 16.6]); a.step(3, 23, 7);
    },
  });

  const sr3 = drill({
    id: 't02-sr-8v8-35-vs-44', date: '2026-10-14', name: 'T2 Śr · Gra pozycyjna 8 v 8+BR: 3-5 przeciw niskiemu blokowi 4-4 (De Zerbi)',
    category: '3 · Ćwiczenie główne · gra pozycyjna z bramką', duration: 25, players: '16 + 1 BR (+ 2–6 zmienników)', size: [40, 50], phases: NB,
    objective: 'Umiejętność zespołowa w skróconej formie: pięciu atakujących zajmuje 5 kanałów (szerokość + półprzestrzenie + środek), trzech z tyłu kontroluje tempo i podaje zdobywająco. Broniący: kompaktowy blok 4-4, ochrona środka, krycie wbiegających.',
    scoring: 'Niebiescy: gol = 1 pkt; gol po podaniu zdobywającym w półprzestrzeń lub po wycofaniu = 2 pkt. Czerwoni: odbiór → 6 s na gol do jednej z 3 mini-bramek = 1 pkt (niebiescy kontrpressing).',
    organization: 'Pole 40×50 m od linii końcowej. Duża bramka z BR czerwonych, na linii startowej 3 mini-bramki. Niebiescy 8 w ustawieniu 3-5, czerwoni 8 w bloku 4-4. Linia spalonego 16 m przed bramką (obowiązuje po jej przekroczeniu). Drugi BR: trening z trenerem BR, zmiana po 2 seriach. Zmiennicy wchodzą co serię.',
    start: 'Trener przy linii startowej podaje do środkowego z trójki niebieskich.',
    flow: ['Trójka przesuwa piłkę, piątka z przodu stoi w pięciu kanałach na wysokości linii obrony.', 'Podanie zdobywające do zawodnika schodzącego w półprzestrzeń / „góra–dół–przez”.', 'Wejście za linię spalonego, prostopadłe lub wycofanie i strzał.'],
    continuity: 'Każde zakończenie (gol, obrona BR, aut, upływ 6 s kontry) → trener natychmiast podaje nową piłkę do trójki niebieskich. Czerwoni wracają do bloku 4-4.',
    series: '4 × 5 min, przerwa 1:15; po 2 seriach zamiana ról.',
    rotation: 'Po 2 seriach niebiescy ↔ czerwoni (każdy trenuje atak i blok). Zmiennicy co serię.',
    sides: {
      a: { label: 'Niebiescy – tworzenie szans (3-5)', keys: ['Pięć kanałów zajętych: skrzydła szeroko, półprzestrzenie między obrońcami, środek przypina ŚO.', 'Najpierw środek – podanie zdobywające między linie.', A_KEYS.third, 'Gdy blok przesunie się do piłki – szybka zmiana strony.'], say: 'Każdy w swoim kanale. Rozciągamy ich – i podanie w lukę!' },
      b: { label: 'Czerwoni – niski blok 4-4', keys: [B_KEYS.compact, 'Przesuwamy się razem w stronę piłki – dalsza strona zawęża.', B_KEYS.mark, 'Komunikacja: przekazanie krycia, gdy rywal zmienia kanał.'], say: 'Środek zamknięty, niech grają do boku. Każdy wbiegający ma swojego!' },
    },
    concept: '#04 Gra na trzeciego ↔ #14 Krycie strefowe (kompaktowość, przekazywanie krycia).',
    variations: '18: 7 v 7+BR (3-4 vs 4-3). 22: 8 v 8+BR + 6 zmienników w 2 falach lub 9 v 9+BR na 45×55. Utrudnienie: czerwoni 9 (4-4-1).',
    draw: (a) => {
      a.corners(); a.goal('R', 25); a.gkB(38.5, 25); a.line([24, 0], [24, 50]); a.text('linia spalonego', 22, 2);
      a.mini('L', 10); a.mini('L', 25); a.mini('L', 40);
      a.a('4', 10, 14); a.a('6', 11, 25); a.a('5', 10, 36);
      a.a('11', 28, 3); a.a('10', 27, 15); a.a('9', 29, 25); a.a('8', 27, 35); a.a('7', 28, 47);
      a.b('', 32, 11); a.b('', 32, 20); a.b('', 32, 30); a.b('', 32, 39); a.b('', 21, 12); a.b('', 21, 21); a.b('', 21, 29); a.b('', 21, 38);
      a.ball(11, 25); a.pass([11.6, 24.8], [10.4, 14.6]); a.step(1, 9.6, 19.5); a.run([27, 15], [24.5, 16.5]); a.key([10.8, 14.2], [24, 16.4]); a.step(2, 17.5, 13.4);
      a.run([28, 3], [36, 12]); a.key([24.6, 16.2], [35.6, 12.4]); a.step(3, 30.5, 13.2);
    },
  });

  const sr4 = drill({
    id: 't02-sr-faza-235-vs-441', date: '2026-10-14', name: 'T2 Śr · Faza gry 10 v 9+BR: 2-3-5 przeciw niskiemu blokowi 4-4-1 (De Zerbi)',
    category: '4 · Gra · faza gry, cała struktura', duration: 30, players: '19–21 + 2 BR', size: [55, 68], phases: NB,
    objective: 'Umiejętność zespołowa tygodnia w pełnej formie: 2-3-5 (pięciu w pięciu kanałach), przejście w 2-3-2 przy kombinacjach centralnych. Lustro: niski blok 4-4-1 – kompaktowość, ochrona środka, kierowanie do boku, krycie w polu karnym.',
    scoring: 'Niebiescy: gol = 1 pkt; gol po podaniu zdobywającym przez środek (półprzestrzeń / „góra–dół–przez”) = 2 pkt; gol po wycofaniu = 2 pkt. Czerwoni: odbiór → 8 s na gol do jednej z 3 mini-bramek na linii środkowej = 1 pkt; każde 3 kolejne akcje niebieskich bez strzału = 1 pkt.',
    organization: 'Połowa boiska + 5 m (55×68). Duża bramka z BR czerwonych, 3 mini-bramki na linii środkowej. Niebiescy 10 (2 ŚO, 3 pomocników, 5 w linii ataku). Czerwoni 9 + BR w bloku 4-4-1. Spalony od 16. metra. Drugi BR: zmiana co 2 serie. Trener z piłkami przy linii środkowej.',
    start: 'Trener podaje do ŚO niebieskich na linii środkowej – czerwoni w bloku.',
    flow: ['Pięciu z przodu zajmuje 5 kanałów, 2+3 z tyłu.', 'Najpierw środek: dwóch z półprzestrzeni schodzi (2-3-2) – podanie zdobywające / gra na trzeciego.', 'Gdy środek zamknięty – bok i wycofanie spod linii końcowej.'],
    continuity: 'Każde zakończenie (gol, obrona BR, aut, upływ 8 s kontry) → trener natychmiast podaje nową piłkę do ŚO niebieskich. Czerwoni wracają do bloku. Między akcjami max 5 s.',
    series: '4 × 6 min, przerwa 1:30; po 2 seriach zamiana ról. Ostatnie 3 min serii 4 – pełna intensywność (MP #21: najwięcej goli pod koniec połowy).',
    rotation: 'Po 2 seriach niebiescy ↔ czerwoni. W drużynie skrzydłowi ↔ pomocnicy po 1. serii.',
    sides: {
      a: { label: 'Niebiescy – tworzenie szans (2-3-5)', keys: ['Każdy kanał zajęty – rozciągnij blok wszerz i w głąb.', 'Najpierw środek, potem bok.', A_KEYS.pass, A_KEYS.cut, 'Zabezpieczenie 2+3 przy każdej akcji.'], say: 'Pięciu z przodu, każdy w swoim kanale. Podanie w lukę albo wycofanie!' },
      b: { label: 'Czerwoni – niski blok 4-4-1', keys: [B_KEYS.compact, 'Linia obrony razem – nie wychodzi pojedynczo.', B_KEYS.mark, B_KEYS.contact, 'Po odbiorze: pierwsze podanie do przodu (kontra 8 s).'], say: 'Środek zamknięty, kierujemy do boku. W polu karnym – każdy ma swojego!' },
    },
    concept: '#04 Gra na trzeciego, #21 wycofanie ↔ #01 Krycie, #14 Krycie strefowe.',
    variations: '18–19: 9 v 8+BR. 22: 11 v 10+BR (4-4-2). Utrudnienie: czerwoni 6 s na kontrę, ale 5 mini-bramek.',
    draw: (a) => {
      a.corners(); a.goal('R', 34); a.gkB(53.5, 34); a.solid([39, 14], [55, 14]); a.solid([39, 54], [55, 54]); a.solid([39, 14], [39, 54]); a.line([39, 0], [39, 68]);
      [14, 34, 54].forEach(y => a.mini('L', y)); a.coach(0.8, 4);
      a.a('4', 8, 26); a.a('5', 8, 42); a.a('6', 20, 34); a.a('3', 18, 16); a.a('2', 18, 52);
      a.a('11', 37, 4); a.a('8', 36, 22); a.a('9', 38, 34); a.a('10', 36, 46); a.a('7', 37, 64);
      a.b('', 44, 12); a.b('', 45, 26); a.b('', 45, 40); a.b('', 44, 56); a.b('', 32, 14); a.b('', 32, 28); a.b('', 32, 40); a.b('', 32, 54); a.b('', 25, 34);
      a.ball(20, 34); a.pass([20.6, 33.6], [35.4, 22.6]); a.step(1, 27, 26.4); a.run([38, 34], [33, 33]); a.pass([36.4, 22.6], [33.4, 32.4]); a.step(2, 36.5, 28);
      a.run([36, 46], [47, 40]); a.key([33.6, 33.4], [46.6, 39.6]); a.step(3, 40.5, 38.6); a.pass([47.4, 40], [53, 35]);
    },
  });

  // ── CZW 15.10 (MD-3, szybkość, mała złożoność) – PRZEJŚCIE A/O ↔ O/A + SFG ─────────
  const czw2 = drill({
    id: 't02-czw-rondo-5v2-kontra', date: '2026-10-15', name: 'T2 Czw · Rondo 5v2: kontrpressing 4 s kontra wyjście na mini-bramkę',
    category: '2 · Techniczne, mała złożoność · rondo z przejściem', duration: 15, players: '18–22 (3 pola × 6–8)', size: [14, 14], phases: ['A/O', 'O/A'],
    objective: 'Przejście w najprostszej formie. Piątka po stracie od razu atakuje piłkę (A/O – kontrpressing), dwójka po odbiorze ma 4 s na wyjście spod presji i gol do mini-bramki (O/A).',
    scoring: '10 podań piątki = 1 pkt. Dwójka: odbiór i gol w 4 s = 2 pkt. Piątka: odbiór z powrotem w 4 s = 1 pkt.',
    organization: '3 pola 14×14 m, na dwóch przeciwległych bokach po 1 mini-bramce. 5 na obwodzie, 2 w środku. Max 2 kontakty dla piątki.',
    start: 'Trener (lub zawodnik z boku) wprowadza piłkę do piątki.',
    flow: ['5v2 – utrzymanie piłki.', 'Odbiór → dwójka atakuje mini-bramkę (4 s).', 'Piątka natychmiast kontrpressuje: najbliżsi na piłkę, reszta zamyka strzał.'],
    continuity: 'Po każdej akcji nowa piłka od zawodnika, który stracił; on też idzie do środka po zakończeniu kontry.',
    series: '4 × 2:30, przerwa 1 min (czwartek – krótko, intensywnie, pełne przerwy).',
    rotation: 'Zawodnik, który stracił piłkę, zamienia się z obrońcą, który był najdłużej w środku.',
    sides: {
      a: { label: 'Piątka – A/O: kontrpressing', keys: ['Mając piłkę – myśl o stracie: pierwsza i druga linia asekuracji pod piłką (MP #10).', 'Strata: najbliższy atakuje piłkę natychmiast, dwóch zamyka mini-bramki.', 'Nie faulujemy – zabieramy czas i miejsce.'], say: 'Stracisz – od razu odbierasz! Cztery sekundy!' },
      b: { label: 'Dwójka – O/A: wyjście spod kontrpressingu', keys: ['Po odbiorze pierwsze spojrzenie do przodu – mini-bramka.', 'Pierwszy kontakt poza strefę presji (od rywala).', 'Partner od razu daje linię podania.'], say: 'Odebrałeś – pierwszy kontakt od presji i na bramkę!' },
    },
    concept: '#10 Faza przejściowa – asekuracja w ataku.',
    variations: '18: 3 pola 4v2. 22: 2 pola 6v2 + 1 pole 5v2.',
    draw: (a) => {
      a.corners(); a.mini('T', 7); a.mini('B', 7);
      a.a('', 0.5, 4); a.a('', 0.5, 10); a.a('', 13.5, 4); a.a('', 13.5, 10); a.a('', 7, 13.5);
      a.b('', 5, 6); a.b('', 9, 8); a.ball(0.5, 10);
      a.pass([1, 9.8], [6.6, 13.2]); a.step(1, 3.4, 12.6); a.pass([7.4, 13.2], [13, 4.6]); a.step(2, 10.6, 9.6);
      a.dribble([9, 8], [7.3, 1]); a.text('odbiór → 4 s', 7, 3.6, '#dc2626'); a.run([13.5, 4], [9.5, 2]);
    },
  });

  const czw3 = drill({
    id: 't02-czw-strata-pod-polem-karnym', date: '2026-10-15', name: 'T2 Czw · Atak 6 v 4+BR → strata → kontrpressing 5 s kontra kontra 8 s',
    category: '3 · Ćwiczenie główne · przejście A/O (mała złożoność, szybkość)', duration: 20, players: '18–22 + 1–2 BR (fale)', size: [40, 40], phases: ['A/O', 'O/A', 'Atak-Tworzenie szans'],
    objective: 'Przejście po stracie w ataku na niski blok: zawodnicy blisko piłki odbierają ją w 5 s, zanim rywal wyjdzie z kontrą. Lustro: drużyna, która odebrała piłkę przy własnym polu karnym, wychodzi spod presji i kontratakuje (O/A).',
    scoring: 'Niebiescy: gol = 1 pkt; odbiór w 5 s po stracie = 2 pkt; gol w 6 s po takim odbiorze = 3 pkt. Czerwoni: wyjście spod kontrpressingu i gol do jednej z 2 mini-bramek w 8 s = 2 pkt.',
    organization: 'Pole 40×40 m od linii końcowej. Duża bramka z BR (czerwoni), na linii startowej 2 mini-bramki dla kontry czerwonych. Niebiescy 6 vs czerwoni 4 + BR. Pozostali w falach przy linii startowej (zmiana co 2 akcje). Krótkie akcje, pełne przerwy – akcent szybkości.',
    start: 'Trener z linii startowej podaje do niebieskiego 6.',
    flow: ['Niebiescy atakują 6v4 – szybko, max 3 podania do strzału.', 'Po stracie: trzech najbliższych atakuje piłkę, dwóch zamyka podania do przodu, jeden zabezpiecza.', 'Czerwoni po odbiorze: pierwsze podanie poza strefę presji i kontra na mini-bramki w 8 s.'],
    continuity: 'Akcja co ok. 30 s. Gdy czerwoni strzelą lub upłynie 8 s – trener od razu podaje nową piłkę kolejnej fali niebieskich. Czerwoni zostają 4 akcje.',
    series: '2 × 8 min, przerwa 2 min.',
    rotation: 'Fale niebieskich co 2 akcje; czwórka czerwonych zmienia się co 4 akcje. Każdy trenuje obie strony.',
    sides: {
      a: { label: 'Niebiescy – atak i A/O (kontrpressing)', keys: ['Atakujemy blisko siebie – wtedy po stracie jesteśmy blisko piłki.', 'Pierwsze 5 s: najbliższy na piłkę, pozostali zamykają podania do przodu.', 'Jeden zawsze zabezpiecza długą piłkę.', A_KEYS.pass], say: 'Strata pod ich bramką to najlepszy moment na odbiór – pięć sekund!' },
      b: { label: 'Czerwoni – niski blok i O/A (wyjście spod presji)', keys: [B_KEYS.mark, 'Po odbiorze: pierwsze podanie poza strefę presji (do boku / do tyłu i do przodu).', 'Ochrona piłki ramieniem i biodrem, gdy rywal atakuje z tyłu (MP #11).', 'Kontra: prowadź na obrońcę, oddaj w odpowiednim momencie.'], say: 'Odbierasz – nie kopiesz na oślep. Wyjdź spod presji i do przodu!' },
    },
    concept: '#10 Asekuracja w ataku ↔ #11 Ochrona piłki.',
    variations: '18: 5 v 4+BR. 22: 7 v 5+BR. Bez BR: 2 mini-bramki zamiast dużej.',
    draw: (a) => {
      a.corners(); a.goal('R', 20); a.gkB(38.5, 20); a.solid([24, 4], [40, 4]); a.solid([24, 36], [40, 36]); a.solid([24, 4], [24, 36]);
      a.mini('L', 10); a.mini('L', 30); a.coach(1, 20);
      a.a('6', 16, 20); a.a('8', 22, 27); a.a('10', 26, 13); a.a('9', 31, 22); a.a('11', 30, 6); a.a('7', 31, 33);
      a.b('', 34, 14); a.b('', 34, 26); a.b('', 29, 18); a.b('', 28, 25);
      a.text('strata', 27, 21.5, '#dc2626'); a.ball(28, 25); a.dribble([28, 25.6], [26.5, 31]);
      a.run([22, 27], [25.6, 30.4]); a.run([31, 22], [28.8, 24.4]); a.run([31, 33], [27.6, 32.4]); a.run([16, 20], [18, 30]);
    },
  });

  const czw5 = drill({
    id: 't02-czw-gra-8v8-wahadla', date: '2026-10-15', name: 'T2 Czw · Gra BR+8v8+BR z 2 neutralnymi na wahadłach: zawężaj i odbieraj (MP #10)',
    category: '4 · Gra · przejścia, krótkie serie', duration: 20, players: '18–20 + 2 BR (8v8 + 2 neutralnych)', size: [55, 40], phases: ['A/O', 'O/A'],
    objective: 'Przejścia w grze: drużyna z piłką zawęża pole i ma dwie linie asekuracji pod piłką, po stracie natychmiast odbiera (A/O). Drużyna, która odbierze, wychodzi spod kontrpressingu i atakuje szybko (O/A).',
    scoring: 'Gol = 1 pkt; odbiór w 5 s po stracie = 1 pkt; gol w 8 s po takim odbiorze = 3 pkt; gol w 8 s po wyjściu spod kontrpressingu = 2 pkt.',
    organization: 'Boisko 55×40 m, 2 duże bramki z BR. 8v8 + 2 neutralnych na liniach bocznych (wahadła – grają z drużyną przy piłce, max 2 kontakty, nie strzelają). 21–22 zawodników: zmiennicy co 2 min.',
    start: 'BR drużyny rozpoczynającej, potem gra ciągła.',
    flow: ['Atak z wykorzystaniem wahadeł – pozostali zawężają pole gry.', 'Dwie linie asekuracji pod piłką (2 + 3).', 'Strata → doskok najbliższych; odbiór → wyjście spod presji i szybki atak.'],
    continuity: 'Gra ciągła. Gol / aut bramkowy → BR wznawia od razu. Aut boczny → neutralny wprowadza piłkę drużynie, która nie wybiła.',
    series: '4 × 4 min, przerwa 1:30 (MD-3: krótko i intensywnie).',
    rotation: 'Neutralni zmieniają się co serię.',
    sides: {
      a: { label: 'Drużyna przy piłce – A/O', keys: ['Zawężaj i skracaj pole, mając piłkę.', 'Pierwsza i druga linia asekuracji pod piłką.', 'Strata: pressuj, gdy rywal ma złe przyjęcie; cofnij się, gdy ma czyste przyjęcie i przewagę.'], say: 'Mamy piłkę – blisko siebie. Stracimy – pięć sekund na odbiór!' },
      b: { label: 'Drużyna, która odbiera – O/A', keys: ['Pierwsze spojrzenie do przodu.', 'Pierwszy kontakt od presji, podanie poza strefę kontrpressingu (często do wahadła).', 'Biegi w głąb od razu po odbiorze.'], say: 'Odbiór – i natychmiast z dala od ich pressingu, do przodu!' },
    },
    concept: '#10 Faza przejściowa – asekuracja w ataku (środek z odcinka).',
    variations: '18: 7v7 + 2 neutralnych. 22: 9v9 + 2 neutralnych na 60×42.',
    draw: (a) => {
      a.corners(); a.goal('L'); a.goal('R'); a.gkA(1.5, 20); a.gkB(53.5, 20); a.line([0, 3], [55, 3]); a.line([0, 37], [55, 37]);
      a.n('N', 27, 1.5); a.n('N', 30, 38.5);
      a.a('', 10, 15); a.a('', 10, 25); a.a('', 20, 18); a.a('', 26, 13); a.a('', 26, 24); a.a('', 34, 8); a.a('', 36, 20); a.a('', 34, 30);
      a.b('', 45, 14); a.b('', 45, 26); a.b('', 38, 14); a.b('', 38, 26); a.b('', 30, 18); a.b('', 22, 10); a.b('', 22, 29); a.b('', 15, 20);
      a.zone(18, 6, 20, 28, '#1d4ed8', 0.07); a.text('zawężenie pola', 28, 33, '#1d4ed8');
      a.ball(34, 8); a.pass([34.4, 7.6], [29.6, 2]); a.dribble([30, 18], [33, 10]); a.run([26, 13], [32, 9]); a.run([36, 20], [34, 11]);
    },
  });

  const sessions = [
    session({
      id: 't02-wt', date: '2026-10-13', title: 'T2 · Wt 13.10 (MD-5) · Gra na trzeciego ↔ kontrola wbiegającego – małe pola',
      goal: 'Akcent: umiejętność GRUPOWA tygodnia – gra na trzeciego „góra–dół–przez” (lustro: nie daj się zahipnotyzować piłce zwrotnej, kontroluj wbiegającego). W tle umiejętności indywidualne: podanie zdobywające ↔ krycie wbiegającego. Małe pola, dużo starć. Akcent motoryczny: siła masą ciała + plyometria wolna.',
      phases: NB,
      notes: `${WEEK_CARD}\n\nORGANIZACJA DNIA: 3 pola 20×10 (12 mini-bramek), 2 pola 30×16 ze strefami wykończenia (8 mini-bramek), boisko 50×40 z 2 bramkami. ~25 piłek, znaczniki 3 kolory.\nPytania do zawodników: Kto jest ścianą, a kto trzecim? (atak) · Kto biegnie za moje plecy? (obrona)\nSukces dnia: min. 2 gole w grze 7v7 po „góra–dół–przez” na drużynę; obrońcy – min. 3 przechwyty podania „przez” w grze 4v4+2.`,
      blocks: [
        { title: 'Odprawa', minutes: 2, note: 'Karta tygodnia (4 umiejętności). Pokaz „góra–dół–przez” na tablicy. Hasło: „Ściana – i za plecy!”.' },
        { drill: W.wt, minutes: 18 }, { drill: wt2 }, { drill: wt3 }, { drill: wt4 },
      ],
    }),
    session({
      id: 't02-sr', date: '2026-10-14', title: 'T2 · Śr 14.10 (MD-4) · 2-3-5 ↔ niski blok 4-4-1 – duże pola',
      goal: 'Akcent: umiejętność ZESPOŁOWA tygodnia – 2-3-5 przeciw niskiemu blokowi (lustro: niski blok 4-4-1, kompaktowy środek). Na początku umiejętności indywidualne w pojedynku: podanie zdobywające ↔ krycie wbiegającego. Akcent motoryczny: wytrzymałość (RSA) w grach.',
      phases: NB,
      notes: `${WEEK_CARD}\n\nORGANIZACJA DNIA: 2 stanowiska z bramkami (obie połowy boiska), pole 40×50 z bramką i 3 mini-bramkami (linia spalonego 16 m), połowa boiska + 5 m z 3 mini-bramkami na linii środkowej. ~30 piłek.\nPytania do zawodników: Czy każdy kanał jest zajęty? Prostopadle czy wycofanie? (atak) · Czy jesteśmy blisko siebie? Kogo kryję w polu karnym? (obrona)\nSukces dnia: ≥ 50% akcji w fazie gry kończy się strzałem (niebiescy); ≥ 50% akcji bez strzału (czerwoni) – rywalizacja drużyn po zamianie ról.\nSchemat w Taktyce: T3 · 2-3-5 → 2-3-2 i 3-1-6.`,
      blocks: [
        { title: 'Odprawa', minutes: 2, note: 'Schemat T3 (2-3-5) w zakładce Taktyka: 5 kanałów w ataku ↔ blok 4-4-1 w obronie.' },
        { drill: W.sr, minutes: 18 }, { drill: sr2 }, { drill: sr3 }, { drill: sr4 },
      ],
    }),
    session({
      id: 't02-czw', date: '2026-10-15', title: 'T2 · Czw 15.10 (MD-3) · Przejście A/O: kontrpressing ↔ wyjście spod presji + SFG',
      goal: 'Faza przejściowa związana z tematem tygodnia: strata przy ataku na niski blok → kontrpressing 5 s (lustro: odbiór przy własnym polu karnym → wyjście spod presji i kontra). Rzut rożny w ataku ↔ w obronie. Mała złożoność, akcent szybkości, pełne przerwy. Ostatni trening przed meczem nd 18.10.',
      phases: ['A/O', 'O/A', 'SFG'],
      notes: `${WEEK_CARD}\n\nORGANIZACJA DNIA: 3 pola 14×14 (6 mini-bramek), pole 40×40 z bramką i 2 mini-bramkami, pół boiska na SFG, boisko 55×40 z 2 bramkami. ~25 piłek.\nPytania do zawodników: Kto pierwszy atakuje piłkę po stracie? (A/O) · Gdzie zagrać pierwsze podanie po odbiorze? (O/A)\nSukces dnia: min. 3 odbiory w 5 s na serię w grze 8v8; w SFG min. 4 strzały celne na 12 rzutów.\nPo treningu: skład i zadania na mecz 18.10.`,
      blocks: [
        { title: 'Odprawa', minutes: 2, note: 'Plan na mecz 18.10 + schemat AO1 (kontrpressing 5 s i 3+2) i S1 (rożny w ataku).' },
        { drill: W.czw, minutes: 18 }, { drill: czw2 }, { drill: czw3 }, { drill: S.rożnyAtak, minutes: 15 }, { drill: czw5 },
      ],
    }),
  ];

  const schemes = {
    'Atak-Tworzenie szans': [{
      id: 20261012001, name: 'T3 · 2-3-5 → 2-3-2 i 3-1-6 przeciw niskiemu blokowi (De Zerbi)',
      comments: tac.html('Struktura ataku na niski blok ↔ niski blok rywala', [
        '2-3-5: dwóch ŚO zabezpiecza, trzech w linii pomocy kontroluje tempo, pięciu w linii ataku zajmuje każdy kanał (2 skrzydła, 2 półprzestrzenie, środek).',
        'Najpierw środek: dwóch z półprzestrzeni schodzi i powstaje 2-3-2 – szybkie, krótkie kombinacje („góra–dół–przez”).',
        'Gdy blok zamyka środek: 3-1-6 – boczny dołącza do ŚO (trójka), jeden pivot gra, sześciu z przodu tworzy dwa szerokie trójkąty.',
        'Trójkąty na bokach: naddanie / podminięcie i wycofanie spod linii końcowej (42% asyst z półprzestrzeni, 34% z boku – MP #21).',
        'LUSTRO (gdy to my bronimy nisko): 8–12 m między liniami, chroń środek, kieruj do boku, w polu karnym orientacja na wbiegającego.',
      ], 'K. Gerega, Roberto De Zerbi – The Master of Timing, s. 33–36; Mikrotaktyczny Poniedziałek #01, #20, #21'),
      frames: [
        tac.frame(
          { gk: [350, 1000], lcb: [280, 680], rcb: [420, 680], lb: [210, 520], ldm: [350, 540], rb: [490, 520], lw: [70, 300], cam: [230, 290], st: [350, 260], rdm: [470, 290], rw: [630, 300] },
          { ogk: [350, 60], olb: [170, 200], olcb: [290, 210], orcb: [410, 210], orb: [530, 200], olw: [170, 330], oldm: [300, 340], ordm: [400, 340], orw: [530, 330], ocam: [410, 470], ost: [290, 470] },
          [350, 540], [], [tac.text('2-3-5', 600, 620, '#1d4ed8')]),
        tac.frame(
          { gk: [350, 1000], lcb: [280, 680], rcb: [420, 680], lb: [210, 520], ldm: [350, 540], rb: [490, 520], lw: [70, 300], cam: [270, 400], st: [350, 260], rdm: [430, 400], rw: [630, 300] },
          { ogk: [350, 60], olb: [170, 200], olcb: [290, 210], orcb: [410, 210], orb: [530, 200], olw: [170, 330], oldm: [300, 340], ordm: [400, 340], orw: [530, 330], ocam: [410, 470], ost: [290, 470] },
          [270, 400], [tac.pass([350, 540], [275, 405]), tac.run([230, 290], [270, 400]), tac.run([470, 290], [430, 400])], [tac.text('2-3-2', 600, 620, '#1d4ed8')]),
        tac.frame(
          { gk: [350, 1000], lcb: [300, 680], rcb: [430, 680], lb: [180, 640], ldm: [350, 520], rb: [600, 330], lw: [70, 280], cam: [200, 330], st: [330, 230], rdm: [470, 250], rw: [520, 330] },
          { ogk: [350, 60], olb: [160, 200], olcb: [290, 210], orcb: [410, 210], orb: [540, 210], olw: [160, 340], oldm: [300, 350], ordm: [410, 350], orw: [560, 360], ocam: [410, 480], ost: [290, 480] },
          [600, 330], [tac.key([350, 520], [595, 335])], [tac.text('3-1-6', 600, 620, '#1d4ed8'), { type: 'polygon', points: [{ x: 600, y: 330 }, { x: 520, y: 330 }, { x: 470, y: 250 }], color: '#16a34a', opacity: 0.18 }, { type: 'polygon', points: [{ x: 70, y: 280 }, { x: 200, y: 330 }, { x: 330, y: 230 }], color: '#16a34a', opacity: 0.18 }]),
        tac.frame(
          { gk: [350, 1000], lcb: [300, 680], rcb: [430, 680], lb: [180, 640], ldm: [350, 520], rb: [640, 130], lw: [70, 280], cam: [200, 330], st: [330, 150], rdm: [400, 230], rw: [520, 330] },
          { ogk: [350, 60], olb: [160, 200], olcb: [290, 170], orcb: [410, 170], orb: [570, 170], olw: [160, 340], oldm: [300, 350], ordm: [430, 320], orw: [560, 360], ocam: [410, 480], ost: [290, 480] },
          [640, 130], [tac.pass([600, 330], [520, 330]), tac.key([520, 330], [635, 140]), tac.run([600, 330], [640, 130]), tac.key([640, 130], [400, 235]), tac.run([470, 250], [400, 230])], [tac.text('wycofanie', 520, 210, '#dc2626')]),
      ],
    }],
  };

  return { drills: [W.wt, W.sr, W.czw, S.rożnyAtak, wt2, wt3, wt4, sr2, sr3, sr4, czw2, czw3, czw5], sessions, schemes };
}
