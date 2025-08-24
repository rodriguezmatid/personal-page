import { allPosts } from "contentlayer/generated"
import { notFound } from "next/navigation"
import Container from "@/components/Container"
import Prose from "@/components/Prose"
import { MDXComponents } from "@/components/MDXComponents"
import { useMDXComponent } from "next-contentlayer/hooks"
import { formatDate } from "@/lib/utils"

export const dynamicParams = false

export function generateStaticParams() {
  return allPosts.filter(p => !p.draft).map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = allPosts.find(p => p.slug === params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: post.cover ? [{ url: post.cover }] : undefined
    }
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find(p => p.slug === params.slug)
  if (!post) return notFound()

  const MDX = useMDXComponent(post.body.code)

  // Debug: log the date values
  console.log('Post date:', post.date)
  console.log('Post date type:', typeof post.date)
  console.log('New Date(post.date):', new Date(post.date))
  console.log('Formatted date:', new Date(post.date).toLocaleDateString("en-US"))

  return (
    <Container>
      <article className="py-10">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="text-sm text-gray-500">{formatDate(post.date)}</p>
        </header>
        <Prose>
          <MDX components={MDXComponents as any} />
        </Prose>
      </article>
    </Container>
  )
}
