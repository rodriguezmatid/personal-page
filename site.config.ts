// site.config.ts
export const siteConfig = {
  title: "Matías Rodríguez",
  description: "Portfolio minimalista, CV y artículos.",
  url: "https://matiasrodriguez.com", // ← cambiá al dominio real

  author: {
    name: "Matías Rodríguez",
    email: "matias.demian.r@gmail.com",
  },

  social: {
    x: "https://x.com/0xeulersid",
    github: "https://github.com/rodriguezmatid",
    linkedin: "https://www.linkedin.com/in/rodriguezmatid/",
  },

  // Opcional: datos para i18n y branding
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"] as const,
    metaDescription: {
      es: "Portfolio minimalista, CV y artículos.",
      en: "Minimal portfolio, CV and articles.",
    },
  },

  brand: {
    shortName: "Matías",
    accentColor: "#0ea5e9",
    tagline: {
      es: "Emprendedor / Builder. CV, notas y proyectos.",
      en: "Entrepreneur / Builder. CV, notes & projects.",
    },
  },
} as const

export type SiteConfig = typeof siteConfig
