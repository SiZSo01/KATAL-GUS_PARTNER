# Guidance concept still – promptlap

## Cél

Első, szöveg nélküli 16:9-es concept still a **Miben segíthetünk?** térhez.

Ez nem végleges webes asset, hanem vizuális irányteszt: azt kell eldöntenie, hogy a Guidance tér hangulata jó irányba megy-e, mielőtt réteges asseteket gyártunk belőle.

## Képgenerálási prompt

```text
Use case: stylized-concept
Asset type: website virtual-space concept still, 16:9 landing scene, text-free

Primary request:
Create a premium cinematic concept still for an interactive dental technology website's central visitor guidance space. The scene is a calm futuristic but warm virtual reception / knowledge hub, not a game and not VR. A visitor has entered a serene DTA-inspired virtual space where an information host helps them orient themselves before moving toward the clinic path.

Scene/backdrop:
A spacious, elegant, softly lit virtual reception hall with a clean dental-wellness atmosphere. The room has subtle architectural depth, a polished reflective floor, soft glass and brushed-metal surfaces, and two quiet knowledge-library walls on the left and right. In the far background, show a subtle warm portal hint leading toward "own clinics" / appointment-preparation space, but do not include readable text.

Subject:
At the center is a calm adult female information host presence near an elegant information console. She should feel human, premium, kind, and reassuring, not like a stock photo, not a mascot, not a robot. The host can be semi-realistic or softly stylized, integrated into the light of the space. Around her is a gentle welcoming light ring and soft aura.

Style/medium:
Cinematic premium concept art, polished architectural visualization, soft photoreal/stylized hybrid, suitable as an art-direction still for a modern dental technology website. Not cartoon, not cyberpunk, not hospital horror, not sci-fi spaceship.

Composition/framing:
Wide 16:9 landscape composition. Centered host and console as the focal point. Knowledge-library walls on both sides. Warm subtle rear portal in the background. Clear depth from foreground console to background portal. Keep enough clean space for later UI layering, but do not add UI in the image.

Lighting/mood:
Soft luminous guidance light, calm and trustworthy. Main palette: deep graphite / blue-green shadows, milk-glass whites, soft lavender guidance light, subtle DTA green reflections, and a warmer beige-gold glow for the rear clinic portal.

Materials/textures:
Matte glass, brushed metal, smooth stone or polished floor, soft translucent panels, subtle reflections, fine volumetric light, clean dental-premium atmosphere.

Constraints:
No text, no letters, no logos, no watermark, no UI panels, no chat bubbles, no input fields, no forms, no medical procedure, no dental instruments in the foreground, no diagnosis, no treatment promise, no frightening clinical imagery, no exaggerated avatar, no headset support agent cliché. The image should be a clean concept still that can later be split into layers.
```

## Elfogadási szempontok

Az első kép akkor jó irány, ha:

1. első pillantásra központi fogadótérnek érződik;
2. a házigazda emberi és nyugodt, de nem reklámfotós;
3. a két oldali tudástár érződik, de nem válik menürendszerré;
4. hátul megjelenik a Saját rendelők felé vezető, melegebb fényű irány;
5. nincs szöveg, logó, űrlap, chatmező vagy diagnosztikai tartalom;
6. vizuálisan rokon marad a HERO középső portáljával;
7. később rétegekre bontható: háttér, házigazda, konzol, tudástárfalak, hátsó portál, fényrétegek.

## Első iterációs döntések

Ha a kép:

- túl sci-fi: melegebb, rendelői/wellness irányba kell tolni;
- túl stockfotós: absztraktabb, térbe illesztettebb házigazda kell;
- túl kórházas: több prémium recepció, kevesebb klinikai jel;
- túl üres: tudástárfalak és hátsó portál erősítése;
- túl zsúfolt: kevesebb objektum, tisztább fénytér.

## V1 generált concept still

Elkészült az első generált iránykép:

`assets/concepts/guidance/guidance-concept-still-v1.png`

Technikai adat:

- méret: 1672 × 941 px;
- arány: 16:9 közeli széles concept still;
- fájlméret: körülbelül 1,9 MB;
- státusz: irányteszt, nem végleges asset, nem réteges export.

Első projektvezetői értékelés:

- jó irány: központi házigazda, nyugodt konzol, két oldali tudástárfal, hátsó meleg portálfény;
- megfelel a fő tiltásoknak: nincs olvasható szöveg, nincs logó, nincs űrlap, nincs chatmező, nincs diagnosztikai tartalom;
- további finomításnál figyelni kell arra, hogy a házigazda ne váljon stockfotó-hatásúvá, és a hátsó portál ne legyen túl direkt reklám-CTA.

## V2 korrekciós prompt

A v1 iránya elfogadható, de a következő célzott javítások szükségesek:

1. A házigazda és a konzol aránya legyen hiteles. Ne legyen olyan érzés, mintha a hölgy lába hiányozna vagy az asztal túl alacsony lenne. A konzol normál recepciós/információs pult magasságú legyen, a házigazda teljes testaránya optikailag értelmezhető maradjon, akár a pult mögött állva.
2. A hátsó arany portál fényíve legyen szimmetrikusabb, központibb és építészetileg rendezettebb.
3. A hátsó portál mögött finoman látszódjon fogorvosi/rendelői berendezés — például modern kezelőszék, vizsgálólámpa vagy rendelői konzol — hogy közérthetőbb legyen: a Guidance tér végén a Saját rendelők felé lehet továbblépni.
4. A rendelői berendezés csak a portál mögötti térben jelenjen meg, ne a Guidance fogadóterében. Ne legyen félelmetes, klinikai vagy beavatkozás-jellegű.
5. Maradjon szöveg nélküli, logó nélküli, űrlap és chatmező nélküli concept still.

```text
Use case: stylized-concept
Asset type: website virtual-space concept still v2, 16:9 landing scene, text-free

Primary request:
Create a refined v2 premium cinematic concept still for an interactive dental technology website's central visitor guidance space. Preserve the calm, elegant, human-centered direction of v1, but correct the scale and readability issues.

Scene/backdrop:
A spacious, elegant, softly lit virtual reception / knowledge hub with polished reflective floor, soft glass, brushed metal, and quiet knowledge-library walls on the left and right. The far background contains a centered, symmetrical warm portal leading toward the own-clinics space.

Subject and scale correction:
At the center is a calm adult female information host behind or beside an elegant information console. The body scale must be believable: the console is normal reception/information desk height, not too low; the host's torso and implied lower body proportions must feel natural, with no impression of missing legs. The host should feel integrated into the space, premium and reassuring, less like a stock photo and not like a mascot or robot.

Rear portal correction:
The warm gold rear portal must be symmetrical and centered. Inside or beyond this portal, subtly show a clean modern dental treatment room: a recognizable dental chair, overhead exam lamp, or dental-room console, softly blurred and non-frightening. This dental equipment appears only behind the rear portal, not in the foreground guidance space.

Style/medium:
Cinematic premium concept art, polished architectural visualization, soft photoreal/stylized hybrid, modern dental-wellness atmosphere. Not cartoon, not cyberpunk, not hospital horror, not sci-fi spaceship.

Composition/framing:
Wide 16:9 landscape composition. Centered host and console as focal point, knowledge-library walls on both sides, symmetrical warm clinic portal in the far background. Clear depth from guidance console to rear clinic portal. Keep clean space for later UI layering, but do not add UI.

Lighting/mood:
Soft luminous guidance light, calm and trustworthy. Main palette: deep graphite / blue-green shadows, milk-glass whites, soft lavender guidance light, subtle DTA green reflections, and warmer beige-gold light for the rear clinic portal.

Constraints:
No text, no letters, no logos, no watermark, no UI panels, no chat bubbles, no input fields, no forms, no medical procedure, no patient, no close-up dental tools, no frightening clinical imagery, no diagnosis, no treatment promise. The dental chair/equipment must be subtle and only visible through the rear portal to clarify the next space.
```

## V2 generált concept still

Elkészült a v2 iránykép:

`assets/concepts/guidance/guidance-concept-still-v2.png`

Technikai adat:

- méret: 1672 × 941 px;
- fájlméret: körülbelül 1,9 MB;
- státusz: köztes iteráció, nem végleges asset.

Értékelés:

- javult a hátsó portál szimmetriája;
- a portál mögött már felismerhető fogorvosi kezelőhely látszik;
- a házigazda és a pult aránya még nem elég tiszta, mert a pult továbbra is zavarhatja a láb/testarány értelmezését.

## V3 korrekciós prompt

A v3 célja: a hölgy teljes testaránya legyen tisztán olvasható, a konzol ne takarja a lábakat, miközben a hátsó fogorvosi portál megmarad.

```text
Use case: stylized-concept
Asset type: website virtual-space concept still v3, 16:9 landing scene, text-free

Primary request:
Create a refined v3 premium cinematic concept still for an interactive dental technology website's central visitor guidance space. Keep the calm elegant direction, the knowledge-library walls, and the warm rear clinic portal with dental equipment, but solve the host-and-console proportion problem completely.

Scene/backdrop:
A spacious, elegant, softly lit virtual reception / knowledge hub with polished reflective floor, soft glass, brushed metal, and quiet knowledge-library walls on the left and right. The far background contains a centered, symmetrical warm portal leading toward the own-clinics space.

Subject and scale correction:
At the center is a calm adult female information host with believable full-body proportions. Her full silhouette from head to shoes should be optically understandable, with natural legs and feet visible on the floor. Do not place a large reception desk in front of her that hides or cuts off the lower body. Use a slimmer elegant waist-high translucent information pedestal or curved console beside her or lightly in front of one side, so the host's scale remains clear.

Rear portal correction:
The warm gold rear portal must be symmetrical, centered, and architecturally clean. Inside or beyond this portal, subtly show a clean modern dental treatment room: a recognizable dental chair, overhead exam lamp, and a calm dental-room console, softly blurred and non-frightening. This dental equipment appears only behind the rear portal, not in the foreground guidance space.

Constraints:
No text, no letters, no logos, no watermark, no UI panels, no chat bubbles, no input fields, no forms, no medical procedure, no patient, no close-up dental tools, no frightening clinical imagery, no diagnosis, no treatment promise. Avoid a large desk hiding the host's body.
```

## V3 generált concept still

Elkészült a v3 iránykép:

`assets/concepts/guidance/guidance-concept-still-v3.png`

Technikai adat:

- méret: 1672 × 941 px;
- fájlméret: körülbelül 2,0 MB;
- státusz: jelenlegi legerősebb concept irány, nem végleges webasset, nem rétegelt export.

Értékelés:

- a házigazda testaránya és láthatósága lényegesen tisztább;
- a konzol már nem okoz „hiányzó láb” érzetet;
- a hátsó portál szimmetrikusabb és közérthetőbb;
- a fogorvosi kezelőszék/lámpa a portál mögött jól jelzi, hogy a Guidance tér végén a Saját rendelők felé vezet az út;
- a kép továbbra is szöveg, logó, űrlap, chatmező és diagnosztikai állítás nélküli concept still.

## V4 korrekciós prompt

A v4 célja: a v3 impozáns, jól arányos kompozícióját megtartani, de a két oldalsó részt finoman tudástár/információs központ jellegűvé tenni. A hátsó portál továbbra is a Saját rendelők világába vezessen, de ne csak fényfolt legyen: a mögöttes célvilág sűrített előképeként viselkedjen.

```text
Use case: stylized-concept
Asset type: website virtual-space concept still v4, 16:9 landing scene, text-free

Primary request:
Create a refined v4 premium cinematic concept still for an interactive dental technology website's central visitor guidance space. Preserve the strongest qualities of v3: elegant full-body female information host, believable scale, calm central information pedestal, symmetrical rear portal, polished premium atmosphere, and subtle dental clinic glimpse beyond the rear portal.

Knowledge-center correction:
The left and right side areas should no longer feel like ordinary decorative shelves with plants and furniture. Transform them subtly into an elegant knowledge library / information center. Use abstract glass archive shelves, softly glowing knowledge capsules, translucent index panels without readable text, small illuminated data markers, quiet vertical library rhythms, and refined information-center architecture. Keep this subtle and premium, not busy, not futuristic overload, not a menu UI.

Rear portal rule:
The rear portal must behave as an aperture into the next virtual space: the own-clinics world. Through the portal, show a coherent glimpse of the next room that can later expand into a full scene: warm clinic reception depth, clean dental chair or treatment room element, soft exam light, calm beige-gold atmosphere, no frightening clinical detail. The portal content should feel like a real continuation of space, not a poster.

Constraints:
No readable text, no letters, no logos, no watermark, no UI panels, no chat bubbles, no input fields, no forms, no diagnosis, no treatment promise, no close-up dental tools, no medical procedure, no patient in treatment. The host remains the central welcoming guide, not a doctor. The knowledge-center side elements must support the feeling of orientation and answers without becoming dominant.
```

V4 elfogadási fókusz:

- a v3 házigazda/konzol aránya maradjon meg;
- az oldalsó térfalakból érződjön a tudástár, de ne váljanak menürendszerré;
- a hátsó portálban a Saját rendelők tér előképe legyen olvasható;
- a kép továbbra is concept still, nem végleges rétegelt webasset.

## V4 generált concept still

Elkészült a v4 iránykép:

`assets/concepts/guidance/guidance-concept-still-v4.png`

Technikai adat:

- méret: 1672 × 941 px;
- fájlméret: körülbelül 1,9 MB;
- státusz: aktuális finomított concept irány, nem végleges webasset, nem rétegelt export.

Értékelés:

- a v3 arányai és impozáns központi házigazda/konzol iránya megmaradt;
- az oldalsó zónák már kevésbé egyszerű dekorpolcok: megjelentek az üvegarchívum, fénykapszula és információs központ jellegű elemek;
- a növények még jelen vannak, de jelenleg emberibbé és kevésbé rideggé teszik a tudástárat;
- a hátsó portál mögött továbbra is jól olvasható a Saját rendelők / fogorvosi kezelőtér iránya;
- a kép továbbra sem tartalmaz olvasható szöveget, logót, űrlapot, chatmezőt vagy szakmai állítást.

Nyitott finomítás:

- ha a tudástár-jellegnek erősebbnek kell lennie, v5-ben a növények egy része visszavehető, és több absztrakt tudás-/keresőfény kerülhet az oldalfalakra;
- a végleges portálbelsőt a külön generált Saját rendelők céljelenettel kell összehangolni.
