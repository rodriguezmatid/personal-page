import { MetadataRoute } from "next"
import { siteConfig } from "@/site.config"
import { allPosts } from "contentlayer/generated"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "")

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/es`, lastModified: new Date() },
    { url: `${base}/en`, lastModified: new Date() },
    { url: `${base}/es/about`, lastModified: new Date() },
    { url: `${base}/en/about`, lastModified: new Date() },
    { url: `${base}/es/blog`, lastModified: new Date() },
    { url: `${base}/en/blog`, lastModified: new Date() },
  ]

  const posts: MetadataRoute.Sitemap = allPosts
    .filter(p => !p.draft)
    .map(p => ({
      url: `${base}${(p as any).url}`,
      lastModified: new Date(p.date)
    }))

  return [...staticRoutes, ...posts]
}
