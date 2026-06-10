import { motion } from 'framer-motion'
import { resume } from '../data/resume'
import { site } from '../data/site'
import usePageTitle from '../hooks/usePageTitle'

function SideHeading({ children }: { children: string }) {
  return (
    <h2 className="text-xs font-semibold tracking-[0.2em] text-accent uppercase print:break-after-avoid print:text-[10px]">
      {children}
    </h2>
  )
}

export default function Resume() {
  usePageTitle(`Resume — ${resume.name}`)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-5xl px-6 py-16 sm:py-24 print:max-w-none print:px-0 print:py-0"
    >
      {/* Header */}
      <header className="border-b border-line pb-10 print:pb-4">
        <h1 className="font-display text-4xl font-medium tracking-tight sm:text-5xl print:text-3xl">
          {resume.name}
        </h1>
        <p className="mt-3 text-lg text-ink-soft print:mt-1 print:text-sm">{resume.headline}</p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft print:mt-3 print:gap-x-4 print:text-xs">
          <li>{resume.contact.location}</li>
          <li>
            <a href={`tel:${resume.contact.phone.replace(/\s/g, '')}`} className="hover:text-accent">
              {resume.contact.phone}
            </a>
          </li>
          <li>
            <a href={`mailto:${resume.contact.email}`} className="hover:text-accent">
              {resume.contact.email}
            </a>
          </li>
          <li>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-accent">
              GitHub
            </a>
          </li>
        </ul>
        <div className="mt-6 flex gap-3 print:hidden">
          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
          >
            Print / Save as PDF
          </button>
          <a
            href={site.resumePdf}
            download="atefeh-etemadipour-resume.pdf"
            className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:border-accent hover:text-accent"
          >
            Download PDF
          </a>
        </div>
      </header>

      <div className="mt-12 grid gap-14 lg:grid-cols-[1fr_2fr] print:mt-6 print:grid-cols-[1fr_2fr] print:gap-6">
        {/* Sidebar */}
        <aside className="space-y-10 print:space-y-5">
          <section>
            <SideHeading>Skills</SideHeading>
            <div className="mt-4 space-y-6 print:mt-2 print:space-y-3">
              {resume.skills.map((group) => (
                <div key={group.group} className="print:break-inside-avoid">
                  <h3 className="text-sm font-semibold print:text-xs">{group.group}</h3>
                  <ul className="mt-2 space-y-1.5 print:mt-1 print:space-y-0.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-relaxed text-ink-soft print:text-xs print:leading-snug"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SideHeading>Certifications</SideHeading>
            <ul className="mt-4 space-y-2.5 print:mt-2 print:space-y-1">
              {resume.certifications.map((cert) => (
                <li
                  key={cert}
                  className="text-sm leading-relaxed text-ink-soft print:text-xs print:leading-snug"
                >
                  {cert}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs leading-relaxed text-ink-faint italic print:mt-1.5 print:text-[10px] print:leading-snug">
              {resume.certificationsNote}
            </p>
          </section>

          <section>
            <SideHeading>Languages</SideHeading>
            <ul className="mt-4 space-y-2 print:mt-2 print:space-y-1">
              {resume.languages.map((lang) => (
                <li key={lang.language} className="text-sm text-ink-soft print:text-xs">
                  <span className="font-medium text-ink">{lang.language}</span> — {lang.level}
                </li>
              ))}
            </ul>
          </section>
        </aside>

        {/* Main column */}
        <div className="space-y-12 print:space-y-5">
          <section>
            <SideHeading>Profile</SideHeading>
            <p className="mt-4 leading-relaxed text-ink-soft print:mt-2 print:text-xs print:leading-snug">
              {resume.summary}
            </p>
          </section>

          <section>
            <SideHeading>Experience</SideHeading>
            <ol className="mt-4 space-y-7 print:mt-2 print:space-y-3">
              {resume.experience.map((job) => (
                <li key={`${job.company}-${job.role}`} className="print:break-inside-avoid">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-display text-xl font-medium tracking-tight print:text-base">
                      {job.role}
                    </h3>
                    <p className="text-sm whitespace-nowrap text-ink-faint print:text-xs">
                      {job.period}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-ink-soft print:mt-0.5 print:text-xs">
                    {job.company} · {job.location}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <SideHeading>Education</SideHeading>
            <ol className="mt-4 space-y-7 print:mt-2 print:space-y-3">
              {resume.education.map((entry) => (
                <li key={entry.degree} className="print:break-inside-avoid">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-display text-xl font-medium tracking-tight print:text-base">
                      {entry.degree}
                    </h3>
                    <p className="text-sm whitespace-nowrap text-ink-faint print:text-xs">
                      {entry.period}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-ink-soft print:mt-0.5 print:text-xs">
                    {entry.school}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft print:mt-1 print:text-xs print:leading-snug">
                    {entry.description}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <SideHeading>Projects</SideHeading>
            <ol className="mt-4 space-y-7 print:mt-2 print:space-y-3">
              {resume.projects.map((project) => (
                <li key={project.name} className="print:break-inside-avoid">
                  <h3 className="font-display text-xl font-medium tracking-tight print:text-base">
                    {project.name}
                    <span className="ml-2 align-middle font-sans text-xs font-semibold tracking-[0.12em] text-ink-faint uppercase print:text-[9px]">
                      {project.context}
                    </span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft print:mt-1 print:text-xs print:leading-snug">
                    {project.description}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1.5 inline-block text-sm font-medium text-accent hover:text-accent-deep print:mt-0.5 print:text-xs"
                    >
                      {project.link.replace('https://', '').replace(/\/$/, '')} ↗
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </motion.div>
  )
}
