// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL || "https://closewithmario.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        disallow: [
          "/admin",
          "/account",
          "/auth",
          "/api",
          "/apply",
          "/legacy",
          "/login",
        ],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
