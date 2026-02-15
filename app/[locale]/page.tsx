// app/[locale]/page.tsx
import Container from "@/components/Container"
import Link from "next/link"
import PostCard from "@/components/PostCard"
import { allPosts } from "contentlayer/generated"
import { getDict, type Locale } from "@/lib/dictionary"
import { siteConfig } from "@/site.config"

export const dynamic = "force-static"

export default function Home({ params }: { params: { locale: Locale } }) {
  const t = getDict(params.locale)
  const tagline = siteConfig.brand?.tagline?.[params.locale] ?? ""

  const posts = allPosts
    .filter((p) => !p.draft && (p as any).locale === params.locale)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 5)

  return (
    <Container>
      {/* Hero */}
      <section className="py-20">
        <h1 className="text-4xl font-bold tracking-tight">
          {t.hero.title}
        </h1>
        {tagline && (
          <p className="mt-3 text-sm uppercase tracking-widest text-neutral-500">
            {tagline}
          </p>
        )}
        <p className="mt-6 leading-relaxed text-neutral-600 dark:text-neutral-400">
          {t.hero.subtitle}
        </p>
      </section>

      {/* Posts */}
      <section className="pb-20">
        <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-500 pb-3 border-b border-black dark:border-white mb-6">
          {t.latest}
        </h2>
        <div>
          {posts.map((p) => (
            <PostCard key={(p as any).url} post={p as any} />
          ))}
        </div>
        <div className="mt-6">
          <Link
            href={`/${params.locale}/blog`}
            className="text-xs uppercase tracking-widest hover:line-through"
          >
            {t.seeAll} &rarr;
          </Link>
        </div>
      </section>
    </Container>
  )
}
