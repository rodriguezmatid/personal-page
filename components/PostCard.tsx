import Link from "next/link"
import type { Post } from "contentlayer/generated"
import { formatDate } from "@/lib/utils"

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="py-4 border-b border-neutral-200 dark:border-neutral-800 last:border-b-0">
      <Link href={post.url} className="block group">
        <p className="text-xs uppercase tracking-widest text-neutral-500">
          {formatDate(post.date)}
        </p>
        <h3 className="mt-1 font-bold group-hover:underline">
          {post.title}
        </h3>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {post.summary}
        </p>
      </Link>
    </article>
  )
}
