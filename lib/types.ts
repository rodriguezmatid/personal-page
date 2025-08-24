export type Locale = "en" | "es"

export type Experience = {
  company: string
  role: string
  start: string
  end: string | "Present"
  bullets: string[]
  url?: string
}

export type Education = {
  school: string
  degree: string
  year: string
  url?: string
}

export type Community = {
  org: string
  role: string
  start?: string
  end?: string | "Present"
  url?: string
  bullets?: string[]
}

export type Venture = {
  name: string
  role?: string
  start?: string
  end?: string | "Present"
  url?: string
  bullets?: string[]
}

export type CV = {
  name: string
  headline: string
  location?: string
  links?: { label: string; href: string }[]
  bio?: string
  highlights?: string[]
  experience: Experience[]
  education: Education[]
  community?: Community[]
  ventures?: Venture[]
}
