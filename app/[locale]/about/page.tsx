// app/[locale]/about/page.tsx
import Container from "@/components/Container"
import type { Locale } from "@/lib/cv"
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
      education: "Educación",
      skills: "Habilidades",
    },
    en: {
      about: "About",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
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
        <section className="mb-10">
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
                    {e.start} — {e.end}
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

        {/* Education */}
        <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">{t.education}</h2>
        <ul className="grid gap-2 text-sm">
            {data.education.map((ed, i) => (
            <li
                key={i}
                className="rounded-2xl border p-4 flex items-center justify-between"
            >
                <div>
                {ed.degree} —{" "}
                {"url" in ed && ed.url ? (
                    <a
                    href={ed.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-2 hover:underline"
                    >
                    {ed.school}
                    </a>
                ) : (
                    ed.school
                )}
                </div>
                <span className="text-xs text-gray-500">{ed.year}</span>
            </li>
            ))}
        </ul>
        </section>


        {/* Skills */}
        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-3">{t.skills}</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((s, i) => (
              <span key={i} className="rounded-full border px-2 py-1 text-xs">
                {s}
              </span>
            ))}
          </div>
        </section>
      </div>
    </Container>
  )
}
