# Saját rendelők – útvonal-folytonosság

**Dátum:** 2026. július 12.  
**Státusz:** whitebox UX- és kompozíciós finomítás  
**Kapcsolódik:** `docs/CLINICS_ORIENTATION_ISLAND_01.hu.md`, `docs/CLINICS_VISUAL_COMPOSITION_01.hu.md`

## Cél

A Saját rendelők tér három fontos blokkja ne külön kártyacsoportként hasson.

A cél az, hogy a látogató:

- egyetlen rendelői útként érzékelje a teret;
- ne széttördelt információs blokkokat lásson;
- finom, folyamatos előrehaladást éljen meg a fogadóponttól a zárt foglalási kapuig.

## Döntés

A `ClinicConsole`, a `ClinicOrientation` és a `ClinicPathway` közös `clinic-journey` rétegbe került.

Ez a réteg:

- közös függőleges gerincvonalat ad;
- egységes szélességet tart;
- finom átfedéssel és ritmussal köti össze a blokkokat;
- egyetlen rendelői útvonal benyomását kelti.

## Mit nem változtat

Ez a finomítás nem nyit új funkciót.

Továbbra sincs:

- időpontfoglalás;
- CTA;
- űrlap;
- személyes adatbekérés;
- diagnózis;
- kezelési terv.
