import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      window.location.href = href;
    }, 50);
  };

  return (
    <header className={`fixed top-7 left-0 right-0 z-50 flex justify-center transition-all duration-300 pointer-events-none px-4 sm:px-6
      ${scrolled || isOpen ? "max-w-[940px] mx-auto" : "max-w-[1140px] mx-auto"}`}
    >
      <nav className="w-full pointer-events-auto rounded-xl overflow-hidden border border-[var(--primary)]/20 bg-[var(--background)]/95 md:bg-[var(--background)]/40 md:glass-strong shadow-[0_0_20px_rgba(0,0,0,0.5)] transform-gpu transition-all duration-300">
        
        {/* Terminal Header Decoration */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 border-b border-[var(--primary)]/10 bg-white/[0.03]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-3 font-mono text-[10px] text-muted-foreground tracking-wider uppercase opacity-80">
            {isOpen ? "EXEC // MENU_NAV" : "aditya@portfolio:~ $"}
          </span>
        </div>

        {/* Main Nav Body */}
        <div className="px-5 py-2.5 flex items-center justify-between">
          <a href="#top" onClick={() => handleNavigation("#top")} className="flex items-center gap-2 group">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-[var(--cyan)] via-[var(--neon)] to-[var(--purple)] text-[10px] font-bold text-background shadow-[0_0_10px_rgba(var(--neon),0.3)] md:group-hover:scale-105 transition-transform duration-300 select-none">
              AN
            </span>
            <span className="font-mono text-sm tracking-wider hidden sm:inline text-foreground select-none">
              <span className="text-[var(--neon)]">$</span> aditya<span className="opacity-60">.dev</span>
              <span className="animate-blink text-[var(--neon)]">_</span>
            </span>
          </a>

          {/* Desktop Menu Links */}
          <ul className="hidden md:flex items-center gap-1 text-sm font-mono">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-[var(--neon)] hover:bg-white/5 transition-colors">
                  <span className="text-[var(--neon)]/60">./</span>{l.label.toLowerCase()}
                </a>
              </li>
            ))}
          </ul>

          {/* Core Menu Right Control Alignment */}
          <div className="flex items-center gap-2">
            {/* Theme Action explicitly claims the structural anchor button slot */}
            <ThemeToggle />

            {/* Mobile Sidebar Hamburger Trigger */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center px-3 py-1.5 font-mono text-[11px] font-bold rounded border border-[var(--neon)]/40 text-[var(--neon)] active:scale-95 transition-all bg-[var(--neon)]/5"
            >
              <span>{isOpen ? "SYS_CLOSE" : "SYS_MENU"}</span>
            </button>
          </div>
        </div>

        {/* Mobile Sidebar Navigation Target Drawers */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "circOut" }}
              className="w-full bg-[var(--background)]/98 border-t border-[var(--primary)]/10 md:hidden transform-gpu"
            >
              <ul className="flex flex-col gap-1 p-4 font-mono text-sm uppercase tracking-widest">
                {links.map((l) => (
                  <li key={l.href}>
                    <a 
                      href={l.href} 
                      onClick={() => handleNavigation(l.href)}
                      className="flex items-center px-4 py-3 rounded-lg text-muted-foreground hover:text-[var(--neon)] hover:bg-[var(--neon)]/5 transition-all border border-transparent hover:border-[var(--neon)]/10"
                    >
                      <span className="text-[var(--neon)] mr-4 opacity-70 font-bold">&gt;</span>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}