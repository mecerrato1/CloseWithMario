export default function Schema() {
    const json = {
      "@context": "https://schema.org",
      "@type": ["RealEstateAgent", "MortgageLender"],
      "name": "Close With Mario",
      "url": "https://closewithmario.com",
      "areaServed": "South Florida",
      "brand": "Close With Mario"
    };
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
    );
  }