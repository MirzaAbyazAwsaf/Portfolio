import resumePdf from './assets/resume.pdf'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export const profile = {
  name: 'Mirza Abyaz Awsaf',
  firstName: 'Awsaf',
  lastName: 'Abyaz Awsaf',
  role: 'AI_Engineer',
  //tagline: "I design and build fast, accessible and delightful web experiences.",
  bio: 'Passionate developer who loves turning complex problems into simple, elegant solutions. When I am not coding, you will find me exploring new tech, writing, or hiking.',
  email: 'awsafabyaz2@gmail.com',
  phone: '+8801912086413',
  location: 'Dhaka, Bangladesh',
  resumeUrl: resumePdf,
  available: true,
  socials: {
    github: 'https://github.com/MirzaAbyazAwsaf',
    linkedin: "https://www.linkedin.com/in/mirza-abyaz-awsaf-3b6a2132b/",
    mailto: 'mailto:awsafabyaz2@gmail.com',
  },
}

export const roles = [
  
 
]

export const stats = [
  
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

export const projectFilters = []

export const projects = [
  {
    title: 'Traffic Managemnent System',
    description: 'Developed an AI-powered toll management system integrating RFID, ANPR, and vehicle classification to automate toll operations, enable real-time monitoring and intelligent verification, and reduce manual intervention. Built a desktop application using PyQt5, Qt Designer, and OracleDB for efficient transaction and data management.',
    category: 'Web App',
    tags: ['Python', 'Oracle Database', 'PyQt5', 'QtDesigner'],
    link: '#',
    video: '',
    featured: true,
  },
  {
    title: 'Automatic Traffic Count and Classification (ATCC)',
    description: 'Developed an Automatic Traffic and Vehicle Counting (ATCC) system using YOLOv11, YOLOv26, RT-DETR, ByteTrack, and OC-SORT for real-time vehicle detection, tracking, counting, and lane violation detection. Built a PyQt5 desktop interface for live monitoring, visualization, automated data logging, and traffic analytics.',
    category: 'Mobile',
    tags: ['Python', 'OpenCV', 'Oracle Database', 'PyQt5'],
    link: '#',
    video: '',
    featured: false,
  },
  {
    title: 'Automatic Vehicle Classification for Toll plazas (AVC)',
    description: 'Developed a real-time vehicle classification system using YOLOv11 and YOLOv26 to accurately classify 13 vehicle types, reducing misclassification and improving toll classification integrity. Built an automated timestamp- and class-based image logging pipeline and developed a desktop application using Qt Designer and PyQt5',

    category: 'Professional Project',
    tags: ['Python', 'OpenCV', 'Oracle Database', 'PyQt5'],
    link: '#',
    video: '',
    featured: true,
  },
  {
    title: 'DataForge',
    description: 'Developed a cost-effective alternative to paid Roboflow using React and FastAPI, enabling dataset analysis, targeted data extraction, and imbalance mitigation. Integrated pre-trained YOLO models for dataset generation and provided secure local annotation capabilities without exposing data publicly.',
    category: 'Web App',
    tags: ['FastAPI', 'React', 'sqlite'],
    link: '#',
    video: '',
    featured: false,
  },
  
]

export const experience = [
  {
    role: 'AI_Engineer',
    company: 'Regnum Resources Ltd.',
    period: 'March2025 — Present',
    points: [
      'Lead a team of 4 engineers building a design system used by 12 product teams.',
      'Reduced page load time by 45% via code-splitting and edge caching.',
      'Mentored junior developers through weekly 1:1s and code reviews.',
    ],
    stack: [],
  },
  {
    role: 'Intern',
    company: 'Regnum Resources Ltd.',
    period: 'Dec 2024 — Feb 2025',
    points: [
      'Shipped 15+ features across web and mobile used by 50k monthly active users.',
      'Designed REST APIs and data models powering the core product.',
      'Introduced automated CI/CD pipeline cutting release time in half.',
    ],
    stack: [],
  },

]

export const techStackTop = [
  { name: 'Python', logo: asset('logos/python.svg') },
  { name: 'React', logo: asset('logos/react.svg') },
  { name: 'JavaScript', logo: asset('logos/javascript.svg') },
  { name: 'TypeScript', logo: asset('logos/typescript.svg') },
  { name: 'Node.js', logo: asset('logos/nodejs.svg') },
  { name: 'Tailwind CSS', logo: asset('logos/tailwindcss.svg') },
]

export const techStackBottom = [
  {
    name: 'LangChain',
    icon: 'M13.796 0a6.93 6.93 0 0 0-4.91 2.019L5.451 5.455l3.273 3.27 3.432-3.432a2.284 2.284 0 0 1 3.277 0 2.28 2.28 0 0 1 0 3.275L12 12.001l3.273 3.273 3.433-3.435c2.692-2.692 2.692-7.127 0-9.82A6.92 6.92 0 0 0 13.796 0m-5.07 8.728-3.433 3.434c-2.692 2.693-2.692 7.126 0 9.819A6.92 6.92 0 0 0 10.203 24a6.93 6.93 0 0 0 4.911-2.02l3.432-3.432-3.271-3.272-3.433 3.433a2.284 2.284 0 0 1-3.277 0 2.28 2.28 0 0 1 0-3.276L12 12z',
  },
  { name: 'OpenCV', logo: asset('logos/opencv.svg') },
  { name: 'Supervision', logo: asset('logos/supervision.svg') },
  { name: 'FastAPI', logo: asset('logos/fastapi.svg') },
  { name: 'HTML5', logo: asset('logos/html5.svg') },
  { name: 'CSS3', logo: asset('logos/css3.svg') },
  { name: 'Git', logo: asset('logos/git.svg') },
  { name: 'Docker', logo: asset('logos/docker.svg') },
  { name: 'PostgreSQL', logo: asset('logos/postgresql.svg') },
  { name: 'SQLite', logo: asset('logos/sqlite.svg') },
  { name: 'Oracle DB', logo: asset('logos/oracle.svg') },
]
