import { asset } from '../lib/asset'

export interface ProjectImage {
  src: string
  alt: string
}

export interface ProjectSection {
  kicker?: string
  heading: string
  body?: string[]
  bullets?: string[]
  quote?: string
  outro?: string[]
  images?: ProjectImage[]
}

export interface Project {
  slug: string
  title: string
  tagline: string
  subtitle: string
  category: string
  summary: string
  hero: ProjectImage
  liveDemo?: string
  sections: ProjectSection[]
}

export const projects: Project[] = [
  {
    slug: 'kiddolink',
    title: 'Kiddolink',
    tagline: 'All-in-One App for Parent–Preschool Communication',
    subtitle:
      'One clear place for parents to stay updated — no more scattered tools or clunky UIs.',
    category: 'Mobile App · UX Case Study',
    summary:
      'A detailed case study of an app that centralizes parent–preschool communication, from research and user segmentation to tested, iterated high-fidelity screens.',
    hero: { src: asset('/images/kiddolink-hero.png'), alt: 'Kiddolink app screens overview' },
    sections: [
      {
        kicker: 'Overview',
        heading: 'An iterative, user-centered process',
        body: [
          'The UX process for Kiddolink followed an iterative, user-centered approach structured around agile sprints. Since the app was designed for both preschool staff and parents, it was important to consider their distinct communication behaviours and pain points.',
        ],
        images: [
          { src: asset('/images/kiddolink-ux-process.png'), alt: 'Kiddolink UX process overview' },
        ],
      },
      {
        kicker: 'Research',
        heading: 'Research goals',
        body: [
          'To understand how to improve communication between preschool staff and parents, we focused our research on the following questions:',
        ],
        bullets: [
          'How do parents currently receive updates about their child’s day?',
          'What pain points exist in current communication methods?',
          'What makes parents feel informed, connected, and emotionally supported?',
          'How do different behaviour types (digital vs. communicative) affect their expectations?',
        ],
        quote: 'Fragmented tools and poor UI frustrate preschool parents',
      },
      {
        kicker: 'Research',
        heading: 'Uncovering insights from parent interviews',
        body: [
          'We conducted in-depth interviews with seven parents and two staff to uncover everyday communication challenges in preschool settings. These insights became the foundation for defining user types and shaping the Kiddolink app’s core features.',
          'This overview table summarizes all our interview participants — their roles, motivations, behaviours, types, wishes and challenges. We used it to identify needs, categorize user types and shape our solution. It also highlights the variation in users’ technical skills, daily routines and preferences.',
        ],
        images: [
          {
            src: asset('/images/kiddolink-interview-table.png'),
            alt: 'Overview table of interview participants, their roles, motivations and challenges',
          },
        ],
      },
      {
        kicker: 'Insights',
        heading: 'User insights that shaped the MVP',
        bullets: [
          'A need for centralized and clear communication',
          'Different user behaviours require tailored solutions',
          'Poor interface design leads to frustration and reduces trust',
        ],
        images: [
          {
            src: asset('/images/kiddolink-user-insights.png'),
            alt: 'Key user insights that shaped the Kiddolink MVP',
          },
        ],
      },
      {
        kicker: 'Design',
        heading: 'From idea to interface',
        body: [
          'The Kiddolink prototype evolved from wireframes designed to reflect the needs of busy and communicative parents. Each screen focused on intuitive navigation, visual hierarchy, and responsive design.',
        ],
        images: [
          { src: asset('/images/kiddolink-wireframes-1.png'), alt: 'Kiddolink wireframes — first set' },
          { src: asset('/images/kiddolink-wireframes-2.png'), alt: 'Kiddolink wireframes — second set' },
        ],
      },
      {
        kicker: 'Design',
        heading: 'High-fidelity UI screens',
        body: [
          'These screens reflect the final visual style, branding, and responsive layout of the Kiddolink MVP.',
        ],
        images: [
          {
            src: asset('/images/kiddolink-hifi-screens.png'),
            alt: 'Kiddolink high-fidelity UI screens',
          },
        ],
      },
      {
        kicker: 'Validation',
        heading: 'Validating with users',
        body: [
          'We tested the prototype with both behavioural user types — “digital check-in” and “communicative” — using in-person guerrilla testing and remote sessions via Useberry. Tasks included checking the daily plan, sending messages, and reporting absence.',
          'Through observation and screen recording, we identified areas of friction in navigation, communication clarity, and flow logic. The feedback directly informed design iterations.',
        ],
        images: [
          { src: asset('/images/kiddolink-testing.png'), alt: 'Usability testing sessions for Kiddolink' },
        ],
      },
      {
        kicker: 'Iteration',
        heading: 'From testing to continuous improvement',
        body: ['Here are the key changes we made after testing:'],
        bullets: [
          '“Full Day” vs. “Custom” was unclear — so we clarified layout and labels',
          'Child 1/2 buttons were replaced with checkboxes, which users understood instantly',
          'Blue buttons improved accessibility and readability — so we kept them',
          'The calendar was slightly adjusted to better align with the checkbox layout',
          'Absent status is now marked in red to stand out during quick scans',
          'News cards are now fully clickable (not just the text) — based on click data and heatmaps',
        ],
        outro: [
          'By iterating quickly based on user feedback, we were able to improve clarity, accessibility, and the overall experience — a crucial step in our UX process.',
        ],
        images: [
          {
            src: asset('/images/kiddolink-test-iterations.png'),
            alt: 'Before-and-after design iterations from usability testing',
          },
        ],
      },
    ],
  },
  {
    slug: 'luminova',
    title: 'Luminova',
    tagline: 'Smarter Shopping for Modern Lighting',
    subtitle:
      'Filter, compare, and visualize products — making lighting decisions effortless.',
    category: 'E-Commerce · UX Case Study',
    summary:
      'A responsive e-commerce platform for modern lighting, designed around effortless product discovery, side-by-side comparison, and in-home visualization.',
    hero: { src: asset('/images/luminova-hero.png'), alt: 'Luminova e-commerce website screens' },
    sections: [
      {
        kicker: 'Overview',
        heading: 'A user-centered approach to e-commerce',
        body: [
          'The UX process for Luminova focused on a user-centered, iterative approach aimed at modern homeowners and interior designers. Since the platform was built as a responsive e-commerce website for lighting and chandeliers, the process emphasized efficient product discovery, comparison, and visualization to address users’ key frustrations and needs.',
        ],
        images: [
          { src: asset('/images/luminova-ux-process.png'), alt: 'Luminova UX process overview' },
        ],
      },
      {
        kicker: 'Research',
        heading: 'Research goals',
        body: [
          'To understand how to improve the online shopping experience for modern lighting and chandeliers, we focused our research on the following questions:',
        ],
        bullets: [
          'How do users currently search for lighting products online?',
          'What frustrations do they face when comparing different options?',
          'What factors (style, material, price, energy efficiency) are most important in their decision-making?',
          'How do users want to visualize lighting products in their own environment?',
          'What role does aesthetics vs. functionality play in their shopping behavior?',
        ],
        quote: 'Difficult discovery and limited comparison frustrate lighting shoppers',
      },
      {
        kicker: 'Research',
        heading: 'Learning from designers and homeowners',
        body: [
          'We conducted user interviews with interior designers and homeowners to uncover challenges in buying modern lighting online. These insights became the foundation for defining user needs and shaping Luminova’s core features.',
          'This overview summarizes participants’ roles, motivations, preferences, and frustrations. We used it to identify pain points, prioritize user needs, and guide the design of filtering, comparison, and showroom solutions.',
        ],
        images: [
          {
            src: asset('/images/luminova-interview-overview.png'),
            alt: 'Overview of interview participants for Luminova research',
          },
        ],
      },
      {
        kicker: 'Insights',
        heading: 'Key insights from the interviews',
        bullets: [
          'A need for better product discovery',
          'Difficulty comparing similar products',
          'Visualization is essential',
          'Time efficiency matters',
        ],
      },
      {
        kicker: 'Design',
        heading: 'From user needs to design solutions',
        body: [
          'We translated user needs into concrete design solutions. The following wireframes illustrate how we approached filtering, comparison, and visualization features to simplify the shopping experience for modern lighting and chandeliers.',
          'These solutions directly addressed our users’ frustrations. By implementing filtering, comparison, and visualization, Luminova streamlined the shopping process, reduced decision-making time, and provided a more engaging and trustworthy shopping experience.',
        ],
        images: [
          { src: asset('/images/luminova-wireframe-1.png'), alt: 'Luminova wireframe — filtering' },
          { src: asset('/images/luminova-wireframe-2.png'), alt: 'Luminova wireframe — comparison' },
          { src: asset('/images/luminova-wireframe-3.png'), alt: 'Luminova wireframe — visualization' },
        ],
      },
      {
        kicker: 'Design',
        heading: 'From idea to interface',
        body: [
          'Each wireframe evolved into a validated design — shaped by user needs for filtering, comparison, and visualization. The final interface demonstrates how insights were translated into clear, modern, and functional solutions for lighting e-commerce.',
          'The design system emphasizes minimalism and modern aesthetics through a balanced colour palette and clear typography, ensuring consistency across all screens.',
        ],
        images: [
          {
            src: asset('/images/luminova-design-solutions.png'),
            alt: 'Luminova design solutions evolved from wireframes',
          },
        ],
      },
      {
        kicker: 'Design',
        heading: 'High-fidelity UI screens',
        body: [
          'These screens showcase the final visual design of Luminova — combining modern aesthetics, a minimalist design system, and responsive layouts. The filtering, comparison, and visualization features are fully integrated, creating a seamless e-commerce experience for lighting and chandeliers.',
        ],
        images: [
          { src: asset('/images/luminova-hifi-1.png'), alt: 'Luminova high-fidelity screens — set one' },
          { src: asset('/images/luminova-hifi-2.png'), alt: 'Luminova high-fidelity screens — set two' },
          { src: asset('/images/luminova-hifi-3.png'), alt: 'Luminova high-fidelity screens — set three' },
        ],
      },
    ],
  },
  {
    slug: 'kazify',
    title: 'Kazify',
    tagline: 'Landing Page Design & Development',
    subtitle: 'A gig-economy platform for the Kenyan market.',
    category: 'Landing Page · Design & Development',
    summary:
      'Design and development of a landing page for a Kenyan gig-economy platform, focused on simplicity, trust, and accessibility.',
    hero: { src: asset('/images/kazify-hero.png'), alt: 'Kazify landing page design' },
    liveDemo: 'https://kazify-web.pages.dev',
    sections: [
      {
        kicker: 'Overview',
        heading: 'Designing for simplicity and trust',
        body: [
          'Kazify is a gig-economy platform for the Kenyan market. I designed and developed a landing page focused on simplicity, trust, and accessibility — making it straightforward for users to understand the service and feel confident getting started.',
        ],
        images: [
          { src: asset('/images/kazify-screens-2.png'), alt: 'Kazify landing page sections' },
          { src: asset('/images/kazify-screens-3.png'), alt: 'Kazify landing page detail views' },
        ],
      },
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
