// app/[locale]/page.tsx
import Container from "@/components/Container"
import Link from "next/link"
import PostCard from "@/components/PostCard"
import { allPosts } from "contentlayer/generated"
import { getDict, type Locale } from "@/lib/dictionary"
import { cv } from "@/lib/cv"
import { siteConfig } from "@/site.config"

export const dynamic = "force-static"

export default function Home({ params }: { params: { locale: Locale } }) {
  const t = getDict(params.locale)
  const me = cv[params.locale]
  const subtitle =
    (siteConfig as any).i18n?.subtitle?.[params.locale] ??
    (siteConfig as any).subtitle ??
    ""

  const posts = allPosts
    .filter((p) => !p.draft && (p as any).locale === params.locale)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 5)

  return (
    <Container>
      {/* Introduction */}
      <section className="py-14">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          {t.hero.title}
        </h1>
        {}
        {subtitle && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {subtitle}
          </p>
        )}
        {}
        <p className="mt-3 text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
          {t.hero.subtitle}
        </p>

        {}
        {(me.community?.length || me.ventures?.length) ? (
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            {me.community?.map((c, i) => (
              <a
                key={`c-${i}`}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border px-2 py-1 hover:underline"
              >
                {c.org}
              </a>
            ))}
            {me.ventures?.map((v, i) => (
              <a
                key={`v-${i}`}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border px-2 py-1 hover:underline"
              >
                {v.name}
              </a>
            ))}
          </div>
        ) : null}
      </section>

      {/* Latest posts */}
      <section className="py-6">
        <h2 className="text-xl font-semibold mb-4">{t.latest}</h2>
        <div className="grid gap-4">
          {posts.map((p) => (
            <PostCard key={(p as any).url} post={p as any} />
          ))}
        </div>
        <div className="mt-6">
          <Link href={`/${params.locale}/blog`} className="text-accent hover:underline">
            {t.seeAll} →
          </Link>
        </div>
      </section>
    </Container>
  )
}
