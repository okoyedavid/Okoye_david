"use client";
import { useState } from "react";

export default function Work() {
  const [selected, setSelected] = useState<portfolitypes | null>(null);

  return (
    <section className="work section" id="work">
      <h2 className="section-title">Recent Works</h2>

      <div className="work-filters">
        <span className="work-item active-work" data-filter="all">
          All
        </span>
        <span className="work-item" data-filter=".web">
          Web
        </span>
        <span className="work-item" data-filter=".app">
          App
        </span>
        <span className="work-item" data-filter=".design">
          Design
        </span>
      </div>

      <div className="work-container max-w-6xl mx-auto grid">
        {portfolioProjects.map((project, index) => (
          <div key={index} className={`work-card mix ${project.category}`}>
            <img src={project.img} alt="" className="work-img" />
            <h3 className="work-title">{project.title}</h3>
            <span onClick={() => setSelected(project)} className="work-button">
              Demo <i className="uil uil-arrow-right work-button-icon"></i>
            </span>
            <div className="portfolio-item-details">
              <h3 className="details-title">{project.details.title}</h3>
              <p className="details-description">
                {project.details.description}
              </p>
              <ul className="details-info">
                <li>
                  Created - <span>{project.details.created}</span>
                </li>
                <li>
                  Technologies - <span>{project.details.technologies}</span>
                </li>
                <li>
                  Role - <span>{project.details.role}</span>
                </li>
                <li>
                  View -{" "}
                  <span>
                    <a href="#">{project.details.view}</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className={`portfolio-popup ${selected ? "open" : ""}`}>
        <div className="portfolio-popup-inner">
          <div className="portfolio-popup-content grid">
            <span
              onClick={() => setSelected(null)}
              className="portfolio-popup-close"
            >
              <i className="uil uil-times"></i>
            </span>
            <div className="pp-thumbnail">
              <img src={selected?.img} alt="" className="portfolio-popup-img" />
            </div>

            <div className="portfolio-popup-info">
              <div className="portfolio-popup-subtitle">
                Featured - <span>{selected?.category}</span>
              </div>
              <div className="portfolio-popup-body">
                <h3 className="details-title">{selected?.details?.title}</h3>
                <p className="details-description">
                  {selected?.details?.description}
                </p>

                <ul className="details-info">
                  <li>
                    Created - <span>{selected?.details?.created}</span>
                  </li>
                  <li>
                    Technologies -{" "}
                    <span>{selected?.details?.technologies}</span>
                  </li>
                  <li>
                    Role - <span>{selected?.details?.role}</span>
                  </li>
                  <li>
                    View -{" "}
                    <span>
                      <a href="#">{selected?.details?.view}</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const portfolioProjects = [
  {
    title: "Web Design",
    category: "web",
    img: "https://i.postimg.cc/43Th5VXJ/work-1.png",
    demoLink: "#",
    details: {
      title: "The services we provide for design",
      description:
        "Two smartphones displaying a sleek, dark-themed dashboard interface",
      created: "22 Apr 2025",
      technologies: "html css",
      role: "frontend",
      view: "www.domain.com",
    },
  },
  {
    title: "App Design",
    category: "app",
    img: "https://i.postimg.cc/sXLjnC5p/work-2.png",
    demoLink: "#",
    details: {
      title: "Mobile App Landing Design & App Maintain",
      description:
        "A stylish burger restaurant mobile app interface displayed on two smartphones",
      created: "15 Apr 2025",
      technologies: "html css",
      role: "frontend",
      view: "www.domain.com",
    },
  },
  {
    title: "Brand Design",
    category: "design",
    img: "https://i.postimg.cc/QNB1jXYZ/work-3.png",
    demoLink: "#",
    details: {
      title: "Logo Design Creativity & Application",
      description:
        "Three smartphone screens displaying a beautifully designed travel booking application interface",
      created: "10 Apr 2025",
      technologies: "html css",
      role: "frontend",
      view: "www.domain.com",
    },
  },
  {
    title: "App Design",
    category: "app",
    img: "https://i.postimg.cc/s2DGqyG8/work-4.png",
    demoLink: "#",
    details: {
      title: "Mobile App Landing Design & Services",
      description:
        "Modern workout website interface design featuring a bold and energetic visual layout",
      created: "4 Apr 2025",
      technologies: "html css",
      role: "frontend",
      view: "www.domain.com",
    },
  },
  {
    title: "Brand Design",
    category: "web",
    img: "https://i.postimg.cc/TYVyPhrF/work-5.png",
    demoLink: "#",
    details: {
      title: "Design for Technology & Services",
      description:
        "An app design that is clean, functional, and ideal for gamers looking to manage their digital assets and purchases",
      created: "28 Mar 2025",
      technologies: "html css",
      role: "frontend",
      view: "www.domain.com",
    },
  },
  {
    title: "Web Design",
    category: "design",
    img: "https://i.postimg.cc/wMdqKcbv/work-6.png",
    demoLink: "#",
    details: {
      title: "App for Technology & Services",
      description:
        "An app design that is clean and modern, making food browsing and ordering easy",
      created: "20 Mar 2025",
      technologies: "html css",
      role: "frontend",
      view: "www.domain.com",
    },
  },
];

type portfolitypes = {
  title: string;
  category: string;
  img: string;
  demoLink: string;
  details: detailsProps;
};

type detailsProps = {
  title: string;
  description: string;
  created: string;
  technologies: string;
  role: string;
  view: string;
};
