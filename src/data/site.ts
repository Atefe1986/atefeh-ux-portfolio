import { asset } from '../lib/asset'

export const site = {
  name: 'Atefeh Etemadipour',
  role: 'UX/UI Designer',
  location: 'Stockholm, Sweden',
  email: 'atefeh.etemadipour@gmail.com',
  github: 'https://github.com/Atefe1986',
  linkedin: 'https://www.linkedin.com/in/atefeh-etemadipour/',
  portfolio: 'https://atefehetemadipour.com/',
  resumePdf: asset('/atefeh-etemadipour-resume.pdf'),
  logo: { src: asset('/images/logo.png'), alt: 'Atefeh Etemadipour logo' },
  hero: {
    title: 'Crafting User-Centered Digital Experiences',
    subtitle:
      'Step into my portfolio to explore how thoughtful UX meets clean visual design. From early sketches to interactive prototypes, each project tells a story of problem-solving and creativity.',
  },
  pillars: [
    {
      title: 'Wireframing & Prototyping',
      description:
        'From concepts to clickable prototypes — translating user needs into intuitive layouts with clear visual hierarchy.',
    },
    {
      title: 'User Research',
      description:
        'In-depth interviews and behavioural analysis that turn everyday frustrations into actionable design insights.',
    },
    {
      title: 'Usability Testing & Iteration',
      description:
        'Validating designs through real feedback — guerrilla testing, remote sessions, and rapid iteration.',
    },
  ],
  about: {
    portrait: { src: asset('/images/about-portrait.png'), alt: 'Portrait of Atefeh Etemadipour' },
    title: 'From idea to shipped product',
    intro:
      'I’m a UX/UI Designer with frontend competence and Co-Founder of Taptrigg, based in Stockholm. I turn ideas into working products — from user research and product strategy through UX/UI design and prototyping to frontend implementation — creating digital experiences that are intuitive, accessible and aligned with business goals.',
    facts: [
      { label: 'Based in', value: 'Stockholm, Sweden' },
      { label: 'Currently', value: 'UX/UI Designer at Techlove' },
      { label: 'Founded', value: 'Co-Founder of Taptrigg' },
      { label: 'Education', value: 'Chas Academy, 2026' },
    ],
    story: [
      {
        kicker: 'Now',
        heading: 'Building products end to end',
        body: [
          'At Taptrigg, a QR-based engagement platform for conferences, kickoffs and company events, I have been part of the entire product journey: identifying the problem, validating the idea, designing the experience, building the MVP and launching it with real users.',
          'As a UX/UI Designer at Techlove, I work on client projects — website redesigns, design systems and product interfaces — collaborating closely with developers and stakeholders to deliver solutions that are scalable and user-centered.',
        ],
      },
      {
        kicker: 'Background',
        heading: 'A business lens on design',
        body: [
          'Before moving into UX, I spent more than four years in sales and CRM, building on a background in industrial engineering. That experience taught me how customers think, decide and communicate, and it still shapes how I balance user needs with business impact.',
          'I graduated in UX Design with Frontend Competence from Chas Academy in 2026.',
        ],
      },
      {
        kicker: 'How I work',
        heading: 'Collaborative, curious, fast',
        body: [
          'I thrive in cross-functional teams, enjoy learning new technologies, and use AI-assisted workflows to move from idea to tested prototype faster — without compromising the user experience.',
        ],
      },
    ],
    skillGroups: [
      {
        group: 'UX/UI Design',
        items: [
          'UX/UI Design',
          'Wireframing',
          'Rapid Prototyping',
          'Design Systems',
          'Accessibility (WCAG)',
          'Usability Testing',
          'Iteration',
        ],
      },
      {
        group: 'Research & Strategy',
        items: [
          'User Research',
          'User Interviews',
          'Surveys',
          'Qualitative & Quantitative Research',
          'Personas',
          'Competitive Analysis',
          'SWOT',
          'Business Research',
        ],
      },
      {
        group: 'Frontend',
        items: ['Frontend Development', 'HTML/CSS', 'JavaScript', 'React'],
      },
      {
        group: 'Tools & AI',
        items: ['Figma', 'Miro', 'Claude Code', 'Claude Design', 'UX Pilot', 'Stitch'],
      },
    ],
  },
}
