# Projektalap

## Vízió

A látogató nem oldalakat nyit meg, hanem egy összefüggő DTA-világba érkezik. A terek portálokon keresztül kapcsolódnak; az átlépéskor a portálban látott következő világ folyamatosan teljes jelenetté válik.

## Alkotói alapállás

Nem a régi honlapot fejlesztjük tovább. A régi oldal csak azért fontos, mert ezt a teljesen új DTA Virtual Space fogja leváltani.

A projekt kreatív alapja nem korábbi oldalstruktúra, nem meglévő menürendszer és nem régi tartalom újrarendezése, hanem egy új, saját digitális világ megalkotása. A DTA szakmai múltja, tapasztalata és értékrendje jelen van a háttérben, de a látogató már egy mai, téralapú, nyugodt és prémium élménybe érkezik.

Az alkotói cél:

- forradalmian új honlapélmény fogtechnikai/fogászati területen;
- nem hivalkodó, hanem magabiztos és letisztult jelenlét;
- virtuális terekből álló, filmesen vezetett út;
- kevés szöveg, erős térbeli jelentés;
- technológiai fejlődés bemutatása emberközpontú, érthető módon;
- olyan honlap, amely nem „elmondja”, hanem megérezteti, hogy a DTA a mosolyok mögött áll.

## Mit építünk?

Modern, prémium weboldalt, amely:

- térként szervezi a tartalmat;
- filmes kameragondolkodással vezeti a látogatót;
- saját URL-t ad minden fontos térnek;
- indexelhető és akadálymentes HTML-tartalmat tart a látvány mögött;
- fokozatosan bővíthető új terekkel, portálokkal és interaktív modulokkal.

## Mit nem építünk?

- videojátékot;
- VR-alkalmazást;
- szabadon bejárható 3D világot;
- általános célú 3D motort;
- az első mérföldkőben teljes AI-házigazdát, regisztert vagy egészségügyi adatkezelést.

## Térkép

```text
HERO
├── Fogorvosok → SCENE 02
├── Miben segíthetünk? → SCENE 03 → Saját rendelők
└── Fogtechnikusok → SCENE 04 → Flexifogsor
```

## Terek feladata

### HERO

Virtuális előtér és kizárólagos döntési pont. Három portált mutat. Nem meséli el előre a célterek teljes tartalmát, csak hiteles bepillantást enged beléjük.

Az elsődleges érkezési kompozíció vízszintes: a három portál egyszerre fogadja a látogatót. Látható magyarázó szöveg nincs, csak a portálok rövid neve. A portálnyílás nem absztrakt díszletet, hanem a mögötte folytatódó célteret mutatja. Keskeny telefonon ugyanez a döntés érintésbarát, függőleges elrendezést kaphat.

A három portál azonos vizuális és működési rendszerhez tartozik. Azonos keretlogika, perspektíva, céljelenet-előnézet, fókuszreakció és áthaladás érvényes rájuk. A középső **Miben segíthetünk?** portál legfeljebb finom méret-, fény- vagy mélységhangsúlyt kap; nem válhat külön stílusú vagy tolakodó főgombbá.

A középső portál szemből látható és a tér centrális fókuszpontja, de mélységben hátrébb áll. A két oldalsó portál egymás térbeli tükörképe: közel húzódnak a középsőhöz, enyhén előrébb helyezkednek el, valamint körülbelül 10°-kal befelé fordulnak. A két oldalsó portál előtér-szárnyként finoman rátakarhat a középső portál széleire. A három portál együtt homorú, befelé ölelő térívet alkot. A nézőpont nem takarhatja el a nyílásukat; a különböző céljelenetek központi motívumának mindhárom portálban felismerhetőnek kell maradnia.

### SCENE 02 – Fogorvosok

B2B bizalom és kapcsolatindítás:

1. digitális workflow;
2. labor és együttműködés;
3. partneri kapcsolódás.

### SCENE 03 – Segítünk eligazodni

A rendszer központi tájékozódási tere:

1. digitális recepció és későbbi AI-házigazda;
2. kereső, tudástár és könyvtár;
3. regiszter és személyre szabott továbblépés.

A terem későbbi kijárata: **Saját rendelők**.

### SCENE 04 – Fogtechnika

A technológiai kompetencia közérthető bemutatása:

1. digitális adat és tervezés;
2. CAD/CAM és gyártás;
3. anyagok, precizitás és minőség-ellenőrzés.

A terem későbbi kijárata: **Flexifogsor**.

## Első sikerkritérium

Az első vertical slice akkor bizonyítja a koncepciót, ha a látogató:

1. megérkezik a HERO térbe;
2. megérti a három választási lehetőséget;
3. a Fogorvosok portálon oldalváltás érzet nélkül halad át;
4. a céljelenetben három rendezett állomást bejár;
5. vissza tud térni a HERO térbe;
6. ugyanezt a lényeget mobilon, billentyűzettel és csökkentett mozgással is eléri.

## Projektvezetői scope-döntés

Az M0 whiteboxban mind a négy alaptér szerepel, hogy a jelenetrendszer bővíthetősége bizonyítható legyen. A **HERO → Fogorvosok → HERO** út megmarad első technikai bizonyító mintának, mert ezen már bizonyítottuk a portálból induló áthaladást, a céljelenetet és a visszatérést.

2026. július 10-i projektvezetői pontosítás: az első látogatói élmény- és látványfókusz a **HERO → Miben segíthetünk? → Saját rendelők** útvonalra kerül. Ez hordozza legerősebben a DTA Virtual Space központi ígéretét: nem menüt adunk, hanem nyugodt, emberközpontú eligazodási teret. Így a rendszer egészét tervezzük, de egyszerre csak egy látogatói út karakterét emeljük erősebb vizuális szintre.
