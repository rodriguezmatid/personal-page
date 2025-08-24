// lib/cv.ts
export type Locale = "en" | "es"

type Experience = {
  company: string
  role: string
  start: string
  end: string | "Present"
  bullets: string[]
}

type Education = {
  school: string
  degree: string
  year: string
}

export const cv: Record<Locale, {
  name: string
  headline: string
  location?: string
  links?: { label: string; href: string }[]
  experience: Experience[]
  education: Education[]
  skills: string[]
}> = {
  es: {
    name: "Matías Rodríguez",
    headline: "Emprendedor / Builder — Producto & Growth",
    location: "Buenos Aires, AR",
    links: [
      { label: "GitHub", href: "https://github.com/rodriguezmatid" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/rodriguezmatid/" },
      // { label: "Email", href: "mailto:hello@tudominio.com" },
    ],
    experience: [
      {
        company: "Tu proyecto/empresa",
        role: "Founder / Product",
        start: "2023",
        end: "Present",
        bullets: [
          "Lideré el 0→1: validación, MVP y primeras ventas.",
          "Diseñé el funnel de adquisición y la analítica de producto.",
          "Organicé el roadmap y coordiné con equipo dev/design.",
        ],
      },
      {
        company: "Empresa anterior",
        role: "PM / Growth",
        start: "2021",
        end: "2023",
        bullets: [
          "Lanzamiento de features con impacto en retención (+12% 90d).",
          "Experimentos A/B y pricing; ownership de métricas.",
        ],
      },
    ],
    education: [
      { school: "Universidad X", degree: "Lic./Ing. en …", year: "2019" },
    ],
    skills: ["Producto", "Estrategia", "Go-to-Market", "Analytics", "SQL", "No-Code", "Next.js", "Tailwind"],
  },

  en: {
    name: "Matías Rodríguez",
    headline: "Entrepreneur / Builder — Product & Growth",
    location: "Buenos Aires, AR",
    links: [
      { label: "GitHub", href: "https://github.com/rodriguezmatid" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/rodriguezmatid/" },
      // { label: "Email", href: "mailto:hello@yourdomain.com" },
    ],
    experience: [
      {
        company: "Your startup / company",
        role: "Founder / Product",
        start: "2023",
        end: "Present",
        bullets: [
          "Led 0→1: validation, MVP and first revenue.",
          "Designed acquisition funnel and product analytics.",
          "Owned roadmap; coordinated with eng/design.",
        ],
      },
      {
        company: "Previous company",
        role: "PM / Growth",
        start: "2021",
        end: "2023",
        bullets: [
          "Shipped features improving retention (+12% at 90d).",
          "A/B testing and pricing experiments; owned KPIs.",
        ],
      },
    ],
    education: [
      { school: "University X", degree: "B.S./Eng. in …", year: "2019" },
    ],
    skills: ["Product", "Strategy", "Go-to-Market", "Analytics", "SQL", "No-Code", "Next.js", "Tailwind"],
  },
}
