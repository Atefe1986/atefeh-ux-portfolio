import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import FeaturedProjectCard from '../components/FeaturedProjectCard'
import RotatingBadge from '../components/RotatingBadge'
import { projects } from '../data/projects'
import { site } from '../data/site'
import usePageTitle from '../hooks/usePageTitle'

const featuredProjects = projects.filter((project) => project.featured)
const mainProjects = projects.filter((project) => !project.featured && !project.more)
const moreProjects = projects.filter((project) => !project.featured && project.more)

export default function Home() {
  usePageTitle(`${site.name} — ${site.role}`)
  const [showMore, setShowMore] = useState(false)

  return (
    <>
      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-sm font-medium tracking-[0.18em] text-accent uppercase"
        >
          {site.role} · {site.location}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl font-display text-5xl font-medium tracking-tight text-balance sm:text-7xl"
        >
          {site.hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft"
        >
          {site.hero.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
          >
            Get in touch
          </a>
          <a
            href="#work"
            className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink-soft transition-colors hover:border-accent hover:text-accent"
          >
            See my work
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-14 flex justify-center xl:absolute xl:top-1/2 xl:right-10 xl:mt-0 xl:block xl:-translate-y-1/2"
        >
          <RotatingBadge className="h-40 w-40 xl:h-52 xl:w-52" />
        </motion.div>
      </section>

      {/* Skill pillars */}
      <section className="border-y border-line bg-surface/50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-3">
          {site.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.1}>
              <p className="font-display text-4xl font-light text-accent/70 select-none" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h2 className="mt-3 font-display text-xl font-medium tracking-tight">
                {pillar.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{pillar.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Work */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading id="work" kicker="Selected Work" title="Case studies & projects" />
        </Reveal>
        {featuredProjects.map((project) => (
          <Reveal key={project.slug} className="mb-20">
            <FeaturedProjectCard project={project} />
          </Reveal>
        ))}
        <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2">
          {mainProjects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        {moreProjects.length > 0 && (
          <>
            {showMore && (
              <div id="more-projects" className="mt-16 grid gap-x-10 gap-y-16 sm:grid-cols-2">
                {moreProjects.map((project, i) => (
                  <Reveal key={project.slug} delay={(i % 2) * 0.1}>
                    <ProjectCard project={project} />
                  </Reveal>
                ))}
              </div>
            )}
            <div className="mt-16 flex justify-center">
              <button
                type="button"
                aria-expanded={showMore}
                aria-controls="more-projects"
                onClick={() => setShowMore((open) => !open)}
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink-soft transition-colors hover:border-accent hover:text-accent"
              >
                {showMore ? 'Show fewer projects' : `Show more projects (${moreProjects.length})`}
                <span
                  aria-hidden="true"
                  className={`transition-transform ${showMore ? 'rotate-180' : ''}`}
                >
                  ↓
                </span>
              </button>
            </div>
          </>
        )}
      </section>

      <hr className="border-line" />

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <Reveal>
          <SectionHeading id="contact" kicker="Contact" title="Let’s build something user-centered" />
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
            Whether you have a project in mind or just want to talk design, my inbox is always
            open.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              {site.email}
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink-soft transition-colors hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink-soft transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>
      </section>
    </>
  )
}
