"use client";
import { useEffect, useState } from "react";

export default function CodeTyping({
  code,
  current,
}: {
  code: string[];
  current: boolean;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (!current) return;
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);

    // Typing effect
    const typingInterval = setInterval(() => {
      if (currentLine < code.length) {
        const currentCodeLine = code[currentLine];

        if (charIndex < currentCodeLine.length) {
          // Add next character
          setDisplayedText((prev) => prev + currentCodeLine[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          // Move to next line
          setDisplayedText((prev) => prev + "\n");
          setCurrentLine((prev) => prev + 1);
          setCharIndex(0);
        }
      } else {
        // Stop typing when done
        clearInterval(typingInterval);
      }
    }, 40); // Adjust typing speed here (lower is faster)

    return () => {
      clearInterval(cursorInterval);
      clearInterval(typingInterval);
    };
  }, [currentLine, charIndex, current]);

  return (
    <div className="bg-[#0d1117] text-gray-100 font-mono p-2 md:p-6 md:min-w-2xl rounded-xl shadow-lg border border-red-500 w-auto mx-auto">
      <div className="flex items-center space-x-2 mb-4">
        <span className="w-3 h-3 bg-red-500 rounded-full" />
        <span className="w-3 h-3 bg-yellow-500 rounded-full" />
        <span className="w-3 h-3 bg-green-500 rounded-full" />
      </div>

      <pre className="text-xs sm:text-base text-wrap leading-relaxed">
        <code>
          {displayedText}
          <span
            className={`${
              blink ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300`}
          >
            |
          </span>
        </code>
      </pre>
    </div>
  );
}
