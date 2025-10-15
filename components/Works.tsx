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
    demoLink: "#",
    details: {
      title: "The services we provide for design",
      description:
        "Two smartphones displaying a sleek, dark-themed dashboard interface",
      created: "22 Apr 2025",
      technologies: "HTML, CSS",
      role: "Frontend",
      view: "www.domain.com",
    },
  },
  {
    title: "Zentry",
    featured: true,
    img: "/zentry.png",
    demoLink: "#",
    details: {
      title: "Mobile App Landing Design & App Maintain",
      description:
        "A stylish burger restaurant mobile app interface displayed on two smartphones",
      created: "15 Apr 2025",
      technologies: "HTML, CSS",
      role: "Frontend",
      view: "www.domain.com",
    },
  },
  {
    title: "Brand Design",

    img: "https://i.postimg.cc/QNB1jXYZ/work-3.png",
    demoLink: "#",
    details: {
      title: "Logo Design Creativity & Application",
      description:
        "Three smartphone screens displaying a beautifully designed travel booking application interface",
      created: "10 Apr 2025",
      technologies: "HTML, CSS",
      role: "Frontend",
      view: "www.domain.com",
    },
  },
  {
    title: "App Design",

    img: "https://i.postimg.cc/s2DGqyG8/work-4.png",
    demoLink: "#",
    details: {
      title: "Mobile App Landing Design & Services",
      description:
        "Modern workout website interface design featuring a bold and energetic visual layout",
      created: "4 Apr 2025",
      technologies: "HTML, CSS",
      role: "Frontend",
      view: "www.domain.com",
    },
  },
  {
    title: "Brand Design",

    img: "https://i.postimg.cc/TYVyPhrF/work-5.png",
    demoLink: "#",
    details: {
      title: "Design for Technology & Services",
      description:
        "An app design that is clean, functional, and ideal for gamers looking to manage their digital assets and purchases",
      created: "28 Mar 2025",
      technologies: "HTML, CSS",
      role: "Frontend",
      view: "www.domain.com",
    },
  },
  {
    title: "Web Design",

    img: "https://i.postimg.cc/wMdqKcbv/work-6.png",
    demoLink: "#",
    details: {
      title: "App for Technology & Services",
      description:
        "An app design that is clean and modern, making food browsing and ordering easy",
      created: "20 Mar 2025",
      technologies: "HTML, CSS",
      role: "Frontend",
      view: "www.domain.com",
    },
  },
];

export type PortfolioItem = {
  title: string;
  img: string;
  demoLink: string;
  featured?: boolean;
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
