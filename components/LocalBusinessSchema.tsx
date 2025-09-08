// components/LocalBusinessSchema.tsx
// Server component: DO NOT add "use client"

export default function LocalBusinessSchema() {
    const base =
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://closewithmario.vercel.app";
  
    // TODO: update phone, social links to your real ones
    const data = {
      "@context": "https://schema.org",
      "@type": ["RealEstateAgent", "MortgageLender"],
      name: "Close With Mario",
      url: base,
      logo: `${base}/closewithmariologo.png`,
      image: `${base}/mario.png`,
      email: "mailto:mario@closewithmario.com",
      telephone: "+1-305-000-0000", // E.164 format; replace with your public biz line
      areaServed: "South Florida",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Miami",
        addressRegion: "FL",
        addressCountry: "US",
      },
      founder: {
        "@type": "Person",
        name: "Mario Cerrato",
        jobTitle: "Realtor & Mortgage Advisor",
        identifier: [
          { "@type": "PropertyValue", name: "NMLS", value: "93260" },
          { "@type": "PropertyValue", name: "Realtor ID", value: "3245079" },
        ],
      },
      sameAs: [
        // replace with real profiles (leave empty array [] if you don't have them yet)
        "https://www.linkedin.com/yourprofile",
        "https://www.instagram.com/yourhandle",
        "https://g.page/your-gbp-shortlink",
      ],
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    );
  }
  