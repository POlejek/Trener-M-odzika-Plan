// T2 · 12–15.10.2026 · mecz nd 18.10 · ATAK NA NISKI BLOK, WYKOŃCZENIE, PRZEJŚCIA
// Źródła: De Zerbi cz. III (2-3-5 / 3-1-6, wzorce centralne i boczne, kontra po wysokim odbiorze, wykończenie),
// Xabi cz. III (przeciążenie środka, „escadinhas”, „corta luz”), Mikrotaktyczny Poniedziałek #09 #10 #16 #17 #18 #19 #20 #21.
// Pon: 0–1 BR (mini-bramki). Wt–Czw: 2 BR. Grupa 18–22 zawodników.
import { drill, session, tac } from '../lib.mjs';

export const meta = { code: 'T02', range: '12-15.10', slug: 'niski_blok_wykonczenie_przejscia', title: 'Atak na niski blok, wykończenie, przejścia' };

export function build({ W, S }) {
  const NB = ['Atak-Tworzenie szans'], NBF = ['Atak-Tworzenie szans', 'Atak-Finalizacja'];

  // ── PON 12.10 (MD-6, koordynacja, bez bramkarzy) – niski blok środkiem ─────────
  const pon2 = drill({
    id: 't02-pon-pinokio-fale', date: '2026-10-12', name: 'T2 Pon · Fale 3v2 → 2v1: Pinokio pass oraz podaj i biegnij (MP #16)',
    category: '2 · Techniczne, mała złożoność · gra falowa', duration: 15, players: '18–22 (2 pola × 9–11)', size: [30, 20], phases: NBF,
    objective: 'Niesygnalizowane podanie („Pinokio pass” – ciało i wzrok mówią „w bok”, piłka idzie między linie) oraz podaj i biegnij (ścięcie za plecy obrońcy po podaniu do boku). Narzędzia do rozbijania niskiego bloku w ciasnej przestrzeni.',
    scoring: 'Gol do mini-bramki w strefie 2v1 = 1 pkt; gol po Pinokio pass lub po podaj i biegnij = 2 pkt. Obrońcy: odbiór i podanie do trenera = 1 pkt.',
    organization: '2 pola 30×20 m podzielone na pół. Strefa 1 (niska): 3 atakujących vs 2 obrońców. Strefa 2 (wysoka): po przejściu piłki 2 atakujących wbiega i gra 2v1 z obrońcą stojącym w strefie 2 na 2 mini-bramki. Kolejki przy linii startowej (atakujący i obrońcy).',
    start: 'Pierwszy z kolejki atakujących prowadzi piłkę do strefy 1 – fala 3v2 startuje.',
    flow: ['3v2 w strefie 1: szukamy podania niesygnalizowanego (Pinokio) między obrońców albo podania do boku i ścięcia za plecy (podaj i biegnij).', 'Podanie przez linię do strefy 2 – dwóch atakujących wbiega, trzeci zostaje.', '2v1 w strefie 2 i strzał do jednej z 2 mini-bramek w 6 s.'],
    continuity: 'Kolejna fala startuje, gdy poprzednia przejdzie do strefy 2 (akcja co ok. 20 s). Atakujący po akcji zostają obrońcami strefy 2, obrońcy schodzą do kolejki atakujących.',
    series: '3 × 4 min, przerwa 1 min.',
    rotation: 'Atak → obrona strefy 2 → kolejka. Obrońcy strefy 1 zmieniają się co serię.',
    keys: ['Pinokio pass: biodra i wzrok w jedną stronę, podanie w drugą.', 'Podaj i biegnij: ruch natychmiast po podaniu, za plecy obrońcy.', 'Podanie w tempo biegu partnera, nie do nogi stojącego.'],
    concept: '#16 Pinokio pass oraz podaj i biegnij (środek z odcinka: fale 3v2 → 2v1).',
    say: 'Oszukaj obrońcę ciałem – pokaż w bok, zagraj do środka. Podałeś? Biegnij!',
    variations: '18: 2 pola × 9. 22: 2 pola × 11 (fale szybciej). Utrudnienie: 3v3 w strefie 1. Ułatwienie: obrońca strefy 2 startuje z linii końcowej.',
    draw: (a) => {
      a.corners(); a.line([15, 0], [15, 20]); a.mini('R', 5); a.mini('R', 15);
      a.a('', 4, 10); a.a('', 9, 3); a.a('', 9, 17); a.b('', 11, 8); a.b('', 11, 13); a.b('', 25, 10);
      a.a('', 0.5, 9); a.a('', 0.5, 11); a.b('', 0.5, 14); a.ball(4, 10);
      a.pass([4.6, 9.6], [8.6, 3.6]); a.step(1, 6, 5.5); a.run([4.6, 10.4], [19, 13]);
      a.key([9.4, 3.6], [18.6, 12.6]); a.step(2, 13.6, 6.6); a.run([9, 17], [21, 17]);
      a.pass([19.4, 13.4], [29.6, 15]); a.step(3, 24.5, 15.6);
    },
  });

  const pon3 = drill({
    id: 't02-pon-6v5-polprzestrzenie', date: '2026-10-12', name: 'T2 Pon · Gra 6v5 z półprzestrzeniami: gubienie krycia i wbiegnięcie w strefę asysty (MP #18, #20)',
    category: '3 · Ćwiczenie główne · gra pozycyjna z kierunkiem', duration: 25, players: '22 (2 pola × 11) / 18–20 (2 pola × 9–10)', size: [36, 30], phases: NB,
    objective: 'Rozbijanie niskiego bloku przez półprzestrzenie: ruch „do i od piłki” (gubienie krycia), przyjęcie w półprzestrzeni w pozycji otwartej, wbiegnięcie w strefę asysty i podanie wycofane.',
    scoring: 'Gol do mini-bramki = 1 pkt; gol po przyjęciu piłki w półprzestrzeni = 2 pkt; gol po wycofaniu ze strefy asysty = 3 pkt. Broniący (5): odbiór i podanie do strefy startowej = 1 pkt.',
    organization: '2 pola 36×30 m. Pionowe linie wyznaczają 2 półprzestrzenie (pasy 8 m między środkiem a skrzydłem). Na końcu 3 mini-bramki (środek + 2 w półprzestrzeniach) i strefa asysty 6 m przed nimi. Atakujący 6 (2 „ŚO” w strefie startowej + 4 w polu), broniący 5 w niskim bloku (linia 3 + 2). Bez bramkarzy.',
    start: 'ŚO ze strefy startowej (8 m) ma piłkę, broniący ustawieni nisko (blok ok. 15 m przed bramkami).',
    flow: ['ŚO przesuwają piłkę, atakujący w polu robią ruch „do i od” – wyciągają obrońcę i atakują przestrzeń za nim.', 'Podanie do zawodnika w półprzestrzeni (przyjęcie przodem do gry).', 'Wbiegnięcie w strefę asysty i podanie wycofane / strzał na 1–2 kontakty.'],
    continuity: 'Po każdej akcji (gol, odbiór, aut) nowa piłka od ŚO w ciągu 5 s – broniący wracają do bloku. Po odbiorze broniący grają do strefy startowej, atakujący natychmiast kontrpressing (5 s).',
    series: '4 × 5 min, przerwa 1 min.',
    rotation: 'Po 2 seriach broniący ↔ atakujący. ŚO zmieniają się co serię.',
    keys: ['Ruch „do i od piłki”: pierwszy ruch wyciąga obrońcę, zmiana kierunku w momencie zamachu podającego.', 'Półprzestrzeń: ustaw się między liniami i między zawodnikami rywala – stwórz konflikt decyzyjny.', 'Przyjęcie w pozycji otwartej.', 'Mało kontaktów w polu karnym – 1–2 i strzał.'],
    concept: '#18 Tworzenie wolnej przestrzeni (środek 6v5), #20 Wykorzystanie półprzestrzeni, #21 Wnioski z goli MŚ 2022.',
    say: 'Najpierw do piłki, potem za plecy! W półprzestrzeni przyjmij przodem do bramki.',
    variations: '18: 2 pola 5v4. 20: 6v4 + 5v5. Utrudnienie: broniący 6. Ułatwienie: neutralny w środku dla atakujących.',
    draw: (a) => {
      a.corners(); a.line([8, 0], [8, 30]); a.line([30, 0], [30, 30]);
      a.line([8, 7], [36, 7]); a.line([8, 23], [36, 23]); a.text('półprzestrzeń', 20, 5.6); a.text('półprzestrzeń', 20, 25);
      a.zone(30, 0, 6, 30, '#f59e0b', 0.14); a.text('strefa asysty', 33, 2);
      a.mini('R', 4); a.mini('R', 15); a.mini('R', 26);
      a.a('ŚO', 4, 10); a.a('ŚO', 4, 20); a.a('', 16, 3); a.a('', 17, 13); a.a('', 22, 19); a.a('', 16, 27);
      a.b('', 25, 6); a.b('', 26, 15); a.b('', 25, 24); a.b('', 20, 10); a.b('', 20, 20);
      a.ball(4, 20); a.run([22, 19], [19, 21]); a.run([19, 21], [28, 26]); a.step(1, 19, 23.4);
      a.key([4.6, 20.3], [27.4, 25.6]); a.step(2, 15, 24); a.dribble([28, 26], [32, 24]);
      a.pass([32.4, 23.6], [31, 14]); a.step(3, 33.3, 19); a.run([17, 13], [30.6, 13.5]);
    },
  });

  const pon4 = drill({
    id: 't02-pon-gra-9v9-polprzestrzenie', date: '2026-10-12', name: 'T2 Pon · Gra 9v9+2 na 3 mini-bramki: ruch tworzący przestrzeń (MP #09)',
    category: '4 · Gra · utrzymanie i progresja (bez bramkarzy)', duration: 30, players: '18–22 (9v9 + 2 neutralnych / 10v10)', size: [55, 40], phases: NB,
    objective: 'Gra przeciw blokowi: drużyna bez piłki broni nisko przed swoimi mini-bramkami, drużyna z piłką przeciąża środek i rotuje w pionie (ruch tworzący przestrzeń – schowaj ego, wyciągnij obrońcę dla kolegi).',
    scoring: 'Gol = 1 pkt; gol po zejściu „9” lub „10”, które wyciągnęło obrońcę i otworzyło przestrzeń dla wbiegającego = 2 pkt; gol na 1 kontakt = +1 pkt.',
    organization: 'Pole 55×40 m, na każdej linii końcowej 3 mini-bramki (środek i półprzestrzenie). Linia spalonego 15 m przed bramkami (tylko dla atakujących). 9v9 + 2 neutralnych (żółci, grają z drużyną przy piłce, max 2 kontakty). Bramkarz (jeśli jest) gra w polu.',
    start: 'Trener z piłkami przy linii bocznej wprowadza piłkę do drużyny, która nie straciła ostatniego gola.',
    flow: ['Drużyna z piłką ustawia się 2-3-4 (z neutralnymi) – rywal broni nisko (max 2 zawodników powyżej połowy).', 'Rotacje w pionie: napastnik schodzi i wyciąga środkowego obrońcę, pomocnik wbiega w zwolnioną przestrzeń.', 'Podanie za linię i strzał po 1–2 kontaktach.'],
    continuity: 'Gra ciągła. Gol / aut → trener natychmiast wprowadza piłkę drużynie, która nie zdobyła gola / nie wybiła. Po odbiorze szybki atak (rywal jeszcze nie w bloku).',
    series: '4 × 6 min, przerwa 1:30.',
    rotation: 'Neutralni zmieniają się co serię.',
    keys: ['Schowaj ego: ruch nie po to, by dostać piłkę, tylko by otworzyć ją koledze.', 'Ponawiaj akcje bez piłki – kilka ruchów pod rząd.', 'Czytaj sygnał: piłka otwarta u partnera = start.'],
    concept: '#09 Ruch tworzący przestrzeń, #17 Identyfikacja piłki otwartej.',
    say: 'Wyciągnij obrońcę dla kolegi – to też jest asysta!',
    variations: '18: 8v8+2. 22: 10v10+2 na 60×42. Utrudnienie: 2 kontakty w połowie rywala.',
    draw: (a) => {
      a.corners(); a.line([27.5, 0], [27.5, 40]); a.line([40, 0], [40, 40]); a.line([15, 0], [15, 40]);
      [8, 20, 32].forEach(y => { a.mini('L', y); a.mini('R', y); });
      a.a('', 18, 12); a.a('', 18, 28); a.a('', 26, 9); a.a('', 25, 20); a.a('', 26, 31); a.a('', 36, 4); a.a('', 37, 15); a.a('9', 41, 20); a.a('', 36, 36);
      a.b('', 47, 8); a.b('', 48, 16); a.b('', 48, 24); a.b('', 47, 32); a.b('', 41, 12); a.b('', 42, 28); a.b('', 37, 25); a.b('', 32, 14); a.b('', 32, 26);
      a.n('N', 12, 20); a.n('N', 30, 39);
      a.ball(25, 20); a.run([41, 20], [35, 21]); a.step(1, 38, 23); a.run([37, 15], [48, 19]); a.key([25.6, 19.6], [47.6, 19.4]); a.step(2, 36, 17.4);
      a.pass([48.4, 19.6], [55, 20]); a.step(3, 51.5, 21.5);
    },
  });

  // ── WT 13.10 (MD-5, siła, małe pola) – przechylenie i ukośne łańcuchy ─────────
  const wt2 = drill({
    id: 't02-wt-wzorce-drabinka-cortaluz', date: '2026-10-13', name: 'T2 Wt · Wzorce A i B: drabinka + tabele / corta luz (Xabi) – 2 bramki',
    category: '2 · Techniczne, mała złożoność · wzorce gry', duration: 15, players: '18–22 + 2 BR (2 stanowiska × 9–11)', size: [35, 30], phases: NBF,
    objective: 'Wzorce relacyjne przeciw niskiemu blokowi (Xabi Alonso): A – ukośny łańcuch („escadinhas”) i dwie tabele, B – „corta luz” (trzech w linii, przepuszczenie piłki). Każdy wzorzec kończy się strzałem na bramkę z BR.',
    scoring: 'Rywalizacja stanowisk: gol po wzorcu = 2 pkt, wzorzec bez błędu technicznego = 1 pkt.',
    organization: '2 stanowiska 35×30 m, każde z dużą bramką i BR. Stanowisko 1 – wzorzec A, stanowisko 2 – wzorzec B. Na stanowisku: kolejka startowa (ŚO), wahadłowy, 10, 9 + 1–2 obrońców (pasywni w serii 1, półaktywni od serii 2). Zmiana stanowisk po 7 min.',
    start: 'ŚO z kolejki z piłką; akcja co ok. 15 s.',
    flow: ['A: ŚO → wahadłowy; wahadłowy → 10 po skosie i wbiega; 10 odgrywa (tabela 1); wahadłowy → 9, 9 odgrywa za obrońcę (tabela 2); strzał.', 'B: ŚO → wahadłowy; wahadłowy gra w kierunku 10, która markuje przyjęcie i przepuszcza piłkę do 9 (corta luz), a sama wbiega w pole karne.', 'B: 9 na 1 kontakt za obrońców do 10 → sam na sam z BR.'],
    continuity: 'Kolejna akcja startuje w momencie strzału poprzedniej. Piłki za bramką zbiera zawodnik, który strzelał, i wraca do kolejki.',
    series: '2 × 7 min (po jednym na każdym stanowisku), przerwa 1 min na zmianę.',
    rotation: 'Za podaniem: ŚO → wahadłowy → 10 → 9 → kolejka. Obrońcy zmieniają się co 3 min.',
    keys: ['„Toco y me voy” – podaj i ruszaj się.', 'Ukośne ustawienie (drabinka), nigdy w jednej linii poziomej.', 'Corta luz: zwód ciałem, start w momencie przepuszczenia.', 'Ostatnie podanie na 1 kontakt, strzał po ziemi.'],
    concept: '#16 Podaj i biegnij, #04 Gra na trzeciego (przepuszczenie = trzeci zawodnik).',
    say: 'Podaj i biegnij! Dziesiątka – udaj, że przyjmujesz, puść piłkę i wbiegaj!',
    variations: '18: obrońca tylko 1 na stanowisku. 22: 2 obrońców aktywnych od serii 2. Lustrzanie z prawej strony.',
    draw: (a) => {
      a.corners(); a.goal('R', 15); a.gkB(33.5, 15); a.solid([19, 4], [35, 4]); a.solid([19, 26], [35, 26]); a.solid([19, 4], [19, 26]);
      a.a('ŚO', 3, 18); a.a('', 1, 20); a.a('', 1, 22); a.ball(3, 18);
      a.a('WB', 12, 27); a.a('10', 16, 21); a.a('9', 23, 16); a.b('', 18, 25); a.b('', 28, 12);
      a.pass([3.6, 18.4], [11.6, 26.4]); a.step(1, 6.4, 23.2);
      a.pass([12.6, 26.6], [15.6, 21.6]); a.run([12.6, 27], [20, 24]); a.step(2, 13.2, 24); a.pass([16.4, 21.4], [19.6, 23.6]); a.step(3, 18.8, 21.2);
      a.pass([20.4, 23.6], [22.6, 16.6]); a.run([20, 24], [27, 20]); a.step(4, 22.8, 20.6); a.key([23.4, 16.4], [26.6, 19.6]); a.step(5, 26, 15.4);
    },
  });

  const wt3 = drill({
    id: 't02-wt-3v2-szerokosc-wbiegniecie', date: '2026-10-13', name: 'T2 Wt · 3v2 w strefie buforowej: szerokość albo wbiegnięcie (MP #19)',
    category: '3 · Ćwiczenie główne · małe gry, dużo starć', duration: 25, players: '18–22 + 2 BR (2 pola × 9–11)', size: [30, 25], phases: NBF,
    objective: 'Reakcja na zachowanie obrony: gdy linia obrony jest wąska – ruch w szerokość; gdy obrońca doskakuje w szerokość – wbiegnięcie w zwolnioną przestrzeń za jego plecami (podanie prostopadłe).',
    scoring: 'Gol = 1 pkt; gol po wbiegnięciu za obrońcę, który doskoczył w szerokość = 2 pkt; gol na 1 kontakt = +1. Obrońcy: odbiór i prowadzenie piłki przez linię startową = 1 pkt.',
    organization: '2 pola 30×25 m z dużą bramką i BR. Strefa buforowa 10 m przed polem karnym. Atakujący 3 (skrzydłowy, 10, 9) vs 2 obrońców + 1 obrońca wchodzący z linii końcowej po 3 s. Kolejki atakujących i obrońców przy linii startowej (fale).',
    start: 'Trener podaje do 10 przy linii startowej – start fali.',
    flow: ['3v2 w strefie buforowej – obrońcy wybierają: zawęzić czy doskoczyć do szerokiego.', 'Wąsko → skrzydłowy daje szerokość i przyjmuje do nogi; doskok → wbiegnięcie za plecy obrońcy i prostopadłe.', 'Po 3 s wchodzi trzeci obrońca – 3v3 do strzału.'],
    continuity: 'Fala co ok. 25 s. Po akcji atakujący zostają obrońcami następnej fali, obrońcy idą do kolejki atakujących. BR wznawia piłkę do trenera.',
    series: '5 × 4 min, przerwa 1 min (dzień siłowy – intensywne pojedynki).',
    rotation: 'Atak → obrona → kolejka. Co serię zmiana pozycji w trójce (skrzydłowy ↔ 10 ↔ 9).',
    keys: ['Sygnały: piłka otwarta u partnera, ustawienie ciała podającego, wygrany pojedynek 1v1.', 'Wąska linia → szerokość; doskok w szerokość → wbiegnięcie.', 'Ochrona piłki ramieniem i biodrem przy przyjęciu do nogi (MP #11).'],
    concept: '#19 Szerokość i wbiegnięcie (środek 3v2 w strefie buforowej), #11 Ochrona piłki.',
    say: 'Patrz na obrońcę: zostaje w środku – idź szeroko; wychodzi do ciebie – kolega biegnie za jego plecy!',
    variations: '18: 2 pola, fale 3v2 bez trzeciego obrońcy. 22: 4v3. Utrudnienie: 5 s na strzał.',
    draw: (a) => {
      a.corners(); a.goal('R', 12.5); a.gkB(28.5, 12.5); a.solid([14, 3], [30, 3]); a.solid([14, 22], [30, 22]); a.solid([14, 3], [14, 22]);
      a.zone(4, 0, 10, 25, '#f59e0b', 0.14); a.text('strefa buforowa', 9, 1.8);
      a.a('11', 7, 3); a.a('10', 5, 12.5); a.a('9', 10, 15); a.b('', 9, 7); a.b('', 12, 13); a.b('3', 29, 21); a.ball(5, 12.5);
      a.run([9, 7], [7.8, 4.2]); a.run([10, 15], [18, 6]); a.step(1, 15, 11);
      a.pass([5.6, 12], [6.6, 3.6]); a.step(2, 5, 8); a.key([7.6, 3.6], [17.6, 6]); a.step(3, 12.5, 3.6); a.pass([18.4, 6.4], [29.6, 11]); a.step(4, 24, 7.2);
    },
  });

  const wt4 = drill({
    id: 't02-wt-gra-7v7-polprzestrzen', date: '2026-10-13', name: 'T2 Wt · Gra BR+7v7+BR: przechylenie i gol z półprzestrzeni ×2 (Xabi, MP #20)',
    category: '4 · Gra · małe boisko, wysoka intensywność', duration: 30, players: '16 + 2 BR (+ 2–6 zmienników)', size: [50, 40], phases: NB,
    objective: 'Przechylenie zespołu na stronę piłki (5 zawodników blisko piłki), ukośne łańcuchy i wejście przez półprzestrzeń przeciw kompaktowemu blokowi.',
    scoring: 'Gol = 1 pkt; gol po podaniu z półprzestrzeni lub z niej = 2 pkt; gol po zmianie strony, gdy blok przesunął się do piłki = 2 pkt. Po odbiorze gol w 6 s = 1 pkt.',
    organization: 'Boisko 50×40 m, 2 duże bramki z BR. Linie półprzestrzeni zaznaczone talerzykami na całej długości. Drużyny BR + 7 (2 ŚO, 6, 8, 2 wahadłowych, 9). Drużyna bez piłki broni na własnej połowie (blok). Zmiennicy przy linii, zmiana co 2 min.',
    start: 'BR drużyny rozpoczynającej, potem gra ciągła.',
    flow: ['Budowanie od BR, rywal broni na swojej połowie.', 'Przechylenie na jedną stronę: wahadłowy, 8 i 9 w ukośnym łańcuchu przy półprzestrzeni.', 'Wejście przez półprzestrzeń albo szybka zmiana strony do dalszego wahadłowego.'],
    continuity: 'Gra ciągła. Gol / aut bramkowy → BR wznawia od razu (rywal 3 s na cofnięcie). Aut boczny → trener wrzuca nową piłkę.',
    series: '4 × 6 min, przerwa 1:30.',
    rotation: 'Zmiennicy co 2 min, BR zamieniają się stronami po 2 seriach.',
    keys: ['Przechylenie: 5 zawodników blisko piłki, dalszy wahadłowy szeroko.', 'Ukośne łańcuchy, nie linie poziome.', 'Krótki czas piłki w jednym sektorze (MP #15).'],
    concept: '#20 Wykorzystanie półprzestrzeni, #15 Podanie zdobywające (czas w sektorze).',
    say: 'Przechylamy się – dużo nas przy piłce. Jak wszyscy przyjdą – zmiana strony!',
    variations: '18: 7v7 + 2 zmienników. 22: BR+8v8+BR na 55×42. Utrudnienie: 2 kontakty na połowie rywala.',
    draw: (a) => {
      a.corners(); a.goal('L'); a.goal('R'); a.gkA(1.5, 20); a.gkB(48.5, 20); a.line([0, 12], [50, 12]); a.line([0, 28], [50, 28]); a.line([25, 0], [25, 40]);
      a.a('4', 9, 14); a.a('5', 9, 27); a.a('6', 18, 18); a.a('8', 27, 10); a.a('WB', 30, 3); a.a('9', 36, 14); a.a('WB', 33, 37);
      a.b('', 43, 10); a.b('', 44, 19); a.b('', 43, 28); a.b('', 36, 7); a.b('', 37, 22); a.b('', 32, 15); a.b('', 28, 30);
      a.ball(18, 18); a.pass([18.4, 17.6], [26.6, 10.6]); a.step(1, 22, 12.6); a.pass([27.4, 10.4], [29.6, 3.6]); a.step(2, 29.6, 6.6);
      a.run([36, 14], [40, 15]); a.key([30.4, 3.6], [39.6, 14.6]); a.step(3, 35.6, 8); a.pass([40.4, 15], [49.6, 18]);
    },
  });

  // ── ŚR 14.10 (MD-4, RSA, duże pola, najwyższa złożoność) – wykończenie i niski blok ─────────
  const sr2 = drill({
    id: 't02-sr-korytarz-niepewnosci', date: '2026-10-14', name: 'T2 Śr · Dośrodkowanie po ziemi w „korytarz niepewności” i wycofanie (2 stanowiska)',
    category: '2 · Techniczne, mała złożoność · wykończenie', duration: 15, players: '18–22 + 2 BR (2 stanowiska × 9–11)', size: [40, 35], phases: ['Atak-Finalizacja'],
    objective: 'Mocne dośrodkowania po ziemi i wycofania (cut-back) w przestrzeń między obrońcami a bramkarzem, zsynchronizowane wbiegnięcia trzech zawodników, strzał na 1 kontakt (MP #21: 80% goli z pola karnego, większość po 1–2 kontaktach).',
    scoring: 'Gol na 1 kontakt = 2 pkt, gol = 1 pkt. Rywalizacja grup: środek vs skrzydła.',
    organization: '2 stanowiska (dwie połowy boiska), każde z dużą bramką i BR. Na stanowisku: kolejka „6” w środku (piłki), wahadłowi z lewej i prawej, 3 wbiegających (bliższy słupek, dalszy słupek, 11. metr), 1–2 obrońców w polu karnym (bierni → aktywni od serii 3).',
    start: '„6” podaje do wahadłowego – raz z lewej, raz z prawej.',
    flow: ['Wahadłowy przyjmuje w biegu wzdłuż linii bocznej.', 'Dośrodkowanie po ziemi w korytarz niepewności lub wycofanie na 11. metr spod linii końcowej.', 'Bliższy, dalszy słupek, 11. metr – strzał na 1 kontakt.'],
    continuity: 'Akcja co ok. 15 s, na zmianę stron. Wbiegający po akcji wracają truchtem do swojej kolejki. Piłki za bramką zbiera obrońca.',
    series: '3 × 4 min, przerwa 1 min (seria 3 – obrońcy aktywni).',
    rotation: '6 → wahadłowy → wbiegający → obrońca → kolejka 6.',
    keys: ['Po ziemi, mocno, przed bramkarza – nie w bramkarza.', 'Bliższy słupek atakuje pierwszy, dalszy zamyka, trzeci czeka na wycofanie.', 'Wbiegnięcie po łuku – gubienie krycia.', 'Strzał pierwszym kontaktem, celność przed siłą.'],
    concept: '#21 Wnioski z goli MŚ 2022 (wycofanie, 1–2 kontakty, wbiegnięcie z głębi w drugie tempo), #18 gubienie krycia.',
    say: 'Mocno po ziemi między obrońców a bramkarza. Każdy wbiega w inne miejsce – strzał z pierwszej piłki!',
    variations: '18: 1 obrońca. 22: 2 obrońców + BR wychodzący. Wariant: wahadłowy schodzi do środka i strzela.',
    draw: (a) => {
      a.corners(); a.goal('R', 17.5); a.gkB(38.5, 17.5); a.solid([24, 5], [40, 5]); a.solid([24, 30], [40, 30]); a.solid([24, 5], [24, 30]);
      a.a('6', 8, 17.5); a.a('', 6, 16); a.a('', 6, 19); a.ball(8, 17.5);
      a.a('WB', 18, 3); a.a('WB', 18, 32); a.a('9', 20, 14); a.a('10', 21, 21); a.a('8', 17, 17.5);
      a.b('', 33, 15); a.b('', 32.5, 21);
      a.pass([8.6, 17], [17.6, 3.6]); a.step(1, 12, 9); a.run([18.4, 3], [35, 3]); a.step(2, 27, 2);
      a.key([35.6, 3.6], [36.2, 15]); a.step(3, 37.4, 9.5); a.run([20, 14], [35, 14]); a.run([21, 21], [37, 21]); a.run([17, 17.5], [28, 17.5]);
    },
  });

  const sr3 = drill({
    id: 't02-sr-wzorce-6v3-br', date: '2026-10-14', name: 'T2 Śr · Wzorce centralne i boczne 6v3 + BR przeciw niskiemu blokowi (De Zerbi)',
    category: '3 · Ćwiczenie główne · gra pozycyjna z bramką', duration: 25, players: '18–22 + 2 BR (2 stanowiska × 9–11)', size: [45, 40], phases: NBF,
    objective: 'Wzorce gry przeciw niskiemu blokowi (De Zerbi: 8v4+GK central/wide pattern play, dostosowane do 2 grup): centralny – „góra–dół–przez” z napastnikiem; boczny – zmiana strony i naddanie bocznego obrońcy (overlap) z dośrodkowaniem.',
    scoring: 'Gol po wzorcu centralnym = 2 pkt, po wzorcu bocznym = 2 pkt, gol z wolnej gry po wzorcu = 1 pkt. Obrońcy: odbiór i podanie do trenera = 1 pkt.',
    organization: '2 stanowiska (obie bramki boiska), każde ok. 45×40 m od linii końcowej. Atakujący 6 (boczny, 6, 8, 10, skrzydłowy, 9) vs 3 obrońców (2 ŚO + 1 pomocnik) + BR. Manekiny jako linia pomocy rywala na 25. metrze. Pozostali 0–2 zawodników – zmiennicy (zmiana co akcję). Stanowisko 1 – wzorzec centralny, stanowisko 2 – boczny; zmiana po 12 min.',
    start: 'Boczny obrońca (lub 6) z piłką na wysokości 35. metra.',
    flow: ['Centralny: 3 → 8 (do przodu), 8 → 6 (do tyłu), 6 → 9 (pion), 9 zgrywa do 8 – 8 wybiera: prostopadłe / strzał; reszta wbiega w pole karne.', 'Boczny: 2 → 10, 10 → 6, 6 po skosie do 8, 8 → 11, boczny 3 naddaje (overlap), 11 → 3, dośrodkowanie / wycofanie.', 'Po wzorcu gra „na żywo” do zakończenia (max 8 s).'],
    continuity: 'Kolejna akcja startuje co ok. 25 s (piłki przy starcie). Po zakończeniu atakujący wracają biegiem na pozycje, obrońcy do bloku. Zmiennik wchodzi co akcję.',
    series: '2 × 12 min (po jednym na wzorzec), przerwa 1 min.',
    rotation: 'Atakujący rotują pozycjami co 3 akcje; obrońcy zmieniają się z atakującymi po 6 min.',
    keys: ['Szybko i dokładnie – zanim blok się przesunie.', 'Ruchy bez piłki: po skosie, naddanie, za linię.', 'Spokój przed bramką: strzał, podanie czy wycofanie?', 'Dośrodkowania: po ziemi, wycofanie, na dalszy słupek.'],
    concept: '#04 Gra na trzeciego, #19 Szerokość i wbiegnięcie, #21 Wycofanie (cut-back).',
    say: 'Do przodu, do tyłu, przez linię – i wszyscy w pole karne!',
    variations: '18: 5v3 + BR. 22: 6v4 + BR. Utrudnienie: obrońcy aktywni od początku.',
    draw: (a) => {
      a.corners(); a.goal('R', 20); a.gkB(43.5, 20); a.solid([29, 4], [45, 4]); a.solid([29, 36], [45, 36]); a.solid([29, 4], [29, 36]);
      [8, 16, 24, 32].forEach(y => a.mannequin(20, y));
      a.a('3', 12, 4); a.a('6', 12, 18); a.a('8', 17, 26); a.a('10', 26, 13); a.a('9', 31, 21); a.a('11', 26, 36);
      a.b('4', 36, 16); a.b('5', 36, 24); a.b('6', 28, 30); a.ball(12, 4);
      a.pass([12.6, 4.4], [16.6, 25.4]); a.step(1, 14, 12); a.pass([16.6, 25.6], [12.6, 18.6]); a.step(2, 14, 23.6);
      a.pass([12.6, 17.8], [30.6, 20.6]); a.step(3, 21.5, 17.6); a.pass([30.6, 21.4], [18, 26]); a.run([17, 26], [23, 25]); a.step(4, 25, 22);
      a.key([23.4, 25], [38, 28]); a.run([26, 36], [38, 29]); a.step(5, 32, 29);
    },
  });

  const sr4 = drill({
    id: 't02-sr-faza-235-vs-niski', date: '2026-10-14', name: 'T2 Śr · Faza gry 10 v 9+BR: 2-3-5 przeciw niskiemu blokowi 4-4-1 (De Zerbi)',
    category: '4 · Gra · faza gry, cała struktura', duration: 30, players: '19–21 + 2 BR', size: [55, 68], phases: ['Atak-Tworzenie szans', 'Atak-Finalizacja', 'A/O'],
    objective: 'Cały model ataku na niski blok: 2-3-5 (pięciu w linii ataku zajmuje każdy kanał), przejście w 2-3-2 przy kombinacjach centralnych i w 3-1-6 z szerokimi trójkątami. Po stracie kontrpressing 5 s i zabezpieczenie 2+3.',
    scoring: 'Niebiescy: gol = 1 pkt; gol po kombinacji przez środek (podanie w półprzestrzeń / „góra–dół–przez”) = 2 pkt; gol po wycofaniu spod linii końcowej = 2 pkt. Czerwoni: odbiór → 8 s na gol do jednej z 3 mini-bramek na linii środkowej = 1 pkt.',
    organization: 'Połowa boiska + 5 m (55×68). Duża bramka z BR czerwonych, na linii środkowej 3 mini-bramki. Niebiescy 10 (bez BR): 2 ŚO, 3 pomocników, 5 w linii ataku. Czerwoni 9 + BR w niskim bloku 4-4-1. Linia spalonego na 16. metrze. Drugi BR: zmiana co 2 serie (lub gra w polu u czerwonych przy 19 zawodnikach). Trener z piłkami przy linii środkowej.',
    start: 'Trener podaje do ŚO niebieskich na linii środkowej – czerwoni w bloku.',
    flow: ['Pięciu z przodu w pięciu kanałach (szerokość + głębokość), 2+3 z tyłu.', 'Najpierw środek: dwóch z półprzestrzeni schodzi – 2-3-2, szybkie kombinacje.', 'Gdy środek zamknięty – przechylenie na bok, szerokie trójkąty (3-1-6), naddanie / podminięcie i wycofanie.'],
    continuity: 'Każde zakończenie (gol, obrona BR, aut, 8 s kontry) → trener natychmiast podaje nową piłkę do ŚO niebieskich. Czerwoni wracają do bloku. Między akcjami max 5 s.',
    series: '4 × 6 min, przerwa 1:30 (RSA – kontrolowane przerwy).',
    rotation: 'Po 2 seriach zamiana ról drużyn. W drużynie: skrzydłowi ↔ wahadłowi po 1. serii.',
    keys: ['Każdy kanał zajęty – rozciągnij blok wszerz i w głąb.', 'Najpierw środek, potem bok.', 'Wbiegnięcia za linię w odpowiednim momencie (spalony!).', 'Zabezpieczenie 2+3 przy każdej akcji – strata = 5 s.'],
    concept: '#20 Półprzestrzenie, #19 Szerokość i wbiegnięcie, #10 Asekuracja w ataku, #21 wycofanie.',
    say: 'Pięciu z przodu, każdy w swoim kanale. Najpierw środkiem, jak zamknięte – bokiem i wycofanie!',
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

  // ── CZW 15.10 (MD-3, szybkość, mała złożoność, SFG) – przejścia ─────────
  const czw2 = drill({
    id: 't02-czw-rondo-kontra', date: '2026-10-15', name: 'T2 Czw · Rondo 5v2 z kontrą na mini-bramki i kontrpressingiem 5 s',
    category: '2 · Techniczne, mała złożoność · rondo z przejściem', duration: 15, players: '18–22 (3 pola × 7)', size: [14, 14], phases: ['A/O', 'O/A'],
    objective: 'Przejście po stracie i po odbiorze w najprostszej formie: pięciu utrzymuje piłkę, dwóch po odbiorze ma 4 s na gol do jednej z 2 mini-bramek, a tracący od razu atakują piłkę (asekuracja w ataku – MP #10).',
    scoring: '10 podań = 1 pkt dla piątki. Odbiór i gol w 4 s = 2 pkt dla dwójki. Odbiór piłki z powrotem w 4 s przez piątkę = 1 pkt.',
    organization: '3 pola 14×14 m, na dwóch przeciwległych bokach po 1 mini-bramce (2 m za linią). 5 na obwodzie, 2 w środku. Max 2 kontakty.',
    start: 'Trener (lub zawodnik z boku) wprowadza piłkę do piątki.',
    flow: ['5v2 – utrzymanie piłki.', 'Po odbiorze dwójka atakuje mini-bramkę (4 s).', 'Piątka natychmiast kontrpressuje – najbliżsi na piłkę, reszta zamyka strzał.'],
    continuity: 'Po każdej akcji nowa piłka od zawodnika, który stracił; tracący idzie do środka po zakończeniu kontry.',
    series: '4 × 2:30, przerwa 1 min (czwartek – krótko, intensywnie).',
    rotation: 'Zawodnik, który stracił piłkę, zamienia się z obrońcą, który był najdłużej w środku.',
    keys: ['Mając piłkę – myśl o stracie (pierwsza i druga linia asekuracji).', 'Po stracie: najbliższy atakuje piłkę natychmiast.', 'Po odbiorze: pierwsze spojrzenie do przodu.'],
    concept: '#10 Faza przejściowa – asekuracja w ataku.',
    say: 'Stracisz – od razu odbierasz! Odbierzesz – od razu na bramkę!',
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
    id: 't02-czw-kontra-5v5', date: '2026-10-15', name: 'T2 Czw · Kontra po wysokim odbiorze 5v5 + BR w 8 s (De Zerbi)',
    category: '3 · Ćwiczenie główne · szybki atak (mała złożoność, szybkość)', duration: 20, players: '18–22 + 1–2 BR', size: [45, 50], phases: ['O/A', 'A/O'],
    objective: 'Kontratak linii ataku po odbiorze wysoko (De Zerbi: 5v5+GK counter-attacking game): szybka decyzja, wbiegnięcia za linię, przewaga w tempie. Akcent szybkości – krótkie, maksymalne akcje.',
    scoring: 'Gol niebieskich w 8 s po odbiorze = 2 pkt, w 8–12 s = 1 pkt. Czerwoni: odbiór i gol do jednej z 3 mini-bramek w 8 s = 1 pkt (niebiescy kontrpressing).',
    organization: 'Pole 45×50 m od linii końcowej. Duża bramka z BR. Niebiescy 5 (skrzydłowi, 10, 9, 8) vs czerwoni 4 obrońców + 1 pomocnik. Na linii startowej 3 mini-bramki dla czerwonych. Ukośne linie przy bramce wymuszają kontrę środkiem. Pozostali w 2 falach (zmiana co akcję).',
    start: 'Czerwony pomocnik podaje „błędnie” do niebieskiego 8 (symulacja odbioru wysoko).',
    flow: ['8 po odbiorze – pierwsze spojrzenie do przodu, podanie do 10 / 9 lub prowadzenie w przestrzeń.', 'Skrzydłowi wbiegają po skosie za linię obrony, 9 przyciąga ŚO.', 'Strzał w 8 s; po stracie natychmiastowa reakcja.'],
    continuity: 'Akcja co ok. 40 s – następna fala ustawia się w trakcie poprzedniej. Po akcji fala schodzi truchtem.',
    series: '2 × 8 min, przerwa 2 min (pełne przerwy – szybkość).',
    rotation: 'Fale atakujących i broniących zamieniają się co 4 akcje. Każdy ok. 6 akcji maksymalnych.',
    keys: ['Decyzja w 1–2 kontaktach.', 'Prowadź piłkę na obrońcę, wiąż go i oddaj w odpowiednim momencie.', 'Wbiegnięcia w tempo – piłka otwarta = start (MP #17).'],
    concept: '#17 Identyfikacja piłki otwartej i atak przestrzeni.',
    say: 'Odbiór – i od razu do przodu! Osiem sekund na strzał.',
    variations: '18: 4v4 + BR. 22: 6v6 + BR. Bez BR: 2 mini-bramki w miejscu dużej.',
    draw: (a) => {
      a.corners(); a.goal('R', 25); a.gkB(43.5, 25); a.solid([29, 5], [45, 5]); a.solid([29, 45], [45, 45]); a.solid([29, 5], [29, 45]);
      a.solid([29, 0], [45, 12]); a.solid([29, 50], [45, 38]); [10, 25, 40].forEach(y => a.mini('L', y));
      a.b('6', 12, 22); a.a('8', 15, 25); a.a('10', 22, 18); a.a('9', 26, 27); a.a('11', 20, 6); a.a('7', 20, 44);
      a.b('', 33, 14); a.b('', 34, 22); a.b('', 34, 30); a.b('', 33, 37); a.ball(15, 25);
      a.pass([12.6, 22.4], [14.4, 24.6]); a.step(1, 12.6, 25.6); a.pass([15.6, 24.6], [21.6, 18.6]); a.step(2, 18, 23);
      a.run([20, 6], [38, 15]); a.key([22.6, 18], [37.6, 15.2]); a.step(3, 30, 15.2); a.run([20, 44], [36, 34]);
    },
  });

  const czw5 = drill({
    id: 't02-czw-gra-8v8-wahadla', date: '2026-10-15', name: 'T2 Czw · Gra BR+8v8+BR z 2 neutralnymi na wahadłach: zawężaj i odbudowuj (MP #10)',
    category: '4 · Gra · przejścia, krótkie serie', duration: 20, players: '18–20 + 2 BR (8v8 + 2 neutralnych)', size: [55, 40], phases: ['A/O', 'O/A'],
    objective: 'Asekuracja w ataku: drużyna z piłką zawęża i skraca pole gry, tworzy pierwszą i drugą linię asekuracji pod piłką; po stracie natychmiastowy doskok i odbudowa struktury (MP #10: 6v6 + BR + 2 neutralnych).',
    scoring: 'Gol = 1 pkt; odbiór w 5 s po stracie = 1 pkt; gol w 8 s po takim odbiorze = 3 pkt.',
    organization: 'Boisko 55×40 m, 2 duże bramki z BR. 8v8 + 2 neutralnych na liniach bocznych (wahadła – grają z drużyną przy piłce, max 2 kontakty, nie mogą strzelać). Zawodnicy 21–22: wchodzą zmiennikami co 2 min.',
    start: 'BR drużyny rozpoczynającej, potem gra ciągła.',
    flow: ['Atak z wykorzystaniem wahadeł – pozostali zawężają pole gry.', 'Dwie linie asekuracji pod piłką (2 + 3).', 'Strata – natychmiastowy doskok najbliższych, reszta zamyka linie podań.'],
    continuity: 'Gra ciągła. Gol / aut bramkowy → BR wznawia od razu. Aut boczny → neutralny wprowadza piłkę drużynie, która nie wybiła.',
    series: '4 × 4 min, przerwa 1:30 (MD-3: krótko i intensywnie).',
    rotation: 'Neutralni zmieniają się co serię.',
    keys: ['Zawężaj i skracaj pole, mając piłkę.', 'Pierwsza i druga linia asekuracji pod piłką.', 'Gotowość na długą piłkę rywala – ostatni obrońca ustawiony głębiej.'],
    concept: '#10 Faza przejściowa – asekuracja w ataku (środek z odcinka).',
    say: 'Mamy piłkę – blisko siebie. Stracimy – w 5 sekund ją odbieramy!',
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
      id: 't02-pon', date: '2026-10-12', title: 'T2 · Pon 12.10 (MD-6) · Niski blok środkiem: Pinokio pass, półprzestrzenie, rotacje',
      goal: 'Rozbijanie niskiego bloku środkiem: niesygnalizowane podanie (Pinokio), podaj i biegnij, gubienie krycia ruchem „do i od piłki”, gra w półprzestrzeniach, rotacje w pionie. Bez bramkarzy (0–1 BR) – mini-bramki. Akcent motoryczny: koordynacja.',
      phases: NB,
      notes: `ORGANIZACJA: 2 pola 30×20 (4 mini-bramki), 2 pola 36×30 z liniami półprzestrzeni (6 mini-bramek), pole 55×40 (6 mini-bramek). ~25 piłek, znaczniki 3 kolory. Jeśli jest 1 BR – gra w polu jako neutralny.\n\nKARTA TRENERA – tydzień T2: ATAK NA NISKI BLOK, WYKOŃCZENIE, PRZEJŚCIA (mecz nd 18.10)\nModel: 3-2-5 / 2-3-5 przeciw niskiemu blokowi, najpierw środek, potem bok (schematy T1, T2, F1 w Taktyce).\nZasady dnia: podaj i biegnij; ruch „do i od piłki”; przyjęcie w półprzestrzeni przodem do bramki; schowaj ego – ruch dla kolegi.\nPytania: Gdzie jest kieszeń/półprzestrzeń? Kto wyciąga obrońcę, kto atakuje przestrzeń? Czy piłka jest otwarta?\nSukces: w grze 9v9 min. 3 gole po rotacji „zejście – wbiegnięcie” na drużynę.`,
      blocks: [
        { title: 'Odprawa', minutes: 2, note: 'Temat tygodnia + schematy T1 (fałszywa 9) i T2 (kanał, underlap, cut-back). Hasło: „Podaj i biegnij!”.' },
        { drill: W.pon, minutes: 18 }, { drill: pon2 }, { drill: pon3 }, { drill: pon4 },
      ],
    }),
    session({
      id: 't02-wt', date: '2026-10-13', title: 'T2 · Wt 13.10 (MD-5) · Przechylenie, drabinki i corta luz – małe pola',
      goal: 'Przeciążenie boku i ukośne łańcuchy (Xabi), szerokość albo wbiegnięcie (MP #19) w małych grach z dużą liczbą pojedynków. Akcent motoryczny: siła masą ciała + plyometria wolna.',
      phases: NBF,
      notes: `ORGANIZACJA: 2 stanowiska 35×30 z bramkami i BR (wzorce), 2 pola 30×25 z bramkami (3v2), boisko 50×40 z 2 bramkami i liniami półprzestrzeni. ~25 piłek.\n\nKARTA TRENERA – T2\nZasady dnia: 5 zawodników przy piłce; ukośne łańcuchy; obrońca wąsko → szerokość, obrońca doskakuje → wbiegnięcie.\nPytania: Ilu nas jest przy piłce? Co robi obrońca – zostaje czy wychodzi? Kiedy zmienić stronę?\nSukces: min. 2 gole z półprzestrzeni w grze 7v7 na drużynę.`,
      blocks: [
        { title: 'Odprawa', minutes: 2, note: 'Wzorce A (drabinka + tabele) i B (corta luz) – pokaz na tablicy.' },
        { drill: W.wt, minutes: 18 }, { drill: wt2 }, { drill: wt3 }, { drill: wt4 },
      ],
    }),
    session({
      id: 't02-sr', date: '2026-10-14', title: 'T2 · Śr 14.10 (MD-4) · Wykończenie i 2-3-5 przeciw niskiemu blokowi',
      goal: 'Dzień najwyższej złożoności na dużym polu: dośrodkowania po ziemi i wycofania, wzorce centralne i boczne, faza gry 2-3-5 → 2-3-2 / 3-1-6 przeciw blokowi 4-4-1 z kontrpressingiem. Akcent motoryczny: wytrzymałość (RSA) w grach.',
      phases: ['Atak-Tworzenie szans', 'Atak-Finalizacja', 'A/O'],
      notes: `ORGANIZACJA: 2 stanowiska na obu bramkach (korytarz niepewności, potem wzorce 6v3 – manekiny na 25. m), połowa boiska + 5 m z 3 mini-bramkami na linii środkowej. ~30 piłek.\n\nKARTA TRENERA – T2\nZasady dnia: każdy kanał zajęty; najpierw środek, potem bok; strzał po 1–2 kontaktach; zabezpieczenie 2+3.\nPytania: Gdzie stoi pięciu z przodu? Strzał, podanie czy wycofanie? Kto zabezpiecza?\nSukces: ≥ 50% akcji w fazie gry kończy się strzałem; ≥ 3 odbiory w 5 s po stracie na serię.\nOstatnie 5 min gry – pełna intensywność (MP #21: najwięcej goli pada pod koniec połowy).`,
      blocks: [
        { title: 'Odprawa', minutes: 2, note: 'Schemat F1 (zajęcie pola karnego) i 2-3-5 vs niski blok. Wnioski z MŚ 2022: 80% goli z pola karnego, wycofanie, 1–2 kontakty.' },
        { drill: W.sr, minutes: 18 }, { drill: sr2 }, { drill: sr3 }, { drill: sr4 },
      ],
    }),
    session({
      id: 't02-czw', date: '2026-10-15', title: 'T2 · Czw 15.10 (MD-3) · Przejścia: kontra po odbiorze, kontrpressing + SFG (rożny w ataku)',
      goal: 'Ostatni trening przed meczem 18.10 (nd): szybkie przejścia po odbiorze i po stracie, rzut rożny w ataku. Mała złożoność, akcent szybkości, pełne przerwy.',
      phases: ['A/O', 'O/A', 'SFG'],
      notes: `ORGANIZACJA: 3 pola 14×14 z 2 mini-bramkami, pole 45×50 z bramką i 3 mini-bramkami, pół boiska na SFG, boisko 55×40 z 2 bramkami. ~25 piłek.\n\nKARTA TRENERA – T2\nZasady dnia: strata = 5 s na odbiór; odbiór = pierwsze spojrzenie do przodu; w SFG gubimy krycie i strzelamy z 1. kontaktu.\nSukces: 3 gole w 8 s z kontry na zespół; w SFG min. 4 strzały celne na 12 rzutów.\nPo treningu: skład i zadania na mecz 18.10.`,
      blocks: [
        { title: 'Odprawa', minutes: 2, note: 'Plan na mecz 18.10 + schemat S1 (rożny w ataku).' },
        { drill: W.czw, minutes: 18 }, { drill: czw2 }, { drill: czw3 }, { drill: S.rożnyAtak, minutes: 15 }, { drill: czw5 },
      ],
    }),
  ];

  const schemes = {
    'Atak-Tworzenie szans': [{
      id: 20261012001, name: 'T3 · 2-3-5 → 2-3-2 i 3-1-6 przeciw niskiemu blokowi (De Zerbi)',
      comments: tac.html('Struktura ataku na niski blok', [
        '2-3-5: dwóch ŚO zabezpiecza, trzech w linii pomocy kontroluje tempo, pięciu w linii ataku zajmuje każdy kanał (2 skrzydła, 2 półprzestrzenie, środek).',
        'Najpierw środek: dwóch z półprzestrzeni schodzi i powstaje 2-3-2 – szybkie, krótkie kombinacje („góra–dół–przez”).',
        'Gdy blok zamyka środek: 3-1-6 – boczny dołącza do ŚO (trójka), jeden pivot gra, sześciu z przodu tworzy dwa szerokie trójkąty.',
        'Trójkąty na bokach: naddanie / podminięcie i wycofanie spod linii końcowej (42% asyst z półprzestrzeni, 34% z boku – MP #21).',
      ], 'K. Gerega, Roberto De Zerbi – The Master of Timing, s. 33–36; Mikrotaktyczny Poniedziałek #20, #21'),
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

  return { drills: [W.pon, W.wt, W.sr, W.czw, S.rożnyAtak, pon2, pon3, pon4, wt2, wt3, wt4, sr2, sr3, sr4, czw2, czw3, czw5], sessions, schemes };
}
