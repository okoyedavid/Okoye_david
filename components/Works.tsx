"use client";
export default function Work() {
  return (
    <section
      id="work"
      className="work section py-16 bg-white dark:bg-black text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-none mb-8">
            My <span className="font-normal text-red-500">Projects</span>
          </h1>

          <div className="mb-6">
            <p
              className={`text-xl lg:text-2xl 
                   dark:text-gray-300 text-gray-600
              mb-2`}
            >
              {"Performance & Scalability"}
            </p>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto lg:mx-0">
            <p
              className={`
                   dark:text-gray-400 text-gray-600 text-lg leading-relaxed mb-8`}
            >
              A collection of my recent projects showcasing practical
              implementations of modern web technologies, focused on
              performance, scalability, and clean design.
            </p>
          </div>
        </div>
      </div>

      <div className="work-container max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 px-4">
        {portfolioProjects.map((project, index) => (
          <div
            key={index}
            className="card dark:bg-[#222] bg-white h-[31rem] md:h-[26rem]  dark:dark"
          >
            <img src={project.img} alt="" />
            <section className="p-3 flex flex-col">
              <h2 className="text-white">{project.title}</h2>
              <p>{project.details.description}</p>
            </section>
          </div>
        ))}
      </div>
    </section>
  );
}

export const portfolioProjects: PortfolioItem[] = [
  {
    title: "Deken Global",
    img: "/deken.png",
    githubUrl: "https://github.com/okoyedavid/deken-movers",
    demoLink: "https://deken-movers.vercel.app",
    details: {
      title: "Dashboard Design & Admin Panel for a Moving Company",
      description:
        "A sleek and modern dashboard interface design for a moving company's admin panel",
      created: "22 aug 2025",
      technologies:
        "Nextjs, tailwindcss, framer-motion, recharts, react-table, shadcn ui, next-js",
      role: "Frontend",
      view: "https://deken-movers.vercel.app",
    },
  },
  {
    title: "Zentry",
    featured: true,
    img: "/zentry.png",
    demoLink: null,
    githubUrl: "https://github.com/okoyedavid/task-manager",
    details: {
      title: "Todo application, task management app design & development",
      description:
        "A clean and minimalistic todo application interface design with intuitive task management features",
      created: "15 Apr 2025",
      technologies:
        "nextjs, tailwindcss, framer-motion, nodejs, express, mongoose",
      role: "Frontend",
      view: "www.domain.com",
    },
  },
  {
    title: "Faculty Website",
    githubUrl: "https://github.com/okoyedavid/Esut_pharmacy",
    img: "/esut.png",
    demoLink: "https://esut-pharmacy.vercel.app",
    details: {
      title: "Faculty of Engineering Website Design & Development",
      description:
        "A modern and clean faculty website interface design with intuitive navigation",
      created: "10 january 2025",
      technologies:
        "nextjs, tailwindcss, framer-motion, nodejs, express, mongoose, supabase",
      role: "full-stack",
      view: "https://esut-pharmacy.vercel.app/",
    },
  },
  {
    title: "Auve",

    img: "/auve.png",
    demoLink: null,
    githubUrl: "https://github.com/okoyedavid/david-wears",
    details: {
      title: "Auve - Fitness & Workout Website Design",
      description:
        "A vibrant and energetic E-commerce fashion website interface design with engaging visuals",
      created: "4 November 2025",
      technologies: "Redux, rtk query, tailwindcss, framer-motion, react",
      role: "Frontend",
      view: "www.domain.com",
    },
  },
];

export type PortfolioItem = {
  title: string;
  img: string;
  demoLink: string | null;
  featured?: boolean;
  githubUrl?: string;
  details: DetailsProps;
};

type DetailsProps = {
  title: string;
  description: string;
  created: string;
  technologies: string;
  role: string;
  view: string;
};
