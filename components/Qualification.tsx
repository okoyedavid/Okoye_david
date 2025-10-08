"use client";

export default function Qualifications() {
  return (
    <section className="qualification section py-16 bg-black">
      <h2 className="section-title text-4xl font-bold text-center text-white mb-12 tracking-tight">
        Qualifications
      </h2>

      <div className="qualification-container max-w-6xl mx-auto grid gap-12 md:grid-cols-3 px-6">
        {/* Education Section */}
        <div className="education">
          <h3 className="qualification-title flex items-center text-2xl font-semibold text-gray-200 mb-6">
            <i className="uil uil-graduation-cap mr-2 text-red-600"></i>{" "}
            Education
          </h3>

          <div className="timeline relative pl-8 before:content-[''] before:absolute before:left-2 before:top-0 before:h-full before:w-1 before:bg-red-300">
            <div className="timeline-item mb-8 group transition-all duration-500">
              <div className="circle-dot absolute left-0 w-4 h-4 bg-red-600 rounded-full mt-1 group-hover:bg-red-400 transition-colors"></div>
              <h3 className="timeline-title text-lg font-medium text-white group-hover:text-red-400 transition-colors">
                Government Secondary School Pyakasa, (Abuja, Nigeria)
              </h3>
              <p className="timeline-text text-gray-400 mt-1">
                Senior School Certificate
              </p>
              <span className="timeline-date flex items-center text-sm text-gray-500 mt-2">
                <i className="uil uil-calendar-alt mr-1"></i> 2017 - 2020
              </span>
            </div>

            <div className="timeline-item mb-8 group transition-all duration-500">
              <div className="circle-dot absolute left-0 w-4 h-4 bg-red-600 rounded-full mt-1 group-hover:bg-red-400 transition-colors"></div>
              <h3 className="timeline-title text-lg font-medium text-white group-hover:text-red-400 transition-colors">
                Enugu State University (Agbani, Enugu)
              </h3>
              <p className="timeline-text text-gray-400 mt-1">
                Bachelor in Science, Computer Science
              </p>
              <span className="timeline-date flex items-center text-sm text-gray-500 mt-2">
                <i className="uil uil-calendar-alt mr-1"></i> 2022 - Present
              </span>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="experience">
          <h3 className="qualification-title flex items-center text-2xl font-semibold text-gray-200 mb-6">
            <i className="uil uil-suitcase mr-2 text-red-600"></i> Experience
          </h3>

          <div className="timeline relative pl-8 before:content-[''] before:absolute before:left-2 before:top-0 before:h-full before:w-1 before:bg-red-300">
            <div className="timeline-item mb-8 group transition-all duration-500">
              <div className="circle-dot absolute left-0 w-4 h-4 bg-red-600 rounded-full mt-1 group-hover:bg-red-400 transition-colors"></div>
              <h3 className="timeline-title text-lg font-medium text-white group-hover:text-red-400 transition-colors">
                Brown Valley Partners (Abuja, Nigeria)
              </h3>
              <p className="timeline-text text-gray-400 mt-1">
                Data Entry Officer
              </p>
              <span className="timeline-date flex items-center text-sm text-gray-500 mt-2">
                <i className="uil uil-calendar-alt mr-1"></i> 2021 - 2022
              </span>
            </div>

            <div className="timeline-item mb-8 group transition-all duration-500">
              <div className="circle-dot absolute left-0 w-4 h-4 bg-red-600 rounded-full mt-1 group-hover:bg-red-400 transition-colors"></div>
              <h3 className="timeline-title text-lg font-medium text-white group-hover:text-red-400 transition-colors">
                Owlet Group
              </h3>
              <p className="timeline-text text-gray-400 mt-1">
                Social Media Nano Influencer
              </p>
              <span className="timeline-date flex items-center text-sm text-gray-500 mt-2">
                <i className="uil uil-calendar-alt mr-1"></i> 2022 - 2024
              </span>
            </div>

            <div className="timeline-item mb-8 group transition-all duration-500">
              <div className="circle-dot absolute left-0 w-4 h-4 bg-red-600 rounded-full mt-1 group-hover:bg-red-400 transition-colors"></div>
              <h3 className="timeline-title text-lg font-medium text-white group-hover:text-red-400 transition-colors">
                Assetium
              </h3>
              <p className="timeline-text text-gray-400 mt-1">
                Contract Developer
              </p>
              <span className="timeline-date flex items-center text-sm text-gray-500 mt-2">
                <i className="uil uil-calendar-alt mr-1"></i> March 2025 - April
                2025
              </span>
            </div>

            <div className="timeline-item mb-8 group transition-all duration-500">
              <div className="circle-dot absolute left-0 w-4 h-4 bg-red-600 rounded-full mt-1 group-hover:bg-red-400 transition-colors"></div>
              <h3 className="timeline-title text-lg font-medium text-white group-hover:text-red-400 transition-colors">
                Raadaa Partners International (Utako, Abuja)
              </h3>
              <p className="timeline-text text-gray-400 mt-1">
                Front End Developer
              </p>
              <span className="timeline-date flex items-center text-sm text-gray-500 mt-2">
                <i className="uil uil-calendar-alt mr-1"></i> March 2025 -
                Present
              </span>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="certifications">
          <h3 className="qualification-title flex items-center text-2xl font-semibold text-gray-200 mb-6">
            <i className="uil uil-award mr-2 text-red-600"></i> Certifications
          </h3>

          <div className="timeline relative pl-8 before:content-[''] before:absolute before:left-2 before:top-0 before:h-full before:w-1 before:bg-red-300">
            <div className="timeline-item mb-8 group transition-all duration-500">
              <div className="circle-dot absolute left-0 w-4 h-4 bg-red-600 rounded-full mt-1 group-hover:bg-red-400 transition-colors"></div>
              <h3 className="timeline-title text-lg font-medium text-white group-hover:text-red-400 transition-colors">
                FreeCodeCamp - Responsive Web Design
              </h3>
              <p className="timeline-text text-gray-400 mt-1">
                HTML, CSS, JavaScript, Bootstrap
              </p>
            </div>

            <div className="timeline-item mb-8 group transition-all duration-500">
              <div className="circle-dot absolute left-0 w-4 h-4 bg-red-600 rounded-full mt-1 group-hover:bg-red-400 transition-colors"></div>
              <h3 className="timeline-title text-lg font-medium text-white group-hover:text-red-400 transition-colors">
                CodeWithMosh - React: Beginner to Pro
              </h3>
              <p className="timeline-text text-gray-400 mt-1">React Classes</p>
            </div>

            <div className="timeline-item mb-8 group transition-all duration-500">
              <div className="circle-dot absolute left-0 w-4 h-4 bg-red-600 rounded-full mt-1 group-hover:bg-red-400 transition-colors"></div>
              <h3 className="timeline-title text-lg font-medium text-white group-hover:text-red-400 transition-colors">
                FreeCodeCamp - JavaScript Algorithms and Data Structures
              </h3>
              <p className="timeline-text text-gray-400 mt-1">
                Redux, Regex, Reducers, State Management
              </p>
            </div>

            <div className="timeline-item mb-8 group transition-all duration-500">
              <div className="circle-dot absolute left-0 w-4 h-4 bg-red-600 rounded-full mt-1 group-hover:bg-red-400 transition-colors"></div>
              <h3 className="timeline-title text-lg font-medium text-white group-hover:text-red-400 transition-colors">
                Ultimate React Course
              </h3>
              <p className="timeline-text text-gray-400 mt-1">
                React, Context API, React-Query, Redux, Next.js, H.O.C
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
