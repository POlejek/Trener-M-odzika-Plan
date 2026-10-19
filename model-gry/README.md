# Model gry U14 · 1-4-2-3-1 (De Zerbi + Xabi Alonso)

Model gry klubu dla zespołu U14. Bazą są modele De Zerbiego (prowokowanie pressingu, pudełko, trzeci zawodnik) i Xabiego Alonso (3-2-4-1, relacje, kieszenie). Uzupełniają je:
- cierpliwość z Hiszpanii 2010,
- pojedynki skrzydłowych z Hiszpanii 2024–26,
- SFG i drugie piłki z Arsenalu,
- plan B (blok 4-4-1-1 i kontra) od Mourinho.

## Dokumenty

| Plik | Co zawiera |
|---|---|
| [`Rocznik 2013 – model gry i program szkolenia U14–U15.md`](Rocznik%202013%20%E2%80%93%20model%20gry%20i%20program%20szkolenia%20U14%E2%80%93U15.md) | **Program na dwa sezony (2026/27–2027/28):** model 1-4-2-3-1, zadania na pozycjach, cykl 4-tygodniowy, tydzień T1–T4, przykładowe ćwiczenia, progresja, motoryka (BetterWay), rozwój indywidualny |
| [`MODEL_GRY_U14_1-4-2-3-1.md`](MODEL_GRY_U14_1-4-2-3-1.md) | **Pełny model gry:** fazy, subfazy, zasady, zachowania pozycji, sygnały, błędy, wskaźniki, karty pozycji, komendy, „wojna systemów” |
| [`modele_1-4-2-3-1.md`](modele_1-4-2-3-1.md) | Siedem modeli źródłowych (M1–M7) i rekomendacja |
| [`PLAN_12.10-20.12.2026.md`](PLAN_12.10-20.12.2026.md) | Plan rundy: kalendarz meczów, mikrocykl, faza i 4 umiejętności każdego tygodnia |

## Pliki do aplikacji Model Gry (`import/`)

| Plik | Zawartość | Jak wgrać (Dane → Import) |
|---|---|---|
| `MODEL_GRY_2013_ROK_fazy_subfazy_subsubfazy.json` | Zakładka **Taktyka** – model z programu „Rocznik 2013” na cały rok: 75 schematów (149 klatek). SubSubfaza = numer w nazwie (np. „Atak 1.2”); przy SubSubfazach schematy pośrednie do treningu E1 (wstawka techniczna), E2 (wstawka mniej złożona), E3 (gra modelowa) z tygodniem cyklu; warianty przeciw 1-4-3-3, 1-4-4-2, 1-3-5-2; faza „Rywale” | Taktyka: **Zastąp** (tylko ten model) albo **Dodaj** |
| `TYDZ2_26-29.10_v3_motoryka_na_poczatku.json` | Tydzień 2 cyklu (26–29.10): Pon dla asystenta, Wt i Śr (+ wariant vs 4-3-3) z zasadą: wstawka motoryczna tylko na początku, trening kończy się dłuższą grą | Konspekt → Importuj |
| `MODEL_GRY_TAKTYKA_U14.json` | Zakładka **Taktyka**: 35 schematów (83 klatki) numerowanych jak subfazy w modelu (1.1a–6), z opisem w „Komentarzach” | Taktyka: **Zastąp** (usuwa stare schematy i stary układ faz) |
| `T02_13-15.10_tworzenie_szans_vs_niski_blok.json` | Tydzień T2 (Wt–Czw 13–15.10): 3 konspekty i 13 ćwiczeń | Ćwiczenia i Konspekty: **Dodaj** |
| `3_konspekty_tydzien_7-9.10.json` | Archiwum: tydzień 7–9.10 (konspekty „BW”) | opcjonalnie, Dodaj |

**Fazy i subfazy w Taktyce po imporcie:**
- Atak: Otwarcie · Budowanie · Tworzenie szans · Finalizacja
- A/O: Zabezpieczenie · Kontrpressing · Powrót do bloku
- Obrona: Pressing wysoki · Blok średni · Blok niski · Pole karne
- O/A: Kontra · Utrzymanie
- SFG: Atak · Obrona
- Plan B

Ćwiczenia mają przypisane te same subfazy, więc w Taktyce widać, które ćwiczenia trenują daną subfazę.

## Schematy w zakładce Taktyka

| Faza – subfaza | Schematy |
|---|---|
| Atak – Otwarcie | 1.1a Pudełko 2-4-2-2 (pauza, gra w kierunku presji, S-kombinacja) · 1.1b Zasada +1 (LO do trójki) · 1.1c Klepsydra i szerokie romby · 1.1d Krycie 1:1 – gra bezpośrednia i 4v4 |
| Atak – Budowanie | 1.2a Struktura 3-2-4-1 · 1.2b Przynęta → „góra–dół–przez” · 1.2c Wejście z piłką ŚO · 1.2d Zmiana strony do wahadła · 1.2e Wariant B: 6 między ŚO · 1.2f Fałszywa 9 |
| Atak – Tworzenie szans | 1.3a 3-2-5 → 2-3-2 / 3-1-6 · 1.3b „Góra–dół–za linię” z 9 · 1.3c Przechylenie + escadinhas i tabele · 1.3d Corta luz · 1.3e Izolacja 1v1 i wycofanie · 1.3f Kanał ŚO–boczny: podminięcie |
| Atak – Finalizacja | 1.4a 5 stref w polu karnym · 1.4b Korytarz niepewności i wycofanie |
| A/O | 2.1 Zabezpieczenie 3+2 · 2.2 Kontrpressing 5 s · 2.4 Powrót do 4-4-2 (asymetria) |
| Obrona | 3.1 Pressing wysoki (+1 z tyłu) · 3.2a Blok średni 4-4-2 · 3.2b Pułapka przy linii · 3.2c Obrona przed zmianą strony · 3.3 Blok niski 4-5-1 · 3.4 Pole karne: oś bramki |
| O/A | 4.2a Kontra po odbiorze w środku · 4.2b Odbiór wysoko · 4.3 Utrzymanie |
| SFG | 5.1a Rożny w ataku (A/B/C) · 5.1b Wolny boczny w ataku · 5.2a Rożny w obronie · 5.2b Wolny boczny w obronie |
| Plan B | 6 Blok 4-4-1-1 i kontra |

## Tydzień T2 (Wt–Czw 13–15.10, mecz nd 18.10)

**Faza:** 1.3 tworzenie szans ↔ lustro: 3.3 blok niski i 3.4 pole karne. **Czwartek:** 2.1–2.2 ↔ 4.1–4.2.

**Umiejętności tygodnia:**
- podanie zdobywające (atak),
- krycie wbiegającego (obrona),
- gra na trzeciego (grupowa),
- 3-2-5 ↔ blok niski 4-5-1 (zespołowa).

Każde ćwiczenie ma wskazówki przeciwstawne: 🔵 atak, 🔴 obrona.

| Dzień | 1. BetterWay | 2. Techniczne | 3. Ćwiczenie główne | 4. Gra |
|---|---|---|---|---|
| Wt 13.10 (MD-5) – grupowa | siła + plyometria wolna | rondo przeniesienia 4+1v2 „góra–dół–przez” | 4v4+2: do strefy wykończenia tylko po „góra–dół–przez” | BR+7v7+BR: strefa wykończenia po „góra–dół–przez” |
| Śr 14.10 (MD-4) – zespołowa | mechanika biegu + RSA | podanie zdobywające ↔ krycie wbiegającego 3v2 + BR | 8 v 8+BR: 3-5 ↔ blok 4-4 | faza gry 10 v 9+BR: 2-3-5 ↔ blok niski |
| Czw 15.10 (MD-3) – przejście | szybkość + plyometria szybka | rondo 5v2: kontrpressing ↔ wyjście na mini-bramkę | atak 6v4+BR → strata → kontrpressing ↔ kontra | rożny w ataku ↔ w obronie + BR+8v8+BR z wahadłami |

**Rozgrzewki BetterWay:** mobilizacja → aktywacja → wzorce ruchu i mechanika → potencjacja. Każde ćwiczenie ma opis: pozycja wyjściowa, wykonanie, dawka, na co patrzeć. Akcenty pochodzą z arkusza `Umiejetnosci_pilkarskie_periodyzacja_U6-U19.xlsx` (zakładka „Motoryka (okna)”, U14–U15).

## Generator

Pliki importu tworzy skrypt `generator/build.mjs` (Node 18+): `node model-gry/generator/build.mjs`. Skrypt sprawdza, czy klucze faz w ćwiczeniach i konspektach pasują do faz modelu.

| Plik | Co opisuje |
|---|---|
| `taktyka.mjs` | Schematy Taktyki |
| `weeks/tNN.mjs` | Tydzień treningowy |
| `lib.mjs` | Wspólne narzędzia: rysunki ćwiczeń, konspekty, fazy modelu |
| `warmups.mjs` | Rozgrzewki BetterWay |
| `sfg.mjs` | Stałe fragmenty |

Szkic tygodnia T3 leży w `generator/szkice/`.
