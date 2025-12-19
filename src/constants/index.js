import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  carrent,
  jobit,
  tripguide,
} from "../assets";

/* ================= NAV LINKS ================= */

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

/* ================= SERVICES ================= */

const services = [
  {
    title: "Full Stack Developer",
    icon: creator,
  },
  {
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "Backend & API Developer",
    icon: backend,
  },
  {
    title: "AI & 3D Web Developer",
    icon: mobile,
  },
];

/* ================= TECHNOLOGIES ================= */

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three.js", icon: threejs },
  { name: "Git", icon: git },
  { name: "Docker", icon: docker },
  { name: "Figma", icon: figma },
];

/* ================= EXPERIENCE ================= */

const experiences = [
  {
    title: "Full Stack (MERN) Developer",
    company_name: "Personal & Open Source Projects",
    icon: web,
    iconBg: "#383E56",
    date: "2024 – Present",
    points: [
      "Built complete MERN stack applications with React, Node.js, Express, and MongoDB.",
      "Implemented authentication, role-based access, and scalable REST APIs.",
      "Worked on real-world products like job portals, SaaS dashboards, and management systems.",
    ],
  },
  {
    title: "Backend & API Developer",
    company_name: "Project-Based Work",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "2024 – Present",
    points: [
      "Designed backend architectures and RESTful APIs for full-stack applications.",
      "Handled database modeling, authentication logic, and secure data flow.",
      "Integrated third-party services and AI-powered features into backend systems.",
    ],
  },
  {
    title: "UI/UX & Frontend Developer",
    company_name: "Web & Product Interfaces",
    icon: creator,
    iconBg: "#383E56",
    date: "2023 – Present",
    points: [
      "Designed clean, modern, and responsive user interfaces for web applications.",
      "Translated UI/UX concepts into functional React components.",
      "Focused on usability, accessibility, and smooth user experience.",
    ],
  },
  {
    title: "AI & Automation Developer",
    company_name: "Experimental & AI-Driven Projects",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "2023 – Present",
    points: [
      "Built AI-powered tools including intelligent CLIs, automation workflows, and assistants.",
      "Worked with AI APIs and ML logic to add smart features into applications.",
      "Combined AI systems with frontend and backend for practical use cases.",
    ],
  },
];

/* ================= TESTIMONIALS ================= */

const testimonials = [
  {
    testimonial:
      "Suvankar consistently delivers clean, scalable solutions and has a strong understanding of full-stack and AI-driven systems.",
    name: "Peer Developer",
    designation: "Software Engineer",
    company: "Open Source Collaboration",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "His ability to combine backend logic, frontend UI, and AI features makes his projects stand out.",
    name: "Project Mentor",
    designation: "Technical Mentor",
    company: "Academic Project",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];


const projects = [
  {
    name: "Project Management SaaS",
    description:
      "A full-stack MERN SaaS platform for managing teams, projects, and tasks with authentication, workspaces, and scalable backend architecture.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "typescript", color: "orange-text-gradient" },
    ],
    image: "/Screenshot 2025-12-19 235538.png",
    source_code_link: "https://github.com/suvankar11223/Project-Management",
  },
  {
    name: "Jobzi – Job Portal",
    description:
      "A full-stack job portal with advanced search, filters, authentication, and secure backend APIs for job listings and applications.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: "/Screenshot 2025-12-20 000018.png",
    source_code_link: "https://github.com/suvankar11223/Jobzi",
  },
  {
    name: "Stockzi – Market Tracker",
    description:
      "A modern TypeScript-based stock tracking dashboard with real-time market insights, clean UI, and scalable frontend architecture.",
    tags: [
      { name: "typescript", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "api", color: "pink-text-gradient" },
    ],
    image: "/Screenshot 2025-12-19 235819.png",
    source_code_link: "https://github.com/suvankar11223/Stockzi",
  },
  {
    name: "Zenitsu CLI (AI Tool)",
    description:
      "An AI-powered CLI tool with automation capabilities and optional dashboard integration for developer productivity.",
    tags: [
      { name: "ai", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "cli", color: "pink-text-gradient" },
    ],
    image: "/Screenshot 2025-12-20 000124.png",
    source_code_link: "https://github.com/suvankar11223/zenitsu-cli",
  },
  {
    name: "🌿 Agri_Sensi: AI-Powered Smart Farming & Marketplace System",
    description:
      "A computer vision-based attendance system using face recognition for automated and accurate identity tracking.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "opencv", color: "green-text-gradient" },
      { name: "ml", color: "pink-text-gradient" },
    ],
    image: "/Screenshot 2025-12-19 235642.png",
    source_code_link:
      "https://github.com/suvankar11223/Agri_Sensi",
  },
];

/* ================= EXPORTS ================= */

export { services, technologies, experiences, testimonials, projects };
