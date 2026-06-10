import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-line print:hidden">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={site.logo.src} alt={site.logo.alt} className="h-8 w-8" />
            <p className="font-display text-lg font-semibold">{site.name}</p>
          </div>
          <p className="mt-1 text-sm text-ink-faint">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a href={`mailto:${site.email}`} className="text-ink-soft hover:text-accent">
              Email
            </a>
          </li>
          <li>
            <a href={site.github} target="_blank" rel="noreferrer" className="text-ink-soft hover:text-accent">
              GitHub
            </a>
          </li>
          <li>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="text-ink-soft hover:text-accent">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
