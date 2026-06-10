import { Link } from 'react-router-dom'
import { site } from '../data/site'
import usePageTitle from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle(`Page not found — ${site.name}`)

  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start px-6 py-40">
      <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">404</p>
      <h1 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
      >
        Back to home
      </Link>
    </section>
  )
}
