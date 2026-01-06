"use client";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { PortfolioItem, portfolioProjects } from "@/components/Works";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const ProjectsPage = () => {
  const theme = "dark";
  const [projects] = useState<PortfolioItem[]>(portfolioProjects);
  const [filteredProjects, setFilteredProjects] =
    useState<PortfolioItem[]>(portfolioProjects);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
      });

      // Filter section animation
      gsap.from(filterRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      // Grid animation
      gsap.from(gridRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const clearAllFilters = () => {
    setActiveFilters([]);
    setFilteredProjects(projects);
  };

  return (
    <div
      ref={containerRef}
      className={`min-h-screen ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } transition-colors duration-300`}
    >
      {/* Hero Section */}
      <section className="pt-10 md:pt-20  flex items-center justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div ref={heroRef} className="text-center lg:text-left">
            {/* Header */}
            <div className="mb-8">
              <span
                className={`text-sm uppercase tracking-wider 
                  dark:text-red-500 text-blue-600
                 font-semibold`}
              >
                {"// Portfolio"}
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light leading-none mb-8">
              Featured Projects
            </h1>

            <div className="mb-12">
              <p
                className={`text-xl lg:text-2xl 
                dark:text-gray-300 text-gray-600
                `}
              >
                Full-Stack Development
              </p>
            </div>

            {/* Description */}
            <div className="max-w-4xl mx-auto lg:mx-0 mb-12">
              <p
                className={`
                  dark:text-gray-400 text-gray-600
                 text-lg leading-relaxed`}
              >
                A showcase of my innovative solutions and technical expertise
                across various domains. Each project demonstrates the modern
                development practices, scalable architecture, and user-centered
                design principles i took to achieve a clean intuitive and
                responsive design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Projects Grid */}
          <div ref={gridRef}>
            <div className="mb-8">
              <span
                className={`text-sm uppercase tracking-wider ${
                  theme === "dark" ? "text-red-500" : "text-blue-600"
                } font-semibold`}
              >
                {" // Projects"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-max">
              {filteredProjects.map((project, index) => (
                <div key={project.title}>
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>

            {/* No Results Message */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <div
                  className={`${
                    theme === "dark" ? "text-gray-600" : "text-gray-400"
                  } mb-4`}
                >
                  <svg
                    className="w-16 h-16 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  } mb-2`}
                >
                  No projects found
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  Try adjusting your filters or browse all projects
                </p>
                <Button
                  variant="outline"
                  onClick={clearAllFilters}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Results Counter */}
            {activeFilters.length > 0 && filteredProjects.length > 0 && (
              <div
                className={`text-center mt-12 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Showing {filteredProjects.length} of {projects.length} projects
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
