// Stałe fragmenty gry (blok czwartkowy, MD-2). Wykorzystywane rotacyjnie w kolejnych tygodniach.
import { drill } from './lib.mjs';

const common = {
  category: '5 · SFG · stałe fragmenty gry', duration: 15, players: '18–22 (2 grupy: wykonujący i broniący)',
};

export function sfg(date) {
  const rożnyObrona = drill({
    ...common, date, id: 'sfg-rozny-obrona', name: 'SFG · Rzut rożny w obronie: 4 w strefie + 3 kryjących, oś boiska (MP #07)',
    size: [40, 50], phases: ['SFG', 'Obrona'],
    objective: 'Organizacja obrony rzutu rożnego (schemat S2): 4 zawodników w strefie (bliższy słupek, 5. metr środek, dalszy, 11. metr), 3 kryjących najgroźniejszych, 1 na zbiórce, 2 wyżej do kontry. Zasady z MP #01 i #07.',
    scoring: 'Broniący: wybicie poza pole karne = 1 pkt; zbiórka i podanie do kontrującego = 2 pkt; kontra zakończona strzałem w 8 s = 3 pkt. Atakujący: strzał celny = 1 pkt, gol = 3 pkt.',
    organization: 'Pół boiska, duża bramka z BR. Atakujący 8 + wykonawca, broniący 10 + BR. Rzuty na zmianę z lewej i prawej. 2 grupy zmieniają się rolami po 6 rzutach.',
    start: 'Wykonawca dośrodkowuje z narożnika na sygnał trenera.',
    flow: ['Strefowi stoją na swoich punktach, kryjący przy swoich zawodnikach (kontakt, pozycja „widzę piłkę i rywala”).', 'Piłka w powietrzu: atak piłki – strefowi wychodzą do piłki w swojej strefie, kryjący blokują wbiegnięcie.', 'Po wybiciu cała linia wychodzi do 16. metra, zbierający gra do jednego z dwóch zawodników na połowie (kontra 8 s).'],
    continuity: 'Kolejny rzut co 30–40 s (piłki przy narożnikach). Po wybiciu za linię boczną – od razu następny rożny z drugiej strony.',
    series: '2 × 6 rzutów na grupę (łącznie 12), zmiana ról.',
    rotation: 'Po 6 rzutach broniący ↔ atakujący. Kryjący dobierani wzrostem do groźnych zawodników rywala.',
    keys: ['Orientacja na zawodnika wbiegającego w strefę, nie na pustą strefę (MP #01).', 'Oś boiska: gdy piłka minie oś bramki – wybijaj za siebie (aut bramkowy / rożny); gdy nie minie – wybijaj przed siebie, tam skąd przyszła (MP #07).', 'Kontakt fizyczny przed dośrodkowaniem – rywal nie może uderzyć czysto.', 'Wyjście całą linią po wybiciu.'],
    concept: '#07 Obrona pola karnego przed dośrodkowaniem, #01 Krycie.',
    say: 'Atakuj piłkę, nie czekaj na nią. Piłka za środkiem bramki – wybijasz za siebie, przed środkiem – przed siebie. Po wybiciu wszyscy wychodzimy!',
    variations: 'Gra głową: limit 6 główek na zawodnika na trening (U14). Wariant: krótki rożny – najbliższy strefowy wychodzi 2v2.',
    draw: (a) => {
      a.goal('R', 25); a.gkB(38.5, 25);
      a.solid([24, 5], [24, 45]); a.solid([24, 5], [40, 5]); a.solid([24, 45], [40, 45]); a.solid([34.5, 16], [34.5, 34]);
      a.a('W', 40, 0.8); a.ball(40, 0.8);
      a.b('S1', 37.5, 21); a.b('S2', 35, 24); a.b('S3', 36.5, 29); a.b('S4', 29, 25);
      a.b('K', 33, 19); a.b('K', 32, 27); a.b('K', 31.5, 31);
      a.b('Z', 22, 25); a.b('', 8, 10); a.b('', 8, 38);
      a.a('', 30, 19); a.a('', 29.5, 28); a.a('', 30, 32); a.a('', 25, 22); a.a('', 21, 30);
      a.run([30, 19], [36, 22]); a.run([29.5, 28], [35, 27]);
      a.curve([40, 1.5], [35.5, 23], [33, 8]);
      a.line([34.5, 0], [34.5, 50]); a.text('oś bramki', 31.5, 48);
    },
  });

  const rożnyAtak = drill({
    ...common, date, id: 'sfg-rozny-atak', name: 'SFG · Rzut rożny w ataku: atak przed strefę i 11. metr (schemat S1)',
    size: [40, 50], phases: ['SFG', 'Atak-Finalizacja'],
    objective: 'Warianty rzutu rożnego w ataku (schemat S1): blok zasłaniający, wbiegnięcie przed pierwszego strefowego, zawodnik na 11. metrze i na zbiórce. Wnioski z analizy goli MŚ 2022 (MP #21): gole w polu karnym po 1–2 kontaktach.',
    scoring: 'Gol = 3 pkt, gol z 1. kontaktu = 4 pkt, strzał celny = 1 pkt. Broniący: wybicie poza pole karne = 1 pkt.',
    organization: 'Pół boiska, duża bramka z BR. Atakujący 9, broniący 9 + BR (ustawienie jak rywale – mieszane). 3 warianty: A – dośrodkowanie na bliższy słupek z przedłużeniem, B – na 11. metr do wbiegającego z głębi, C – krótki rożny 2v1 i wycofanie (cut-back).',
    start: 'Trener pokazuje kartkę z wariantem (A/B/C) — wykonawca i zespół widzą ją przed rzutem.',
    flow: ['Ustawienie w „pociągu” przy 11. metrze, blokujący przy bramkarzu.', 'Start wbiegnięć w momencie podniesienia ręki wykonawcy.', 'Dobitki i zbiórka – dwóch na skraju pola karnego, dwóch zabezpiecza kontrę (3+2).'],
    continuity: 'Rzut co 30 s, na zmianę z lewej i prawej. Po odbiorze broniących – 8 s kontry na mini-bramkę na połowie (zabezpieczenie musi zareagować).',
    series: '12 rzutów (4 × wariant A/B/C), zmiana ról po 6.',
    rotation: 'Wykonawcy: 2 zawodników z najlepszym dośrodkowaniem, zmiana co 3 rzuty.',
    sides: {
      a: { label: 'Niebiescy – rzut rożny w ataku', keys: ['Gubienie krycia ruchem „do i od” (MP #18).', 'Wbiegnięcie z głębi w drugie tempo (MP #21).', 'Strzał po 1–2 kontaktach – nie przyjmuj w polu karnym, jeśli możesz uderzyć.', 'Zabezpieczenie 3+2 zawsze na miejscu.'], say: 'Wbiegamy w tempo ręki wykonawcy. Każdy wie, gdzie biegnie. Pierwszy kontakt to strzał!' },
      b: { label: 'Czerwoni – rzut rożny w obronie', keys: ['Orientacja na zawodnika wbiegającego, nie na pustą strefę (MP #01).', 'Pozycja ciała: widzę piłkę i swojego zawodnika jednocześnie.', 'Kontakt przed dośrodkowaniem – rywal nie uderza czysto.', 'Oś bramki: piłka za osią – wybijasz za siebie, przed osią – przed siebie (MP #07).'], say: 'Trzymaj swojego, atakuj piłkę, po wybiciu wszyscy wychodzimy!' },
    },
    concept: '#18 Tworzenie wolnej przestrzeni, #21 Wnioski z goli MŚ 2022 ↔ #01 Krycie, #07 Obrona pola karnego.',
    variations: 'Gra głową: limit 6 główek na zawodnika. Wariant: rzut wolny boczny z tymi samymi strefami.',
    draw: (a) => {
      a.goal('R', 25); a.gkB(38.5, 25);
      a.solid([24, 5], [24, 45]); a.solid([24, 5], [40, 5]); a.solid([24, 45], [40, 45]);
      a.a('W', 40, 0.8); a.ball(40, 0.8);
      a.a('1', 28, 24); a.a('2', 28, 26); a.a('3', 28, 28); a.a('B', 37, 27); a.a('Z', 22, 25); a.a('', 10, 18); a.a('', 10, 32);
      a.run([28, 24], [37, 20]); a.run([28, 26], [34, 24]); a.run([28, 28], [32, 31]);
      a.b('', 36, 21); a.b('', 34.5, 25); a.b('', 33, 29); a.b('', 31, 23); a.b('', 30, 27);
      a.curve([40, 1.5], [36.5, 20.5], [34, 8]); a.text('11 m', 29, 33);
    },
  });

  const wolnyObrona = drill({
    ...common, date, id: 'sfg-wolny-boczny-obrona', name: 'SFG · Rzut wolny boczny w obronie: linia na 16. metrze i wyjście',
    size: [40, 50], phases: ['SFG', 'Obrona'],
    objective: 'Obrona rzutu wolnego z bocznego sektora: linia obrony 4–5 zawodników, mur 1–2, wyjście linią przed dośrodkowaniem (spalony) i atak piłki.',
    scoring: 'Broniący: rywal na spalonym = 1 pkt, wybicie = 1 pkt, kontra ze strzałem = 3 pkt. Atakujący: gol = 3 pkt.',
    organization: 'Pół boiska z BR. Rzuty z 3 pozycji (lewa, prawa, półprzestrzeń 25 m). Broniący 10 + BR, atakujący 9.',
    start: 'Wykonawca ustawia piłkę, trener daje sygnał.',
    flow: ['Mur 2 zawodników zamyka strzał z bliższej strony.', 'Linia ustawiona na 16. metrze, przodem do piłki, widzi rywali.', 'Gdy wykonawca podnosi rękę – linia schodzi 2 kroki, w momencie podania atak piłki.'],
    continuity: 'Co 30 s kolejny rzut z innej pozycji. Wybicie → 8 s kontry na mini-bramkę.',
    series: '12 rzutów, zmiana ról po 6.',
    rotation: 'Zmiana wykonawców co 3 rzuty.',
    keys: ['Komunikacja: jeden lider linii (komendy „wyjście”, „stop”).', 'Otwarte ustawienie ciała – widzę piłkę i rywala.', 'Orientacja na wbiegającego, nie na strefę.'],
    concept: '#01 Krycie, #14 Krycie strefowe (przekazywanie krycia).',
    say: 'Słuchamy lidera linii. Atakujemy piłkę do przodu – nie czekamy na nią przy bramce.',
    variations: 'Wariant mieszany: 3 kryjących + linia 4.',
    draw: (a) => {
      a.goal('R', 25); a.gkB(38.5, 25);
      a.solid([24, 5], [24, 45]); a.solid([24, 5], [40, 5]); a.solid([24, 45], [40, 45]);
      a.a('W', 18, 6); a.ball(18, 6);
      a.b('M', 20.5, 9); a.b('M', 21.3, 10.2);
      [15, 20, 25, 30, 35].forEach(y => a.b('', 24, y)); a.line([24, 3], [24, 47]);
      [17, 23, 28, 33].forEach(y => a.a('', 22, y));
      a.run([22, 23], [32, 23]); a.curve([18, 7], [32, 25], [26, 10]);
    },
  });

  const wolnyAtak = drill({
    ...common, date, id: 'sfg-wolny-boczny-atak', name: 'SFG · Rzut wolny boczny w ataku: dwa tempa wbiegnięcia',
    size: [40, 50], phases: ['SFG', 'Atak-Finalizacja'],
    objective: 'Rzut wolny boczny w ataku: pierwsze tempo (wbiegnięcie przed linię) i drugie tempo (wbiegnięcie z głębi na 11. metr), plus wariant zagrania po ziemi na skraj pola karnego.',
    scoring: 'Gol = 3 pkt, gol z drugiego tempa = 4 pkt. Broniący: wybicie = 1 pkt.',
    organization: 'Pół boiska z BR, rzuty z 25–30 m z boku. Atakujący 9, broniący 9 + BR.',
    start: 'Kartka z wariantem: A – dośrodkowanie na 1. tempo, B – na 2. tempo, C – po ziemi do wbiegającego na 18. metr i strzał.',
    flow: ['Atakujący stoją w linii na wysokości obrońców (spalony!).', 'Pierwsza fala rusza w momencie podniesienia ręki, druga 1 s później z głębi.', 'Dwóch zawodników na zbiórce, 3+2 zabezpiecza.'],
    continuity: 'Kolejny rzut co 30 s. Odbiór broniących = kontra 8 s.',
    series: '12 rzutów.',
    rotation: 'Zmiana wykonawców co 3 rzuty.',
    keys: ['Ruch „do i od” dla zgubienia krycia (MP #18).', 'Drugie tempo – wbiegnięcie z głębi (MP #21).', 'Pilnuj linii spalonego.'],
    concept: '#18 Tworzenie wolnej przestrzeni, #21 Wnioski z goli MŚ 2022.',
    say: 'Pierwsza fala ciągnie obrońców, druga fala strzela.',
    variations: 'Mniej główek: wariant C po ziemi.',
    draw: (a) => {
      a.goal('R', 25); a.gkB(38.5, 25);
      a.solid([24, 5], [24, 45]); a.solid([24, 5], [40, 5]); a.solid([24, 45], [40, 45]);
      a.a('W', 16, 8); a.ball(16, 8);
      [18, 23, 28].forEach(y => { a.a('1', 23, y); a.run([23, y], [33, y]); });
      [21, 26].forEach(y => { a.a('2', 17, y); a.run([17, y], [29, y + 1]); });
      [16, 21, 26, 31].forEach(y => a.b('', 26, y));
      a.curve([16, 9], [30, 27], [24, 12]);
    },
  });

  const aut = drill({
    ...common, date, id: 'sfg-aut-atak', name: 'SFG · Wrzut z autu w ataku: 3 opcje i wyjście spod presji',
    size: [30, 25], phases: ['SFG', 'Atak-Budowanie'],
    objective: 'Utrzymanie piłki po wrzucie z autu w połowie rywala: trzy opcje (krótko do nogi, za plecy, do tyłu), ruch „do i od” (MP #18), przyjęcie zdobywające (MP #06).',
    scoring: 'Utrzymanie piłki i 3 podania = 1 pkt, wejście w strefę wykończenia = 2 pkt. Broniący: odbiór = 1 pkt.',
    organization: '2 stanowiska 30×25 m przy linii bocznej. Na stanowisku 4 atakujących + wrzucający vs 3 broniących (+ zmiennicy). Strefa wykończenia 8 m na końcu.',
    start: 'Wrzucający ma piłkę, sygnał trenera.',
    flow: ['Opcja 1: ruch „do i od” – piłka za plecy obrońcy.', 'Opcja 2: krótko do nogi i podanie zwrotne do wrzucającego.', 'Opcja 3: do tyłu do wsparcia utrzymującego i zmiana strony.'],
    continuity: 'Po każdej akcji kolejny aut (piłki przy wrzucającym), co 20 s.',
    series: '3 × 4 min, zmiana ról.',
    rotation: 'Wrzucający zmienia się co 3 auty.',
    keys: ['Ruch bez piłki zawsze podwójny („do i od”).', 'Wrzucający po wrzucie natychmiast wchodzi do gry.', 'Przyjęcie w kierunku gry.'],
    concept: '#18 Tworzenie wolnej przestrzeni, #06 Przyjęcie piłki.',
    say: 'Ruszamy się, zanim piłka poleci. Wrzucasz – wchodzisz do gry!',
    variations: 'Bez stref: aut w środku pola jako przejście do budowania.',
    draw: (a) => {
      a.solid([0, 25], [30, 25]); a.disc(0, 0); a.disc(30, 0); a.disc(0, 25); a.zone(22, 0, 8, 25);
      a.a('W', 12, 25); a.ball(12, 25);
      a.a('1', 15, 18); a.a('2', 10, 17); a.a('3', 7, 22); a.a('4', 20, 12);
      a.b('', 16, 20); a.b('', 11, 19); a.b('', 18, 14);
      a.run([15, 18], [13, 20]); a.run([13, 20], [21, 22]); a.pass([12, 24.5], [20.5, 22.5]);
    },
  });

  return { rożnyObrona, rożnyAtak, wolnyObrona, wolnyAtak, aut };
}
