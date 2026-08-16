# Döntési napló

## ADR-001 – Hibrid 2.5D a teljes valós idejű 3D helyett

- **Állapot:** elfogadva
- **Döntés:** A fő világ 2.5D filmes rétegekből és DOM-alapú interakcióból épül. Valódi 3D csak izolált, indokolt modul lehet.
- **Indok:** A projekt rendezett kamerát, prémium művészeti kontrollt és erős mobilos működést kíván; nincs szükség szabad bejárásra.

## ADR-002 – Minden térnek saját URL-je van

- **Állapot:** elfogadva
- **Döntés:** A vizuálisan folyamatos világ ellenére minden fő jelenet közvetlenül megnyitható és a böngészőelőzménnyel kezelhető.
- **Indok:** Megoszthatóság, SEO, visszalépés és hibatűrés.

## ADR-003 – A teljes whitebox és az első vizuális slice terjedelme eltér

- **Állapot:** elfogadva
- **Döntés:** M0-ban mind a négy alaptér whiteboxa elkészül. M1-ben csak a HERO → Fogorvosok → HERO út kap közel végleges vizuális minőséget.
- **Indok:** A bővíthető architektúra korán bizonyítható, miközben a látványgyártás fókuszált marad.

## ADR-004 – AI és személyes adatok későbbi termékréteg

- **Állapot:** elfogadva
- **Döntés:** Az AI-házigazda, regiszter és személyesadat-kezelés nem része az M0/M1 buildnek.
- **Indok:** Előbb a Virtual Space alapígéretét kell bizonyítani; az adatkezelés külön biztonsági és jogi tervezést igényel.

## ADR-005 – Animációs függőség csak igazolt igényre

- **Állapot:** elfogadva
- **Döntés:** A whitebox először platform- és CSS-képességekkel készül. Összetett idővonal-könyvtár csak a kamera- és portálprototípus értékelése után kerül be.
- **Indok:** A jelenetrendszer ne függjön korán egy olyan absztrakciótól, amelynek szükségessége még nem bizonyított.

## ADR-006 – A HERO elsődleges kompozíciója három vízszintes portál

- **Állapot:** elfogadva
- **Döntés:** A látogató érkezésekor 560 px feletti nézetben a három portál egyetlen vízszintes térkompozícióban jelenik meg. Csak keskeny telefonon vált függőleges, érintésbarát elrendezésre.
- **Indok:** A HERO feladata az azonnali térbeli választás. A három célvilágot egyidejűleg kell érzékelni, nem egymás után felfedezni.

## ADR-007 – A HERO-n nincs magyarázó tartalmi blokk

- **Állapot:** elfogadva
- **Döntés:** A HERO egy rövid, halk üdvözlő/orientációs jelzésből és a három portálból áll. A portálok alatt nincs név, leírás, nyílgomb vagy CTA-kártya. A név legfeljebb a portál terébe simuló jelzés; a nyílásban a célvilág valós előnézete jelenik meg. Részletes szöveg csak belépés után következik.
- **Indok:** A virtuális előtér döntési pont, nem bevezető tartalmi oldal.

## ADR-008 – Az eredeti koncepciókép vizuális DNS, nem kész layout

- **Állapot:** elfogadva
- **Referencia:** `references/visual/hero-origin-reference.png`
- **Döntés:** Megtartjuk a prémium DTA-színvilágot, a finom zöld fényáramlást és a három célvilág képét. A három alsó marketingkártyát valódi építészeti portálokká alakítjuk; leírások, nyílgombok és kártyaaljak nélkül.
- **Indok:** A látogatónak nem három ajánlatkártyát kell látnia, hanem három folytatódó virtuális világot.

## ADR-009 – A HERO különálló vizuális rétegekből épül

- **Állapot:** elfogadva
- **Döntés:** A háttér, fényáram, portálkeretek és céljelenet-előnézetek külön assetek. Minden összetartozó réteg azonos vásznon és koordinátarendszerben készül.
- **Indok:** A beérkezett koncepciófájlok megmutatták a kívánt rétegeket, de eltérő képarányuk és részben beégetett hátterük miatt közvetlenül nem kompozitálhatók. A külön rétegek teszik lehetővé a folytonos portálátmenetet és a mobiloptimalizálást.

## ADR-010 – Három egyenrangú portál, finom középső hangsúllyal

- **Állapot:** elfogadva
- **Döntés:** A HERO portáljai: **Fogorvosok**, **Miben segíthetünk?**, **Fogtechnikusok**. Mindháromra azonos keret-, céljelenet-, fókusz- és áthaladási szabály vonatkozik. A középső portál csak körülbelül 5–8%-os vizuális hangsúlyt kaphat.
- **Indok:** A három célközönség egyenrangú bejáratot kap, miközben a központi eligazodási funkció finoman felismerhető marad.

## ADR-011 – Tükrözött oldalsó portálperspektíva

- **Állapot:** elfogadva
- **Döntés:** A középső portál frontális és a kompozíció fókusza, de mélységben hátrébb áll. A bal és jobb portál egymás tükörképeként szorosan mellé húzódik, enyhén előrébb kerül, valamint körülbelül +10°/−10° befelé fordulást kap. A két oldalsó portál előtér-szárnyként finoman rátakarhat a középső portál széleire. A három elem homorú térívet alkot. A nyílás legalább annyira frontális marad, hogy a célvilág központi motívuma felismerhető legyen.
- **Indok:** A befelé ölelő portálív így nem lapos kártyasornak, hanem valódi előcsarnoki mélységnek hat: a középső bejárat irányt ad, miközben a két oldalsó portál fizikai térérzetet és előtéri takarást hoz létre.

## ADR-012 – Az orvosi kapukép a portálgeometria referenciája

- **Állapot:** elfogadva
- **Referencia:** `references/visual/source/doctor-gateway-concept.png`
- **Döntés:** A kép nem pusztán a Fogorvosok céljelenetének hangulati referenciája. Elsődlegesen az íves portálforma, a vastag anyagszerű keret, a belső fényperem, a térbeli mélység és az oldalnézeti olvashatóság mintája. A két oldalsó portál ennek tükrözött perspektíváját követi.
- **Indok:** A portáloknak fizikai térbeli tárgyként kell körülölelniük a célvilágot, nem képkártyaként kell megjelenniük.

## ADR-013 – Az előcsarnok három másodperces érkezési idővonala

- **Állapot:** elfogadva
- **Döntés:** A háttér azonnal látható; ezt követi a balról jobbra futó fényút, a két üzenet közé rendezett DTA márkajel, majd a három portál megérkezése. A teljes első érkezés körülbelül 2,7–3 másodperc. Visszatérő vagy csökkentett mozgást kérő látogatónál rövid áttűnésre egyszerűsödik.
- **Indok:** A sorrend filmesen felépíti a márkaígéretet és az iránymutatás motívumát, de nem késlelteti hosszú intróval a választást.

## ADR-014 – A portálbelsők céljelenet-whitebox motívumokat kapnak

- **Állapot:** elfogadva
- **Döntés:** A HERO három portálja már Stage 0 állapotban is eltérő belső világlenyomatot mutat: a Fogorvosok portál klinikai/digitális workflow-t, a Miben segíthetünk? portál recepciós és tudástéri központot, a Fogtechnikusok portál labor- és technológiai környezetet sejtet. Ezek CSS-alapú, könnyen cserélhető whitebox rétegek, nem végleges assetek.
- **Indok:** A látogatónak már az előcsarnokban éreznie kell, hogy három különböző virtuális világba néz be, miközben a végleges képi irányt csak jóváhagyott whitebox után rögzítjük.

## ADR-015 – A középső portál mélységben hátrébb kerül

- **Állapot:** elfogadva
- **Döntés:** A HERO fedési sorrendje nem a DOM-sorrendet követi. A középső Miben segíthetünk? portál vizuális fókusz marad, de a mélységi rendben a legtávolabbi elem. A két oldalsó portál azonos előtéri rétegbe kerül, ezért mindkét oldalon rátakarhat a középső portálra.
- **Indok:** A korábbi beállítás egyes nézetekben azt az érzetet adta, mintha a jobb oldali Fogtechnikusok portál lenne legközelebb, mögötte a középső, majd a Fogorvosok. Az új szabály szimmetrikusabb és erősebb előcsarnok-mélységet ad.

## ADR-016 – A HERO felső márkasávja elsőbbséget kap

- **Állapot:** elfogadva
- **Döntés:** A HERO portáljai nem tölthetik ki túl agresszíven a teljes magasságot. A végleges DTA logónak és a két rövid üzenetnek külön, levegős felső márkasávot tartunk fenn. Ennek érdekében a portálok desktop és köztes nézetben körülbelül 50 vh körüli magasságra kerülnek a korábbi 57 vh helyett.
- **Indok:** Az előcsarnok első pillanata nem csak választási felület, hanem márkaérkezés is. A logó és a két mondat akkor hat prémium módon, ha nem szorulnak a portálok fölé, hanem saját csendes terük van.

## ADR-017 – A Fogorvosok tér kapja az első saját élmény-whiteboxot

- **Állapot:** elfogadva
- **Döntés:** A HERO jóváhagyása után az első részletesebb tartalmi tér a Fogorvosok útvonal. A SCENE 02 nem marad általános whitebox: saját klinikai/digitális workflow térmotívumot kap üvegfalas térrel, vizuális adatfolyam-sínnel, rendelői és labor oldali jelzésekkel. A szemantikus három állomás változatlanul elérhető marad.
- **Indok:** Az első vertical slice akkor bizonyítja a Virtual Space működését, ha a portál mögötti világ már önálló térként érződik. A Fogorvosok útvonal a legjobb első minta, mert később ugyanaz a rendszer skálázható a központi eligazodási és fogtechnikai terekre.

## ADR-018 – A Fogorvosok referencia nem hagyományos weboldal-layoutként kerül át

- **Állapot:** elfogadva
- **Döntés:** A beérkezett Fogorvosok master scene nem aloldal-sablonként, navigációs sávként vagy kártyás weboldalként kerül be a Virtual Space-be. A mostani whitebox csak a térélményt fordítja át: DTA-faljelzés, üvegfalas partneri környezet, központi digitális fog és az **Adat → Tervezés → Labor** munkafolyamat-ritmus jelenik meg.
- **Indok:** A projekt célja nem egy hagyományos fogászati landing oldal újrarajzolása, hanem az, hogy a portál mögött egy folytatódó, filmes tér nyíljon ki. Így a régi referencia hasznos vizuális forrás marad, de nem húzza vissza a koncepciót kártyás weboldal-logikába.

## ADR-019 – A HERO Fogorvosok-portálja a céljelenet sűrített előképe

- **Állapot:** elfogadva
- **Döntés:** A HERO Fogorvosok-portáljában nem általános rendelői ikon vagy díszlet jelenik meg, hanem a Fogorvosok tér sűrített előképe: halk DTA-faljelzés, központi digitális fog, vízszintes adatfolyam és három adatpont. A portál belsejébe nem kerül plusz magyarázó marketing- vagy szakmai szöveg.
- **Indok:** A portálélmény akkor hiteles, ha a látogató a kapuban ugyanannak a világnak az első részletét látja, amely belépés után teljes térként kibontakozik. Így a döntési pont továbbra is letisztult marad, de az áthaladás kevésbé tűnik oldalváltásnak.

## ADR-020 – A HERO → Fogorvosok átmenet a kattintott portálból indul

- **Állapot:** elfogadva
- **Döntés:** A Fogorvosok útvonal első átmenet-whiteboxa nem középről induló általános áttűnés. Kattintáskor a rendszer eltárolja a kiválasztott portál képernyőpozícióját és méretét, majd az átmeneti fénykapu ebből a kapuból tágul teljes képernyős maszkká. A Fogorvosok cél esetén az átmeneti maszk rövid ideig ugyanazt a DTA/fog/adatfolyam motívumot hordozza, mint a portálbelső.
- **Indok:** A Virtual Space alapígérete az, hogy a portálban látott világ teljesedik ki, nem az, hogy a felhasználó új aloldalra ugrik. Az eredetpozícióhoz kötött maszk erősíti a térfolytonosságot, miközben továbbra is könnyű, DOM/CSS-alapú és csökkentett mozgás mellett kihagyható marad.

## ADR-021 – A Fogorvosok három állomása térbeli útvonal, nem tartalmi blokklista

- **Állapot:** elfogadva
- **Döntés:** A Fogorvosok tér három tartalmi állomása központi fényút/adatfolyosó mentén rendeződik. Desktopon váltott térbeli oldalakat kap: az első és harmadik állomás bal oldali tartalmi panellel és jobb oldali térmotívummal, a második ennek fordított ritmusával jelenik meg. Mobilon ugyanez egyszerűsített, bal oldali vezérfonalas, függőleges bejárássá alakul.
- **Indok:** A belépés utáni élménynek folytatnia kell a portálgondolkodást. A látogató ne egymás alatti weboldalszakaszokat érzékeljen, hanem egy rendezett munkafolyamat-utat: adatindítás, közös tervezés, partneri kapcsolódás.

## ADR-022 – A Miben segíthetünk? tér első saját whitebox-világa központi eligazodási hub

- **Állapot:** elfogadva
- **Döntés:** A SCENE 03 nem általános információs oldal és nem éles AI-chat felület. Az első saját whitebox-világ egy nyugodt, emberközpontú eligazodási hub: információs házigazda, tudástár/kereső jel, könyvtári oldalfalak és következő lépést sejtető útvonalpontok jelennek meg. A HERO középső portálja ugyanezt a világot sűrítve mutatja: fogadópont, keresőfókusz, könyvtár- és útvonaljelek. A jelenetben látható kereső, AI-házigazda, regiszter vagy személyes útvonal csak prototípus-jel, nem működő adatkezelő funkció.
- **Indok:** A középső portál a látogató számára a legfontosabb eligazodási döntési pont. A portál mögötti világ akkor hiteles, ha belépés után nem kártyás weboldal, hanem egy önálló, bizalmat építő tér nyílik ki. Az adatvédelmi kapu és szakmai jóváhagyás nélkül viszont sem AI-chat, sem regisztráció, sem személyesadat-kezelés nem kerülhet éles vagy félreérthető működésbe.

## ADR-023 – A Miben segíthetünk? három állomása emberközpontú bejárás

- **Állapot:** elfogadva
- **Döntés:** A SCENE 03 három belső állomása nem hagyományos, egymás alatti tartalmi blokklista. A whiteboxban egy központi, puha fényút mentén rendeződnek: **Digitális recepció → Tudástár és kereső → Megoldási útvonal**. Desktopon a második állomás ellenoldalra kerül, hogy a látogató valódi térbeli haladást érzékeljen. Mobilon ugyanez egyszerű, bal oldali vezérfonalas, függőleges bejárássá alakul.
- **Indok:** A guidance tér szerepe nem az, hogy azonnal funkciókkal terhelje a látogatót, hanem hogy biztonságos, érthető irányérzetet adjon. A térbeli állomásritmus segít ezt megmutatni úgy, hogy közben nem ígér éles AI-chatet, keresőt, regisztrációt vagy személyesadat-kezelést.

## ADR-024 – A guidance végén lévő Saját rendelők portál aktív célvilág

- **Állapot:** elfogadva
- **Döntés:** A Miben segíthetünk? tér végén lévő **Saját rendelők** portál aktív célpontot kap. A portál a `Saját rendelők` térbe vezet, ahol a későbbi időpontfoglalás útja whitebox-szinten látható: rendelőválasztás, időpontfoglalási előszoba és kapcsolati kapu. Az éles időpontfoglalási modul továbbra is tervezett állapotú, nem kér és nem küld személyes adatot.
- **Indok:** A látogató számára a guidance út természetes vége az, hogy a megfelelő megoldás után eljuthat a saját rendelők és az időpontfoglalás felé. Mivel az időpontfoglalás személyes adatot és esetleg egészségügyi kontextust érinthet, működő foglalási űrlap csak külön adatvédelmi, jogi és szakmai jóváhagyás után kerülhet be.

## ADR-025 – Az AI-házigazda térbeli információs konzol, nem oldalsó widget

- **Állapot:** elfogadva
- **Döntés:** A Miben segíthetünk? tér központi interakciós pontja egy mosolygó, emberi jelenlétet sugalló információs házigazda és konzol. A későbbi AI-chat nem jobb alsó sarokban nyíló widgetként vagy oldalsó menüként jelenik meg, hanem ennek a térbeli konzolnak a háttérműködéseként. A jelenlegi buildben ez csak whitebox-jel: nem fut éles AI, nem kér adatot és nem ad szakmai tanácsot.
- **Indok:** A „Miben segíthetünk?” szlogen itt nyer valódi értelmet. A látogató nem menüt keres, hanem egy térben megérkezik egy fogadási ponthoz, ahol finom instrukciók segítik tisztázni, mire lehet szüksége. Ez jobban illik a Virtual Space alapelvéhez, mint egy hagyományos chatbot-buborék.

## ADR-026 – A házigazda első interakciója adatmentes irányválasztó

- **Állapot:** elfogadva
- **Döntés:** A Miben segíthetünk? tér első működő interakciós rétege nem chat-input, nem kérdőív és nem éles AI-válasz. A központi konzol pácienseknek és érdeklődő látogatóknak kínál biztonságos, adatmentes irányokat: tájékozódás a virtuális könyvtárban, a megfelelő irány megtalálása, majd továbblépés a Saját rendelők térbe. Ezek navigációs döntések, nem adatbekérő vagy diagnosztikai folyamatok.
- **Indok:** Így a látogató már most megtapasztalja, hogy a házigazda segít eligazodni, miközben a projekt nem nyit adatvédelmi, jogi vagy fogászati szakmai kockázatot. A későbbi AI-réteg erre a térbeli konzolra épülhet rá külön adatkezelési és szakmai jóváhagyási kapu után.

## ADR-027 – A guidance tér nem szakmai keresztmenü

- **Állapot:** elfogadva
- **Döntés:** A Miben segíthetünk? / guidance tér nem tartalmaz közvetlen fogorvosi partner- vagy fogtechnikai szakmai irányválasztót. A **Fogorvosok** és **Fogtechnikusok** célcsoportok továbbra is a HERO saját, külön portáljain keresztül érkeznek a nekik szánt világokba. A guidance tér célközönsége a páciens vagy érdeklődő látogató, aki közérthető tudástárban tájékozódik, majd a Saját rendelők portálon át léphet tovább.
- **Indok:** A három fő portál akkor marad tiszta és érthető, ha nem keverjük a B2B szakmai útvonalakat a páciensoldali eligazodási térbe. A guidance tér így nem másodlagos menü, hanem önálló virtuális könyvtár és tudásbázis.

## ADR-028 – A Saját rendelők tér rendelői előszoba, nem éles foglaló

- **Állapot:** elfogadva
- **Döntés:** A Saját rendelők első saját whitebox-rétege a guidance-ből érkező látogató rendelői előszobája. A tér három állomása: megérkezés a saját rendelőkbe, szolgáltatási irány kiválasztása, időpontfoglalási kapu. A konzol csak belső állomásokra irányít; nem kér adatot, nem tartalmaz működő időpontfoglalást és nem ad szakmai ajánlást.
- **Indok:** A guidance természetes folytatása az, hogy a látogató a megszerzett információ után lássa, hogyan juthat el a DTA saját rendelőihez. Az időpontfoglalás személyes adatot és egészségügyi kontextust érinthet, ezért csak adatvédelmi, jogi és szakmai jóváhagyás után válhat éles funkcióvá.

## ADR-029 – A Fogtechnika tér saját digitális labor-whitebox

- **Állapot:** elfogadva
- **Döntés:** A Fogtechnikusok / Fogtechnika fő portál mögött nem általános technológiai oldal, hanem önálló digitális labor-tér nyílik. Az első whitebox-réteg szakmai konzolt és laborvizuált kap: digitális adat-előkészítés, CAD/CAM gyártási ritmus, anyag és minőségi kapu. A HERO jobb oldali portálja ugyanezt sűrített előképként mutatja gép-, modell-, szerszám- és folyamatút-jelzésekkel.
- **Indok:** A három fő portál akkor válik egyenrangúvá, ha mindhárom mögött saját, felismerhető világ van. A fogtechnikai célcsoportnak nem páciensoldali tájékoztatásra és nem fogorvosi partneri térre van szüksége, hanem szakmai laborritmusra. A jelenlegi build továbbra is whitebox: nem tartalmaz végleges gép-, anyag- vagy szakmai teljesítményállítást.

## ADR-030 – A HERO első kamera-, perspektíva- és fénytesztje külön tér-réteg

- **Állapot:** elfogadva
- **Döntés:** A HERO előcsarnok nem egyetlen háttérképként kap mélységet. Külön CSS-whitebox réteg jeleníti meg a kameraérzetet: sejtett oldalsó térsíkok, padlófények, központi fókuszgyűrű, mélységvonalak és portálárnyékok. A portálkeretek belső fényperemet kapnak, hogy anyagszerűbb építészeti tárgyként viselkedjenek.
- **Indok:** A felhasználói vízió szerint a látogató nem weboldalra, hanem előcsarnokba érkezik. A külön kamera/fény réteg bizonyítja a filmes térélményt anélkül, hogy végleges renderelt assetre vagy 3D motorra lenne szükség. A réteg később assetre cserélhető, mobilon egyszerűsödik, csökkentett mozgás mellett pedig nem válik navigációs feltétellé.

## ADR-031 – A HERO első márkasáv- és portálarány-finomsága

- **Állapot:** elfogadva
- **Döntés:** A HERO felső márkasávja csendesebb, táblaszerű whitebox-kezelést kap: a jelenlegi DTA szöveg továbbra is helyőrző, de erősebb logóérzetet hordoz, miközben a két kísérő mondat halkabb marad. A három portál kissé kisebb, a fényút visszafogottabb, a portálok érkezése gyorsabb és természetesebb. A középső portál nem kerül előrébb mélységben, de finom fókuszfényt kap, hogy a kompozíció középpontja maradjon.
- **Indok:** Az előcsarnoknak prémium érkezési térként kell működnie, nem zsúfolt választóképernyőként. A portáloknak dominálniuk kell a döntést, de nem szoríthatják ki a márka első, nyugodt megjelenését. A végleges logóasset továbbra is külön tiszta exportot igényel.

## ADR-032 – A HERO portálbelsők filmes ablakréteget kapnak

- **Állapot:** elfogadva
- **Döntés:** Mindhárom HERO-portál belseje közös filmes ablaklogikát kap: hátsó fény, horizontvonal, küszöny-/padlófény és két finom perspektívavonal jelzi, hogy a nyílás mögött folytatódó tér van. A három célvilág továbbra is saját motívumot mutat, de ezek most közös mélységi rendszerbe kerülnek. Rámutatáskor vagy fókuszban csak finom fényreakció történik; csökkentett mozgásnál a mélységi elmozdulás kikapcsol.
- **Indok:** A portál nem lehet ikon vagy miniatűr plakát. A látogatónak már a HERO-ban azt kell éreznie, hogy a kapu mögött ugyanaz a világ nyílik ki, amelybe kattintás után belép. A közös ablakréteg később végleges képi/3D assetre cserélhető, de már most bizonyítja a kompozíciós szabályt.

## ADR-033 – A három fő portál átmeneti maszkja célvilág-motívumot kap

- **Állapot:** elfogadva
- **Döntés:** A HERO-ból induló három fő áthaladás ugyanabból a portálból táguló fénykapu-logikából épül, de a maszk belseje célvilág szerint változik. A Fogorvosok átmenet DTA/fog/adatfolyam jelet mutat, a Guidance átmenet fogadópont/kereső/könyvtár/útvonal motívumot, a Fogtechnika átmenet labor/gép/modell/folyamatút jelet. A visszatérés a HERO-ba továbbra is egyszerűbb, általános fénykapu maradhat.
- **Indok:** A Virtual Space egyik alapígérete, hogy a portálban látott világ teljesedik ki. Ha az átmeneti maszk is a választott célvilág nyelvét hordozza, az áthaladás kevésbé tűnik oldalváltásnak, és erősebben kapcsolja össze a HERO-portál előnézetét a megnyíló térrel.

## ADR-034 – A központi Guidance tér kapja az első látogatói visual slice fókuszt

- **Állapot:** elfogadva
- **Döntés:** A Fogorvosok útvonal megmarad technikai bizonyító mintának, de az első látogatói élmény- és látványfókusz a HERO → Miben segíthetünk? → Saját rendelők útvonalra kerül. A Guidance tér első visual slice köre nem éles AI-chatet, nem keresőt és nem adatkezelést épít, hanem a központi házigazda, a tudástárfalak, a halk irányválasztás és a Saját rendelők felé vezető hátsó portál térbeli karakterét erősíti.
- **Indok:** A projekt fő ígérete a látogatói eligazítás: „Miben segíthetünk?” Itt válik érthetővé, hogy a weboldal nem menürendszer, hanem virtuális fogadótér. A Fogorvosok útvonalon bizonyított portál- és jelenetrendszer így nem vész el, hanem a központi páciens/látogató útvonalon kap először erősebb, üzletileg is meghatározó karaktert.

## ADR-035 – A Guidance tudástárfalai és a mögöttes Saját rendelők tér külön assetlogikát kapnak

- **Állapot:** elfogadva
- **Döntés:** A Guidance v3 impozáns iránya megtartható, de a két oldalsó térfal nem maradhat pusztán dekoratív polc/növény/berendezés. Finom, nem túl hangsúlyos tudástár- és információs központ jelleget kell kapnia: absztrakt tudáskapszulák, üvegpolcok, halk fényindexek, rendezett információs archívumérzet, olvasható szöveg és menüszerű UI nélkül. A Guidance végén látható Saját rendelők portál mögötti világot külön céljelenetként is meg kell generálni, mert a portálban nem illusztráció, hanem a belépés után kiteljesedő tér előképe jelenik meg.
- **Indok:** A Virtual Space portálszabálya minden fő és belső portálra érvényes: a látogató a kapuban ugyanannak a világnak a részletét látja, amely áthaladás után kibomlik. Emiatt a hátsó Guidance-portál nem lehet általános arany fényfolt; a Saját rendelők első saját látványvilágát kell sűrítve mutatnia. Ugyanígy a Guidance oldalsó részei sem lehetnek egyszerű enteriőr-díszletek, mert a tér alapfunkciója a közérthető tájékozódás és tudástár.

## ADR-036 – A Guidance v4 és a Saját rendelők v1 jóváhagyott assetbontási alap

- **Állapot:** elfogadva
- **Döntés:** A `guidance-concept-still-v4.png` és a `clinics-concept-still-v1.png` jóváhagyott concept irányként szolgál a következő gyártási körhöz. Nem végleges assetként kerülnek be, hanem réteges assetbontási alapként: ezekből kell levezetni a háttér/depth, portálbelső, házigazda, konzol, tudástárfal, rendelői előszoba és fényréteg első webes beépítési tervét.
- **Indok:** A két kép együtt már bizonyítja a központi portálfolytonosságot: a Guidance tér nem önmagában álló látvány, hanem a Saját rendelők felé vezető út része. A következő kockázat nem újabb teljes kép generálása, hanem az, hogy a jóváhagyott irány gyors, reszponzív és akadálymentes webes rétegekre bontható-e.

## ADR-037 – A jóváhagyott concept képek első webes beépítése ideiglenes JPG rétegként történik

- **Állapot:** elfogadva
- **Döntés:** A Guidance v4 és a Saját rendelők v1 első webes előnézeti beépítése optimalizált JPG rétegekkel történik. A képek a gyors statikus preview és a későbbi Next/public útvonal számára is elérhetők: `assets/scenes/...` és `public/assets/scenes/...`. Ezek a rétegek a meglévő CSS-whitebox térlogika alá/mögé kerülnek: nem váltják ki a szemantikus tartalmat, a billentyűzetes navigációt vagy a későbbi réteges végleges assetgyártást.
- **Indok:** Így gyorsan ellenőrizhető a portálfolytonosság — HERO középső portál → Guidance tér, Guidance hátsó portál → Saját rendelők tér — anélkül, hogy a projekt túl korán végleges renderelt assetekhez kötődne. A JPG előnézetek kis fájlméretűek, gyorsak, és később cserélhetők valódi rétegelt exportokra.

## ADR-038 – A Guidance tudástár forrásolt lehetőségbemutató, nem diagnosztikai döntési fa

- **Állapot:** elfogadva
- **Döntés:** A Guidance tér tartalmi magja forrásolt, közérthető tudástár lesz. Saját szakmai anyagok, külső cikkek, videók, gyártói/szakmai magyarázatok és a régi `barcikafogtechnika.hu` / `dentaltechart.hu` oldalak témavilága használhatók, de csak összefoglalva, forrásjelöléssel és szakmai jóváhagyási státusszal. A régi honlap kizárólag inspirációs archívum és gondolatébresztő forrás; nem migrációs alap, nem átvételi lista és nem továbbfejlesztendő oldalstruktúra.
- **Indok:** A látogatói Guidance tér valódi értéke az, hogy segít eligazodni a fogpótlási, anyaghasználati és technológiai lehetőségek között, különösen az allergiamentesnek, fémmentesnek vagy modern digitális technológiához kötött megoldásoknál. Ez viszont nem válhat diagnózissá, személyre szabott kezelési ajánlássá vagy engedély nélküli tartalomátvétellé. A biztonságos forma: lehetőségek bemutatása, kérdések rendezése, források megjelölése, majd továbbvezetés a Saját rendelők felé.

## ADR-039 – A régi honlap csak inspirációs archívum, nem fejlesztési alap

- **Állapot:** elfogadva
- **Döntés:** A régi honlap tartalma nem kerül át a DTA Virtual Space-be fejlesztési alapként, tartalmi migrációként vagy modernizált layoutként. A régi oldal csak azt segíti megérteni, milyen témák, kérdések és anyaghasználati irányok jelentek meg korábban a DTA világában. Minden elfogadható téma teljesen új szemléletben, új térlogikával, mai digitális fogtechnikai kontextusban és szakmai jóváhagyási kapuval fogalmazható újra. A resin, filament és más konkrét anyag- vagy gyártási irányok példák, nem a teljes scope határai.
- **Indok:** A jelenlegi honlap több mint 10 évvel korábbi technológiai és webes állapotot tükröz. A cél nem nosztalgikus újracsomagolás, nem régi oldal továbbfejlesztése és nem technológiai katalógus, hanem egy új, téralapú, nyugodt és korszerű DTA élmény létrehozása. A biztonságos páciensoldali hangsúly: DTA szakmai tapasztalat, mai lehetőségek bemutatása, szakemberrel egyeztetendő kérdések és forrásolt jóváhagyási státusz.

## ADR-040 – A Guidance bemutat, a Saját rendelők szakmai segítségkérést indít

- **Állapot:** elfogadva
- **Döntés:** A Guidance tér a hagyományos és digitális technológiai megoldási irányokat mutatja be közérthető, forrásolt és szakmailag jóváhagyható módon. A Saját rendelők térben a látogató megoldáskeresési segítséget vagy konzultációs irányt kérhet a problémájára, de a weboldal nem ad diagnózist, nem készít kezelési tervet, és nem választ automatikusan anyagot vagy fogpótlási megoldást.
- **Indok:** A projekt célja az eligazítás és bizalomépítés, nem az online orvosi döntéshozatal. A látogató számára hasznos, ha megérti a hagyományos és digitális lehetőségek közötti fő különbségeket, de a konkrét szakmai döntés rendelői vizsgálatot, kompetens szakembert és jóváhagyott folyamatot igényel.

## ADR-041 – Az új honlap szemlélete elsődleges minden régi forrással szemben

- **Állapot:** elfogadva
- **Döntés:** A DTA Virtual Space minden tartalmi, vizuális és interakciós döntésében az új, téralapú, prémium, nem hivalkodó szemlélet az elsődleges. Régi honlap, régi szöveg, régi aloldal, korábbi marketingüzenet vagy külső referencia csak akkor használható, ha az új koncepcióba szervesen illeszkedik. Nem másolunk, nem modernizálunk régi layoutot, és nem építünk régi oldalstruktúrára.
- **Indok:** A projekt kezdettől fogva nem hagyományos weboldal, hanem virtuális térélmény. A régi források hasznosak lehetnek gondolatébresztőként, de a látogatónak új minőségű, nyugodt, korszerű, bizalmat építő világba kell megérkeznie.

## ADR-042 – A régi honlap leváltandó előzmény, nem kreatív alap

- **Állapot:** elfogadva
- **Döntés:** A régi `barcikafogtechnika.hu` / `dentaltechart.hu` jelenlét szerepe a projektben az, hogy ezt fogja leváltani az új DTA Virtual Space. A régi oldal nem kreatív brief, nem szerkezeti minta, nem tartalmi alap és nem vizuális referencia. A kreatív munka elsődleges forrása a DTA Virtual Space saját víziója, az alkotói iránytű és a jóváhagyott portál/tér szabályrendszer.
- **Indok:** A felhasználói szándék szerint nem régi honlap-korszerűsítés készül, hanem új szemléletű, forradalmian más fogtechnikai/fogászati webes élmény. A régi oldal említése csak a lecserélendő online jelenlét azonosítása miatt történt.

## ADR-043 – A Guidance tér átfogó kérdésalapú tudástér

- **Állapot:** elfogadva
- **Döntés:** A Guidance tér tartalmi architektúrája átfogó, kérdésalapú tudástérként épül tovább. A fő szervezőelv nem konkrét kezeléstémák listája, hanem nagy keresési irányok rendszere: látogatói helyzetek, megoldási családok, anyagok és esztétikai irányok, digitális technológia és laborfolyamat, esettanulmányok/videók/mélyítő magyarázatok, konzultációra készülés és Saját rendelők felé vezető út. Konkrét témák — például implantológia, implantátumok, fogsorok vagy cirkónium pótlások — ezek alatt jelenhetnek meg témakapszulaként. A tartalom minden esetben lehetőségbemutatás és kérdésrendezés, nem diagnózis, nem kezelési terv és nem automatikus megoldásválasztás.
- **Indok:** A látogató gyakran nem kész döntéssel és nem pontos szakkifejezéssel érkezik, hanem saját helyzetéből induló kérdésekkel. A DTA Virtual Space értéke az, hogy ezeket a kérdéseket nyugodt, közérthető térben rendezi, majd szükség esetén a Saját rendelők felé vezeti tovább. Az esettanulmányok és videók erősíthetik a megértést, de csak anonimizált, jogilag és szakmailag jóváhagyott, nem ígéret jellegű formában.

## ADR-044 – A Guidance tudáskártya első interakciója kapszula-előnézet

- **Állapot:** elfogadva
- **Döntés:** A Guidance témacsaládok első interakciós whiteboxa kártyaválasztásból és egy közös tudáskapszula-előnézeti panelből áll. A látogató kiválaszt egy nagy témacsaládot, a panel pedig röviden megmutatja: mit segít megérteni, milyen példatémák kerülhetnek alá, mi a biztonsági korlát, és hogyan vezethet tovább a Saját rendelők felé. Ez nem chat-input, nem kereső, nem kérdőív, nem diagnózis és nem adatbekérés.
- **Indok:** Így a tér már interaktívnak érződik, de nem nyit korai adatvédelmi vagy szakmai kockázatot. A látogató választási élményt kap, miközben a projekt megőrzi a jóváhagyási kapukat: szakmai állítás csak forrásolás és kontroll után, személyes út csak adatvédelmi/jogi jóváhagyás után kerülhet éles felületre.

## ADR-045 – A Guidance kapszulák első rétege tudásútvonal-vázlat

- **Állapot:** elfogadva
- **Döntés:** Minden nagy Guidance témacsalád alatt megjelenhet egy 3–5 elemes első tudásútvonal. Ezek a kapszulák konkrétabb témaneveket mutathatnak — például hiányzó fog, régi pótlás, implantátumra épülő megoldás, cirkónium, anyagérzékenység, CAD/CAM, 3D nyomtatás, esettanulmány vagy konzultációs kérdéslista — de csak szerkezeti és tájékozódási vázlatként. Nem tartalmazhatnak éles szakmai állítást, személyre szabott döntést, diagnózist, kezelési tervet, eredményígéretet vagy adatbekérést.
- **Indok:** A látogató számára szükséges egy következő mélységi szint, különben a nagy témacsaládok túl általánosak maradnak. A kapszulaútvonal segít megmutatni, merre lehet majd bővíteni a tudástárat, miközben a tartalmi kockázat kontroll alatt marad: a későbbi részletes cikkekhez, videókhoz és esetekhez külön forrásolás, szakmai, jogi és adatvédelmi jóváhagyás kell.

## ADR-046 – A Guidance részletes tudáskártya első mintája moduláris publikálási vázlat

- **Állapot:** elfogadva
- **Döntés:** A Guidance kapszulapanel harmadik rétege egy részletes tudáskártya-minta lehet. Minden nagy témacsaládhoz megjelenhet egy moduláris vázlat, amely megmutatja a későbbi tartalom szerkezetét: olvasókártya, videó- vagy ábrahely, esettanulmány- vagy folyamatmodul, konzultációs továbbvezetés, valamint forrás-, szakmai jóváhagyási és adatvédelmi státusz. A minta továbbra sem éles cikk, nem szakmai állítás, nem diagnózis, nem kezelési terv és nem adatbekérő funkció.
- **Indok:** A látogatói tudástár csak akkor válik valódi információs központtá, ha látható, hogyan mélyülhet tovább egy kapszula cikké, videóvá vagy esettanulmánnyá. A moduláris forma megőrzi a Virtual Space térélményét, miközben előre rögzíti a publikálási kapukat: forrásolás, szakmai jóváhagyás, jogi/adatvédelmi ellenőrzés és akadálymentes alternatíva nélkül a részletes tartalom nem válhat élessé.

## ADR-047 – Az első forrásolt Guidance tudáskártya a digitális fogtechnika folyamatát mutatja be

- **Állapot:** elfogadva
- **Döntés:** Az első forrásolt, de még szakmai jóváhagyás előtti Guidance tudáskártya a **Digitális folyamat** témacsaládhoz tartozik. A kártya címe: „Mit jelent ma a digitális fogtechnika?” A tartalom négy biztonságos lépésben magyarázza a digitális adatút, CAD-tervezés, CAM/gyártási ritmus és szakmai ellenőrzés kapcsolatát. Forrásirányként szabályozási és szakirodalmi alapok jelennek meg, de a kártya nem tesz eredmény-, pontossági, anyagalkalmassági vagy kezelési ígéretet.
- **Indok:** A látogató számára a digitális technológiai fejlődés az egyik legerősebb új DTA-téma, de magas szakmai kockázatú terület. Biztonságos első lépésként nem konkrét gépet, anyagot vagy megoldást állítunk a középpontba, hanem a folyamat megértését: hogyan kapcsolódhat össze rendelő, digitális tervezés, gyártási út és labor. Így a Guidance tér valódi tudástárrá mélyül, miközben megmarad a szakmai jóváhagyási kapu.

## ADR-048 – A CAD/CAM kártya a digitális folyamat második, kapcsolódó tudáskártyája

- **Állapot:** elfogadva
- **Döntés:** A CAD/CAM témát nem külön technológiai reklámoldalként, hanem a **Digitális folyamat** kapszula második, kapcsolódó forrásolt tudáskártyájaként jelenítjük meg. A kártya címe: „Mi az a CAD/CAM, és miért nem csak gépi gyártást jelent?” A tartalom a CAD-tervezés, CAM-gyártási út, anyag/rendeltetés és szakmai ellenőrzés négyes keretében magyaráz, eredmény-, pontossági vagy anyagalkalmassági ígéret nélkül.
- **Indok:** A CAD/CAM kifejezés látogató számára könnyen félreérthető: tűnhet automata gépi döntésnek vagy önmagában minőségi ígéretnek. A DTA Virtual Space feladata nem a technológiai rövidítés reklámozása, hanem annak megmutatása, hogyan illeszkedhet a digitális tervezés és gyártás egy emberi szakmai kontroll alatt álló folyamatba.

## ADR-049 – A 3D nyomtatás kártya rendeltetés- és anyagbiztonsági kapuval jelenik meg

- **Állapot:** elfogadva
- **Döntés:** A 3D nyomtatás témát a **Digitális folyamat** kapszula harmadik, kapcsolódó forrásolt tudáskártyájaként jelenítjük meg. A kártya címe: „3D nyomtatás a fogászati folyamatban: mire való, mire nem?” A tartalom a digitális fájl, rétegről rétegre építés, rendeltetés és utómunka/ellenőrzés négyes keretében magyaráz. Nem állítja, hogy minden 3D nyomtatott elem végleges fogpótlás, nem minősít resin vagy filament anyagot, és nem választ technológiát online.
- **Indok:** A 3D nyomtatás erős, modern és látványos téma, de páciensoldalon könnyen túlígérhető. A biztonságos DTA-szemlélet lényege, hogy nem az újdonságot reklámozzuk, hanem megmutatjuk: a 3D nyomtatás szerepe rendeltetéstől, anyagtól, gyártói előírástól, utómunkától és szakmai kontrolltól függ.

## ADR-050 – A resin és filament kártya nem anyagajánló, hanem rendeltetésmagyarázó

- **Állapot:** elfogadva
- **Döntés:** A resin és filament témát a **Digitális folyamat** kapszula negyedik, kapcsolódó forrásolt tudáskártyájaként jelenítjük meg. A kártya címe: „Resin és filament: mit jelentenek, és miért nem anyagajánlások?” A tartalom a resin, filament, rendeltetés és biológiai értékelés négyes keretében magyaráz. Nem állít allergiamentességet, biokompatibilitást, alkalmasságot, tartósságot vagy konkrét termékelőnyt.
- **Indok:** A resin és filament kifejezések látványos, modern anyagirányoknak tűnhetnek, de páciensoldalon könnyen félrevezetők, ha nincs mellettük rendeltetés, gyártói dokumentáció, utókezelési folyamat és szakmai jóváhagyás. A DTA Virtual Space ezért nem anyagot ajánl, hanem megmutatja, milyen kérdéseket kell tisztázni, mielőtt egy anyagról szakmai állítás születhet.

## ADR-051 – A minősített anyaghasználat kártya szabályozási és szakmai kaput zár a technológiai fejezet végén

- **Állapot:** elfogadva
- **Döntés:** A minősített, rendeltetésszerű anyaghasználat témát a **Digitális folyamat** kapszula ötödik, kapcsolódó forrásolt tudáskártyájaként jelenítjük meg. A kártya címe: „Miért fontos a minősített, rendeltetésszerű anyaghasználat?” A tartalom a rendeltetés, dokumentáció, feldolgozás és szakmai kontroll négyes keretében magyaráz. Konkrét anyag, CE-jelölés, gyártói adatlap, biológiai értékelés vagy megfelelőségi dokumentum nem válik automatikus kezelési vagy anyagválasztási állítássá.
- **Indok:** A digitális technológiai fejezet akkor biztonságos, ha nem áll meg a látványos anyagneveknél. A látogatónak értenie kell, hogy egy anyag használhatósága nem a marketingnévből következik, hanem a dokumentált rendeltetésből, gyártói előírásból, feldolgozásból, ellenőrzésből és a konkrét szakmai helyzetből.

## ADR-052 – A konzultáció előtti kérdéskártya adatmentes átvezető a Saját rendelők felé

- **Állapot:** elfogadva
- **Döntés:** A **Kérdések konzultáció előtt** témacsalád első forrásolt részletes kártyája adatmentes felkészítőként jelenik meg. A kártya címe: „Kérdések konzultáció előtt: mit érdemes magammal vinnem?” A tartalom a kiinduló kérdés, előzmények, lehetőségek/alternatívák és következő lépés négyes keretében segíti a látogatót. Nem kér be adatot, nem értékel panaszt, nem diagnosztizál és nem választ kezelést vagy anyagot.
- **Indok:** A Guidance tér természetes záró mozdulata nem az online döntés, hanem a jobb szakmai beszélgetésre való felkészülés. A látogató így a tudástárból nem kész megoldással, hanem rendezett kérdésekkel léphet tovább a Saját rendelők virtuális előszobája felé. Ez erősíti az eligazítás élményét, miközben megtartja a szakmai, jogi és adatvédelmi kapukat.

## ADR-053 – A Saját rendelők tér első útvonalpanelje adatmentes rendelői előszoba

- **Állapot:** elfogadva
- **Döntés:** A **Saját rendelők** tér külön rendelői útvonalpanelt kap: **Érkezés → Tisztázás → Foglalási kapu**. A panel megmutatja, hogyan válhat a Guidance térből hozott kérdés személyes szakmai beszélgetési iránnyá, de nem kér lokációt, panaszleírást, személyes adatot vagy egészségügyi adatot. Az időpontfoglalás továbbra is csak tervezett kapu.
- **Indok:** A Guidance-ből érkező látogató számára láthatóbbá kell tenni, mi történik a portálon túl. A rendelői tér így nem üres folytatás és nem hagyományos foglalóoldal, hanem a Virtual Space logikájába illeszkedő, biztonságos előszoba. Ez előkészíti a későbbi foglalási modult, de nem nyit adatvédelmi vagy szakmai kockázatot.

## ADR-054 – Az Időpontfoglalás kapu zárt, adatmentes előnézeti kapu

- **Állapot:** elfogadva
- **Döntés:** A **Saját rendelők** tér végén megjelenő **Időpontfoglalás** kapu nem aktív foglaló, nem CTA és nem űrlap. Zárt, tervezett állapotú adatkapuként jelenik meg: láthatóvá teszi a későbbi foglalási út helyét, de nem kér nevet, telefonszámot, e-mailt, panaszt, lokációt vagy egészségügyi adatot, és nem küld adatot.
- **Indok:** A látogatói út szempontjából fontos, hogy a Guidance → Saját rendelők folyamat végén már érzékelhető legyen a következő nagy állomás. Ugyanakkor az időpontfoglalás személyes és adott esetben egészségügyi adatkezelést érinthet, ezért csak külön adatvédelmi, jogi, szakmai és technikai jóváhagyási kapu után válhat éles funkcióvá.

## ADR-055 – A Saját rendelők tér rendelői orientációs szigetet kap

- **Állapot:** elfogadva
- **Döntés:** A **Saját rendelők** tér nem hagyományos foglalóoldalként és nem adatbekérő előszobaként fejlődik tovább. Külön rendelői orientációs szigetet kap, amely három adatmentes állapotot mutat: **Fogadópont → Szakmai beszélgetés → Zárt foglalási kapu**. A felső látvány is ezt a pontosabb dramaturgiát követi.
- **Indok:** A Guidance tudástárból érkező látogató számára a következő lépés nem azonnali űrlapkitöltés, hanem annak megértése, hogy a kérdései szakemberrel folytatott személyes beszélgetésben kaphatnak helyet. Így a tér emberközpontú és biztonságos marad, miközben előkészíti a későbbi időpontfoglalási modult.

## ADR-056 – A Saját rendelők felső látványa rendelői előtérré finomodik

- **Állapot:** elfogadva
- **Döntés:** A **Saját rendelők** felső jelenetében a foglalófelületre emlékeztető naptár- és panelmotívumok visszafogottabbak lesznek, miközben a tér rendelői előtér-jelleget kap: oldalfalak, mennyezeti fény, padlóút, halk várózóna, konzultációs nyílás és zárt kapu jelzi a folytatást.
- **Indok:** A látvány nem keltheti azt az érzetet, hogy a látogató már egy működő foglalóoldalon van. A cél a térbeli biztonság és a szakmai beszélgetés előkészítése: a látogató megérkezik, tájékozódik, majd később jóváhagyott adatvédelmi kapun keresztül léphetne foglalás felé.

## ADR-057 – A Saját rendelők tartalmi blokkjai egyetlen rendelői úttá állnak össze

- **Állapot:** elfogadva
- **Döntés:** A **Saját rendelők** tér rendelői konzolja, orientációs szigete és útvonalpanelje különálló blokkok helyett közös `clinic-journey` rétegbe rendeződik. A közös gerincvonal, ritmus és enyhe átfedés egyetlen folyamatos rendelői út benyomását erősíti.
- **Indok:** A térélmény gyengül, ha a látogató három egymás alá rakott panelt érzékel. A projekt filmes, téralapú logikájához jobban illik, ha a fogadóponttól a zárt foglalási kapuig vezető szakasz egységes, nyugodt útvonalként olvasható.

## ADR-058 – A Saját rendelők hátsó kapuja is a következő világ sűrített előképét mutatja

- **Állapot:** elfogadva
- **Döntés:** A **Saját rendelők** felső jelenetében látható zárt foglalási kapu nem marad üres vagy pusztán fényfoltos kontúr. A kapu mögött külön, sűrített whitebox-réteg jelenik meg: kisebb belső átjáró, oldalsó nyílások, küszönyfény és halk várómotívum jelzi a következő rendelői világot. Ez továbbra sem aktív foglalófelület, nem űrlap és nem CTA.
- **Indok:** A Virtual Space portálszabálya szerint a látogató a kapuban ugyanannak a világnak a részletét látja, amely később kibomolhat. Ha a clinics hátsó kapuja csak sematikus keret maradna, a térlogika megszakadna. A sűrített előkép erősíti a folytonosságot anélkül, hogy korai adatvédelmi vagy szakmai kockázatot nyitna.

## ADR-059 – A zárt adatkapu mögötti következő rendelői világ négyzónás whitebox-térképet kap

- **Állapot:** elfogadva
- **Döntés:** A **Saját rendelők** végén látható zárt adatkapu alatti preview nem három technikai bulletből áll tovább, hanem négyzónás whitebox-térképpé alakul. A négy első zóna: **Érkezési zóna**, **Konzultációs irány**, **Időablak előszoba**, **Adatvédelmi kapu**. Ezek még nem interaktív modulok, nem kérnek adatot és nem működő foglalási elemek.
- **Indok:** A kapu mögötti világ így már nem absztrakt ígéretként, hanem érthető térszerkezetként jelenik meg. Ez segít abban, hogy a projekt ne csússzon vissza hagyományos „foglalóoldal” logikába, hanem megőrizze a Virtual Space dramaturgiát: a látogató fokozatosan lép mélyebb rétegekbe, mindig világos kapukkal és korlátokkal.

## ADR-060 – A következő rendelői világ három konkrét rendelői iránnyal számol

- **Állapot:** elfogadva
- **Döntés:** A **Saját rendelők** kapu mögötti whitebox-világa három konkrét rendelői irányt vesz figyelembe: **NEAK rendelő Kazincbarcika**, **NEAK rendelő Ózd**, **magánrendelő Ózd – 2 székes**. Az érkezési zóna, a konzultációs irány és a későbbi időpontkérési logika már ezen az elágazáson alapul.
- **Indok:** A későbbi konzultációs és időpontkérési rendszer csak akkor marad hiteles és bővíthető, ha nem egy absztrakt „egy rendelő” modellre épül. A látogató számára is tisztább élmény, ha a rendszer már korán jelzi: a továbbhaladás valós rendelői helyszínekhez és eltérő működési ritmusokhoz kötődhet.

## ADR-061 – A magánrendelő kiemelt irány, a két NEAK rendelőnél kötelező a városszintű figyelmeztetés

- **Állapot:** elfogadva
- **Döntés:** A kapu mögötti rendelői routingban a **magánrendelő Ózd – 2 székes** kiemelt, prémium irányként jelenik meg. Ezzel párhuzamosan a két **NEAK** rendelőnél már az első whitebox-szinten láthatóvá kell tenni, hogy **Kazincbarcika** és **Ózd** külön városok, ezért a látogatót helyszínalapú döntésre kell terelni, mielőtt konzultációs vagy időpontkérési út felé menne tovább.
- **Indok:** A felhasználói élmény romlik, ha a látogató túl későn szembesül azzal, hogy a két NEAK irány eltérő városba vezet. A projekt célja nem az impulzív foglalási mozdulat erősítése, hanem a tudatos, jól értelmezett továbbhaladás. A kiemelt magánrendelő hangsúlyozható, de csak úgy, hogy közben a helyszínválasztás továbbra is világos marad.

## ADR-062 – A három rendelői ág nem külön térként, hanem közös helyszínválasztóval jelenik meg

- **Állapot:** elfogadva
- **Döntés:** A **Saját rendelők** kapu mögötti világában a három rendelői irány nem kap külön mini-portált vagy külön mini-teret. Helyette egyetlen közös rendelői előszobában maradunk, ahol egy egyszerű rendelőválasztó segítségével lehet kiválasztani: **NEAK Kazincbarcika**, **NEAK Ózd** vagy a kiemelt **magánrendelő Ózd – 2 székes** út felé menjen tovább a látogató. A kiválasztás a kapcsolódó konzultációs és időpontkérési whitebox-szöveget frissíti.
- **Indok:** A három külön mini-tér túlbonyolíthatná a tájékozódást, miközben a látogatónak itt elsősorban tiszta döntési segítségre van szüksége. A közös előszoba + helyszínválasztó megőrzi a valós rendelői különbségeket, de nem terheli túl a térélményt felesleges új elágazásokkal.

## ADR-063 – A kiválasztott rendelőhöz hangulat- és következő lépés-jelzés társul

- **Állapot:** elfogadva
- **Döntés:** A közös rendelőválasztó alatt a kiválasztott irányhoz három rövid, route-specifikus jelzés társul: **Hangulat**, **Fókusz**, **Következő lépés**. Ezek minden rendelőnél más hangsúlyt kapnak, és együtt erősítik a választás utáni első benyomást.
- **Indok:** A választó önmagában túl technikai lenne. A projekt téralapú logikájához jobban illik, ha a kiválasztás után rögtön érzékelhetővé válik az adott rendelői út karaktere: prémium, helyszíntisztázó vagy elkülönített helyi irány. Így a látogató nemcsak választ, hanem azonnal érzi is, merre halad tovább.

## ADR-064 – A Flexifogsor nem hátsó kapu, hanem kiemelt külön szakmai oldal

- **Állapot:** elfogadva
- **Döntés:** A **Fogtechnika** tér végén a **Flexifogsor** nem kapu mögötti új whitebox-világként jelenik meg. A projektlogikában ez egy már működő, külön szakmai oldal marad, amelyet itt kiemelt átvezetésként kell megjeleníteni. A hangsúlyos kapcsolódás utalhat arra, hogy ez kollégáknak szóló anyagrendelési és kurzusjelentkezési irány, de nem kell mögé új portálteret vagy sejtetett hátsó világot rajzolni.
- **Indok:** A felhasználói cél itt más, mint a fő Virtual Space terekben. A Flexifogsor jelenleg nem ugyanannak a filmes térnek következő mélyrétege, hanem önállóan működő szakmai honlap. A túl erős „portál a portálban” megoldás félrevezetné a látogatót, miközben a valós termékstruktúra egy külön, később korszerűsítendő oldalra mutat.

## ADR-065 – A Flexifogsor kiemelt átvezetése a valódi `flexifogsor.hu` címre mutat

- **Állapot:** elfogadva
- **Döntés:** A Fogtechnika tér végén a kiemelt Flexifogsor blokk már nem csak szemléltető elem, hanem tényleges külső linkként működik, és a `https://flexifogsor.hu` oldalra nyílik meg új lapon.
- **Indok:** A felhasználó pontosította, hogy a Flexifogsor már működő honlap. Emiatt a whitebox-prototípusban is helyesebb valódi szakmai átvezetésként kezelni, mint további helyőrzőként.

## ADR-066 – A HERO Fogtechnikusok portál képe és a teljes Fogtechnika tér ugyanannak a világnak két nézete

- **Állapot:** elfogadva
- **Döntés:** A HERO harmadik, **Fogtechnikusok** portáljában látható kép nem önálló illusztráció és nem zárt vignetta, hanem a később megnyíló **Fogtechnika** tér fókuszált előnézete. Kattintás után ennek ugyanaz a világa teljesedik ki: a portálban látható labor-karakter, fényhangulat és központi szakmai fókusz megmarad, csak a környező tér tágul ki.
- **Indok:** A Virtual Space filmes dramaturgiája akkor következetes, ha a portál nem új képet cserél a látogató elé, hanem betekintést ad ugyanabba a világba, amelybe belép. Ez biztosítja, hogy a Fogorvosok, a Guidance és a Fogtechnika irány ugyanazon elv szerint működjön: sejtetés a portálban, kiteljesedés belépés után.

## ADR-067 – A HERO-ban portálok vannak, nem dobozok, fülkék vagy garázsnyílások

- **Állapot:** elfogadva
- **Referencia:** `docs/HERO_PORTAL_ALAPDOKUMENTUM_01.hu.md`
- **Döntés:** A HERO három alsó eleme kizárólag különálló portálként értelmezhető. Tilos minden olyan vizuális megoldás, amely a kompozíciót falba vágott nyílássá, garázssorrá, üzletportállá, dobozszerű fülkévé vagy kiállított boxrendszerré alakítja. A középső portál közel frontális fókuszpont; a két oldalsó portál egymás tükörképe, és a középpont mögötti nagy belső tér felé futó perspektívát kell adja.
- **Indok:** A korábbi Hero-képi iterációk megmutatták, hogy a „különálló test” vagy „erősebb futurisztikus háttér” önmagában nem elég. Ha a portál geometriai logikája rossz, az egész Hero elveszíti átjáró-jellegét és tárgyi / garázsszerű irányba csúszik. A projekt alapígérete viszont nem három kiállított objektum, hanem három világba vezető filmes átjáró.

## ADR-068 – A HERO whitebox újra márkajeles és jelenet-előképes alapot kap

- **Állapot:** elfogadva
- **Döntés:** A HERO további iterációi nem az üres, csak drótvázas portál-elrendezésből indulnak tovább. A whitebox-alap mostantól három összetevőt kötelezően együtt mutat: **valódi DTA márkajel**, **atmoszférikus háttértér**, valamint **a három célvilág képi előképe a portálokban**. A szöveg a két rögzített üzenetre korlátozódik: „Mi állunk a mosolyok mögött.” és „Segítünk eligazodni a lehetőségek között.”
- **Indok:** A túl redukált Hero-szint elvesztette a prémium belépési élményt, ezért félrevezető whiteboxká vált: már nem azt kommunikálta, milyen irányba épül a végső nyitókép. A projekt következő Hero-köreihez olyan alap kell, amely egyszerre őrzi a helyes portálgeometriát és már érzékelteti a tényleges márka- és térhangulatot.

## ADR-069 – A szolgáltatáskatalógus adatvezérelt, kategóriánként épülő modul

- **Állapot:** elfogadva
- **Döntés:** A szolgáltatáskatalógus nem képgenerálási sorozatként, hanem önálló, adatvezérelt webmodulként indul. A kategóriák és szolgáltatásnevek strukturált adatfájlban szerepelnek, a vizuálok pedig első körben saját, absztrakt technikai jelrendszerként jelennek meg, amíg a végleges, szakmailag jóváhagyott képek elkészülnek. A megjelenés fogorvosi partneranyagnak készül: árlista és megrendelőlap mellé tehető, fejezetlapos katalógus, nem sűrű kártyás adatlista. Az alfejezetek rövid, jóváhagyható magyarázó szöveget kapnak, hogy a szolgáltatásnevek ne önmagukban álljanak.
- **Indok:** A képenkénti fotórealisztikus iteráció túl lassú és szakmailag sérülékeny alapnak bizonyult. A működő katalógus előbb rendezi a szolgáltatásstruktúrát és a navigációt; a képi anyag ezután kategóriánként, jóváhagyási kapukkal cserélhető. Az absztrakt saját vizuálrendszer jogtiszta, egységes megjelenést ad, és nem állít konkrét fogászati formát ott, ahol még nincs jóváhagyott asset. A B2B cél miatt a felület kevesebb ismétlődő elemet és erősebb fejezethierarchiát használ, hogy lapozhatóbb szakmai segédanyag legyen.

## ADR-070 – A szolgáltatáskatalógus partneri használati és kontrollréteget kap

- **Állapot:** elfogadva
- **Döntés:** A katalógus fejezetei nem csak szolgáltatáscsoportokat és tételneveket tartalmaznak, hanem partneri használati kontextust, munkaritmust és szakmai kontrollpontot is. A kockázatos termékígéretnek hangzó megnevezések helyett egyeztetésközpontú, jóváhagyható nyelvet használunk.
- **Indok:** A fogorvosi partneranyag akkor használható árlista és megrendelőlap mellett, ha nem csak felsorol, hanem jelzi, milyen adatot, anyagot, rendeltetést vagy rendelői döntést kell tisztázni. Így a katalógus nem kezelési ajánlás és nem anyagígéret, hanem rendezett szakmai előszoba.

## ADR-071 – A szolgáltatáskatalógus orvosi kérdésnézetre egyszerűsödik

- **Állapot:** elfogadva
- **Döntés:** A katalógus elsődleges felülete nem statisztikai összefoglalóként vagy többnézetes dashboardként működik, hanem az orvos fő kérdésére válaszol: **mit tud a DTA elkészíteni?** A keresés mellett hét fő munkairány marad: **Rögzített pótlások**, **Kivehető pótlások**, **Kombinált pótlások**, **Implant pótlások**, **Ortodonciai készülékek**, **Regisztrációs segédeszközök** és **Digitális tervezés**. A digitális implanttervezés az implant pótlások alá, a sínek az ortodonciai készülékek alá, a harapás- és állcsontviszony-rögzítő eszközök a regisztrációs segédeszközök alá, a smile design / wax-up / mock-up jellegű előtervek pedig a digitális tervezés alá rendeződnek. A tételszámok, nézetstatisztikák és külön gyorslista-kapcsoló kikerülnek. A csoportosítás megmarad, de az egyes csoportokban az „Elkészíthető munkák” lista kap elsőbbséget.
- **Indok:** Fogorvosi partnerhelyzetben a katalógus akkor használható gyorsan, ha nem mérőszámokat vagy technológiai háttérfejezeteket mutat első szinten, hanem rendelhető / egyeztethető munkacsoportokat és konkrét laborfeladatokat. A szakmai kontrollpont fontos marad, de halkabb kiegészítő információként jelenik meg.

## ADR-072 – A katalógus nem anyag- vagy technológiaválaszték, hanem labor-munkacsoport lista

- **Állapot:** elfogadva
- **Döntés:** A fogorvosi partnerkatalógus látható tartalma a laborban készíthető munkák csoportjaira épül. Nem elsődleges szempont, hogy egy munka milyen technológiával, géppel vagy konkrét anyaggal készül; ezek a részletek a labor szakmai kompetenciájához és az esetegyeztetéshez tartoznak. A látható listák ezért rövid, orvosi szempontból felismerhető munkaneveket használnak: koronák, hidak, fogsorok, implantpótlások, sablonok, aligner/retainer és sínek.
- **Indok:** A fogorvos partnerként elsősorban azt akarja gyorsan látni, hogy a labor milyen munkát tud elkészíteni. Az anyag- és technológiai részletek túl korán választási zajt okoznának, miközben a konkrét döntés úgyis rendelő-labor egyeztetésben születik meg.

## ADR-073 – A szolgáltatáskatalógus képes fogadófelületet és lenyíló munkacsoport-kártyákat kap

- **Állapot:** elfogadva
- **Döntés:** A fogorvosi katalógus első képernyője nagy, jellemző labor/partner háttérképpel fogad: **Dental Tech-Art Kft.** / **Szolgáltatásaink**. A cégnév a fejléc magasabb részében, kisebb vizuális súllyal jelenik meg, hogy a háttérkép kompozíciója és a szolgáltatáscím maradjon a fő fókusz. A kereső után hét háttérképes, lenyitható munkacsoport-kártya jelenik meg, desktop nézetben egy sorba rendezve. A csoport neve a kártyán belüli fő felirat; a részletes munkalisták csak megnyitás után látszanak.
- **Indok:** Az orvos érkezéskor erős, bizalomépítő vizuális képet és gyors munkacsoport-választást kap, nem táblázatos katalógust, statisztikai összesítőt vagy technológiai menüt.

## ADR-074 – A munkacsoport-kártyák kategóriaspecifikus laborminta-képeket kapnak

- **Állapot:** elfogadva
- **Döntés:** A szolgáltatáskatalógus kártyái fokozatosan általános laborháttérről munkacsoport-specifikus mintaképekre váltanak. A kártyák fő feliratai munkairányokat neveznek meg: rögzített, kivehető, kombinált és implant pótlások, valamint ortodonciai készülékek. A kártyaképek világosabb képi fedést kapnak, hogy a laborminták jobban látszódjanak, miközben a fehér felirat olvasható marad. A rögzített pótlások első kártyaképe szemből látható, mintán ülő cirkon körhíd jellegű laborminta, felirat és betegjelenet nélkül. A kivehető pótlások kártyaképe szemből látható fogatlan gipszmintát mutat, a front-részletén papilla incisiva jellegű középső részlettel és az oldalsó felülethez illesztett finom gipsz/gingiva textúrával, fölötte az eredeti fogsor formáját és méretét követő, 180 fokkal megfordított teljes anatómikus fogsorral, fém vagy implant elem nélkül. A kombinált pótlások kártyaképe egymást kiegészítő labormintát mutat: a mintán csak hat frontfog látszik, az oldalsó részek anatómiai gingiva-felszínként jelennek meg; a fölé helyezett kivehető részből ezek a frontfogak hiányoznak. A kivehető részen két széles, tömörebb, frontközeli akril kapocsforma jelenhet meg a rajz szerinti karakterrel, a fogsor alapanyagával és színével összemosva, de bal külső oldali külön hurok vagy plusz elem nem; a kártyán csak a fogsor akril színe lett természetesebb, a motívum és kompozíció változatlan marad. Az implant pótlások kártyaképe szemből látható fogatlan mintát mutat fém stéggel/bárral, fölötte 180 fokkal megfordított, anatómiailag részletesebb teljes fogsorral, amelynél az akril alap és az alsó kontúrvonal a stég felé formált. Az ortodonciai készülékek kártyája szemből látható gipszmintát, átlátszó sín/aligner jellegű elemet és finom retainer-drótot mutat tiszta laborhátteren; a hosszabb felirat két sorban, a második sor finom jobbra tolásával jelenik meg, hogy a kép és a cím együtt töltsék ki a kártyát. A regisztrációs segédeszközök kártyája feliratmentes, anatómiai metszeti jellegű képet kap: normál zárású alsó-felső fogazat és maxilla-mandibula reláció látszik csontkontúrokkal. A Gothic Arch Tracer a fogak mögötti háttérrétegben jelenik meg. Az egész motívum kisebb és távolabbi, így nem takarja be a kártyát. Az alsó kék rész vestibulárisan a fogak előtt fut, de visszafogott méretben és halványabb opacitással, hogy ne domináljon. A tárgy mögé most laborháttér került, hogy a kártyán ne tűnjön lebegő kivágásnak. A felső kék elem sokkal halványabb, palatumra illeszkedő metszeti rétegként jelenik meg, ugyanakkor határozott külső kontúrt kap, hogy anatómiai támaszként olvasható maradjon. A központi csavar vastagabb és állítható, hegyes csúcsban végződik, amely a vízszintes fémlemez felszínéhez ér. A kék elemek nem érnek össze zárt frontkeretté, hanem támasz- és hordozóelemként működnek. A csavar áttetsző része a metszők mögött marad, a TMI körüli szalagok pedig finom, árnyalt piros anatómiai jelként jelennek meg. A Digitális tervezés kártyája a korábbi monitoros laborháttérre épül: a nagy kijelzőn szabályos alsó-felső fogazat látszik digitális hálóval, mérőpontokkal és CAD-tervezési segédvonalakkal, szoftverfeliratok és logók nélkül.
- **Indok:** A fogorvos gyorsabban érti a kategóriát, ha a kártya képe konkrét, felismerhető laborfeladatot mutat. A mintán bemutatott tárgyias kép biztonságosabb és szakmaibb, mint a szájban vagy kezelési helyzetben ábrázolt jelenet.

## ADR-075 – A munkacsoport-kártyák kattintás után fókuszált munkamenüt nyitnak

- **Állapot:** elfogadva
- **Döntés:** A szolgáltatáskatalógus kártyái alaphelyzetben képes kategóriaválasztók. Kattintás után teljes képernyős fókusznézetre váltanak: csak a kiválasztott kártya és a saját, menüszerű lenyíló része marad látható, amely az adott csoport elkészíthető munkáit alcsoportokba rendezve mutatja. Kereséskor a találatos kártyák automatikusan nyitva vannak. A kártyaképek nem a látható sorrendhez, hanem a munkacsoport saját azonosítójához kötődnek, hogy fókusznézetben is mindig a helyes kategóriakép jelenjen meg. A fókusznézetben a kép kapja a szabad függőleges teret, az alsó munkacsoport-menü pedig tartalommagasságon, három egyenletes oszlopba rendezve marad. Így a laborminta teteje és alsó irányú formája se vágódik le; a felirat a kép alsó széléhez közelebb kerül, a sötétítés pedig főként a felirat mögött marad, hogy a képmező tisztábban látszódjon. A hétkártyás főoldali bővítés után is ez marad a kattintás utáni alapélmény: nem több kártya nyílik egyszerre, hanem egyetlen kiválasztott kártya jelenik meg nagyban.
- **Keresőszöveg:** A főoldali kereső felirata "Keresés a pótlások típusai között", mert a katalógus már nem általános munkalistát, hanem pótlástípusokra épülő szakmai belépést mutat.
- **Indok:** A fogorvosnak a képes első választás után gyorsan kell eljutnia a konkrét laborban készíthető munkákhoz. A teljes képernyős fókusznézet megszünteti a fejléc, kereső és szomszédos kártyák vizuális zaját, a kategóriához kötött képkezelés pedig megakadályozza, hogy a nyitott kártya téves vizuális jelet kapjon.

## ADR-076 – A munkatípusokra kattintva szakmai szöveges részletpanel nyílik

- **Állapot:** elfogadva
- **Döntés:** A lenyíló munkamenüben nem a teljes szöveges mező kattintható, hanem csak az egyes konkrét munkatípusok, ha azokhoz már készült szakmai tartalom. Első mintaként a Korona, majd azonos szerkezetben a Híd és a Csapos műcsonk munkatípus kap jóváhagyandó szöveges panelt, képek nélkül. A panel a fogalmat, anyag szerinti, technológia szerinti és rétegrend/típus szerinti bontást, valamint a labor felé hasznos egyeztetési adatokat mutatja.
- **Felületi pontosítás:** Minden szakmai részletpanel egységes, tiszta fülrendszerben jelenik meg, nem négy, egyszerre látható oszlopban. A Korona, Híd, Csapos műcsonk, kivehető és kombinált pótlások paneljei visszamenőleg is ugyanazt a szerkezetet használják: Fogalma, Típus szerint / Anyag szerint / Technológia szerint és az adott munkatípus további szakmai nézetei külön választható füleken látszanak. Az egyeztetési adatok minden panelen külön lenyitható blokkba kerülnek. Így a felület egyszerűbb, egységesebb, és a hosszú szakmai tartalmak nem nőnek túl a képernyőn.
- **Tartalmi pontosítás:** A Korona fogalma a fogorvos által előkészített, preparált csonkra vagy implantátum-felépítményre készített rögzített pótlásként szerepel. Anyag szerinti bontásként a klinikailag értelmezhető korona-típusok maradnak: fém korona CoCr, NiCr vagy titánium alapanyagból, fémkerámia, monolitikus és leplezett cirkónium, lítium-diszilikát / préskerámia, PMMA, kompozit, acetál, PEEK, nyomtatott resin, filament alapú és flexibilis anyagcsaládok.
- **Menüegyszerűsítés:** A Koronák blokkban csak a Korona marad külön kattintható munkatípus. Az esztétikai, ideiglenes és teljes fém korona nem külön menüpontként jelenik meg, mert ezek a Korona szakmai paneljében már anyag, technológia és rétegrend szerint szerepelnek; keresési fogalomként továbbra is megtalálhatók.
- **Híd tartalom:** A Híd a fogorvos által előkészített, több párhuzamosan preparált csonkra vagy implantátum-felépítményre készített, több tagból álló rögzített pótlásként szerepel, amely a foghiányok pótlásával és a rágófunkció visszaállításával komplett esztétikus rehabilitációt tesz lehetővé.
- **Főfogalom-menü:** A rögzített pótlások fő menüszintje rövid, orvosnak gyorsan olvasható megnevezésekre egyszerűsödik: Korona, Híd, Csapos műcsonk. A híd altípusai alapvetően nem külön menüpontok, hanem kereshető fogalmak és a szakmai panel részei; kivételként a nagy fesztávú, egyedi tervezést igénylő fémmerevített cirkónium híd külön kattintható szakmai vázlatot kap.
- **Csapos műcsonk tartalom:** A Csapok és műcsonkok blokkban a fő kattintható elem Csapos műcsonk néven jelenik meg. A panelben a csap retenciós szerepe, a megmaradt foganyag/ferrule jelentősége, valamint két típus szerepel jóváhagyandó szakmai vázlatként: a szájban történő cementezést követően preparált csonkként funkcionáló csapos műcsonk és a leplezést követően kész, teljes funkcionalitással cementezhető csapos "sapkás" műcsonk. Anyagként titánium, CoCr, NiCr, cirkónium és PEEK jelenik meg. A megfogalmazás külön jelzi, hogy ez a katalógusrész a laborban készített csapos pótlási elemekre fókuszál; a rendelőben készülő direkt üvegszálas felépítés külön orvosi döntés és munkafolyamat.
- **Fémmerevített cirkónium híd:** A rögzített pótlások Hidak blokkjában külön, jóváhagyandó szakmai vázlatként jelenik meg a nagy fesztávú, reverse engineeringgel vagy visszatervezéssel készülő cirkónium / hybrid implant munka, amelynél titánium vagy CoCr bar / merevítőelem egyedi laboroldali terv szerint segítheti a szerkezet stabilitását és a terheléselosztást. A panel külön utal a Blender for Dental iBar, exocad Bar Module és 3Shape implant bridge / implant bar jellegű digitális munkafolyamatokra, valamint az átmenő csavarok és csavarcsatornák tervezési szerepére. Nem általános sablonmegoldásként vagy törésmentességi ígéretként, hanem nagy fesztávú konstrukciók repedési és törési kockázataira adott, esetfüggő labor-rendelői egyeztetésként szerepel.
- **Kivehető pótlások tartalom:** A Kivehető pótlások kártya az első kártyához hasonló szakmai panelrendszert kap. A fő belépők: Teljes fogsor, Részleges fogsor, Kapcsok és klipszek. A panelek teljes és részleges foghiányok kivehető pótlásokkal történő laboroldali ellátását mutatják, anyagként akril, semiflexibilis akril, flexibilis nylon/poliamid, Acetal (POM, polioximetilén), PEEK, flexibilis resinek és nylon/poliamid filamentek szerepelnek jóváhagyandó szakmai vázlatként. A fémes kiegészítők külön kezelendők: titánium és CoCr fémlemez/váz részleges pótlásokhoz, titánium vagy CoCr kapcsok/retenciós elemek, illetve fémhálók és fémsúlynövelők kiegészítő labor-elemként. Az aloldali panelek külön megjelenítik az anyagérzékenység esetén egyeztethető allergiamentes/fémmentes irányokat és a szilikonnal alábélelt fogsorokat.
- **Kombinált pótlások tartalom:** A Kombinált pótlások kártya ugyanebben a rendszerben kap szakmai paneleket. A fő belépők: Kombinált részleges fogsor, Fémlemezes kombinált pótlás, Frézelt vállhoz illeszkedő részleges pótlás, Teleszkópos pótlás, Csúsztatós pótlás és Stéges részleges pótlás. A tartalom a rögzített primer rész és a kivehető szekunder rész együttműködését magyarázza: retenció, megtámasztás, vezetés, behelyezési irány, frézelt váll/vezetősík, finommechanikai attachment, teleszkóp és stég/bar szerint. Komplex esetekben a kombinált pótlás egymásra épített szuprastruktúrákból álló rendszerként jelenik meg: primer rögzített rész, szekunder váz vagy alaplemez, retenciós attachment-szint és fogsoralap/fogpótló rész együtt alkotja a teljes konstrukciót. A legprecízebb kivitelezés érdekében a digitális design külön hangsúlyt kap: a behelyezési irány, anyagvastagság, retenciós felszínek, attachment-pozíciók, szekunder váz, fogsoralap, higiéniai tér és okklúziós viszonyok hagyományos próbákkal összehangolt, közös tervezési rendszereként szerepel. A csúsztatós pótlásnál külön hangsúlyt kap a rejtett elhorgonyzás esztétikai jelentősége: mosolyzónában a finommechanikai elem kapocsmentesebb, kevésbé látható megtartást adhat a hagyományos kapcsokhoz képest. Ugyanitt megjelenik az OT Cap / OT Unilateral jellegű, hídhoz kapcsolódó féloldali klipszes elhorgonyzás is, amely egyes distalis vagy unilaterális hiányoknál implantációt kiváltó vagy halasztó implantmentes alternatívaként mérlegelhető, kizárólag esetfüggő indikációval. Az MK1 attachment és más reteszes / zárható elhorgonyzások egyedi igény szerint, megrendelésre készülő finommechanikai opcióként szerepelnek; a tervezésnél a helyigény, nyitási irány, páciens általi kezelhetőség, javíthatóság és higiénia külön egyeztetendő. A stéges részleges pótlásnál a stégprofil és a retenciós rendszer is megjelenik: Dolder jellegű egyszerűbb stég-klipsz/rider kapcsolat, PRECI-HORIX jellegű horizontális elhorgonyzás, illetve stégbe épített vagy stégbe integrált retenciós elemek. A stég egy vagy több fogat átívelő rejtett elhorgonyzásként, attachmentekkel kombinálva is szerepel; a jobb retenciós biztonság érdekében fém-műanyag és fém-fém retenciós felszínek, illetve több retenciós szint kialakítása is egyeztethető. Anyagként CoCr, titánium, akril, cirkónium/fémkerámia primer elemek, Acetal és PEEK alaplemez / szekunder váz irányok, nylon/poliamid és cserélhető retenciós betétek jelennek meg jóváhagyandó vázlatként, allergiamentes vagy fémmentes irány külön esetegyeztetéssel.
- **Implant pótlások tartalom:** Az Implant pótlások kártya is ugyanazt az egységes szakmai panelrendszert használja. A fő belépők: Implantátumos korona, Implantátumos híd, Csavarozott pótlás, Cementezett pótlás, Egyedi felépítmény, TiBase felépítmény, All-on-4, All-on-6, Full Arch rehabilitáció, Ideiglenes teljes íves rehabilitáció, Pilot Guide, Sleeve Guide, Fully Guided, Stackable Guide, Bone Reduction Guide és Immediate Loading Guide. A tartalom a laboroldali implantprotetikai együttműködésre fókuszál: implant rendszer, scanbody, implantkönyvtár, csavarcsatorna, emergence profile, felépítmény, passzív illeszkedés, higiéniai tér, okklúzió, full arch fogfelállítás és próbafázisok. A sebészeti és pozicionálási guide-oknál a CBCT / scan illesztés, sleeve, támaszkodási forma, pinrögzítés, fully guided protokoll, bone reduction, stackable munkafolyamat és immediate loading segédlet csak rendelői terv alapján, klinikai döntést nem helyettesítő laboroldali vázlatként szerepel. A Stackable Guide külön panelként többrészes, egymásra épülő sablonrendszerként szerepel, ahol alap- vagy rögzítő sablon, csontredukciós sablon, implantfúró sablon és ideiglenes pótlást pozicionáló sablon is kapcsolódhat egymáshoz, kizárólag esetfüggő terv szerint. Minden implantprotetikai állítás továbbra is "Szakmai vázlat, jóváhagyandó" jelöléssel jelenik meg.
- **Regisztrációs segédeszközök tartalom:** A főoldal új kártyája a pótlásokhoz kapcsolódó rendelői-laboroldali segédeszközöket külön fő belépőként kezeli. A fő elemek: Gothic Arch Tracer, Massad Jaw Recorder, Scan referencia-jig, Harapási sablon, Egyéni kanál és Próbatalp. A megfogalmazás az állcsontviszony, centrális reláció, harapási regisztráció, record base, arch scan / scan referencia és lenyomatvételi segédeszközök laboroldali elkészítésére vagy adaptálására fókuszál, rendelői munkafolyamathoz igazítva.
- **Digitális tervezés tartalom:** A főoldal új Digitális tervezés kártyája a nem konkrét pótlástípushoz kötött, hanem előkészítő és kommunikációs digitális munkákat fogja össze. A fő elemek: Smile Design, Digitális wax-up, Mock-up terv, Digitális fogfelállítás, Protetikai visszatervezés és Arcscan / fotó referencia. A tartalom a mosolyvonal, fogforma, wax-up, mock-up, digitális fogfelállítás, full arch / implantprotetikai visszatervezés és fotó- vagy arcscan-referencia szerepét jóváhagyandó szakmai vázlatként mutatja.
- **Indok:** A fogorvosnak így nem kell új képi vagy navigációs rétegbe lépnie: a kategória képe megmarad fő vizuális horgonynak, alatta pedig célzott szakmai szöveg segíti a munkatípus pontosítását. A jóváhagyandó jelölés biztosítja, hogy szakmai állítás végleges tartalomként csak ellenőrzés után maradjon éles.







