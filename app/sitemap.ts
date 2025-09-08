// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL || "https://closewithmario.vercel.app";
  const now = new Date();

  // Only index public pages (exclude login/account/apply/legacy/admin/api/auth)
  const urls = [
    "/",
    "/buy",
    "/mortgage",
    "/rates",
    "/calculators",
    "/calculators/dti",
    "/miami-mortgage-broker",
  ];

  return urls.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1.0 : 0.7,
  }));
}
