# DTA Virtual Space

A DTA Virtual Space nem hagyományos fogászati weboldal, hanem egymásba kapcsolódó, filmesen rendezett virtuális terekből álló webélmény.

## Projektállapot

**M0 – projektalap és whitebox rendszer**

Az első bizonyítandó út:

`HERO → Fogorvosok → HERO`

A teljes whitebox térkép már az első rendszerben megjelenik:

- HERO – három portál, kizárólag döntési tér;
- SCENE 02 – Fogorvosok;
- SCENE 03 – Segítünk eligazodni;
- SCENE 04 – Fogtechnika.

## Alapelvek

- Egy világ, több saját URL-lel rendelkező tér.
- Nincs szabad bolyongás; a kamera rendezett pályán mozog.
- A portál valódi navigációs döntés, nem dekoráció.
- Az előnézet és a belépés vizuálisan folytonos.
- A tartalom egérrel, érintéssel és billentyűzettel is elérhető.
- A csökkentett mozgás és a mobilnézet teljes értékű változat.
- Whitebox és működés előbb, végleges látvány később.

## Dokumentáció

- [Projektalap](docs/PROJECT_CHARTER.hu.md)
- [Élmény- és műszaki architektúra](docs/ARCHITECTURE.hu.md)
- [Megvalósítási ütemterv](docs/ROADMAP.hu.md)
- [Döntési napló](docs/DECISIONS.md)
- [Aktuális állapot](docs/STATUS.hu.md)
- [HERO vizuális irány](docs/VISUAL_DIRECTION.hu.md)
- [HERO érkezési idővonal](docs/HERO_SEQUENCE.hu.md)
- [Vizuális assetleltár](references/visual/ASSET_INVENTORY.hu.md)

## Függőségmentes whitebox előnézet

A `preview/` mappa egy megnyitható, átmeneti Stage 0 prototípust tartalmaz. Célja a térkapcsolatok, a három portál, a mobilkompozíció és az átmenetek korai bizonyítása; nem a végleges vizuális webhely.

Helyi kiszolgáló indítása a projekt gyökeréből:

```text
node preview/server.mjs
```

Ezután az előnézet címe: `http://127.0.0.1:4173/preview/`.
