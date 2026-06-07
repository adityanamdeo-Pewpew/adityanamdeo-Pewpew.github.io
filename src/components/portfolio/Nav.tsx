import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-7 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${scrolled ? "w-[min(900px,92vw)]" : "w-[min(1100px,94vw)]"}`}>
      <nav className="glass-strong rounded-xl overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-1.5 border-b border-white/5 bg-white/[0.02]">
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.62_0.2_22)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.16_75)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.16_145)]" />
          <span className="ml-3 font-mono text-[10px] text-muted-foreground tracking-wider">~/aditya — zsh — 80×24</span>
        </div>
        <div className="px-5 py-2.5 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-[var(--cyan)] via-[var(--neon)] to-[var(--purple)] text-[10px] font-bold text-background animate-pulse-glow">
              AN
            </span>
            <span className="font-mono text-sm tracking-wider hidden sm:inline">
              <span className="text-[var(--neon)]">$</span> aditya<span className="text-[var(--cyan)]">.dev</span>
              <span className="animate-blink text-[var(--neon)]">_</span>
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-1 text-sm font-mono">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-[var(--cyan)] hover:bg-white/5 transition-colors">
                  <span className="text-[var(--neon)]/60">./</span>{l.label.toLowerCase()}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="#contact" className="relative inline-flex items-center gap-2 rounded-md px-4 py-2 text-xs font-mono font-semibold bg-gradient-to-r from-[var(--neon)] to-[var(--purple)] text-background hover:scale-105 transition-transform">
              <span>$ hire --me</span>
              <span className="hidden sm:inline">→</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
