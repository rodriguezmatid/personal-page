// lib/dictionary.ts
export const dict = {
    es: {
      nav: { blog: "Blog", about: "Sobre mí" },
      hero: {
        title: "Matias Rodriguez",
        subtitle: "Quant · Developer · Actuario · MSc en Analytics",
      },
      latest: "Últimos artículos",
      seeAll: "Ver todos",
    },
    en: {
      nav: { blog: "Blog", about: "About" },
      hero: {
        title: "Matias Rodriguez",
        subtitle: "Quant · Developer · Actuary · MSc in Analytics",
      },
      latest: "Latest posts",
      seeAll: "See all",
    },
  } as const
  
  export type Locale = keyof typeof dict
  export const getDict = (l: Locale) => dict[l]
  
  