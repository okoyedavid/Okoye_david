"use client";
import Stages from "@/components/about/Stages";
import Stats from "@/components/about/stats";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { stages } from "../data/data";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
      });

      // Skills sections animation
      gsap.from(sectionsRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-container",
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      });

      // Skill items animation
      gsap.from(".skill-item", {
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".skills-container",
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToSectionsRef = (el: HTMLDivElement | null, index: number) => {
    if (el) sectionsRef.current[index] = el;
  };

  const codeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [inViews, setInViews] = useState<boolean[]>(stages.map(() => false));

  useEffect(() => {
    const observers = codeRefs.current.map((el, index) => {
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setInViews((prev) => {
            const newViews = [...prev];
            newViews[index] = entry.isIntersecting;
            return newViews;
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`min-h-screen dark:bg-black pt-20 md:pt-2 dark:text-white bg-white text-black
       transition-colors duration-300`}
    >
      {/* Hero Section */}
      <div className="max-w-7xl min-h-screen grid grid-cols-1 md:grid-cols-2 mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          ref={heroRef}
          className="text-center flex  justify-center flex-col lg:text-left"
        >
          {/* Header */}
          <div className="mb-8">
            <span
              className="text-sm uppercase tracking-wider 
              dark:text-red-500 text-blue-600
               font-semibold"
            >
              {"// About & Skills"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-light leading-none mb-8">
            Full-Stack Developer
          </h1>

          <div className="mb-12">
            <p
              className={`text-xl lg:text-2xl 
                dark:text-gray-400 text-gray-600 mb-2`}
            >
              {"Software engineer"}
            </p>
          </div>

          {/* Bio */}
          <div className="max-w-4xl mx-auto lg:mx-0">
            <p
              className={`
                dark:text-gray-400 text-gray-600 text-lg leading-relaxed mb-8`}
            >
              Passionate full-stack engineer specializing in modern web
              technologies. I build scalable applications with clean
              architecture, focusing on user experience and performance
              optimization across the entire development stack.
            </p>
          </div>
        </div>

        <div className="h-full flex items-center p-8 justify-center">
          <div className="relative rounded-full overflow-hidden aspect-square h-[350px] w-[350px] group border-4 border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.4)]">
            <Image
              fill
              alt="Tecky AaryaN"
              title="Tecky AaryaN"
              src="/me.png"
              className="object-cover Abt-img grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-700"></div>
          </div>
        </div>
      </div>

      <section className="px-6 lg:px-12 bg-transparent relative">
        <div className="max-w-5xl mx-auto text-center">
          {/* Header */}
          <div className="mb-10">
            <h2
              className={`mt-3 text-3xl sm:text-5xl font-semibold dark:text-white text-gray-900`}
            >
              Crafting Reliable and{" "}
              <span className="text-red-500">Scalable Solutions</span>
            </h2>
          </div>

          <Stats />
        </div>
      </section>
      <Stages
        addToSectionsRef={addToSectionsRef}
        codeRefs={codeRefs}
        inViews={inViews}
      />
    </div>
  );
};

export default AboutPage;
