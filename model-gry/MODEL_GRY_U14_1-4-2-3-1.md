# Model gry U14 · 1-4-2-3-1

**Bazą są modele M1 (De Zerbi) i M2 (Xabi Alonso)** z dokumentu [`modele_1-4-2-3-1.md`](modele_1-4-2-3-1.md). Uzupełniają je:
- cierpliwość i gra w trójkątach z M4 (Hiszpania 2010),
- pojedynki skrzydłowych 1v1 z M6 (Hiszpania 2024–26),
- stałe fragmenty i drugie piłki z M7 (Arsenal),
- pressing 4-4-2 z „dziesiątką” obok napastnika z M5,
- plan B na mocniejszego rywala z M3.

Model jest zbudowany jak w Periodyzacji Taktycznej: **zasady → podzasady → zachowania pozycji**. Każdy moment gry ma subfazy. Każda subfaza ma:
- cel,
- strukturę,
- zasady,
- zachowania pozycji,
- sygnały do decyzji („jeśli → to”),
- typowe błędy,
- wskaźniki,
- odnośniki do schematów w aplikacji i do odcinków „Mikrotaktycznego Poniedziałku” (MP).

---

## 0. Podstawy

### 0.1 Numeracja i profile pozycji

| Nr | Pozycja | Profil w modelu |
|---|---|---|
| 1 | BR | Bramkarz grający nogami, „trzeci środkowy obrońca” w otwarciu; za linią obrony ustawiony wysoko jak libero |
| 4 | LŚO | Środkowy obrońca rozgrywający: przyjęcie bokiem, prowadzenie piłki w wolne, podanie przez linię |
| 5 | PŚO | Środkowy obrońca zabezpieczający prawą stronę, gdy PO jest wysoko |
| 3 | LO | Boczny „hybrydowy”: w budowaniu schodzi do trójki z ŚO, w obronie klasyczny boczny |
| 2 | PO | Boczny-wahadło: w budowaniu daje szerokość po prawej, naddaje i podmija |
| 6 | Defensywny pomocnik | Stały punkt: zawsze dostępny, przenosi grę, zabezpiecza; w obronie chroni strefę 14 |
| 8 | Środkowy pomocnik | Drugi pivot wyżej, przyjęcie na półobrocie, dobiega w pole karne w drugim tempie |
| 10 | Ofensywny pomocnik | „Dziesiątka” w lewej kieszeni; w obronie drugi napastnik w 4-4-2 |
| 7 | Prawy skrzydłowy | „Dziesiątka” w prawej kieszeni, dryblujący do środka (wzorzec M6) |
| 11 | Lewy skrzydłowy | Szerokość po lewej, pojedynki 1v1, atak przestrzeni za bocznym obrońcą rywala |
| 9 | Napastnik | Głębia, gra tyłem do bramki („ściana”), schodzenie jako fałszywa 9, atak bliższego słupka |

### 0.2 Mapa boiska

- **5 kanałów pionowych:** lewy boczny · lewa półprzestrzeń · środek · prawa półprzestrzeń · prawy boczny.
- **3 strefy poziome:** niska (1/3 własna) · środkowa · wysoka (1/3 rywala).
- **Kieszeń:** wolne miejsce między linią pomocy a linią obrony rywala, w półprzestrzeni.
- **Strefa 14:** środek przed polem karnym rywala; w obronie to samo miejsce przed naszym polem karnym.
- **Korytarz niepewności:** pas między linią obrony rywala a jego bramkarzem.

### 0.3 Tożsamość (5 zasad nadrzędnych)

1. **Kontrolujemy grę piłką i czasem.** Zwalniamy pauzą i podaniem do tyłu, przyspieszamy grą w pionie i trzecim zawodnikiem.
2. **Prowokujemy, potem uderzamy.** Wciągamy rywala w pressing; za jego plecami powstaje „sztuczne przejście”.
3. **Najpierw środek, potem bok.** Gramy przez pivotów i kieszenie. Bok i zmiana strony wtedy, gdy środek jest zamknięty.
4. **Blisko siebie z piłką, blisko siebie po stracie.** Bliskość ułatwia kombinacje (relacje 2–3 zawodników) i natychmiastowy kontrpressing.
5. **Bronimy razem, zwarcie i agresywnie.** Albo wysoko każdy ma swojego, albo zwarty blok. Nigdy pomiędzy.

### 0.4 Struktury w skrócie

| Moment | Struktura | Schemat w aplikacji |
|---|---|---|
| Otwarcie vs wysoki pressing | 2-4-2-2 („pudełko”), BR jako trzeci ŚO; zasada +1 | 1.1a, 1.1b, 1.1c |
| Otwarcie vs krycie 1:1 | gra bezpośrednia na 9, w środku 4v4 | 1.1d |
| Budowanie vs blok średni | 3-2-4-1 (LO do trójki, PO wahadło, 10 i 7 w kieszeniach) | 1.2a–1.2f |
| Tworzenie szans vs blok niski | 3-2-5 / 2-3-5 → 2-3-2 lub 3-1-6 | 1.3a–1.3f |
| Finalizacja | 5 stref w polu karnym, korytarz niepewności | 1.4a, 1.4b |
| A/O | zabezpieczenie 3+2, kontrpressing 5 s, powrót do bloku | 2.1, 2.2, 2.4 |
| Obrona | pressing wysoki · blok średni 4-4-2 · blok niski 4-5-1 · pole karne | 3.1 · 3.2a–c · 3.3 · 3.4 |
| O/A | pierwsze podanie do przodu, 3 biegi w głąb; utrzymanie | 4.2a, 4.2b, 4.3 |
| SFG | rożny i rzut wolny boczny w ataku i w obronie | 5.1a, 5.1b, 5.2a, 5.2b |
| Plan B | blok 4-4-1-1 i kontra | 6 |

### 0.5 Zasada „+1” w pierwszej linii

Liczba naszych zawodników w pierwszej linii budowania zależy od liczby pressujących napastników rywala. Zawsze mamy o jednego więcej.

| Rywal pressuje… | Nasza pierwsza linia | Kto dochodzi |
|---|---|---|
| 1 napastnikiem | 2 ŚO (2v1) | LO zostaje wyżej (struktura 2-3-5) |
| 2 napastnikami | BR + 2 ŚO lub 3 z tyłu (3v2) | LO schodzi do trójki **albo** 6 schodzi między ŚO |
| 3 napastnikami | BR + 3 (4v3) | LO do trójki i BR jako dodatkowy |
| Kryje 1:1 całe boisko | — | gramy bezpośrednio (1.1d): długie podanie na 9, w środku 4v4 |

---

## 1. FAZA ATAKU

### 1.1 Subfaza: OTWARCIE GRY (vs wysoki pressing)

**Cel:** przejść I i II linię pressingu podaniami, bez wybicia, i wejść do budowania przodem do gry.

**Struktura:** 2-4-2-2.
- 4 i 5 szeroko na wysokości pola karnego.
- 6 i 8 tworzą z nimi „pudełko”.
- 3 i 2 szeroko na wysokości pivotów.
- 10 i 9 w środku (z pudełkiem tworzą „klepsydrę”).
- 11 i 7 wysoko i szeroko.
- BR jako trzeci ŚO.

**Zasady i podzasady**
1. **Przewaga w pierwszej linii (+1).** BR gra nogami jak zawodnik z pola.
2. **Zapraszamy pressing.**
   - Pauza z piłką pod podeszwą.
   - Podanie do tyłu jako przynęta (MP #05).
   - Wsparcie utrzymujące zawsze pod piłką (MP #02).
3. **Gramy w kierunku presji.** Pęd pressującego wykorzystujemy jednym podaniem obok niego.
4. **Wychodzimy przez środek.**
   - S-kombinacja: ŚO → 6 → po skosie do 8 → do 10 lub 9.
   - „Góra–dół–przez” (MP #04).
5. **Gdy środek zamknięty, gramy po obwodzie.** Boczny, potem szeroki romb (boczny – pivot – skrzydłowy – 10).

**Zachowania pozycji**

| Pozycja | Z piłką | Bez piłki (partner przy piłce) |
|---|---|---|
| 1 BR | Przyjmuje bokiem, pauzuje do doskoku, gra w kierunku presji. Wybija tylko przy kryciu 1:1 wszystkich. | Ustawia się między ŚO jako opcja do tyłu, kąt 45° do podającego ŚO. |
| 4, 5 | Przyjmują bokiem, nogą dalszą od rywala. Pauzują. Grają obok lub między nogami pierwszego pressującego. Gdy nikt nie doskakuje, wchodzą z piłką w wolne. | Szeroko (krawędź pola karnego), na tej samej wysokości lub niżej od partnera z piłką (linia podania do tyłu). |
| 6 | Przyjęcie na półobrocie, 1–2 kontakty. Podanie po skosie do 8 albo zwrotne do ŚO i ruch. | Schodzi do piłki bokiem, skanuje przez ramię przed przyjęciem (MP #06). Zawsze w trójkącie z ŚO. |
| 8 | Przyjmuje za plecami pressującego, od razu do 10 lub 9. | Wyżej niż 6 (schodkowanie), za linią pressingu, rusza do przodu w momencie podania do 6. |
| 3, 2 | Przyjmują szeroko, grają do pivota lub do skrzydłowego schodzącego do zgrania (romb). | Szeroko, rozciągają pressing. Gdy rywal zamyka środek, schodzą niżej pod piłkę. |
| 10, 9 | Zgranie na 1 kontakt do wbiegającego (ściana). | 9 przypina ŚO rywala lub schodzi do zgrania. 10 bokiem w kieszeni, gotowy do obrotu. |
| 11, 7 | Przyjęcie i od razu w przestrzeń (4v4). | Wysoko i szeroko, przypinają bocznych obrońców rywala. Przy długim podaniu atakują drugą piłkę. |

**Sygnały do decyzji**
- Rywal skacze do BR lub ŚO → gramy w kierunku presji, czyli tam, skąd przyszedł pressujący.
- Rywal zostawia pivota wolnego → podanie do pivota na półobrót.
- Rywal zamyka środek cieniami podań → gramy po obwodzie: boczny → skrzydłowy schodzi → 10.
- Rywal kryje 1:1 wszystkich (zostaje 4v4 z tyłu) → **1.1d**: długie podanie BR lub ŚO na 9, zbiórka przez 10, 8 i skrzydłowych.
- 6+ zawodników rywala w pressingu → po wyjściu sprint do przodu („sztuczne przejście”).

**Typowe błędy → korekta**
- ŚO przyjmuje przodem do własnej bramki → ustawienie bokiem przed podaniem.
- Pivoci na tej samej wysokości → jeden niżej, drugi wyżej.
- Podanie do pivota pod presją z tyłu, bez informacji → komenda „Plecy!”.

**Wskaźniki (U14):**
- ≥ 50% akcji od BR przekracza połowę bez wybicia,
- ≤ 1 strata w strefie niskiej na połowę meczu.

**MP:** #02 wsparcie utrzymujące, #05 podanie wsteczne, #06 przyjęcie, #04 gra na trzeciego, #11 ochrona piłki.

### 1.2 Subfaza: BUDOWANIE GRY (vs blok średni)

**Cel:** wejść piłką między II a III linię rywala (do kieszeni) i obrócić się do przodu.

**Struktura 3-2-4-1:**
- 3 + 4 + 5 z tyłu,
- 6 i 8 w środku,
- 11 szeroko po lewej, 10 w lewej kieszeni, 7 w prawej kieszeni, 2 szeroko po prawej,
- 9 w głębi.

**Zasady i podzasady**
1. **Zabezpieczenie 3+2 przez cały atak.** Trzech z tyłu i dwóch pivotów, odpowiedzialnych za stratę.
2. **Szerokość i głębokość.**
   - 11 i 2 rozciągają blok wszerz.
   - 9 przypina linię obrony.
3. **Przynęta.** Podanie do tyłu (ŚO, BR) rozciąga blok w pionie, a w kieszeni powstaje miejsce.
4. **Wejście z piłką ŚO.** Skrajny ŚO prowadzi w wolne i przyciąga skrzydłowego rywala. Wtedy podanie do kieszeni (1.2c).
5. **„Góra–dół–przez”.**
   - GÓRA: podanie pionowe do 10 lub 9 (tyłem).
   - DÓŁ: zgranie do pivota przodem do gry.
   - PRZEZ: podanie za linię lub do kieszeni (1.2b).
6. **Zamknięty środek → zmiana strony.** Przeładowanie jednej strony i szybkie przeniesienie gry do wahadła po słabej stronie (1.2d). Krótki czas piłki w jednym sektorze (MP #15).
7. **Cierpliwość z celem.** Podania utrzymujące są dozwolone, ale co kilka podań szukamy podania zdobywającego.

**Zachowania pozycji**

| Pozycja | Zachowanie |
|---|---|
| 3 (LO) | Schodzi do linii ŚO (trójka), szeroko jak boczny ŚO. Wchodzi z piłką w wolne, gra do 10 w kieszeni lub do 11. |
| 4, 5 | Trójka z LO. Skrajny wchodzi z piłką, środkowy organizuje i daje linię do tyłu. 5 pilnuje prawego kanału przy wysokim PO. |
| 6, 8 | Blisko siebie (10–12 m), na różnych wysokościach. Jeden zawsze pod piłką. Kierują rytmem: pauza, przynęta, pion. |
| 2 (PO) | Wahadło: szeroko na wysokości linii obrony rywala. Przy zmianie strony przyjmuje w biegu, gra do 7 lub dośrodkowuje. |
| 11 | Szeroko po lewej. Przyjęcie do nogi do 1v1 albo bieg za plecy bocznego obrońcy rywala, gdy ten wychodzi. |
| 10, 7 | „Dwie dziesiątki” w kieszeniach: bokiem, między zawodnikami rywala (konflikt decyzyjny). Ruch „do i od piłki” (MP #18). Przyjęcie przodem do bramki (MP #20). |
| 9 | Przypina ŚO rywala, schodzi do zgrania (ściana). Jako fałszywa 9 wyciąga ŚO i otwiera kanał dla 10 lub 7 (1.2f). |
| 1 BR | Opcja do tyłu dla trójki, gotowy na przynętę. |

**Sygnały do decyzji**
- Pomocnik rywala wyskakuje do pivota → podanie od razu do kieszeni za jego plecami.
- Skrzydłowy rywala zawęża do ŚO → podanie do wahadła (11 lub 2).
- Boczny obrońca rywala wychodzi do 10 lub 7 → 11 lub 2 wbiega za jego plecy (MP #19).
- Blok przesuwa się na stronę piłki → zmiana strony przez 6 lub przerzut ŚO.

**Wariant B (rywal kryje 6):** 6 schodzi między ŚO, LO zostaje szeroko jako wahadło, 11 wchodzi do lewej kieszeni, 10 przesuwa się do środka.

**Typowe błędy → korekta**
- Wszyscy przychodzą do piłki → „Zostań w swoim kanale”.
- Przyjęcie w kieszeni tyłem i oddanie do tyłu → „Bokiem!”, skan przed przyjęciem.
- Zbyt długie granie w jednym sektorze → limit 3 podań w sektorze w grach treningowych.

**Wskaźniki (U14):** ≥ 8 przyjęć w kieszeni na połowę meczu; ≥ 3 zmiany strony zakończone akcją w ostatniej tercji.

**MP:** #04, #09 ruch tworzący przestrzeń, #15 podanie zdobywające, #18 tworzenie wolnej przestrzeni, #20 półprzestrzenie.

### 1.3 Subfaza: TWORZENIE SZANS (vs blok niski)

**Cel:** wejść w pole karne z piłką albo podaniem zdobywającym i stworzyć sytuację strzelecką.

**Struktura bazowa 3-2-5:**
- 3 + 4 + 5 i 6 + 8 z tyłu (zabezpieczenie 3+2),
- 11, 10, 9, 7 i 2 zajmują 5 kanałów.

**Warianty struktury**
- **2-3-5:** rywal zostawia jednego napastnika, więc LO wchodzi do linii pomocy obok 6, a 8 idzie wyżej.
- **2-3-2:** 10 i 7 schodzą z półprzestrzeni do szybkich kombinacji w środku (1.3a).
- **3-1-6:** jeden pivot zostaje, 8 dołącza do przodu, sześciu tworzy dwa szerokie trójkąty (1.3a).

**Zasady i podzasady**
1. **Każdy kanał zajęty.** Rozciągamy blok wszerz i w głąb.
2. **Najpierw środek.**
   - Gra na trzeciego, „góra–dół–za linię” z 9 jako ścianą.
   - Tabele, czyli podaj i biegnij.
3. **Przechylenie.**
   - 5–6 zawodników po stronie piłki, dalsze wahadło szeroko na zmianę strony.
   - Ukośne łańcuchy („escadinhas”), nigdy w jednej linii poziomej.
4. **Relacje w trójkątach.**
   - Naddanie i podminięcie (1.3f).
   - „Corta luz”: przepuszczenie piłki.
   - Ściana 1-2.
5. **Izolacja 1v1 (M6).**
   - 11 przy linii: przyjęcie do nogi i pojedynek.
   - 7 z prawej kieszeni: drybling do środka.
6. **Podanie bezpośrednie.** Gdy blok skupia się na środku, ŚO lub pivot gra długo za linię do wbiegającego skrzydłowego.

**Zachowania pozycji**

| Pozycja | Zachowanie |
|---|---|
| 9 | Ściana tyłem do bramki: zgranie na 1 kontakt i natychmiastowy obrót za linię. Przypina dwóch ŚO. Atakuje bliższy słupek. |
| 10 | Lewa kieszeń: przyjęcie, obrót, podanie prostopadłe. Corta luz z wahadłem. Wbiegnięcie w pole karne w drugim tempie. |
| 7 | Prawa kieszeń: drybling do środka, strzał lub podanie prostopadłe. Podminięcie, gdy PO jest z piłką szeroko. |
| 11 | Szeroko: 1v1, dośrodkowanie po ziemi lub wycofanie. Przy akcji z prawej wbiega na dalszy słupek. |
| 2 | Szeroko po prawej: naddanie za 7, dośrodkowanie po ziemi w korytarz niepewności, wycofanie spod linii końcowej. |
| 8 | Wejście w strefę 14 lub półprzestrzeń. Wbiegnięcie z głębi na 11. metr (MP #21). |
| 6 | Stały punkt za akcją: przenosi grę na drugą stronę, pierwszy do kontrpressingu. |
| 3, 4, 5 | Zabezpieczenie: wysoko (ok. 10 m za połową boiska), gotowi na długą piłkę rywala. Skrajny ŚO może wejść z piłką w przestrzeń. |

**Sygnały do decyzji**
- Linia obrony rywala wąska → szerokość (11 lub 2 do nogi). Obrońca wychodzi w szerokość → wbiegnięcie za jego plecy (MP #19).
- Piłka otwarta u partnera (brak presji, piłka ułożona do podania) → start za linię (MP #17).
- Blok przesunął się do piłki → zmiana strony do dalszego wahadła.
- Obrońcy patrzą na piłkę zwrotną → trzeci wbiega za plecy („hipnoza” – MP #04).

**Typowe błędy → korekta**
- Wszyscy w polu karnym, nikt na wycofaniu → stała strefa 11. metra (8 lub 10).
- Dośrodkowania górą na wysokich obrońców → po ziemi, w korytarz niepewności.
- Brak zabezpieczenia po stracie → 3+2 zawsze na miejscu.

**Wskaźniki (U14):**
- ≥ 6 wejść w pole karne (z piłką lub podaniem) na połowę meczu,
- ≥ 60% strzałów z pola karnego.

**MP:** #04, #16 Pinokio pass, podaj i biegnij, #17 piłka otwarta, #19 szerokość albo wbiegnięcie, #20 półprzestrzenie.

### 1.4 Subfaza: FINALIZACJA

**Cel:** strzał z pola karnego po 1–2 kontaktach. Według analizy MŚ 2022 (MP #21) 80% goli pada z pola karnego, a większość po 1–2 kontaktach.

**Zajęcie pola karnego (schemat 1.4a): 5 stref przy dośrodkowaniu lub wycofaniu**

| Strefa | Kto | Zachowanie |
|---|---|---|
| Bliższy słupek | 9 | Atakuje przed obrońcą, ruch „do i od” (MP #18). |
| Środek pola bramkowego / dalszy słupek | skrzydłowy z drugiej strony (11 lub 7) | Wbiega późno, za plecy obrońcy patrzącego na piłkę. |
| 11. metr (wycofanie) | 10 lub 8 | Czeka na wycofanie spod linii końcowej, strzał z pierwszej piłki. |
| Skraj pola karnego / zbiórka | 8 lub 6 | Druga piłka, strzał z dystansu, pierwszy w kontrpressingu. |
| Zabezpieczenie | 3, 4, 5 + 6 | Na połowie rywala, gotowi na kontrę. |

**Zasady**
1. Dośrodkowanie po ziemi w korytarz niepewności albo wycofanie.
2. Strzał pierwszym kontaktem, jeśli to możliwe. Celność przed siłą, po ziemi przy słupku.
3. Spokój w polu karnym: strzał, podanie do lepiej ustawionego czy wycofanie?
4. „Góra–dół–nad” (De Zerbi): 6 → 9, 9 zgrywa do 10, a 10 lobem nad linię do wbiegającego skrzydłowego.

**Wskaźniki (U14):** ≥ 40% strzałów celnych; ≥ 50% goli po 1–2 kontaktach.

---

## 2. PRZEJŚCIE A/O (po stracie piłki)

**Cel:** odzyskać piłkę w 5 s blisko bramki rywala, a gdy się nie uda, nie dopuścić do kontry.

### 2.1 Subfaza: zabezpieczenie w ataku (zanim stracimy piłkę)

**Zasady**
1. Zabezpieczenie 3+2 przez cały atak: trzech z tyłu i dwóch pivotów.
2. Zawężamy i skracamy pole: zawodnicy blisko piłki, bez rozrzucenia po całej szerokości (MP #10).
3. Zawodnik za piłką ma 2 linie asekuracji. Ostatni obrońca ustawiony jest głębiej na długą piłkę.

| Pozycja | Zachowanie w ataku (myślę o stracie) |
|---|---|
| 4, 5, 3 | Linia trzech na wysokości połowy (vs blok niski) albo 10–15 m za pivotami. Kryją napastnika rywala, zanim stracimy piłkę. |
| 6 | Pod piłką, w osi środka. Pierwszy do kontrpressingu w środku. |
| 8 | Za akcją, gotowy zamknąć podanie do przodu z drugiej linii. |
| 1 BR | Wysoko (krawędź pola karnego lub dalej), przechwytuje długie podanie za linię. |

### 2.2 Subfaza: kontrpressing (0–5 s)

**Zasady**
1. **Natychmiast:** trzech najbliższych atakuje piłkę z różnych stron.
2. **Pozostali zamykają podania do przodu** (pułapka wokół piłki).
3. **Bez faulu** zabieramy czas i miejsce.

**Sygnały do kontrpressingu:**
- niedokładne podanie,
- przegrany drybling,
- zablokowany strzał lub dośrodkowanie,
- przyjęcie rywala tyłem do gry,
- złe przyjęcie.

| Pozycja | Zachowanie |
|---|---|
| Zawodnik, który stracił | Natychmiast atakuje piłkę (lub zawodnika, który ją przyjmuje). |
| 2 najbliżsi | Zamykają rywala z boku i z przodu. |
| 6 | Przechwytuje podanie do przodu, przesuwa się do strony piłki. |
| 8, 10, 7 | Zamykają podania w poprzek i do tyłu rywala (on nie może wyjść). |
| 4, 5, 3 | Kryją napastników rywala, wychodzą do przodu, gdy piłka jest pod presją (skracamy). |

### 2.3 Subfaza: decyzja „pressuj czy cofnij się”

| Pressuj dalej | Cofnij się (do bloku 4-4-2) |
|---|---|
| Rywal ma złe przyjęcie lub jest tyłem do gry | Rywal przyjął wolny, przodem do gry |
| Jesteśmy w przewadze wokół piłki | Rywal ma przewagę liczebną w kontrze |
| Piłka przy linii bocznej (mało opcji) | Minęło 5 s albo piłka przeszła naszą linię pomocy |

### 2.4 Subfaza: powrót do bloku i opóźnianie

**Zasady**
1. Najbliższy opóźnia rywala z piłką: nie wchodzi, kieruje do boku.
2. Pozostali biegną za linię piłki najkrótszą drogą, najpierw do środka.
3. Najpierw zamykamy środek, potem piłkę.

**Asymetria po stracie w 3-2-4-1:**
- LO jest już z tyłu.
- PO był wysoko, więc 5 przesuwa się do prawego kanału, a 8 zamyka prawą półprzestrzeń.
- 7 wraca na pozycję prawego pomocnika.
- 11 wraca na lewą stronę linii pomocy.
- 10 staje obok 9.

**Wskaźniki (U14):** ≥ 4 odbiory w 5 s po stracie na połowę meczu; ≤ 2 strzały rywala po kontrze na mecz.

**Schematy:** 2.1, 2.2, 2.4. **MP:** #10 asekuracja w ataku, #13 obrona 1v1.

---

## 3. FAZA OBRONY

**Zasady nadrzędne (MP #01):**
- wola bronienia,
- wszyscy bronią razem,
- presja na zawodnika z piłką,
- obrona przestrzeni przed sobą i za sobą.

Albo wysoko 1:1, albo zwarty blok. Nigdy pomiędzy.

### 3.1 Subfaza: PRESSING WYSOKI (rywal buduje od bramkarza)

**Cel:** odebrać piłkę w strefie wysokiej albo zmusić rywala do wybicia.

**Struktura:** 1:1 w środku i z przodu. Z tyłu zostaje przewaga +1 (zasada U14).

**Sygnały do startu pressingu:**
- podanie BR do ŚO,
- podanie do tyłu do BR,
- złe przyjęcie,
- podanie do bocznego obrońcy przy linii.

| Pozycja | Zachowanie |
|---|---|
| 9 | Biegnie łukiem na ŚO z piłką i odcina podanie zwrotne do BR („cień”). Kieruje grę do boku. |
| 10 | Na drugiego ŚO lub na pivota rywala (gdy ten schodzi między ŚO). |
| 11, 7 | Na bocznych obrońców rywala. Doskok w momencie podania do nich, od strony środka (kierują do linii). |
| 8 | Na pivota rywala (6), gdy ten nie schodzi między ŚO. |
| 6 | Na pomocnika rywala (8) po stronie piłki. |
| 2, 3 | Wysoko na skrzydłowych rywala. |
| 4, 5 | Na napastnika rywala, przewaga +1 z tyłu. Linia na wysokości ok. 40 m od własnej bramki. |
| 1 BR | Wysoko jako libero, przechwytuje długie podanie za linię. |

**Zasada U14:** pomocnik rywala najdalej od piłki pozostaje „wolny”, ale zamknięty cieniem podania 10 lub 6. Pełne 1:1 bez zawodnika ponad liczbę stosujemy dopiero przy dobrej synchronizacji linii.

**Typowe błędy → korekta**
- 9 biegnie prosto na ŚO i otwiera podanie do BR → bieg łukiem.
- Pressuje jeden, reszta stoi → „Wszyscy albo nikt!”.
- Linia obrony nie podchodzi → przestrzeń między liniami ≤ 12 m.

**Wskaźniki (U14):** ≥ 3 odbiory w strefie wysokiej na połowę meczu; ≥ 50% rozegrań od BR rywala kończy się wybiciem lub stratą.

**Schemat:** 3.1. **MP:** #13 obrona 1v1, #03 odbiór.

### 3.2 Subfaza: BLOK ŚREDNI 4-4-2 (podstawa bronienia)

**Cel:** zamknąć środek, skierować grę do boku i odebrać piłkę przy linii bocznej.

**Struktura:** 4-4-2.
- 10 obok 9.
- Odległość między liniami 8–12 m, szerokość bloku ok. 30–35 m.
- Linia obrony ok. 30–35 m od własnej bramki.

**Zasady i podzasady**
1. **Najpierw środek.** 9 i 10 zamykają podania do pivotów rywala (cień podania).
2. **Kierujemy do boku.** Linia boczna to „dodatkowy obrońca”.
3. **Pułapka przy linii (2v1, 3v1):**
   - skrzydłowy doskakuje do bocznego obrońcy rywala,
   - nasz boczny bierze skrzydłowego rywala,
   - 8 lub 6 zamyka podanie do środka,
   - 9 odcina powrót piłki do ŚO.
4. **Przesuwamy się razem.** Zawodnicy po słabej stronie zawężają.
5. **Obrona przed zmianą strony:**
   - przesuwamy się, gdy piłka jest w powietrzu,
   - najbliższy boczny atakuje przyjęcie,
   - skrzydłowy po tej stronie wraca do niego.
6. **Drugie piłki (M7):** przy długim podaniu rywala 2 zawodników (6 i 8) zbiera przed linią obrony.

| Pozycja | Zachowanie |
|---|---|
| 9 | Pilnuje ŚO z piłką bez doskoku (chyba że jest sygnał). Odcina zmianę strony przez ŚO. |
| 10 | W cieniu pivota rywala. Po odbiorze pierwsza opcja do kontry. |
| 11, 7 | Na linii pomocy, w półprzestrzeni. Doskok do bocznego obrońcy rywala na sygnał. Po słabej stronie zawężają do środka. |
| 6, 8 | Blisko siebie, chronią strefę 14. Jeden doskakuje, drugi asekuruje (doskok + asekuracja). |
| 4, 5 | Kryją napastnika rywala, przekazują go przy zmianie strefy (MP #14). Wychodzą do przodu, gdy piłka jest pod presją. Cofają się, gdy piłka jest „otwarta”. |
| 2, 3 | Na skrzydłowych rywala. Po słabej stronie zawężają do ŚO. |
| 1 BR | Komunikacja z linią („wyjście”, „stop”), asekuracja przestrzeni za linią. |

**Sygnały do doskoku:**
- podanie do bocznego obrońcy rywala,
- podanie do tyłu,
- złe przyjęcie,
- podanie do zawodnika tyłem do gry w środku,
- piłka w powietrzu (długie podanie).

**Typowe błędy → korekta**
- 10 biegnie do ŚO i otwiera pivota → „Cień!”.
- Linie rozjeżdżają się (> 15 m) → komenda „Razem!”, gra z linami lub tyczkami w treningu.
- Skrzydłowy nie wraca → zasada „za linię piłki w 3 s”.

**Wskaźniki (U14):**
- ≤ 4 podania rywala do strefy 14 na połowę meczu,
- ≥ 50% odbiorów w bocznych kanałach.

**Schematy:** 3.2a (cień i kierowanie do boku), 3.2b (pułapka przy linii), 3.2c (obrona przed zmianą strony). **MP:** #14 krycie strefowe, #13 obrona 1v1, #03 odbiór.

### 3.3 Subfaza: BLOK NISKI 4-5-1

**Cel:** chronić pole karne i strefę 14, wybić piłkę i zebrać drugą piłkę.

**Struktura:** 4-5-1.
- 10 wchodzi do linii pomocy, skrzydłowi wracają do bocznych obrońców.
- 9 zostaje wyżej jako pierwsza opcja do kontry.

| Pozycja | Zachowanie |
|---|---|
| 6 | Strefa 14: nie wychodzi z niej, blokuje strzały z dystansu. |
| 8, 10 | Doskakują do pomocników rywala w półprzestrzeniach, zamykają podania prostopadłe. |
| 11, 7 | Podwajają z bocznym obrońcą przy skrzydle rywala (2v1), blokują dośrodkowania. |
| 4, 5 | Kryją napastnika, ustawienie bokiem (widzę piłkę i rywala), kontakt fizyczny. |
| 2, 3 | Zamykają dośrodkowanie, w polu karnym kryją wbiegającego z drugiej strony. |
| 9 | Zamyka podanie do pivota rywala, po odbiorze trzyma piłkę (ochrona piłki – MP #11). |

**Schemat:** 3.3. Obrona pola karnego: 3.4.

### 3.4 Subfaza: OBRONA POLA KARNEGO (dośrodkowanie, wycofanie)

**Zasady (MP #01, #07)**
1. Orientacja na zawodnika wbiegającego w strefę, a nie na pustą strefę.
2. Otwarte ustawienie ciała: widzę piłkę i swojego rywala jednocześnie.
3. Kontakt fizyczny przed dośrodkowaniem, żeby rywal nie uderzył czysto.
4. **Oś bramki:** piłka minęła oś → wybijam za siebie (aut bramkowy, rożny). Nie minęła → wybijam przed siebie, tam skąd przyszła.
5. Blokowanie strzału (MP #03): skrócić dystans, wyhamować, powiększyć obrys ciała, ruch nogi blokującej przy stopie strzelającego.
6. Strefa wycofania (11. metr) zawsze zajęta (6 lub 8).

**Wskaźniki (U14):** ≤ 2 strzały rywala z pola bramkowego na mecz.

---

## 4. PRZEJŚCIE O/A (po odbiorze)

**Cel:** wykorzystać nieporządek rywala w pierwszych sekundach, a gdy nie mamy przewagi, utrzymać piłkę.

### 4.1 Subfaza: pierwsze 2 sekundy

**Zasady**
1. Pierwsze spojrzenie do przodu.
2. Pierwszy kontakt od presji, poza strefę kontrpressingu rywala.
3. Pierwsze podanie do przodu (do 9 lub 10) albo poza strefę presji. Nie prowadzimy piłki do tyłu w presję.

### 4.2 Subfaza: kontra (≤ 10 s)

| Gdzie odbiór | Zachowanie |
|---|---|
| Wysoko | Strzał w 5 s. Najbliższy do bramki, dwóch wbiega w pole karne. |
| Środek | 9 trzyma piłkę i zgrywa (ochrona piłki – MP #11). 11 i 2 sprintem w wolne za wysoko ustawionym rywalem. 10 jako trzeci zawodnik. Trzy biegi w głąb. |
| Nisko (blok niski) | Wyjście spod presji: podanie do 6 lub do boku, potem do 9 lub skrzydłowego. 9 przy linii środkowej jest opcją. |

| Pozycja | Zachowanie |
|---|---|
| 9 | Ściąga ŚO rywala, trzyma piłkę, zgrywa, atakuje bliższy słupek. |
| 11, 7 | Sprint po skosie w głąb (do środka), za plecy bocznych obrońców. |
| 10 | Łącznik: przyjęcie, obrót, podanie w tempo biegu. |
| 2 / 3 | Boczny po stronie akcji naddaje, drugi zostaje. |
| 8 | Dobiega na 11. metr (drugie tempo). |
| 6 + 4 + 5 | Zostają za akcją: zabezpieczenie przed kontrą rywala. |

### 4.3 Subfaza: brak przewagi → utrzymanie (M4)

Gdy rywal zdążył się ustawić: zabezpieczamy piłkę, gramy do tyłu do 6, ŚO lub BR i przechodzimy do budowania (1.2). Kontra bez przewagi to strata.

**Wskaźniki (U14):**
- ≥ 3 kontry zakończone strzałem w 10 s na mecz,
- ≥ 70% odbiorów kończy się podaniem do partnera (bez straty).

**Schematy:** 4.2a, 4.2b, 4.3. **MP:** #11 ochrona piłki, #17 piłka otwarta, #19 szerokość albo wbiegnięcie.

---

## 5. STAŁE FRAGMENTY GRY (wzorzec M7)

**Organizacja:** stała jednostka SFG w czwartek (MD-2/MD-3), 15 min, rotacja wariantów. Limit gry głową: 6 główek na zawodnika na trening (U14).

### 5.1 SFG w ataku

| SFG | Organizacja | Zachowania |
|---|---|---|
| Rzut rożny (5.1a) | Wariant pokazywany kartką: A – bliższy słupek z przedłużeniem; B – 11. metr do wbiegającego z głębi; C – krótki 2v1 i wycofanie | „Pociąg” przy 11. metrze. Start w tempo ręki wykonawcy. Blok przy BR. 2 na zbiórce. Zabezpieczenie 3+2. |
| Rzut wolny boczny (5.1b) | Dwa tempa wbiegnięcia (pierwsza fala ściąga, druga strzela), wariant po ziemi | Linia atakujących na wysokości obrońców (spalony!). Druga fala 1 s później. |
| Rzut wolny bezpośredni | Mur z 1 naszym zawodnikiem (zasłona), dobitka | Dwóch na dobitkach przy słupkach. |
| Aut w ataku | 3 opcje: ruch „do i od” za plecy, krótko do nogi i zwrot, do tyłu do wsparcia | Wrzucający po wrzucie wchodzi do gry. |

### 5.2 SFG w obronie

| SFG | Organizacja | Zachowania |
|---|---|---|
| Rzut rożny (5.2a) | 4 w strefie (bliższy słupek, 5. metr środek, dalszy, 11. metr) + 3 kryjących + 1 na zbiórce + 2 do kontry | Strefowi atakują piłkę w swojej strefie. Kryjący: kontakt i pozycja „widzę piłkę i rywala”. Oś bramki decyduje o kierunku wybicia. Po wybiciu wyjście całą linią. |
| Rzut wolny boczny (5.2b) | Linia 4–5 na 16. metrze, mur 1–2, lider linii | Na podniesienie ręki wykonawcy 2 kroki w tył, na podanie atak piłki do przodu. |
| Aut w obronie | Krycie najbliższych opcji, zamknięcie podania wzdłuż linii | Najbliższy blokuje wrzucającego po wrzucie. |

**Wskaźniki (U14):** ≥ 25% goli ze SFG w rundzie; ≤ 1 gol stracony po SFG na 4 mecze.

---

## 6. PLAN B: BLOK I KONTRA (M3)

**Kiedy:**
- rywal wyraźnie mocniejszy,
- prowadzimy w końcówce,
- wyraźne zmęczenie zespołu.

**Struktura:** 4-4-1-1 blok średni lub niski.
- 10 za 9 w cieniu pivota rywala.
- Skrzydłowy po słabej stronie zostaje wyżej na kontrę (asymetria).

**Zachowania:**
- odbiór w środku → kontra w 3–4 podaniach,
- 10 jako łącznik, skrzydłowi w głąb po skosie,
- 6, 4 i 5 zostają za akcją.

**Hasło dla drużyny:** „Plan B!”. Zmiana na sygnał trenera, ćwiczona raz w miesiącu w grze fazowej.

---

## 7. KARTY POZYCJI

Każdy zawodnik w U14 poznaje min. 2 pozycje.

### 1 · Bramkarz
- **Otwarcie:** trzeci ŚO, pauza, gra w kierunku presji. Długo tylko przy kryciu 1:1.
- **Budowanie / tworzenie szans:** opcja do tyłu dla trójki, przy ataku na niski blok wysoko (libero).
- **A/O:** przechwyt długiej piłki za linię.
- **Obrona:** komunikacja z linią, wyjścia do dośrodkowań w polu bramkowym.
- **O/A:** szybkie wznowienie ręką lub nogą do wolnego (6, boczny, skrzydłowy).
- **SFG:** ustawienie muru, organizacja strefy przy rożnym.

### 4 · LŚO / 5 · PŚO
- **Otwarcie:** szeroko, przyjęcie bokiem, pauza, podanie obok pressującego.
- **Budowanie:** trójka z LO, wejście z piłką w wolne, podanie do kieszeni. 5 zabezpiecza prawy kanał przy wysokim PO.
- **Tworzenie szans:** zabezpieczenie wysoko, przerzut do dalszego wahadła.
- **A/O:** krycie napastnika przed stratą, wyjście do przodu przy piłce pod presją.
- **Obrona:** krycie napastnika, przekazywanie, linia razem, blokowanie strzałów.
- **O/A:** pierwsze podanie do przodu po odbiorze w niskim bloku.
- **SFG:** strefa w polu bramkowym przy rożnym. W ataku cel dośrodkowania (limit główek).

### 3 · Lewy obrońca
- **Otwarcie:** szeroko na wysokości pivotów (pudełko 2-4-2-2).
- **Budowanie:** schodzi do trójki z ŚO, wejście z piłką, podanie do 10 lub 11. Wariant 2-3-5: do linii pomocy obok 6.
- **Tworzenie szans:** w trójce zabezpieczenia.
- **A/O:** już z tyłu, przesuwa się do lewego kanału.
- **Obrona:** na skrzydłowego rywala, zawęża po słabej stronie, pułapka przy linii ze skrzydłowym.
- **O/A:** podanie do 11 w przestrzeń.

### 2 · Prawy obrońca
- **Otwarcie:** szeroko, opcja gry po obwodzie.
- **Budowanie:** wahadło: szeroko, wysoko. Przyjęcie w biegu przy zmianie strony.
- **Tworzenie szans:** naddanie za 7, dośrodkowanie po ziemi, wycofanie, dalszy słupek przy akcji z lewej.
- **A/O:** najdłuższy powrót: sprint za linię piłki, 5 i 8 go asekurują.
- **Obrona:** na skrzydłowego rywala, pułapka przy linii z 7.
- **O/A:** sprint w wolne po prawej.

### 6 · Defensywny pomocnik
- **Otwarcie:** w pudełku, schodzi do piłki, przyjęcie na półobrocie, S-kombinacja.
- **Budowanie:** zawsze pod piłką, rytm (pauza, przynęta, pion), zmiana strony.
- **Tworzenie szans:** stały punkt za akcją, przeniesienie gry.
- **A/O:** pierwszy w kontrpressingu w środku, przechwyt podania do przodu.
- **Obrona:** strefa 14, doskok + asekuracja z 8, drugie piłki.
- **O/A:** wyjście spod presji po odbiorze w niskim bloku.
- **SFG:** zbiórka przy rożnym w ataku, 11. metr w obronie.

### 8 · Środkowy pomocnik
- **Otwarcie:** wyżej niż 6, przyjęcie za plecami pressującego.
- **Budowanie:** drugi pivot, schodkowanie, podanie pionowe do kieszeni.
- **Tworzenie szans:** strefa 14, wbiegnięcie z głębi na 11. metr. W 3-1-6 dołącza do przodu.
- **A/O:** zamyka podania do przodu, przy wysokim PO zamyka prawą półprzestrzeń.
- **Obrona:** na pivota rywala w pressingu wysokim, doskok + asekuracja z 6.
- **O/A:** dobiega na 11. metr w kontrze.

### 10 · Ofensywny pomocnik
- **Otwarcie:** w środku z 9 (klepsydra), zgranie na 1 kontakt.
- **Budowanie:** lewa kieszeń, bokiem, ruch „do i od piłki”, obrót do przodu.
- **Tworzenie szans:** podanie prostopadłe, corta luz, wbiegnięcie w pole karne w drugim tempie.
- **A/O:** zamyka podania w poprzek rywala.
- **Obrona:** obok 9 w 4-4-2, cień pivota rywala. W bloku niskim wchodzi do linii pomocy.
- **O/A:** łącznik kontry.

### 7 · Prawy skrzydłowy
- **Otwarcie:** wysoko i szeroko.
- **Budowanie:** prawa kieszeń (gdy PO szeroko).
- **Tworzenie szans:** drybling do środka, strzał lub podanie prostopadłe, podminięcie, dalszy słupek przy akcji z lewej.
- **A/O:** wraca na pozycję prawego pomocnika.
- **Obrona:** doskok do bocznego obrońcy rywala na sygnał, w pressingu wysokim na bocznego.
- **O/A:** sprint w głąb po skosie.

### 11 · Lewy skrzydłowy
- **Otwarcie:** wysoko i szeroko, przypina bocznego obrońcę rywala.
- **Budowanie:** szeroko po lewej (wahadło, gdy LO jest w trójce). W wariancie B wchodzi do lewej kieszeni.
- **Tworzenie szans:** 1v1 przy linii, dośrodkowanie po ziemi lub wycofanie, wbiegnięcie za plecy bocznego, dalszy słupek przy akcji z prawej.
- **A/O:** wraca na lewą stronę linii pomocy.
- **Obrona:** doskok do bocznego rywala, po słabej stronie zawęża.
- **O/A:** sprint w wolne po lewej.

### 9 · Napastnik
- **Otwarcie:** przypina ŚO rywala lub schodzi do zgrania. Cel długiego podania przy kryciu 1:1.
- **Budowanie:** głębia, ściana, fałszywa 9 (zejście wyciąga ŚO).
- **Tworzenie szans:** „góra–dół–za linię”, obrót po zgraniu i wbiegnięcie, bliższy słupek.
- **A/O:** zamyka podanie do tyłu rywala.
- **Obrona:** bieg łukiem i cień podania do BR, kierowanie do boku. W bloku niskim zostaje wyżej.
- **O/A:** trzyma piłkę (ochrona ramieniem i biodrem), zgrywa, wbiega w pole karne.

---

## 8. „Wojna systemów”: jak gramy przeciw różnym ustawieniom

| Rywal | Nasze otwarcie i budowanie | Gdzie jest wolny zawodnik | Nasz pressing |
|---|---|---|---|
| 4-4-2 (2 napastników) | BR + 3 (LO do trójki) → 3v2. Pivoci za napastnikami. | 6 lub 8 za linią napastników; kieszenie za dwoma środkowymi pomocnikami rywala | 4-4-2 lustrzane, każdy ma swojego |
| 4-3-3 / 4-2-3-1 (1 napastnik) | 2 ŚO (2v1), LO do linii pomocy (2-3-5) | Skrajny ŚO z piłką (wejście w wolne); boczny | 9 i 10 na ŚO, 8 na 6 rywala; pomocnik najdalej od piłki w cieniu |
| 3-5-2 / 5-3-2 | BR + 3 vs 2 napastników; skrzydłowi przypinają wahadła rywala | Półprzestrzenie obok trzech środkowych pomocników rywala; szerokość przy wahadłach | 9 + 10 + skrzydłowy na trzech ŚO rywala, boczny na wahadło |
| Krycie 1:1 całe boisko | 1.1d: długie podanie BR lub ŚO na 9 i zbiórka; 4v4 z przodu | Przestrzeń za linią obrony rywala | — |
| Niski blok 5-4-1 | 2-3-5 / 3-1-6, przechylenie, zmiana strony | Półprzestrzenie przy wahadłach rywala, 11. metr | Kontrpressing 5 s po stracie |

---

## 9. Komendy boiskowe (wspólny język)

| Komenda | Znaczenie |
|---|---|
| „Czas!” | Masz czas – przyjmij, podnieś głowę, możesz pauzować. |
| „Plecy!” | Presja za tobą – graj na 1 kontakt lub osłoń piłkę. |
| „Trzeci!” | Szukaj trzeciego zawodnika (zgraj, trzeci wbiega). |
| „Kieszeń!” | Zawodnik wolny między liniami – graj do niego. |
| „Przynęta!” | Podanie do tyłu, żeby wyciągnąć pressing. |
| „Zmiana!” | Zmień stronę – środek zamknięty. |
| „5 sekund!” | Strata – kontrpressing teraz. |
| „Blok!” | Cofamy się do 4-4-2. |
| „Cień!” | Zamknij podanie do pivota (ustaw się w linii). |
| „Bok!” | Kierujemy grę do linii bocznej. |
| „Wyjście!” / „Stop!” | Linia obrony do przodu / linia stoi. |
| „Mam!” / „Twój!” | Przejmuję krycie / przekazuję krycie. |
| „Plan B!” | Przechodzimy do bloku 4-4-1-1 i kontry. |

---

## 10. Wskaźniki modelu (analiza meczu U14)

| Moment | Wskaźnik | Cel (do kalibracji po 4 meczach) |
|---|---|---|
| Otwarcie | % akcji od BR przekraczających połowę bez wybicia | ≥ 50% |
| Budowanie | Przyjęcia w kieszeni (na połowę) | ≥ 8 |
| Tworzenie szans | Wejścia w pole karne (na połowę) | ≥ 6 |
| Finalizacja | % strzałów z pola karnego / celnych | ≥ 60% / ≥ 40% |
| A/O | Odbiory w 5 s po stracie (na połowę) | ≥ 4 |
| A/O | Strzały rywala po kontrze (na mecz) | ≤ 2 |
| Obrona | Odbiory w strefie wysokiej (na połowę) | ≥ 3 |
| Obrona | Podania rywala do strefy 14 (na połowę) | ≤ 4 |
| O/A | Kontry ze strzałem w 10 s (na mecz) | ≥ 3 |
| SFG | Gole ze SFG w rundzie | ≥ 25% wszystkich |

---

## 11. Progresja nauczania w U14 (runda jesienna 2026)

Model wprowadzamy fazami, zgodnie z [`PLAN_12.10-20.12.2026.md`](PLAN_12.10-20.12.2026.md). W tygodniu jedna faza i jej lustro, w czwartek przejście.

| Tydzień | Faza tygodnia ↔ lustro | Subfazy modelu |
|---|---|---|
| T2 13–15.10 | Tworzenie szans ↔ blok niski | 1.3, 3.3, 3.4 · czw 2.2 / 4.1 |
| T3 19–22.10 | Otwarcie ↔ pressing wysoki | 1.1, 3.1 · czw 2.1 |
| T4 26–29.10 | Budowanie ↔ blok średni | 1.2, 3.2 · czw 4.2 |
| T5 2–5.11 | Blok średni + pressing 1:1 ↔ budowanie | 3.1, 3.2 · czw 4.1 |
| T6 9–12.11 | Przejścia | 2.1–2.4, 4.1–4.3 |
| T7 16–19.11 | Tworzenie szans przez boki ↔ blok niski | 1.3 (przechylenie, 1v1), 3.4 |
| T8 23–26.11 | Finalizacja ↔ obrona pola karnego + SFG | 1.4, 3.4, 5 |
| T9 30.11–3.12 | Blok niski ↔ atak na blok niski | 3.3, 3.4, 4.2 |

**Adaptacje U14 (faza dojrzewania):**
- **Rotacja pozycji:** wszyscy poznają role pivotów i „dziesiątek”.
- **Jeden wariant naraz:** najpierw LO do trójki, potem wariant B (6 między ŚO).
- **Pressing wysoki** w krótkich okresach meczu, kontrola sprintów i hamowań u zawodników w okresie szybkiego wzrostu.
- **Limit główek** przy SFG.
- **Najpierw zasada, potem swoboda:** stopklatka i ukierunkowanie, potem więcej autonomii (np. seria bez trenera, drużyna sama ustala hasło).

---

## 12. Odnośniki

- **Schematy w aplikacji (zakładka Taktyka):** plik `import/MODEL_GRY_TAKTYKA_U14.json` – 35 schematów (83 klatki), numerowanych jak subfazy w tym dokumencie (1.1a–6). Fazy i subfazy w aplikacji: Atak (Otwarcie, Budowanie, Tworzenie szans, Finalizacja), A/O (Zabezpieczenie, Kontrpressing, Powrót do bloku), Obrona (Pressing wysoki, Blok średni, Blok niski, Pole karne), O/A (Kontra, Utrzymanie), SFG (Atak, Obrona), Plan B.
- **Modele źródłowe:** [`modele_1-4-2-3-1.md`](modele_1-4-2-3-1.md) – M1, M2 (baza), M3 (plan B), M4, M5, M6, M7.
- **Książki:** K. Gerega, *Roberto De Zerbi – The Master of Timing*; *Xabi Alonso – Positionism and Relationism* (w repozytorium).
- **Mikrotaktyczny Poniedziałek** #01–#21 (J. Wichłacz, Ł. Bagsik, Qualitas Coaching).
- **Arkusz** `Umiejetnosci_pilkarskie_periodyzacja_U6-U19.xlsx` – priorytety U14–U15 (otwarcie gry D★, umiejętności grupowe D, przyjęcie kierunkowe i strzał A★).
