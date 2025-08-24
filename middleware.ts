import { NextRequest, NextResponse } from "next/server"

const locales = ["en","es"] as const
const DEFAULT: "en"|"es" = "es"
const PUBLIC_FILE = /\.(?:[^/]+)$/ // cualquier archivo con extensión

function pickLocale(req: NextRequest): "en"|"es" {
  const cookie = req.cookies.get("NEXT_LOCALE")?.value
  if (cookie === "en" || cookie === "es") return cookie
  const lang = (req.headers.get("accept-language") || "").split(",")[0]?.split("-")[0]
  return (lang === "en" || lang === "es") ? lang : DEFAULT
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Dejá pasar _next, api, archivos estáticos y rutas no-localizadas
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/rss") ||
    pathname.startsWith("/sitemap") ||
    pathname === "/robots.txt" ||
    pathname === "/favicon.ico" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  // Ya tiene /en o /es
  const hasLocale = locales.some(l => pathname === `/${l}` || pathname.startsWith(`/${l}/`))
  if (hasLocale) return NextResponse.next()

  // Redirigí a la versión localizada
  const loc = pickLocale(req)
  const url = req.nextUrl.clone()
  url.pathname = `/${loc}${pathname}`
  const res = NextResponse.redirect(url)
  // Persistí 1 año
  res.cookies.set("NEXT_LOCALE", loc, { path: "/", maxAge: 60 * 60 * 24 * 365 })
  return res
}

// Importante: matcher excluye lo que no queremos tocar
export const config = {
  matcher: ["/((?!_next|api|rss|sitemap|robots\\.txt|favicon\\.ico|.*\\..*).*)"]
}
