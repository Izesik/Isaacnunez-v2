"use client";

import { useEffect, useState } from "react";

const TITLES = [
  "Software Engineer",
  "Game Developer",
  "Full-Stack Builder",
  "CS Student",
];

const DISPLAY_MS = 2600;
const FADE_MS = 400;

export default function RotatingHeadline() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % TITLES.length);
        setVisible(true);
      }, FADE_MS);
    }, DISPLAY_MS + FADE_MS);

    return () => clearInterval(cycle);
  }, []);

  return (
    <p
      className="text-base text-zinc-500 dark:text-zinc-400 transition-all duration-[400ms]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-6px)",
      }}
    >
      {TITLES[index]}
    </p>
  );
}
