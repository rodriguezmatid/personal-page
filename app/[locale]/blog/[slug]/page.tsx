import { allPosts } from "contentlayer/generated"
import { notFound } from "next/navigation"
import Container from "@/components/Container"
import Prose from "@/components/Prose"
import { MDXComponents } from "@/components/MDXComponents"
import { useMDXComponent } from "next-contentlayer/hooks"
import { formatDate } from "@/lib/utils"

export const dynamicParams = false

export function generateStaticParams() {
  return allPosts.filter((p) => !p.draft).map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: post.cover ? [{ url: post.cover }] : undefined,
    },
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.slug === params.slug)
  if (!post) return notFound()

  const MDX = useMDXComponent(post.body.code)

  return (
    <Container>
      <article className="py-20">
        <header className="mb-12">
          <p className="text-xs uppercase tracking-widest text-neutral-500">
            {formatDate(post.date)}
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight">
            {post.title}
          </h1>
        </header>
        <Prose>
          <MDX components={MDXComponents as any} />
        </Prose>
      </article>
    </Container>
  )
}
