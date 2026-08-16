# Beérkezett vizuális assetek

**Állapot:** koncepcióreferenciák, nem produkciós assetek  
**Rögzítés dátuma:** 2026. július 5.

## 1. DTA master logo

**Fájl:** `source/dta-master-logo-v1.png`  
**Méret:** 1535 × 1024 px  
**Színformátum:** 24 bites RGB, átlátszóság nélkül

### Értéke

- rögzíti a grafit–fém–DTA-zöld anyagvilágot;
- erős márkaazonosító;
- a levél és az ív használható finom térbeli motívumként.

### Korlátja

A sakktáblás háttér a képpontok része, nem valódi átlátszóság. Jelen formájában nem helyezhető tisztán a virtuális térbe.

### Következő változat

- elsődlegesen vektoros SVG;
- vagy valódi alfa-csatornás PNG/WebP;
- egyszerűsített kis méretű változat;
- külön embléma és külön szöveges logó, ha a térkompozíció ezt igényli.

## 2. HERO háttérkoncepció

**Fájl:** `source/hero-background-concept.png`  
**Méret:** 1670 × 941 px  
**Színformátum:** 24 bites RGB, teljes hátteret kitöltő kép

### Értéke

- prémium kékesszürke tér;
- elegendő nyugodt negatív tér;
- finom tükröződő padló;
- DTA-zöld fényáramlás mint világokat összekötő motívum.

### Korlátja

- a fényhullám egy része már bele van sütve a háttérbe;
- a jelenlegi fájl körülbelül 1,65 MB, ezért optimalizálás nélkül nem kerül a HERO kritikus betöltésébe;
- külön mobilkompozíció szükséges.

### Következő változat

- tiszta háttér lehetőleg külön fényhullám nélkül;
- desktop és mobil vágás;
- AVIF/WebP export;
- külön mélységi előtér és háttér, ha a finom parallax ezt indokolja.

## 3. Fényáram / light pass

**Fájl:** `source/hero-lightpass-concept.png`  
**Méret:** 1536 × 1024 px  
**Színformátum:** 32 bites ARGB, valódi átlátszó területekkel

### Értéke

- önálló fényrétegként animálható;
- hordozza a növekedés, út és összekapcsolódás gondolatát;
- alkalmas lehet nagyon lassú parallaxra vagy fényerő-pulzálásra.

### Korlátja

A 3:2 képarány nem egyezik a háttér közel 16:9 képarányával. Méretezéssel torzulna, vágással pedig megváltozna az ív helyzete. Az új exportnak ugyanazt a vásznat, kamerát és koordinátarendszert kell használnia, mint a HERO háttérnek.

### Következő változat

- a háttérrel azonos desktop és mobil vászon;
- valódi alfa-csatorna;
- a nyílhegy külön opcionális réteg;
- WebP/AVIF vagy optimalizált PNG a vizuális eredmény szerint.

## 4. Fogorvosi portálkoncepció

**Fájl:** `source/doctor-gateway-concept.png`  
**Méret:** 1536 × 1024 px  
**Színformátum:** 24 bites RGB, átlátszóság nélkül

### Értéke

- elsődleges referencia az építészeti portálformához, a keret fizikai mélységéhez és az enyhén oldalirányú kameranézethez;
- a csiszolt fém és finom zöld fény illeszkedik a DTA világához;
- a portál belseje valódi folytatódó tér érzetét célozza.

### Korlátja

- a sakktáblás háttér bele van égetve;
- a portálkeret és a mögöttes rendelő egyetlen lapos kép;
- a megjelenített kezelőhelyiség inkább páciensoldali fogászatot sugall, miközben a Fogorvosok tér elsődleges ígérete B2B együttműködés és digitális workflow.

### Következő változat

- külön átlátszó portálkeret;
- külön, perspektívában pontos céljelenet;
- íves, organikus kapuforma látható külső és belső keretmélységgel;
- a két oldalsó portál ugyanennek a formának tükrözött kameranézete;
- a Fogorvosok világában kezelőszék mellett digitális adatátadás, szkennelés és labor-együttműködés jelei;
- ugyanilyen kamerával, anyaggal és léptékkel készülő Eligazodás és Fogtechnika portál.

## 5. Frissen beérkezett DTA master logo

**Fájl:** `source/dta-master-logo-supplied-20260707.png`  
**Eredeti forrás:** `C:/Users/Admin/Desktop/DTA-HONLAp00/assets/hero/DTA_Master_Logo_v1.0.png`  
**Méret:** 1535 × 1024 px  
**Színformátum:** 24 bites RGB, átlátszóság nélkül

### Értéke

- megerősíti a végleges márkaanyag irányát;
- jól mutatja a fémes, prémium, zöld DTA-világot;
- hasznos referencia a későbbi logó-elhelyezéshez és anyagérzethez.

### Korlátja

A fájl technikailag nem valódi átlátszó PNG: a sakktáblás háttér bele van égetve a képpontokba. Ezért közvetlenül nem kerülhet végleges HERO-logóként a sötét virtuális térbe.

### Következő változat

- SVG vagy valódi alfa-csatornás PNG/WebP;
- külön egyszerű DTA jel a HERO felső márkasávjához;
- külön teljes master logo változat nagyobb bemutatkozó vagy kapcsolatfelvételi felületre.

## 6. Fogorvosok korábbi master scene

**Fájl:** `source/dentist-master-scene-supplied-20260707.png`  
**Eredeti forrás:** `C:/Users/Admin/Desktop/DTA-HONLAp00/assets/dentist/00_master_scene.png`  
**Méret:** 1536 × 1024 px  
**Színformátum:** 24 bites RGB, teljes kompozit kép

### Értéke

- erős fogorvosi/B2B partneri irányt mutat;
- jól látható benne a digitális rendelő–labor kapcsolat;
- használható tartalmi támpontokat ad: megbízható partner, precíz kivitelezés, pontos határidő, digitalizált munkafolyamat, egyszerű kommunikáció;
- a labor, monitorok, üvegfal és központi digitális fog motívuma jól illeszkedik a Fogorvosok tér első vertical slice-ához.

### Korlátja

Ez a kép hagyományos weboldal-layout: felső navigáció, nagy címsor, ikonok, kártyák és CTA-gombok vannak benne. A DTA Virtual Space nem ezt a layoutot másolja. A kép hangulati, tartalmi és térreferencia, nem kész képernyőterv.

### Következő változat

- a labor/rendelő tér motívumait külön rétegekre kell bontani;
- a navigációs, kártyás és marketingoldal-elemeket nem visszük át a virtuális térbe;
- a központi digitális workflow gondolatot a portálátmenet és a Fogorvosok tér három állomása hordozza.

## Projektvezetői döntés

Ezek az assetek nem kerülnek változtatás nélkül a végleges webhelyre. Vizuális forrásként és rétegkoncepcióként szolgálnak. A produkciós HERO csak akkor épül rájuk, amikor:

1. mindhárom portál ugyanabban a vizuális rendszerben létezik;
2. a háttér és az overlay rétegek vászonmérete megegyezik;
3. minden kivágandó elem valódi átlátszóságot kap;
4. elkészül a mobilváltozat;
5. teljesül az asset-méretkeret.
