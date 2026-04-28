"use client";

import { useEffect, useRef, useState } from "react";
import skillCategories from "../data/skills";

const LEVEL_LABEL = ["Learning", "Familiar", "Comfortable", "Proficient", "Expert"] as const;

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [fired, setFired] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFired(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
      {skillCategories.map((cat) => (
        <div key={cat.label} className="flex flex-col gap-3">
          <h3
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: cat.color }}
          >
            {cat.label}
          </h3>
          <div className="flex flex-col gap-2.5">
            {cat.skills.map(({ name, level }, i) => (
              <div key={name} className="flex items-center gap-3">
                <span className="text-sm text-zinc-600 dark:text-zinc-400 w-44 shrink-0 truncate">
                  {name}
                </span>
                <div className="flex-1 h-1 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: fired ? `${(level / 5) * 100}%` : "0%",
                      backgroundColor: cat.color,
                      transitionDelay: fired ? `${i * 70}ms` : "0ms",
                    }}
                  />
                </div>
                <span className="text-xs text-zinc-400 dark:text-zinc-500 w-20 shrink-0 text-right">
                  {LEVEL_LABEL[level - 1]}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
