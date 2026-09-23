import { redirect } from "next/navigation";
import { site } from "@/lib/site";

export const metadata = {
  title: "تعرّف على المنتج والشركة",
  description: `${site.brand} — ${site.product.name}`,
};

export default function QPage() {
  if (site.qrDestination && site.qrDestination !== "/q") {
    redirect(site.qrDestination);
  }

  return null;
}
