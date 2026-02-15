// app/layout.tsx
import "./globals.css"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import { siteConfig } from "@/site.config"
import ThemeProvider from "@/components/ThemeProvider"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.title}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
    languages: {
      en: `${siteConfig.url}/en`,
      es: `${siteConfig.url}/es`,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.title,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og.png"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={siteConfig.i18n?.defaultLocale ?? "es"} suppressHydrationWarning>
      <body className={`${spaceGrotesk.className} min-h-screen flex flex-col`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
