"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeToggle from "./ThemeToggle"
import { Home } from "lucide-react"

export default function Header({ locale }: { locale: "en" | "es" }) {
  const pathname = usePathname() || `/${locale}`
  const other = locale === "es" ? "en" : "es"
  const swap = pathname.replace(/^\/(en|es)(?=\/|$)/, `/${other}`)

  const t = {
    es: { blog: "Blog", about: "Sobre mí", lang: "EN", home: "Inicio" },
    en: { blog: "Blog", about: "About",   lang: "ES", home: "Home"  },
  }[locale]

  function rememberLocale() {
    document.cookie = `NEXT_LOCALE=${other}; path=/; max-age=${60 * 60 * 24 * 365}`
  }

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-100 dark:bg-gray-950/70 dark:border-gray-800">
      <div className="h-14 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Botón Home (izquierda) */}
        <Link
          href={`/${locale}`}
          aria-label={t.home}
          className="rounded-full border px-2 py-0.5 flex items-center gap-1 hover:bg-gray-50 dark:hover:bg-gray-900"
        >
          <Home className="h-4 w-4" />
          <span className="sr-only">{t.home}</span>
        </Link>

        {/* Menú (derecha al extremo) */}
        <nav className="flex items-center gap-3 text-sm">
          <Link href={`/${locale}/blog`} className="hover:underline">{t.blog}</Link>
          <Link href={`/${locale}/about`} className="hover:underline">{t.about}</Link>
          <Link href={swap} onClick={rememberLocale} className="rounded-full border px-2 py-0.5">
            {t.lang}
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
