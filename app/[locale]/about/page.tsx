// app/[locale]/about/page.tsx
import Container from "@/components/Container"
import type { Locale } from "@/lib/types"
import { cv } from "@/lib/cv"
import { siteConfig } from "@/site.config"

export const dynamic = "force-static"

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  const title = params.locale === "es" ? "Sobre mí" : "About"
  const description =
    params.locale === "es"
      ? "CV y trayectoria de Matias Rodriguez."
      : "CV and background of Matias Rodriguez."

  return {
    title,
    description,
    openGraph: {
      title: `${title} — ${siteConfig.title}`,
      description,
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${siteConfig.title}`,
      description,
      images: ["/og.png"],
    },
  }
}

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const data = cv[params.locale]
  const t = {
    es: {
      about: "Sobre mí",
      experience: "Experiencia",
      community: "Contribuciones",
      ventures: "Emprendimientos",
      education: "Educación",
      present: "Presente",
    },
    en: {
      about: "About",
      experience: "Experience",
      community: "Contributions",
      ventures: "Ventures",
      education: "Education",
      present: "Present",
    },
  }[params.locale]

  return (
    <Container>
      <div className="py-20">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight">
            {t.about}
          </h1>
          <p className="mt-6 leading-relaxed text-neutral-600 dark:text-neutral-400">
            {data.headline}
          </p>
          {data.location && (
            <p className="mt-2 text-xs uppercase tracking-widest text-neutral-500">
              {data.location}
            </p>
          )}
        </header>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-500 pb-3 border-b border-black dark:border-white mb-6">
            {t.experience}
          </h2>
          <div className="space-y-8">
            {data.experience.map((e, i) => (
              <div key={i} className="border-b border-neutral-200 dark:border-neutral-800 pb-6 last:border-b-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="font-bold">
                    {e.role}
                    <span className="text-neutral-400"> — </span>
                    {"url" in e && e.url ? (
                      <a
                        href={e.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-normal underline hover:no-underline"
                      >
                        {e.company}
                      </a>
                    ) : (
                      <span className="font-normal text-neutral-600 dark:text-neutral-400">
                        {e.company}
                      </span>
                    )}
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-neutral-500 whitespace-nowrap">
                    {e.start}
                    {e.end ? ` — ${e.end}` : ""}
                  </span>
                </div>
                <ul className="mt-3 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {e.bullets.map((b, j) => (
                    <li key={j}>— {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contributions */}
        {data.community && data.community.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-500 pb-3 border-b border-black dark:border-white mb-6">
              {t.community}
            </h2>
            <div className="space-y-8">
              {data.community.map((c, i) => (
                <div key={i} className="border-b border-neutral-200 dark:border-neutral-800 pb-6 last:border-b-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-bold">
                      {c.role}
                      <span className="text-neutral-400"> — </span>
                      {"url" in c && c.url ? (
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-normal underline hover:no-underline"
                        >
                          {c.org}
                        </a>
                      ) : (
                        <span className="font-normal text-neutral-600 dark:text-neutral-400">
                          {c.org}
                        </span>
                      )}
                    </h3>
                    {(c.start || c.end) && (
                      <span className="text-xs uppercase tracking-widest text-neutral-500 whitespace-nowrap">
                        {c.start ?? ""}
                        {c.start && c.end ? " — " : ""}
                        {c.end ?? t.present}
                      </span>
                    )}
                  </div>
                  {c.bullets && c.bullets.length > 0 && (
                    <ul className="mt-3 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                      {c.bullets.map((b, j) => (
                        <li key={j}>— {b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Ventures */}
        {data.ventures && data.ventures.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-500 pb-3 border-b border-black dark:border-white mb-6">
              {t.ventures}
            </h2>
            <div className="space-y-8">
              {data.ventures.map((v, i) => (
                <div key={i} className="border-b border-neutral-200 dark:border-neutral-800 pb-6 last:border-b-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-bold">
                      {"url" in v && v.url ? (
                        <a
                          href={v.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:no-underline"
                        >
                          {v.name}
                        </a>
                      ) : (
                        v.name
                      )}
                      {v.role && (
                        <>
                          <span className="text-neutral-400"> — </span>
                          <span className="font-normal text-neutral-600 dark:text-neutral-400">
                            {v.role}
                          </span>
                        </>
                      )}
                    </h3>
                    {(v.start || v.end) && (
                      <span className="text-xs uppercase tracking-widest text-neutral-500 whitespace-nowrap">
                        {v.start ?? ""}
                        {v.start && v.end ? " — " : ""}
                        {v.end ?? t.present}
                      </span>
                    )}
                  </div>
                  {v.bullets && v.bullets.length > 0 && (
                    <ul className="mt-3 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                      {v.bullets.map((b, j) => (
                        <li key={j}>— {b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        <section>
          <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-500 pb-3 border-b border-black dark:border-white mb-6">
            {t.education}
          </h2>
          <div className="space-y-6">
            {data.education.map((ed, i) => (
              <div key={i}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="font-bold">
                    {"url" in ed && ed.url ? (
                      <a
                        href={ed.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:no-underline"
                      >
                        {ed.degree}
                      </a>
                    ) : (
                      ed.degree
                    )}
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-neutral-500 whitespace-nowrap">
                    {ed.year}
                  </span>
                </div>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {ed.school}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Container>
  )
}
