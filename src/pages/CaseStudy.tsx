import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { getProject, projects } from '../data/projects'
import { site } from '../data/site'
import usePageTitle from '../hooks/usePageTitle'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined

  usePageTitle(project ? `${project.title} — ${site.name}` : site.name)

  if (!project) {
    return <Navigate to="/404" replace />
  }

  const index = projects.indexOf(project)
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  return (
    <article>
      {/* Case study hero */}
      <header className="mx-auto max-w-6xl px-6 pt-20 pb-14 sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            {project.title} · {project.category}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium tracking-tight text-balance sm:text-6xl">
            {project.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {project.subtitle}
          </p>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              View live demo ↗
            </a>
          )}
        </motion.div>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mx-auto max-w-6xl px-6"
      >
        <img
          src={project.hero.src}
          alt={project.hero.alt}
          className="w-full rounded-xl bg-surface"
        />
      </motion.div>

      {/* Narrative sections */}
      <div className="mx-auto max-w-6xl px-6">
        {project.sections.map((section) => (
          <Reveal key={section.heading} className="border-b border-line py-20 last:border-b-0">
            <section className="grid gap-10 lg:grid-cols-[1fr_2fr]">
              <div>
                {section.kicker && (
                  <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                    {section.kicker}
                  </p>
                )}
                <h2 className="mt-3 font-display text-2xl font-medium tracking-tight text-balance sm:text-3xl">
                  {section.heading}
                </h2>
              </div>
              <div>
                {section.body?.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className="mb-5 max-w-prose leading-relaxed text-ink-soft"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mb-5 max-w-prose space-y-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet.slice(0, 32)} className="flex gap-3 leading-relaxed text-ink-soft">
                        <span aria-hidden="true" className="mt-px text-accent">
                          —
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
                {section.quote && (
                  <blockquote className="my-8 border-l-2 border-accent pl-6 font-display text-2xl font-medium tracking-tight text-balance italic">
                    “{section.quote}”
                  </blockquote>
                )}
                {section.outro?.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className="mb-5 max-w-prose leading-relaxed text-ink-soft"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.images && (
                  <div className="mt-8 space-y-8">
                    {section.images.map((image) => (
                      <img
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="w-full rounded-xl bg-surface"
                      />
                    ))}
                  </div>
                )}
              </div>
            </section>
          </Reveal>
        ))}
      </div>

      {/* Prev / next navigation */}
      <nav aria-label="More projects" className="border-t border-line bg-surface/50">
        <div className="mx-auto grid max-w-6xl sm:grid-cols-2">
          <Link
            to={`/work/${prev.slug}`}
            className="group border-b border-line px-6 py-10 sm:border-r sm:border-b-0"
          >
            <p className="text-xs font-semibold tracking-[0.18em] text-ink-faint uppercase">
              ← Previous
            </p>
            <p className="mt-2 font-display text-2xl font-medium tracking-tight group-hover:text-accent">
              {prev.title}
            </p>
          </Link>
          <Link to={`/work/${next.slug}`} className="group px-6 py-10 sm:text-right">
            <p className="text-xs font-semibold tracking-[0.18em] text-ink-faint uppercase">
              Next →
            </p>
            <p className="mt-2 font-display text-2xl font-medium tracking-tight group-hover:text-accent">
              {next.title}
            </p>
          </Link>
        </div>
      </nav>
    </article>
  )
}
