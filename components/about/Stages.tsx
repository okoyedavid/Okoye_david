import { stages } from "@/app/data/data";
import CodeTyping from "./codeTyping";
import { RefObject } from "react";

export default function Stages({
  codeRefs,
  inViews,
  addToSectionsRef,
}: {
  addToSectionsRef: (el: HTMLDivElement | null, index: number) => void;
  inViews: boolean[];
  codeRefs: RefObject<(HTMLDivElement | null)[]>;
}) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {stages.map((phase, index) => (
          <div
            key={phase.number}
            ref={(el) => addToSectionsRef(el, index)}
            className="mb-24 max-w-screen last:mb-0"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <span
                    className="text-6xl sm:text-7xl lg:text-8xl font-light 
                      dark:text-gray-800 text-gray-200
                    mr-4"
                  >
                    {phase.number}
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 text-red-500">
                  {phase.title}
                </h3>
                <p
                  className="
                    dark:text-gray-400 text-gray-600
                   text-lg leading-relaxed max-w-md mx-auto lg:mx-0"
                >
                  {phase.description}
                </p>
              </div>

              <div
                ref={(el) => {
                  codeRefs.current[index] = el;
                }}
              >
                <CodeTyping current={inViews[index]} code={phase.code} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
