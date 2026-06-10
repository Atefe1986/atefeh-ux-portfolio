// Resolves a public-folder path against Vite's base URL so assets load
// when the site is served from a subpath (e.g. GitHub Pages project sites).
export function asset(path: string): string {
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
