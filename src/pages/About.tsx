import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { site } from '../data/site'
import usePageTitle from '../hooks/usePageTitle'

const { about } = site

export default function About() {
  usePageTitle(`About — ${site.name}`)

  return (
    <article>
      {/* Intro */}
      <header className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              About me
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium tracking-tight text-balance sm:text-6xl">
              {about.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{about.intro}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${site.email}`}
                className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
              >
                Get in touch
              </a>
              <Link
                to="/resume"
                className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink-soft transition-colors hover:border-accent hover:text-accent"
              >
                View my resume
              </Link>
            </div>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            src={about.portrait.src}
            alt={about.portrait.alt}
            className="mx-auto w-full max-w-sm rounded-2xl lg:mr-0"
          />
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-4"
        >
          {about.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs font-semibold tracking-[0.18em] text-ink-faint uppercase">
                {fact.label}
              </dt>
              <dd className="mt-2 text-sm leading-snug font-medium">{fact.value}</dd>
            </div>
          ))}
        </motion.dl>
      </header>

      {/* Story */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="border-t border-line">
          {about.story.map((section) => (
            <Reveal key={section.heading} className="border-b border-line py-20 last:border-b-0">
              <section className="grid gap-10 lg:grid-cols-[1fr_2fr]">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                    {section.kicker}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-medium tracking-tight text-balance sm:text-3xl">
                    {section.heading}
                  </h2>
                </div>
                <div className="space-y-5">
                  {section.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)} className="text-base leading-relaxed text-ink-soft">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mx-auto max-w-6xl px-6 pb-8">
        <Reveal>
          <section className="rounded-2xl border border-line bg-surface/70 p-8 sm:p-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Skills &amp; expertise
            </p>
            <h2 className="mt-3 font-display text-2xl font-medium tracking-tight text-balance sm:text-3xl">
              What I bring to a team
            </h2>
            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              {about.skillGroups.map((group) => (
                <div key={group.group}>
                  <h3 className="text-sm font-semibold">{group.group}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-line bg-paper px-4 py-1.5 text-xs font-medium tracking-wide text-ink-soft"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      </div>

      {/* Closing call to action */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Let’s talk
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            Looking for a designer who can also ship?
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink-soft transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
            <Link
              to="/#work"
              className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink-soft transition-colors hover:border-accent hover:text-accent"
            >
              See my work
            </Link>
          </div>
        </Reveal>
      </section>
    </article>
  )
}
