# Matias Rodriguez — Blog

Personal site built with Next.js and MDX, featuring a bilingual blog (ES/EN), dark/light theme, and optimized for Vercel deployment.

## ✨ Features

- **Next.js (App Router)** + TypeScript
- **MDX + Contentlayer** - Content versioned with git
- **i18n by URL** - `/es` and `/en` (middleware + dynamic routes)
- **Dark/Light theme** with next-themes
- **Tailwind CSS** with @tailwindcss/typography
- **SEO optimized** - Per-locale metadata, favicon/OG image

## 🧰 Tech Stack

- **Next.js 14**, React 18, TypeScript 5
- **Contentlayer 0.3**, MDX
- **Tailwind CSS 3**, next-themes
- **pnpm**

## 🔧 Requirements

- Node 18 or 20
- pnpm (`npm i -g pnpm`)

## 🚀 Getting Started

### Development

```bash
pnpm install
pnpm dev
```

## 📝 Writing Posts

Place posts in:
- `content/en/blog/...`   # English
- `content/es/blog/...`   # Spanish

### Front-matter

```yaml
---
title: "Your Post Title"
date: "2025-01-01"
summary: "Brief description"
tags: ["tag1", "tag2"]
draft: false
---
```

## 🌍 Internationalization

- Middleware redirects `/` → `/{locale}` based on browser language
- UI strings in `lib/dictionary.ts`
- Pages under `app/[locale]/...`

## 🏷️ Configuration

Edit `site.config.ts` for site metadata:

```typescript
{
  title: "Your Site Title",
  description: "Your description",
  url: "https://yoursite.com",
  author: "Your Name"
}
```

## ☁️ Deploy to Vercel

1. Push to GitHub
2. Import in Vercel
3. Build settings: `pnpm install` / `pnpm build`

## 📁 Structure

```
app/[locale]/          # Pages (en/es)
components/            # React components
content/en|es/blog/    # MDX posts
lib/                   # Utilities
public/                # Static assets
```

## 📄 License

MIT — free to use and remix.