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

export const stages = [
  {
    number: "01",
    title: "I Build",
    description:
      "We bring ideas to life — structuring architecture, setting up React and Next.js environments, and writing clean, modular code for scalable applications.",
    code: [
      "use client",
      "import { useEffect, useRef, useState } from react",
      "function App() {",
      "  const [count, setCount] = useState(0);",
      "  return (",
      "<main>",
      "<div>",
      "<h1> Hello world </h1>",
      "</div>",
      "    <button onClick={() => setCount(count + 1)}>",
      "      Clicked {count} times",
      "    </button>",
      "</main>",
      "  );",
      "}",
      "",
      "export default App",
    ],
  },
  {
    number: "02",
    title: "Test",
    description:
      "We validate performance, reliability, and user experience — ensuring smooth interactions and stable systems.",
    code: [
      "cd ~/Desktop/coding/portfolio",
      "",
      "npm test -- --coverage --verbose",
      "",
      "",
      " PASS  __tests__/App.test.js",
      "  ✓ renders main heading (45 ms)",
      "",
      "Test Suites: 1 passed, 1 total",
      "Tests:       1 passed, 1 total",
      "Snapshots:   0 total",
      "Time:        1.23 s",
      "",
      "Jest tests completed successfully ✅",
    ],
  },
  {
    number: "03",
    title: "Compile",
    description:
      "We optimize and compile production builds — using modern toolchains for faster, leaner, and cleaner deployment outputs.",
    code: [
      "npm run build",
      "",
      "",
      "> info  - Linting and checking validity of types...",
      "> info  - Creating an optimized production build...",
      "> info  - Compiled successfully'",
      "",
      "Route (app)                                  Size     First Load JS",
      "┌ ● / (ISR: 60 Seconds)                      1.7 kB          88.3 kB",
      "├   /_app                                    0 B             86.6 kB",
      "├ ○ /about                                   2.3 kB          91.2 kB",
      "├ ○ /projects                                2.5 kB          93.1 kB",
      "└ ○ /contact                                 1.8 kB          89.5 kB",
      "✓  Automatically optimized static pages",
      "",
      "> info  - Collecting page data...'",
      "> info  - Generating static pages (3/3)",
      "> info  - Finalizing build output...",
      "",
      "✨  Build completed successfully in 15.4s",
      "📦  Output directory: .next",
      "",
      "Next.js build complete ✅ — ready for deployment!",
    ],
  },
  {
    number: "04",
    title: "and Ship",
    description:
      "We deliver — deploying projects seamlessly to Vercel or preferred infrastructure, ensuring uptime, scalability, and global performance.",
    code: [
      "> Checking linked project and environment variables...",
      "> Uploading build output... (38 files, 1.2 MB)",
      "> Deploying build to global edge network...",
      "> Build ready and functions deployed.",
      "",
      "🌍 Deployment successful!",
      "",
      "🔗 Visit your live site:'",
      "   https://davidokoye.vercel.app",
      "",
      "⚡ Deployment Summary:",
      "   ✔ Environment: Production",
      "   ✔ Framework: Next.js 15",
      "   ✔ Build Time: 19.3s",
      "   ✔ CDN Region: Global",
      "",
      "✨ All done! Your app is live on Vercel.",
      "Happy coding 👨‍💻",
    ],
  },
];

export const stats = [
  { value: "15+", label: "Technologies" },
  { value: "3", label: "Core Areas" },
  { value: "100%", label: "Commitment" },
  { value: "∞", label: "Learning" },
];
