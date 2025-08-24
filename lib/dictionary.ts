// lib/dictionary.ts
export const dict = {
    es: {
      nav: { blog: "Blog", about: "Sobre mí" },
      hero: {
        title: "Tu Nombre",
        subtitle: "Emprendedor / Builder. CV, notas y proyectos.",
      },
      latest: "Últimos artículos",
      seeAll: "Ver todos",
    },
    en: {
      nav: { blog: "Blog", about: "About" },
      hero: {
        title: "Your Name",
        subtitle: "Entrepreneur / Builder. CV, notes & projects.",
      },
      latest: "Latest posts",
      seeAll: "See all",
    },
  } as const
  
  export type Locale = keyof typeof dict
  export const getDict = (l: Locale) => dict[l]
  
  