import { asset } from '../lib/asset'

export interface ProjectImage {
  src: string
  alt: string
}

export interface ProjectMetric {
  value: string
  label: string
}

export interface TimelineStep {
  phase: string
  detail: string
}

export interface TokenFlowRow {
  primitive: string
  hex: string
  semantic: string
  usage: string
}

export interface ProjectFact {
  label: string
  value: string
}

export interface ProjectSection {
  kicker?: string
  heading: string
  body?: string[]
  bullets?: string[]
  quote?: string
  outro?: string[]
  metrics?: ProjectMetric[]
  timeline?: TimelineStep[]
  tokenFlow?: TokenFlowRow[]
  images?: ProjectImage[]
  imageColumns?: 2 | 3
  imageFrame?: boolean
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
  facts?: ProjectFact[]
  sections: ProjectSection[]
}

export const projects: Project[] = [
  {
    slug: 'techlove',
    title: 'Techlove',
    tagline: 'A Design System That Unified a Digital Agency',
    subtitle:
      'What started as a website refresh became scalable design infrastructure — one system now powers Techlove’s website, UI components, and social media.',
    category: 'Website Redesign & Design System',
    summary:
      'A real-world design system for Techlove.se — primitive and semantic tokens, a 20+ component library, a redesigned website, and unified social templates across three platforms.',
    hero: {
      src: asset('/images/techlove-hero.jpg'),
      alt: 'Techlove.se homepage shown on laptop and phone',
    },
    liveDemo: 'https://techlove.se',
    facts: [
      { label: 'Role', value: 'UX/UI Design Intern' },
      { label: 'Team', value: '3 designers · 2 developers' },
      { label: 'Timeline', value: '12 weeks' },
      { label: 'Deliverables', value: 'Design system · Website · Social templates' },
    ],
    sections: [
      {
        kicker: 'Overview',
        heading: 'One system instead of scattered design',
        body: [
          'Techlove is a Swedish digital agency that builds apps and digital products for startups and scaleups. The assignment began as a website refresh — but the real problem ran deeper: there was no shared design language. Every page, post, and component was designed from scratch.',
          'Over twelve weeks, our team designed and implemented a scalable design system that now powers the website, the social media presence, and the developer workflow.',
        ],
      },
      {
        kicker: 'Challenge',
        heading: 'Same brand, a different face everywhere',
        bullets: [
          'Colors and typography varied from page to page — no single source of truth',
          'Every social media post was designed one-off, costing hours of manual work',
          'Developers rebuilt similar UI again and again with hard-coded values',
          'Updating the brand meant touching every screen and template by hand',
        ],
        quote: 'The real problem wasn’t the website — it was the missing system behind it',
      },
      {
        kicker: 'My Role',
        heading: 'An intern with an owner’s mindset',
        body: [
          'As a UX/UI design intern in a three-person design team, I worked alongside our design lead and a fellow intern, collaborating directly with two developers.',
        ],
        bullets: [
          'Co-designed the token architecture — primitive and semantic layers',
          'Built reusable components for the shared Figma library',
          'Designed social media templates for three platforms',
          'Redesigned website screens on top of the new system',
        ],
      },
      {
        kicker: 'Business Goals',
        heading: 'Design as long-term infrastructure',
        bullets: [
          'Cut production time for new pages and social posts',
          'Keep the brand consistent across every digital touchpoint',
          'Let non-designers produce on-brand assets from templates',
          'Make design-to-development handoff faster and unambiguous',
        ],
      },
      {
        kicker: 'Process',
        heading: 'Twelve weeks from audit to adoption',
        body: [
          'Before building anything new, we catalogued every color, text style, and repeating UI pattern across the website and social channels — with AI tooling clustering recurring patterns into component candidates, so the design judgment could stay human.',
          'The audit made the problem measurable and became the business case for a system instead of another one-off redesign.',
        ],
        timeline: [
          {
            phase: 'Design audit',
            detail:
              'Inventory of every color, text style, and UI pattern across the website and social channels',
          },
          {
            phase: 'AI-assisted extraction',
            detail: 'Clustering recurring patterns into component candidates',
          },
          {
            phase: 'Token architecture',
            detail: 'Primitive and semantic color layers',
          },
          {
            phase: 'Component library',
            detail: '20+ reusable components built as a shared Figma library',
          },
          { phase: 'Website redesign', detail: '10+ screens rebuilt on the new system' },
          {
            phase: 'Social system & handoff',
            detail: '15+ templates across three platforms, plus developer documentation',
          },
        ],
      },
      {
        kicker: 'Design System',
        heading: 'Two token layers, one source of truth',
        body: [
          'The system is built in two token layers. Primitive tokens hold the raw values — color steps like Blush 500 or Ink 800, plus type and spacing scales. Semantic tokens map each primitive to a role: button background, heading text, footer surface.',
          'Components consume only semantic tokens, so changing one primitive value updates every screen — a rebrand becomes a token update, not a redesign project. 20+ components are documented with variants and usage rules in a shared Figma library that developers map one-to-one in code.',
        ],
        metrics: [
          { value: '2', label: 'Token layers' },
          { value: '4', label: 'Primitive color families' },
          { value: '18', label: 'Semantic tokens' },
          { value: '20+', label: 'Reusable components' },
        ],
        tokenFlow: [
          {
            primitive: 'Blush 500',
            hex: '#DC889F',
            semantic: 'color/action/primary/default',
            usage: 'Primary button background',
          },
          {
            primitive: 'Ink 800',
            hex: '#191C1F',
            semantic: 'color/text/heading',
            usage: 'Headings and gradient text',
          },
          {
            primitive: 'Abyss 800',
            hex: '#192533',
            semantic: 'color/surface/dark',
            usage: 'Footer and dark sections',
          },
        ],
        imageColumns: 2,
        images: [
          {
            src: asset('/images/techlove-ds-typography.jpg'),
            alt: 'Typography scale — headers, eyebrow label, and body styles',
          },
          {
            src: asset('/images/techlove-ds-buttons.jpg'),
            alt: 'Button variants in three sizes and the spacing scale',
          },
          {
            src: asset('/images/techlove-ds-components.jpg'),
            alt: 'Navbar, cards, badges, and footer components',
          },
          {
            src: asset('/images/techlove-ds-colors.jpg'),
            alt: 'Primitive color scales — Blush and Abyss families',
          },
        ],
      },
      {
        kicker: 'Website',
        heading: '10+ screens rebuilt on the system',
        body: [
          'The redesigned website was the first proof of the system — service, about, article, and insights pages all composed entirely from library components and semantic tokens.',
        ],
        imageColumns: 2,
        imageFrame: true,
        images: [
          {
            src: asset('/images/techlove-page-appdev.jpg'),
            alt: 'Techlove app development service page',
          },
          { src: asset('/images/techlove-page-about.jpg'), alt: 'Techlove about us page' },
          { src: asset('/images/techlove-page-article.jpg'), alt: 'Techlove article page' },
          { src: asset('/images/techlove-page-blog.jpg'), alt: 'Techlove insights and blog page' },
        ],
      },
      {
        kicker: 'Social Media',
        heading: 'A design system for content, too',
        body: [
          'The same tokens and components extend to social media: 15+ templates across Instagram, LinkedIn, and YouTube — every aspect ratio a campaign needs, with light and dark variants built from the same semantic tokens.',
          'The system even covers video: branded frames and end screens for Morgonsoffan, Techlove’s weekly live tech talk. The team now produces on-brand content in minutes instead of starting from a blank canvas.',
        ],
        imageColumns: 3,
        images: [
          {
            src: asset('/images/techlove-social-story.jpg'),
            alt: 'Story format post — dark template',
          },
          {
            src: asset('/images/techlove-social-portrait-dark.jpg'),
            alt: 'Portrait post — dark template',
          },
          {
            src: asset('/images/techlove-social-portrait-photo.jpg'),
            alt: 'Portrait post — photo background template',
          },
          {
            src: asset('/images/techlove-video-live.jpg'),
            alt: 'Morgonsoffan live show overlay template',
          },
          {
            src: asset('/images/techlove-video-outro.jpg'),
            alt: 'Morgonsoffan video end screen template',
          },
        ],
      },
      {
        kicker: 'Collaboration',
        heading: 'Handoff without guesswork',
        bullets: [
          'Token names are shared between Figma and code — designers and developers speak the same language',
          'Components map one-to-one from the library to the codebase',
          'Semantic naming makes files self-documenting — no more “which gray is this?”',
          'New pages ship faster because the building blocks already exist',
        ],
      },
      {
        kicker: 'Impact',
        heading: 'Value that outlasts the redesign',
        body: [
          'The redesign shipped — but the system is the real deliverable: design infrastructure the company builds on every week.',
        ],
        metrics: [
          { value: '1', label: 'Scalable design system' },
          { value: '15+', label: 'Social media templates' },
          { value: '3', label: 'Platforms unified' },
          { value: '10+', label: 'Website screens redesigned' },
        ],
        quote:
          'I didn’t just redesign the website — I built a scalable design system that unified the entire digital experience',
      },
      {
        kicker: 'Reflection',
        heading: 'What this project taught me',
        bullets: [
          'Naming is design: a good token name answers questions before they are asked',
          'Think in systems, not screens — the second page you build proves the first one’s logic',
          'Involve developers early: a design system is a shared product, not a Figma file',
          'AI is a powerful accelerator for analysis, but design judgment decides what ships',
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
  {
    slug: 'kiddolink',
    title: 'Kiddolink',
    tagline: 'All-in-One App for Parent–Preschool Communication',
    subtitle:
      'One clear place for parents to stay updated — no more scattered tools or clunky UIs.',
    category: 'Mobile App · UX/UI Case Study',
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
    category: 'E-Commerce · UX/UI Case Study',
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
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
