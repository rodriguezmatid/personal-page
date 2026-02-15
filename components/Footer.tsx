import { siteConfig } from "@/site.config"

export default function Footer() {
  const socials = [
    { href: siteConfig.social?.x, label: "X" },
    { href: siteConfig.social?.github, label: "GitHub" },
    { href: siteConfig.social?.linkedin, label: "LinkedIn" },
  ].filter((s) => !!s.href) as { href: string; label: string }[]

  return (
    <footer className="border-t border-black dark:border-white">
      <div className="max-w-xl mx-auto px-6 py-6 flex justify-center gap-6 text-xs uppercase tracking-widest">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:line-through"
          >
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
