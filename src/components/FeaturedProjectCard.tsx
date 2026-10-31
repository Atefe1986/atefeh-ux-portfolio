import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

export default function FeaturedProjectCard({ project }: { project: Project }) {
  const cover = project.thumbnail ?? project.hero
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group grid items-center gap-8 rounded-2xl border border-line bg-surface/60 p-4 transition-colors hover:border-accent/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:p-6 lg:grid-cols-[3fr_2fr] lg:gap-12"
    >
      <div className="overflow-hidden rounded-xl bg-surface">
        <img
          src={cover.src}
          alt={cover.alt}
          loading="lazy"
          className="w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="px-2 pb-4 lg:px-0 lg:pb-0">
        <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-paper px-3 py-1 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
          Featured
        </p>
        <p className="mt-5 text-xs font-semibold tracking-[0.18em] text-ink-faint uppercase">
          {project.category}
        </p>
        <h3 className="mt-2 font-display text-3xl font-medium tracking-tight group-hover:text-accent sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-2 font-display text-lg text-ink-soft">{project.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">{project.summary}</p>
        {project.tags && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium tracking-wide text-ink-soft"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
        <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          Read the full story
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </p>
      </div>
    </Link>
  )
}
