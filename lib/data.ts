export const profile = {
  name: "Md. Ashraful Islam",
  role: "Frontend Developer",
  tagline:
    "I craft accessible, performant, and delightful web experiences with React and TypeScript. Passionate about clean code and thoughtful design.",
  email: process.env.EMAIL_ADDRESS,
  location: "Dhaka, Bangladesh",
  socials: [
    {
      label: "GitHub",
      href: process.env.GITHUB_URL,
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: process.env.LINKEDIN_URL,
      icon: "linkedin",
    },
    // { label: "Email", href: `mailto:${process.env.EMAIL_ADDRESS}` },
  ],
};

export const about = {
  paragraphs: [
    "I'm a frontend developer with over 1.5 years of experience building modern web applications. I specialize in React, Next.js, and TypeScript, and I love turning complex problems into simple, beautiful interfaces.",
    "I believe the best products are built at the intersection of design and engineering. When I'm not coding, you'll find me exploring new technologies, contributing to open source, or writing about frontend development.",
  ],
  facts: [
    { label: "Experience", value: "1.5+ Years" },
    { label: "Location", value: "Dhaka, BD" },
    { label: "Focus", value: "React & TypeScript" },
    { label: "Status", value: "Open to work" },
  ],
};

export const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "HTML5", "CSS3", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Redux", "Zustand", "Tailwind CSS"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Vite", "Figma", "Vercel"],
  },
];

export const projects = [
  {
    title: "Full Stack Project",
    img: "https://res.cloudinary.com/dd2fdhpvf/image/upload/v1782492429/screenshoot-2026-06-26-22.39.24_hhq0sm.jpg",
    description: "Full Stack Project",
    tech: ["ExpressJs", "NodeJS", "HTML", "CSS", "EJS", "MongoDB"],
    link: "https://majorproject-plvy.onrender.com/listings",
    repo: "https://github.com/ashraful-tech/MAJORPROJECT",
  },
  {
    title: "Weather App",
    img: "https://res.cloudinary.com/dd2fdhpvf/image/upload/v1782492572/screenshoot-2025-05-30-11.57.35_tfvrty.jpg",
    description: "Weather App",
    tech: ["React", "CSS", "OpenWeatherMap API"],
    link: "https://weatherapp-ashraful-tech.netlify.app/",
    repo: "https://github.com/ashraful/fullstack",
  },
];

export const experience = [
  {
    role: "Frontend Developer",
    company: "Zaynax Health Ltd",
    company_url: "https://www.zaynaxhealth.com/",
    period: "2025 — Present",
    points: [
      "Worked on building dynamic and interactive user interfaces for various healthcare products",
      "Implemented responsive designs ensuring seamless user experience across different devices",
      "Collaborated with backend developers to integrate APIs and optimize data flow",
      "Optimized application performance and ensured cross-browser compatibility",
    ],
  },
];
