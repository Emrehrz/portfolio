const LINKS = {
  github: "https://github.com/Emrehrz",
  linkedin: "https://www.linkedin.com/in/emre-horuz/",
  mail: "mailto:horuzemre3@gmail.com",
  instagram: "https://www.instagram.com/emre_0o7/",
  medium: "https://medium.com/@horuzemre3",
  discord: "https://discordapp.com/users/163300027618295808",
  youtube: "https://www.youtube.com/@emrehrz001"
};
const WORK = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked."
};
const PROJECTS = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on."
};
const STUDIES = [
  {
    title: "B.S. in Computer Engineering",
    institution: "İzmir Bakırçay University",
    link: "https://bakircay.edu.tr/",
    date: "2021 - 2026"
  }
];
const EXPERIENCE = [
  {
    company: "fitmeup",
    location: "Izmir, Turkey",
    position: "Co-Founder & Full-Stack Engineer",
    start: "Jan 2025",
    link: "https://fitmeup.com.tr/",
    end: "Present",
    tasks: [
      "Co-founded and engineered a B2B SaaS platform enabling fitness coaches to manage nutrition, training programs, and student progress tracking.",
      "Architected a self-hosted Supabase infrastructure (PostgreSQL, Auth, Storage, Edge Functions), optimizing scalable backend operations and reducing cloud costs.",
      "Built modular frontend architectures and API contracts using Vue 3, Vite, TailwindCSS, and Node.js, ensuring unified data layers for web and mobile clients.",
      "Owned end-to-end product delivery, rapidly shipping features and integrating real-time feedback in a high-paced, growth-stage startup."
    ]
  },
  {
    company: "Rement Soft",
    location: "Ankara, Turkey",
    position: "Software Developer Intern",
    start: "Jul 2024",
    end: "Sep 2024",
    tasks: [
      "Developed robust C# REST APIs, enforcing strict data integrity rules and reducing backend response latency.",
      "Collaborated within agile teams using Azure DevOps to manage CI/CD pipelines, track deployments, and ensure seamless version control."
    ]
  }
];

export { EXPERIENCE as E, LINKS as L, PROJECTS as P, STUDIES as S, WORK as W };
