// Rozgrzewki BetterWay (mobilizacja → aktywacja → wzorce ruchu/mechanika → potencjacja).
// Akcent dnia wg mikrocyklu (Pon koordynacja, Wt siła + plyo wolna, Śr wytrzymałość/RSA, Czw szybkość + plyo szybka)
// i okna motoryczne U14–U15 z arkusza periodyzacji. Trzy mezocykle = trzy poziomy progresji.
import { warmup } from './lib.mjs';

const E = (name, start, how, dose, look) => ({ name, start, how, dose, look });

// wspólna mobilizacja (4 min)
const mobil = (m) => ({
  title: 'BLOK 1 – MOBILIZACJA (4 min, w miejscu)',
  items: [
    E('Najlepsze rozciąganie świata', 'wykrok w przód, ręce na ziemi po wewnętrznej stronie przedniej stopy, tylne kolano nad ziemią',
      'łokieć w kierunku kostki przedniej nogi, rotacja tułowia z ręką pionowo w górę (wzrok za dłonią), na koniec wyprost przedniego kolana', `${m >= 2 ? 3 : 4} na stronę`, 'tylne kolano nie dotyka ziemi, rotacja z klatki piersiowej'),
    E('Przejścia 90/90 w siadzie', 'siad, nogi zgięte 90° (jedna przed sobą, druga z boku)', 'bez pomocy rąk przenosisz kolana na drugą stronę, pochylenie nad przednią golenią', '6 przejść', 'tułów wyprostowany, ruch z bioder'),
    E('Mobilizacja stawu skokowego w półklęku', 'półklęk, przednia stopa ok. 10 cm od tyczki', 'kolano do przodu nad palcami, pięta na ziemi', '10 na nogę', 'pięta nie odrywa się, kolano w linii 2.–3. palca'),
  ],
});

export function warmups(m, date) {
  const tag = ['', 'I', 'II', 'III'][m];
  const ladder = m === 1 ? 'in-in-out-out, ickey shuffle, hop-scotch' : m === 2 ? 'skip boczny, crossover, 2 kroki + odbicie' : 'drabinka + reakcja na sygnał (kolor talerzyka) + przyspieszenie 5 m';

  const pon = warmup({
    id: `bw${m}-pon`, date, name: `BW ${tag} · Pon · Rozgrzewka – koordynacja i praca stóp`, duration: 18,
    accent: 'koordynacja, praca stóp, zwinność (COD) – utrzymanie i automatyzacja',
    objective: 'Przygotowanie ruchowe BetterWay z akcentem koordynacyjnym (okno U14–U15: koordynacja i zwinność – automatyzacja). Dzień z mniejszą objętością motoryczną, dużo kontaktów z piłką.',
    blocks: [
      mobil(m),
      { title: 'BLOK 2 – AKTYWACJA (3 min)', items: [
        E('Martwy robak', 'leżenie tyłem, ręce w górę, biodra i kolana 90°', 'naprzemiennie prostujesz rękę i przeciwną nogę, lędźwie przyklejone do ziemi', '2 × 8', 'żebra w dół, wydech przy wyproście'),
        E('Krok boczny z minibandem', 'taśma nad kolanami, pozycja półprzysiadu', 'kroki w bok bez łączenia stóp', '2 × 8 kroków w każdą stronę', 'kolana na zewnątrz, tułów stabilny'),
      ] },
      { title: 'BLOK 3 – KOORDYNACJA I PRACA STÓP (8 min, 4 tory z drabinkami)', items: [
        E(`Drabinka: ${ladder}`, 'przed drabinką, pozycja atletyczna', 'rytmiczne przejście drabinki, na końcu przyspieszenie 5 m', '6 przejść (2 na każdy wzór)', 'aktywne stopy, ręce pracują, wzrok przed siebie'),
        E('Drabinka + przyjęcie piłki', 'na końcu drabinki partner z piłką 8 m dalej', 'po wyjściu z drabinki przyjęcie kierunkowe podania od partnera i podanie zwrotne', '4 powtórzenia', 'otwarta sylwetka przed przyjęciem, skan przez ramię'),
        E('Slalom 4 tyczek z hamowaniem', 'start przy pierwszej tyczce', 'krótkie kroki wokół tyczek, po ostatniej hamowanie w 2 krokach', '4 powtórzenia', 'biodra nisko, krótkie kroki przy zmianie kierunku'),
      ] },
      { title: 'BLOK 4 – POTENCJACJA (3 min)', items: [
        E(m === 3 ? 'Berek 2×1 w kwadracie 8×8 m' : 'Lustro 1×1 w korytarzu 5 m', 'dwójki (trójki) twarzą w twarz', m === 3 ? 'dwóch goni jednego przez 6 s, zmiana' : 'prowadzący zmienia kierunek, drugi „przykleja się”, po 6 s zmiana ról', '4 × 6 s, przerwa 30 s', 'pozycja atletyczna, bez krzyżowania nóg'),
      ] },
    ],
    description: 'Mobilizacja i aktywacja przy torach, drabinki w torach, potencjacja w polu obok. Pytanie o samopoczucie (sen, ból 0–10) przed startem.',
    coachingPoints: 'Jakość ruchu przed tempem. Po meczu dzień wcześniej: mniej skoków, więcej koordynacji z piłką.',
    variations: 'Regresja: drabinka w marszu. Progresja: drabinka z reakcją na kolor.',
  });

  const wt = warmup({
    id: `bw${m}-wt`, date, name: `BW ${tag} · Wt · Rozgrzewka – siła masą ciała i plyometria wolna`, duration: 18,
    accent: 'siła masą ciała, stabilizacja, plyometria wolna (lądowania), hamowanie',
    objective: 'Przygotowanie do dnia z największą liczbą starć (małe pola). Okno U14–U15: siła masą ciała i plyometria – doskonalenie, technika ruchu przed obciążeniem (PHV).',
    blocks: [
      mobil(m),
      { title: 'BLOK 2 – AKTYWACJA / SIŁA (5 min)', items: [
        E('Przysiad z pauzą', 'stopy na szerokość bioder, ręce przed sobą', 'zejście 3 s, pauza 1 s na dole, dynamiczny wyprost', m === 1 ? '2 × 8' : '2 × 10', 'kolana nad stopami, pięty na ziemi, plecy proste'),
        E('Wykrok w tył z sięgnięciem', 'stanie', 'krok w tył do wykroku, sięgnięcie rękami do przedniej stopy, powrót', '2 × 6 na nogę', 'przednie kolano stabilne, tułów długi'),
        E('Copenhagen na krótkiej dźwigni', 'leżenie bokiem, kolano górnej nogi na kolanie partnera', 'uniesienie bioder i dolnej nogi, przytrzymanie', `2 × ${m === 1 ? 15 : 20} s na stronę`, 'ciało w linii; przy bólu pachwiny – dolna noga na ziemi'),
        E('Nordic hamstring w parach', 'klęk, partner trzyma kostki', 'powolne opadanie w przód 3–4 s, złapanie rękami', m === 3 ? '1 × 6' : '1 × 5', 'linia kolano–biodro–bark; w okresie szybkiego wzrostu 3 powtórzenia'),
      ] },
      { title: 'BLOK 3 – PLYOMETRIA WOLNA I HAMOWANIE (6 min, tory)', items: [
        E('Wyskok obunóż z przyklejonym lądowaniem', 'stanie, ramiona w górze', 'zamach rękami, wyskok w górę, lądowanie miękko i zatrzymanie 2 s', '5 powtórzeń', 'cicho, kolana nie uciekają do środka'),
        E(m === 1 ? 'Przeskok jednonóż w przód' : 'Przeskok boczny jednonóż (skater)', 'stanie na jednej nodze', m === 1 ? 'przeskok ok. 1 m na tę samą nogę, zatrzymanie 2 s' : 'skok w bok na drugą nogę, zatrzymanie 2 s', '3 na nogę', 'biodra poziomo, kolano nad stopą'),
        E('Hamowanie w 3 krokach + cięcie 45°', 'start z linii', 'bieg 10 m na 70–85%, hamowanie w 3 krokach, odbicie i 5 m pod kątem 45°', '4 powtórzenia (2 w lewo, 2 w prawo)', 'biodra nisko, pierwszy krok po cięciu krótki i mocny'),
      ] },
      { title: 'BLOK 4 – POTENCJACJA (3 min)', items: [
        E('Walka o pozycję 1×1 (ramię i biodro)', 'pary, piłka między nimi, sygnał trenera', 'na sygnał walka o pozycję przy piłce – wygrywa ten, kto pierwszy ją ochroni (MP #11)', '4 × 5 s', 'nisko na nogach, ramię i biodro, bez szarpania'),
      ] },
    ],
    description: 'Siła i lądowania przed grami na małych polach. Zawodnicy w okresie szybkiego wzrostu: mniej skoków, więcej stabilizacji.',
    coachingPoints: 'Każde lądowanie „ciche”. Najpierw technika, potem tempo.',
    variations: 'Progresja w mezocyklu II–III: dłuższe trzymanie pozycji, przeskoki boczne.',
  });

  const sr = warmup({
    id: `bw${m}-sr`, date, name: `BW ${tag} · Śr · Rozgrzewka – mechanika biegu i przygotowanie do RSA`, duration: 18,
    accent: 'mechanika biegu, przyspieszenie, przygotowanie do powtarzanych sprintów (RSA) i dużych pól',
    objective: 'Dzień najwyższej złożoności i największych pól (MD-3). Okno U14–U15: RSA i wytrzymałość – doskonalenie. Wytrzymałość budujemy głównie w grach – rozgrzewka przygotowuje do powtarzanych sprintów.',
    blocks: [
      mobil(m),
      { title: 'BLOK 2 – AKTYWACJA (3 min)', items: [
        E('Mostek biodrowy jednonóż z pauzą', 'leżenie tyłem, jedna noga w powietrzu', 'uniesienie bioder, pauza 2 s', '2 × 8 na nogę', 'miednica nie opada'),
        E('Wspięcia na palce jednonóż', 'stanie na jednej nodze przy partnerze', 'pełne wspięcie, powolne opuszczenie', '2 × 12', 'kostka stabilna, kolano proste'),
      ] },
      { title: 'BLOK 3 – MECHANIKA BIEGU (7 min, tory 15 m)', items: [
        E('Skip A → skip C', 'stanie, łokcie 90°', 'skip A (kolano do biodra), potem skip C (pięty pod pośladki)', '2 × 15 m każdy', 'wysokie biodra, krótki kontakt'),
        E('Wymiany nóg przy ścianie/partnerze', 'pochylenie 45°, dłonie na barkach partnera', 'szybka wymiana nóg 3 razy, zatrzymanie', '3 serie', 'linia głowa–pięta, pięta pod biodrem'),
        E('Przebieżki stopniowane', 'start z linii', 'bieg 30 m stopniowany do 80% prędkości', `${m === 1 ? 3 : 4} powtórzenia, powrót truchtem`, 'rozluźnione barki, praca rąk przód–tył'),
      ] },
      { title: 'BLOK 4 – POTENCJACJA (4 min)', items: [
        E(`Sprint ${m === 3 ? '15' : '10'} m z różnych pozycji`, 'start z leżenia / siadu / tyłem', 'na sygnał obrót i sprint', '4 powtórzenia, przerwa 30 s', 'pierwsze 2 kroki krótkie i mocne'),
      ] },
    ],
    description: 'Przygotowanie do dużych pól i długich serii. Przebieżki stopniowane jako most do gry.',
    coachingPoints: 'Mechanika przed prędkością. RSA w samej grze — pilnuj przerw między seriami.',
    variations: 'Mezocykl III: sprint 15 m + hamowanie + powrót (RSA w rozgrzewce 3×).',
  });

  const czw = warmup({
    id: `bw${m}-czw`, date, name: `BW ${tag} · Czw · Rozgrzewka – szybkość i plyometria szybka`, duration: 18,
    accent: 'szybkość, akceleracja, reaktywność, plyometria szybka (krótki kontakt)',
    objective: 'MD-2: świeżość i szybkość przy małej objętości. Okno U14–U15: szybkość/moc – doskonalenie (złote lata). Pełne przerwy między sprintami.',
    blocks: [
      mobil(m),
      { title: 'BLOK 2 – AKTYWACJA (3 min)', items: [
        E('Pogo (skoki z kostek)', 'stanie, kolana prawie proste', 'szybkie odbicia tylko ze stawu skokowego', `2 × ${m === 1 ? 10 : 15}`, 'krótki kontakt, cisza, sztywna kostka'),
        E('Deska boczna z unoszeniem nogi', 'podpór bokiem na przedramieniu', 'unoszenie górnej nogi', '2 × 8 na stronę', 'biodra wysoko'),
      ] },
      { title: 'BLOK 3 – MECHANIKA I AKCELERACJA (7 min, tory 15 m)', items: [
        E('A-skip → przyspieszenie 10 m', 'stanie', '5 m skip A, przejście w przyspieszenie', '3 powtórzenia', 'pochylenie całego ciała przy starcie'),
        E('Falling start 10 m', 'stanie na palcach, pochylanie do przodu', 'gdy tracisz równowagę – sprint', '3 powtórzenia, pełna przerwa', 'pierwszy krok pod biodrem, nie przed nim'),
        E(m === 1 ? 'Start na sygnał dźwiękowy' : 'Start na sygnał wzrokowy (kolor talerzyka)', 'pozycja półwykroku', 'reakcja i sprint 5 m w kierunek wskazany przez trenera', '4 powtórzenia', 'czas reakcji, pierwszy krok w dobrym kierunku'),
      ] },
      { title: 'BLOK 4 – POTENCJACJA (4 min)', items: [
        E('Pojedynek sprinterski 2×1 z piłką', 'dwóch zawodników 3 m za trzecim, trener wrzuca piłkę 15 m', 'wyścig do piłki, kto pierwszy – strzał do mini-bramki', '3 powtórzenia na zawodnika', 'pełna prędkość, pełne przerwy'),
      ] },
    ],
    description: 'Mała objętość, maksymalna jakość. Pełne przerwy (1:10–1:15 praca:odpoczynek).',
    coachingPoints: 'Szybkość tylko na świeżo — jeśli tempo spada, przerwij serię.',
    variations: 'Mezocykl III: starty reakcyjne z piłką (decyzja: prowadzenie lub podanie).',
  });

  return { pon, wt, sr, czw };
}
