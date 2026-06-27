export const siteConfig = {
  name: "Darhomes Realty",
  url: "https://darhomesrealty.com",
  description:
    "Darhomes Realty helps you buy, sell, secure prime land, build custom homes, and book curated short-term stays.",
  phone: "+2340000000000",
  email: "hello@darhomes.com",
  address: {
    city: "Lagos",
    country: "NG",
  },
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["RealEstateAgent", "LocalBusiness"],
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address.city,
    addressCountry: siteConfig.address.country,
  },
  areaServed: ["Lagos", "Nigeria"],
  serviceType: [
    "Real estate sales",
    "Land sales",
    "Custom home construction",
    "Property rentals",
    "Short-term stays",
  ],
};

export const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can Darhomes help me buy land and build on it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Darhomes supports the full journey from finding suitable land to planning and managing a custom build project.",
      },
    },
    {
      "@type": "Question",
      name: "Do you only sell properties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Darhomes works across buying, selling, land acquisition, construction guidance, and curated short-term stays.",
      },
    },
    {
      "@type": "Question",
      name: "Can I list my property with Darhomes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sellers can share property details with Darhomes so the team can review, position, and guide the listing process.",
      },
    },
  ],
};
