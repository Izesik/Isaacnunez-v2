import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Not Found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans px-5 gap-6 text-center">
      <p className="text-7xl font-semibold text-zinc-100 dark:text-zinc-800 select-none">
        404
      </p>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-black dark:text-zinc-50">
          Page not found
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          This page doesn&apos;t exist — or maybe it used to.
        </p>
      </div>
      <Link
        href="/"
        className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back home
      </Link>
    </div>
  );
}
