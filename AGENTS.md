# AGENTS.md

> Read this file in full before taking any action in this repository.
> This file is the behavioral contract for all AI coding agents operating in this codebase.
> Violations of this contract produce waste. Follow it precisely.

## Doctrine

These principles are non-negotiable defaults for all work in this repository.

- **Self-verify**: Remove the human from the feedback loop wherever possible. Run `pnpm build`, `pnpm lint`, and verify output yourself. Do not ask the human to verify something you can verify.
- **Long autonomous runs**: Structure your work to run productively for as long as possible without human intervention. Think before acting. Plan multi-step work. Anticipate failures.
- **Context is precious**: Do not bloat context with unnecessary tool calls, verbose output, or exploratory tangents. Be surgical. Load only what you need.
- **No slop**: Never produce sloppy, half-implemented, or placeholder code unless explicitly scoped as a prototype. Default to complete, production-quality implementations.
- **Scope explicitly**: Always confirm the scope level before beginning work. Scope levels: `exploration`, `prototype`, `mvp`, `production`. Default to `production` unless told otherwise. Adjust rigor accordingly.
- **Refactor aggressively**: Do not tolerate code smell. If you encounter it, fix it. If you're about to create it, don't. Code quality is not optional.
- **Research before implementation**: Before writing code that depends on external APIs, libraries, or Next.js behaviors you are uncertain about, research first. Use web search, read docs, read source code. Do not guess.
- **No stubs or mocks unless requested**: Never leave TODO comments, stub implementations, mock data, or incomplete code paths unless the human explicitly requests it.
- **Iterate until green**: Run `pnpm build` after every significant change. Do not declare work complete with a failing build.
- **Commit discipline**: Make atomic, well-described commits. Do not bundle unrelated changes.

## Repository Context

| Attribute | Value |
|---|---|
| **Project** | Personal portfolio, blog, and CV site for Matias Rodriguez |
| **Language** | TypeScript 5 |
| **Framework** | Next.js 14 (App Router) + React 18 |
| **Styling** | Tailwind CSS 3 + @tailwindcss/typography |
| **Content** | Contentlayer + MDX (remark-gfm, rehype-slug, rehype-autolink-headings) |
| **Theming** | next-themes (class-based dark mode) |
| **Font** | Space Grotesk (Google Fonts) |
| **i18n** | Custom middleware-based, URL-prefixed (`/en`, `/es`), default `es` |
| **Package manager** | pnpm |
| **Deployment** | Vercel (static generation + SSG) |
| **Maturity** | MVP |
| **Risk level** | Low |

**Structure**: Single-project, not a monorepo. All source lives at root.

```
app/              Next.js App Router pages and layouts
  [locale]/       Locale-scoped pages (home, about, blog, blog/[slug])
  api/            API routes (contact)
  rss/            RSS feed route
components/       React components (Header, Footer, PostCard, etc.)
content/          MDX blog posts organized by locale (en/, es/)
lib/              Utilities, types, CV data, i18n dictionary
public/           Static assets (favicons, OG image, blog images)
```

## Build & Test Commands

| Command | Purpose | Status |
|---|---|---|
| `pnpm dev` | Start development server | Confirmed |
| `pnpm build` | Production build (Next.js + Contentlayer) | Confirmed |
| `pnpm start` | Serve production build | Confirmed |
| `pnpm lint` | Run ESLint (next lint) | Confirmed |

No dedicated test runner or test suite exists. Build success is the primary quality gate.

## Repo-Specific Constraints

- **Next.js App Router only.** Do not use Pages Router patterns (`getServerSideProps`, `getStaticProps`, `_app.tsx`, `_document.tsx`).
- **Contentlayer for content.** Blog posts are `.mdx` files in `content/{locale}/blog/`. Do not introduce a CMS or alternative content pipeline.
- **Custom i18n via middleware.** Locale detection and routing are handled by `middleware.ts`. Do not introduce i18n libraries (next-intl, next-i18next, etc.) unless explicitly requested.
- **Two locales: `en` and `es`.** The `[locale]` dynamic segment is restricted to these values via `generateStaticParams` in the locale layout. Any new locale requires changes to middleware, dictionary, CV data, and site config.
- **Tailwind only for styling.** Do not introduce CSS modules, styled-components, or other CSS-in-JS. Use Tailwind utility classes.
- **Swiss/Brutalist design language.** The site uses a monochrome palette (pure black/white), Space Grotesk font, uppercase tracked labels, sharp edges (no rounded corners), and structural borders. Maintain this aesthetic in all UI changes.
- **Static generation preferred.** Use `force-static` or `generateStaticParams` wherever possible. Avoid server-side rendering unless absolutely necessary.
- **Site config is the single source of truth.** All site metadata, social links, brand info, and i18n strings originate from `site.config.ts` and `lib/dictionary.ts`. Do not hardcode these values in components.
- **CV data lives in `lib/cv.ts`.** It is structured TypeScript, not markdown. Changes to CV content go there.

## Quality Gates

Before declaring any task complete, verify:

- [ ] Build succeeds (`pnpm build`)
- [ ] No new lint warnings (`pnpm lint`)
- [ ] Both locales render correctly (`/en` and `/es`)
- [ ] Dark mode and light mode both work
- [ ] Mobile responsiveness is intact
- [ ] No hardcoded secrets, keys, or sensitive values in code
- [ ] No unnecessary dependencies added
- [ ] Swiss/Brutalist design language is maintained (monochrome, sharp edges, uppercase labels, structural borders)

## Security Gates

- Never read, print, log, or expose `.env` files, private keys, or API secrets.
- Never commit secrets to git. Verify `.gitignore` covers all sensitive files (it currently covers `.env` and `.env.*`).
- Assume a hostile supply chain. Do not install new dependencies without explicit human approval. If you must suggest a dependency, state its purpose, maintainer, and download count.
- Do not execute untrusted code from external sources without sandboxing.
- The contact API route (`app/api/contact/route.ts`) accepts user input. Any modifications must validate and sanitize all inputs.

## Execution Rules

1. On receiving a task, re-read this file if your context is fresh or if starting a new session.
2. Identify scope level. If not stated, default to `production`.
3. Research unknowns before writing code.
4. Implement completely. No partial work.
5. Run all quality gates.
6. Report results concisely. Do not over-narrate.
