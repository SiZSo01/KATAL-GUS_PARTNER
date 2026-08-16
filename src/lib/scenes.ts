export type SceneId = "hero" | "dentists" | "guidance" | "clinics" | "technology";

export type SceneStop = {
  index: string;
  title: string;
  body: string;
};

export type ScenePortal = {
  id: string;
  target: SceneId | null;
  status: "active" | "planned";
  label: string;
  accessibleDescription: string;
  externalUrl?: string;
  previewAssetKey: string;
  transition: "expand" | "fade";
};

export type SceneDefinition = {
  id: SceneId;
  slug: string;
  path: string;
  code: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  accent: string;
  accentSoft: string;
  portals: readonly ScenePortal[];
  stops: readonly SceneStop[];
};

export const scenes: Record<SceneId, SceneDefinition> = {
  hero: {
    id: "hero",
    slug: "",
    path: "/",
    code: "HERO",
    title: "DTA Virtual Space",
    metaTitle: "Virtuális előtér",
    metaDescription: "A DTA Virtual Space három összekapcsolódó világának virtuális előtere.",
    intro: "Válasszon egy portált.",
    accent: "#b8f5e7",
    accentSoft: "rgba(184, 245, 231, 0.18)",
    portals: [
      {
        id: "hero-to-dentists",
        target: "dentists",
        status: "active",
        label: "Fogorvosok",
        accessibleDescription: "Belépés a fogorvosi együttműködés és digitális workflow terébe.",
        previewAssetKey: "dentists-portal-whitebox",
        transition: "expand",
      },
      {
        id: "hero-to-guidance",
        target: "guidance",
        status: "active",
        label: "Miben segíthetünk?",
        accessibleDescription: "Belépés a digitális recepció és tudástár központi terébe.",
        previewAssetKey: "guidance-portal-whitebox",
        transition: "expand",
      },
      {
        id: "hero-to-technology",
        target: "technology",
        status: "active",
        label: "Fogtechnikusok",
        accessibleDescription: "Belépés a digitális labor és a fogtechnikai technológiák terébe.",
        previewAssetKey: "technology-portal-whitebox",
        transition: "expand",
      },
    ],
    stops: [],
  },
  dentists: {
    id: "dentists",
    slug: "fogorvosok",
    path: "/fogorvosok",
    code: "SCENE 02",
    title: "Fogorvosok",
    metaTitle: "Fogorvosok",
    metaDescription: "Digitális workflow, laborháttér és kiszámítható fogorvos–fogtechnikus együttműködés.",
    intro: "Partneri tér a rendelőből érkező adattól a követhető laborfolyamatig.",
    accent: "#74d9c1",
    accentSoft: "rgba(116, 217, 193, 0.2)",
    portals: [
      {
        id: "dentists-to-hero",
        target: "hero",
        status: "active",
        label: "Vissza a virtuális előtérbe",
        accessibleDescription: "Visszatérés a három fő portált tartalmazó virtuális előtérbe.",
        previewAssetKey: "hero-return-whitebox",
        transition: "fade",
      },
    ],
    stops: [
      {
        index: "01",
        title: "Esetindítás és digitális adat",
        body: "A rendelőből érkező információ rendezett útvonalon indul el a labor felé.",
      },
      {
        index: "02",
        title: "Közös tervezési ritmus",
        body: "A rendelő és a labor ugyanazt a folyamatot látja: állapot, visszajelzés, következő lépés.",
      },
      {
        index: "03",
        title: "Partneri kapcsolódás",
        body: "A cél egy nyugodt, egyértelmű út az első szakmai egyeztetés elindításához.",
      },
    ],
  },
  guidance: {
    id: "guidance",
    slug: "segitunk-eligazodni",
    path: "/segitunk-eligazodni",
    code: "SCENE 03",
    title: "Segítünk eligazodni",
    metaTitle: "Segítünk eligazodni",
    metaDescription:
      "Pácienseknek és érdeklődő látogatóknak szóló virtuális tudástár, kérdésrendező és eligazodási tér.",
    intro:
      "Pácienseknek és érdeklődő látogatóknak szóló virtuális tudástár, ahol a DTA szakmai tapasztalata, a hagyományos megoldások és a mai digitális fogtechnikai lehetőségek közérthető kérdésirányokká rendeződnek.",
    accent: "#dab9ff",
    accentSoft: "rgba(218, 185, 255, 0.2)",
    portals: [
      {
        id: "guidance-to-clinics",
        target: "clinics",
        status: "active",
        label: "Saját rendelők",
        accessibleDescription:
          "Belépés a Saját rendelők terébe, ahol az időpontfoglalás későbbi, adatvédelmi kapu utáni előszobája található.",
        previewAssetKey: "clinics-portal-whitebox",
        transition: "expand",
      },
      {
        id: "guidance-to-hero",
        target: "hero",
        status: "active",
        label: "Vissza a virtuális előtérbe",
        accessibleDescription: "Visszatérés a három fő portált tartalmazó virtuális előtérbe.",
        previewAssetKey: "hero-return-whitebox",
        transition: "fade",
      },
    ],
    stops: [
      {
        index: "01",
        title: "Információs házigazda",
        body:
          "A látogatót a tér közepén megjelenő házigazda-konzol fogadja. Nem feltételez problémát és nem kér adatot, hanem segít elhelyezni, milyen kérdésre vagy irányra keres választ.",
      },
      {
        index: "02",
        title: "Kérdésből tudástér",
        body: "A tudástár a látogató saját helyzetéből indul: helyzetek, megoldási családok, anyagok, digitális folyamatok, esetek, videók és konzultációra felkészítő kérdések rendeződnek átfogó témacsaládokká. Ez nem éles kereső, nem diagnózis és nem kezelési terv, hanem biztonságos tájékozódási szerkezet.",
      },
      {
        index: "03",
        title: "Átjárás a Saját rendelőkbe",
        body: "Ha a látogató már érti, merre szeretne továbbmenni, a tér végén megjelenő portálon át a Saját rendelők virtuális előszobájába léphet — a prototípusban személyes adat megadása nélkül.",
      },
    ],
  },
  clinics: {
    id: "clinics",
    slug: "sajat-rendelok",
    path: "/sajat-rendelok",
    code: "SCENE 03B",
    title: "Saját rendelők",
    metaTitle: "Saját rendelők",
    metaDescription:
      "A guidance tudásbázisból érkező látogatók rendelői előszobája, ahol szakmai segítséget kérhetnek diagnózis és online kezelési terv nélkül.",
    intro:
      "A guidance térből érkező látogató itt lép át a DTA saját rendelőinek nyugodt előterébe: amit a tudástárban megértett, az itt szakmai beszélgetésre vihető kérdéssé rendeződik. A tér nem diagnosztizál, nem készít kezelési tervet és nem kér adatot.",
    accent: "#ffd9a8",
    accentSoft: "rgba(255, 217, 168, 0.2)",
    portals: [
      {
        id: "clinics-to-booking",
        target: null,
        status: "planned",
        label: "Időpontfoglalás",
        accessibleDescription:
          "Az éles időpontfoglalási modul zárt, későbbi kapuja. A jelenlegi prototípus csak a foglalási út helyét mutatja; személyes vagy egészségügyi adat megadása nem lehetséges.",
        previewAssetKey: "booking-portal-planned",
        transition: "expand",
      },
      {
        id: "clinics-to-hero",
        target: "hero",
        status: "active",
        label: "Vissza a virtuális előtérbe",
        accessibleDescription: "Visszatérés a három fő portált tartalmazó virtuális előtérbe.",
        previewAssetKey: "hero-return-whitebox",
        transition: "fade",
      },
    ],
    stops: [
      {
        index: "01",
        title: "Megérkezés és megnyugvás",
        body:
          "A látogató a tudásbázisból érkezik egy nyugodt rendelői előtérbe, ahol a kérdései még nem panaszlapként, hanem beszélgetési irányként jelennek meg. A prototípus nem kér lokációt, panaszleírást vagy személyes adatot.",
      },
      {
        index: "02",
        title: "Szakmai beszélgetés előkészítése",
        body:
          "A megszerzett információk alapján a látogató láthatja, milyen témákat érdemes szakemberrel tisztázni. Ebben a buildben ez biztonságos, közérthető whitebox-jel: nem diagnózis, nem kezelési terv és nem szakmai ajánlás.",
      },
      {
        index: "03",
        title: "Zárt időpontfoglalási kapu",
        body:
          "A rendelői út végén jelenik meg a későbbi időpontfoglalási kapu. A kapu mögött már látszik a következő rendelői réteg sűrített előképe, de működő foglalás, páciensadat-kérés és külső integráció csak adatvédelmi, jogi és szakmai jóváhagyás után kerülhet ide.",
      },
    ],
  },
  technology: {
    id: "technology",
    slug: "fogtechnika",
    path: "/fogtechnika",
    code: "SCENE 04",
    title: "Fogtechnika",
    metaTitle: "Fogtechnika",
    metaDescription:
      "Fogtechnikusoknak szóló világos, rendezett digitális labor-tér: adat-előkészítés, CAD/CAM és 3D munkaritmus, artikulátoros kontrollpontok whiteboxa.",
    intro:
      "Szakmai digitális labor-tér fogtechnikusoknak: a HERO portáljában látható fókuszált laborvilág itt teljesedik ki a beérkező adattól a gyártási ritmuson át a minőségi kontrollig.",
    accent: "#f0bd79",
    accentSoft: "rgba(240, 189, 121, 0.2)",
    portals: [
      {
        id: "technology-to-flexi",
        target: null,
        status: "active",
        label: "Flexifogsor",
        accessibleDescription:
          "Megnyitja a Flexifogsor külön működő szakmai oldalát új lapon: szakmai fórum, bérmunka, együttműködés és szakmai támogatás.",
        externalUrl: "https://flexifogsor.hu",
        previewAssetKey: "flexi-portal-planned",
        transition: "expand",
      },
      {
        id: "technology-to-hero",
        target: "hero",
        status: "active",
        label: "Vissza a virtuális előtérbe",
        accessibleDescription: "Visszatérés a három fő portált tartalmazó virtuális előtérbe.",
        previewAssetKey: "hero-return-whitebox",
        transition: "fade",
      },
    ],
    stops: [
      {
        index: "01",
        title: "Digitális adat előkészítése",
        body:
          "A beérkező digitális információ rendezett laborfolyamatba kerül. A whitebox itt nem sötét gépteret, hanem világos, természetesebb fényű bemeneti munkakörnyezetet mutat: az adat-előkészítés és az első értelmezési pontok helyét, szakmai állítás nélkül.",
      },
      {
        index: "02",
        title: "CAD/CAM gyártási ritmus",
        body:
          "A CAD/CAM, marás, nyomtatás és köztes laborállomások térbeli ritmusa itt válik láthatóvá. Ebben a buildben ez még folyamatjel: a monitor, a printerek, a scanner és a közös munkahely csak whitebox-szereplők, nem gép- vagy anyagígéret.",
      },
      {
        index: "03",
        title: "Anyag és minőségi kapu",
        body:
          "A laborút végén az anyagválasztás, artikulátoros ellenőrzési pontok és későbbi szakmai jóváhagyási kapuk helye jelenik meg. Innen külön szakmai irányként nyílik a működő Flexifogsor oldal: szakmai fórum, bérmunka, együttműködés és szakmai támogatás.",
      },
    ],
  },
};

export const sceneList = Object.values(scenes);

export function getSceneBySlug(slug?: string) {
  return sceneList.find((scene) => scene.slug === (slug ?? ""));
}
