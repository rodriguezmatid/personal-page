// lib/cv.ts
export type Locale = "en" | "es"

type Experience = {
  company: string
  role: string
  start: string
  end: string | "Present"
  bullets: string[]
  url?: string
}

type Education = { school: string; degree: string; year: string; url?: string }

export const cv: Record<
  Locale,
  {
    name: string
    headline: string
    location?: string
    links?: { label: string; href: string }[]
    bio?: string
    highlights?: string[]
    experience: Experience[]
    education: Education[]
    skills: string[]
  }
> = {
  es: {
    name: "Matias Rodriguez",
    headline: "Quant · Developer · Actuario · MSc en Analytics",
    location: "Buenos Aires, AR",
    links: [
      { label: "GitHub", href: "https://github.com/rodriguezmatid" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/rodriguezmatid/" },
    ],
    bio:
      "Construyo productos 0→1 y los hago crecer con datos. Hoy investigo y desarrollo estrategias en DeFi y agentes on-chain (Python/Solidity), con foco en modelos cuantitativos y performance real. Antes lideré pricing/analytics en seguros.",
    highlights: [
      "0→1: validación, MVP y primeras ventas/usuarios",
      "Experimentación: funnels, A/B testing, pricing, retención",
      "Analítica de producto: eventos, cohortes y métricas accionables",
    ],
    experience: [
      {
        company: "GizaTech",
        url: "https://gizatech.xyz",
        role: "Software Engineer — AI Agent Developer",
        start: "2024",
        end: "Present",
        bullets: [
          "Agente on-chain autónomo para optimizar rendimiento vía interacciones DeFi (EVM).",
          "Modelos estadísticos para timing de transacciones, uso de gas y sizing de posiciones.",
          "Tableros y reporting automatizado para performance y riesgo.",
        ],
      },
      {
        company: "Universidad (Cátedra/Curso)",
        role: "Profesor — Blockchain & DeFi (enfoque cuantitativo)",
        start: "2023",
        end: "2024",
        bullets: [
          "Diseñé y dicté contenidos de DeFi/derivados, market microstructure y riesgos on-chain.",
        ],
      },
      {
        company: "Crabi",
        url: "https://crabi.com",
        role: "Pricing Head",
        start: "2023",
        end: "2024",
        bullets: [
          "Reduje el loss ratio de 121% a 80% en 17 meses mediante pricing, mix y control de riesgo.",
          "Llevé el cross-sell de 24% a 35% y el stock de autos +12% (≈200K pólizas).",
          "Reducí el loss ratio de motos en 20% con segmentación y tarifas dinámicas.",
        ],
      },
      {
        company: "Crabi",
        url: "https://crabi.com",
        role: "Actuarial Lead",
        start: "2022",
        end: "2023",
        bullets: [
          "Modelos de frecuencia/severidad, GLMs y segmentación para tarificación técnica.",
          "Automatización de KPIs: loss ratio, persistencia y LTV por segmento.",
        ],
      },
      {
        company: "Independiente",
        role: "Builder — Trading infra & market bots",
        start: "2021",
        end: "2024",
        bullets: [
          "Bots de mercado (arbitraje/MM/sniping) y orquestación multi-EVM.",
          "Backtesting y pipelines de datos para research cuantitativo.",
        ],
      },
      {
        company: "Allianz",
        url: "https://www.allianz.com.ar/",
        role: "Data Management, Analytics & Producto",
        start: "2020",
        end: "2022",
        bullets: [
          "Metodologías de pricing y growth; mejora de funnels y reporting ejecutivo.",
        ],
      },
      {
        company: "MetLife",
        url: "https://www.metlife.com.ar/",
        role: "Product Development & Data Science",
        start: "2018",
        end: "2020",
        bullets: [
          "Desarrollo de productos con modelos analíticos y benchmarks de pricing (10K+ clientes).",
        ],
      },
      {
        company: "MetLife",
        url: "https://www.metlife.com.ar/",
        role: "Data Analyst",
        start: "2016",
        end: "2017",
        bullets: [
          "Modelos de predicción/segmentación y KPIs (loss ratio, persistencia).",
        ],
      },
    ],
    education: [
      {
        school: "Universidad Torcuato Di Tella (UTDT)",
        degree: "M.Sc. en Analytics",
        year: "2020–2022",
        url: "https://www.utdt.edu/",
      },
      { school: "Universidad de Buenos Aires (UBA)", degree: "Actuario", year: "2013–2019" },
    ],
    skills: [
      "Quant",
      "Producto & Growth",
      "Econometría/GLM",
      "Experimentación",
      "SQL",
      "Python",
      "Solidity",
      "Next.js",
      "Tailwind",
      "APIs & ETL",
      "Dashboards",
    ],
  },

  en: {
    name: "Matias Rodriguez",
    headline: "Quant · Developer · Actuary · MSc in Analytics",
    location: "Buenos Aires, AR",
    links: [
      { label: "GitHub", href: "https://github.com/rodriguezmatid" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/rodriguezmatid/" },
    ],
    bio:
      "I build 0→1 products and grow them with data. Currently researching DeFi and building on-chain agents (Python/Solidity), with a quantitative focus and live performance. Previously led pricing/analytics in insurance.",
    highlights: [
      "0→1: validation, MVP, first users/revenue",
      "Experimentation: funnels, A/B testing, pricing, retention",
      "Product analytics: events, cohorts, actionable KPIs",
    ],
    experience: [
      {
        company: "GizaTech",
        url: "https://gizatech.xyz",
        role: "Software Engineer — AI Agent Developer",
        start: "2024",
        end: "Present",
        bullets: [
          "Autonomous on-chain agent optimizing returns across DeFi (EVM).",
          "Statistical models for transaction timing, gas usage and position sizing.",
          "Automated dashboards & reporting for performance and risk.",
        ],
      },
      {
        company: "University (Course)",
        role: "Lecturer — Blockchain & DeFi (quant focus)",
        start: "2023",
        end: "2024",
        bullets: [
          "Designed and taught DeFi/derivatives, market microstructure and on-chain risk.",
        ],
      },
      {
        company: "Crabi",
        url: "https://crabi.com",
        role: "Pricing Head",
        start: "2023",
        end: "2024",
        bullets: [
          "Reduced loss ratio from 121% to 80% in 17 months via pricing, mix and risk control.",
          "Raised cross-sell from 24% to 35% and car policy stock +12% (~200K policies).",
          "Cut motorcycle loss ratio by 20% through segmentation and dynamic rates.",
        ],
      },
      {
        company: "Crabi",
        url: "https://crabi.com",
        role: "Actuarial Lead",
        start: "2022",
        end: "2023",
        bullets: [
          "Frequency/severity models, GLMs and segmentation for technical pricing.",
          "Automated KPIs: loss ratio, persistency and LTV by segment.",
        ],
      },
      {
        company: "Independent",
        role: "Builder — Trading infra & market bots",
        start: "2021",
        end: "2024",
        bullets: [
          "Arbitrage/MM/sniping bots and multi-EVM orchestration.",
          "Backtesting and data pipelines for quantitative research.",
        ],
      },
      {
        company: "Allianz",
        url: "https://www.allianz.com.ar/",
        role: "Data Management, Analytics & Product",
        start: "2020",
        end: "2022",
        bullets: [
          "Pricing/growth methodologies; funnel improvements and exec reporting.",
        ],
      },
      {
        company: "MetLife",
        url: "https://www.metlife.com.ar/",
        role: "Product Development & Data Science",
        start: "2018",
        end: "2020",
        bullets: [
          "Developed insurance products with analytical models and pricing benchmarks (10K+ clients).",
        ],
      },
      {
        company: "MetLife",
        url: "https://www.metlife.com.ar/",
        role: "Data Analyst",
        start: "2016",
        end: "2017",
        bullets: [
          "Prediction/segmentation models and KPI systems (loss ratio, persistency).",
        ],
      },
    ],
    education: [
      {
        school: "Universidad Torcuato Di Tella (UTDT)",
        degree: "M.Sc. in Analytics",
        year: "2020–2022",
        url: "https://www.utdt.edu/",
      },
      { school: "University of Buenos Aires (UBA)", degree: "Actuary", year: "2013–2019" },
    ],
    skills: [
      "Quant",
      "Product & Growth",
      "Econometrics/GLM",
      "Experimentation",
      "SQL",
      "Python",
      "Solidity",
      "Next.js",
      "Tailwind",
      "APIs & ETL",
      "Dashboards",
    ],
  },
}
