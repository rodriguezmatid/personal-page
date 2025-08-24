// lib/dictionary.ts
import { siteConfig } from '@/site.config'

export type Locale = keyof typeof siteConfig.i18n.metaDescription

export const dict = {
  es: {
    nav: siteConfig.i18n.nav.es,
    hero: {
      title: siteConfig.title,
      subtitle: siteConfig.brand.tagline.es,
    },
    latest: siteConfig.i18n.latest.es,
    seeAll: siteConfig.i18n.seeAll.es,
  },
  en: {
    nav: siteConfig.i18n.nav.en,
    hero: {
      title: siteConfig.title,
      subtitle: siteConfig.brand.tagline.en,
    },
    latest: siteConfig.i18n.latest.en,
    seeAll: siteConfig.i18n.seeAll.en,
  },
} as const

export const getDict = (l: Locale) => dict[l]
  
  