# Saját rendelők – adatmentes rendelői útvonal vázlat

**Dátum:** 2026. július 12.  
**Státusz:** whitebox tartalmi és UX-vázlat, adatvédelmi kapu előtt  
**Kapcsolódik:** Guidance / Kérdések konzultáció előtt, Saját rendelők tér

## Cél

A Saját rendelők tér a Guidance tudástár természetes folytatása.

Nem éles időpontfoglaló.

Nem panaszbeküldő.

Nem online diagnosztikai felület.

A cél az, hogy a látogató a tudástárban összerendezett kérdéseivel biztonságosan tovább tudjon lépni a rendelői konzultáció irányába.

## Útvonal

### 01 · Érkezés

A tudástárból hozott kérdések megmaradnak kérdéseknek.

A látogató nem űrlapot tölt ki, hanem egy nyugodt előszobába érkezik. Amit a Guidance térben megértett, az itt beszélgetési iránnyá rendeződik, nem automatikus döntéssé.

### 02 · Tisztázás

A szakemberrel tisztázható kérdéseket a honlap nem dönti el.

A rendelői út célja az, hogy a kérdés személyes szakmai egyeztetésben kapjon helyet. A rendszer nem értékel tünetet, nem rangsorol megoldást és nem választ anyagot.

### 03 · Foglalási kapu

Az időpontfoglalás külön adatvédelmi kapu mögött lesz.

A mostani build csak megmutatja a későbbi foglalási helyet. Működő időpontkérés, személyes adat vagy egészségügyi adat kezelése csak jóváhagyott jogi és adatvédelmi folyamat után kerülhet ide.

## Biztonsági korlát

A jelenlegi Saját rendelők tér:

- nem kér lokációt;
- nem kér panaszleírást;
- nem kér személyes adatot;
- nem kér egészségügyi adatot;
- nem továbbít adatot;
- nem ad diagnózist;
- nem készít kezelési tervet;
- nem választ kezelést, anyagot vagy fogpótlási típust;
- nem tartalmaz éles foglalási integrációt.

## Webes megjelenés

A previewban külön **rendelői útvonalpanel** jelenik meg:

1. a Guidance-ből érkező kérdések megtartása;
2. személyes szakmai tisztázás iránya;
3. későbbi foglalási kapu adatvédelmi feltétellel.

Ez a panel szemantikus HTML-tartalomként szerepel, és mobilon egyoszlopos elrendezésre vált.

## Következő kapu

Éles foglalási vagy kapcsolatfelvételi modul csak akkor készülhet, ha külön dokumentálva van:

- adatkezelési cél;
- kezelt adatkör;
- jogalap;
- tárolás és továbbítás;
- egészségügyi adatkezelési kockázat;
- szakmai és jogi jóváhagyás;
- akadálymentes használat.

A jelenlegi zárt Időpontfoglalás kapu külön leírása: `docs/CLINICS_BOOKING_GATE_01.hu.md`.

A rendelői orientációs sziget külön leírása: `docs/CLINICS_ORIENTATION_ISLAND_01.hu.md`.
