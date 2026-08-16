export type ServiceCatalogItem = {
  categoryId: string;
  groupId: string;
  id: string;
  image: string | null;
  imageAlt: string;
  slug: string;
  tags: readonly string[];
  title: string;
};

export type ServiceCatalogGroup = {
  description: string;
  focus: string;
  id: string;
  items: readonly ServiceCatalogItem[];
  title: string;
};

export type ServiceCatalogCategory = {
  accent: string;
  description: string;
  groups: readonly ServiceCatalogGroup[];
  id: string;
  items: readonly ServiceCatalogItem[];
  order: string;
  partnerUse: string;
  reviewFocus: string;
  shortTitle: string;
  title: string;
  workflow: readonly string[];
};

const categorySources = [
  {
    accent: "#4f746c",
    description: "Koronák, hidak, csapok és műcsonkok rögzített fogpótlási rendszerben.",
    id: "rogzitett-fogpotlasok",
    order: "I",
    partnerUse: "Árlista mellé tehető alapkategória rögzített munkák egyeztetéséhez.",
    reviewFocus: "Anyag, indikáció és preparációs helyzet csak rendelői kontrollal véglegesíthető.",
    shortTitle: "Rögzített",
    title: "Rögzített fogpótlások",
    workflow: ["Rendelői adat", "Anyagirány", "Laborfolyamat"],
    groups: [
      {
        description:
          "Hagyományos fémbázisú koronák, hidak és ideiglenes megoldások rendelői-labor egyeztetéshez.",
        focus: "Alapanyag, fogszám, ideiglenes vagy végleges munkairány tisztázása.",
        title: "Fém alapú",
        items: [
          "Teljes fémkorona",
          "Fémkerámia korona",
          "Fémkerámia híd",
          "Maryland híd",
          "Ideiglenes korona",
          "Ideiglenes híd",
        ],
      },
      {
        description:
          "Esztétikai fókuszú, fémmentes anyagcsaládok digitális vagy kerámiai munkafolyamatokhoz.",
        focus: "Esztétikai igény, anyagválasztás és rendeltetés szakmai egyeztetése.",
        title: "Fémmentes",
        items: [
          "Monolitikus cirkónium korona",
          "Rétegzett cirkónium korona",
          "Monolitikus cirkónium híd",
          "Rétegzett cirkónium híd",
          "Lítium-diszilikát (e.max)",
          "Préskerámia",
          "Hybrid ceramic",
          "Kompozit CAD/CAM pótlások",
        ],
      },
      {
        description:
          "Felépítmények és csapos megoldások olyan esetek előkészítéséhez, ahol a későbbi pótlás stabil laboralapot igényel.",
        focus: "Felépítmény típusa, kapcsolódó pótlás és laboroldali előkészítés pontosítása.",
        title: "Csapok és műcsonkok",
        items: [
          "Öntött csapos műcsonk",
          "Technikai csap",
          "Üvegszálas csap felépítése (laboroldali elemek)",
          "Egyedi titán műcsonk",
          "Cirkónium műcsonk",
          "TiBase felépítmény",
        ],
      },
    ],
  },
  {
    accent: "#6c7d55",
    description: "Teljes, részleges és speciális kivehető fogpótlási irányok.",
    id: "kiveheto-potlasok",
    order: "II",
    partnerUse: "Kivehető munkák gyors áttekintése rendelői indikáció és labor-előkészítés mellé.",
    reviewFocus: "A rögzítés, komfort és anyagérzékenység nem dönthető el katalógusból.",
    shortTitle: "Kivehető",
    title: "Kivehető pótlások",
    workflow: ["Kiinduló helyzet", "Rögzítési irány", "Próba és átadás"],
    groups: [
      {
        description:
          "Teljes fogsorok hagyományos, digitális vagy implantátumon rögzülő munkairányokhoz.",
        focus: "Teljes fogsor típusa és az esethez illő munkafolyamat előzetes tisztázása.",
        title: "Teljes fogsorok",
        items: [
          "Hagyományos teljes fogsor",
          "Digitális teljes fogsor",
          "Implantátumon rögzülő overdenture",
        ],
      },
      {
        description:
          "Részleges pótlási formák eltérő alapanyaggal, rögzítési logikával és laborfolyamattal.",
        focus: "Foghiány, megtámasztás, rögzítés és anyagirány egyeztetése.",
        title: "Részleges fogsorok",
        items: ["Akrilát részleges", "Fémlemezes részleges", "Kombinált részleges"],
      },
      {
        description:
          "Speciális anyaghasználatú, rugalmas vagy komfortfókuszú kivehető megoldások külön egyeztetési igényekhez.",
        focus: "Anyag, rugalmasság, alábélelés és érzékenységi kérdés külön szakmai kontrollja.",
        title: "Speciális fogsorok és alábélelés",
        items: [
          "Flexibilis fogsor",
          "Semiflexibilis fogsor",
          "Thermoplasztikus fogsor",
          "Anyagérzékenységi egyeztetést igénylő fogsor",
          "Szilikonos alábélelés",
        ],
      },
    ],
  },
  {
    accent: "#7b6a50",
    description: "Teleszkóp, attachment és speciális rögzítési rendszerű munkák.",
    id: "kombinalt-munkak",
    order: "III",
    partnerUse: "Összetettebb rögzítési rendszerek laboroldali egyeztetésének fejezete.",
    reviewFocus: "A rögzítési rendszer választása mindig tervezési és rendelői döntési pont.",
    shortTitle: "Kombinált",
    title: "Kombinált munkák",
    workflow: ["Pillérhelyzet", "Rögzítési rendszer", "Próba"],
    groups: [
      {
        description:
          "Teleszkópos rögzítési rendszerek kombinált munkák tervezéséhez és laboroldali kivitelezéséhez.",
        focus: "Primer-szekunder elemek, frikció és pótlástípus egyeztetése.",
        title: "Teleszkóp rendszerek",
        items: ["Teleszkóp korona", "Galvano teleszkóp", "Kúpos teleszkóp"],
      },
      {
        description:
          "Attachment elemek és kapcsolódó rendszerek részleges vagy kombinált munkák kontrollált rögzítéséhez.",
        focus: "Rendszertípus, helyigény és kapcsolódó pótlás laboroldali előkészítése.",
        title: "Attachment rendszerek",
        items: [
          "Preci-Vertix",
          "Preci-Horix",
          "OT Cap",
          "OT Strategy",
          "OT Equator",
          "Kugel",
          "Vario",
        ],
      },
    ],
  },
  {
    accent: "#8a615a",
    description: "Implantátumokra épülő koronák, hidak, felépítmények és rehabilitációk.",
    id: "implantologia",
    order: "IV",
    partnerUse: "Implantátumos munkák technikai és felépítményi egyeztetéséhez.",
    reviewFocus: "Implantációs, protetikai és anyaghasználati döntés csak jóváhagyott szakmai folyamatban történhet.",
    shortTitle: "Implant",
    title: "Implantológia",
    workflow: ["Implant-adat", "Felépítmény", "Pótlás"],
    groups: [
      {
        description:
          "Implantátumokra épülő pótlások, felépítmények és teljes íves rehabilitációs munkairányok.",
        focus: "Rendszerkompatibilitás, felépítmény, rögzítési mód és átadott digitális adat ellenőrzése.",
        title: "Implantológiai pótlások",
        items: [
          "Implantátumos korona",
          "Implantátumos híd",
          "Csavarozott pótlás",
          "Cementezett pótlás",
          "Egyedi felépítmények",
          "All-on-4",
          "All-on-6",
          "Full Arch rehabilitáció",
          "PMMA ideiglenes rehabilitáció",
        ],
      },
    ],
  },
  {
    accent: "#5f70a0",
    description: "CBCT alapú digitális implanttervezés és sebészeti sablonrendszerek.",
    id: "digitalis-implanttervezes",
    order: "V",
    partnerUse: "Digitális tervezési és sablon-előkészítési munkák áttekintése.",
    reviewFocus: "A tervezési adat és sablonhasználat csak rendelői-sebészeti döntéssel értelmezhető.",
    shortTitle: "Implantterv",
    title: "Digitális implanttervezés",
    workflow: ["Képalkotó adat", "Tervezés", "Sablon"],
    groups: [
      {
        description:
          "Digitális implanttervezési és sebészeti sablonfeladatok rendelői tervezési folyamatok támogatására.",
        focus: "CBCT, lenyomat/szkennelés, tervezési cél és sablontípus tisztázása.",
        title: "Tervezés és sablonok",
        items: [
          "CBCT alapú tervezés",
          "Implantpozíció tervezése",
          "Sebészeti fúrósablon",
          "Stackable Guide",
          "Bone Reduction Guide",
          "Immediate Loading Guide",
        ],
      },
    ],
  },
  {
    accent: "#7663a0",
    description: "Fogszabályozási digitális előkészítés és kiegészítő laborfeladatok.",
    id: "orthodontia",
    order: "VI",
    partnerUse: "Fogszabályozási kiegészítők és digitális előkészítés egyeztetéséhez.",
    reviewFocus: "A fogszabályozási döntés nem katalógustétel, hanem rendelői kezelési terv része.",
    shortTitle: "Fogszab.",
    title: "Fogszabályozási kiegészítők",
    workflow: ["Setup", "Sablon", "Retenció"],
    groups: [
      {
        description:
          "Fogszabályozási előkészítő és kiegészítő laborfeladatok digitális tervezési háttérrel.",
        focus: "Tervezési állapot, sín/sablon funkció és rendelői kontrollpont egyeztetése.",
        title: "Fogszabályozási munkák",
        items: ["Clear aligner előkészítés", "Digitális setup", "Retainer sín", "Attachment sablon", "IPR sablon"],
      },
    ],
  },
  {
    accent: "#4e8492",
    description: "Harapási, védő, fehérítő és retenciós sínek.",
    id: "sinek",
    order: "VII",
    partnerUse: "Sín jellegű munkák rendelői döntés utáni labor-előkészítéséhez.",
    reviewFocus: "A sín típusa és alkalmazási célja szakmai indikációhoz kötött.",
    shortTitle: "Sínek",
    title: "Sínek",
    workflow: ["Lenyomat/adat", "Sínfunkció", "Átadás"],
    groups: [
      {
        description:
          "Harapási, védő, retenciós és fehérítő sínek rendelői indikáció alapján indított laborfolyamathoz.",
        focus: "Funkció, vastagság, anyag és átadási cél rendelői egyeztetése.",
        title: "Sín típusok",
        items: [
          "Michigan sín",
          "Bruxizmus sín",
          "Harapásemelő sín",
          "Retenciós sín",
          "Fehérítő sín",
          "Sportvédő sín",
        ],
      },
    ],
  },
  {
    accent: "#4c7aa0",
    description: "Digitális tervezési, fájljavítási és modelltervezési szolgáltatások.",
    id: "digitalis-szolgaltatasok",
    order: "VIII",
    partnerUse: "Digitális fájlok rendezéséhez, tervezéséhez és modell-előkészítéséhez.",
    reviewFocus: "A digitális adat minősége, forrása és rendeltetése minden esetben tisztázandó.",
    shortTitle: "Digitális",
    title: "Digitális szolgáltatások",
    workflow: ["Fájlátvétel", "Tervezés", "Előkészítés"],
    groups: [
      {
        description:
          "Digitális fájl-előkészítés, tervezés és modellmunka a rendelőből vagy partnerlaborból érkező adatokhoz.",
        focus: "Fájlformátum, javítási igény, tervezési cél és átadási formátum pontosítása.",
        title: "Tervezés és fájl-előkészítés",
        items: [
          "CAD tervezés",
          "STL javítás",
          "STL optimalizálás",
          "Exocad design",
          "Digitális wax-up",
          "Digitális mosolytervezés",
          "Modelltervezés",
        ],
      },
    ],
  },
  {
    accent: "#6e8563",
    description: "3D nyomtatott modellek, sablonok, próbák és ideiglenes elemek.",
    id: "haromd-nyomtatas",
    order: "IX",
    partnerUse: "Nyomtatott segédelemek és ideiglenes munkairányok rendelői-labor előkészítéséhez.",
    reviewFocus: "A nyomtatott elem rendeltetése, anyaga és utókezelése nem általánosítható.",
    shortTitle: "3D nyomtatás",
    title: "3D nyomtatás",
    workflow: ["Digitális modell", "Nyomtatás", "Utómunka"],
    groups: [
      {
        description:
          "Nyomtatott modellek, sablonok, próbák és ideiglenes elemek digitális gyártási háttérrel.",
        focus: "Rendeltetés, anyag, pontossági igény és végfelhasználás előzetes tisztázása.",
        title: "Nyomtatott elemek",
        items: [
          "Modell",
          "Csonkmodell",
          "Implantmodell",
          "Fogszabályozó modell",
          "Sebészeti sablon",
          "Egyéni kanál",
          "Harapási sablon",
          "Próbasor",
          "Ideiglenes korona",
          "Ideiglenes híd",
        ],
      },
    ],
  },
  {
    accent: "#7d6f58",
    description: "Marási munkák cirkóniumból, PMMA-ból, waxból és speciális anyagokból.",
    id: "cad-cam-gyartas",
    order: "X",
    partnerUse: "CAD/CAM marási feladatok anyag- és gyártási egyeztetéséhez.",
    reviewFocus: "Az anyaghasználat és gyártási út csak rendeltetés és gyártói előírás alapján értelmezhető.",
    shortTitle: "Gyártás",
    title: "CAD/CAM gyártás",
    workflow: ["CAM-adat", "Anyag", "Marás"],
    groups: [
      {
        description:
          "CAD/CAM marási feladatok esztétikai, ideiglenes és speciális anyagcsaládokhoz.",
        focus: "Anyagtípus, blokk/korong, rendeltetés és átadási forma egyeztetése.",
        title: "Marási szolgáltatások",
        items: [
          "Cirkónium marás",
          "PMMA marás",
          "Wax marás",
          "Kompozit marás",
          "Hybrid ceramic marás",
          "Acetal marás",
          "PEEK marás",
          "PEKK marás",
        ],
      },
    ],
  },
] as const;

function slugify(value: string) {
  return value
    .toLocaleLowerCase("hu-HU")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const serviceCatalogCategories: readonly ServiceCatalogCategory[] = categorySources.map(
  (category) => {
    const groups = category.groups.map((group, groupIndex) => {
      const groupId = `${category.id}-${slugify(group.title)}`;

      return {
        description: group.description,
        focus: group.focus,
        id: groupId,
        title: group.title,
        items: group.items.map((title, itemIndex) => ({
          categoryId: category.id,
          groupId,
          id: `${category.id}-${String(groupIndex + 1).padStart(2, "0")}-${String(
            itemIndex + 1,
          ).padStart(2, "0")}`,
          image: null,
          imageAlt: `${title} katalóguskép`,
          slug: slugify(title),
          tags: [category.title, category.shortTitle, group.title, group.focus, ...category.workflow],
          title,
        })),
      };
    });

    return {
      ...category,
      groups,
      items: groups.flatMap((group) => group.items),
    };
  },
);

export const serviceCatalogItems = serviceCatalogCategories.flatMap((category) => category.items);
