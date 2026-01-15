"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "moonlight";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("moonlight");

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem("theme") : null;
    const initial: Theme = (saved === "light" || saved === "moonlight") ? (saved as Theme) : ((window.matchMedia?.("(prefers-color-scheme: light)").matches) ? "light" : "moonlight");
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial === "light" ? "light" : "moonlight");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "light" ? "moonlight" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="ml-2 px-3 py-1 rounded bg-[#1e293b] text-[#94a3b8] hover:bg-[#334155] select-none"
    >
      {theme === "light" ? "🌙 Moonlight" : "☀ Light"}
    </button>
  );
}
