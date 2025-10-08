export const services = [
  { number: "01", name: "Frontend Development", id: "frontend-dev" },
  { number: "02", name: "Backend Architecture", id: "backend-arch" },
  { number: "03", name: "Full-Stack Solutions", id: "fullstack" },
  { number: "04", name: "API Development", id: "api-dev" },
  { number: "05", name: "Database Design", id: "database" },
  { number: "06", name: "Modern UI/UX", id: "ui-ux" },
];

export const coreSkills = [
  { number: "01", name: "JavaScript / TypeScript", id: "js-ts" },
  { number: "02", name: "React & Next.js", id: "react-next" },
  { number: "03", name: "Node.js & Express", id: "node-express" },
  { number: "04", name: "MongoDB & PostgreSQL", id: "databases" },
  { number: "05", name: "REST & GraphQL APIs", id: "apis" },
  { number: "06", name: "Tailwind CSS", id: "tailwind" },
];

export const toolsAndTech = [
  { number: "01", name: "Git & GitHub", id: "git" },
  { number: "02", name: "Docker & Deployment", id: "docker" },
  { number: "03", name: "AWS & Cloud Services", id: "aws" },
  { number: "04", name: "Jest & Testing", id: "testing" },
  { number: "05", name: "Figma & Design", id: "design" },
  { number: "06", name: "Agile & DevOps", id: "agile" },
];

export const sections = [
  {
    title: "// Services",
    number: "01",
    subtitle: "Development & Engineering",
    description:
      "Full-stack development solutions that combine modern technologies with scalable architecture for exceptional digital experiences.",
    services,
  },
  {
    title: "// Core Skills",
    number: "02",
    subtitle: "Technical Foundation",
    description:
      "Core programming languages, frameworks, and databases that power modern web applications with performance and reliability at scale.",
    services: coreSkills,
  },
  {
    title: "// Tools & Technologies",
    number: "03",
    subtitle: "Development Ecosystem",
    description:
      " Professional development tools, cloud platforms, and workflow optimization technologies that enable efficient collaboration and deployment.",
    services: toolsAndTech,
  },
];
