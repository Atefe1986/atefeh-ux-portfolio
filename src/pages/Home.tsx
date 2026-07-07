import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import RotatingBadge from '../components/RotatingBadge'
import { projects } from '../data/projects'
import { site } from '../data/site'
import usePageTitle from '../hooks/usePageTitle'

export default function Home() {
  usePageTitle(`${site.name} — ${site.role}`)

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
          className="mt-14 xl:absolute xl:top-1/2 xl:right-10 xl:mt-0 xl:-translate-y-1/2"
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
        <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
          <Reveal delay={0.1}>
            <div className="flex aspect-[4/3] flex-col items-start justify-end rounded-xl border border-dashed border-line bg-surface/40 p-8">
              <p className="text-xs font-semibold tracking-[0.18em] text-ink-faint uppercase">
                Coming soon
              </p>
              <h3 className="mt-2 font-display text-2xl font-medium tracking-tight text-ink-soft">
                A standout project showcasing creativity
              </h3>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section className="border-y border-line bg-surface/50">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[2fr_3fr]">
          <Reveal>
            <SectionHeading id="about" kicker="About Me" title="Design with an analytical mind" />
            <img
              src={site.about.portrait.src}
              alt={site.about.portrait.alt}
              loading="lazy"
              className="w-full max-w-sm rounded-xl"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed text-ink-soft">
              {site.about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <Link
              to="/resume"
              className="mt-8 inline-block rounded-full border border-ink px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              View my resume
            </Link>
          </Reveal>
        </div>
      </section>

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
