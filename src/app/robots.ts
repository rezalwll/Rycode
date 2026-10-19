import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
export const dynamic = "force-dynamic";
export default function robots(): MetadataRoute.Robots {
  return {
    rules:
      process.env.INDEXABLE === "true"
        ? {
            userAgent: "*",
            allow: "/",
            disallow: ["/admin", "/en/admin", "/api/", "/preview/"],
          }
        : { userAgent: "*", disallow: "/" },
    sitemap: siteUrl() + "/sitemap.xml",
  };
}
