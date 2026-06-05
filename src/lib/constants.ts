import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/Emrehrz',
  linkedin: 'https://www.linkedin.com/in/emre-horuz/',
  mail: 'mailto:horuzemre3@gmail.com',
  instagram: 'https://www.instagram.com/emre_0o7/',
  medium: 'https://medium.com/@horuzemre3',
  discord: 'https://discordapp.com/users/163300027618295808',
  youtube: 'https://www.youtube.com/@emrehrz001'
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'B.S. in Computer Engineering',
    institution: 'İzmir Bakırçay University',
    link: 'https://bakircay.edu.tr/',
    date: '2021 - 2026',
  },
]

export const EXPERIENCE = [
  {
    company: 'fitmeup',
    location: 'Izmir, Turkey',
    position: 'Co-Founder & Full-Stack Engineer',
    start: 'Jan 2025',
    link: 'https://fitmeup.com.tr/',
    end: 'Present',
    tasks: [
      'Co-founded and engineered a B2B SaaS platform enabling fitness coaches to manage nutrition, training programs, and student progress tracking.',
      'Architected a self-hosted Supabase infrastructure (PostgreSQL, Auth, Storage, Edge Functions), optimizing scalable backend operations and reducing cloud costs.',
      'Built modular frontend architectures and API contracts using Vue 3, Vite, TailwindCSS, and Node.js, ensuring unified data layers for web and mobile clients.',
      'Owned end-to-end product delivery, rapidly shipping features and integrating real-time feedback in a high-paced, growth-stage startup.',
    ],
  },
  {
    company: 'Rement Soft',
    location: 'Ankara, Turkey',
    position: 'Software Developer Intern',
    start: 'Jul 2024',
    end: 'Sep 2024',
    tasks: [
      'Developed robust C# REST APIs, enforcing strict data integrity rules and reducing backend response latency.',
      'Collaborated within agile teams using Azure DevOps to manage CI/CD pipelines, track deployments, and ensure seamless version control.',
    ],
  },
]
