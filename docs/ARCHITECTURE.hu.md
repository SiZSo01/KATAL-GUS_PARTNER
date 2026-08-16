# Élmény- és műszaki architektúra

## Választott megközelítés

**Hibrid 2.5D filmes tér.** A fő élményt perspektivikus képrétegek, CSS-transzformációk, maszkolt portálok és rendezett kameramozgás adják. WebGL vagy valódi 3D csak izolált modulban jelenhet meg, ha egy későbbi tárgyinterakció ezt ténylegesen indokolja.

Ez a megközelítés megtartja a művészeti kontrollt, miközben mobilon és gyengébb eszközön is kiszámítható.

## Technikai alap

- Next.js App Router;
- React és TypeScript;
- egyedi CSS, tér- és mozgásváltozókkal;
- tipizált reducer a jelenetátmenetekhez;
- scene manifest a tartalom és az assetek leírására;
- animációs idővonal-könyvtár csak akkor, amikor a whitebox kamerarendszere már bizonyította az igényt;
- később Playwright-alapú böngészőtesztek és automatizált hozzáférhetőségi ellenőrzés.

## Jelenetállapot

```text
idle
  → target-preload
  → portal-transition
  → scene-swap
  → reveal
  → idle
```

Hiba vagy megszakítás esetén a rendszer olvasható, statikus tartalmi nézetre tér vissza.

## Scene manifest

Minden jelenet deklaratívan tartalmazza:

- azonosító és URL;
- oldal- és keresőmetaadatok;
- desktop és mobil vizuális rétegek;
- portálok és céljelenetek;
- tartalmi állomások;
- kamera- és animációs jelek;
- betöltési prioritások;
- hozzáférhető szöveges megfelelő;
- fallback állapot.

## Navigáció

- A világ egyetlen folyamatos kliensélményként viselkedik.
- Minden tér közvetlenül megnyitható URL-en.
- A böngésző vissza és előre gombja a jelenetelőzményt követi.
- A HERO-ban nincs automatikus beléptetés: a portál tudatos választás.
- A portál valódi link vagy gomb, nem kizárólag grafikai kattintási felület.

## Kamera és interakció

- Nincs WASD és szabad kamera.
- A HERO-ban a pointer csak finom parallaxot és fényreakciót ad.
- A tartalmi terekben a natív függőleges görgetés rendezett kameraállomások között halad.
- Egy kameraállomás egy fő üzenetet hordoz.
- Hang csak kifejezett felhasználói indítással szólhat.
- A későbbi AI-házigazda nem globális, oldalsó chatbot-widgetként jelenik meg, hanem a Miben segíthetünk? tér központi információs konzoljához kötött interakcióként.

## Mobil és csökkentett mozgás

- Külön álló kompozíció, nem az asztali tér egyszerű lekicsinyítése.
- Natív görgetés és legalább 44 × 44 px interakciós célok.
- Pointer-parallax nélkül is teljes élmény.
- `prefers-reduced-motion` esetén rövid áttűnés váltja a kamerarepülést.
- Gyenge eszközön vagy adatspóroláskor statikus képi rétegek használhatók.

## Asset pipeline

1. térváz és fix kamera;
2. whitebox jóváhagyás;
3. vizuális irány és asset-biblia;
4. perspektivikus háttér- és mélységi rétegek;
5. portálmaszkok és opcionális rövid videók;
6. mobilváltozatok;
7. tömörítés, méretellenőrzés és verziózás.

Tervezett formátumok: AVIF/WebP képek, WebM/MP4 rövid mozgások, szükség esetén tömörített GLB és KTX2.

## Teljesítménykeret

M0 célértékek, később valós eszközön mérve:

- LCP legfeljebb 2,5 s;
- INP legfeljebb 200 ms;
- CLS legfeljebb 0,1;
- induló JavaScript legfeljebb 220 KB gzip;
- HERO első képernyő legfeljebb 1 MB mobilon és 2 MB desktopon;
- következő jelenet előtöltése legfeljebb 1 MB mobilon és 3 MB desktopon;
- 60 fps cél, 30 fps alatti tartós érték esetén automatikus egyszerűsítés.

## Tartalmi és adatvédelmi határ

Az M0/M1 build nem kér egészségügyi vagy személyes adatot. Az AI-házigazda, regiszter, analitika és személyre szabás külön adatfolyam-tervet, adatminimalizálást, tájékoztatást és jogi ellenőrzést igényel.

Az időpontfoglalás ugyanezen kapu alá tartozik. A Saját rendelők térben megjelenhet foglalási útvonal-whitebox vagy előszoba, de működő űrlap, páciensadat-kérés, külső foglalási integráció vagy egészségügyi kontextusú adatküldés csak külön adatvédelmi, jogi és szakmai jóváhagyás után kerülhet be.
