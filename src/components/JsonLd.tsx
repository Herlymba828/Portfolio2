"use client";

import { useEffect } from "react";
import { personal } from "@/data/personal";

export default function JsonLd() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: personal.name,
      url: "https://mamboundou-herly.vercel.app",
      sameAs: [personal.linkedin, personal.github],
      jobTitle: personal.title,
      worksFor: {
        "@type": "Organization",
        name: "Freelance",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Libreville",
        addressCountry: "GA",
      },
      email: personal.email,
      telephone: personal.phones[0],
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
