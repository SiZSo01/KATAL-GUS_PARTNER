# Guidance + Saját rendelők – réteges assetbontási terv

## Állapot

**Jóváhagyott concept irány:** 2026. július 10.

Kiinduló képek:

- `assets/concepts/guidance/guidance-concept-still-v4.png`
- `assets/concepts/clinics/clinics-concept-still-v1.png`

Ezek még nem végleges webassetek, hanem jóváhagyott vizuális irányképek. A következő cél az, hogy a concept képek alapján olyan réteges assetrendszer készüljön, amely gyors, reszponzív, akadálymentes és portál-logikában következetes.

## Vezérelv

A portál nem képkeret és nem banner.

A portálban annak a világnak a részlete látszik, amely áthaladás után kiteljesedik.

Ez most konkrétan:

- HERO középső portál → Guidance / Miben segíthetünk? világ;
- Guidance hátsó portál → Saját rendelők világ;
- Saját rendelők belépés után → a portálban látott meleg rendelői előszoba teljes térként nyílik ki.

## Közös technikai szabályok

- A vizuál nem lehet a navigáció egyetlen módja.
- Minden belépési pont valódi linkként és billentyűzettel is elérhető marad.
- A `prefers-reduced-motion` esetén a portálmozgás egyszerű áttűnésre vagy azonnali állapotváltásra csökken.
- A concept képekből nem kerül be olvasható szöveg, logó, űrlap, diagnózis vagy kezelési ígéret.
- AI-chat, kereső, regiszter, időpontfoglalás és személyesadat-kezelés továbbra is csak adatvédelmi, jogi és szakmai jóváhagyás után lehet működő funkció.
- A fájlméret első körben fontosabb, mint a tökéletes részletgazdagság: a térélménynek gyorsan kell betöltenie.

## Guidance tér – javasolt rétegek

| Kód | Réteg | Funkció | Első exportjavaslat | Megjegyzés |
|---|---|---|---|---|
| G-00 | háttér/depth | falak, padló, mennyezeti fény, általános térmélység | AVIF/WebP, 2560 × 1440 | ember, konzol és portálbelső nélkül |
| G-01L | bal tudástárfal | információs központ / tudástár érzet | WebP alpha vagy háttérbe sütve | ha túl nehéz, G-00 része lehet |
| G-01R | jobb tudástárfal | szimmetrikus, de nem teljesen tükrözött tudástárérzet | WebP alpha vagy háttérbe sütve | nem menü, nem olvasható UI |
| G-02 | hátsó portálkeret | a Saját rendelők felé vezető kapu építészeti kerete | PNG/WebP alpha, kb. 1200 × 1000 | külön fényperemmel |
| G-03 | hátsó portálbelső | a Saját rendelők céljelenet sűrített előképe | WebP, kb. 1200 × 900 | `clinics-concept-still-v1` alapján cropolva |
| G-04 | házigazda | mosolygó információs házigazda | WebP/PNG alpha, kb. 1100 × 1600 | nem orvos, nem diagnosztizál |
| G-05 | konzol | központi információs pult / adatmentes irányválasztó | WebP/PNG alpha, kb. 800 × 900 | ne takarja a testarányt |
| G-06 | fényrétegek | fogadókör, portálglow, tudástárfény, finom részecskék | PNG/WebP alpha | animálható, de statikusan is érthető |
| G-07 | interakciós állapotok | hover/focus/fogadási reakciók | CSS + kis alpha assetek | csökkentett mozgásnál kikapcsolható |

### Guidance mobil egyszerűsítés

Mobilon nem kell minden réteg külön maradjon. A javasolt minimum:

1. egy könnyített háttér/depth;
2. házigazda + konzol együtt vagy két rétegben;
3. hátsó portálbelső kisebb, kevésbé részletes előképpel;
4. fényrétegek visszafogva.

A két oldalsó tudástárfal mobilon inkább jelzés legyen, ne széles térfal: néhány függőleges fényindex, nem teljes polcrendszer.

## Saját rendelők tér – javasolt rétegek

| Kód | Réteg | Funkció | Első exportjavaslat | Megjegyzés |
|---|---|---|---|---|
| C-00 | rendelői előszoba háttér | meleg recepciós / rendelői térmélység | AVIF/WebP, 2560 × 1440 | a teljes célvilág alapja |
| C-01 | kezelőtér-bepillantás | bal oldali fogorvosi berendezés közérthető jelzése | WebP vagy C-00 része | nincs páciens, nincs beavatkozás |
| C-02 | váró/konzultációs zóna | emberi, megnyugtató oldal | WebP vagy C-00 része | komfort, bizalom, nem reklám |
| C-03 | orientációs sziget | rendelői előszoba központi pontja | WebP/PNG alpha | nem űrlap, nem foglalómodul |
| C-04 | időpontfoglalási kapu | a későbbi foglalási út sejtése | fényréteg / CSS | adatmező nélkül |
| C-05 | belépési portálperem | visszautalás arra, hogy portálon érkeztünk | PNG/WebP alpha vagy háttérbe sütve | csak ha vizuálisan szükséges |
| C-06 | meleg fényrétegek | arany padlófény, térkapuk, lágy irányfény | PNG/WebP alpha | animáció nélkül is működjön |

### Saját rendelők mobil egyszerűsítés

Mobilon a fókusz:

1. középső orientációs sziget;
2. bal oldali kezelőtér csak finom ikonikus mélységként;
3. jobb oldali váró/komfortérzet;
4. egyértelmű, de nem működő időpontfoglalási kapu.

## Portálbelsők crop-logikája

### Guidance hátsó portál

Forrás: `assets/concepts/clinics/clinics-concept-still-v1.png`

Javasolt portálbelső:

- a Saját rendelők kép középső-bal oldali zónája;
- legyen benne felismerhető kezelőszék/lámpa vagy rendelői előszoba;
- ne legyen túl sok részlet, mert a portálban csak ígéretet ad;
- meleg arany fény maradjon, hogy elkülönüljön a Guidance lila-fehér tudástárhangulatától.

### HERO középső portál

Forrás: `assets/concepts/guidance/guidance-concept-still-v4.png`

Javasolt portálbelső:

- középső házigazda/konzol + hátsó portál ritmusának sűrített előképe;
- az oldalsó tudástárfalak csak jelzésszinten látszanak;
- nem kell túl részletes emberalak, mert a HERO portál kicsi.

## Első megvalósítási sorrend

1. Concept képek optimalizált, ideiglenes webes előnézeti változatai.
2. Guidance hátsó portálbelső crop előkészítése a Saját rendelők v1-ből.
3. HERO középső portálbelső frissítése a Guidance v4 irányhoz.
4. Guidance térben ideiglenes visual-slice háttér / hangulati réteg tesztelése.
5. Saját rendelők térben ideiglenes visual-slice háttér tesztelése.
6. Csak ezek után következzen a valódi, külön exportált rétegek gyártása.

## Elfogadási feltételek az első webes beépítéshez

Az első beépítés akkor tekinthető késznek, ha:

1. a Guidance térben érződik a v4 tudástár/információs központ irány;
2. a Guidance hátsó portáljában felismerhető a Saját rendelők világ előképe;
3. a Saját rendelők tér belépés után ugyanannak a világnak a kiteljesedése;
4. a mobilnézetben nincs vízszintes kilógás;
5. billentyűzettel továbbra is bejárható a HERO → Guidance → Saját rendelők út;
6. csökkentett mozgás mellett az út érthető marad;
7. nincs működő adatbekérés, időpontfoglalás, AI-chat vagy diagnosztikai állítás.

## Nyitott kérdések későbbre

- A házigazda külön karakterasset legyen, vagy az első körben háttérbe sütött ideiglenes visual slice?
- A Guidance tudástárfalak mennyire legyenek „könyvtárszerűek” és mennyire absztraktak?
- A Saját rendelők térben az időpontfoglalási kapu mennyire legyen hangsúlyos anélkül, hogy működő űrlapnak tűnne?
- Kell-e külön esti/nappali fényhangulat, vagy egy nyugodt, prémium alapfény elég az első körben?

