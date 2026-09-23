import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${site.siteUrl}/q`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${site.siteUrl}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
