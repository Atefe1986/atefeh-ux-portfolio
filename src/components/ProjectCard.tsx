import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <div className="overflow-hidden rounded-xl bg-surface">
        <img
          src={project.hero.src}
          alt={project.hero.alt}
          loading="lazy"
          className="aspect-video w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-5">
        <p className="text-xs font-semibold tracking-[0.18em] text-ink-faint uppercase">
          {project.category}
        </p>
        <h3 className="mt-2 font-display text-2xl font-medium tracking-tight group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.summary}</p>
        <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          View case study
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </p>
      </div>
    </Link>
  )
}
