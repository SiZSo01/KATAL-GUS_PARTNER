const scenes = {
  hero: {
    id: "hero",
    title: "DTA Virtual Space",
    accent: "#b8f5e7",
    soft: "rgba(184, 245, 231, 0.18)",
  },
  dentists: {
    id: "dentists",
    code: "SCENE 02",
    title: "Fogorvosok",
    intro: "Partneri tér a rendelőből érkező adattól a követhető laborfolyamatig.",
    accent: "#74d9c1",
    soft: "rgba(116, 217, 193, 0.2)",
    stops: [
      ["01", "Esetindítás és digitális adat", "A rendelőből érkező információ rendezett útvonalon indul el a labor felé."],
      ["02", "Közös tervezési ritmus", "A rendelő és a labor ugyanazt a folyamatot látja: állapot, visszajelzés, következő lépés."],
      ["03", "Partneri kapcsolódás", "A cél egy nyugodt, egyértelmű út az első szakmai egyeztetés elindításához."],
    ],
  },
  guidance: {
    id: "guidance",
    code: "SCENE 03",
    title: "Segítünk eligazodni",
    intro: "Pácienseknek és érdeklődő látogatóknak szóló virtuális tudástár, ahol a DTA szakmai tapasztalata, a hagyományos megoldások és a mai digitális fogtechnikai lehetőségek közérthető kérdésirányokká rendeződnek.",
    accent: "#dab9ff",
    soft: "rgba(218, 185, 255, 0.2)",
    futureExit: "Saját rendelők",
    futureTarget: "clinics",
    stops: [
      ["01", "Információs házigazda", "A látogatót a tér közepén megjelenő házigazda-konzol fogadja. Nem feltételez problémát és nem kér adatot, hanem segít elhelyezni, milyen kérdésre vagy irányra keres választ."],
      ["02", "Kérdésből tudástér", "A tudástár a látogató saját helyzetéből indul: helyzetek, megoldási családok, anyagok, digitális folyamatok, esetek, videók és konzultációra felkészítő kérdések rendeződnek átfogó témacsaládokká. Ez nem éles kereső, nem diagnózis és nem kezelési terv, hanem biztonságos tájékozódási szerkezet."],
      ["03", "Átjárás a Saját rendelőkbe", "Ha a látogató már érti, merre szeretne továbbmenni, a tér végén megjelenő portálon át a Saját rendelők virtuális előszobájába léphet — a prototípusban személyes adat megadása nélkül."],
    ],
  },
  clinics: {
    id: "clinics",
    code: "SCENE 03B",
    title: "Saját rendelők",
    intro: "A guidance térből érkező látogató itt lép át a DTA saját rendelőinek nyugodt előterébe: amit a tudástárban megértett, az itt szakmai beszélgetésre vihető kérdéssé rendeződik. A tér nem diagnosztizál, nem készít kezelési tervet és nem kér adatot.",
    accent: "#ffd9a8",
    soft: "rgba(255, 217, 168, 0.2)",
    futureExit: "Időpontfoglalás",
    futureExitDescription:
      "Az éles időpontfoglalási modul zárt, későbbi kapuja. A jelenlegi prototípus csak a foglalási út helyét mutatja; személyes vagy egészségügyi adat megadása nem lehetséges.",
    stops: [
      ["01", "Megérkezés és megnyugvás", "A látogató a tudásbázisból érkezik egy nyugodt rendelői előtérbe, ahol a kérdései még nem panaszlapként, hanem beszélgetési irányként jelennek meg. A prototípus nem kér lokációt, panaszleírást vagy személyes adatot."],
      ["02", "Szakmai beszélgetés előkészítése", "A megszerzett információk alapján a látogató láthatja, milyen témákat érdemes szakemberrel tisztázni. Ebben a buildben ez biztonságos, közérthető whitebox-jel: nem diagnózis, nem kezelési terv és nem szakmai ajánlás."],
      ["03", "Zárt időpontfoglalási kapu", "A rendelői út végén jelenik meg a későbbi időpontfoglalási kapu. A kapu mögött már látszik a következő rendelői réteg sűrített előképe, de működő foglalás, páciensadat-kérés és külső integráció csak adatvédelmi, jogi és szakmai jóváhagyás után kerülhet ide."],
    ],
  },
  technology: {
    id: "technology",
    code: "SCENE 04",
    title: "Fogtechnika",
    intro: "Szakmai digitális labor-tér fogtechnikusoknak: a HERO portáljában látható fókuszált laborvilág itt teljesedik ki a beérkező adattól a gyártási ritmuson át a minőségi kontrollig.",
    accent: "#f0bd79",
    soft: "rgba(240, 189, 121, 0.2)",
    futureExit: "Flexifogsor",
    futureHref: "https://flexifogsor.hu",
    futureExitDescription:
      "A Flexifogsor külön működő szakmai oldalának közvetlen megnyitása új lapon: szakmai fórum, bérmunka, együttműködés és szakmai támogatás.",
    stops: [
      ["01", "Digitális adat előkészítése", "A beérkező digitális információ rendezett laborfolyamatba kerül. A whitebox itt nem sötét gépteret, hanem világos, természetesebb fényű bemeneti munkakörnyezetet mutat: az adat-előkészítés és az első értelmezési pontok helyét, szakmai állítás nélkül."],
      ["02", "CAD/CAM gyártási ritmus", "A CAD/CAM, marás, nyomtatás és köztes laborállomások térbeli ritmusa itt válik láthatóvá. Ebben a buildben ez még folyamatjel: a monitor, a printerek, a scanner és a közös munkahely csak whitebox-szereplők, nem gép- vagy anyagígéret."],
      ["03", "Anyag és minőségi kapu", "A laborút végén az anyagválasztás, artikulátoros ellenőrzési pontok és későbbi szakmai jóváhagyási kapuk helye jelenik meg. Innen külön szakmai irányként nyílik a működő Flexifogsor oldal: szakmai fórum, bérmunka, együttműködés és szakmai támogatás."],
    ],
  },
};

const portals = [
  ["dentists", "Fogorvosok", "Belépés a fogorvosi együttműködés és digitális workflow terébe."],
  ["guidance", "Miben segíthetünk?", "Belépés a digitális recepció és tudástár központi terébe."],
  ["technology", "Fogtechnikusok", "Belépés a digitális labor és a fogtechnikai technológiák terébe."],
];

const guidanceTopicFamilies = [
  {
    body: "Foghiány, régi pótlás, bizonytalan fogsor, esztétikai igény vagy első tájékozódás.",
    capsuleLead:
      "Segít elindulni akkor is, ha a látogató még nem tudja a pontos szakkifejezést. A cél a saját helyzet megnevezése, nem a megoldás kiválasztása.",
    capsuleTitle: "Helyzetfelismerő indítás",
    pathway: [
      {
        kind: "Kérdésindító",
        text: "Általános tájékozódási pont, ha a látogató foghiány miatt keresi az első érthető irányt.",
        title: "Hiányzó fog vagy fogak",
      },
      {
        kind: "Helyzetkapszula",
        text: "Segít összerendezni, milyen kérdéseket érdemes feltenni egy régi korona, híd vagy fogsor kapcsán.",
        title: "Régi pótlás cseréjén gondolkodom",
      },
      {
        kind: "Komfortirány",
        text: "Nem értékel panaszt, csak megnevezi, hogy a komfort, stabilitás vagy megszokás külön téma lehet.",
        title: "Bizonytalan vagy kényelmetlen fogsor",
      },
      {
        kind: "Esztétikai indítás",
        text: "Általános kérdésirány azoknak, akik mosolyuk megjelenéséről szeretnének közérthetően tájékozódni.",
        title: "Esztétikai változtatást szeretnék",
      },
    ],
    safety: "Nem mondja meg, milyen kezelésre van szükség; csak segít megtalálni az első érthető kérdésirányt.",
    topics: ["hiányzó fog vagy fogak", "régi pótlás cseréje", "komforttal vagy esztétikával kapcsolatos kérdés"],
    note: "Hétköznapi kérdésből indul",
    status: "Belépési pont",
    tag: "01",
    title: "Milyen helyzetből indulok?",
  },
  {
    body: "Rögzített, kivehető, ideiglenes, hosszabb távú vagy implantátumra épülő irányok.",
    capsuleLead:
      "Áttekintő térkép arról, milyen fő megoldási családok létezhetnek. Itt még nem döntünk, csak rendet teszünk a lehetőségek között.",
    capsuleTitle: "Megoldási térkép",
    pathway: [
      {
        kind: "Áttekintés",
        text: "Közérthető bevezető a rögzített pótlások világába, személyes alkalmasság megállapítása nélkül.",
        title: "Rögzített pótlási irányok",
      },
      {
        kind: "Áttekintés",
        text: "Megmutatja, hogy a kivehető és kombinált megoldások önálló témacsaládot alkothatnak.",
        title: "Kivehető és kombinált lehetőségek",
      },
      {
        kind: "Témakapszula",
        text: "Az implantátumhoz kapcsolódó kérdések helye, kizárólag általános tájékozódási szinten.",
        title: "Implantátumra épülő megoldások",
      },
      {
        kind: "Átmeneti út",
        text: "Az ideiglenes vagy átmeneti megoldások szerepét mutató későbbi magyarázó kapszula helye.",
        title: "Ideiglenes megoldások szerepe",
      },
    ],
    safety: "A konkrét megoldás csak rendelői vizsgálat és szakmai egyeztetés után válhat személyessé.",
    topics: ["rögzített pótlási irány", "kivehető vagy kombinált megoldás", "implantátumra épülő lehetőség"],
    note: "Lehetőségek, nem döntés",
    status: "Témacsalád",
    tag: "02",
    title: "Megoldási családok",
  },
  {
    body: "Cirkónium, kerámia, fémmentes irányok, komfort és anyagérzékenységi kérdések.",
    capsuleLead:
      "A látogató közérthető formában találkozhat az anyagokkal, esztétikai szempontokkal és érzékenységi kérdésekkel.",
    capsuleTitle: "Anyag- és komfortirányok",
    pathway: [
      {
        kind: "Anyagkapszula",
        text: "A cirkónium témája itt kap majd közérthető, forrásolt és szakmailag jóváhagyható magyarázatot.",
        title: "Cirkónium pótlás – mit érdemes kérdezni?",
      },
      {
        kind: "Anyagkapszula",
        text: "Kerámia és esztétikai irányok bemutatása általános lehetőségként, eredményígéret nélkül.",
        title: "Kerámia és esztétikai szempontok",
      },
      {
        kind: "Érzékenységi kapu",
        text: "Az allergia- vagy anyagérzékenységi kérdések csak óvatos, forrásolt és szakmailag kontrollált formában kerülhetnek ide.",
        title: "Anyagérzékenység és fémmentes irányok",
      },
      {
        kind: "Komfortirány",
        text: "Segít különválasztani az anyag, forma, megszokás és tisztíthatóság általános kérdéseit.",
        title: "Komfort, tisztíthatóság, megszokás",
      },
    ],
    safety: "Anyagalkalmasságot, allergiamentességet vagy tartósságot csak forrásolt és szakmailag jóváhagyott módon állítunk.",
    topics: ["cirkónium és kerámia irányok", "fémmentes megoldási lehetőségek", "anyagérzékenységi kérdések"],
    note: "Szakmai kontroll szükséges",
    status: "Forrásolandó",
    tag: "03",
    title: "Anyagok és esztétika",
  },
  {
    body: "Digitális tervezés, CAD/CAM, 3D folyamatok, rendelő és labor együttműködése.",
    capsuleLead:
      "Megmutatja, hogyan kapcsolódhat egymáshoz a rendelő, a digitális tervezés és a fogtechnikai labor munkája.",
    capsuleTitle: "Digitális háttér",
    pathway: [
      {
        kind: "Folyamatkapszula",
        text: "Közérthető út a rendelői adatindítástól a labor felé, személyes adatkezelés nélkül.",
        title: "Digitális lenyomat és adatút",
      },
      {
        kind: "Technológiai vázlat",
        text: "A CAD/CAM témát folyamatként mutatja be, nem pontossági vagy minőségi ígéretként.",
        title: "CAD/CAM tervezési és gyártási ritmus",
      },
      {
        kind: "Technológiai vázlat",
        text: "A 3D nyomtatás helyét és szerepét később forrásolt, anyagfüggetlen alapmagyarázatban lehet bemutatni.",
        title: "3D nyomtatás: resin és filament kérdéskör",
      },
      {
        kind: "Kapcsolati út",
        text: "Megmutatja, hogyan lehet a rendelő és a fogtechnikai labor közötti együttműködést érthetően ábrázolni.",
        title: "Rendelő és labor együttműködése",
      },
    ],
    safety: "Ez folyamatmagyarázat, nem gép-, pontossági vagy eredményígéret.",
    topics: ["digitális tervezés és adatút", "CAD/CAM munkafolyamat", "3D nyomtatás és laborfolyamat szerepe"],
    note: "Folyamatmagyarázat",
    status: "Technológia",
    tag: "04",
    title: "Digitális folyamat",
  },
  {
    body: "Anonimizált példák, rövid videók, ábrák és laborfolyamat-részletek a megértéshez.",
    capsuleLead:
      "A látogató példákból, ábrákból és rövid magyarázó videókból értheti meg, hogyan nézhet ki egy-egy általános folyamat.",
    capsuleTitle: "Példákból tanulni",
    pathway: [
      {
        kind: "Esetvázlat",
        text: "Anonimizált, általános esetút későbbi helye, amely nem ígér ugyanilyen eredményt más látogatónak.",
        title: "Esettanulmány előtte-utána ígéret nélkül",
      },
      {
        kind: "Videókapszula",
        text: "Rövid, feliratozható magyarázó videó helye, amely egy fogalom vagy folyamat megértését segíti.",
        title: "Rövid magyarázó videó",
      },
      {
        kind: "Ábra",
        text: "Egyszerű, akadálymentes alternatívával kísért folyamatábra helye.",
        title: "Folyamatábra lépésről lépésre",
      },
      {
        kind: "Laborbepillantás",
        text: "A fogtechnikai háttér bemutatása hangulatként és folyamatként, szakmai állítás nélkül.",
        title: "Laborfolyamat-részlet",
      },
    ],
    safety: "Az esetek csak anonimizált, jóváhagyott, nem eredményígéretként megfogalmazott formában jelenhetnek meg.",
    topics: ["anonimizált esetút", "rövid magyarázó videó", "folyamatábra vagy laborrészlet"],
    note: "Nem eredményígéret",
    status: "Mélyítés",
    tag: "05",
    title: "Esetek és videók",
  },
  {
    body: "Milyen kérdéseket, tapasztalatokat és szempontokat érdemes magával vinnie?",
    capsuleLead:
      "Segít összerendezni, mit érdemes megkérdezni vagy szóban jelezni egy személyes szakmai egyeztetésen.",
    capsuleTitle: "Konzultációra készülés",
    pathway: [
      {
        kind: "Felkészülés",
        text: "Általános kérdéslista, amely segít emlékezni a fontos szempontokra a rendelői egyeztetésen.",
        title: "Milyen kérdéseket vigyek magammal?",
      },
      {
        kind: "Összegzés",
        text: "Segít átgondolni, milyen korábbi tapasztalatokat érdemes szóban jelezni szakembernek.",
        title: "Korábbi tapasztalatok összerendezése",
      },
      {
        kind: "Elvárás-tisztázás",
        text: "Közérthető kapszula arról, hogyan lehet elkülöníteni komfort-, esztétikai és időbeli szempontokat.",
        title: "Mit szeretnék jobban érteni?",
      },
      {
        kind: "Biztonsági kapu",
        text: "Emlékeztető arra, hogy a végső döntés személyes vizsgálat és szakmai egyeztetés témája.",
        title: "Mit nem dönt el a honlap?",
      },
    ],
    safety: "Nem gyűjt adatot és nem értékel panaszt; csak általános kérdéslistát és felkészülési szempontokat ad.",
    topics: ["fontos kérdések listája", "korábbi tapasztalatok átgondolása", "mire figyeljen a konzultáción"],
    note: "Konzultációra készít",
    status: "Biztonságos",
    tag: "06",
    title: "Kérdések konzultáció előtt",
  },
  {
    body: "Ha a látogató a saját helyzetét szeretné tisztázni, innen lép tovább a rendelői térbe.",
    capsuleLead:
      "A tudástárból akkor vezet tovább, amikor a látogató már nem általános információt keres, hanem saját helyzetét szeretné szakemberrel tisztázni.",
    capsuleTitle: "Átjárás a rendelői térbe",
    pathway: [
      {
        kind: "Átjárás",
        text: "A látogató a tudástárból a Saját rendelők virtuális előszobájába léphet tovább.",
        title: "Belépés a Saját rendelőkbe",
      },
      {
        kind: "Segítségkérés",
        text: "A későbbi szakmai segítségkérés iránya, éles adatbekérés nélkül.",
        title: "Saját helyzet tisztázása szakemberrel",
      },
      {
        kind: "Foglalási előszoba",
        text: "A későbbi időpontfoglalási út helye, amely csak adatvédelmi és jogi kapu után lehet éles.",
        title: "Időpontfoglalás felé vezető kapu",
      },
    ],
    safety: "A továbbhaladás még mindig adatmentes előszoba; éles foglalás és adatbekérés csak külön jóváhagyási kapu után kerülhet ide.",
    topics: ["szakmai segítség kérése", "rendelői előszoba", "későbbi időpontfoglalási út"],
    note: "Saját rendelők portál",
    status: "Továbbvezetés",
    tag: "07",
    title: "Saját rendelők felé",
  },
];

const guidanceKnowledgeDrafts = {
  "01": {
    checks: [
      "Forrás: DTA szakmai anyag és jóváhagyható külső magyarázat szükséges.",
      "Szakmai jóváhagyás: a publikálás előtt kötelező.",
      "Adat: nem kér panaszleírást, képet vagy személyes egészségügyi adatot.",
    ],
    lead:
      "Ez a minta azt mutatja meg, hogyan nyílhat ki egy hétköznapi kérdésből induló kapszula anélkül, hogy a honlap kezelést választana a látogató helyett.",
    modules: [
      {
        label: "Olvasókártya",
        text: "Rövid, közérthető magyarázat arról, milyen témákat érdemes megérteni, ha valaki hiányzó fog vagy fogak miatt tájékozódik.",
        title: "Mit jelent az első tájékozódás?",
      },
      {
        label: "Videóhely",
        text: "Későbbi, feliratozható magyarázó videó helye: milyen kérdésköröket érdemes szakemberrel tisztázni.",
        title: "Milyen kérdések merülhetnek fel?",
      },
      {
        label: "Ábrahely",
        text: "Egyszerű vizuális út: helyzet felismerése → kapcsolódó témák → szakmai egyeztetés a Saját rendelőkben.",
        title: "Helyzetből kérdésirány",
      },
      {
        label: "Továbbvezetés",
        text: "Finom kapu a rendelői előszoba felé, ha a látogató a saját helyzetét szeretné személyesen tisztázni.",
        title: "Mikor érdemes továbbmenni?",
      },
    ],
    status: "Mintakártya · forrásolandó",
    title: "Hiányzó fog vagy fogak – első tudáskártya-vázlat",
  },
  "02": {
    checks: [
      "Forrás: szakmai magyarázat és DTA által jóváhagyott fogalomhasználat kell.",
      "Szakmai jóváhagyás: minden megoldáscsaládnál kötelező.",
      "Korlát: nem rangsorol, nem ajánl és nem választ megoldást.",
    ],
    lead:
      "A minta a nagy megoldási családokat térképként mutatja meg: a látogató átlátást kap, de nem kap személyre szabott döntést.",
    modules: [
      {
        label: "Olvasókártya",
        text: "Általános bemutatás arról, hogy a rögzített, kivehető, kombinált vagy implantátumhoz kapcsolódó irányok külön kérdéskörök.",
        title: "Milyen nagy családok létezhetnek?",
      },
      {
        label: "Fogalommagyarázat",
        text: "Az implantátumra épülő megoldások külön témaként jelenhetnek meg, alkalmassági vagy kezelési állítás nélkül.",
        title: "Implantátumhoz kapcsolódó kérdések",
      },
      {
        label: "Ábrahely",
        text: "Későbbi, egyszerű megoldástérkép: több út létezhet, a személyes döntés szakmai egyeztetés témája.",
        title: "Megoldáscsalád-térkép",
      },
      {
        label: "Konzultációs kapu",
        text: "A látogató azt viheti tovább, milyen nagy irányokról szeretne beszélni a rendelői térben.",
        title: "Mit kérdezzek meg személyesen?",
      },
    ],
    status: "Mintakártya · döntés nélkül",
    title: "Fogpótlási lehetőségek – tájékozódási minta",
  },
  "03": {
    checks: [
      "Forrás: anyag- és gyártói információ csak ellenőrizhető, jogtiszta formában.",
      "Szakmai jóváhagyás: allergia-, tartósság- vagy alkalmassági állítás előtt kötelező.",
      "Korlát: nem használ általános „allergiamentes”, „jobb” vagy „garantált” ígéretet.",
    ],
    lead:
      "Ez a kártyaminta az anyagokat és esztétikai irányokat nyugodt, kérdésalapú módon kezeli: mit érdemes megérteni, és mit kell szakemberrel tisztázni.",
    modules: [
      {
        label: "Olvasókártya",
        text: "Cirkónium, kerámia vagy fémmentes irányok közérthető bemutatása forrásolás és szakmai kontroll után.",
        title: "Anyagirányok emberi nyelven",
      },
      {
        label: "Biztonsági kapu",
        text: "Anyagérzékenységi kérdéseknél a honlap csak tájékozódási szempontokat adhat, egyéni következtetést nem.",
        title: "Érzékenység és fémmentes kérdések",
      },
      {
        label: "Képi hely",
        text: "Későbbi, visszafogott kép- vagy videórészlet az anyagok, fény és esztétikai hatás magyarázatához.",
        title: "Mit láthat a látogató?",
      },
      {
        label: "Konzultációs kapu",
        text: "A kártya kérdésekhez vezet: milyen szempontokat érdemes szakemberrel megbeszélni.",
        title: "Mit kell tisztázni személyesen?",
      },
    ],
    status: "Mintakártya · szakmai kontroll",
    title: "Anyagok és esztétika – részletes minta",
  },
  "04": {
    checks: [
      "Forrás: digitális workflow, CAD/CAM és 3D nyomtatás csak ellenőrzött magyarázatként.",
      "Szakmai jóváhagyás: minden technológiai állítás előtt szükséges.",
      "Korlát: nem ígér pontosságot, eredményt vagy automatikusan jobb megoldást.",
    ],
    lead:
      "A minta azt mutatja, hogyan lehet a mai digitális fogtechnikai hátteret folyamatként bemutatni: adat, tervezés, gyártási ritmus, ellenőrzés.",
    modules: [
      {
        label: "Olvasókártya",
        text: "Közérthető bevezető a rendelőből induló digitális adatok és a laborfolyamat kapcsolatáról, személyes adatkezelés nélkül.",
        title: "Digitális lenyomat és adatút",
      },
      {
        label: "Folyamatábra",
        text: "CAD/CAM, tervezés, marás vagy nyomtatás helye a munkafolyamatban, technológiai túlzás nélkül.",
        title: "CAD/CAM és gyártási ritmus",
      },
      {
        label: "Technológiai kapszula",
        text: "A 3D nyomtatás, resin és filament kérdésköre alapfogalmi szinten, anyag- és indikációs döntés nélkül jelenhet meg.",
        title: "3D nyomtatás: alapfogalmak",
      },
      {
        label: "Videóhely",
        text: "Későbbi rövid, feliratozható animáció arról, hogyan kapcsolódhat össze rendelő, digitális tervezés és labor.",
        title: "Rendelő és labor együttműködése",
      },
    ],
    article: {
      intro:
        "A digitális fogtechnika nem egyetlen gép vagy varázsmegoldás, hanem egymásra épülő munkafolyamat. Segíthet abban, hogy a rendelőből érkező információ, a tervezés, a gyártási út és az ellenőrzés átláthatóbban kapcsolódjon össze.",
      limits: [
        "Nem állítjuk, hogy a digitális folyamat minden esetben jobb eredményt ad.",
        "Nem állítjuk, hogy minden 3D nyomtatott vagy CAD/CAM elem minden helyzetben végleges fogpótlásra alkalmas.",
        "Nem választunk anyagot, technológiát vagy kezelési utat online.",
      ],
      points: [
        {
          label: "01 · Adatút",
          text: "A folyamat indulhat digitális lenyomattal, szkenneléssel vagy más digitális adattal, de a kapott információ értelmezése továbbra is szakmai feladat.",
          title: "A digitális adat csak a kezdőpont",
        },
        {
          label: "02 · Tervezés",
          text: "A CAD-tervezés a forma, illeszkedés és gyártási előkészítés nyelve lehet, de nem dönt a páciens helyzete vagy a megfelelő megoldás helyett.",
          title: "A tervezés emberi kontrollal működik",
        },
        {
          label: "03 · Gyártási út",
          text: "A CAM-folyamat kapcsolódhat maráshoz vagy additív gyártáshoz, például 3D nyomtatáshoz. A konkrét használat anyagtól, rendeltetéstől és szakmai döntéstől függ.",
          title: "Többféle gyártási ritmus létezhet",
        },
        {
          label: "04 · Ellenőrzés",
          text: "A digitális háttér nem váltja ki a fogorvosi és fogtechnikai ellenőrzést. A weboldal ezért folyamatot mutat be, nem diagnózist vagy kezelési tervet ad.",
          title: "A döntés nem kerül át a honlapra",
        },
      ],
      questions: [
        "Az én esetemben milyen szerepe lehet a digitális tervezésnek?",
        "Melyik lépés történik rendelői, és melyik laboroldali folyamatban?",
        "Milyen anyag vagy gyártási út jöhet szóba, és milyen korlátai vannak?",
        "Milyen információ szükséges ahhoz, hogy szakemberrel felelősen lehessen továbbmenni?",
      ],
      sources: [
        {
          label: "FDA",
          title: "3D Printing of Medical Devices",
          url: "https://www.fda.gov/medical-devices/products-and-medical-procedures/3d-printing-medical-devices",
        },
        {
          label: "BMC Oral Health",
          title: "The complete digital workflow in fixed prosthodontics: a systematic review",
          url: "https://bmcoralhealth.biomedcentral.com/articles/10.1186/s12903-017-0415-0",
        },
        {
          label: "BMC Oral Health",
          title: "Intraoral scanners in dentistry: a review of the current literature",
          url: "https://bmcoralhealth.biomedcentral.com/articles/10.1186/s12903-017-0442-x",
        },
      ],
      status: "Forrásolt vázlat · szakmai jóváhagyás előtt",
      title: "Mit jelent ma a digitális fogtechnika?",
    },
    relatedArticles: [
      {
        intro:
          "A CAD/CAM kifejezés a számítógéppel támogatott tervezés és a számítógéppel támogatott gyártás kapcsolatára utal. A látogató számára a legfontosabb nem a rövidítés, hanem az, hogy a digitális terv hogyan válhat ellenőrzött, gyártható munkafolyamattá.",
        limits: [
          "Nem állítjuk, hogy minden fogpótlásnak CAD/CAM eljárással kell készülnie.",
          "Nem állítjuk, hogy a CAD/CAM név önmagában pontosságot, tartósságot vagy jobb eredményt garantál.",
          "Nem választunk anyagot, gyártási utat vagy fogpótlási megoldást online.",
        ],
        points: [
          {
            label: "01 · CAD",
            text: "A CAD a digitális tervezési oldal: a forma, a munkafázis és a gyártási előkészítés rendezését segítheti, de a szakmai szempontokat nem helyettesíti.",
            title: "Tervezés digitális munkatérben",
          },
          {
            label: "02 · CAM",
            text: "A CAM a gyártási oldalhoz kapcsolódik: a tervből géppel követhető gyártási út készülhet. Ez lehet marási vagy más gépi folyamat, a konkrét rendeltetéstől függően.",
            title: "A tervből gyártási út lesz",
          },
          {
            label: "03 · Anyag",
            text: "A CAD/CAM nem anyagnév. A felhasználható anyagot, annak rendeltetését és korlátait gyártói előírás, fogtechnikai tapasztalat és szakmai döntés alapján kell kezelni.",
            title: "Az anyag nem a rövidítésből következik",
          },
          {
            label: "04 · Kontroll",
            text: "A digitális munkafolyamat értéke az előkészítés és követhetőség lehet, de a végső szakmai ellenőrzés továbbra is emberi felelősség.",
            title: "A szakmai kontroll marad középen",
          },
        ],
        questions: [
          "A tervezés melyik része történik digitális folyamatban?",
          "Milyen gyártási út kapcsolódhat a tervhez?",
          "Milyen anyag jöhet szóba, és mi annak rendeltetése?",
          "Ki ellenőrzi a tervet, a gyártási előkészítést és a kész munkát?",
        ],
        sources: [
          {
            label: "BMC Oral Health",
            title: "The complete digital workflow in fixed prosthodontics: a systematic review",
            url: "https://bmcoralhealth.biomedcentral.com/articles/10.1186/s12903-017-0415-0",
          },
          {
            label: "BMC Oral Health",
            title: "Intraoral scanners in dentistry: a review of the current literature",
            url: "https://bmcoralhealth.biomedcentral.com/articles/10.1186/s12903-017-0442-x",
          },
          {
            label: "FDA",
            title: "3D Printing of Medical Devices",
            url: "https://www.fda.gov/medical-devices/products-and-medical-procedures/3d-printing-medical-devices",
          },
        ],
        status: "Forrásolt vázlat · szakmai jóváhagyás előtt",
        title: "Mi az a CAD/CAM, és miért nem csak gépi gyártást jelent?",
      },
      {
        intro:
          "A 3D nyomtatás az additív gyártás egyik formájaként rétegről rétegre építhet tárgyat digitális 3D fájlból. A fogászati-fogtechnikai folyamatban ez többféle szerepet kaphat, de minden esetben külön kell kezelni, hogy modellről, próbaelemről, segédeszközről vagy rendeltetésszerűen használható végleges elemről beszélünk-e.",
        limits: [
          "Nem állítjuk, hogy minden 3D nyomtatott elem végleges fogpótlásként használható.",
          "Nem állítjuk, hogy egy resin, filament vagy más nyomtatási anyag önmagában biztonságos, allergiamentes vagy minden helyzetben alkalmas.",
          "Nem választunk nyomtatási technológiát, anyagot vagy fogpótlási típust online.",
        ],
        points: [
          {
            label: "01 · Digitális fájl",
            text: "A 3D nyomtatás digitális tervből vagy 3D fájlból indulhat. A fájl előkészítése és ellenőrzése szakmai és technológiai feladat.",
            title: "A nyomtatás nem a tervezés helyett történik",
          },
          {
            label: "02 · Rétegek",
            text: "Az additív gyártás lényege, hogy az objektum egymásra épülő rétegekből készül. Ez más logika, mint a marás vagy más anyagelvételes eljárás.",
            title: "Más gyártási gondolkodás",
          },
          {
            label: "03 · Rendeltetés",
            text: "Egy nyomtatott elem lehet tanulmányi modell, próba, segédeszköz, sablon vagy bizonyos esetekben fogászati célú eszköz. A pontos szerepet anyag, gyártói előírás és szakmai döntés határozza meg.",
            title: "Nem minden nyomat ugyanarra való",
          },
          {
            label: "04 · Utómunka",
            text: "A nyomtatás után tisztítás, utókezelés, ellenőrzés vagy dokumentálás is szükséges lehet. A weboldal ezért csak a folyamatot magyarázza, nem minősít anyagot.",
            title: "A késznek látszó elem még nem mindig kész",
          },
        ],
        questions: [
          "A bemutatott elem modell, próba, segédeszköz vagy végleges célú eszköz?",
          "Milyen anyagból készülhet, és mi annak gyártói rendeltetése?",
          "Milyen utókezelésre vagy ellenőrzésre van szükség?",
          "Melyik részt végzi a labor, és melyik döntés igényel fogorvosi kontrollt?",
        ],
        sources: [
          {
            label: "FDA",
            title: "3D Printing of Medical Devices",
            url: "https://www.fda.gov/medical-devices/products-and-medical-procedures/3d-printing-medical-devices",
          },
          {
            label: "FDA Guidance",
            title: "Technical Considerations for Additive Manufactured Medical Devices",
            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/technical-considerations-additive-manufactured-medical-devices",
          },
          {
            label: "BMC Oral Health",
            title: "The complete digital workflow in fixed prosthodontics: a systematic review",
            url: "https://bmcoralhealth.biomedcentral.com/articles/10.1186/s12903-017-0415-0",
          },
        ],
        status: "Forrásolt vázlat · magas szakmai kontroll",
        title: "3D nyomtatás a fogászati folyamatban: mire való, mire nem?",
      },
      {
        intro:
          "A resin és filament szavak nem kész fogászati megoldást jelentenek, hanem nyomtatási anyagirányokat. A látogató számára a legfontosabb különbség az, hogy az anyag neve önmagában nem mondja meg, mire használható, biztonságos-e az adott célra, vagy milyen utókezelést igényel.",
        limits: [
          "Nem állítjuk, hogy bármely resin vagy filament anyag mindenkinek allergiamentes vagy kockázatmentes.",
          "Nem állítjuk, hogy az anyag neve alapján eldönthető, mire alkalmas egy fogászati-fogtechnikai folyamatban.",
          "Nem hasonlítunk össze konkrét termékeket, és nem választunk anyagot online.",
        ],
        points: [
          {
            label: "01 · Resin",
            text: "A resin folyadék alapú nyomtatási anyagcsalád lehet, amelynél a rendeltetés, a nyomtatási paraméterek és az utókezelés különösen fontos.",
            title: "Nem egyetlen anyag, hanem anyagcsalád",
          },
          {
            label: "02 · Filament",
            text: "A filament szál formájú alapanyag lehet bizonyos 3D nyomtatási technológiákhoz. A fogászati szerepét nem a szó, hanem az adott anyag dokumentált rendeltetése határozza meg.",
            title: "A forma nem jelent automatikus alkalmasságot",
          },
          {
            label: "03 · Rendeltetés",
            text: "Ugyanaz a gyártási elv más célt szolgálhat modellnél, próbaelemnél, sablonnál vagy más eszköznél. A weboldal ezért csak kérdéseket rendez, nem minősít anyagot.",
            title: "A felhasználási cél a döntő kérdés",
          },
          {
            label: "04 · Biológiai értékelés",
            text: "Ha egy anyag pácienssel érintkező célra kerül szóba, a biológiai biztonság és a dokumentált megfelelés külön szakmai és szabályozási kérdés.",
            title: "A biztonság nem marketingmondat",
          },
        ],
        questions: [
          "Az adott anyag milyen célra és milyen érintkezési helyzetre van dokumentálva?",
          "Szükséges-e utókezelés, tisztítás, fénykezelés vagy más gyártói lépés?",
          "Modellről, próbaelemről, sablonról vagy pácienssel érintkező eszközről van szó?",
          "Ki ellenőrzi az anyag rendeltetését és a kész elem felhasználhatóságát?",
        ],
        sources: [
          {
            label: "FDA",
            title: "3D Printing of Medical Devices",
            url: "https://www.fda.gov/medical-devices/products-and-medical-procedures/3d-printing-medical-devices",
          },
          {
            label: "FDA Guidance",
            title: "Technical Considerations for Additive Manufactured Medical Devices",
            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/technical-considerations-additive-manufactured-medical-devices",
          },
          {
            label: "FDA Guidance",
            title: "Use of International Standard ISO 10993-1, Biological evaluation of medical devices",
            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/use-international-standard-iso-10993-1-biological-evaluation-medical-devices-part-1-evaluation-and",
          },
        ],
        status: "Forrásolt vázlat · anyaghasználati jóváhagyás előtt",
        title: "Resin és filament: mit jelentenek, és miért nem anyagajánlások?",
      },
      {
        intro:
          "A minősített, rendeltetésszerű anyaghasználat azt jelenti, hogy egy anyagról nem önmagában a neve, színe vagy technológiája alapján beszélünk, hanem a dokumentált célja, gyártói előírásai, szakmai felhasználása és ellenőrzése alapján.",
        limits: [
          "Nem állítjuk, hogy egy anyag minősítése minden fogászati helyzetre automatikus alkalmasságot jelent.",
          "Nem állítjuk, hogy a CE-jelölés, gyártói adatlap vagy biológiai értékelés önmagában kezelési döntés.",
          "Nem nevezünk meg konkrét anyagot végleges ajánlásként szakmai jóváhagyás nélkül.",
        ],
        points: [
          {
            label: "01 · Rendeltetés",
            text: "Minden anyagnál tisztázni kell, milyen célra és milyen felhasználási környezetre szánták. A honlap csak ezt a gondolkodási szempontot mutatja meg.",
            title: "Mire való az adott anyag?",
          },
          {
            label: "02 · Dokumentáció",
            text: "Gyártói adatlap, használati utasítás, megfelelőségi dokumentum vagy más szakmai forrás nélkül nem tehető felelős páciensoldali állítás.",
            title: "Az állításnak dokumentált alap kell",
          },
          {
            label: "03 · Feldolgozás",
            text: "Egy anyag tulajdonságai függhetnek a feldolgozástól, utókezeléstől, tárolástól és minőség-ellenőrzéstől is. Ezért nem elég csak az anyagcsalád neve.",
            title: "A folyamat is számít",
          },
          {
            label: "04 · Szakmai kontroll",
            text: "A végső döntés nem online történik. Az anyagválasztás fogorvosi és fogtechnikai szempontok, valamint az adott pácienshelyzet alapján tisztázható.",
            title: "A döntés emberi szakmai felelősség",
          },
        ],
        questions: [
          "Milyen rendeltetésre készült az adott anyag vagy eszköz?",
          "Milyen dokumentáció támasztja alá a felhasználását?",
          "Milyen feldolgozási vagy utókezelési lépéseket ír elő a gyártó?",
          "Milyen szakmai ellenőrzés szükséges a konkrét helyzetben?",
        ],
        sources: [
          {
            label: "EUR-Lex",
            title: "Regulation (EU) 2017/745 on medical devices",
            url: "https://eur-lex.europa.eu/eli/reg/2017/745/oj",
          },
          {
            label: "FDA Guidance",
            title: "Use of International Standard ISO 10993-1, Biological evaluation of medical devices",
            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/use-international-standard-iso-10993-1-biological-evaluation-medical-devices-part-1-evaluation-and",
          },
          {
            label: "FDA Guidance",
            title: "Technical Considerations for Additive Manufactured Medical Devices",
            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/technical-considerations-additive-manufactured-medical-devices",
          },
        ],
        status: "Forrásolt vázlat · szabályozási és szakmai kapu",
        title: "Miért fontos a minősített, rendeltetésszerű anyaghasználat?",
      },
    ],
    status: "Mintakártya · forrásolt technológiai vázlat",
    title: "Digitális fogtechnika – folyamatkártya",
  },
  "05": {
    checks: [
      "Forrás: csak anonimizált, engedélyezett és jóváhagyott eset használható.",
      "Szakmai jóváhagyás: minden képi és szöveges esetnél kötelező.",
      "Korlát: nem sugallja, hogy más látogatónál ugyanez az út vagy eredmény várható.",
    ],
    lead:
      "Az esettanulmány itt nem reklám és nem bizonyíték minden helyzetre, hanem egy biztonságos gondolkodási példa vázlata.",
    modules: [
      {
        label: "Esetvázlat",
        text: "Anonimizált kiinduló kérdés vagy általános helyzet, azonosítható páciensadat nélkül.",
        title: "Miből indult a példa?",
      },
      {
        label: "Folyamat",
        text: "Milyen szempontok merültek fel a szakmai egyeztetés során, diagnózis vagy kezelési terv közlése nélkül.",
        title: "Hogyan gondolkodtak róla?",
      },
      {
        label: "Médiahely",
        text: "Jóváhagyott kép, rövid videó vagy folyamatábra helye felirattal és szöveges alternatívával.",
        title: "Mit mutathatunk meg?",
      },
      {
        label: "Korlát",
        text: "Egyértelmű jelzés: más helyzetben más szakmai út lehet megfelelő.",
        title: "Miért nem ígéret?",
      },
    ],
    status: "Mintakártya · anonimizált",
    title: "Esettanulmány – biztonságos vázlat",
  },
  "06": {
    checks: [
      "Forrás: DTA által jóváhagyott konzultációs felkészítő logika.",
      "Szakmai jóváhagyás: a kérdések megfogalmazása előtt szükséges.",
      "Adat: a lista nem ment választ és nem kér egészségügyi információt.",
    ],
    lead:
      "Ez a minta a látogatót nem döntéshez, hanem jobb beszélgetéshez segíti: mit érdemes átgondolni, mielőtt szakemberrel találkozik.",
    modules: [
      {
        label: "Kérdéslista",
        text: "Általános, nem személyre szabott kérdések, amelyeket a látogató magával vihet egy konzultációra.",
        title: "Mit kérdezzek meg?",
      },
      {
        label: "Emlékeztető",
        text: "Segít átgondolni a korábbi tapasztalatokat, komfortérzetet, esztétikai igényt és időbeli szempontokat.",
        title: "Mit érdemes összerendezni?",
      },
      {
        label: "Letölthető helye",
        text: "Később készülhet nyomtatható vagy menthető lista, de adatbekérés és egészségügyi adatgyűjtés nélkül.",
        title: "Konzultációs jegyzet",
      },
      {
        label: "Biztonsági kapu",
        text: "A kártya külön jelzi, hogy a honlap nem dönt el kezelést, anyagot vagy időpontot.",
        title: "Mit nem dönt el ez a lista?",
      },
    ],
    article: {
      intro:
        "Ez a kártya abban segít, hogy a látogató ne kész kezelési döntéssel, hanem összerendezett kérdésekkel érkezzen a szakemberhez. A cél a jobb beszélgetés: mit szeretne tisztázni, milyen előzményt érdemes megemlíteni, milyen lehetőségekről kérdezhet, és mikor érdemes továbbmenni a Saját rendelők felé.",
      limits: [
        "Nem kér be, nem ment és nem továbbít egészségügyi vagy személyes adatot.",
        "Nem értékel tünetet, nem állít fel diagnózist, nem készít kezelési tervet és nem választ anyagot vagy fogpótlási típust.",
        "Nem helyettesíti a személyes vizsgálatot, a fogorvosi tájékoztatást, a költség- és időbeli egyeztetést vagy a beleegyezési folyamatot.",
      ],
      points: [
        {
          label: "01 · Kiindulás",
          text: "A látogató először a saját fő kérdését nevezi meg magának: komfort, esztétika, régi pótlás, foghiány, anyagérzékenységi aggodalom vagy egyszerű tájékozódás.",
          title: "Mit szeretnék tisztázni?",
        },
        {
          label: "02 · Előzmény",
          text: "Hasznos lehet átgondolni a korábbi tapasztalatokat, meglévő pótlásokat, ismert érzékenységeket és mindazt, amit a szakembernek a személyes beszélgetésen tudnia kellhet.",
          title: "Mit érdemes magammal vinni fejben?",
        },
        {
          label: "03 · Lehetőségek",
          text: "A konzultáción nem csak egy megoldás nevét érdemes kérdezni, hanem azt is, milyen alternatívák, előnyök, korlátok, anyaghasználati és időbeli szempontok merülhetnek fel.",
          title: "Milyen utakról kérdezhetek?",
        },
        {
          label: "04 · Következő lépés",
          text: "Ha a látogató már a saját helyzetét szeretné tisztázni, a tudástárból a Saját rendelők virtuális előszobája felé léphet tovább. Ott is csak jóváhagyott adatvédelmi kapu után lehet éles foglalási funkció.",
          title: "Mikor lépjek tovább a rendelői térbe?",
        },
      ],
      questions: [
        "Mi az a legfontosabb kérdés, amit szeretnék tisztázni a konzultáción?",
        "Milyen korábbi fogászati vagy fogpótlási tapasztalatot érdemes megemlítenem?",
        "Milyen lehetőségek, alternatívák, előnyök, korlátok és kockázatok merülhetnek fel az én helyzetemben?",
        "Mi lesz a következő biztonságos lépés, és milyen információt kapok majd írásban vagy személyes egyeztetésen?",
      ],
      sources: [
        {
          label: "AHRQ",
          title: "Questions Are the Answer",
          url: "https://www.ahrq.gov/questions/index.html",
        },
        {
          label: "AHRQ",
          title: "Be More Engaged in Your Healthcare",
          url: "https://www.ahrq.gov/questions/be-engaged/index.html",
        },
        {
          label: "AHRQ",
          title: "QuestionBuilder App",
          url: "https://www.ahrq.gov/questions/question-builder/index.html",
        },
      ],
      status: "Forrásolt vázlat · konzultációs felkészítő",
      title: "Kérdések konzultáció előtt: mit érdemes magammal vinnem?",
    },
    status: "Mintakártya · felkészítő",
    title: "Konzultáció előtt – kérdéskártya",
  },
  "07": {
    checks: [
      "Forrás: rendelői út és foglalási folyamat csak adatvédelmi terv után bővíthető.",
      "Jogi/adatvédelmi jóváhagyás: éles foglalás előtt kötelező.",
      "Korlát: nincs űrlap, nincs személyes adat, nincs egészségügyi adatküldés.",
    ],
    lead:
      "Ez a minta azt készíti elő, hogyan válik a tudástár végén a tájékozódásból rendelői előszoba — még adatmentesen, biztonságos átvezetésként.",
    modules: [
      {
        label: "Átvezetés",
        text: "A látogató akkor lép tovább, ha már saját helyzetét szeretné szakemberrel tisztázni.",
        title: "Mikor nyílik a Saját rendelők kapu?",
      },
      {
        label: "Összegzés",
        text: "A tudástárból hozott témák kérdésként jelennek meg, nem előre kitöltött panaszlapként.",
        title: "Mit visz magával a látogató?",
      },
      {
        label: "Foglalási hely",
        text: "Az időpontfoglalás csak későbbi, jóváhagyott adatvédelmi és jogi kapu után válhat működő modullá.",
        title: "Hol lesz az időpontfoglalás?",
      },
      {
        label: "Biztonsági kapu",
        text: "A rendelői tér nem online diagnózis, hanem szakmai segítségkérés felé vezető virtuális előszoba.",
        title: "Mi marad emberi döntés?",
      },
    ],
    status: "Mintakártya · adatkapu előtt",
    title: "Saját rendelők – átvezető kártya",
  },
};

const app = document.querySelector("#app");
const sceneRoot = document.querySelector("#scene-root");
const liveRegion = document.querySelector("#live-region");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let currentScene = location.hash.slice(1) in scenes ? location.hash.slice(1) : "hero";
let transitioning = false;

function setTransitionOrigin(sourceLink, targetId) {
  const rect = sourceLink?.getBoundingClientRect();
  app.dataset.transitionTarget = targetId;

  if (!rect) {
    app.style.removeProperty("--portal-origin-x");
    app.style.removeProperty("--portal-origin-y");
    app.style.removeProperty("--portal-origin-w");
    app.style.removeProperty("--portal-origin-h");
    return;
  }

  app.style.setProperty("--portal-origin-x", `${rect.left + rect.width / 2}px`);
  app.style.setProperty("--portal-origin-y", `${rect.top + rect.height / 2}px`);
  app.style.setProperty("--portal-origin-w", `${rect.width}px`);
  app.style.setProperty("--portal-origin-h", `${rect.height}px`);
}

function clearTransitionOrigin() {
  delete app.dataset.transitionTarget;
  app.style.removeProperty("--portal-origin-x");
  app.style.removeProperty("--portal-origin-y");
  app.style.removeProperty("--portal-origin-w");
  app.style.removeProperty("--portal-origin-h");
}

function sceneVisualMarkup(sceneId) {
  if (sceneId === "dentists") {
    return `
      <div aria-hidden="true" class="scene-visual scene-visual--dentists">
        <div class="dentist-workflow">
          <span class="dentist-workflow__arch"></span>
          <span class="dentist-workflow__glass dentist-workflow__glass--left"></span>
          <span class="dentist-workflow__glass dentist-workflow__glass--right"></span>
          <span class="dentist-workflow__chair"></span>
          <span class="dentist-workflow__scanner"></span>
          <span class="dentist-workflow__screen"></span>
          <span class="dentist-workflow__brand">DTA</span>
          <span class="dentist-workflow__tooth"></span>
          <span class="dentist-workflow__rail"></span>
          <span class="dentist-workflow__node dentist-workflow__node--one"></span>
          <span class="dentist-workflow__node dentist-workflow__node--two"></span>
          <span class="dentist-workflow__node dentist-workflow__node--three"></span>
          <span class="dentist-workflow__label dentist-workflow__label--one">Adat</span>
          <span class="dentist-workflow__label dentist-workflow__label--two">Tervezés</span>
          <span class="dentist-workflow__label dentist-workflow__label--three">Labor</span>
          <span class="dentist-workflow__lab"></span>
        </div>
      </div>`;
  }

  if (sceneId === "guidance") {
    return `
      <div aria-hidden="true" class="scene-visual scene-visual--guidance">
        <div class="guidance-hub">
          <span class="guidance-hub__arch"></span>
          <span class="guidance-hub__welcome-ring"></span>
          <span class="guidance-hub__host-aura"></span>
          <span class="guidance-hub__knowledge-light guidance-hub__knowledge-light--left"></span>
          <span class="guidance-hub__knowledge-light guidance-hub__knowledge-light--right"></span>
          <span class="guidance-hub__clinic-portal"></span>
          <span class="guidance-hub__clinic-glow"></span>
          <span class="guidance-hub__desk"></span>
          <span class="guidance-hub__host"></span>
          <span class="guidance-hub__host-smile"></span>
          <span class="guidance-hub__console"></span>
          <span class="guidance-hub__prompt guidance-hub__prompt--one">Jó helyen jár</span>
          <span class="guidance-hub__prompt guidance-hub__prompt--two">Miben segíthetünk?</span>
          <span class="guidance-hub__search"></span>
          <span class="guidance-hub__library guidance-hub__library--left"></span>
          <span class="guidance-hub__library guidance-hub__library--right"></span>
          <span class="guidance-hub__route"></span>
          <span class="guidance-hub__node guidance-hub__node--one"></span>
          <span class="guidance-hub__node guidance-hub__node--two"></span>
          <span class="guidance-hub__node guidance-hub__node--three"></span>
          <span class="guidance-hub__label guidance-hub__label--one">Házigazda</span>
          <span class="guidance-hub__label guidance-hub__label--two">Tudástár</span>
          <span class="guidance-hub__label guidance-hub__label--three">Útvonal</span>
        </div>
      </div>`;
  }

  if (sceneId === "clinics") {
    return `
      <div aria-hidden="true" class="scene-visual scene-visual--clinics">
        <div class="clinic-booking">
          <span class="clinic-booking__depth-wall clinic-booking__depth-wall--left"></span>
          <span class="clinic-booking__depth-wall clinic-booking__depth-wall--right"></span>
          <span class="clinic-booking__ceiling-light"></span>
          <span class="clinic-booking__floor-path"></span>
          <span class="clinic-booking__arch"></span>
          <span class="clinic-booking__desk"></span>
          <span class="clinic-booking__plant"></span>
          <span class="clinic-booking__brand">DTA</span>
          <span class="clinic-booking__waiting-seat"></span>
          <span class="clinic-booking__consult-room"></span>
          <span class="clinic-booking__calendar"></span>
          <span class="clinic-booking__service-panel"></span>
          <span class="clinic-booking__chair"></span>
          <span class="clinic-booking__clock"></span>
          <span class="clinic-booking__question-card"></span>
          <span class="clinic-booking__consultation"></span>
          <span class="clinic-booking__booking-gate"></span>
          <span class="clinic-booking__next-threshold"></span>
          <span class="clinic-booking__next-ring"></span>
          <span class="clinic-booking__next-room clinic-booking__next-room--left"></span>
          <span class="clinic-booking__next-room clinic-booking__next-room--right"></span>
          <span class="clinic-booking__next-seat"></span>
          <span class="clinic-booking__privacy-gate"></span>
          <span class="clinic-booking__route"></span>
          <span class="clinic-booking__node clinic-booking__node--one"></span>
          <span class="clinic-booking__node clinic-booking__node--two"></span>
          <span class="clinic-booking__node clinic-booking__node--three"></span>
          <span class="clinic-booking__label clinic-booking__label--one">Fogadópont</span>
          <span class="clinic-booking__label clinic-booking__label--two">Beszélgetés</span>
          <span class="clinic-booking__label clinic-booking__label--three">Zárt kapu</span>
        </div>
      </div>`;
  }

  if (sceneId === "technology") {
    return `
      <div aria-hidden="true" class="scene-visual scene-visual--technology">
        <div class="tech-lab">
          <span class="tech-lab__skylight"></span>
          <span class="tech-lab__daylight"></span>
          <span class="tech-lab__window-band"></span>
          <span class="tech-lab__window-panel tech-lab__window-panel--one"></span>
          <span class="tech-lab__window-panel tech-lab__window-panel--two"></span>
          <span class="tech-lab__shelf tech-lab__shelf--left"></span>
          <span class="tech-lab__shelf tech-lab__shelf--center"></span>
          <span class="tech-lab__lounge"></span>
          <span class="tech-lab__island"></span>
          <span class="tech-lab__monitor"></span>
          <span class="tech-lab__printer tech-lab__printer--one"></span>
          <span class="tech-lab__printer tech-lab__printer--two"></span>
          <span class="tech-lab__scanner"></span>
          <span class="tech-lab__technician tech-lab__technician--one"></span>
          <span class="tech-lab__technician tech-lab__technician--two"></span>
          <span class="tech-lab__bench"></span>
          <span class="tech-lab__articulator tech-lab__articulator--one"></span>
          <span class="tech-lab__articulator tech-lab__articulator--two"></span>
          <span class="tech-lab__articulator tech-lab__articulator--three"></span>
          <span class="tech-lab__models"></span>
          <span class="tech-lab__route"></span>
          <span class="tech-lab__node tech-lab__node--one"></span>
          <span class="tech-lab__node tech-lab__node--two"></span>
          <span class="tech-lab__node tech-lab__node--three"></span>
          <span class="tech-lab__label tech-lab__label--one">Bemenet</span>
          <span class="tech-lab__label tech-lab__label--two">Gyártás</span>
          <span class="tech-lab__label tech-lab__label--three">Kontroll</span>
        </div>
      </div>`;
  }

  return `
    <div aria-hidden="true" class="scene-visual scene-visual--generic">
      <div class="whitebox-object whitebox-object--primary"></div>
      <div class="whitebox-object whitebox-object--secondary"></div>
    </div>`;
}

function portalMarkup([targetId, _label, accessibleDescription], index) {
  const target = scenes[targetId];
  return `
    <a
      aria-describedby="portal-description-${targetId}"
      class="portal"
      data-portal-index="${index}"
      data-target="${targetId}"
      href="#${targetId}"
      style="--portal-accent: ${target.accent}; --portal-soft: ${target.soft};"
    >
      <span aria-hidden="true" class="portal__frame">
        <span class="portal__preview">
          <span class="portal__world portal__world--${targetId}">
            <span class="portal__world-backlight"></span>
            <span class="portal__world-horizon"></span>
            <span class="portal__world-threshold"></span>
            <span class="portal__world-depth portal__world-depth--left"></span>
            <span class="portal__world-depth portal__world-depth--right"></span>
            <span class="portal__world-plane portal__world-plane--one"></span>
            <span class="portal__world-plane portal__world-plane--two"></span>
            <span class="portal__world-focus"></span>
            ${
              targetId === "dentists"
                ? `<span class="portal__world-mark">DTA</span>
                   <span class="portal__world-tooth"></span>
                   <span class="portal__world-flow"></span>
                   <span class="portal__world-node portal__world-node--one"></span>
                   <span class="portal__world-node portal__world-node--two"></span>
                   <span class="portal__world-node portal__world-node--three"></span>`
                : ""
            }
            ${
              targetId === "guidance"
                ? `<span class="portal__world-reception"></span>
                   <span class="portal__world-search"></span>
                   <span class="portal__world-book portal__world-book--left"></span>
                   <span class="portal__world-book portal__world-book--right"></span>
                   <span class="portal__world-route"></span>
                   <span class="portal__world-node portal__world-node--one"></span>
                   <span class="portal__world-node portal__world-node--two"></span>
                   <span class="portal__world-node portal__world-node--three"></span>`
                : ""
            }
            ${
              targetId === "technology"
                ? `<span class="portal__world-screen"></span>
                   <span class="portal__world-tech"></span>
                   <span class="portal__world-articulator"></span>
                   <span class="portal__world-printer"></span>
                   <span class="portal__world-rail"></span>
                   <span class="portal__world-node portal__world-node--one"></span>
                   <span class="portal__world-node portal__world-node--two"></span>
                   <span class="portal__world-node portal__world-node--three"></span>`
                : ""
            }
          </span>
          <span class="portal__depth portal__depth--one"></span>
          <span class="portal__depth portal__depth--two"></span>
          <span class="portal__depth portal__depth--three"></span>
        </span>
      </span>
      <span class="visually-hidden" id="portal-description-${targetId}">${accessibleDescription}</span>
    </a>`;
}

function hostConsoleMarkup() {
  return `
    <section aria-labelledby="host-console-title" class="host-console host-console--guidance">
      <div class="host-console__copy">
        <p class="scene-kicker">Kérdésalapú tudástér</p>
        <h2 id="host-console-title">Miben segíthetünk?</h2>
        <p>Ez a tér pácienseknek és érdeklődő látogatóknak készült. A látogató saját kérdéséből vagy helyzetéből indulhat el, majd átfogó tudástár-családok között tájékozódhat — adatbekérés, diagnózis és kezelési terv nélkül.</p>
      </div>
      <div aria-label="Látogatói eligazodási irányok" class="host-console__choices">
        <a class="host-console__choice" href="#knowledge-preview-title">
          <span>Helyzetem alapján indulok</span>
          <small>Hétköznapi kérdésből érthető témakör felé</small>
        </a>
        <a class="host-console__choice" href="#knowledge-preview-title">
          <span>Tudástár-családokat böngészek</span>
          <small>Megoldások, anyagok, technológia, esetek és videók</small>
        </a>
        <a class="host-console__choice" data-target="clinics" href="#clinics">
          <span>Tovább a saját rendelők felé</span>
          <small>Rendelői előszoba és későbbi időpontfoglalási út</small>
        </a>
      </div>
    </section>`;
}

function knowledgeArticleMarkup(article, secondary = false) {
  return `
    <div class="knowledge-capsule__article${secondary ? " knowledge-capsule__article--secondary" : ""}">
      <div class="knowledge-capsule__article-header">
        <span>${article.status}</span>
        <h5>${article.title}</h5>
      </div>
      <p>${article.intro}</p>
      <div class="knowledge-capsule__article-points">${article.points
        .map(
          (point) => `
            <article>
              <small>${point.label}</small>
              <b>${point.title}</b>
              <p>${point.text}</p>
            </article>`,
        )
        .join("")}</div>
      <div class="knowledge-capsule__article-lists">
        <div>
          <strong>Mit érdemes megkérdezni?</strong>
          <ul>${article.questions.map((question) => `<li>${question}</li>`).join("")}</ul>
        </div>
        <div>
          <strong>Biztonsági korlát</strong>
          <ul>${article.limits.map((limit) => `<li>${limit}</li>`).join("")}</ul>
        </div>
      </div>
      <div class="knowledge-capsule__article-sources">
        <strong>Forrásirányok</strong>
        <ul>${article.sources
          .map(
            (source) => `
              <li>
                <a href="${source.url}" target="_blank" rel="noreferrer">${source.title}</a>
                <small>${source.label}</small>
              </li>`,
          )
          .join("")}</ul>
      </div>
    </div>`;
}

function knowledgeCapsuleContent(family) {
  const topics = family.topics.map((topic) => `<li>${topic}</li>`).join("");
  const pathway = family.pathway
    .map(
      (item, index) => `
        <li>
          <span>${String(index + 1).padStart(2, "0")}</span>
          <div>
            <small>${item.kind}</small>
            <b>${item.title}</b>
            <p>${item.text}</p>
          </div>
        </li>`,
    )
    .join("");
  const draft = guidanceKnowledgeDrafts[family.tag];
  const draftModules = draft.modules
    .map(
      (module) => `
        <article>
          <small>${module.label}</small>
          <b>${module.title}</b>
          <p>${module.text}</p>
        </article>`,
    )
    .join("");
  const draftChecks = draft.checks.map((check) => `<li>${check}</li>`).join("");
  const article = draft.article ? knowledgeArticleMarkup(draft.article) : "";
  const relatedArticles = (draft.relatedArticles ?? [])
    .map((relatedArticle) => knowledgeArticleMarkup(relatedArticle, true))
    .join("");

  return `
    <p class="scene-kicker">Kiválasztott tudáskapszula</p>
    <div class="knowledge-capsule__header">
      <span>${family.tag}</span>
      <h3 id="knowledge-capsule-title">${family.capsuleTitle}</h3>
    </div>
    <p>${family.capsuleLead}</p>
    <div class="knowledge-capsule__topics">
      <strong>Például ide kerülhet:</strong>
      <ul>${topics}</ul>
    </div>
    <div class="knowledge-capsule__pathway">
      <strong>Első tudásútvonal</strong>
      <ol>${pathway}</ol>
    </div>
    <div class="knowledge-capsule__draft">
      <div class="knowledge-capsule__draft-header">
        <strong>Első részletes tudáskártya-minta</strong>
        <span>${draft.status}</span>
      </div>
      <h4>${draft.title}</h4>
      <p>${draft.lead}</p>
      <div class="knowledge-capsule__draft-modules">${draftModules}</div>
      <ul class="knowledge-capsule__draft-checks">${draftChecks}</ul>
      ${article}
      ${relatedArticles}
    </div>
    <p class="knowledge-capsule__safety">${family.safety}</p>
    <a class="knowledge-capsule__link" data-target="clinics" href="#clinics">Tovább a Saját rendelők felé</a>`;
}

function setActiveKnowledgeCard(tag) {
  const family = guidanceTopicFamilies.find((item) => item.tag === tag);
  const panel = document.querySelector("#knowledge-capsule-panel");

  if (!family || !panel) return;

  document.querySelectorAll(".knowledge-card").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.knowledgeCard === tag);
  });

  document.querySelectorAll("[data-knowledge-tag]").forEach((button) => {
    const active = button.dataset.knowledgeTag === tag;
    button.setAttribute("aria-pressed", String(active));
    button.textContent = active ? "Megnyitva" : "Kapszula előnézet";
  });

  panel.innerHTML = knowledgeCapsuleContent(family);
  liveRegion.textContent = `${family.title} tudáskapszula megnyitva.`;
}

function knowledgePreviewMarkup() {
  const activeFamily = guidanceTopicFamilies[0];
  const cards = guidanceTopicFamilies
    .map(
      (family) => `
        <article class="knowledge-card${family.tag === activeFamily.tag ? " is-active" : ""}" data-knowledge-card="${family.tag}">
          <span class="knowledge-card__tag">${family.tag}</span>
          <span class="knowledge-card__status">${family.status}</span>
          <h3 id="knowledge-card-title-${family.tag}">${family.title}</h3>
          <p id="knowledge-card-body-${family.tag}">${family.body}</p>
          <small>${family.note}</small>
          <button
            aria-controls="knowledge-capsule-panel"
            aria-describedby="knowledge-card-title-${family.tag} knowledge-card-body-${family.tag}"
            aria-pressed="${family.tag === activeFamily.tag}"
            class="knowledge-card__select"
            data-knowledge-tag="${family.tag}"
            type="button"
          >${family.tag === activeFamily.tag ? "Megnyitva" : "Kapszula előnézet"}</button>
        </article>`,
    )
    .join("");

  return `
    <section aria-labelledby="knowledge-preview-title" class="knowledge-preview">
      <div class="knowledge-preview__intro">
        <p class="scene-kicker">Tudástárfal vázlat</p>
        <h2 id="knowledge-preview-title">Kérdésből induló tudástér</h2>
        <p>A konkrét témák — például implantátum, fogsor, cirkónium vagy digitális tervezés — később ezek alatt jelennek meg kapszulaként. A fő rendszer most a látogató kérdéséből indul.</p>
      </div>
      <div class="knowledge-preview__cards" aria-label="Guidance tudástár-családok előnézete">
        ${cards}
      </div>
      <aside
        aria-labelledby="knowledge-capsule-title"
        aria-live="polite"
        class="knowledge-capsule"
        id="knowledge-capsule-panel"
      >
        ${knowledgeCapsuleContent(activeFamily)}
      </aside>
    </section>`;
}

function clinicConsoleMarkup() {
  return `
    <section aria-labelledby="clinic-console-title" class="host-console host-console--clinics">
      <div class="host-console__copy">
        <p class="scene-kicker">Rendelői előszoba</p>
        <h2 id="clinic-console-title">Innen indul a rendelői út</h2>
        <p>A guidance térben összerendezett kérdések itt rendelői előszobává alakulnak. A látogató szakmai beszélgetés felé léphet, de ez még nem online diagnózis, nem kezelési terv, nem panaszbeküldés és nem éles foglalás.</p>
      </div>
      <div aria-label="Saját rendelők előszobájának irányai" class="host-console__choices">
        <a class="host-console__choice" href="#clinics-stop-01">
          <span>Megérkezem a saját rendelőkbe</span>
          <small>Adatmentes rendelői fogadópont</small>
        </a>
        <a class="host-console__choice" href="#clinics-stop-02">
          <span>Szakmai beszélgetésre készülök</span>
          <small>A kérdéseim rendezése, online diagnózis nélkül</small>
        </a>
        <a class="host-console__choice" href="#clinics-stop-03">
          <span>Időpontfoglalás felé lépnék tovább</span>
          <small>Adatvédelmi kapu utáni későbbi funkció</small>
        </a>
      </div>
    </section>`;
}

const clinicOrientationPoints = [
  {
    label: "Fogadópont",
    title: "A kérdés még nem adat",
    text:
      "A látogató nem panaszt küld be, hanem megtartja a Guidance térben rendezett kérdéseit.",
  },
  {
    label: "Szakmai beszélgetés",
    title: "A döntés emberi térbe kerül",
    text:
      "A honlap nem választ kezelést vagy anyagot; csak előkészíti, miről érdemes szakemberrel beszélni.",
  },
  {
    label: "Zárt foglalási kapu",
    title: "A foglalás későbbi adatvédelmi réteg",
    text:
      "A következő nagy funkció helye látszik, de űrlap, adatmező és küldés még nincs.",
  },
];

function clinicOrientationMarkup() {
  const points = clinicOrientationPoints
    .map(
      (point, index) => `
        <article class="clinic-orientation__point">
          <span aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
          <small>${point.label}</small>
          <h3>${point.title}</h3>
          <p>${point.text}</p>
        </article>`,
    )
    .join("");

  return `
    <section aria-labelledby="clinic-orientation-title" class="clinic-orientation">
      <div class="clinic-orientation__copy">
        <p class="scene-kicker">Rendelői orientáció</p>
        <h2 id="clinic-orientation-title">Nem űrlaphoz érkezik, hanem egy szakmai beszélgetés előterébe</h2>
        <p>A Saját rendelők tér feladata, hogy a tudástárból hozott bizonytalanságot nyugodt következő lépéssé alakítsa. A látogató itt még nem ad meg érzékeny adatot, és nem kap online döntést.</p>
      </div>
      <div class="clinic-orientation__map" aria-label="Saját rendelők orientációs út">
        ${points}
      </div>
    </section>`;
}

const clinicPathwaySteps = [
  {
    label: "01 · Érkezés",
    title: "A tudástárból hozott kérdések megmaradnak kérdéseknek",
    text:
      "A látogató nem űrlapot tölt ki, hanem egy nyugodt előszobába érkezik. Amit a Guidance térben megértett, az itt beszélgetési iránnyá rendeződik, nem automatikus döntéssé.",
  },
  {
    label: "02 · Tisztázás",
    title: "Szakemberrel tisztázható, nem a honlap dönti el",
    text:
      "A rendelői út célja az, hogy a kérdés személyes szakmai egyeztetésben kapjon helyet. A rendszer nem értékel tünetet, nem rangsorol megoldást és nem választ anyagot.",
  },
  {
    label: "03 · Foglalási kapu",
    title: "Az időpontfoglalás külön adatvédelmi kapu mögött lesz",
    text:
      "A mostani build csak megmutatja a későbbi foglalási helyet. Működő időpontkérés, személyes adat vagy egészségügyi adat kezelése csak jóváhagyott jogi és adatvédelmi folyamat után kerülhet ide.",
  },
];

function clinicPathwayMarkup() {
  const steps = clinicPathwaySteps
    .map(
      (step) => `
        <article class="clinic-pathway__step">
          <small>${step.label}</small>
          <h3>${step.title}</h3>
          <p>${step.text}</p>
        </article>`,
    )
    .join("");

  return `
    <section aria-labelledby="clinic-pathway-title" class="clinic-pathway">
      <div class="clinic-pathway__intro">
        <p class="scene-kicker">Guidance után</p>
        <h2 id="clinic-pathway-title">A kérdésből rendelői út lesz</h2>
        <p>Ez a tér nem azonnali választ ad, hanem biztonságos következő lépést. A látogató a tudástárból hozott kérdéseit rendezettebben viheti tovább a saját rendelők felé.</p>
      </div>
      <div aria-label="Saját rendelők adatmentes útvonala" class="clinic-pathway__steps">
        ${steps}
      </div>
      <aside class="clinic-pathway__guard" aria-label="Saját rendelők biztonsági kapu">
        <strong>Biztonsági kapu</strong>
        <p>Itt még nincs foglalási űrlap, nincs panaszbeküldés és nincs egészségügyi adatkezelés. A személyes szakmai döntés továbbra is rendelői konzultációhoz kötött.</p>
      </aside>
    </section>`;
}

function bookingGatePreviewMarkup() {
  return `
    <div class="booking-gate-preview" aria-label="Időpontfoglalási kapu tervezett állapotban">
      <div class="booking-gate-preview__header">
        <strong>Kapu mögötti világ</strong>
        <p>A következő rendelői tér közös előszobája, egyszerű rendelőválasztóval és adatmentes továbbvezetéssel.</p>
      </div>
      <div class="booking-gate-preview__steps" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="booking-gate-preview__zones" aria-label="A következő rendelői világ zónái">
        <article class="booking-gate-preview__zone">
          <small>01 · Érkezési zóna</small>
          <b>Melyik rendelői irány felé menjen tovább?</b>
          <p>A látogató nem új portálok között bolyong, hanem egy közös előszobában előbb helyszínt és rendelőtípust választ.</p>
          <label class="booking-gate-preview__selector">
            <span>Rendelő kiválasztása</span>
            <select data-clinic-route-select>
              <option
                value="private-ozd"
                data-badge="Kiemelt · Magánrendelő"
                data-note="A legkiemeltebb, prémium rendelői irány. Nem külön térbe visz, hanem a közös előszobán belül kap hangsúlyosabb továbbvezetést."
                data-tone="Prémium, nyugodt, célzott"
                data-focus="Gyorsabb és személyesebb továbbvezetés"
                data-next-step="A közös előszobából kiemelt konzultációs ritmus felé billenhet tovább."
                data-consult="A konzultációs előszoba a kiemelt magánrendelő irányához igazodik, nyugodt és célzott továbbvezetéssel."
                data-booking="Az időpontkérés később ehhez a kiemelt ózdi magánrendelői ritmushoz illeszkedhet."
                data-featured="true"
                selected
              >Magánrendelő Ózd · 2 szék</option>
              <option
                value="neak-kazincbarcika"
                data-badge="NEAK · Kazincbarcika"
                data-note="Külön városban működő NEAK irány. A helyszínválasztást előbb tisztázni kell, hogy a látogató ne rossz város felé haladjon tovább."
                data-tone="Tisztázó, helyszíntudatos"
                data-focus="Kazincbarcika mint külön városi döntési pont"
                data-next-step="A következő lépés előtt világossá kell váljon, hogy nem az ózdi NEAK út felé tart."
                data-consult="A konzultációs előszoba a kazincbarcikai NEAK útvonalhoz igazodó, helyszíntudatos eligazítást adhat."
                data-booking="Az időpontkérés később a kazincbarcikai NEAK rendelő saját működési logikájához igazodhat."
                data-featured="false"
              >NEAK rendelő Kazincbarcika</option>
              <option
                value="neak-ozd"
                data-badge="NEAK · Ózd"
                data-note="Külön városban működő NEAK irány. A közös előszobán belül tisztán el kell váljon a kazincbarcikai NEAK úttól."
                data-tone="Nyugodt, de helyszínhez kötött"
                data-focus="Ózdi NEAK irány elkülönítése"
                data-next-step="A továbbhaladás előtt tisztázódik, hogy az ózdi NEAK út illeszkedik-e a látogató szándékához."
                data-consult="A konzultációs előszoba az ózdi NEAK irányhoz kötött első beszélgetési keretet mutathatja meg."
                data-booking="Az időpontkérés később az ózdi NEAK rendelő külön útvonalához és ritmusához igazodhat."
                data-featured="false"
              >NEAK rendelő Ózd</option>
            </select>
          </label>
          <div class="booking-gate-preview__selected-route booking-gate-preview__selected-route--featured" aria-live="polite">
            <small data-clinic-route-badge>Kiemelt · Magánrendelő</small>
            <b data-clinic-route-title>Magánrendelő Ózd · 2 szék</b>
            <p data-clinic-route-note>A legkiemeltebb, prémium rendelői irány. Nem külön térbe visz, hanem a közös előszobán belül kap hangsúlyosabb továbbvezetést.</p>
            <div class="booking-gate-preview__route-signals" aria-label="Kiválasztott rendelő hangulata">
              <article>
                <small>Hangulat</small>
                <b data-clinic-route-tone>Prémium, nyugodt, célzott</b>
              </article>
              <article>
                <small>Fókusz</small>
                <b data-clinic-route-focus>Gyorsabb és személyesebb továbbvezetés</b>
              </article>
              <article>
                <small>Következő lépés</small>
                <b data-clinic-route-next-step>A közös előszobából kiemelt konzultációs ritmus felé billenhet tovább.</b>
              </article>
            </div>
          </div>
          <div class="booking-gate-preview__routing-note">
            <strong>Fontos:</strong> a két NEAK rendelő külön városban működik, ezért a későbbi konzultáció és időpontkérés előtt helyszínalapú terelésre lesz szükség.
          </div>
        </article>
        <article class="booking-gate-preview__zone">
          <small>02 · Konzultációs irány</small>
          <b>Milyen konzultációs előszoba nyíljon meg?</b>
          <p data-clinic-route-consult>A konzultációs előszoba a kiemelt magánrendelő irányához igazodik, nyugodt és célzott továbbvezetéssel.</p>
        </article>
        <article class="booking-gate-preview__zone">
          <small>03 · Időablak előszoba</small>
          <b>Hogyan igazodjon a későbbi időpontkérés?</b>
          <p data-clinic-route-booking>Az időpontkérés később ehhez a kiemelt ózdi magánrendelői ritmushoz illeszkedhet.</p>
        </article>
        <article class="booking-gate-preview__zone booking-gate-preview__zone--guard">
          <small>04 · Adatvédelmi kapu</small>
          <b>Itt válhat majd élessé a valódi adatfolyam</b>
          <p>Űrlap, azonosítás és beküldés csak külön jóváhagyás után kerülhet a térbe.</p>
        </article>
      </div>
      <ul>
        <li>Előbb adatvédelmi és jogi jóváhagyás</li>
        <li>Utána rendelői időpontkérés folyamata</li>
        <li>Most még nincs űrlap és nincs küldés</li>
      </ul>
    </div>`;
}

function technologyConsoleMarkup() {
  return `
    <section aria-labelledby="technology-console-title" class="host-console host-console--technology">
      <div class="host-console__copy">
        <p class="scene-kicker">Digitális labor</p>
        <h2 id="technology-console-title">Fogtechnikai munkaritmus</h2>
        <p>Ez a szakmai tér ugyanazt a fogtechnikai világot nyitja ki, amely a HERO harmadik portáljában csak fókuszált részletként látszik. A whitebox most egy világosabb, természetesebb fényű laborritmust mutat: adat-előkészítés, CAD/CAM és 3D munkafázisok, artikulátoros ellenőrzési pontok és szakmai kontrollrétegek helyét.</p>
      </div>
      <div aria-label="Fogtechnikai labor irányai" class="host-console__choices">
        <a class="host-console__choice" href="#technology-stop-01">
          <span>Digitális adat előkészítése</span>
          <small>Rendezett bemeneti laborfolyamat</small>
        </a>
        <a class="host-console__choice" href="#technology-stop-02">
          <span>CAD/CAM gyártási ritmus</span>
          <small>Tervezés, marás, nyomtatás helye</small>
        </a>
        <a class="host-console__choice" href="#technology-stop-03">
          <span>Anyag és minőségi kapu</span>
          <small>Szakmai jóváhagyás előtti whitebox</small>
        </a>
      </div>
    </section>`;
}

function technologyPathwayMarkup() {
  return `
    <section aria-labelledby="technology-pathway-title" class="technology-pathway">
      <div class="technology-pathway__intro">
        <p class="scene-kicker">Szakmai laborút</p>
        <h2 id="technology-pathway-title">A beérkező adattól a következő szakmai kapuig</h2>
        <p>Ez a tér fogtechnikusoknak szóló, világosabb és követhetőbb laborvilágot mutat. A portálban látott fókusz itt tágul ki ugyanabba a munkatérbe: természetesebb fény, rendezett állomások és szakmailag olvasható munkaritmus mellett.</p>
      </div>
      <div aria-label="Fogtechnikai labor whitebox-útvonala" class="technology-pathway__steps">
        <article class="technology-pathway__step">
          <small>01 · Bemeneti rend</small>
          <h3>A labor nem géppel indul, hanem rendezett adattal</h3>
          <p>A scan, fájl vagy egyéb digitális kiindulás itt még nem eredményt jelent, hanem olyan bemenetet, amelyet a labor előkészít, értelmez és munkaritmusba rendez.</p>
        </article>
        <article class="technology-pathway__step">
          <small>02 · Gyártási ritmus</small>
          <h3>A CAD/CAM és a 3D út ugyanannak a folyamatnak állomása lehet</h3>
          <p>A tervezés, marás, nyomtatás és köztes ellenőrzések nem külön reklámelemekként, hanem egymásra épülő munkaszakaszként jelennek meg a térben.</p>
        </article>
        <article class="technology-pathway__step">
          <small>03 · Minőségi perem</small>
          <h3>Az anyag, az utómunka és az ellenőrzés külön kapuként válik láthatóvá</h3>
          <p>A folyamat vége nem automatikus döntés. A whitebox itt annak a helyét mutatja meg, ahol később anyaghasználati, dokumentációs és szakmai kontrollpontok jelenhetnek meg.</p>
        </article>
      </div>
      <aside class="technology-pathway__guard" aria-label="Fogtechnikai whitebox korlát">
        <strong>Whitebox-határ</strong>
        <p>Itt még nincs gépteljesítmény-ígéret, nincs automatikus anyagválasztás és nincs online szakmai döntés. A tér a laborfolyamat logikáját mutatja, nem végleges szakmai állítást.</p>
      </aside>
    </section>`;
}

function renderHero() {
  sceneRoot.innerHTML = `
    <section class="hero-scene hero-scene--keyvisual" id="scene-content" aria-labelledby="hero-title">
      <h1 class="visually-hidden" id="hero-title">DTA Virtual Space – válasszon egy teret</h1>
      <div aria-hidden="true" class="hero-keyvisual">
        <div class="hero-keyvisual__image"></div>
        <div class="hero-keyvisual__shade hero-keyvisual__shade--top"></div>
        <div class="hero-keyvisual__shade hero-keyvisual__shade--bottom"></div>
        <div class="hero-keyvisual__shade hero-keyvisual__shade--right"></div>
      </div>
      <div class="hero-copy">
        <p class="hero-copy__claim">Mi állunk a mosolyok mögött.</p>
        <p class="hero-copy__guidance">Segítünk eligazodni a lehetőségek között.</p>
      </div>
      <div class="hero-hotspots" aria-label="Belépési portálok">
        ${portals
          .map(
            ([targetId, label, description]) => `
              <a
                aria-label="${description}"
                class="hero-hotspot hero-hotspot--${targetId}"
                data-target="${targetId}"
                href="#${targetId}"
              >
                <span aria-hidden="true" class="hero-hotspot__frame"></span>
                <span class="visually-hidden">${label}</span>
              </a>`,
          )
          .join("")}
      </div>
    </section>`;
}

function renderContent(scene) {
  const stops = scene.stops
    .map(
      ([index, title, body]) => `
        <section class="story-stop story-stop--${scene.id}" data-stop-index="${index}" id="${scene.id}-stop-${index}">
          <div aria-hidden="true" class="story-stop__marker">${index}</div>
          <div class="story-stop__copy">
            <p class="scene-kicker">Állomás ${index}</p>
            <h2>${title}</h2>
            <p>${body}</p>
          </div>
          <div aria-hidden="true" class="story-stop__volume"><span></span><span></span><span></span></div>
        </section>`,
    )
    .join("");

  const destination = scene.futureExit
    ? scene.futureTarget
      ? `<a aria-label="${scene.futureExit} – belépés a következő térbe" class="future-portal future-portal--active" data-target="${scene.futureTarget}" href="#${scene.futureTarget}">
          <span class="scene-kicker">Következő tér</span><strong>${scene.futureExit}</strong><small>Belépés a portálon át</small>
        </a>`
      : scene.futureHref
        ? `<a aria-label="${scene.futureExitDescription || `${scene.futureExit} – külső szakmai oldal`}" class="future-portal future-portal--active future-portal--external" href="${scene.futureHref}" rel="noreferrer" target="_blank">
          <span class="scene-kicker">Külön szakmai oldal</span><strong>${scene.futureExit}</strong><small>Szakmai fórum · bérmunka · együttműködés · szakmai támogatás</small>
        </a>`
      : `<div aria-label="${scene.futureExitDescription || `${scene.futureExit} – későbbi portál`}" class="future-portal future-portal--planned${scene.id === "clinics" ? " future-portal--booking" : ""}${scene.id === "technology" ? " future-portal--external" : ""}" role="img">
          <span class="scene-kicker">${scene.id === "clinics" ? "Zárt adatkapu" : scene.id === "technology" ? "Külön szakmai oldal" : "Következő tér"}</span><strong>${scene.futureExit}</strong><small>${scene.id === "clinics" ? "Későbbi funkció · jelenleg nincs adatbekérés" : scene.id === "technology" ? "Működő honlap · anyagrendelés és kurzusjelentkezés · korszerűsítés későbbi menetben" : "Tervezett portál"}</small>
          ${scene.id === "clinics" ? bookingGatePreviewMarkup() : ""}
        </div>`
    : `<p class="scene-exit__note">A partneri kapcsolódás helye a következő tartalmi körben készül.</p>`;

  sceneRoot.innerHTML = `
    <article class="content-scene content-scene--${scene.id}" id="scene-content">
      <header class="scene-intro scene-intro--${scene.id}">
        <div class="scene-intro__copy">
          <p class="scene-kicker">${scene.code}</p><h1>${scene.title}</h1><p>${scene.intro}</p>
        </div>
        ${sceneVisualMarkup(scene.id)}
        <span aria-hidden="true" class="scroll-cue">Görgetés</span>
      </header>
      ${scene.id === "guidance" ? hostConsoleMarkup() : ""}
      ${scene.id === "guidance" ? knowledgePreviewMarkup() : ""}
      ${scene.id === "clinics" ? `<div aria-label="Saját rendelők rendelői útvonala" class="clinic-journey">${clinicConsoleMarkup()}${clinicOrientationMarkup()}${clinicPathwayMarkup()}</div>` : ""}
      ${scene.id === "technology" ? technologyConsoleMarkup() : ""}
      ${scene.id === "technology" ? technologyPathwayMarkup() : ""}
      <div class="story-track">${stops}</div>
      <footer class="scene-exit">
        ${destination}
        <a class="return-link" data-target="hero" href="#hero"><span aria-hidden="true">←</span> Vissza a virtuális előtérbe</a>
      </footer>
    </article>`;
}

function render(sceneId) {
  const scene = scenes[sceneId];
  currentScene = sceneId;
  app.dataset.scene = sceneId;
  app.style.setProperty("--scene-accent", scene.accent);
  app.style.setProperty("--scene-accent-soft", scene.soft);
  sceneId === "hero" ? renderHero() : renderContent(scene);
  document.title = `${scene.title} – DTA Virtual Space whitebox`;
}

function navigate(targetId, updateHistory = true, sourceLink = null) {
  if (transitioning || targetId === currentScene || !(targetId in scenes)) return;
  const target = scenes[targetId];

  if (reducedMotion.matches) {
    render(targetId);
    if (updateHistory) history.pushState({ scene: targetId }, "", `#${targetId}`);
    window.scrollTo(0, 0);
    liveRegion.textContent = `${target.title} tér betöltve.`;
    return;
  }

  transitioning = true;
  setTransitionOrigin(sourceLink, targetId);
  app.style.setProperty("--target-accent", target.accent);
  app.style.setProperty("--target-soft", target.soft);
  app.dataset.phase = "closing";
  liveRegion.textContent = `Átlépés ide: ${target.title}`;

  setTimeout(() => {
    render(targetId);
    if (updateHistory) history.pushState({ scene: targetId }, "", `#${targetId}`);
    window.scrollTo(0, 0);
    app.dataset.phase = "opening";
  }, 640);

  setTimeout(() => {
    app.dataset.phase = "idle";
    transitioning = false;
    clearTransitionOrigin();
    liveRegion.textContent = `${target.title} tér betöltve.`;
  }, 1220);
}

function updateClinicRoutePreview(select) {
  const root = select.closest(".booking-gate-preview");
  const option = select.selectedOptions[0];
  if (!root || !option) return;

  const badge = root.querySelector("[data-clinic-route-badge]");
  const title = root.querySelector("[data-clinic-route-title]");
  const note = root.querySelector("[data-clinic-route-note]");
  const tone = root.querySelector("[data-clinic-route-tone]");
  const focus = root.querySelector("[data-clinic-route-focus]");
  const nextStep = root.querySelector("[data-clinic-route-next-step]");
  const consult = root.querySelector("[data-clinic-route-consult]");
  const booking = root.querySelector("[data-clinic-route-booking]");
  const selected = root.querySelector(".booking-gate-preview__selected-route");

  if (badge) badge.textContent = option.dataset.badge || "";
  if (title) title.textContent = option.textContent || "";
  if (note) note.textContent = option.dataset.note || "";
  if (tone) tone.textContent = option.dataset.tone || "";
  if (focus) focus.textContent = option.dataset.focus || "";
  if (nextStep) nextStep.textContent = option.dataset.nextStep || "";
  if (consult) consult.textContent = option.dataset.consult || "";
  if (booking) booking.textContent = option.dataset.booking || "";
  if (selected) {
    selected.classList.toggle(
      "booking-gate-preview__selected-route--featured",
      option.dataset.featured === "true",
    );
  }
}

document.addEventListener("click", (event) => {
  const knowledgeButton = event.target.closest("button[data-knowledge-tag]");

  if (knowledgeButton) {
    setActiveKnowledgeCard(knowledgeButton.dataset.knowledgeTag);
    return;
  }

  const link = event.target.closest("a[data-target]");
  if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  navigate(link.dataset.target, true, link);
});

document.addEventListener("change", (event) => {
  const select = event.target.closest("select[data-clinic-route-select]");
  if (!select) return;
  updateClinicRoutePreview(select);
});

window.addEventListener("popstate", () => {
  const targetId = location.hash.slice(1) in scenes ? location.hash.slice(1) : "hero";
  navigate(targetId, false);
});

window.addEventListener("hashchange", () => {
  const targetId = location.hash.slice(1) in scenes ? location.hash.slice(1) : "hero";
  navigate(targetId, false);
});

app.addEventListener("pointermove", (event) => {
  if (reducedMotion.matches || currentScene !== "hero") return;
  const x = (event.clientX / innerWidth - 0.5) * 2;
  const y = (event.clientY / innerHeight - 0.5) * 2;
  app.style.setProperty("--look-x", x.toFixed(3));
  app.style.setProperty("--look-y", y.toFixed(3));
});

render(currentScene);
