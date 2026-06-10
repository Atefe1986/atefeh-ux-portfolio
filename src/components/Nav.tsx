import { useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../data/site'

const links = [
  { label: 'Work', to: '/#work' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md print:hidden">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="font-display text-lg font-semibold tracking-tight hover:text-accent"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink-soft hover:bg-surface sm:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>

        <ul className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className="text-sm text-ink-soft transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/resume"
              className="rounded-full border border-ink px-4 py-1.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>

      {open && (
        <ul className="border-t border-line px-6 py-4 sm:hidden">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className="block py-2.5 text-ink-soft hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/resume"
              className="block py-2.5 text-ink-soft hover:text-accent"
              onClick={() => setOpen(false)}
            >
              Resume
            </Link>
          </li>
        </ul>
      )}
    </header>
  )
}
