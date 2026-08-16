# Saját rendelők – időpontfoglalási kapu vázlat

**Dátum:** 2026. július 12.  
**Státusz:** zárt, tervezett funkciókapu; adatvédelmi és jogi kapu előtt  
**Kapcsolódik:** `docs/CLINICS_PATIENT_PATH_01.hu.md`

## Cél

A Saját rendelők tér végén látható **Időpontfoglalás** nem működő foglalási modul.

A cél az, hogy a látogató értse: a rendelői út későbbi természetes folytatása az időpontkérés lehet, de ez csak külön adatvédelmi, jogi és szakmai jóváhagyás után válhat éles funkcióvá.

## Jelenlegi állapot

A previewban az Időpontfoglalás kapu:

- zárt adatkapuként jelenik meg;
- nem link;
- nem űrlap;
- nem küld adatot;
- nem kér lokációt, nevet, telefonszámot, e-mail címet, panaszt vagy egészségügyi információt;
- csak a későbbi funkció helyét mutatja.

## Látható üzenet

A kapu három gondolatot jelez:

1. előbb adatvédelmi és jogi jóváhagyás;
2. utána rendelői időpontkérés folyamata;
3. most még nincs űrlap és nincs küldés.

## Biztonsági szabály

Éles foglalás csak akkor építhető, ha külön dokumentált:

- milyen adatot kér;
- mi az adatkezelés célja;
- mi a jogalap;
- hova kerül az adat;
- ki fér hozzá;
- mennyi ideig tárolódik;
- érint-e egészségügyi adatot;
- hogyan történik a hozzájárulás és tájékoztatás;
- hogyan működik a hiba-, visszaigazolási és törlési folyamat.

## UX-szabály

A kapu vizuálisan lehet hívogató, de nem kelthet olyan benyomást, hogy már működő szolgáltatás.

Ezért:

- nem használunk aktív CTA-gombot;
- nem írjuk azt, hogy „foglaljon most”;
- nem ígérünk azonnali visszahívást;
- nem kérünk adatot;
- egyértelműen jelezzük: **későbbi funkció, jelenleg nincs adatbekérés**.
