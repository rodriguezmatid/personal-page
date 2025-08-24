import { defineDocumentType, makeSource } from "contentlayer/source-files"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import remarkGfm from "remark-gfm"

export const Post = defineDocumentType(() => ({
  name: "Post",
  // Busca en content/en/blog/** y content/es/blog/**
  filePathPattern: `**/blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    summary: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" } },
    cover: { type: "string" },
    draft: { type: "boolean", default: false },
  },
  computedFields: {
    locale: {
      type: "string",
      resolve: (doc) => {
        const m = doc._raw.flattenedPath.match(/^(en|es)\/blog\//)
        return m?.[1] ?? "es"
      }
    },
    slug: {
      type: "string",
      resolve: (doc) => {
        const m = doc._raw.flattenedPath.match(/^(?:en|es)\/blog\/(.+)$/)
        return m?.[1] ?? doc._raw.flattenedPath
      }
    },
    url: {
      type: "string",
      resolve: (doc) => `/${(doc as any).locale}/blog/${(doc as any).slug}`
    }
  }
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
