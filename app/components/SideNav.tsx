"use client";

import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export default function SideNav() {
  const [active, setActive] = useState<string>("about");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headings = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    // Track which sections are visible and pick the topmost one
    const visible = new Map<string, number>();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.boundingClientRect.top);
          } else {
            visible.delete(entry.target.id);
          }
        }
        if (visible.size > 0) {
          // Pick the section closest to top of viewport
          const topmost = [...visible.entries()].sort((a, b) => a[1] - b[1])[0];
          setActive(topmost[0]);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -60% 0px" }
    );

    for (const el of headings) observerRef.current.observe(el);
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="fixed inset-x-0 top-1/2 -translate-y-1/2 z-50 hidden lg:flex justify-end max-w-5xl mx-auto px-6 pointer-events-none">
    <nav className="flex flex-col gap-6 items-end pointer-events-auto">
      {sections.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center gap-3"
          >
            <span
              className={`text-xs font-medium tracking-widest uppercase transition-all duration-300 ${
                isActive
                  ? "text-zinc-900 dark:text-zinc-100 opacity-100"
                  : "text-zinc-400 dark:text-zinc-600 opacity-0 group-hover:opacity-100"
              }`}
            >
              {label}
            </span>
            <span
              className={`block h-px transition-all duration-300 ${
                isActive
                  ? "w-8 bg-zinc-900 dark:bg-zinc-100"
                  : "w-4 bg-zinc-400 dark:bg-zinc-600 group-hover:w-6"
              }`}
            />
          </a>
        );
      })}
    </nav>
    </div>
  );
}
