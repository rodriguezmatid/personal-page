// app/[locale]/layout.tsx
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { siteConfig } from "@/site.config"

type Locale = "en" | "es"

export async function generateMetadata(
  { params: { locale } }: { params: { locale: Locale } }
): Promise<Metadata> {
  const desc =
    siteConfig.i18n?.metaDescription?.[locale] ?? siteConfig.description

  const ogLocale = locale === "es" ? "es_AR" : "en_US"

  return {
    description: desc,
    openGraph: {
      title: siteConfig.title,
      description: desc,
      url: `${siteConfig.url}/${locale}`,
      siteName: siteConfig.title,
      images: [{ url: "/og.png", width: 1200, height: 630 }],
      locale: ogLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: desc,
      images: ["/og.png"],
    },
  }
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} />
      {/* Footer es fixed (h-16), reservamos espacio con pb-16 */}
      <main className="flex-1 pb-16">{children}</main>
      <Footer />
    </div>
  )
}
