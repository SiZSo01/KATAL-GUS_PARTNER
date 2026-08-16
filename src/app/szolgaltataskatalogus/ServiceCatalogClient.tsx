"use client";

import Link from "next/link";
import { type CSSProperties, useEffect, useMemo, useState } from "react";
import styles from "./service-catalog.module.css";

type CategoryStyle = CSSProperties & {
  "--category-accent": string;
};

type LabWorkGroup = {
  description: string;
  id: string;
  items: readonly string[];
  searchTerms?: readonly string[];
  title: string;
};

type DoctorFocusArea = {
  accent: string;
  description: string;
  groups: readonly LabWorkGroup[];
  id: string;
  order: string;
  partnerUse: string;
  reviewFocus: string;
  shortTitle: string;
  title: string;
};

type ServiceDetail = {
  labNote: string;
  sections: readonly {
    items: readonly string[];
    title: string;
  }[];
  status: string;
  summary: string;
  title: string;
};

const serviceDetails: Readonly<Record<string, ServiceDetail>> = {
  "rogzitett-munkak|rogzitett-koronak|Korona": {
    labNote:
      "Egyeztetéshez különösen hasznos: preparációs határ, fogszín, fotó, antagonista, okklúzió, lenyomat vagy scan típusa, illetve az anyagpreferencia.",
    sections: [
      {
        items: [
          "A korona a fogorvos által előkészített, preparált csonkra vagy implantátum-felépítményre készített rögzített pótlás.",
          "Feladata a forma, funkció, okklúziós kapcsolat és esztétikai megjelenés helyreállítása.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Fém korona: CoCr, NiCr vagy titánium alapanyagból",
          "Fémkerámia korona",
          "Monolitikus cirkónium korona",
          "Leplezett cirkónium korona",
          "Lítium-diszilikát / préskerámia korona",
          "PMMA ideiglenes korona",
          "Kompozit korona",
          "Acetál",
          "PEEK",
          "Nyomtatott resin, kerámiaszemcsés változatban is",
          "Filament alapú és flexibilis anyagok",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Digitálisan tervezett és mart korona",
          "Préselt kerámia korona",
          "Öntött vázra készülő, leplezett korona",
          "Nyomtatott ideiglenes vagy próba jellegű korona, anyag- és indikációfüggően",
        ],
        title: "Technológia szerint",
      },
      {
        items: [
          "Monolit, festett és glazúrozott kialakítás",
          "Cut-back forma, részleges kerámialeplezéssel",
          "Váz és teljesebb porcelánleplezés",
          "Egyedi karakterizálás fotó vagy fogszín alapján",
        ],
        title: "Rétegrend szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A korona a fogorvos által előkészített, preparált csonkra vagy implantátum-felépítményre készített rögzített pótlás.",
    title: "Korona",
  },
  "rogzitett-munkak|rogzitett-hidak|Híd": {
    labNote:
      "Egyeztetéshez különösen hasznos: pillérfogak vagy implantátum-felépítmények száma és tengelyállása, foghiány kiterjedése, fogszín, fotó, antagonista, okklúzió, lenyomat vagy scan típusa, illetve az anyagpreferencia.",
    sections: [
      {
        items: [
          "A híd a fogorvos által előkészített, több párhuzamosan preparált csonkra vagy implantátum-felépítményre készített, több tagból álló rögzített pótlás.",
          "A foghiányok pótlásával és a rágófunkció visszaállításával komplett esztétikus rehabilitációt tesz lehetővé.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Fém híd: CoCr, NiCr vagy titánium alapanyagból",
          "Fémkerámia híd",
          "Monolitikus cirkónium híd",
          "Leplezett cirkónium híd",
          "Lítium-diszilikát / préskerámia híd, indikáció szerint",
          "PMMA ideiglenes híd",
          "Kompozit híd",
          "Acetál",
          "PEEK",
          "Nyomtatott resin, kerámiaszemcsés változatban is",
          "Filament alapú és flexibilis anyagok",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Digitálisan tervezett és mart híd",
          "Préselt kerámia híd, indikáció szerint",
          "Öntött vázra készülő, leplezett híd",
          "Nyomtatott ideiglenes vagy próba jellegű híd, anyag- és indikációfüggően",
        ],
        title: "Technológia szerint",
      },
      {
        items: [
          "Monolit, festett és glazúrozott kialakítás",
          "Cut-back forma, részleges kerámialeplezéssel",
          "Váz és teljesebb porcelánleplezés",
          "Egyedi karakterizálás fotó vagy fogszín alapján",
        ],
        title: "Rétegrend szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A híd több párhuzamosan preparált csonkra vagy implantátum-felépítményre készített, több tagból álló rögzített pótlás.",
    title: "Híd",
  },
  "rogzitett-munkak|rogzitett-hidak|Fémmerevített cirkónium híd": {
    labNote:
      "Egyeztetéshez különösen hasznos: a fesztáv hossza, a pillérfogak vagy implantátum-felépítmények helyzete, az átmenő csavarok és csavarcsatornák iránya, az okklúziós terhelés, az antagonista, a rendelkezésre álló vertikális tér, a digitális lenyomat vagy scan, valamint az, hogy reverse engineering vagy meglévő pótlás alapján történik-e a visszatervezés.",
    sections: [
      {
        items: [
          "A fémmerevített cirkónium híd nagyobb fesztávú, egyedileg tervezett rögzített pótlás, amelynél a cirkónium szerkezet belsejébe titánium vagy CoCr bar / merevítőelem tervezhető.",
          "A megoldás a hybrid, Prettau jellegű és csavarozott implantpótlások digitális tervezési irányaihoz kapcsolódik, ahol a csavarcsatornák és a belső tartószerkezet együtt határozzák meg a konstrukciót.",
          "Célja nem egy általános anyagígéret, hanem a nagy fesztávú hidaknál jelentkező repedési és törési kockázatok szerkezeti kezelése, a stabilitás és a terheléselosztás támogatásával.",
          "Nem sablonmegoldás: az eset geometriája, a pillérek vagy implantátumok helyzete, az okklúzió és a rendelkezésre álló tér alapján külön labor-rendelői egyeztetést igényel.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Titánium merevítéssel tervezett cirkónium híd",
          "CoCr merevítéssel tervezett cirkónium híd",
          "Belső iBar / bar jellegű fémmerevítéssel készülő hybrid konstrukció",
          "Átmenő csavaros, csavarcsatornával tervezett implant híd",
          "Reverse engineering alapján visszatervezett nagy fesztávú munka",
          "Implantátumos vagy pillérfogakra tervezett egyedi konstrukció, esetfüggően",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Cirkónium szerkezet",
          "Titánium merevítőelem",
          "CoCr merevítőelem",
          "Leplezett vagy karakterizált külső felszín, terv szerint",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Digitális visszatervezés / reverse engineering meglévő forma vagy diagnosztikus terv alapján",
          "CAD/CAM tervezés a fém merevítés és a cirkónium szerkezet illesztésével",
          "Belső bar, csavarcsatornák és cementrés / illesztési tér ellenőrzése",
          "Fesztáv, connector-keresztmetszet és terhelési irányok laboroldali egyeztetése",
          "Próba, illeszkedés és passzivitás ellenőrzése rendelői visszajelzés alapján",
        ],
        title: "Technológia szerint",
      },
      {
        items: [
          "Blender for Dental iBar jellegű workflow: meglévő hybrid vagy cirkónium forma belsejébe visszatervezett belső bar, a csavarfuratok figyelembevételével.",
          "exocad Bar Module jellegű workflow: bar-típusú pótlások, superstructure és retenciós / csavarozott elemek digitális tervezése.",
          "3Shape Dental System implant bridge / implant bar workflow: implant hidak, barok és csavarozott konstrukciók CAD-tervezési környezete.",
          "A konkrét szoftveres út a labor digitális rendszerétől, az implantkönyvtártól, a gyártási partnertől és az eset indikációjától függ.",
        ],
        title: "Digitális tervezési háttér",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "Nagy fesztávú cirkónium vagy hybrid implant híd egyedi laboroldali megoldása, amelynél belső titánium vagy CoCr bar / merevítés segítheti a szerkezet stabilitását és terheléselosztását.",
    title: "Fémmerevített cirkónium híd",
  },
  "rogzitett-munkak|rogzitett-felepitmenyek|Csapos műcsonk": {
    labNote:
      "Egyeztetéshez különösen hasznos: gyökércsatorna hossza és iránya, megmaradt koronai foganyag, ferrule lehetősége, tervezett végleges korona vagy hídpillér, lenyomat vagy scan típusa, röntgeninformáció és anyagpreferencia. A rendelőben készülő direkt üvegszálas felépítés külön orvosi döntés és munkafolyamat; ez a katalógusrész a laborban készített csapos pótlási elemekre fókuszál.",
    sections: [
      {
        items: [
          "Itt a laborban készített csapos pótlási elemek szerepelnek.",
          "A csapos műcsonk gyökérkezelt, jelentős koronai anyagveszteségű fog felépítésére szolgáló csap és műcsonk rendszer.",
          "A csap fő feladata a műcsonk retenciójának biztosítása, amikor a megmaradt koronai foganyag önmagában nem elegendő a végleges korona vagy hídpillér stabil megtartásához.",
          "Cementezést követően preparált csonkként, vagy sapkás kialakításban már kész funkcionális pótlásként kapcsolódhat a végleges ellátáshoz.",
          "Az indikációt a megmaradt foganyag, a ferrule lehetősége, a gyökércsatorna-forma és a későbbi terhelés együtt határozza meg.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Csapos műcsonk: a szájban történő cementezést követően mintegy preparált csonkként funkcionál.",
          "Csapos \"sapkás\" műcsonk: leplezést követően azonnal kész, teljes funkcionalitással cementezhető a páciens szájába.",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Titánium",
          "CoCr",
          "NiCr",
          "Cirkónium",
          "PEEK",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Indirekt, laborban készülő egyedi csapos műcsonk",
          "Digitálisan tervezett és mart egyedi felépítmény",
          "Öntött technológia egyedi mintázat alapján",
          "Végleges pótláshoz igazított tengelyállás és preparációs forma",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A csapos műcsonk gyökérkezelt, jelentős koronai anyagveszteségű fog felépítésére szolgáló csap és műcsonk rendszer, amely preparált csonkként vagy sapkás, kész funkcionális pótlásként kapcsolódhat a végleges ellátáshoz.",
    title: "Csapos műcsonk",
  },
  "kiveheto-munkak|kiveheto-teljes-fogsorok|Teljes fogsor": {
    labNote:
      "Egyeztetéshez különösen hasznos: anatómiai és funkciós lenyomat vagy scan, harapási sablon, centrális reláció, vertikális dimenzió, fogszín, fogforma, mosolyív, próbafogsor igénye és a tervezett próbaritmus. Anyagérzékenység vagy allergiamentes/fémmentes igény esetén az anyagválasztás külön egyeztethető.",
    sections: [
      {
        items: [
          "A teljes fogsor teljes foghiány esetén készülő kivehető pótlás.",
          "Feladata a rágófunkció, beszéd, ajaktámasz és esztétikai megjelenés laboroldali helyreállításának előkészítése.",
          "A rendelői indikáció és próbalépések alapján készülő pótlás, amelyet a páciens a szájából ki tud venni.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Teljes akril fogsor",
          "Semiflexibilis akril alapú teljes fogsor",
          "Flexibilis teljes fogsor, indikáció szerint",
          "Szilikonnal alábélelt teljes fogsor, indikáció szerint",
          "Fémmentes / allergiabarát anyagválasztással készülő fogsor, egyeztetés alapján",
          "Fémhálóval erősített akril fogsor, indikáció szerint",
          "Fémsúlynövelővel kiegészített fogsor, indikáció szerint",
          "Próbasor / próbafogsor",
          "Implantátumon rögzülő overdenture, rendelői terv alapján",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Akril",
          "Semiflexibilis akril",
          "Flexibilis nylon / poliamid",
          "Flexibilis resin",
          "Nylon / poliamid filament",
          "Szilikon alábélelő anyag",
          "Fémmentes / allergiabarát anyagirány, rendelői anamnézis alapján egyeztetve",
          "Fémháló vagy fémsúlynövelő kiegészítő elem",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Hagyományos laborfolyamat próbafogfelállítással",
          "Digitálisan tervezett teljes fogsor",
          "Mart vagy nyomtatott próbaelem, anyag- és indikációfüggően",
          "Szilikonos alábélelés készítése rendelői indikáció és próbák alapján",
          "Végleges fogsor készítése a rendelői próbák és visszajelzések alapján",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A teljes fogsor teljes foghiány esetén készülő kivehető pótlás, amely a rágófunkció, beszéd, ajaktámasz és esztétika helyreállítását segíti.",
    title: "Teljes fogsor",
  },
  "kiveheto-munkak|kiveheto-reszleges-fogsorok|Részleges fogsor": {
    labNote:
      "Egyeztetéshez különösen hasznos: maradó fogak helyzete, alámenők és kapocsterületek, foghiány kiterjedése, behelyezési irány, okklúzió, fogszín, modell vagy scan, valamint az esztétikai kapocsigény. Anyagérzékenység vagy allergiamentes/fémmentes igény esetén az anyagválasztás külön egyeztethető.",
    sections: [
      {
        items: [
          "A részleges fogsor részleges foghiány esetén készülő kivehető pótlás.",
          "A pótlás a maradó fogakhoz, nyálkahártyához és az anatómiai adottságokhoz igazodva pótolja a hiányzó fogakat.",
          "Retencióját a konstrukciótól függően kapcsok, klipszek, lemezrészek vagy egyéb laborban készített elemek segíthetik.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Akrilát részleges fogsor",
          "Fémlemezes részleges fogsor",
          "Titánium vagy CoCr fémlemezes részleges pótlás",
          "Semiflexibilis részleges fogsor",
          "Flexibilis részleges fogsor",
          "Szilikonnal alábélelt részleges fogsor, indikáció szerint",
          "Fémmentes / allergiabarát részleges pótlás, egyeztetés alapján",
          "Kapcsos / klipszes részleges pótlás",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Akril",
          "Titánium fémlemez / váz",
          "CoCr fémlemez / váz",
          "Semiflexibilis akril",
          "Flexibilis nylon / poliamid",
          "Acetal (POM, polioximetilén)",
          "PEEK",
          "Flexibilis resin",
          "Nylon / poliamid filament",
          "Szilikon alábélelő anyag",
          "Fémmentes / allergiabarát anyagirány, rendelői anamnézis alapján egyeztetve",
          "Fémháló vagy fémsúlynövelő kiegészítő elem",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Hagyományos részleges fogsor laborfolyamat",
          "Fémlemezes váz készítése laboroldali tervezéssel",
          "Digitálisan tervezett részleges pótlás",
          "Mart, nyomtatott vagy flexibilis technológiai irány anyag- és indikációfüggően",
          "Szilikonos alábélelés készítése rendelői indikáció és próbák alapján",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A részleges fogsor részleges foghiány esetén készülő kivehető pótlás, amely a maradó fogakhoz és anatómiai adottságokhoz igazodva pótolja a hiányzó fogakat.",
    title: "Részleges fogsor",
  },
  "kiveheto-munkak|kiveheto-kapcsok|Kapcsok és klipszek": {
    labNote:
      "Egyeztetéshez különösen hasznos: mely fogon vagy területen legyen retenció, milyen az alámenő, mennyire fontos az esztétika, milyen a behelyezési irány, illetve milyen alapanyaggal készül a részleges pótlás. Anyagérzékenység vagy fémmentes igény esetén a kapocs/klipsz anyaga külön egyeztethető.",
    sections: [
      {
        items: [
          "A kapocs vagy klipsz a részleges kivehető pótlás retencióját segítő laborban készített elem.",
          "Nem önálló pótlás, hanem a részleges fogsor vagy kombinált kivehető pótlás megtartását, behelyezhetőségét és esztétikai elfogadhatóságát segítő rész.",
          "A konkrét kialakítás a rendelői indikáció, az alámenők és a pótlás tervezett anyaga alapján egyeztethető.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Akril vagy semiflexibilis alapba integrált retenciós forma",
          "Titánium vagy CoCr fém kapocs / retenciós elem",
          "Flexibilis nylon / poliamid kapocs",
          "Acetal / POM kapocs vagy klipsz",
          "PEEK kapocs vagy klipsz",
          "Fémmentes / allergiabarát kapocs vagy klipsz, egyeztetés alapján",
          "Flexibilis resinből vagy filamentből készülő retenciós elem, indikáció szerint",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Akril",
          "Titánium",
          "CoCr",
          "Semiflexibilis akril",
          "Flexibilis nylon / poliamid",
          "Acetal (POM, polioximetilén)",
          "PEEK",
          "Flexibilis resin",
          "Nylon / poliamid filament",
          "Fémmentes / allergiabarát anyagirány, rendelői anamnézis alapján egyeztetve",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Laboroldali kapocstervezés modell vagy scan alapján",
          "Retenciós forma igazítása alámenőkhöz és behelyezési irányhoz",
          "Mart, nyomtatott vagy flexibilis technológiai kivitel anyagfüggően",
          "Próba és rendelői ellenőrzés alapján finomítható illeszkedés",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A kapcsok és klipszek a részleges kivehető pótlások retencióját segítő, laborban készített elemek.",
    title: "Kapcsok és klipszek",
  },
  "kombinalt-potlasok|kombinalt-reszleges-potlasok|Kombinált részleges fogsor": {
    labNote:
      "Egyeztetéshez különösen hasznos: a maradó fogak és foghiányok elhelyezkedése, a tervezett rögzített primer rész, milyen egymásra épülő szuprastruktúra-szintekből álljon a pótlás, a behelyezési irány, az alámenők, az okklúzió, a mosolyzóna, az esztétikai kapocselvárás, a modell vagy scan, valamint az anyagérzékenység vagy fémmentes igény.",
    sections: [
      {
        items: [
          "A kombinált részleges fogsor olyan részleges kivehető pótlás, amely rögzített elemekhez - koronákhoz, hidakhoz, teleszkópokhoz, csúsztatókhoz vagy stégekhez - kapcsolódva pótolja a hiányzó fogakat.",
          "Lényege, hogy a rögzített primer rész és a kivehető szekunder rész együtt adja a pótlás retencióját, megtámasztását, vezetését és esztétikai megjelenését.",
          "Komplex esetekben egymásra épített szuprastruktúrákból állhat: primer rögzített rész, szekunder váz vagy alaplemez, retenciós attachmentek, stég/csúsztató/teleszkóp és fogsoralap/fogpótló rész együtt alkotja a teljes rendszert.",
          "A legprecízebb megvalósításhoz a hagyományos laborlépések mellett kiemelt szerepe lehet a digitális designnak, mert egyben tervezhető a behelyezési irány, az illeszkedés, a retenció és a szuprastruktúra-szintek egymásra épülése.",
          "A konkrét konstrukció a rendelői indikáció, a maradó fogak állapota, a pillérek tengelyállása és a páciens tisztíthatósági lehetőségei alapján egyeztethető.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Koronához vagy hídhoz kapcsolódó kombinált részleges fogsor",
          "Egymásra épülő szuprastruktúrákból kialakított komplex kombinált pótlás",
          "Csúsztatóval vagy finommechanikai elemmel rögzülő részleges fogsor",
          "Teleszkópos primer/szekunder rendszerrel készülő részleges pótlás",
          "Stéghez vagy bar jellegű elhorgonyzáshoz kapcsolódó részleges pótlás",
          "Frézelt vállal, vezetősíkkal és támasztékkal stabilizált részleges pótlás",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "CoCr vagy titánium fémváz / fémlemez",
          "Akril vagy semiflexibilis akril fogsoralap",
          "Acetal (POM, polioximetilén) vagy PEEK alaplemez / szekunder váz, illetve retenciós elem, indikáció szerint",
          "Cirkónium, fémkerámia vagy fém primer korona/híd rész, terv szerint",
          "Nylon, poliamid vagy cserélhető retenciós betét, rendszerfüggően",
          "Allergiamentes / fémmentes irány külön egyeztetéssel, ahol az eset és a retenció ezt lehetővé teszi",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Modellanalízis, behelyezési irány és alámenők laboroldali ellenőrzése",
          "Digitális design a primer és szekunder részek, retenciós elemek, vezetősíkok és anyagvastagságok pontos összehangolására",
          "Primer rögzített rész és szekunder kivehető rész közös tervezése",
          "Szuprastruktúra-szintek illesztése: primer rész, szekunder váz, retenciós elem és fogsoralap összehangolása",
          "CAD/CAM és hagyományos fémváz-tervezés összehangolása, a retenciós elemekhez és próbamenethez igazítva",
          "Próba, illeszkedés, retenció és okklúzió finomítása rendelői visszajelzés alapján",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A kombinált részleges fogsor rögzített primer elemekhez kapcsolódó kivehető pótlás, ahol a két rész együtt biztosítja a retenciót, megtámasztást és esztétikai megjelenést.",
    title: "Kombinált részleges fogsor",
  },
  "kombinalt-potlasok|kombinalt-reszleges-potlasok|Fémlemezes kombinált pótlás": {
    labNote:
      "Egyeztetéshez különösen hasznos: a fémlemez tervezett kiterjedése, a pillérek helyzete, a támasztékok és vezetősíkok helye, az elhorgonyzás típusa, a nyálkahártya-terhelés, az okklúzió, valamint titánium vagy CoCr anyagpreferencia.",
    sections: [
      {
        items: [
          "A fémlemezes kombinált pótlás részleges kivehető pótlás, amelynek szekunder része fémvázzal vagy fémlemezzel készül, és rögzített primer elemekhez kapcsolódik.",
          "A fémváz feladata a pótlás merevségének, stabilitásának, támasztásának és kontrollált behelyezési irányának támogatása.",
          "A pótlás kialakítása a maradó fogak terhelhetősége, a nyálkahártya-alátámasztás és az esztétikai elvárás alapján egyeztetendő.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "CoCr fémlemezes kombinált pótlás",
          "Titánium fémlemezes kombinált pótlás",
          "Csúsztatóval vagy finommechanikai elemmel kapcsolódó fémlemezes pótlás",
          "Frézelt vállhoz és vezetősíkhoz illeszkedő fémlemezes pótlás",
          "Stéghez vagy teleszkópos elemekhez kapcsolódó fémlemezes konstrukció",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "CoCr fémváz",
          "Titánium fémváz",
          "Akril fogsoralap és műfogak",
          "Cserélhető retenciós betétek, klipszek vagy matricák, rendszer szerint",
          "Acetal vagy PEEK alaplemez / szekunder váz, illetve kiegészítő retenciós elem, indikáció szerint",
          "Allergiamentes irány esetén titánium vagy fémmentes alternatíva külön egyeztetéssel",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Paralelométeres vagy digitális behelyezésiirány-tervezés",
          "Öntött, mart vagy additív fémváz-készítés, laborfolyamattól függően",
          "Támasztékok, vezetősíkok, kapocs- vagy attachment-helyek közös tervezése",
          "Fémvázpróba, harapás, fogfelállítás és véglegesítés rendelői próbák alapján",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A fémlemezes kombinált pótlás rögzített primer elemekhez kapcsolódó, fémvázas részleges kivehető pótlás.",
    title: "Fémlemezes kombinált pótlás",
  },
  "kombinalt-potlasok|kombinalt-reszleges-potlasok|Frézelt vállhoz illeszkedő részleges pótlás": {
    labNote:
      "Egyeztetéshez különösen hasznos: mely koronákon vagy hídtagokon készül frézelt váll, vezetősík vagy támaszték, milyen legyen a behelyezési irány, hol legyen retenció, mennyire látható a mosolyzóna, illetve készül-e hozzá fémlemez vagy finommechanikai elem.",
    sections: [
      {
        items: [
          "A frézelt vállhoz illeszkedő részleges pótlás olyan kombinált munka, ahol a rögzített korona vagy híd primer részén kialakított frézelt felületek vezetik és stabilizálják a kivehető részt.",
          "A frézelt váll, vezetősík és támaszték segítheti a pótlás behelyezési irányát, oldalirányú stabilitását és terheléselosztását.",
          "A pontos forma a rögzített és kivehető rész közös laboroldali tervezését igényli.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Frézelt koronához kapcsolódó részleges pótlás",
          "Frézelt hídhoz kapcsolódó részleges pótlás",
          "Vezetősíkkal és támasztékkal stabilizált részleges pótlás",
          "Frézelt váll plusz csúsztató vagy retenciós elem kombinációja",
          "Fémlemezes vagy fémmentes szekunder rész, indikáció szerint",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Fémkerámia, fém vagy cirkónium primer korona/híd rész",
          "CoCr vagy titánium szekunder fémváz",
          "Akril, kompozit vagy fogsoralap-anyag a fogpótló részhez",
          "Acetal vagy PEEK alaplemez / szekunder váz, illetve retenciós kiegészítő, indikáció szerint",
          "Fémmentes / allergiabarát irány egyedi tervezéssel, ha a stabilitás megengedi",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Közös primer-szekunder tervezés a behelyezési irány alapján",
          "Frézelt vállak, vezetősíkok és támasztékok kialakítása modell vagy scan alapján",
          "Szekunder fémváz vagy kivehető rész illesztése a frézelt felületekhez",
          "Próbák során a passzivitás, retenció és okklúzió finomítása",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A frézelt vállhoz illeszkedő részleges pótlásnál a rögzített primer rész kialakított felületei vezetik és stabilizálják a kivehető részt.",
    title: "Frézelt vállhoz illeszkedő részleges pótlás",
  },
  "kombinalt-potlasok|kombinalt-elhorgonyzasok|Teleszkópos pótlás": {
    labNote:
      "Egyeztetéshez különösen hasznos: a teleszkópos pillérek száma, tengelyállása, parodontális terhelhetősége, a tervezett primer és szekunder anyag, a retenció mértéke, a behelyezési irány, valamint a tisztíthatósági és javíthatósági szempontok.",
    sections: [
      {
        items: [
          "A teleszkópos pótlás kettős koronás rendszer: a primer korona a pillérre kerül, a szekunder korona pedig a kivehető részbe épül.",
          "A retenciót és vezetést a primer és szekunder felületek illeszkedése, súrlódása vagy kúpossága adja.",
          "Készülhet részleges kivehető pótlásként, több pilléren elosztott megtámasztással, a rendelői indikáció alapján.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Párhuzamos falú teleszkópos pótlás",
          "Kúpos teleszkópos pótlás",
          "Teleszkópos részleges fogsor fémvázzal",
          "Teleszkópos pótlás fogon vagy implantátumos felépítményen, esetfüggően",
          "Teleszkóp plusz kiegészítő kapocs, stég vagy retenciós elem, terv szerint",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "CoCr",
          "Titánium",
          "Cirkónium primer vagy szekunder elem, indikáció szerint",
          "Akril vagy kompozit fogpótló rész",
          "PEEK vagy Acetal alaplemez / szekunder váz, illetve kiegészítő retenciós elem, egyedi terv alapján",
          "Allergiamentes / fémmentes irány külön esetegyeztetéssel",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Primer koronák párhuzamos vagy kúpos felületeinek tervezése",
          "Szekunder koronák és kivehető váz illesztése a primer részekhez",
          "CAD/CAM marás vagy hagyományos technológia, anyag- és rendszerfüggően",
          "Retenció, behelyezési irány és passzivitás finomítása próbák alapján",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A teleszkópos pótlás primer és szekunder koronák együttműködésére épülő kombinált rendszer, amely a kivehető rész retencióját és vezetését segíti.",
    title: "Teleszkópos pótlás",
  },
  "kombinalt-potlasok|kombinalt-elhorgonyzasok|Csúsztatós pótlás": {
    labNote:
      "Egyeztetéshez különösen hasznos: mely pilléren vagy hídvégen legyen csúsztató, milyen legyen a behelyezési irány, szükséges-e merev, rugalmas vagy reteszelhető kapcsolat, OT Cap / OT Unilateral vagy MK1 attachment jellegű megoldásban gondolkodunk-e, milyen a rendelkezésre álló hely, mennyire fontos a rejtett elhorgonyzás esztétikája, és cserélhető retenciós betéttel vagy nyitható reteszelemmel tervezünk-e.",
    sections: [
      {
        items: [
          "A csúsztatós pótlás olyan kombinált részleges pótlás, amelynél a rögzített primer részbe és a kivehető részbe egymáshoz illeszkedő finommechanikai elemek kerülnek.",
          "A csúsztató vagy attachment rejtett elhorgonyzásként esztétikusabb retenciót adhat, mert a megtartó elem sok esetben kevésbé látható, mint egy hagyományos kapocs.",
          "Jelentősége különösen a mosolyzónában nagy: a pótlás megtartása úgy oldható meg, hogy a retenciós elem nem kap elsődleges vizuális szerepet.",
          "OT Cap vagy OT Unilateral jellegű, hídhoz kapcsolódó féloldali elhorgonyzás egyes distalis vagy unilaterális hiányoknál implantmentes alternatívaként mérlegelhető, ha a pillérek, a helyviszonyok és a terhelés ezt megengedik.",
          "MK1 attachment vagy más reteszes elhorgonyzás esetén a pótlás zárható-nyitható finommechanikai elemmel kapcsolódhat, amely a stabilabb viselési érzetet a kivehetőség és tisztíthatóság lehetőségével kombinálja.",
          "Egyedi reteszes elhorgonyzás rendelésre is kialakítható, ha a klinikai és technikai feltételek - helyigény, kezelhetőség, javíthatóság és higiénia - ezt lehetővé teszik.",
          "A pontos elemválasztás a helyigénytől, a pillérek teherbírásától, a javíthatóságtól és az aktiválhatóságtól függ.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Intrakoronális vagy extrakoronális csúsztató",
          "Merev vagy rugalmas kapcsolatú csúsztató, rendszer szerint",
          "Cserélhető matricával / retenciós betéttel készülő finommechanikai elem",
          "Rejtett elhorgonyzás esztétikai zónában, kapocsmentesebb megjelenéshez",
          "OT Cap jellegű hídvégi extracoronalis elhorgonyzás",
          "OT Unilateral jellegű féloldali, klipszes híd-kivehető pótlás kombináció",
          "Implantációt kiváltó vagy halasztó implantmentes alternatíva, kizárólag esetfüggő indikációval",
          "MK1 attachment jellegű reteszes / zárható elhorgonyzás",
          "Egyedi igény szerint tervezett reteszes elhorgonyzás megrendelésre",
          "Csúsztatóval kombinált fémlemezes részleges pótlás",
          "Csúsztató plusz frézelt váll vagy vezetősík kombinációja",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "CoCr vagy titánium primer és szekunder elemek",
          "Gyári vagy egyedi finommechanikai attachment rendszer",
          "OT Cap / OT Unilateral jellegű gömbfej, ház és cserélhető retenciós sapka rendszer szerint",
          "MK1 attachment vagy más reteszes rendszerkomponens, megrendelés és rendszerelérhetőség szerint",
          "Nylon, műanyag vagy egyéb cserélhető retenciós betét, rendszer szerint",
          "Akril fogsoralap és műfogak",
          "Acetal vagy PEEK alaplemez / szekunder váz, illetve kiegészítő retenciós elem, indikáció szerint",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Csúsztató pozíciójának tervezése a behelyezési irány és helyviszonyok alapján",
          "Primer korona/híd és szekunder kivehető rész közös CAD vagy hagyományos tervezése",
          "Hídvégi OT Cap vagy OT Unilateral jellegű attachment helyének és terhelési irányának egyeztetése",
          "MK1 vagy egyedi reteszes elhorgonyzás helyének, nyitási irányának és kezelhetőségének megtervezése",
          "Retenciós betét, aktiválhatóság és javíthatóság figyelembevétele",
          "Próba után retenció, illeszkedés és okklúzió finomítása",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A csúsztatós pótlás rejtett finommechanikai elemmel rögzülő kombinált részleges pótlás, amely esztétikusabb elhorgonyzást adhat a látható kapcsokhoz képest.",
    title: "Csúsztatós pótlás",
  },
  "kombinalt-potlasok|kombinalt-elhorgonyzasok|Stéges részleges pótlás": {
    labNote:
      "Egyeztetéshez különösen hasznos: fogon vagy implantátumon készül-e a stég, hány pillérre támaszkodik, egy vagy több fogat átívelő rejtett elhorgonyzásra van-e szükség, milyen egymásra épülő szuprastruktúra-szintekből álljon a munka, milyen legyen a stégprofil, Dolder, PRECI-HORIX vagy más rendszerjellegű retencióval tervezzünk-e, kombináljuk-e attachmentekkel, hol legyenek a klipszek, matricák vagy beépített retenciós elemek, fém-műanyag vagy fém-fém retenciós felszíneket alakítsunk-e ki, mennyi hely áll rendelkezésre a fogsoralap alatt, és mennyire fontos a javíthatóság.",
    sections: [
      {
        items: [
          "A stéges részleges pótlás olyan kombinált munka, ahol a rögzített primer rész stég vagy bar jellegű összekötő elem, amelyhez a kivehető rész retenciós klipszekkel vagy más retenciós elemmel kapcsolódik.",
          "A stég egy vagy több fogat átívelő rejtett elhorgonyzásként is működhet, amely a részleges pótlás megtartását nem látható kapocsra, hanem belső retenciós kapcsolatra építi.",
          "A stég segítheti a pillérek összekapcsolását, a retenciót, a részleges pótlás kontrollált behelyezését és a több retenciós szint kialakítását.",
          "A stéges pótlás összetett szuprastruktúraként is kialakítható, ahol a primer stég, a szekunder váz/alaplemez, az attachmentek és a fogsoralap egymásra épített rendszert alkotnak.",
          "A precíziós stéges megoldásoknál a digitális design különösen fontos: a stégprofil, a retenciós felszínek, az attachmentek, az anyagvastagságok és a higiéniai terek egy rendszerben ellenőrizhetők.",
          "Az elhorgonyzás lehet egyszerűbb stég-klipsz kapcsolat, de lehet horizontális vagy stégbe integrált finommechanikai rendszer is, a helyviszonyok és a javíthatóság alapján.",
          "Esetenként attachmentekkel kombinálható, hogy a fém-műanyag vagy fém-fém retenciós felszínek együtt adjanak stabilabb, finomabban hangolható megtartást.",
          "A konstrukció fogon vagy implantátumon is értelmezhető, de minden esetben az indikáció, tisztíthatóság és helyviszonyok alapján egyeztetendő.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Fogpillérekre készülő stéges részleges pótlás",
          "Implantátumon vagy implantfelépítményen rögzülő stéges részleges pótlás",
          "Egy vagy több fogat átívelő rejtett stéges elhorgonyzás",
          "Egymásra épített szuprastruktúrákból álló stéges pótlás",
          "Dolder jellegű stég egyszerűbb, klipszes/rideres retencióval",
          "PRECI-HORIX jellegű horizontális stéges elhorgonyzás",
          "Klipszes / matricás retencióval kapcsolódó stéges pótlás",
          "Stégbe épített vagy stégbe integrált elhorgonyzó elemek",
          "Attachmentekkel kombinált stéges elhorgonyzás",
          "Fém-műanyag retenciós felszínekkel kialakított stéges pótlás",
          "Fém-fém retenciós felszínekkel kialakított stéges pótlás",
          "Egyedi mart stéghez illeszkedő részleges pótlás",
          "Stég és fémlemezes részleges váz kombinációja",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Titánium stég",
          "CoCr stég",
          "CoCr vagy titánium szekunder fémváz",
          "Akril fogsoralap és műfogak",
          "Dolder, PRECI-HORIX vagy más rendszerjellegű klipsz, rider, matrica vagy patrica-matrica elem",
          "Fém-műanyag retenciós felszínek: fém stéghez kapcsolódó műanyag rider, matrica, klipsz vagy retenciós betét",
          "Fém-fém retenciós felszínek: fém stég és fém szekunder elem közötti precíziós illeszkedés, indikáció szerint",
          "Acetal vagy PEEK alaplemez / szekunder váz, illetve nylon, műanyag, Acetal vagy PEEK retenciós klipsz / betét, rendszer és indikáció szerint",
          "Allergiamentes vagy fémmentes retenciós irány külön egyeztetéssel",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Stégprofil, behelyezési irány és retenciós helyek digitális vagy hagyományos tervezése",
          "Digitális design a stégprofil, retenciós felszínek, attachment-pozíciók, szekunder váz és fogsoralap pontos összehangolására",
          "Egy vagy több fogat átívelő rejtett elhorgonyzási szakasz megtervezése",
          "Primer stég, szekunder váz/alaplemez, attachment-szint és fogsoralap egymásra épített illesztése",
          "Mart, öntött vagy additív módon készülő fém stég, laborfolyamattól függően",
          "Dolder, horizontális PRECI-HORIX jellegű vagy stégbe integrált retenciós rendszer kiválasztása",
          "Attachmentek, klipszek és retenciós felszínek rétegezése a kívánt retenciós biztonság szerint",
          "Fém-műanyag és fém-fém retenciós felületek illesztése, aktiválhatóság és javíthatóság figyelembevételével",
          "Szekunder rész illesztése klipszekkel, riderekkel, matricákkal vagy retenciós betétekkel",
          "Passzivitás, retenció, higiéniai tér és okklúzió ellenőrzése próbák alapján",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A stéges részleges pótlásnál a kivehető rész egy vagy több fogat átívelő, rejtett stéghez / barhoz kapcsolódik, esetenként attachmentekkel és rétegzett retenciós felszínekkel.",
    title: "Stéges részleges pótlás",
  },
  "implant-munkak|implant-koronak-hidak|Implantátumos korona": {
    labNote:
      "Egyeztetéshez különösen hasznos: implant rendszer, implantkönyvtár, scanbody adatok, felépítmény típusa, csavarozott vagy cementezett irány, gingivahelyzet, fogszín, fotó, antagonista, okklúzió, lenyomat vagy scan típusa, illetve a csavarcsatorna esztétikai és funkcionális helyzete.",
    sections: [
      {
        items: [
          "Az implantátumos korona implantátumhoz kapcsolódó egyedi rögzített pótlás, amely implantfelépítményre, TiBase-re vagy közvetlen csavarozott kialakításra készülhet.",
          "A laboroldali tervezésnél a korona formája mellett a gingivaátmenet, a csavarcsatorna, a kontaktpontok, az okklúzió és a tisztíthatóság is fontos.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Csavarozott implant korona",
          "Cementezett implant korona",
          "TiBase-re vagy titán bázisra ragasztott hybrid korona",
          "Egyedi felépítményre készülő implant korona",
          "Ideiglenes implant korona",
          "Monolitikus vagy részben leplezett implant korona",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Cirkónium",
          "Lítium-diszilikát / préskerámia, indikáció szerint",
          "Fémkerámia",
          "PMMA ideiglenes korona",
          "Kompozit ideiglenes vagy átmeneti korona",
          "Titánium vagy TiBase kapcsolódó elem",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Digitális tervezés implantkönyvtár és scanbody adatok alapján",
          "Emergence profile és gingivaátmenet kialakítása a rendelkezésre álló lágyrészhelyzet szerint",
          "Csavarcsatorna helyzetének ellenőrzése esztétikai, okklúziós és hozzáférési szempontból",
          "Kontaktpontok, okklúziós érintkezések és tisztíthatóság tervezése",
          "TiBase vagy egyedi felépítmény ragasztási / illesztési felületének laboroldali előkészítése, rendszer szerint",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "Az implantátumos korona implantátumhoz kapcsolódó egyedi rögzített pótlás, ahol a felépítmény, csavarcsatorna, gingivaátmenet és okklúzió együtt határozza meg a laboroldali tervet.",
    title: "Implantátumos korona",
  },
  "implant-munkak|implant-koronak-hidak|Implantátumos híd": {
    labNote:
      "Egyeztetéshez különösen hasznos: implantok száma és tengelyállása, implant rendszer, scanbody és könyvtár, multi-unit vagy egyedi felépítmény irány, csavarozott vagy cementezett megoldás, fesztáv, antagonisták, okklúzió, fogszín, fotó és a tisztíthatósági tér.",
    sections: [
      {
        items: [
          "Az implantátumos híd több implantátumra vagy implantátum-felépítményre készülő, több tagból álló rögzített pótlás.",
          "A foghiány pótlása mellett a laboroldali tervnek figyelembe kell vennie a tengelyállásokat, a fesztávot, a passzív illeszkedés igényét, a csavarcsatornákat és a higiéniai hozzáférést.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Csavarozott implant híd",
          "Cementezett implant híd",
          "Multi-unit felépítményre készülő implant híd",
          "TiBase vagy hybrid kapcsolatú implant híd",
          "Részleges íves implant híd",
          "Ideiglenes implant híd",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Monolitikus vagy leplezett cirkónium",
          "Fémkerámia",
          "PMMA ideiglenes híd",
          "Kompozit ideiglenes vagy átmeneti híd",
          "Titánium vagy CoCr bar / merevítőelem nagyobb fesztávnál, indikáció szerint",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Implantkönyvtár, scanbody pozíciók és tengelyállások alapján készülő digitális design",
          "Passzív illeszkedés, csavarcsatorna-pozíciók és behelyezési irány ellenőrzése",
          "Fesztáv, összekötő keresztmetszetek és anyagvastagságok tervezése",
          "Higiéniai tér, gingivaforma és tisztíthatóság egyeztetése",
          "Próbafázis vagy prototípus alkalmazása nagyobb kiterjedésű munkáknál, rendelői terv szerint",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "Az implantátumos híd több implantátumra vagy felépítményre készülő rögzített pótlás, ahol a tengelyállás, passzivitás, fesztáv és tisztíthatóság közös tervezést igényel.",
    title: "Implantátumos híd",
  },
  "implant-munkak|implant-koronak-hidak|Csavarozott pótlás": {
    labNote:
      "Egyeztetéshez különösen hasznos: implant tengelyállás, csavarcsatorna kilépési helye, implant rendszer, felépítmény vagy TiBase típusa, okklúziós felszín, esztétikai zóna, hozzáférhetőség és a rendelői csavarozási protokoll.",
    sections: [
      {
        items: [
          "A csavarozott implant pótlás olyan implantprotetikai munka, amely csavaros kapcsolattal rögzül az implantátumhoz, felépítményhez vagy multi-unit rendszerhez.",
          "Előnye, hogy a pótlás bizonyos esetekben visszavehető és kontrollálható, de a csavarcsatorna helyzete esztétikai és okklúziós kompromisszumot is jelenthet.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Csavarozott implant korona",
          "Csavarozott implant híd",
          "Multi-unit felépítményre készülő csavarozott pótlás",
          "TiBase-re készülő csavarozott hybrid pótlás",
          "Teljes íves csavarozott implant pótlás",
          "Ideiglenes csavarozott pótlás",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Cirkónium",
          "Fémkerámia",
          "PMMA ideiglenes anyag",
          "Kompozit átmeneti anyag",
          "Titánium vagy TiBase kapcsolódó elem",
          "CoCr vagy titánium merevítő / bar nagyobb kiterjedésnél, indikáció szerint",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Csavarcsatorna pozíciójának digitális ellenőrzése",
          "Access nyílás méretének és zárhatóságának tervezése",
          "Okklúziós érintkezések rendezése úgy, hogy a csavarcsatorna ne rontsa indokolatlanul a funkciót",
          "Esztétikai zónában a csavarcsatorna kilépési helyének külön egyeztetése",
          "Rendszerhez illeszkedő csavar, bázis és felépítmény használata a rendelői terv alapján",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A csavarozott pótlás csavaros kapcsolattal rögzülő implantprotetikai megoldás, ahol a visszavehetőség mellett a csavarcsatorna helye kulcsfontosságú tervezési kérdés.",
    title: "Csavarozott pótlás",
  },
  "implant-munkak|implant-koronak-hidak|Cementezett pótlás": {
    labNote:
      "Egyeztetéshez különösen hasznos: felépítmény típusa és magassága, preparációs váll helyzete, gingivaszint, cementezési határ láthatósága, implant tengelyállás, pótlás anyaga, okklúzió és tisztíthatóság.",
    sections: [
      {
        items: [
          "A cementezett implant pótlás olyan korona vagy híd, amely implantfelépítményre cementtel rögzül.",
          "A laboroldali forma célja, hogy a felépítmény, a széli zárás, az emergence profile és a tisztíthatóság a rendelői cementezést minél jobban támogassa.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Cementezett implant korona",
          "Cementezett implant híd",
          "Egyedi felépítményre készülő cementezett pótlás",
          "Ideiglenesen cementezhető átmeneti implant pótlás",
          "Esztétikai zónában alkalmazott cementezett megoldás, indikáció szerint",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Cirkónium",
          "Fémkerámia",
          "Lítium-diszilikát / préskerámia, indikáció szerint",
          "PMMA ideiglenes anyag",
          "Titánium vagy cirkónium egyedi felépítmény",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Felépítmény vállának és cementezési határának tervezése a tisztíthatóság figyelembevételével",
          "Cementrés, behelyezési irány és retenciós forma kialakítása",
          "Emergence profile és gingivaátmenet összehangolása a lágyrészhelyzettel",
          "Okklúzió, kontaktpontok és pótlásszélek ellenőrzése",
          "A cementfelesleg eltávolíthatóságának rendelői szempontjaihoz igazodó forma, esetfüggően",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A cementezett implant pótlás felépítményre cementtel rögzülő korona vagy híd, ahol a széli zárás, cementezési határ és tisztíthatóság külön figyelmet igényel.",
    title: "Cementezett pótlás",
  },
  "implant-munkak|implant-felepitmenyek|Egyedi felépítmény": {
    labNote:
      "Egyeztetéshez különösen hasznos: implant rendszer és átmérő, scanbody, implantkönyvtár, gingivamagasság, tengelyeltérés, tervezett korona vagy híd típusa, vállszint, csavarhozzáférés, fogszín és a rendelői protetikai cél.",
    sections: [
      {
        items: [
          "Az egyedi implantfelépítmény az implantátum és a korona vagy híd közötti, esethez tervezett kapcsolóelem.",
          "Feladata, hogy a tengelyállást, gingivaátmenetet, vállszintet és protetikai formát a tervezett pótláshoz igazítsa.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Egyedi titán felépítmény",
          "Egyedi cirkónium felépítmény",
          "Hybrid felépítmény TiBase kapcsolattal",
          "Koronához készülő egyedi felépítmény",
          "Hídhoz készülő egyedi felépítmény",
          "Csavarozott vagy cementezett pótlást előkészítő felépítmény",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Titánium",
          "Cirkónium",
          "TiBase és cirkónium / kerámia suprastruktúra",
          "CoCr rendszerfüggő vagy egyedi indikációval",
          "PMMA vagy resin próbaelem, ellenőrzéshez",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Scanbody és implantkönyvtár alapján készülő digitális tervezés",
          "Gingivaátmenet, emergence profile és vállszint meghatározása",
          "Tengelykorrekció és csavarhozzáférés ellenőrzése",
          "Korona- vagy hídkonstrukcióhoz illeszkedő preparált csonkforma kialakítása",
          "Próbaelem vagy ellenőrző modell alkalmazása összetettebb esetben, rendelői igény szerint",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "Az egyedi felépítmény az implantátum és a pótlás közötti, esethez tervezett kapcsolóelem, amely a tengelyállást, gingivát és vállszintet a végleges munkához igazítja.",
    title: "Egyedi felépítmény",
  },
  "implant-munkak|implant-felepitmenyek|TiBase felépítmény": {
    labNote:
      "Egyeztetéshez különösen hasznos: implant rendszerhez tartozó TiBase típusa, gingivamagasság, ragasztási felszín, tervezett korona vagy híd anyaga, csavarcsatorna, okklúzió, fogszín és a rendelői protetikai irány.",
    sections: [
      {
        items: [
          "A TiBase felépítmény gyári titán bázisra épülő implantprotetikai kapcsolat, amelyre laboroldalon tervezett korona, hybrid korona vagy felépítményrész készülhet.",
          "A titán kapcsolódó felszín stabil implantkapcsolatot ad, miközben a látható vagy protetikai forma digitálisan alakítható.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "TiBase-re ragasztott hybrid korona",
          "TiBase-re készülő hybrid felépítmény",
          "Csavarozott TiBase korona",
          "TiBase kapcsolatú implant híd, rendszer és indikáció szerint",
          "Ideiglenes vagy próba jellegű TiBase megoldás, esetfüggően",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Gyári titán bázis",
          "Cirkónium suprastruktúra",
          "Lítium-diszilikát / préskerámia suprastruktúra, indikáció szerint",
          "PMMA vagy resin próbaelem",
          "Rendszerhez illeszkedő ragasztó- és felületkezelési protokoll szerint előkészített kapcsolódó felszínek",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Implantkönyvtár szerinti TiBase kiválasztás és digitális tervezés",
          "Ragasztási felület, minimális anyagvastagság és csavarcsatorna ellenőrzése",
          "Emergence profile és gingivaátmenet kialakítása",
          "Csavarhozzáférés és okklúzió összehangolása",
          "Laboroldali ragasztási előkészítés a használt rendszer és anyag előírásai szerint",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A TiBase felépítmény gyári titán bázisra épülő implantkapcsolat, amelyre digitálisan tervezett korona vagy hybrid felépítmény készülhet.",
    title: "TiBase felépítmény",
  },
  "implant-munkak|implant-teljes-ives|All-on-4": {
    labNote:
      "Egyeztetéshez különösen hasznos: rendelői implantterv, implant rendszer, multi-unit felépítmények, scanbody vagy lenyomat, harapási regisztrátum, mosolyvonal, fogfelállítás, ideiglenes vagy végleges irány, csavarcsatornák, higiéniai tér és fonetikai próbaigény.",
    sections: [
      {
        items: [
          "Az All-on-4 jellegű rehabilitáció teljes íves implantprotetikai koncepció, ahol a rendelői terv alapján négy implantátum támasztja meg a rögzített vagy átmeneti teljes íves pótlást.",
          "A katalógusban laboroldali munkaként jelenik meg: fogfelállítás, gingivaforma, csavarozott felépítés, próba, ideiglenes vagy végleges teljes íves pótlás előkészítése.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Csavarozott teljes íves ideiglenes pótlás",
          "Csavarozott teljes íves végleges pótlás",
          "Multi-unit felépítményre készülő teljes íves munka",
          "PMMA próba vagy prototípus",
          "Cirkónium vagy hybrid teljes íves pótlás, indikáció szerint",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "PMMA ideiglenes vagy próbaanyag",
          "Kompozit / resin átmeneti anyag",
          "Cirkónium végleges konstrukció",
          "Titánium vagy CoCr merevítő / bar egyedi terv szerint",
          "Akril gingivarész és műfogak, hybrid kialakításnál",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Implantkönyvtár, scanbody és multi-unit adatok alapján készülő teljes íves digitális design",
          "Csavarcsatornák, passzív illeszkedés és fesztáv ellenőrzése",
          "Fogfelállítás, mosolyvonal, ajaktámasz, fonetika és gingivaforma egyeztetése",
          "Higiéniai tér és tisztíthatóság kialakítása",
          "Próba, prototípus vagy ideiglenes munka alapján véglegesítés, rendelői terv szerint",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "Az All-on-4 jellegű munka rendelői implantterv alapján készülő teljes íves implantprotetikai rehabilitáció, ahol a labor a fogfelállítást, gingivát, csavarozott felépítést és próbafázisokat hangolja össze.",
    title: "All-on-4",
  },
  "implant-munkak|implant-teljes-ives|All-on-6": {
    labNote:
      "Egyeztetéshez különösen hasznos: implantok száma és pozíciója, implant rendszer, multi-unit irány, scanbody adatok, harapás, fogfelállítás, mosolyvonal, csavarcsatornák, ideiglenes vagy végleges anyag, higiéniai tér és próbafázisok.",
    sections: [
      {
        items: [
          "Az All-on-6 jellegű rehabilitáció teljes íves implantprotetikai koncepció, ahol a rendelői terv alapján hat implantátum ad alátámasztást a teljes íves pótláshoz.",
          "A nagyobb alátámasztási pontszám a laboroldali tervben a fesztávok, csavarcsatornák, anyagvastagságok és tisztíthatóság összehangolását igényli.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Csavarozott teljes íves All-on-6 jellegű pótlás",
          "Ideiglenes teljes íves implant pótlás",
          "Végleges cirkónium vagy hybrid teljes íves munka",
          "Multi-unit felépítményre készülő teljes íves rehabilitáció",
          "Próba vagy prototípus alapú digitális véglegesítés",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "PMMA próba vagy ideiglenes anyag",
          "Cirkónium végleges konstrukció",
          "Titánium vagy CoCr merevítő / bar indikáció szerint",
          "Akril alap és műfogak hybrid kialakításnál",
          "Kompozit vagy resin átmeneti anyag",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Hat implantpozíció scanbody adatai alapján készülő digitális design",
          "Passzív illeszkedés, fesztáv és csavarcsatorna-helyzet ellenőrzése",
          "Fogfelállítás, ajaktámasz, fonetika, okklúzió és mosolyvonal közös tervezése",
          "Higiéniai hozzáférés és gingivaforma kialakítása",
          "Prototípus, próba vagy ideiglenes pótlás alapján véglegesíthető forma, esetfüggően",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "Az All-on-6 jellegű rehabilitáció hat implantátumra tervezett teljes íves implantmunka, amelynél a fesztáv, passzivitás, fogfelállítás és tisztíthatóság egy rendszerben tervezendő.",
    title: "All-on-6",
  },
  "implant-munkak|implant-teljes-ives|Full Arch rehabilitáció": {
    labNote:
      "Egyeztetéshez különösen hasznos: teljes íves klinikai terv, implantok és felépítmények adatai, mosolyvonal, fotók, arc- és harapási adatok, ideiglenes munka, próbafázis, végleges anyag, csavarcsatornák, higiéniai tér és a kívánt esztétikai karakter.",
    sections: [
      {
        items: [
          "A Full Arch rehabilitáció teljes fogívre készülő implantprotetikai pótlás vagy pótlási folyamat, amely a fogfelállítást, gingivaformát, rágófunkciót, esztétikát és tisztíthatóságot együtt kezeli.",
          "Laboroldalon különösen fontos a digitális design, mert a csavarcsatornák, implanttengelyek, anyagvastagságok, higiéniai terek és a végleges forma egy rendszerben ellenőrizhetők.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Csavarozott teljes íves implant pótlás",
          "Cirkónium teljes íves rehabilitáció",
          "Hybrid teljes íves pótlás akril / műfog / váz kombinációval",
          "Titánium vagy CoCr merevítésű teljes íves konstrukció",
          "PMMA prototípus vagy ideiglenes rehabilitáció",
          "Digitális próba alapján véglegesített teljes íves munka",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Cirkónium",
          "PMMA próba vagy ideiglenes anyag",
          "Akril gingiva és műfogak hybrid pótláshoz",
          "Titánium vagy CoCr bar / merevítőelem egyedi laboroldali terv szerint",
          "Kompozit vagy resin átmeneti elemek",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Scanbody, implantkönyvtár és harapási adatok alapján készülő teljes íves digitális design",
          "Fogfelállítás, gingivaforma, mosolyvonal, ajaktámasz, fonetika és okklúzió összehangolása",
          "Csavarcsatornák, passzivitás, anyagvastagság és merevítési igény ellenőrzése",
          "Higiéniai terek és tisztíthatóság tervezése",
          "Prototípus, ideiglenes pótlás vagy próbafázis alapján véglegesített forma, rendelői jóváhagyással",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A Full Arch rehabilitáció teljes fogívre készülő implantprotetikai munka, ahol a fogfelállítás, gingiva, csavarcsatornák, anyagvastagságok és higiéniai terek közös digitális tervben rendezhetők.",
    title: "Full Arch rehabilitáció",
  },
  "implant-munkak|implant-teljes-ives|Ideiglenes teljes íves rehabilitáció": {
    labNote:
      "Egyeztetéshez különösen hasznos: az ideiglenesítés célja és időtartama, implantterv, felépítmények, azonnali vagy későbbi terhelési irány rendelői döntése, harapás, fogfelállítás, mosolyvonal, csavarozott vagy átmeneti rögzítési mód és a végleges munka tervezett iránya.",
    sections: [
      {
        items: [
          "Az ideiglenes teljes íves rehabilitáció átmeneti implantprotetikai pótlás, amely a gyógyulási vagy átmeneti időszakban segítheti a funkció, esztétika és harapási viszonyok kontrollját.",
          "Az azonnali vagy korai terhelés mindig rendelői/klinikai döntés; a labor a megadott terv alapján készíti elő az ideiglenes pótlást és a szükséges pozicionálási elemeket.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Csavarozott teljes íves ideiglenes pótlás",
          "PMMA teljes íves próba vagy prototípus",
          "Immediate loading munkafolyamathoz előkészített ideiglenes pótlás, klinikai döntés alapján",
          "Régi fogsor vagy diagnosztikus terv alapján készülő átmeneti forma",
          "Végleges munkát előkészítő digitális prototípus",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "PMMA",
          "Kompozit vagy resin átmeneti anyag",
          "Akril ideiglenes gingivarész és műfogak",
          "Titán bázis vagy multi-unit kapcsolódó elem, rendszer szerint",
          "Fémmerevítés csak külön indikáció és egyeztetés alapján",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Előzetes fogfelállítás, mosolyvonal és harapási adatok alapján készülő ideiglenes design",
          "Implantpozíciók, csavarcsatornák és felépítménykapcsolatok ellenőrzése",
          "Fonetika, ajaktámasz, okklúzió és gingivaforma ideiglenes tesztelése",
          "A végleges rehabilitációhoz visszavezethető digitális forma kialakítása",
          "Rendelői próba és visszajelzés alapján módosítható átmeneti forma",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "Az ideiglenes teljes íves rehabilitáció átmeneti implantprotetikai pótlás, amely a gyógyulási vagy átmeneti időszakban segítheti a forma, funkció és végleges terv ellenőrzését.",
    title: "Ideiglenes teljes íves rehabilitáció",
  },
  "implant-munkak|implant-sablonok|Pilot Guide": {
    labNote:
      "Egyeztetéshez különösen hasznos: CBCT, intraorális scan vagy modellscan, tervezett implantpozíciók, pilot fúró átmérője és mélységi iránya, támaszkodási forma, rögzítőpin igény és a rendelői sebészeti protokoll.",
    sections: [
      {
        items: [
          "A Pilot Guide olyan vezetősablon, amely elsősorban az első, pilot fúrás belépési pontját és tengelyét segíti átvinni a rendelői implanttervből a műtéti munkafolyamatba.",
          "Kevésbé teljes körű, mint a fully guided rendszer: a későbbi fúrási lépések és az implantbehelyezés kontrollja a rendelői protokoll szerint történik.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Fogon támaszkodó Pilot Guide",
          "Nyálkahártyán támaszkodó Pilot Guide",
          "Csonton támaszkodó Pilot Guide, klinikai terv szerint",
          "Egy vagy több implantpozícióhoz készülő pilot sablon",
          "Rögzítőpines sablon",
          "Protetikailag visszatervezett pilot irányjelölő sablon",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Nyomtatott biokompatibilis guide resin",
          "Fém vagy műanyag vezetőhüvely, ha a protokoll igényli",
          "Rögzítőpin rendszer szerint",
          "Átlátszó vagy színezett sablonanyag, laborfolyamattól függően",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "CBCT és intraorális scan / STL adatok illesztése",
          "Pilot furat belépési pontjának és tengelyének kijelölése a rendelői terv alapján",
          "Sablon támaszkodási felületének, vastagságának és stabilitásának tervezése",
          "Rögzítőpinek, betekintő ablakok és hozzáférési zónák kialakítása, indikáció szerint",
          "Nyomtatás, utókezelés és illeszkedés-ellenőrzés a laborfolyamat szerint",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A Pilot Guide az első fúrás belépési pontját és tengelyét segítő vezetősablon, amely a rendelői implantterv laboroldali átvitelét támogatja.",
    title: "Pilot Guide",
  },
  "implant-munkak|implant-sablonok|Sleeve Guide": {
    labNote:
      "Egyeztetéshez különösen hasznos: implant rendszer, sleeve átmérő és magasság, fúrósor, offset értékek, CBCT, intraorális scan / modellscan, támaszkodási forma, rögzítőpin igény és a rendelői guide-protokoll.",
    sections: [
      {
        items: [
          "A Sleeve Guide vezetőhüvellyel készülő implantsebészeti sablon, amely a fúró irányát és hozzáférését a kiválasztott rendszer sleeve-paramétereihez igazítja.",
          "A sleeve pozíciója, magassága és a fúrósor geometriája rendszerfüggő, ezért minden esetben a rendelői implantterv és protokoll alapján egyeztetendő.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Fogon támaszkodó Sleeve Guide",
          "Nyálkahártyán támaszkodó Sleeve Guide",
          "Csonton támaszkodó Sleeve Guide, klinikai terv szerint",
          "Egy implantpozíciós sleeve guide",
          "Több implantpozíciós sleeve guide",
          "Rögzítőpines sleeve guide",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Nyomtatott biokompatibilis guide resin",
          "Fém sleeve / vezetőhüvely rendszer szerint",
          "Rögzítőpin és vezetőhüvely kompatibilis rendszerből",
          "Átlátszó vagy kontrollálható színű próbaanyag",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "CBCT és scan / STL adatok illesztése",
          "Sleeve pozíció, furatirány, hozzáférés és fúrósor-offset ellenőrzése a rendelői terv alapján",
          "Sablonvastagság, támaszkodási felület és stabilitás tervezése",
          "Rögzítőpinek, ablakok és hozzáférési zónák kialakítása, indikáció szerint",
          "Nyomtatás, sleeve behelyezés és illeszkedés-ellenőrzés a laborfolyamat szerint",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A Sleeve Guide vezetőhüvellyel készülő implantsebészeti sablon, amely a fúrási irányt és hozzáférést a választott rendszer guide-protokolljához igazítja.",
    title: "Sleeve Guide",
  },
  "implant-munkak|implant-sablonok|Fully Guided": {
    labNote:
      "Egyeztetéshez különösen hasznos: teljes rendelői implantterv, implant rendszer és guided surgery kit, sleeve adatok, fúrási sorrend, mélységi stopok, implantbehelyezési protokoll, CBCT, scan, támaszkodási forma, rögzítőpinek és a végleges vagy ideiglenes pótlási cél.",
    sections: [
      {
        items: [
          "A Fully Guided munkafolyamat olyan implantvezetett rendszer, ahol a fúrási lépések, és rendszerfüggően az implantbehelyezés is a guide-protokollhoz illesztett sablonon keresztül történhet.",
          "A laboroldali cél a rendelői digitális implantterv pontos sablonba fordítása: sleeve-ek, mélységi kontroll, hozzáférés, stabil támaszkodás és protetikai tengelyek összehangolása.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Egy implantpozíciós fully guided sablon",
          "Több implantpozíciós fully guided sablon",
          "Fogon támaszkodó fully guided sablon",
          "Nyálkahártyán támaszkodó fully guided sablon",
          "Csonton támaszkodó fully guided sablon, klinikai terv szerint",
          "Teljes íves fully guided munkafolyamat segédlete",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Nyomtatott biokompatibilis guide resin",
          "Fém sleeve és rendszerkompatibilis vezetőelemek",
          "Rögzítőpin rendszer szerint",
          "Átlátszó vagy kontrollálható színű sablonanyag",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "CBCT és intraorális scan / STL adatok pontos illesztése",
          "Sleeve pozíciók, fúrási sorrend, mélységi kontroll és implanttengelyek ellenőrzése",
          "Guide stabilitás, hozzáférés, szájnyitás és sebészeti eszközút figyelembevétele",
          "Protetikai fogfelállítás, csavarcsatorna és implantpozíció összehangolása",
          "Nyomtatás, utókezelés, sleeve behelyezés és illeszkedés-ellenőrzés a laborfolyamat szerint",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A Fully Guided guide a fúrási lépéseket, és rendszerfüggően az implantbehelyezést is vezetett protokollba rendező implantsebészeti sablon.",
    title: "Fully Guided",
  },
  "implant-munkak|implant-sablonok|Stackable Guide": {
    labNote:
      "Egyeztetéshez különösen hasznos: teljes íves rendelői implantterv, CBCT, intraorális scan / modellscan, digitális fogfelállítás, csontredukciós igény, implant rendszer, sleeve rendszer, rögzítőpin pozíciók, ideiglenes pótlás terve, sablonok sorrendje és a műtéti-protetikai munkafolyamat lépései.",
    sections: [
      {
        items: [
          "A Stackable Guide egymásra épülő, több részből álló sablonrendszer, amely teljes íves vagy komplex implanttervezésnél a sebészeti és protetikai lépéseket közös sorrendbe rendezi.",
          "A rendszer elemei esetfüggően alap- vagy rögzítő sablonból, csontredukciós sablonból, implantfúró sablonból és ideiglenes pótlást pozicionáló sablonból állhatnak.",
          "A laboroldali feladat a rendelői terv digitális átvezetése: a sablonok egymáshoz illeszkedése, sorrendje, stabilitása és a tervezett pótlási forma kontrollálható legyen.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Alap- vagy rögzítő sablon pinpozíciókkal",
          "Bone reduction / csontredukciós sablon, klinikai terv szerint",
          "Implantfúró sablon sleeve rendszerrel",
          "Multi-unit vagy felépítmény-pozicionáló sablon",
          "Ideiglenes teljes íves pótlást pozicionáló sablon",
          "Többrészes teljes íves guided surgery munkafolyamat segédlete",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Nyomtatott guide resin",
          "Átlátszó vagy kontrollálható színű sablonanyag",
          "Fém sleeve és rögzítőpin rendszer szerint",
          "PMMA vagy resin ideiglenes pótlási elem, ha a munkafolyamat része",
          "Rendszerkompatibilis multi-unit vagy titán kapcsolódó elemek, indikáció szerint",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "CBCT, scan és digitális fogfelállítás összeillesztése a rendelői implantterv alapján",
          "A sablonrétegek sorrendjének, egymáshoz illeszkedésének és pinrögzítésének megtervezése",
          "Csontredukciós sík, implantpozíciók, sleeve-ek és protetikai tengelyek összehangolása",
          "Az ideiglenes pótlás csavarcsatornáinak, behelyezési irányának és okklúziós tervének előkészítése",
          "A műtéti és protetikai lépések sorrendjének előzetes egyeztetése, mert a stackable rendszer pontossága a teljes lánc illeszkedésén múlik",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A Stackable Guide több egymásra épülő sablonból álló, teljes íves vagy komplex implant munkafolyamatot támogató laboroldali rendszer, ahol a sebészeti és protetikai lépések digitálisan összehangolt sorrendben készülnek.",
    title: "Stackable Guide",
  },
  "implant-munkak|implant-sablonok|Bone Reduction Guide": {
    labNote:
      "Egyeztetéshez különösen hasznos: rendelői csontredukciós terv, CBCT, scan, digitális fogfelállítás, tervezett redukciós sík, pinrögzítés, implantpozíciók, stackable guide sorrend és a későbbi ideiglenes vagy végleges pótlási cél.",
    sections: [
      {
        items: [
          "A Bone Reduction Guide csontredukciós vezetősablon, amely teljes íves vagy komplex implantmunkáknál a rendelői terv szerinti redukciós sík átvitelét segítheti.",
          "Gyakran stackable munkafolyamat részeként értelmezhető: az alap- vagy rögzítő sablonhoz illeszkedve előkészítheti a következő implantfúró vagy ideiglenesítő lépést.",
          "A redukció mértéke és indikációja klinikai döntés; a labor a jóváhagyott tervhez készít digitális sablonsegédletet.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Teljes íves Bone Reduction Guide",
          "Pinrögzítéshez illeszkedő csontredukciós guide",
          "Stackable rendszerbe illeszkedő redukciós sablon",
          "Implantfúró sablont előkészítő redukciós guide",
          "Ideiglenes pótlási tervhez igazított redukciós guide",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Nyomtatott guide resin",
          "Átlátszó vagy kontrollálható színű sablonanyag",
          "Rögzítőpin rendszer szerint",
          "Fém jelölő vagy vezetőelem, rendelői igény és rendszer szerint",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "CBCT, scan és digitális fogfelállítás összeillesztése",
          "Redukciós sík, implantpozíciók és későbbi pótlási tér összehangolása",
          "Pinrögzítés és stackable kapcsolódási pontok megtervezése",
          "Hozzáférés, stabilitás és ellenőrző ablakok kialakítása, indikáció szerint",
          "A következő guide-rétegekkel való illeszkedés ellenőrzése",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A Bone Reduction Guide teljes íves vagy komplex implantmunkáknál a rendelői terv szerinti csontredukciós sík átvitelét segítő laboroldali sablon.",
    title: "Bone Reduction Guide",
  },
  "implant-munkak|implant-sablonok|Immediate Loading Guide": {
    labNote:
      "Egyeztetéshez különösen hasznos: rendelői immediate loading döntés, implantterv, primer stabilitási elvárás klinikai oldalon, ideiglenes pótlás típusa, multi-unit rendszer, sablonok sorrendje, pozicionáló kulcsok, harapás, fogfelállítás és a műtéti-protetikai munkafolyamat lépései.",
    sections: [
      {
        items: [
          "Az Immediate Loading Guide az azonnali vagy korai ideiglenesítéshez kapcsolódó laboroldali pozicionáló és munkafolyamat-segédlet.",
          "Az azonnali terhelés klinikai indikációja és feltételei a rendelő döntési körébe tartoznak; a labor a jóváhagyott terv alapján készíti elő a sablont és az ideiglenes pótláshoz szükséges elemeket.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Ideiglenes teljes íves pótláshoz kapcsolódó pozicionáló sablon",
          "Stackable Guide rendszer részeként készülő immediate loading segédlet",
          "Multi-unit felépítményekhez igazított ideiglenesítő sablon",
          "Harapási vagy pozicionáló kulcs",
          "Prototípusból visszavezetett ideiglenes pótlási munkafolyamat",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Nyomtatott guide resin",
          "PMMA vagy resin ideiglenes pótlási elem",
          "Titán bázis, multi-unit vagy rendszerkomponens, indikáció szerint",
          "Átlátszó pozicionáló vagy ellenőrző sablonanyag",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "CBCT, scan és digitális fogfelállítás összehangolása a rendelői implanttervvel",
          "Sebészeti sablon, pozicionáló sablon és ideiglenes pótlás egymásra épített tervezése",
          "Csavarcsatornák, multi-unit kapcsolatok és ideiglenes pótlás behelyezési irányának ellenőrzése",
          "Harapási helyzet, fogfelállítás és mosolyvonal átvezetése az ideiglenes munkába",
          "Munkafolyamat lépéseinek előzetes egyeztetése, hogy a műtéti és laboroldali elemek sorrendje egyértelmű legyen",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "Az Immediate Loading Guide az azonnali vagy korai ideiglenesítéshez kapcsolódó laboroldali segédlet, amely a sebészeti tervet, pozicionálást és ideiglenes pótlást hangolja össze.",
    title: "Immediate Loading Guide",
  },
  "segedeszkozok-munkak|segedeszkozok-harapasi-regisztracio|Gothic Arch Tracer": {
    labNote:
      "Egyeztetéshez különösen hasznos: teljes vagy részleges foghiány típusa, meglévő fogsor vagy próbatalp használható-e, vertikális dimenzió, centrális reláció rögzítési célja, lenyomat vagy scan típusa, valamint hogy intraorális vagy extraorális regisztráló irány szükséges.",
    sections: [
      {
        items: [
          "A Gothic Arch Tracer a mandibula oldal- és előremozgásainak rajzolásával segítheti a centrális reláció és az állcsontviszony meghatározását teljes foghiány vagy komplex rehabilitáció esetén.",
          "A laboroldali feladat az esethez illeszkedő regisztráló alap, tű és lemez kialakítása, rendelői terv és próba alapján.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Intraorális gothic arch regisztráló",
          "Extraorális gothic arch regisztráló",
          "Digitálisan tervezett, nyomtatott regisztráló eszköz",
          "Meglévő fogsorra vagy próbatalpra adaptált regisztráló",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Nyomtatott resin vagy PMMA alap",
          "Fém vagy műanyag rajzolótű / érintkező elem",
          "Regisztráló lemez vagy rajzolófelület",
          "Próbatalphoz vagy harapási sablonhoz illeszkedő egyedi rögzítés",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Minta, scan vagy meglévő fogsor alapján készülő egyedi alap",
          "Vertikális dimenzióhoz és próbahelyzethez igazított tűmagasság",
          "Regisztráló felület stabilizálása a pontosabb rendelői visszahelyezhetőségért",
          "A rögzített állcsontviszony későbbi digitális fogfelállításba vagy artikulátorba vezetése, esetfüggően",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A Gothic Arch Tracer állcsontviszony és centrális reláció meghatározását segítő, rendelői használatra készített egyedi regisztráló segédeszköz.",
    title: "Gothic Arch Tracer",
  },
  "segedeszkozok-munkak|segedeszkozok-harapasi-regisztracio|Massad Jaw Recorder": {
    labNote:
      "Egyeztetéshez különösen hasznos: teljes fogsor, overdenture vagy komplex pótlás készül-e, milyen próbatalp vagy record base áll rendelkezésre, milyen vertikális dimenziót kell tartani, és a rendelő milyen jaw recorder munkafolyamatot szeretne használni.",
    sections: [
      {
        items: [
          "A Massad Jaw Recorder jellegű állcsontviszony-rögzítő eszköz a centrális reláció és a harapási helyzet rendelői rögzítését segítő, gothic arch elvre épülő regisztrációs segédlet.",
          "A katalógusban laborban készíthető vagy adaptálható record base / regisztráló segédeszközként szerepel, nem kezelési protokollként.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Teljes fogsorhoz kapcsolódó jaw recorder segédlet",
          "Overdenture vagy implantos átmeneti pótlás regisztrációs segédlete",
          "Próbatalpra vagy record base-re adaptált regisztráló",
          "Egyszer használatos rendszerhez illeszthető laboroldali alap, rendelői igény szerint",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "PMMA vagy nyomtatott resin record base",
          "Harapási sablonhoz illeszthető akril vagy resin alap",
          "Fém vagy műanyag érintkező / rajzoló elem, rendszer szerint",
          "Regisztrációs anyaghoz előkészített felületek",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Record base stabilitásának és visszahelyezhetőségének laboroldali kialakítása",
          "Tű, rajzolófelület és harapási tér beállítása a rendelői munkafolyamathoz",
          "Digitális vagy hagyományos minta alapján készített egyedi alap",
          "A rögzített állcsontviszony későbbi fogfelállítási és próbafázisba vezetése",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A Massad Jaw Recorder jellegű segédeszköz a centrális reláció és harapási helyzet rendelői rögzítését támogató laboroldali regisztrációs alap vagy adaptáció.",
    title: "Massad Jaw Recorder",
  },
  "segedeszkozok-munkak|segedeszkozok-harapasi-regisztracio|Scan referencia-jig": {
    labNote:
      "Egyeztetéshez különösen hasznos: intraorális scan, arch scan vagy modellscan típusa, teljes foghiány vagy részleges foghiány, milyen referenciafelületekre van szükség, milyen harapási helyzetet kell összekapcsolni, és milyen digitális fogfelállítás vagy pótlási terv készül belőle.",
    sections: [
      {
        items: [
          "A Scan referencia-jig olyan laborban készített digitális segédeszköz, amely a fogatlan vagy nehezen tájékozódó ívek scanelésénél referenciafelületeket, pontokat vagy összekapcsolható geometriát adhat.",
          "Célja, hogy a harapási regisztráció, a felső-alsó ív egymáshoz rendelése és a digitális fogfelállítás stabilabb adatokból induljon, rendelői scan-protokoll alapján.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Fogatlan ívhez készülő scan referencia-jig",
          "Harapási helyzetet összekapcsoló regisztrációs jig",
          "Referencia pontokkal vagy síkokkal ellátott scan segédlet",
          "Arcscan / arch scan munkafolyamathoz igazított jelölő segédlet",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Nyomtatott resin",
          "PMMA",
          "Kontrasztos jelölőfelület vagy geometriai referenciaforma",
          "Harapási anyaggal kombinálható kapcsolódó felület, indikáció szerint",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Scanelhető referenciafelületek és pontok digitális megtervezése",
          "Felső és alsó ív összerendelését támogató geometria kialakítása",
          "Harapási regisztrátummal vagy próbatalppal való illesztés",
          "Digitális fogfelállítás, wax-up vagy teljes fogsor design számára használható referenciaadatok előkészítése",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A Scan referencia-jig fogatlan vagy nehezen tájékozódó ívek digitális rögzítéséhez készülő segédlet, amely referenciafelületekkel támogathatja a harapási és ív-összerendelést.",
    title: "Scan referencia-jig",
  },
  "segedeszkozok-munkak|segedeszkozok-rendeloi-segedek|Harapási sablon": {
    labNote:
      "Egyeztetéshez különösen hasznos: teljes vagy részleges foghiány, lenyomat vagy scan, tervezett vertikális dimenzió, harapási regisztrátum típusa, fogfelállítási terv és próbaritmus.",
    sections: [
      {
        items: [
          "A harapási sablon a vertikális dimenzió, középvonal, mosolyvonal és állcsontviszony rendelői rögzítését segítő laborban készített alap.",
          "Teljes fogsor, részleges fogsor, implantos ideiglenesítés vagy digitális fogfelállítás előkészítéséhez is használható, indikáció szerint.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Teljes fogsorhoz készülő harapási sablon",
          "Részleges foghiányhoz készülő harapási sablon",
          "Implant vagy full arch tervezéshez kapcsolódó harapási sablon",
          "Digitális fogfelállításhoz visszavezethető regisztrációs sablon",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Akril vagy PMMA alap",
          "Nyomtatott resin alap",
          "Viasz vagy regisztrációs anyaggal kombinált felszín",
          "Stabilizáló vagy visszahelyezést segítő forma, esetfüggően",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Minta vagy scan alapján készülő stabil record base",
          "Viaszsánc vagy digitálisan tervezett regisztrációs felszín kialakítása",
          "Középvonal, mosolyvonal és próbaadatok rendelői jelölésére alkalmas forma",
          "A rögzített adatok digitális tervezésbe vagy hagyományos fogfelállításba vezetése",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A harapási sablon a vertikális dimenzió és állcsontviszony rendelői rögzítését segítő laboroldali alap teljes, részleges vagy implantos munkák előkészítéséhez.",
    title: "Harapási sablon",
  },
  "segedeszkozok-munkak|segedeszkozok-rendeloi-segedek|Egyéni kanál": {
    labNote:
      "Egyeztetéshez különösen hasznos: elsődleges lenyomat vagy scan, teljes vagy részleges foghiány, lenyomatanyag, peremformázási igény, stopok, nyélpozíció és rendelői munkamódszer.",
    sections: [
      {
        items: [
          "Az egyéni kanál rendelői lenyomatvételhez készített, az adott anatómiai helyzethez igazított laboroldali segédeszköz.",
          "Feladata a lenyomatanyag kontrollált vastagságának, a peremterületek elérhetőségének és a stabil visszahelyezésnek a támogatása.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Teljes fogatlan állcsonthoz készülő egyéni kanál",
          "Részleges foghiányhoz készülő egyéni kanál",
          "Implant vagy overdenture lenyomathoz előkészített kanál",
          "Nyitott vagy zárt kanál jellegű kialakítás, rendelői igény szerint",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Fényre kötő kanálanyag",
          "Akril vagy PMMA",
          "Nyomtatott biokompatibilis resin",
          "Stopok, nyél és peremformázási zónák egyedi kialakítással",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Minta vagy scan alapján készülő digitális vagy hagyományos kanálterv",
          "Lenyomatanyaghoz igazított belső hézag és stopok kialakítása",
          "Peremformázási és nyélpozíciós szempontok egyeztetése",
          "Nyomtatott vagy hagyományos laborfolyamattal készíthető kivitel",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "Az egyéni kanál lenyomatvételhez készített, anatómiai helyzethez és rendelői módszerhez igazított laboroldali segédeszköz.",
    title: "Egyéni kanál",
  },
  "segedeszkozok-munkak|segedeszkozok-rendeloi-segedek|Próbatalp": {
    labNote:
      "Egyeztetéshez különösen hasznos: teljes vagy részleges foghiány, minta vagy scan, stabilitási igény, harapási sablonhoz vagy gothic arch regisztrálóhoz kapcsolódik-e, illetve milyen próbaritmus várható.",
    sections: [
      {
        items: [
          "A próbatalp stabil laboroldali alap, amelyre harapási sablon, fogfelállítás, gothic arch regisztráló vagy más rendelői próbaelem épülhet.",
          "Fő célja a visszahelyezhetőség, stabilitás és próbaadatok biztonságos hordozása.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Teljes fogsor próbatalp",
          "Részleges fogsor próbatalp",
          "Harapási sablonnal kombinált próbatalp",
          "Regisztrációs segédeszközhöz előkészített próbatalp",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Akril",
          "PMMA",
          "Nyomtatott resin",
          "Viasz vagy regisztrációs anyaggal kombinálható felszín",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Minta vagy scan alapján készített stabil bázis",
          "Alámenők, peremek és visszahelyezési pontok figyelembevétele",
          "Harapási vagy fogfelállítási elemekhez kapcsolható forma",
          "Digitális fogsor- vagy full arch munkafolyamatba visszavezethető alap",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A próbatalp stabil laboroldali alap, amely harapási sablonhoz, fogfelállításhoz vagy állcsontviszony-regisztráló segédeszközhöz kapcsolható.",
    title: "Próbatalp",
  },
  "digitalis-tervezes|digitalis-esztetikai-tervezes|Smile Design": {
    labNote:
      "Egyeztetéshez különösen hasznos: arc- és mosolyfotók, intraorális fotók, scan, fogszín, páciens esztétikai kérései, tervezett fogforma, középvonal, mosolyvonal és hogy a terv mock-up, wax-up vagy végleges pótlás előkészítéséhez készül-e.",
    sections: [
      {
        items: [
          "A Smile Design digitális esztétikai előtervezés, amely fotók, scanek és a rendelői cél alapján segíti a mosolyvonal, fogforma, arányok és látható esztétikai irány kommunikációját.",
          "Nem végleges kezelési döntés, hanem vizuális és protetikai egyeztetési alap a rendelő, labor és páciens között.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "2D fotóalapú smile design",
          "3D scanhez kapcsolt smile design",
          "Arcscan / fotó referencia alapján készülő esztétikai terv",
          "Mock-up vagy wax-up előkészítéséhez készülő smile design",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Fotó- és scanadatok",
          "Digitális fogforma-könyvtár vagy egyedi fogforma",
          "Mock-up vagy nyomtatott próbaforma, ha rendelői igény",
          "Wax-up vagy végleges pótlási design alapadatai",
        ],
        title: "Adatok szerint",
      },
      {
        items: [
          "Mosolyvonal, középvonal, incizális élpozíció és fogarányok digitális vizsgálata",
          "Tervezett fogforma ráillesztése fotóra és/vagy scanre",
          "Digitális wax-up vagy mock-up forma előkészítése",
          "Rendelői visszajelzés alapján módosítható tervváltozatok készítése",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A Smile Design fotók és scanek alapján készülő digitális esztétikai előterv, amely a mosolyvonal, fogforma és protetikai irány kommunikációját segíti.",
    title: "Smile Design",
  },
  "digitalis-tervezes|digitalis-esztetikai-tervezes|Digitális wax-up": {
    labNote:
      "Egyeztetéshez különösen hasznos: scan, fotó, tervezett pótlástípus, fogszín, antagonisták, okklúzió, esztétikai cél, mock-up igény és hogy a wax-up diagnosztikai, kommunikációs vagy gyártási alap lesz-e.",
    sections: [
      {
        items: [
          "A digitális wax-up a tervezett fogforma és pótlási forma virtuális felépítése scan vagy modelladat alapján.",
          "Segíti a diagnosztikát, a rendelő-labor kommunikációt, a mock-up készítést és a későbbi végleges pótlási design előkészítését.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Diagnosztikai digitális wax-up",
          "Esztétikai front wax-up",
          "Rágófelszíni / okklúziós wax-up",
          "Full arch vagy teljes fogfelállítási wax-up",
          "Implantprotetikai visszatervezéshez készülő wax-up",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Intraorális scan vagy modellscan",
          "Fotó és mosolyvonal referencia",
          "Antagonista és harapási adat",
          "Fogforma-könyvtár vagy egyedi anatómiai forma",
        ],
        title: "Adatok szerint",
      },
      {
        items: [
          "Virtuális fogforma és rágófelszín tervezése",
          "Okklúziós és esztétikai kontroll a rendelkezésre álló adatok alapján",
          "Mock-up, provisional vagy végleges CAD design alapjaként használható forma",
          "Rendelői jóváhagyás után módosítható tervállapot",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A digitális wax-up a tervezett fogforma virtuális felépítése, amely diagnosztikai, kommunikációs, mock-up és végleges design alapként is használható.",
    title: "Digitális wax-up",
  },
  "digitalis-tervezes|digitalis-esztetikai-tervezes|Mock-up terv": {
    labNote:
      "Egyeztetéshez különösen hasznos: digitális wax-up, scan, fotó, mosolyvonal, tervezett anyag, rendelői próba módja, direkt vagy indirekt mock-up irány, illetve szükséges-e nyomtatott sablon vagy próbaforma.",
    sections: [
      {
        items: [
          "A mock-up terv a tervezett esztétikai vagy funkcionális forma rendelői próbájának előkészítése.",
          "Célja, hogy a páciens és az orvos még a végleges pótlás előtt ellenőrizhesse a forma, hossz, mosolyvonal, fonetika és ajaktámasz irányát.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Direkt mock-up sablon",
          "Nyomtatott mock-up próbaforma",
          "Frontesztétikai mock-up",
          "Full arch vagy teljes fogfelállítási próbaforma",
          "Ideiglenes pótlás irányába továbbvihető mock-up terv",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Digitális wax-up adat",
          "Nyomtatott resin próbaforma",
          "Szilikonkulcshoz vagy sablonhoz előkészített forma",
          "PMMA vagy ideiglenes anyag, indikáció szerint",
        ],
        title: "Anyag szerint",
      },
      {
        items: [
          "Wax-upból előállított próbálható forma",
          "Sablon vagy kulcs tervezése rendelői mock-up készítéshez",
          "Fonetika, mosolyvonal és ajaktámasz visszajelzéseinek beépítése",
          "A jóváhagyott mock-up forma továbbvezetése ideiglenes vagy végleges pótlási tervbe",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A mock-up terv a digitálisan megtervezett fogforma rendelői próbáját segíti, mielőtt a végleges pótlási irány lezárásra kerülne.",
    title: "Mock-up terv",
  },
  "digitalis-tervezes|digitalis-protetikai-tervezes|Digitális fogfelállítás": {
    labNote:
      "Egyeztetéshez különösen hasznos: teljes vagy részleges foghiány, scan vagy minta, harapási regisztrátum, fogszín, fogforma, mosolyvonal, vertikális dimenzió, próbaritmus és hogy teljes fogsor, overdenture vagy full arch munka készül-e.",
    sections: [
      {
        items: [
          "A digitális fogfelállítás a műfogak vagy tervezett fogformák virtuális elhelyezése a rendelkezésre álló anatómiai, harapási és esztétikai adatok alapján.",
          "Teljes fogsor, részleges fogsor, overdenture, full arch ideiglenes vagy végleges munka előkészítéséhez is használható.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Teljes fogsor digitális fogfelállítása",
          "Részleges fogsor digitális fogfelállítása",
          "Overdenture vagy implantos teljes íves fogfelállítás",
          "Próbafogsorhoz vagy prototípushoz készülő fogfelállítás",
          "Esztétikai és fonetikai próbához készülő fogfelállítás",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Scan vagy modelladat",
          "Harapási regisztrátum",
          "Fotó, mosolyvonal és arc referencia",
          "Fogforma- és fogszín-információ",
        ],
        title: "Adatok szerint",
      },
      {
        items: [
          "Fogak virtuális elhelyezése anatómiai, fonetikai és esztétikai szempontok alapján",
          "Okklúziós sík, középvonal, mosolyív és ajaktámasz tervezése",
          "Próbasor, nyomtatott próba vagy végleges fogsordesign előkészítése",
          "Rendelői visszajelzés alapján módosítható fogfelállítási terv",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A digitális fogfelállítás a fogformák virtuális elhelyezése teljes, részleges, overdenture vagy full arch munkák tervezéséhez.",
    title: "Digitális fogfelállítás",
  },
  "digitalis-tervezes|digitalis-protetikai-tervezes|Protetikai visszatervezés": {
    labNote:
      "Egyeztetéshez különösen hasznos: végleges pótlási cél, implant vagy fogpótlási terv, scan, CBCT ha szükséges, wax-up, ideiglenes forma, csavarcsatornák, felépítmények, anyagvastagság és a gyártási irány.",
    sections: [
      {
        items: [
          "A protetikai visszatervezés a végleges vagy ideális pótlási formából induló digitális tervezési logika.",
          "Először a kívánt fogforma, okklúzió, gingiva és esztétikai cél látszik, majd ehhez igazítható a váz, felépítmény, implantpozíció, sablon vagy gyártási konstrukció.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "Implantprotetikai visszatervezés",
          "Full arch visszatervezés",
          "Cirkónium vagy hybrid pótlás visszatervezése",
          "Ideiglenes pótlásból végleges forma visszavezetése",
          "Sablon vagy guide tervezés protetikai cél alapján",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Wax-up vagy jóváhagyott ideiglenes forma",
          "Scanbody, implantkönyvtár és felépítményadat",
          "CBCT / STL illesztés, ha sablon vagy implantterv készül",
          "Fotó, arc referencia, okklúzió és anyagvastagsági szempontok",
        ],
        title: "Adatok szerint",
      },
      {
        items: [
          "Végleges fogforma és funkció felől induló CAD tervezés",
          "Váz, bar, felépítmény, csavarcsatorna és anyagvastagság ellenőrzése",
          "Digitális prototípus vagy próbaforma alapján véglegesített konstrukció",
          "Rendelői jóváhagyási pontok beépítése a tervezési folyamatba",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "A protetikai visszatervezés a kívánt végleges pótlási formából induló digitális tervezés, amelyhez a váz, implant, felépítmény vagy guide irány igazítható.",
    title: "Protetikai visszatervezés",
  },
  "digitalis-tervezes|digitalis-protetikai-tervezes|Arcscan / fotó referencia": {
    labNote:
      "Egyeztetéshez különösen hasznos: standardizált mosoly- és portréfotók, arcscan ha elérhető, intraorális scan, harapási adat, középvonal, interpupilláris referencia, mosolyvonal és rendelői esztétikai prioritások.",
    sections: [
      {
        items: [
          "Az arcscan / fotó referencia a digitális tervezés esztétikai és térbeli tájékozódását segítő adatcsomag.",
          "Segíthet a középvonal, mosolyvonal, foghossz, ajaktámasz, okklúziós sík és páciensspecifikus esztétikai irány egyeztetésében.",
        ],
        title: "Fogalma",
      },
      {
        items: [
          "2D fotó referencia smile designhoz",
          "Arcscan referencia digitális fogfelállításhoz",
          "Fotó + intraorális scan alapú esztétikai tervezés",
          "Mosolyvonal és középvonal ellenőrző referencia",
        ],
        title: "Típus szerint",
      },
      {
        items: [
          "Portréfotó, mosolyfotó és intraorális fotók",
          "Intraorális scan vagy modellscan",
          "Arcscan adat, ha rendelkezésre áll",
          "Harapási regisztrátum és rendelői jelölések",
        ],
        title: "Adatok szerint",
      },
      {
        items: [
          "Fotó és scan összehangolása digitális tervhez",
          "Mosolyvonal, középvonal és fogarányok ellenőrzése",
          "Digitális wax-up, smile design vagy fogfelállítás vizuális megtámasztása",
          "Rendelői visszajelzések alapján finomítható referenciaállapot",
        ],
        title: "Technológia szerint",
      },
    ],
    status: "Szakmai vázlat, jóváhagyandó",
    summary:
      "Az arcscan / fotó referencia a digitális tervezéshez használt esztétikai és térbeli tájékozódási adatcsomag, amely segíti a smile design és protetikai terv pontosítását.",
    title: "Arcscan / fotó referencia",
  },
};

const doctorFocusAreas: readonly DoctorFocusArea[] = [
  {
    accent: "#4f746c",
    description: "Koronák, hidak, csapos munkák és egyéb rögzített laborpótlások.",
    groups: [
      {
        description: "Egyes koronák és koronacseréhez kapcsolódó laborfeladatok.",
        id: "rogzitett-koronak",
        items: ["Korona"],
        searchTerms: [
          "esztetikai korona",
          "ideiglenes korona",
          "teljes femkorona",
          "cirkonium",
          "keramia",
          "emax",
          "femkeramia",
          "pmma",
          "kompozit",
        ],
        title: "Koronák",
      },
      {
        description: "Rövidebb és nagyobb kiterjedésű hídpótlások laboroldali elkészítése.",
        id: "rogzitett-hidak",
        items: ["Híd", "Fémmerevített cirkónium híd"],
        searchTerms: [
          "esztetikai hid",
          "ideiglenes hid",
          "maryland hid",
          "femkeramia hid",
          "cirkonium hid",
          "femmerevitett cirkonium hid",
          "fem merevites",
          "titánium merevites",
          "titanium merevites",
          "cocr merevites",
          "ibar",
          "inner bar",
          "blender for dental",
          "exocad bar module",
          "3shape implant bridge",
          "prettau",
          "overdenture bar",
          "csavarcsatorna",
          "atmeno csavar",
          "reverse engineering",
          "visszatervezes",
          "nagy athidalas",
          "cirkon munka",
        ],
        title: "Hidak",
      },
      {
        description:
          "Laborban készített csapos pótlási elemek a végleges rögzített pótlás előkészítéséhez.",
        id: "rogzitett-felepitmenyek",
        items: ["Csapos műcsonk"],
        searchTerms: [
          "csapcsonk",
          "csapos mucsonk",
          "egyedi csapos mucsonk",
          "uvegszalas csaphoz keszulo felepitmeny",
          "tibase",
          "technikai csap",
          "ontott csapos mu-csonk",
          "uvegszalas csap",
          "fiber post",
          "post and core",
          "ferrule",
          "kompozit felepitmeny",
        ],
        title: "Csapok és műcsonkok",
      },
    ],
    id: "rogzitett-munkak",
    order: "I",
    partnerUse: "Rögzített pótlások rendelői előkészítéséhez és labor-egyeztetéséhez.",
    reviewFocus: "A pontos munkatípus a rendelői indikáció és az átadott esetadat alapján egyeztethető.",
    shortTitle: "Rögzített",
    title: "Rögzített pótlások",
  },
  {
    accent: "#6c7d55",
    description: "Teljes és részleges foghiányok laborban készített kivehető pótlásokkal.",
    groups: [
      {
        description: "Teljes foghiányhoz kapcsolódó fogsorok laboroldali elkészítése.",
        id: "kiveheto-teljes-fogsorok",
        items: ["Teljes fogsor"],
        searchTerms: [
          "teljes foghiany",
          "implantatumon rogzulő overdenture",
          "implantatumon rogzulo overdenture",
          "probasor",
          "proba fogsor",
          "digitalis teljes fogsor",
          "akril",
          "semiflexibilis akril",
          "flexibilis nylon",
          "poliamid",
          "femhalo",
          "femsulynovelo",
          "allergiamentes",
          "femmentes",
          "anyagérzékenység",
          "anyag erzekenyseg",
          "szilikonos alabeleles",
          "szilikonnal alabelelt fogsor",
        ],
        title: "Teljes fogsorok",
      },
      {
        description: "Részleges foghiányhoz kapcsolódó kivehető pótlások.",
        id: "kiveheto-reszleges-fogsorok",
        items: ["Részleges fogsor"],
        searchTerms: [
          "reszleges foghiany",
          "femlemezes reszleges fogsor",
          "titanium femlemez",
          "cocr femlemez",
          "femhalo",
          "femsulynovelo",
          "akrilat reszleges",
          "kapcsos reszleges",
          "klipszes reszleges",
          "flexibilis reszleges",
          "acetal",
          "pom",
          "peek",
          "allergiamentes",
          "femmentes",
          "anyagérzékenység",
          "anyag erzekenyseg",
          "szilikonos alabeleles",
          "szilikonnal alabelelt fogsor",
        ],
        title: "Részleges fogsorok",
      },
      {
        description: "Részleges kivehető pótlások laborban készített retenciós elemei.",
        id: "kiveheto-kapcsok",
        items: ["Kapcsok és klipszek"],
        searchTerms: [
          "klipsz",
          "kapocs",
          "acetal kapocs",
          "pom kapocs",
          "peek kapocs",
          "titanium kapocs",
          "cocr kapocs",
          "flexibilis resin",
          "nylon filament",
          "poliamid filament",
          "semiflexibilis",
          "anyagérzékenység",
          "anyag erzekenyseg",
          "allergiamentes",
          "femmentes",
        ],
        title: "Kapcsok és klipszek",
      },
    ],
    id: "kiveheto-munkak",
    order: "II",
    partnerUse: "Kivehető pótlások rendelői indikáció utáni labor-előkészítéséhez.",
    reviewFocus: "A pontos fogsorirány és próbaritmus az eset alapján egyeztethető.",
    shortTitle: "Kivehető",
    title: "Kivehető pótlások",
  },
  {
    accent: "#6f7056",
    description: "Rögzített és kivehető elemek együttműködésére épülő kombinált pótlások.",
    groups: [
      {
        description: "Rögzített híd- vagy koronarészhez illeszkedő kivehető pótlások.",
        id: "kombinalt-reszleges-potlasok",
        items: [
          "Kombinált részleges fogsor",
          "Fémlemezes kombinált pótlás",
          "Frézelt vállhoz illeszkedő részleges pótlás",
        ],
        searchTerms: [
          "kombinalt fogsor",
          "reszleges kombinált",
          "reszleges kombinált potlas",
          "front hid fogsor",
          "femlemezes kombinált",
          "cocr femlemez",
          "titanium femlemez",
          "frezelt vall",
          "vezetosik",
          "tamasztek",
          "acetal alaplemez",
          "peek alaplemez",
          "szekunder vaz",
          "attachment",
          "finommechanikai elem",
          "allergiamentes",
          "femmentes",
        ],
        title: "Kombinált részleges pótlások",
      },
      {
        description: "A kombinált pótlás rögzítéséhez kapcsolódó laboroldali elemek.",
        id: "kombinalt-elhorgonyzasok",
        items: ["Teleszkópos pótlás", "Csúsztatós pótlás", "Stéges részleges pótlás"],
        searchTerms: [
          "teleszkop",
          "dupla korona",
          "primer szekunder",
          "csusztato",
          "rejtett elhorgonyzas",
          "esztetikus elhorgonyzas",
          "kapocsmentes megjelenes",
          "kapocs nelkuli",
          "ot cap",
          "ot unilateral",
          "rhein83",
          "mk1",
          "mk1 attachment",
          "mk1 retesz",
          "retesz elhorgonyzas",
          "zárható elhorgonyzás",
          "zarhato elhorgonyzas",
          "lock attachment",
          "egyedi retesz",
          "megrendelesre",
          "feloldali klipsz",
          "unilateralis attachment",
          "hidvegi attachment",
          "implantmentes alternativa",
          "implant alternativa",
          "precision attachment",
          "matrix patrix",
          "steg",
          "bar",
          "tobb fogat ativelo steg",
          "egy fogat ativelo steg",
          "rejtett steges elhorgonyzas",
          "attachmenttel kombinalt steg",
          "retencios retegek",
          "szuprastruktura",
          "szupra struktura",
          "komplex szuprastruktura",
          "egymasra epitett rendszer",
          "primer szekunder tercier",
          "fem muanyag retencio",
          "fem fem retencio",
          "retencios felszin",
          "digitalis design",
          "digitalis tervezes",
          "cad cam design",
          "precizios digitalis tervezes",
          "preciz illesztes",
          "anyagvastagsag ellenorzes",
          "dolder",
          "preci horix",
          "horix",
          "horizontalis elhorgonyzas",
          "stegbe epitett elhorgonyzas",
          "stegbe integral elhorgonyzas",
          "rider",
          "klipsz",
          "matrica",
          "retencios betet",
          "acetal alaplemez",
          "peek alaplemez",
          "szekunder vaz",
          "implant steg",
          "fogpiller steg",
        ],
        title: "Elhorgonyzások",
      },
    ],
    id: "kombinalt-potlasok",
    order: "III",
    partnerUse: "Kombinált pótlások rendelői és laboroldali illesztési egyeztetéséhez.",
    reviewFocus:
      "A rögzített és kivehető rész pontos kapcsolata az esetadatok alapján egyeztethető.",
    shortTitle: "Kombinált",
    title: "Kombinált pótlások",
  },
  {
    accent: "#8a615a",
    description: "Implantátumokra épülő pótlások, felépítmények, teljes íves munkák és sablonok.",
    groups: [
      {
        description: "Implantátumra készülő koronák és hidak.",
        id: "implant-koronak-hidak",
        items: ["Implantátumos korona", "Implantátumos híd", "Csavarozott pótlás", "Cementezett pótlás"],
        searchTerms: [
          "implant korona",
          "implant hid",
          "csavarozott",
          "cementezett",
          "screw retained",
          "cement retained",
          "csavarcsatorna",
          "emergence profile",
          "gingiva",
          "multiunit",
          "multi-unit",
          "cirkonium",
          "tibase",
        ],
        title: "Implant koronák és hidak",
      },
      {
        description: "Implant rendszerekhez kapcsolódó egyedi laborfelépítmények.",
        id: "implant-felepitmenyek",
        items: ["Egyedi felépítmény", "TiBase felépítmény"],
        searchTerms: [
          "egyedi felepitmeny",
          "custom abutment",
          "implant abutment",
          "tibase",
          "titan bazis",
          "hybrid abutment",
          "scanbody",
          "implantkonyvtar",
          "emergence profile",
        ],
        title: "Implant felépítmények",
      },
      {
        description: "Nagyobb implantprotetikai munkák és átmeneti rehabilitációk.",
        id: "implant-teljes-ives",
        items: ["All-on-4", "All-on-6", "Full Arch rehabilitáció", "Ideiglenes teljes íves rehabilitáció"],
        searchTerms: [
          "pmma ideiglenes rehabilitacio",
          "full arch",
          "teljes iv",
          "all on 4",
          "all on 6",
          "multiunit",
          "multi-unit",
          "csavarozott teljes iv",
          "implant bridge",
          "implant bar",
          "titanium bar",
          "cocr bar",
          "prototipus",
          "immediate provisional",
        ],
        title: "Teljes íves implant munkák",
      },
      {
        description: "Sebészeti és pozicionálási sablonok rendelői terv alapján.",
        id: "implant-sablonok",
        items: [
          "Pilot Guide",
          "Sleeve Guide",
          "Fully Guided",
          "Stackable Guide",
          "Bone Reduction Guide",
          "Immediate Loading Guide",
        ],
        searchTerms: [
          "cbct",
          "guided surgery",
          "furo sablon",
          "sebeszeti sablon",
          "implant pozicio",
          "pilot guide",
          "pilot sablon",
          "stl",
          "sleeve",
          "sleeve guide",
          "fully guided",
          "stackable guide",
          "stackable",
          "tobbretegu sablon",
          "bone reduction",
          "csontredukcios sablon",
          "pin rogzites",
          "bone reduction guide",
          "immediate loading",
          "immediate loading guide",
          "azonnali terheles",
        ],
        title: "Implant sablonok",
      },
    ],
    id: "implant-munkak",
    order: "IV",
    partnerUse: "Implant pótlások és tervezési/sablon feladatok technikai egyeztetéséhez.",
    reviewFocus:
      "Az implantprotetikai munka típusa a rendelői terv és az átadott adatok alapján pontosítható.",
    shortTitle: "Implant",
    title: "Implant pótlások",
  },
  {
    accent: "#7663a0",
    description: "Ortodonciai készülékek, aligner előkészítések, retainerek és sínek.",
    groups: [
      {
        description: "Alignerhez és fogszabályozási előkészítéshez kapcsolódó laborfeladatok.",
        id: "ortho-aligner",
        items: ["Clear aligner előkészítés", "Setup", "Attachment sablon", "IPR sablon"],
        title: "Aligner és setup",
      },
      {
        description: "Retenciós és kontroll jellegű sínek.",
        id: "ortho-retainer",
        items: ["Retainer", "Retenciós sín"],
        title: "Retenció",
      },
      {
        description: "Harapási, védő és fehérítő sínek rendelői indikáció alapján.",
        id: "ortho-sinek",
        items: ["Michigan sín", "Bruxizmus sín", "Harapásemelő sín", "Fehérítő sín", "Sportvédő sín"],
        title: "Sínek",
      },
    ],
    id: "ortho-munkak",
    order: "V",
    partnerUse:
      "Ortodonciai és sín jellegű készülékek rendelői döntés utáni labor-előkészítéséhez.",
    reviewFocus:
      "Az ortodonciai vagy sín jellegű készülék rendelői indikációhoz és kezelési tervhez kötött.",
    shortTitle: "Ortho",
    title: "Ortodonciai készülékek",
  },
  {
    accent: "#5f7784",
    description: "Rendelői regisztrációhoz, lenyomathoz és digitális adatfelvételhez készülő segédeszközök.",
    groups: [
      {
        description: "Állcsontviszony, centrális reláció és harapási helyzet rögzítéséhez.",
        id: "segedeszkozok-harapasi-regisztracio",
        items: ["Gothic Arch Tracer", "Massad Jaw Recorder", "Scan referencia-jig"],
        searchTerms: [
          "gothic arch",
          "gothic arch tracer",
          "nyilhegyrajz",
          "centric relation",
          "centralis relacio",
          "allcsontviszony",
          "harapasi regisztracio",
          "massad jaw recorder",
          "massad jaws recorder",
          "jaw recorder",
          "scan referencia",
          "scan jig",
          "reference marker",
          "fiducial marker",
          "arch scanner",
          "arch scan",
        ],
        title: "Harapásregisztráció",
      },
      {
        description: "Lenyomatvételi, próba- és record base jellegű laborsegédek.",
        id: "segedeszkozok-rendeloi-segedek",
        items: ["Harapási sablon", "Egyéni kanál", "Próbatalp"],
        searchTerms: [
          "harapasi sablon",
          "bite rim",
          "occlusal rim",
          "record base",
          "egyeni kanal",
          "custom tray",
          "probatalp",
          "trial base",
          "fogfelallitas",
          "teljes fogsor segedeszkoz",
        ],
        title: "Rendelői segédeszközök",
      },
    ],
    id: "segedeszkozok-munkak",
    order: "VI",
    partnerUse:
      "Regisztrációs, lenyomatvételi és digitális adatfelvételt segítő laborsegédek egyeztetéséhez.",
    reviewFocus:
      "A segédeszköz pontos formája a rendelői munkafolyamathoz, scanhez, regisztrációhoz és próbacélhoz igazítható.",
    shortTitle: "Segédeszköz",
    title: "Regisztrációs segédeszközök",
  },
  {
    accent: "#587083",
    description: "Esztétikai, protetikai és full arch digitális előtervezési munkák.",
    groups: [
      {
        description: "Mosoly, fogforma és esztétikai próba előkészítése.",
        id: "digitalis-esztetikai-tervezes",
        items: ["Smile Design", "Digitális wax-up", "Mock-up terv"],
        searchTerms: [
          "smile design",
          "digital smile design",
          "mosolytervezes",
          "digitalis wax-up",
          "waxup",
          "mock-up",
          "mockup",
          "eszthetikai terv",
          "front design",
          "mosolyvonal",
        ],
        title: "Esztétikai előtervezés",
      },
      {
        description: "Fogfelállítás, visszatervezés és arc/fotó referencia digitális munkákhoz.",
        id: "digitalis-protetikai-tervezes",
        items: ["Digitális fogfelállítás", "Protetikai visszatervezés", "Arcscan / fotó referencia"],
        searchTerms: [
          "digitalis fogfelallitas",
          "digital denture setup",
          "reverse engineering",
          "visszatervezes",
          "protetikai visszatervezes",
          "arcscan",
          "face scan",
          "foto referencia",
          "full arch design",
          "implant design",
        ],
        title: "Protetikai tervezés",
      },
    ],
    id: "digitalis-tervezes",
    order: "VII",
    partnerUse:
      "Smile design, wax-up, mock-up, digitális fogfelállítás és protetikai visszatervezés egyeztetéséhez.",
    reviewFocus:
      "A digitális terv kommunikációs és gyártás-előkészítő alap, amely rendelői jóváhagyási pontokkal véglegesíthető.",
    shortTitle: "Digitális",
    title: "Digitális tervezés",
  },
] as const;

function normalize(value: string) {
  return value
    .toLocaleLowerCase("hu-HU")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function itemMatchesQuery(
  item: string,
  category: DoctorFocusArea,
  group: LabWorkGroup,
  normalizedQuery: string,
) {
  if (!normalizedQuery) return true;

  const haystack = normalize(
    [
      item,
      category.title,
      category.shortTitle,
      category.description,
      category.partnerUse,
      category.reviewFocus,
      group.title,
      group.description,
      ...(group.searchTerms ?? []),
    ].join(" "),
  );
  return haystack.includes(normalizedQuery);
}

function getCategoryCardClassName(categoryId: string) {
  switch (categoryId) {
    case "rogzitett-munkak":
      return styles.cardRogzitett;
    case "kiveheto-munkak":
      return styles.cardKiveheto;
    case "kombinalt-potlasok":
      return styles.cardKombinalt;
    case "implant-munkak":
      return styles.cardImplant;
    case "ortho-munkak":
      return styles.cardOrtho;
    case "segedeszkozok-munkak":
      return styles.cardSegedeszkozok;
    case "digitalis-tervezes":
      return styles.cardDigitalis;
    default:
      return "";
  }
}

function getServiceDetailKey(categoryId: string, groupId: string, item: string) {
  return `${categoryId}|${groupId}|${item}`;
}

export function ServiceCatalogClient() {
  const [query, setQuery] = useState("");
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);
  const [selectedServiceKey, setSelectedServiceKey] = useState<string | null>(null);
  const [selectedSectionTitle, setSelectedSectionTitle] = useState<string | null>(null);
  const trimmedQuery = query.trim();
  const isSearching = trimmedQuery.length > 0;

  const filteredCategories = useMemo(() => {
    const normalizedQuery = normalize(trimmedQuery);

    return doctorFocusAreas
      .map((category) => {
        const groups = category.groups
          .map((group) => ({
            ...group,
            items: group.items.filter((item) =>
              itemMatchesQuery(item, category, group, normalizedQuery),
            ),
          }))
          .filter((group) => group.items.length > 0);

        return {
          ...category,
          groups,
          items: groups.flatMap((group) => group.items),
        };
      })
      .filter((category) => category.items.length > 0);
  }, [trimmedQuery]);

  const visibleCategories = filteredCategories;
  const isFocused = openCategoryId !== null;
  const focusedCategory = isFocused
    ? filteredCategories.find((category) => category.id === openCategoryId) ?? null
    : null;
  const selectedServiceDetail = selectedServiceKey
    ? serviceDetails[selectedServiceKey]
    : undefined;
  const activeServiceSection = selectedServiceDetail
    ? selectedServiceDetail.sections.find((section) => section.title === selectedSectionTitle) ??
      selectedServiceDetail.sections[0]
    : undefined;
  const activeServiceSectionIndex =
    selectedServiceDetail && activeServiceSection
      ? Math.max(
          0,
          selectedServiceDetail.sections.findIndex(
            (section) => section.title === activeServiceSection.title,
          ),
        )
      : 0;

  useEffect(() => {
    if (!isFocused) return;

    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = documentElement.style.overflow;

    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";

    return () => {
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [isFocused]);

  return (
    <main className={`${styles.page} ${isFocused ? styles.focusedPage : ""}`}>
      <section aria-labelledby="catalog-title" className={styles.hero}>
        <div className={styles.topbar}>
          <Link className={styles.backLink} href="/fogorvosok">
            Fogorvosok
          </Link>
          <span className={styles.status}>Fogorvosi partnerkatalógus</span>
        </div>

        <div className={styles.heroBrand}>
          <p className={styles.kicker}>Fogorvosi partnerkatalógus</p>
          <h1 id="catalog-title">Dental Tech-Art Kft.</h1>
        </div>

        <div className={styles.heroService}>
          <p className={styles.heroSubtitle}>Szolgáltatásaink</p>
          <p className={styles.lead}>
            Laborban készíthető munkacsoportok gyors, egyszerű áttekintése fogorvosi
            partnereknek.
          </p>
        </div>
      </section>

      <section className={styles.catalogShell} aria-label="Laborban készíthető munkák">
        <label className={styles.search}>
          <span>Keresés a pótlások típusai között</span>
          <span className={styles.searchField}>
            <input
              onChange={(event) => {
                setQuery(event.target.value);
                if (event.target.value.trim()) {
                  setOpenCategoryId(null);
                  setSelectedServiceKey(null);
                  setSelectedSectionTitle(null);
                }
              }}
              placeholder="korona, híd, fogsor, implant, sín"
              type="search"
              value={query}
            />
            {query ? (
              <button
                onClick={() => {
                  setQuery("");
                  setOpenCategoryId(null);
                  setSelectedServiceKey(null);
                  setSelectedSectionTitle(null);
                }}
                type="button"
              >
                Törlés
              </button>
            ) : null}
          </span>
        </label>

        <div className={isFocused ? `${styles.focusedStage} ${styles.focusedGrid}` : styles.cardGrid}>
          {isFocused && focusedCategory ? (
            <details
              aria-labelledby={`${focusedCategory.id}-title`}
              className={`${styles.workCard} ${getCategoryCardClassName(focusedCategory.id)} ${styles.focusedCard}`}
              open
              style={{ "--category-accent": focusedCategory.accent } as CategoryStyle}
            >
              <summary
                className={styles.cardSummary}
                onClick={(event) => {
                  event.preventDefault();
                  setOpenCategoryId(null);
                  setSelectedServiceKey(null);
                  setSelectedSectionTitle(null);
                }}
              >
                <span className={styles.cardOrder}>{focusedCategory.order}</span>
                <span
                  aria-label={focusedCategory.title}
                  className={styles.cardTitle}
                  id={`${focusedCategory.id}-title`}
                >
                  {focusedCategory.id === "rogzitett-munkak" ? (
                    <>
                      <span className={styles.titleLine} aria-hidden="true">
                        Rögzített
                      </span>
                      <span className={styles.titleLine} aria-hidden="true">
                        pótlások
                      </span>
                    </>
                  ) : focusedCategory.id === "kiveheto-munkak" ? (
                    <>
                      <span className={styles.titleLine} aria-hidden="true">
                        Kivehető
                      </span>
                      <span className={styles.titleLine} aria-hidden="true">
                        pótlások
                      </span>
                    </>
                  ) : focusedCategory.id === "kombinalt-potlasok" ? (
                    <>
                      <span className={styles.titleLine} aria-hidden="true">
                        Kombinált
                      </span>
                      <span className={styles.titleLine} aria-hidden="true">
                        pótlások
                      </span>
                    </>
                  ) : focusedCategory.id === "implant-munkak" ? (
                    <>
                      <span className={styles.titleLine} aria-hidden="true">
                        Implant
                      </span>
                      <span className={styles.titleLine} aria-hidden="true">
                        pótlások
                      </span>
                    </>
                  ) : focusedCategory.id === "ortho-munkak" ? (
                    <>
                      <span className={styles.titleLine} aria-hidden="true">
                        Ortodonciai
                      </span>
                      <span className={styles.titleLine} aria-hidden="true">
                        készülékek
                      </span>
                    </>
                  ) : focusedCategory.id === "segedeszkozok-munkak" ? (
                    <>
                      <span className={styles.titleLine} aria-hidden="true">
                        Regisztrációs
                      </span>
                      <span className={styles.titleLine} aria-hidden="true">
                        segédeszközök
                      </span>
                    </>
                  ) : focusedCategory.id === "digitalis-tervezes" ? (
                    <>
                      <span className={styles.titleLine} aria-hidden="true">
                        Digitális
                      </span>
                      <span className={styles.titleLine} aria-hidden="true">
                        tervezés
                      </span>
                    </>
                  ) : (
                    focusedCategory.title
                  )}
                </span>
                <span className={styles.cardHint}>Részletek</span>
              </summary>

              <div className={styles.cardBody}>
                <div className={styles.menuHeader}>
                  <span className={styles.menuEyebrow}>Elkészíthető munkák</span>
                  <p>{focusedCategory.partnerUse}</p>
                </div>

                <div className={styles.menuGroups}>
                  {focusedCategory.groups.map((group) => (
                    <section
                      aria-labelledby={`${group.id}-title`}
                      className={styles.groupBlock}
                      data-group-id={group.id}
                      key={group.id}
                    >
                      <header className={styles.groupHeader}>
                        <h3 id={`${group.id}-title`}>{group.title}</h3>
                        <p>{group.description}</p>
                      </header>

                      <ul className={styles.serviceList}>
                        {group.items.map((item) => {
                          const detailKey = getServiceDetailKey(
                            focusedCategory.id,
                            group.id,
                            item,
                          );
                          const serviceDetail = serviceDetails[detailKey];
                          const isSelected = selectedServiceKey === detailKey;

                          return (
                            <li
                              className={`${styles.serviceItem} ${
                                isSelected ? styles.serviceItemActive : ""
                              }`}
                              key={`${group.id}-${item}`}
                            >
                              {serviceDetail ? (
                                <button
                                  aria-controls="service-detail-panel"
                                  aria-expanded={isSelected}
                                  className={styles.serviceButton}
                                  onClick={() => {
                                    if (isSelected) {
                                      setSelectedServiceKey(null);
                                      setSelectedSectionTitle(null);
                                      return;
                                    }

                                    setSelectedServiceKey(detailKey);
                                    setSelectedSectionTitle(
                                      serviceDetail.sections[0]?.title ?? null,
                                    );
                                  }}
                                  type="button"
                                >
                                  <span>{item}</span>
                                </button>
                              ) : (
                                <span>{item}</span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </section>
                  ))}
                </div>

                {selectedServiceDetail && activeServiceSection ? (
                  <section
                    className={styles.serviceDetail}
                    id="service-detail-panel"
                  >
                    <header className={styles.serviceDetailHeader}>
                      <div>
                        <span className={styles.serviceDetailStatus}>
                          {selectedServiceDetail.status}
                        </span>
                        <h3>{selectedServiceDetail.title}</h3>
                      </div>
                      <p>{selectedServiceDetail.summary}</p>
                    </header>

                    <div
                      aria-label={`${selectedServiceDetail.title} szakmai részei`}
                      className={styles.serviceDetailTabs}
                      role="tablist"
                    >
                      {selectedServiceDetail.sections.map((section, sectionIndex) => {
                        const isActive = section.title === activeServiceSection.title;

                        return (
                          <button
                            aria-controls={`service-detail-section-${sectionIndex}`}
                            aria-selected={isActive}
                            className={`${styles.serviceDetailTab} ${
                              isActive ? styles.serviceDetailTabActive : ""
                            }`}
                            id={`service-detail-tab-${sectionIndex}`}
                            key={section.title}
                            onClick={() => {
                              setSelectedSectionTitle(section.title);
                            }}
                            role="tab"
                            type="button"
                          >
                            <span>{section.title}</span>
                          </button>
                        );
                      })}
                    </div>

                    <section
                      aria-labelledby={`service-detail-tab-${activeServiceSectionIndex}`}
                      className={styles.serviceDetailPanel}
                      id={`service-detail-section-${activeServiceSectionIndex}`}
                      role="tabpanel"
                    >
                      <h4>{activeServiceSection.title}</h4>
                      <ul>
                        {activeServiceSection.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>

                    <details className={styles.serviceDetailNote}>
                      <summary>Egyeztetési adatok</summary>
                      <p>{selectedServiceDetail.labNote}</p>
                    </details>
                  </section>
                ) : null}

                <p className={styles.reviewNote}>{focusedCategory.reviewFocus}</p>
              </div>
            </details>
          ) : visibleCategories.length > 0 ? (
            visibleCategories.map((category) => (
              <details
                aria-labelledby={`${category.id}-title`}
                className={`${styles.workCard} ${getCategoryCardClassName(category.id)}`}
                key={category.id}
                open={isSearching || openCategoryId === category.id}
                style={{ "--category-accent": category.accent } as CategoryStyle}
              >
                <summary
                  className={styles.cardSummary}
                  onClick={(event) => {
                    if (isSearching) return;

                    event.preventDefault();
                    setOpenCategoryId((currentCategoryId) =>
                      currentCategoryId === category.id ? null : category.id,
                    );
                    setSelectedServiceKey(null);
                    setSelectedSectionTitle(null);
                  }}
                >
                  <span className={styles.cardOrder}>{category.order}</span>
                  <span
                    aria-label={category.title}
                    className={styles.cardTitle}
                    id={`${category.id}-title`}
                  >
                    {category.id === "rogzitett-munkak" ? (
                      <>
                        <span className={styles.titleLine} aria-hidden="true">
                          Rögzített
                        </span>
                        <span className={styles.titleLine} aria-hidden="true">
                          pótlások
                        </span>
                      </>
                    ) : category.id === "kiveheto-munkak" ? (
                      <>
                        <span className={styles.titleLine} aria-hidden="true">
                          Kivehető
                        </span>
                        <span className={styles.titleLine} aria-hidden="true">
                          pótlások
                        </span>
                      </>
                    ) : category.id === "kombinalt-potlasok" ? (
                      <>
                        <span className={styles.titleLine} aria-hidden="true">
                          Kombinált
                        </span>
                        <span className={styles.titleLine} aria-hidden="true">
                          pótlások
                        </span>
                      </>
                    ) : category.id === "implant-munkak" ? (
                      <>
                        <span className={styles.titleLine} aria-hidden="true">
                          Implant
                        </span>
                        <span className={styles.titleLine} aria-hidden="true">
                          pótlások
                        </span>
                      </>
                    ) : category.id === "ortho-munkak" ? (
                      <>
                        <span className={styles.titleLine} aria-hidden="true">
                          Ortodonciai
                        </span>
                        <span className={styles.titleLine} aria-hidden="true">
                          készülékek
                        </span>
                      </>
                    ) : category.id === "segedeszkozok-munkak" ? (
                      <>
                        <span className={styles.titleLine} aria-hidden="true">
                          Regisztrációs
                        </span>
                        <span className={styles.titleLine} aria-hidden="true">
                          segédeszközök
                        </span>
                      </>
                    ) : category.id === "digitalis-tervezes" ? (
                      <>
                        <span className={styles.titleLine} aria-hidden="true">
                          Digitális
                        </span>
                        <span className={styles.titleLine} aria-hidden="true">
                          tervezés
                        </span>
                      </>
                    ) : (
                      category.title
                    )}
                  </span>
                  <span className={styles.cardHint}>Részletek</span>
                </summary>

                <div className={styles.cardBody}>
                  <div className={styles.menuHeader}>
                    <span className={styles.menuEyebrow}>Elkészíthető munkák</span>
                    <p>{category.partnerUse}</p>
                  </div>

                  <div className={styles.menuGroups}>
                    {category.groups.map((group) => (
                      <section
                        aria-labelledby={`${group.id}-title`}
                        className={styles.groupBlock}
                        data-group-id={group.id}
                        key={group.id}
                      >
                        <header className={styles.groupHeader}>
                          <h3 id={`${group.id}-title`}>{group.title}</h3>
                          <p>{group.description}</p>
                        </header>

                        <ul className={styles.serviceList}>
                          {group.items.map((item) => {
                            const detailKey = getServiceDetailKey(category.id, group.id, item);
                            const serviceDetail = serviceDetails[detailKey];
                            const isSelected = selectedServiceKey === detailKey;

                            return (
                              <li
                                className={`${styles.serviceItem} ${
                                  isSelected ? styles.serviceItemActive : ""
                                }`}
                                key={`${group.id}-${item}`}
                              >
                                {serviceDetail ? (
                                  <button
                                    aria-controls="service-detail-panel"
                                    aria-expanded={isSelected}
                                    className={styles.serviceButton}
                                    onClick={() => {
                                      if (isSelected) {
                                        setSelectedServiceKey(null);
                                        setSelectedSectionTitle(null);
                                        return;
                                      }

                                      setSelectedServiceKey(detailKey);
                                      setSelectedSectionTitle(
                                        serviceDetail.sections[0]?.title ?? null,
                                      );
                                    }}
                                    type="button"
                                  >
                                    <span>{item}</span>
                                  </button>
                                ) : (
                                  <span>{item}</span>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </section>
                    ))}
                  </div>

                  {selectedServiceDetail && activeServiceSection ? (
                    <section
                      className={styles.serviceDetail}
                      id="service-detail-panel"
                    >
                      <header className={styles.serviceDetailHeader}>
                        <div>
                          <span className={styles.serviceDetailStatus}>
                            {selectedServiceDetail.status}
                          </span>
                          <h3>{selectedServiceDetail.title}</h3>
                        </div>
                        <p>{selectedServiceDetail.summary}</p>
                      </header>

                      <div
                        aria-label={`${selectedServiceDetail.title} szakmai részei`}
                        className={styles.serviceDetailTabs}
                        role="tablist"
                      >
                        {selectedServiceDetail.sections.map((section, sectionIndex) => {
                          const isActive = section.title === activeServiceSection.title;

                          return (
                            <button
                              aria-controls={`service-detail-section-${sectionIndex}`}
                              aria-selected={isActive}
                              className={`${styles.serviceDetailTab} ${
                                isActive ? styles.serviceDetailTabActive : ""
                              }`}
                              id={`service-detail-tab-${sectionIndex}`}
                              key={section.title}
                              onClick={() => {
                                setSelectedSectionTitle(section.title);
                              }}
                              role="tab"
                              type="button"
                            >
                              <span>{section.title}</span>
                            </button>
                          );
                        })}
                      </div>

                      <section
                        aria-labelledby={`service-detail-tab-${activeServiceSectionIndex}`}
                        className={styles.serviceDetailPanel}
                        id={`service-detail-section-${activeServiceSectionIndex}`}
                        role="tabpanel"
                      >
                        <h4>{activeServiceSection.title}</h4>
                        <ul>
                          {activeServiceSection.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </section>

                      <details className={styles.serviceDetailNote}>
                        <summary>Egyeztetési adatok</summary>
                        <p>{selectedServiceDetail.labNote}</p>
                      </details>
                    </section>
                  ) : null}

                  <p className={styles.reviewNote}>{category.reviewFocus}</p>
                </div>
              </details>
            ))
          ) : (
            <p className={styles.emptyState}>Nincs találat erre a keresésre.</p>
          )}
        </div>
      </section>
    </main>
  );
}
