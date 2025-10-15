import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating background elements animation
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          gsap.to(el, {
            y: -30,
            duration: 3 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: index * 0.5,
          });
        }
      });

      // Background parallax effect
      gsap.to(backgroundRef.current, {
        backgroundPosition: "50% 100px",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Initial animations timeline
      const tl = gsap.timeline();

      // Name animation with typewriter effect
      tl.from(nameRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
      })
        .to(nameRef.current, {
          text: "Alex Developer",
          duration: 1.5,
          ease: "none",
        })

        // Tagline typewriter animation
        .from(
          taglineRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .to(taglineRef.current, {
          text: "Full-Stack Innovator Building Human-Centric Web Experiences",
          duration: 2,
          ease: "none",
        })

        // CTA buttons staggered animation
        .from(
          ctaRef.current?.children || [],
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=0.5"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) floatingElementsRef.current[index] = el;
  };

  return (
    <div
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-black to-slate-800"
    >
      {/* Animated Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #1E40AF 0%, transparent 50%), 
                           radial-gradient(circle at 80% 20%, #10B981 0%, transparent 50%), 
                           radial-gradient(circle at 40% 80%, #1E40AF 0%, transparent 50%)`,
        }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            ref={(el) => addToRefs(el, i)}
            className={`absolute w-4 h-4 bg-blue-400 rounded-full opacity-30 ${
              i % 2 === 0 ? "animate-pulse" : ""
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + ((i * 10) % 40)}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Name */}
          <h1
            ref={nameRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
            style={{ minHeight: "1.2em" }}
          />

          {/* Tagline */}
          <p
            ref={taglineRef}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            style={{ minHeight: "2.4em" }}
          />

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              className="group relative overflow-hidden bg-[#1E40AF] hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              size="lg"
            >
              <span className="relative z-10">View Skills</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Button>

            <Button
              variant="outline"
              className="group relative overflow-hidden border-[#10B981] text-[#10B981] hover:bg-[#10B981] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              size="lg"
            >
              <span className="relative z-10">Explore Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white bg-opacity-50 rounded-full animate-pulse mt-2" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
