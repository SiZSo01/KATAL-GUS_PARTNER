# DTA Virtual Space – agent működési szabályok

## Küldetés

Egy gyors, hozzáférhető, filmes webes térélményt építünk. Nem játékot, VR-alkalmazást vagy szabadon bejárható 3D motort készítünk.

## Források fontossági sorrendje

1. `docs/PROJECT_CHARTER.hu.md`
2. `docs/ARCHITECTURE.hu.md`
3. `docs/ROADMAP.hu.md`
4. `docs/DECISIONS.md`
5. a működő kód és tesztek

Ellentmondás esetén az ügynök ne találjon ki új irányt: jelezze a projektvezetőnek, és kerüljön döntés a naplóba.

## Kötelező munkamód

- Egy feladatnak egyértelmű tulajdonosa és elfogadási feltétele legyen.
- Először a whitebox viselkedést kell bizonyítani, csak utána készül végleges asset.
- Új függőség csak dokumentált indokkal kerülhet a projektbe.
- Minden térhez tartozik szemantikus HTML-tartalom és közvetlen URL.
- Az animáció nem lehet a megértés vagy a navigáció egyetlen módja.
- A `prefers-reduced-motion` viselkedést minden mozgásnál figyelembe kell venni.
- A változtatás nem ronthatja a billentyűzetes és mobilos használatot.
- Fogászati szakmai állítás csak jóváhagyási jelöléssel válhat éles tartalommá.
- AI-chat, regisztráció, analitika vagy személyesadat-kezelés külön adatvédelmi kapu nélkül nem kerülhet éles buildbe.

## Felelősségi területek

- **Projektvezető/architekt:** scope, prioritás, integráció, döntési napló.
- **Experience/UX:** térkapcsolatok, kameraút, portálviselkedés, mobil és reduced-motion élmény.
- **Frontend:** jelenetvezérlő, URL-állapot, komponensek, betöltés és hibakezelés.
- **Visual/asset:** perspektíva, fény, kompozíció, export és fájlméretkeret.
- **QA:** funkcionális, vizuális, hozzáférhetőségi és teljesítménykapuk.
- **Tartalom:** célcsoport, szöveg, fogászati szakmai jóváhagyás.

## Definition of Done

Egy feladat csak akkor kész, ha:

1. teljesíti a rögzített elfogadási feltételeket;
2. nincs ismert kritikus billentyűzetes vagy mobilos hiba;
3. a releváns ellenőrzések lefutottak;
4. az új döntés bekerült a dokumentációba;
5. az ismert korlátok láthatóan dokumentáltak.

