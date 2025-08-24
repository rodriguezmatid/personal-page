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
      <div className="py-10">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight">{t.about}</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{data.headline}</p>
          {data.location && (
            <p className="text-sm text-gray-500 dark:text-gray-400">{data.location}</p>
          )}
        </header>

        {/* Experience */}
        <section id="experience" className="mb-10">
          <h2 className="text-xl font-semibold mb-3">{t.experience}</h2>
          <div className="grid gap-4">
            {data.experience.map((e, i) => (
              <div key={i} className="rounded-2xl border p-4">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-medium">
                    {e.role} ·{" "}
                    {"url" in e && e.url ? (
                      <a
                        href={e.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-2 hover:underline"
                      >
                        {e.company}
                      </a>
                    ) : (
                      e.company
                    )}
                  </h3>
                  <span className="text-xs text-gray-500">
                    {e.start}{e.end ? ` — ${e.end}` : ""}
                  </span>
                </div>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
                  {e.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contributions */}
        {data.community && data.community.length > 0 && (
          <section id="contributions" className="mb-10">
            <h2 className="text-xl font-semibold mb-3">{t.community}</h2>
            <div className="grid gap-4">
              {data.community.map((c, i) => (
                <div key={i} className="rounded-2xl border p-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-medium">
                      {c.role} ·{" "}
                      {"url" in c && c.url ? (
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline-offset-2 hover:underline"
                        >
                          {c.org}
                        </a>
                      ) : (
                        c.org
                      )}
                    </h3>
                    {(c.start || c.end) && (
                      <span className="text-xs text-gray-500">
                        {c.start ?? ""}{c.start && c.end ? " — " : ""}{c.end ?? t.present}
                      </span>
                    )}
                  </div>
                  {c.bullets && c.bullets.length > 0 && (
                    <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
                      {c.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Startups */}
        {data.ventures && data.ventures.length > 0 && (
          <section id="startups" className="mb-10">
            <h2 className="text-xl font-semibold mb-3">{t.ventures}</h2>
            <div className="grid gap-4">
              {data.ventures.map((v, i) => (
                <div key={i} className="rounded-2xl border p-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-medium">
                      {"url" in v && v.url ? (
                        <a
                          href={v.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline-offset-2 hover:underline"
                        >
                          {v.name}
                        </a>
                      ) : (
                        v.name
                      )}
                      {v.role ? <> — {v.role}</> : null}
                    </h3>
                    {(v.start || v.end) && (
                      <span className="text-xs text-gray-500">
                        {v.start ?? ""}{v.start && v.end ? " — " : ""}{v.end ?? t.present}
                      </span>
                    )}
                  </div>
                  {v.bullets && v.bullets.length > 0 && (
                    <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
                      {v.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        <section id="education" className="mb-10">
          <h2 className="text-xl font-semibold mb-3">{t.education}</h2>
          <ul className="grid gap-2 text-sm">
            {data.education.map((ed, i) => (
              <li key={i} className="rounded-2xl border p-4">
                {/* 1ª line: degree (link) + year aligned to the right */}
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-medium">
                    {"url" in ed && ed.url ? (
                      <a
                        href={ed.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-2 hover:underline"
                      >
                        {ed.degree}
                      </a>
                    ) : (
                      ed.degree
                    )}
                  </h3>
                  <span className="text-xs text-gray-500 whitespace-nowrap">
                    {ed.year}
                  </span>
                </div>

                {/* 2ª line: university (no link) */}
                <div className="mt-1 text-gray-600 dark:text-gray-300">
                  {ed.school}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Container>
  )
}
