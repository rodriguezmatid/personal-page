// app/[locale]/blog/page.tsx
import Container from "@/components/Container"
import PostCard from "@/components/PostCard"
import { allPosts } from "contentlayer/generated"

export default function BlogPage({ params }: { params: { locale: "en" | "es" } }) {
  // 1) filter by language and not-draft
  const filtered = allPosts
    .filter(p => !p.draft && (p as any).locale === params.locale)
    .sort((a, b) => (a.date < b.date ? 1 : -1))

  // 2) dedupe by slug (in case there's any accidental duplicate)
  const seen = new Set<string>()
  const posts = filtered.filter(p => {
    const key = (p as any).slug
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })

  return (
    <Container>
      <div className="py-10">
        <h1 className="text-2xl font-bold mb-6">Blog</h1>
        <div className="grid gap-4">
          {posts.map((p) => <PostCard key={(p as any).url} post={p as any} />)}
        </div>
      </div>
    </Container>
  )
}
