"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeToggle from "./ThemeToggle"

export default function Header({ locale }: { locale: "en" | "es" }) {
  const pathname = usePathname() || `/${locale}`
  const other = locale === "es" ? "en" : "es"
  const swap = pathname.replace(/^\/(en|es)(?=\/|$)/, `/${other}`)

  const t = {
    es: { blog: "Blog", about: "Sobre mí", lang: "EN" },
    en: { blog: "Blog", about: "About", lang: "ES" },
  }[locale]

  function rememberLocale() {
    document.cookie = `NEXT_LOCALE=${other}; path=/; max-age=${60 * 60 * 24 * 365}`
  }

  return (
    <header className="border-b border-black dark:border-white">
      <nav className="max-w-xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href={`/${locale}`}
          className="text-sm font-bold uppercase tracking-widest"
        >
          MR
        </Link>

        <div className="flex items-center gap-5 text-xs uppercase tracking-widest">
          <Link
            href={`/${locale}/blog`}
            className="hover:line-through"
          >
            {t.blog}
          </Link>
          <Link
            href={`/${locale}/about`}
            className="hover:line-through"
          >
            {t.about}
          </Link>
          <Link
            href={swap}
            onClick={rememberLocale}
            className="hover:line-through"
          >
            {t.lang}
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
