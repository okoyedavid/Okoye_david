"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";

export default function Skills() {
  const [active, setActive] = useState("backend");
  const [modal, setModal] = useState(null);

  // Animate skill bars & modal appearance
  useEffect(() => {
    if (active) {
      const group = `.skills-group[data-id="${active}"]`;
      const bars = document.querySelectorAll(`${group} .skills-percentage`);

      gsap.fromTo(
        group,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );

      gsap.set(bars, { width: 0 });
      gsap.to(bars, {
        width: (i, el) => el.dataset.width + "%",
        duration: 1,
        ease: "power2.out",
        stagger: 0.15,
      });
    }

    if (modal) {
      gsap.fromTo(
        ".modal-content",
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.6)" }
      );
    }
  }, [active, modal]);

  const openModal = (id) => {
    setModal(id);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    gsap.to(".modal-content", {
      scale: 0.85,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setModal(null);
        document.body.style.overflow = "";
      },
    });
  };

  const sections = [
    {
      id: "frontend",
      title: "Frontend Developer",
      subtitle: "More than 4 years",
      icon: "brackets-curly",
      skills: [
        { name: "HTML", percent: 90 },
        { name: "CSS", percent: 80 },
        { name: "JavaScript", percent: 60 },
        { name: "React", percent: 85 },
      ],
    },
    {
      id: "design",
      title: "Social Media Manager",
      subtitle: "More than 2 years",
      icon: "swatchbook",
      skills: [
        { name: "Figma", percent: 90 },
        { name: "Sketch", percent: 80 },
        { name: "Photoshop", percent: 70 },
      ],
    },
    {
      id: "backend",
      title: "Backend Developer",
      subtitle: "Less than 2 years",
      icon: "server-network",
      skills: [
        { name: "PHP", percent: 80 },
        { name: "Python", percent: 80 },
        { name: "MySQL", percent: 70 },
        { name: "Firebase", percent: 75 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="skills section py-16 bg-black text-white relative overflow-hidden"
    >
      <h2 className="text-4xl font-bold text-center mb-12 tracking-tight drop-shadow-[0_0_10px_rgba(239,68,68,0.7)]">
        My Experience
      </h2>

      <div className="skills-container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {/* Tabs */}
        <div className="skills-tabs flex flex-col">
          {sections.map((tab, index) => (
            <div
              key={tab.id}
              className={`skills-header flex items-center justify-between cursor-pointer p-4 rounded-xl border border-red-500/30 bg-gray-900/30 backdrop-blur-md hover:bg-gray-800/50 transition-all duration-300 ${
                index > 0 ? "mt-6" : ""
              }`}
              onClick={() => {
                setActive(active === tab.id ? "" : tab.id);
              }}
            >
              <div className="flex items-center">
                <i
                  className={`uil uil-${tab.icon} text-3xl text-red-500 mr-3 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]`}
                ></i>
                <div>
                  <h3 className="text-base font-medium">{tab.title}</h3>
                  <span className="text-sm text-gray-400">{tab.subtitle}</span>
                </div>
              </div>
              <div className="flex items-center">
                <i
                  className={`uil uil-angle-down text-2xl text-red-500 transition-transform duration-300 ${
                    active === tab.id ? "-rotate-90" : ""
                  }`}
                ></i>
                <button
                  className="ml-3 text-sm text-red-500 hover:text-red-400"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(tab.id);
                  }}
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="skills-content md:col-span-2">
          {sections.map((tab) => (
            <div
              key={tab.id}
              data-id={tab.id}
              className={`skills-group ${
                active === tab.id ? "block" : "hidden"
              } p-6 rounded-xl border border-red-500/30 bg-gray-900/30 backdrop-blur-md`}
            >
              <div className="grid grid-cols-1 gap-7">
                {tab.skills.map((skill, index) => (
                  <div key={index} className="skills-data">
                    <div className="flex justify-between mb-2">
                      <h4 className="text-base font-medium">{skill.name}</h4>
                      <span className="text-base text-gray-400">
                        {skill.percent}%
                      </span>
                    </div>
                    <div className="skills-bar h-[5px] rounded bg-gray-700/50">
                      <span
                        className="skills-percentage block h-full rounded bg-red-500 w-0 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
                        data-width={skill.percent}
                      ></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="modal-content p-8 rounded-xl bg-gray-900/40 backdrop-blur-lg border border-red-500/50 max-w-lg w-full mx-4">
            <h3 className="text-2xl font-bold mb-4 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
              {sections.find((s) => s.id === modal)?.title}
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {sections
                .find((s) => s.id === modal)
                ?.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <h4 className="text-base font-medium">{skill.name}</h4>
                      <span className="text-base text-gray-400">
                        {skill.percent}%
                      </span>
                    </div>
                    <div className="h-[5px] rounded bg-gray-700/50">
                      <span
                        className="block h-full rounded bg-red-500"
                        style={{ width: `${skill.percent}%` }}
                      ></span>
                    </div>
                  </div>
                ))}
            </div>

            <button
              className="mt-6 px-4 py-2 bg-red-500/80 hover:bg-red-400 text-white rounded-lg transition-colors w-full"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
