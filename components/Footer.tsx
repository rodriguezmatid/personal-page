import { siteConfig } from "@/site.config"

type SocialItem = { href?: string; label: string }

export default function Footer() {
  const year = new Date().getFullYear()

  const rawSocials: SocialItem[] = [
    { href: siteConfig.social?.x, label: "X" },
    { href: siteConfig.social?.github, label: "GitHub" },
    { href: siteConfig.social?.linkedin, label: "LinkedIn" },
  ]

  const socials = rawSocials.filter(
    (s): s is { href: string; label: string } => !!s.href
  )

  return (
    <footer className="fixed bottom-0 inset-x-0 z-40 bg-white/70 dark:bg-gray-950/70 backdrop-blur border-t border-gray-100 dark:border-gray-800 print:hidden">
      <div className="h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          © {year} {siteConfig.author?.name}.
        </div>
        {socials.length > 0 && (
          <nav className="flex items-center gap-4 text-sm">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {s.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </footer>
  )
}
