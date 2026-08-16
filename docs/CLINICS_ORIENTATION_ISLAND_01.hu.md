# Saját rendelők – rendelői orientációs sziget

**Dátum:** 2026. július 12.  
**Státusz:** whitebox UX- és tartalmi vázlat, adatvédelmi kapu előtt  
**Kapcsolódik:** `docs/CLINICS_PATIENT_PATH_01.hu.md`, `docs/CLINICS_BOOKING_GATE_01.hu.md`, `docs/CLINICS_VISUAL_COMPOSITION_01.hu.md`

## Cél

A Saját rendelők tér ne hagyományos foglalóoldalnak hasson.

A cél egy nyugodt rendelői előtér, ahol a Guidance tudástárból érkező látogató érzi:

- nem űrlaphoz érkezett;
- nem online diagnózist kap;
- nem kezelési terv készül;
- a kérdéseit emberi szakmai beszélgetés felé viheti tovább;
- az időpontfoglalás csak későbbi, zárt adatkapu után válhat működővé.

## Rendelői út

### 01 · Fogadópont

A látogató megtartja a Guidance térben rendezett kérdéseit.

Ezek nem válnak automatikusan beküldött adattá, panaszlappá vagy előminősítéssé.

### 02 · Szakmai beszélgetés

A tér azt sugallja, hogy a fontos döntések szakemberrel történő egyeztetésben kapnak helyet.

A honlap nem választ kezelést, anyagot vagy fogpótlási típust.

### 03 · Zárt foglalási kapu

A foglalási irány helye látszik, de a funkció zárt.

Nincs aktív CTA, nincs űrlap, nincs adatmező és nincs küldés.

## Webes megjelenés

A previewban új **rendelői orientációs sziget** jelenik meg:

1. Fogadópont – a kérdés még nem adat;
2. Szakmai beszélgetés – a döntés emberi térbe kerül;
3. Zárt foglalási kapu – a foglalás későbbi adatvédelmi réteg.

A felső Saját rendelők látványban a korábbi **Érkezés → Irány → Foglalás** jelölés pontosabb lett:

**Fogadópont → Beszélgetés → Zárt kapu**

## Biztonsági korlát

A jelenlegi vázlat:

- nem kér személyes adatot;
- nem kér egészségügyi adatot;
- nem tartalmaz működő időpontfoglalást;
- nem küld adatot;
- nem diagnosztizál;
- nem készít kezelési tervet;
- nem helyettesít személyes rendelői konzultációt.
