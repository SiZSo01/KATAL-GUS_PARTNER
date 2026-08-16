import type { Metadata } from "next";
import { ServiceCatalogClient } from "./ServiceCatalogClient";

export const metadata: Metadata = {
  title: "Szolgáltatáskatalógus",
  description:
    "A DTA fogorvosi partnerkatalógusa rögzített, kivehető, implant és ortho munkákhoz.",
  alternates: { canonical: "/szolgaltataskatalogus" },
};

export default function ServiceCatalogPage() {
  return <ServiceCatalogClient />;
}
