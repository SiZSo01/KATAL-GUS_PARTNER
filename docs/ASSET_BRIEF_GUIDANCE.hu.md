# Guidance visual slice asset-brief

## Cél

Ez a dokumentum a **HERO → Miben segíthetünk? → Saját rendelők** látogatói út első vizuális asset-briefje.

Nem végleges grafikai gyártási csomag, hanem rendezői és gyártási alap: pontosítja, milyen képi elemeket kell majd létrehozni ahhoz, hogy a Guidance tér prémium, nyugodt, emberközpontú virtuális fogadótérként működjön.

## Alapelv

A Guidance tér nem chatbot-oldal, nem ügyfélszolgálati panel és nem diagnosztikai felület.

A látogató egy csendes, bizalomépítő térbe érkezik, ahol:

1. középen emberi jelenlétet sugalló házigazda fogadja;
2. két oldalon tudástár/könyvtár érződik;
3. a konzol halk irányválasztást kínál;
4. hátul sejtelmesen látható a Saját rendelők felé vezető következő portál.

Az egész jelenetnek azt kell sugallnia: **„jó helyen jár, itt segítünk eligazodni, és ha készen áll, tovább tud lépni a rendelői út felé.”**

## Hangulat

- prémium, halk, világos;
- emberi, de nem bizalmaskodó;
- technológiai, de nem hideg;
- fogászati, de nem klinikailag félelmetes;
- eligazító, de nem tolakodó;
- jövőbe mutató, de nem sci-fi labor.

Kerülendő:

- mosolygó reklámstock-kép hatás;
- kabalaszerű vagy túl karakteres avatar;
- orvosi beavatkozást, fájdalmat vagy diagnózist sugalló kép;
- chat-widget, szövegmező, kérdőív vagy adatbekérő felület;
- túl erős lila/neon cyberpunk hangulat;
- zsúfolt tudástár vagy menürendszer.

## Kompozíció

### Desktop főnézet

A nézőpont enyhén belépett állapot: a látogató már nem a HERO előcsarnokban áll, hanem a Guidance tér közepén.

Kompozíciós rend:

```text
hátsó tér / Saját rendelők portál sejtése
             ↓
      házigazda + fogadófény
             ↓
        információs konzol
             ↓
   három halk irányválasztó kapu

bal oldalt tudástárfal          jobb oldalt tudástárfal
```

A hátsó Saját rendelők portál ne legyen domináns CTA. Inkább távoli, melegebb fényű kijárat, amely a történet végét sejteti.

### Mobil főnézet

Mobilon nem a desktop tér kicsinyített változatát kell erőltetni.

Mobil kompozíció:

1. házigazda/fogadófény;
2. konzol és rövid eligazítás;
3. három irányválasztó;
4. Saját rendelők felé vezető jelzés.

A tudástárfalak mobilon lehetnek visszafogottabb oldalfények vagy háttérminták.

## Kötelező asset-elemek

### 1. Központi házigazda

Feladata: emberi jelenlét, nem illusztrált chatbot.

Irány:

- nyugodt, mosolygó női házigazda vagy absztrakt emberi jelenlét;
- prémium rendelői/tanácsadói hangulat;
- teljes alak vagy félalak csak akkor, ha nem válik stockfotóvá;
- finom fényperem, amely a tér részévé teszi;
- arckifejezés: biztonságos, nyitott, nem túlzó.

Nem megengedett:

- orvosi diagnózist imitáló gesztus;
- headsetes ügyfélszolgálatos klisé;
- túl erős AI-robot vagy hologram-karakter;
- túl divatfotós, életmódmagazinos póz.

Lehetséges asset:

- `guidance_host_character.webp`
- opcionális átlátszó változat: `guidance_host_character_alpha.webp`

### 2. Fogadófény és konzol

Feladata: itt „történik” a segítség, de adatbekérés nélkül.

Irány:

- puha, ovális fénygyűrű a házigazda körül;
- konzol inkább információs pult, nem billentyűzetes gép;
- a konzolon legfeljebb absztrakt fényút vagy ikonikus jel;
- ne legyen inputmező, chatbuborék vagy küldés gomb.

Lehetséges asset:

- `guidance_console_base.png`
- `guidance_welcome_light.png`
- `guidance_console_glow.webm` csak későbbi mozgó változatban.

### 3. Tudástárfalak

Feladatuk: a látogató érzi, hogy mögötte rendezett tudásbázis van, de nem olvas apró szöveget.

Irány:

- két oldali, építészeti könyvtár-/tudástárfal;
- üveg, matt világos felület, finom polc- vagy laprétegek;
- nagyon kevés olvasható szöveg, inkább jelrendszer;
- puha lila-fehér fény, kevés DTA-zöld visszacsillanással.

Nem megengedett:

- zsúfolt menürendszer;
- apró, olvashatatlan szakmai szövegfal;
- konkrét kezelési ígéret vagy egészségügyi állítás.

Lehetséges asset:

- `guidance_knowledge_wall_left.webp`
- `guidance_knowledge_wall_right.webp`
- `guidance_knowledge_light_left.png`
- `guidance_knowledge_light_right.png`

### 4. Saját rendelők hátsó portál

Feladata: a Guidance térnek iránya legyen. A látogató érezze, hogy a megszerzett tájékozódás után tovább lehet lépni.

Irány:

- melegebb, bézs/arany fény, mint a Guidance fő lila-fehér fénye;
- távolabbi, nem domináns portál;
- mögötte rendelői előszoba vagy nyugodt recepciós tér sejtése;
- semmilyen működő időpontfoglalási űrlap ne legyen látható.

Lehetséges asset:

- `guidance_clinic_portal_back.webp`
- `guidance_clinic_portal_glow.png`

### 5. Három irányválasztó kapu

Ezek a konzolhoz kapcsolódó, adatmentes navigációs választások.

Szöveges tartalmuk jelenleg:

1. Szeretnék tájékozódni;
2. Megtalálnám a hozzám illő irányt;
3. Továbbmennék a saját rendelők felé.

Képi szabály:

- ne tűnjenek űrlapmezőnek;
- ne legyenek diagnosztikai válaszok;
- inkább térbeli kapuk vagy fényjelölések legyenek;
- a harmadik enyhén melegebb fényt kaphat, mert a Saját rendelők felé vezet.

## Rétegrendszer

Javasolt rétegsorrend:

1. `guidance_background_depth` – hátsó tér, falak, padló, horizont;
2. `guidance_clinic_portal_back` – távoli Saját rendelők kapu;
3. `guidance_knowledge_walls` – bal/jobb tudástárfal;
4. `guidance_host_character` – házigazda;
5. `guidance_console_base` – információs konzol;
6. `guidance_light_passes` – fogadófény, tudástárfények, konzolfény;
7. `guidance_ui_gate_hints` – három irányválasztó fényjel.

A rétegek célja, hogy a későbbi webes implementációban ne egyetlen nagy háttérkép legyen minden, hanem a fény, portál és fókusz külön vezérelhető maradjon.

## Szín- és anyagirány

Fő hang:

- mély, tiszta grafit/kékeszöld alap;
- világos, tejüveg jellegű térfelületek;
- Guidance akcentus: puha lila-fehér;
- DTA-kapcsolat: visszafogott zöld fényrészletek;
- Saját rendelők irány: melegebb bézs/arany fény.

Anyagok:

- matt üveg;
- finom fémkeret;
- selyemfényű világos fal;
- puha padlóreflexió;
- nem rideg orvosi műanyag.

## Exportjavaslat

Első assetkör:

| Asset | Desktop célméret | Mobil célméret | Formátum | Megjegyzés |
|---|---:|---:|---|---|
| Guidance háttér/depth | 2560 × 1440 | 1080 × 1600 | AVIF/WebP | szöveg nélkül |
| Házigazda karakter | 1200 × 1600 | 900 × 1400 | WebP/PNG alpha | külön réteg |
| Tudástárfal bal | 1400 × 1400 | opcionális | WebP | külön réteg |
| Tudástárfal jobb | 1400 × 1400 | opcionális | WebP | külön réteg |
| Hátsó Saját rendelők portál | 1200 × 1200 | 900 × 900 | WebP/PNG alpha | melegebb fény |
| Fényrétegek | 2560 × 1440 | 1080 × 1600 | PNG/WebP alpha | külön vezérelhető |

Méretkeret:

- desktop első körben összesen legfeljebb 2–3 MB;
- mobil első körben összesen legfeljebb 1–1,5 MB;
- mozgó fényréteg csak akkor, ha statikus képpel már jóváhagyott a kompozíció.

## Akadálymentességi és tartalmi határok

- A vizuál nem lehet az egyetlen információhordozó.
- Minden irányválasztónak maradjon valódi linkként elérhető szöveges megfelelője.
- A házigazda nem ad szakmai tanácsot.
- Nincs működő AI, kereső, regiszter, időpontfoglalás vagy személyesadat-kezelés ebben a körben.
- Fogászati állítás csak külön szakmai jóváhagyással kerülhet be.

## Első elfogadási feltételek

Az első Guidance assetkör akkor fogadható el, ha:

1. a látogató első pillantásra érzi a központi fogadópontot;
2. a tér nem tűnik hagyományos weboldalnak vagy chatbot-widgetnek;
3. a tudástár jelenléte érződik, de nem válik menürendszerré;
4. a Saját rendelők felé vezető hátsó portál sejthető, de nem tolakodó;
5. a kompozíció mobilon is egyszerűsíthető;
6. nincs benne adatbekérés, diagnózis, kezelési ígéret vagy éles időpontfoglalás;
7. a HERO középső portálja és a Guidance tér vizuálisan rokon marad.

## Első gyártási feladat

A következő érdemi lépés nem a teljes végleges jelenet, hanem egy **Guidance concept still**:

- 16:9 desktop kompozíció;
- központi házigazda és konzol;
- két oldali tudástárfal;
- hátsó Saját rendelők portál;
- szöveg nélküli, tiszta látvány;
- külön figyelemmel arra, hogy később rétegekre bontható legyen.

Ha ez az állókép irányként jóváhagyható, abból készülhet a réteges assetlista és a mobilváltozat.

### V1–V4 állapot

Az első concept still elkészült:

`assets/concepts/guidance/guidance-concept-still-v1.png`

Az első visszajelzések alapján három célzott korrekciós iteráció is elkészült:

`assets/concepts/guidance/guidance-concept-still-v2.png`

`assets/concepts/guidance/guidance-concept-still-v3.png`

`assets/concepts/guidance/guidance-concept-still-v4.png`

A v2 javította a hátsó portál szimmetriáját és a fogorvosi funkciójelzést, de a pult/házigazda arány még nem volt elég tiszta. A v3-ban a hölgy testarányai érthetőbbek lettek, a konzol nem takarta zavaróan a lábakat, és a hátsó portál mögötti fogorvosi kezelőszék/lámpa közérthetőbbé tette a Saját rendelők irányát. A v4 megtartotta a v3 erősebb arányait, és az oldalsó zónákon finom tudástár/információs központ jelleget vezetett be.

Párhuzamosan elkészült a hátsó portál mögötti **Saját rendelők** céljelenet első külön concept képe is:

`assets/concepts/clinics/clinics-concept-still-v1.png`

Ez azért fontos, mert a Guidance hátsó portálja nem önálló dekoráció: annak a térnek az előképe, amely belépés után kiteljesedik.

Ez még nem végleges asset, hanem jóváhagyási/iterációs alap. A v4 Guidance és a Saját rendelők v1 jóváhagyott assetbontási alap lett.

A réteges bontási terv külön dokumentumban készült el:

`docs/ASSET_BREAKDOWN_GUIDANCE_CLINICS.hu.md`

A következő kivitelezési döntés nem újabb teljes concept kép, hanem az első ideiglenes webes előnézeti beépítés: a Guidance hátsó portálbelsője a Saját rendelők v1 alapján, a HERO középső portálbelsője pedig a Guidance v4 alapján frissülhet.
