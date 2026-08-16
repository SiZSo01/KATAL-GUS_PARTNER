# Saját rendelők concept still prompt

## Cél

Ez a dokumentum a **Guidance tér végén látható Saját rendelők portál mögötti célvilág** első concept still gyártási promptját rögzíti.

Fontos: ez nem éles időpontfoglaló oldal, nem rendelői aloldal és nem adatbekérő felület. A cél egy olyan virtuális rendelői előszoba képe, amely később a Guidance portálban sűrített előképként is megjelenhet, majd belépés után teljes térként kibomlik.

## Kapcsolódó döntés

- `ADR-024` – A guidance végén lévő Saját rendelők portál aktív célvilág
- `ADR-028` – A Saját rendelők tér rendelői előszoba, nem éles foglaló
- `ADR-035` – A Guidance tudástárfalai és a mögöttes Saját rendelők tér külön assetlogikát kapnak

## V1 prompt

```text
Use case: stylized-concept
Asset type: website virtual-space concept still, own-clinics destination scene, 16:9, text-free

Primary request:
Create a premium cinematic concept still for the "Own Clinics" virtual destination space of an interactive dental technology website. This is the space that opens after the visitor passes through the rear portal of the central guidance room. The image should feel like the portal content has expanded into a full calm clinic-reception world.

Scene:
A warm, elegant, reassuring dental clinic reception and orientation space. Soft beige, ivory, champagne gold and subtle DTA green accents. The visitor has arrived from a portal behind them into a spacious own-clinics antechamber. The scene should combine a calm reception lounge, a subtle pathway toward consultation/treatment rooms, and a non-functional appointment-orientation area.

Spatial composition:
Use cinematic depth. In the middle distance, place a calm orientation console or reception island, but do not make it a web form. To one side, show a clean modern dental treatment room glimpse: recognizable dental chair, overhead exam lamp, soft glass wall, no patient, no procedure. To the other side, show a comfortable waiting/consultation zone with warm lighting and plants. At the far end, hint at separate clinic rooms or appointment path with soft light gates, without readable labels.

Portal continuity:
The visual language must match the rear portal seen from the guidance space: warm gold light, clean architectural symmetry, calm premium clinic atmosphere. It should be clear that this is the full space behind that portal, not a separate web page.

Constraints:
No readable text, no letters, no logos, no watermark, no UI panels, no input fields, no forms, no personal data, no calendar widget, no medical procedure, no patient in treatment, no close-up dental tools, no frightening clinical imagery, no diagnosis, no treatment promise. Keep it calm, premium, understandable and human.
```

## Elfogadási fókusz

- a tér a Guidance hátsó portáljának természetes folytatása legyen;
- legyen közérthető, hogy Saját rendelők / rendelői előszoba világba érkeztünk;
- az időpontfoglalás csak útvonal- vagy kapuérzetként jelenjen meg, ne működő űrlapként;
- a fogorvosi berendezés felismerhető legyen, de ne legyen ijesztő vagy túl klinikai;
- a kép szöveg, logó, űrlap, diagnózis és kezelési ígéret nélkül maradjon.

## V1 generált concept still

Elkészült az első Saját rendelők céljelenet:

`assets/concepts/clinics/clinics-concept-still-v1.png`

Technikai adat:

- méret: 1672 × 941 px;
- fájlméret: körülbelül 1,9 MB;
- státusz: első céljelenet-irány, nem végleges webasset, nem rétegelt export.

Értékelés:

- a tér jól olvasható, meleg rendelői előszobaként működik;
- bal oldalon felismerhető a fogorvosi kezelőhely, de nem ijesztő és nem túl klinikai;
- jobb oldalon megjelenik a váró/konzultációs emberi komfort;
- középen van egy rendezett orientációs/receptorikus sziget, de nem tűnik éles űrlapnak;
- a kompozíció alkalmas arra, hogy a Guidance hátsó portáljában sűrített előképként is használható irányt adjon.

Nyitott finomítás:

- a későbbi v2-ben erősebben megkülönböztethető lehet az időpontfoglalási kapu, továbbra is űrlap és adatbekérés nélkül;
- a DTA-zöld márkakapcsolat finoman erősíthető, de nem válhat reklámfelületté vagy logóparádévá.
