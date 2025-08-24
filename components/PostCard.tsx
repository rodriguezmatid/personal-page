import Link from "next/link"
import type { Post } from "contentlayer/generated"

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="group rounded-2xl border border-gray-200 p-5 transition hover:shadow-sm">
      <h3 className="text-lg font-semibold">
        <Link href={post.url} className="hover:underline">{post.title}</Link>
      </h3>
      <p className="mt-1 text-sm text-gray-500">{new Date(post.date).toLocaleDateString("es-AR")}</p>
      <p className="mt-3 text-gray-700">{post.summary}</p>
      {post.tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span key={t} className="rounded-full border px-2 py-0.5 text-xs text-gray-600">{t}</span>
          ))}
        </div>
      ) : null}
    </article>
  )
}
