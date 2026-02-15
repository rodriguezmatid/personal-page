# Matias Rodriguez — Personal Site

Minimalist personal portfolio, blog, and CV. Built with Next.js 14, MDX, and Tailwind CSS. Bilingual (Spanish/English). Swiss/Brutalist design: monochrome, geometric typography, structural borders, no ornamentation.

**Maturity**: MVP — live at [mrodriguez.xyz](https://mrodriguez.xyz).

## Architecture

```
app/
  layout.tsx              Root layout (font, theme provider, global metadata)
  globals.css             Base styles (pure black/white, selection inversion)
  [locale]/
    layout.tsx            Locale layout (header, footer, locale metadata)
    page.tsx              Home — hero + latest posts
    about/page.tsx        CV — experience, contributions, ventures, education
    blog/page.tsx         Blog listing
    blog/[slug]/page.tsx  Blog post (MDX rendered)
  api/contact/route.ts    Contact form endpoint
  rss/route.ts            RSS feed
  sitemap.ts              Dynamic XML sitemap
components/               UI components (Header, Footer, PostCard, ThemeToggle, etc.)
content/
  en/blog/                English blog posts (.mdx)
  es/blog/                Spanish blog posts (.mdx)
lib/
  cv.ts                   Structured CV data (bilingual)
  dictionary.ts           UI translation strings
  types.ts                TypeScript type definitions
  utils.ts                Date formatting utility
```

Key architectural decisions:
- **Static generation** via `force-static` and `generateStaticParams` — no runtime server rendering
- **Custom i18n** via middleware locale detection — no external i18n library
- **Contentlayer** processes MDX at build time into typed JSON
- **Site config** (`site.config.ts`) is the single source of truth for all metadata and strings

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 + @tailwindcss/typography |
| Content | Contentlayer + MDX |
| Font | Space Grotesk (Google Fonts) |
| Theme | next-themes (class-based dark mode) |
| Icons | Lucide React |
| Package manager | pnpm |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Setup

```bash
git clone https://github.com/rodriguezmatid/personal-page.git
cd personal-page
pnpm install
```

### Development

```bash
pnpm dev
```

Opens at `http://localhost:3000`. Redirects to `/es` or `/en` based on browser locale.

### Building

```bash
pnpm build
```

### Linting

```bash
pnpm lint
```

## Content

Blog posts are MDX files in `content/{locale}/blog/`. Frontmatter format:

```yaml
---
title: "Post Title"
date: "2025-01-15"
summary: "One-line description."
tags: ["tag1", "tag2"]
draft: false
---
```

CV data is in `lib/cv.ts` — structured TypeScript, not markdown.

Translation strings are in `site.config.ts` and `lib/dictionary.ts`.

## Deployment

Deployed to Vercel with zero configuration. Push to `main` triggers automatic build and deploy.

```bash
pnpm build   # Vercel runs this automatically
```

No environment variables are required for the static site build.

## Agent Operations

This repository uses AI coding agents as part of its development workflow. Agent behavior is governed by [`AGENTS.md`](./AGENTS.md), which defines execution rules, quality gates, and security constraints. Agents operating in this repository must read and follow `AGENTS.md` before taking any action.

## License

No license file detected. All rights reserved unless otherwise specified.
