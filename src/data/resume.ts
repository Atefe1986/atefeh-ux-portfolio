type ResumeProject = {
  name: string
  context: string
  description: string
  link?: string
  linkLabel?: string
}

export const resume = {
  name: 'Atefeh Etemadipour',
  headline: 'UX/UI Designer · Design Systems · AI-Assisted Workflows',
  contact: {
    phone: '+46 79 359 35 74',
    email: 'atefeh.etemadipour@gmail.com',
    location: 'Stockholm, Sweden',
  },
  summary:
    'Coming from an Industrial Engineering background, I have spent the past three years focusing on UX/UI design and frontend development. My UX journey began with the Google UX Design Certificate and continued at Chas Academy, where I specialized in UX Design with Frontend competence. Today, I work as a UX/UI Designer and consultant at Techlove and am co-founder of Taptrigg, where I help shape product and design from the ground up. Across these roles I bring hands-on experience in product design, design systems, AI-assisted workflows, and user-centered digital experiences.',
  skills: [
    {
      group: 'UX Design & Tools',
      items: [
        'Figma',
        'AI-based design tools (Figma Make, UX Pilot, Claude Code, Claude Design, Stitch)',
        'Wireframes & low- to high-fidelity prototypes',
        'Design systems',
        'User stories & user personas',
        'User-centered design',
        'Usability testing',
        'Miro',
        'Inkscape',
      ],
    },
    {
      group: 'Frontend Competence',
      items: ['HTML / CSS', 'JavaScript', 'React / React Native'],
    },
    {
      group: 'Methodologies',
      items: ['Agile methodologies', 'User-Centered Design (UCD)'],
    },
  ],
  experience: [
    {
      role: 'UX/UI Designer (Intern → Contract)',
      company: 'Techlove',
      location: 'Stockholm, Sweden',
      period: 'Nov 2025 – Present',
    },
    {
      role: 'Co-Founder',
      company: 'Taptrigg',
      location: 'Stockholm, Sweden',
      period: 'Jun 2026 – Present',
    },
    {
      role: 'Sales Expert',
      company: 'Noavaran Information Technologies Group',
      location: 'Tehran, Iran',
      period: 'Jun 2016 – Mar 2018',
    },
    {
      role: 'CRM Specialist',
      company: 'Kian Pardaz Hooshmand',
      location: 'Tehran, Iran',
      period: 'Jun 2014 – Jun 2016',
    },
  ],
  education: [
    {
      degree: 'UX Designer with Frontend Competence',
      school: 'Chas Academy, Stockholm, Sweden',
      period: 'Aug 2024 – June 2026',
      description:
        'Learning and developing skills in HTML, CSS, JavaScript, React, and user-centered design. Gaining expertise in UX design tools like Figma and usability-focused methodologies.',
    },
    {
      degree: 'Industrial Engineering, Bachelor (BSc/BA)',
      school: 'Sadjad Institute of Higher Education, Khorasan Razavi, Iran',
      period: '2004 – 2009',
      description:
        'Project: Production Scheduling using the Invasive Weed Optimization Algorithm, using Python.',
    },
  ],
  projects: [
    {
      name: 'Taptrigg — Event Engagement Platform',
      context: 'Co-Founder',
      description:
        'Built a QR-based event engagement platform from idea to launch. Led the product strategy, UX/UI design, design system, frontend implementation, and MVP development to create a seamless experience for event organizers and guests.',
      link: 'https://taptrigg.com',
      linkLabel: 'View project',
    },
    {
      name: 'Kazify Landing Page',
      context: 'Techlove Internship',
      description:
        'Designed and developed the landing page for Kazify, a gig-economy mobile application that connects service providers with customers in Kenya — similar to Uber but for household services such as cleaning, plumbing, and maintenance.',
      link: 'https://atefe1986.github.io/atefeh-ux-portfolio/work/kazify',
      linkLabel: 'View project',
    },
    {
      name: 'Techlove — Design System & Website Redesign',
      context: 'Internship',
      description:
        'Developed Techlove’s design system and led the website redesign using AI-assisted tools (Claude, UX Pilot) to streamline design workflows.',
      link: 'https://atefe1986.github.io/atefeh-ux-portfolio/work/techlove',
      linkLabel: 'View project',
    },
    {
      name: 'Holistal — Employee Wellbeing Platform',
      context: 'Degree Project',
      description:
        'My degree project (examensarbete) — a five-week collaboration between two UX designers designing the Employee Dashboard MVP for a workplace wellbeing platform. Research-led and privacy-first, taken from UX research and high-fidelity Figma UI to a working, interactive prototype built with Claude Code.',
      link: 'https://atefe1986.github.io/atefeh-ux-portfolio/work/holistal',
      linkLabel: 'View project',
    },
    {
      name: 'Luminova — E-commerce Platform',
      context: 'Course Project',
      description:
        'Designed a mobile-first e-commerce platform for lighting products, with user research, personas, and Figma prototypes, including a design system and usability testing.',
      link: 'https://atefe1986.github.io/atefeh-ux-portfolio/work/luminova',
      linkLabel: 'View case study',
    },
    {
      name: 'Kiddolink App — Parent–School Communication Tool',
      context: 'Course Project',
      description:
        'Developed a parent–preschool communication app with user flows, personas, and Figma prototypes, including a design system and guerrilla usability testing. Used AI-assisted tools (Claude Code & Design, UX Pilot, Stitch, Figma Make) to speed up ideation, generate user stories, and explore multiple design alternatives.',
      link: 'https://atefe1986.github.io/atefeh-ux-portfolio/work/kiddolink',
      linkLabel: 'View case study',
    },
    {
      name: 'Other Coursework Projects',
      context: 'Chas Academy',
      description:
        'Applied UX and frontend skills (HTML, CSS, JavaScript, React) in smaller assignments, focusing on building user-centered digital experiences as websites and mobile apps.',
    },
  ] as ResumeProject[],
  certifications: [
    'Google UX Design — Coursera',
    'AI for Designers — IxDF (Interaction Design Foundation)',
    'Accessibility in Digital Services & Products (WCAG) — Chas Academy & Axess Lab',
    'Member of IxDF Stockholm',
  ],
  certificationsNote: 'All certificates are verified and available on my LinkedIn profile.',
  languages: [
    { language: 'English', level: 'Fluent' },
    { language: 'Swedish', level: 'Limited working proficiency' },
    { language: 'Persian', level: 'Native' },
  ],
}
