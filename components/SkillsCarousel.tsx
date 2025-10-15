import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  category: string;
  level: number;
}

const skills: Skill[] = [
{ name: 'React', category: 'Frontend', level: 95 },
{ name: 'TypeScript', category: 'Language', level: 90 },
{ name: 'Node.js', category: 'Backend', level: 88 },
{ name: 'Python', category: 'Language', level: 85 },
{ name: 'PostgreSQL', category: 'Database', level: 82 },
{ name: 'AWS', category: 'Cloud', level: 80 },
{ name: 'Docker', category: 'DevOps', level: 78 },
{ name: 'GraphQL', category: 'API', level: 85 },
{ name: 'Next.js', category: 'Framework', level: 92 },
{ name: 'Tailwind', category: 'Styling', level: 95 }];


const SkillsCarousel = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Cards staggered animation
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 80,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      });

      // Continuous floating animation for cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.to(card, {
            y: -10,
            duration: 2 + index % 3 * 0.5,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: index * 0.2
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) cardsRef.current[index] = el;
  };

  return (
    <div ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">

            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building exceptional digital experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {skills.map((skill, index) =>
          <Card
            key={skill.name}
            ref={(el) => addToRefs(el, index)}
            className="group p-6 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105">

              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                <Badge
                variant="secondary"
                className={`text-xs font-medium ${
                skill.category === 'Frontend' ? 'bg-blue-100 text-blue-800' :
                skill.category === 'Backend' ? 'bg-green-100 text-green-800' :
                skill.category === 'Language' ? 'bg-purple-100 text-purple-800' :
                skill.category === 'Database' ? 'bg-orange-100 text-orange-800' :
                skill.category === 'Cloud' ? 'bg-cyan-100 text-cyan-800' :
                skill.category === 'DevOps' ? 'bg-red-100 text-red-800' :
                skill.category === 'API' ? 'bg-indigo-100 text-indigo-800' :
                skill.category === 'Framework' ? 'bg-pink-100 text-pink-800' :
                'bg-yellow-100 text-yellow-800'}`
                }>

                  {skill.category}
                </Badge>
              </div>
              
              <div className="mb-2">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                  className={`h-2 rounded-full transition-all duration-1000 ${
                  skill.level >= 90 ? 'bg-gradient-to-r from-[#1E40AF] to-blue-500' :
                  skill.level >= 80 ? 'bg-gradient-to-r from-[#10B981] to-green-500' :
                  'bg-gradient-to-r from-yellow-400 to-orange-500'}`
                  }
                  style={{ width: `${skill.level}%` }} />

                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-gray-600 hover:text-[#1E40AF] transition-colors duration-300 cursor-pointer group">
            <span className="text-lg font-medium">See all technologies</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>);

};

export default SkillsCarousel;