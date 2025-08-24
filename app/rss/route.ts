import { allPosts } from "contentlayer/generated"
import { siteConfig } from "@/site.config"

export async function GET() {
  const posts = allPosts.filter(p => !p.draft).sort((a, b) => (a.date < b.date ? 1 : -1))
  const items = posts.map(p => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${siteConfig.url}${p.url}</link>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description><![CDATA[${p.summary}]]></description>
      <guid isPermaLink="true">${siteConfig.url}${p.url}</guid>
    </item>
  `).join("")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title><![CDATA[${siteConfig.title}]]></title>
      <link>${siteConfig.url}</link>
      <description><![CDATA[${siteConfig.description}]]></description>
      ${items}
    </channel>
  </rss>`

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } })
}
