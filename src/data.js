export const profile = {
  name: 'Your Name',
  firstName: 'Your',
  lastName: 'Name',
  role: 'Full-Stack Developer',
  tagline: "I design and build fast, accessible and delightful web experiences.",
  bio: 'Passionate developer who loves turning complex problems into simple, elegant solutions. When I am not coding, you will find me exploring new tech, writing, or hiking.',
  email: 'you@example.com',
  phone: '+1 234 567 8900',
  location: 'San Francisco, CA',
  resumeUrl: '/resume.pdf',
  available: true,
  socials: {
    github: 'https://github.com/yourname',
    linkedin: 'https://linkedin.com/in/yourname',
    twitter: 'https://x.com/yourname',
    mailto: 'mailto:you@example.com',
  },
}

export const roles = [
  'Full-Stack Developer',
  'React Enthusiast',
  'UI/UX Explorer',
  'Problem Solver',
  'Clean Code Advocate',
]

export const stats = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 20, suffix: '+', label: 'Projects Built' },
  { value: 12, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: 'k+', label: 'Lines of Code' },
]

export const aboutPoints = [
  {
    title: 'Full-Stack Focus',
    text: 'Comfortable shipping complete features end-to-end, from database schema to polished UI.',
  },
  {
    title: 'Performance First',
    text: 'Obsessed with fast load times, smooth interactions and Core Web Vitals scores.',
  },
  {
    title: 'Team Player',
    text: 'Experienced with code reviews, pair programming and agile ceremonies in remote teams.',
  },
]

export const projectFilters = ['All', 'Web App', 'Mobile', 'Open Source']

export const projects = [
  {
    title: 'Dashboard Pro',
    description: 'Real-time analytics dashboard with live charts, dark mode and a drag-and-drop widget builder.',
    category: 'Web App',
    tags: ['React', 'TypeScript', 'WebSockets', 'D3'],
    link: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'FitTrack',
    description: 'Cross-platform fitness tracker with workout plans, progress charts and offline-first sync.',
    category: 'Mobile',
    tags: ['React Native', 'SQLite', 'Reanimated'],
    link: '#',
    demo: '#',
    featured: false,
  },
  {
    title: 'OpenUI Kit',
    description: 'Open-source accessible component library with 40+ components used by 1k+ developers.',
    category: 'Open Source',
    tags: ['React', 'Storybook', 'Vite'],
    link: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'ShopFlow',
    description: 'Headless e-commerce storefront with cart, checkout and Stripe payments integration.',
    category: 'Web App',
    tags: ['Next.js', 'Stripe', 'Postgres', 'Tailwind'],
    link: '#',
    demo: '#',
    featured: false,
  },
  {
    title: 'Chat App',
    description: 'Realtime group chat with typing indicators, read receipts and end-to-end encryption.',
    category: 'Web App',
    tags: ['React', 'Socket.io', 'MongoDB'],
    link: '#',
    demo: '#',
    featured: false,
  },
  {
    title: 'DevNotes',
    description: 'Markdown note-taking app with syntax highlighting and local-first storage.',
    category: 'Open Source',
    tags: ['React', 'Tiptap', 'IndexedDB'],
    link: '#',
    demo: '#',
    featured: false,
  },
]

export const experience = [
  {
    role: 'Senior Frontend Engineer',
    company: 'TechCorp Inc.',
    period: '2023 — Present',
    points: [
      'Lead a team of 4 engineers building a design system used by 12 product teams.',
      'Reduced page load time by 45% via code-splitting and edge caching.',
      'Mentored junior developers through weekly 1:1s and code reviews.',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'GraphQL'],
  },
  {
    role: 'Full-Stack Developer',
    company: 'StartupHub',
    period: '2021 — 2023',
    points: [
      'Shipped 15+ features across web and mobile used by 50k monthly active users.',
      'Designed REST APIs and data models powering the core product.',
      'Introduced automated CI/CD pipeline cutting release time in half.',
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    role: 'Frontend Developer',
    company: 'AgencyLab',
    period: '2020 — 2021',
    points: [
      'Built pixel-perfect marketing sites for 20+ clients with a 98 Lighthouse score.',
      'Collaborated closely with designers on a reusable component library.',
    ],
    stack: ['JavaScript', 'React', 'Sass', 'Figma'],
  },
]

export const techStack = [
  {
    category: 'Frontend',
    icon: 'frontend',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'CSS / Tailwind', level: 88 },
      { name: 'Redux / Zustand', level: 82 },
    ],
  },
  {
    category: 'Backend',
    icon: 'backend',
    skills: [
      { name: 'Node.js / Express', level: 88 },
      { name: 'Python / Django', level: 75 },
      { name: 'GraphQL / REST', level: 85 },
      { name: 'PostgreSQL / MongoDB', level: 80 },
    ],
  },
  {
    category: 'Tools & Cloud',
    icon: 'tools',
    skills: [
      { name: 'Git / GitHub Actions', level: 90 },
      { name: 'Docker / Kubernetes', level: 72 },
      { name: 'AWS / Vercel', level: 78 },
      { name: 'Figma / UX', level: 70 },
    ],
  },
]
