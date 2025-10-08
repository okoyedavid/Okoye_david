import { useEffect, useState } from "react";

export function useTypewriter(
  words: string[] = [],
  speed: number = 80,
  pause: number = 10
) {
  const [index, setIndex] = useState(0); // word index
  const [subIndex, setSubIndex] = useState(0); // substring index
  const [blink, setBlink] = useState(true);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    // blink cursor
    const int = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(int);
  }, []);

  useEffect(() => {
    if (!words.length) return;
    if (subIndex === words[index].length + 1 && forward) {
      // pause at full word
      const timeout = setTimeout(() => setForward(false), pause);
      return () => clearTimeout(timeout);
    }
    if (subIndex === 0 && !forward) {
      // move to next word
      const timeout = setTimeout(() => {
        setForward(true);
        setIndex((i) => (i + 1) % words.length);
      }, 200);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((s) => s + (forward ? 1 : -1));
      },
      forward ? speed : speed / 2
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, forward, words, speed, pause]);

  const text = words.length ? words[index].slice(0, Math.max(0, subIndex)) : "";
  return { text, blink };
}
