"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { sections } from "../app/data/data";
import { useTypewriter } from "../app/utils";
import { useMediaQuery } from "react-responsive";
import FuzzyText from "@/components/FuzzyText";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  // const nameRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const skillsSection02Ref = useRef<HTMLDivElement>(null);
  const skillsSection03Ref = useRef<HTMLDivElement>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Social links animation
      gsap.from(".social-link", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Intro section animation
      gsap.from(introRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Services section animation (01)
      gsap.from(servicesRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Skills section 02 animation
      gsap.from(skillsSection02Ref.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: skillsSection02Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Skills section 03 animation
      gsap.from(skillsSection03Ref.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: skillsSection03Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Service items animation
      gsap.from(".service-item", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".services-list",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Skills items animations
      gsap.from(".skill-item-02", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".skills-list-02",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".skill-item-03", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".skills-list-03",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onReady = () => {
      const startValue = isMobile ? "top top" : "top top";
      const endValue = isMobile ? "120% top" : "bottom top";

      gsap
        .timeline({
          scrollTrigger: {
            trigger: video,
            start: startValue,
            end: endValue,
            scrub: true,
            pin: true,
          },
        })
        .to(video, {
          currentTime: video.duration,
          ease: "none",
        });
    };

    if (video.readyState >= 1) {
      onReady(); // already loaded
    } else {
      video.addEventListener("loadedmetadata", onReady);
      return () => video.removeEventListener("loadedmetadata", onReady);
    }
  }, [isMobile]);

  const textRef = useRef<HTMLHeadingElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    tl.current = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });
    phrases.forEach((phrase, i) => {
      const div = document.createElement("div");
      div.textContent = phrase;
      div.style.position = "absolute";
      div.style.opacity = "0";
      div.style.transform = "translateY(20px)";
      el.appendChild(div);

      tl.current!.to(div, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });
      tl.current!.to(div, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        delay: 1.8,
        ease: "power2.inOut",
        onComplete: () => {
          if (i === phrases.length - 1) return;
          div.remove(); // clean up after fade-out
        },
      });
    });
  }, []);

  const { text: heroType, blink } = useTypewriter(
    [
      "Full‑stack Developer",
      "Building Performance-focused",
      "Accessible, and Scalable Apps",
    ],
    100,
    30
  );

  return (
    <div
      ref={containerRef}
      className={`min-h-screen
      dark:bg-black dark:text-white bg-white text-black
       transition-colors duration-300`}
    >
      <section className="relative min-h-screen overflow-hidden">
        <div className="relative z-10 max-w-6xl container mx-auto px-4 flex flex-col justify-center h-screen py-20 md:py-0">
          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={0.3}
            enableHover={true}
          >
            Okoye David
          </FuzzyText>{" "}
          <h1
            className="text-3xl flex text-center sm:text-6xl  font-extrabold leading-none mb-6 md:mb-8 font-mono"
            style={{ minWidth: "fit-content", display: "inline-block" }}
          >
            <span className="text-red-500 block md:inline max-w-lg">
              {heroType}{" "}
              <span
                className={`inline-block text-white ml-1 ${
                  blink ? "opacity-100" : "opacity-0"
                } transition-opacity duration-150`}
              >
                |
              </span>
            </span>
          </h1>
          <div className="mb-8 md:mb-12 mx-auto max-w-xl">
            <p className="text-lg text-center md:text-xl lg:text-2xl dark:text-gray-300 text-gray-600">
              Perfection is not attainable, but if we chase perfection, we can
              catch excellence{" "}
              <span className="text-red-500 italic">- {"Vince Lombardi"}</span>
            </p>
          </div>
          <a
            href="#services"
            className="inline-block max-w-xs mx-auto px-6 py-3 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
          >
            Explore My Work
          </a>
        </div>

        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            src="/output.mp4" // Consider adding sources for different formats/resolutions
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Intro Section */}
      <section
        ref={introRef}
        className="py-20 bg-black/40 backdrop-blur-md px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          <div className="mb-8">
            <span
              className="text-sm uppercase tracking-wider
              dark:text-red-500 text-blue-600
               font-semibold"
            >
              {"// Intro"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-8">
            I&apos;m a versatile{" "}
            <span className="dark:text-red-500 text-blue-600">
              engineer who
            </span>
            <br />
            <span className="dark:text-red-500 text-blue-600">
              builds scalable solutions and turns ideas into
            </span>
            <br />
            <span className="dark:text-red-500 text-blue-600">
              real applications.
            </span>
            I focus on clean code,
            <br />
            modern architecture, and exceptional user experiences.
          </h2>
          <div className="max-w-2xl mx-auto lg:mx-0">
            <p
              className={`
               dark:text-gray-400 text-gray-600
               text-lg leading-relaxed mb-8`}
            >
              Specializing in full-stack development with React, Node.js, and
              modern web technologies. I create performant, maintainable
              applications that solve real-world problems with elegant,
              user-focused solutions.
            </p>
            <a
              href="#services"
              className={`inline-flex items-center
              dark:text-white dakr:hover:text-red-400
                  text-black hover:text-blue-600
              transition-colors duration-200`}
            >
              <span
                className={`border-b

                  dark:border-gray-500 dark:hover:border-red-400
                    border-gray-400 hover:border-blue-600
                 transition-colors duration-200`}
              >
                See my Work
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section - 01 */}
      {sections.map((section) => (
        <section
          key={section.number}
          ref={
            section.number === "01"
              ? servicesRef
              : section.number === "02"
              ? skillsSection02Ref
              : skillsSection03Ref
          }
          id="services"
          className="py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <span
                className={`text-sm uppercase tracking-wider
               dark:text-red-500 text-blue-600
               font-semibold`}
              >
                {section.title}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
              {/* Left side - Service Number and Title */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <div
                    className={`text-6xl sm:text-7xl lg:text-8xl font-light
                   dark:text-gray-800 text-gray-200
                   mr-4`}
                  >
                    {section.number}
                  </div>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6">
                  {section.subtitle}
                </h3>
                <p
                  className="
                 dark:text-gray-400 text-gray-600
                 text-lg leading-relaxed max-w-md mx-auto lg:mx-0"
                >
                  {section.description}
                </p>
              </div>

              {/* Right side - Services List */}
              <div className="services-list">
                {section.services.map((service) => (
                  <div
                    key={service.id}
                    className="service-item flex items-center justify-between py-4 border-b

                      dark:border-gray-800 dark:hover:border-gray-600
                      border-gray-200 hover:border-gray-400
                   transition-colors duration-200 group"
                  >
                    <div className="flex items-center space-x-6">
                      <span
                        className="

                        dark:text-gray-500 dark:group-hover:text-red-500
                          text-gray-400 group-hover:text-blue-600
                       text-sm font-mono transition-colors duration-200"
                      >
                        {service.number}
                      </span>
                      <span
                        className={`

                          dark:text-white dark:group-hover:text-red-400
                          text-black group-hover:text-blue-600
                       text-lg transition-colors duration-200`}
                      >
                        {service.name}
                      </span>
                    </div>
                    <span
                      className="

                      dark:text-gray-500 dark:group-hover:text-red-500
                        text-gray-400 group-hover:text-blue-600
                     text-sm font-mono transition-colors duration-200"
                    >
                      {service.number}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

const phrases = [
  "Hi I'm David",
  "A Full-stack Web Developer",
  "I build interactive fully functional Web Apps",
  "Performance-focused",
  "Accessible, and Scalable Apps",
];
