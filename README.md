# Atefeh Etemadipour — Portfolio

Portfolio of Atefeh Etemadipour, UX/UI designer based in Stockholm. Re-implemented in React + TypeScript from the original Webflow site (https://my-portfolio-d76431.webflow.io/).

## Stack

- [Vite](https://vite.dev/) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) — design tokens in `src/index.css` (`@theme`)
- [React Router 7](https://reactrouter.com/) — `/` and `/work/:slug`
- [Framer Motion](https://motion.dev/) — scroll-reveal and hero animations

## Structure

- `src/data/site.ts` — name, bio, contact links, hero copy, skill pillars
- `src/data/projects.ts` — all case-study content (Kiddolink, Luminova, Kazify) as typed data; pages render from this, no copy in JSX
- `src/pages/CaseStudy.tsx` — generic case-study renderer driven by `projects.ts`
- `public/images/` — assets downloaded from the original Webflow CDN

## Develop

```sh
npm install
npm run dev      # dev server on :5173
npm run build    # type-check + production build
npm run lint
npm run pdf      # regenerate public/atefeh-etemadipour-resume.pdf from the /resume page
```

The resume at `/resume` is rendered from `src/data/resume.ts`. After editing resume content, run `npm run pdf` to regenerate the downloadable PDF (Puppeteer prints the built page to A4).

To add or edit a project, change `src/data/projects.ts` — the routes, cards, and prev/next navigation follow automatically.
