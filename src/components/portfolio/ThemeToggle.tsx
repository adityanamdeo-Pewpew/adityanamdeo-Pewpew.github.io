import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function getInitial(): Theme {
  if (typeof window === "undefined") return "dark";
  const saved = localStorage.getItem("theme") as Theme | null;
  if (saved === "dark" || saved === "light") return saved;
  return "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const t = getInitial();
    setTheme(t);
    document.documentElement.classList.toggle("light", t === "light");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    
    // 1. ADDED: Tell the browser to temporarily listen for smooth transitions
    document.documentElement.classList.add("theme-transition-active");
    
    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
    localStorage.setItem("theme", next);
    
    // 2. ADDED: Remove the listener right after the 300ms fade finishes to save laptop GPU load
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition-active");
    }, 300);
  };

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-mono border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[var(--neon)]/50 transition-colors"
    >
      <span className="text-[var(--neon)]">$</span>
      <span className="hidden sm:inline">{isDark ? "theme --light" : "theme --dark"}</span>
      <span className="text-base leading-none">{isDark ? "☀" : "☾"}</span>
    </button>
  );
}