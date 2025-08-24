// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import remarkGfm from "remark-gfm"

const LOCALES = ["en", "es"] as const

function parsePath(flattenedPath: string) {
  // flattenedPath: p.ej. "en/blog/slug" o "blog/en/slug"
  const parts = flattenedPath.split("/")

  // caso 1: en/blog/...
  if (LOCALES.includes(parts[0] as any) && parts[1] === "blog") {
    return { locale: parts[0], slug: parts.slice(2).join("/") }
  }
  // caso 2: blog/en/...
  if (parts[0] === "blog" && LOCALES.includes(parts[1] as any)) {
    return { locale: parts[1], slug: parts.slice(2).join("/") }
  }
  // fallback (evita undefined)
  return { locale: "es", slug: parts.join("/") }
}

export const Post = defineDocumentType(() => ({
  name: "Post",
  // Matchea ambos esquemas bajo /content
  filePathPattern: `**/blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    summary: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" } },
    cover: { type: "string" },
    draft: { type: "boolean", default: false },
    // opcional: permitir slug manual en el frontmatter
    slug: { type: "string", required: false },
  },
  computedFields: {
    locale: {
      type: "string",
      resolve: (doc) => parsePath(doc._raw.flattenedPath).locale,
    },
    slug: {
      type: "string",
      resolve: (doc) => {
        const manual = (doc as any).slug
        if (manual) return manual
        return parsePath(doc._raw.flattenedPath).slug
      },
    },
    url: {
      type: "string",
      resolve: (doc) => {
        const { locale } = parsePath(doc._raw.flattenedPath)
        const slug = (doc as any).slug ?? parsePath(doc._raw.flattenedPath).slug
        return `/${locale}/blog/${slug}`
      },
    },
  },
}))

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "append" }]],
  },
  disableImportAliasWarning: true,
})
