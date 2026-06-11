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

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      window.location.href = href;
    }, 50);
  };

  return (
    <header className={`fixed top-7 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 will-change-transform ${scrolled || isOpen ? "w-[min(900px,92vw)]" : "w-[min(1100px,94vw)]"}`}>
      {/* 
        FIX: Using your theme's exact variables.
        - bg-[var(--background)] ensures it matches your site's dark navy/black exactly.
        - border-[var(--primary)]/20 adds the subtle red neon glow to the edges.
      */}
      <nav className="rounded-xl overflow-hidden border border-[var(--primary)]/20 bg-[var(--background)]/95 md:bg-[var(--background)]/40 md:glass-strong shadow-[0_0_20px_rgba(0,0,0,0.5)] transform-gpu transition-all duration-300">
        
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
          <a href="#top" onClick={(e) => handleNavigation(e, "#top")} className="flex items-center gap-2 group">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-[var(--cyan)] via-[var(--neon)] to-[var(--purple)] text-[10px] font-bold text-background animate-pulse-glow shadow-[0_0_10px_rgba(var(--neon),0.3)]">
              AN
            </span>
            <span className="font-mono text-sm tracking-wider hidden sm:inline text-foreground">
              <span className="text-[var(--neon)]">$</span> aditya<span className="opacity-60">.dev</span>
              <span className="animate-blink text-[var(--neon)]">_</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-1 text-sm font-mono">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-[var(--neon)] hover:bg-white/5 transition-colors">
                  <span className="text-[var(--neon)]/60">./</span>{l.label.toLowerCase()}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            
            {/* Desktop Action */}
            <a href="#contact" className="hidden md:relative md:inline-flex items-center gap-2 rounded-md px-4 py-2 text-xs font-mono font-semibold bg-gradient-to-r from-[var(--neon)] to-[var(--purple)] text-background hover:scale-105 transition-transform shadow-[0_0_15px_rgba(var(--neon),0.4)]">
              <span>$ hire --me</span>
              <span>→</span>
            </a>

            {/* Mobile Trigger Button using your Neon Red */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center px-3 py-1.5 font-mono text-[11px] font-bold rounded border border-[var(--neon)]/40 text-[var(--neon)] active:scale-95 transition-all bg-[var(--neon)]/5"
            >
              <span>{isOpen ? "SYS_CLOSE" : "SYS_MENU"}</span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel - Matching your dark terminal theme */}
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
                      onClick={(e) => handleNavigation(e, l.href)}
                      className="flex items-center px-4 py-3 rounded-lg text-muted-foreground hover:text-[var(--neon)] hover:bg-[var(--neon)]/5 transition-all border border-transparent hover:border-[var(--neon)]/10"
                    >
                      <span className="text-[var(--neon)] mr-4 opacity-70 font-bold">&gt;</span>
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="mt-4 px-2 pb-4">
                  <a 
                    href="#contact" 
                    onClick={(e) => handleNavigation(e, "#contact")}
                    className="flex justify-center items-center w-full py-4 rounded-lg bg-gradient-to-r from-[var(--neon)] to-[var(--purple)] text-background text-[11px] font-black tracking-widest shadow-[0_0_25px_rgba(var(--neon),0.3)]"
                  >
                    $ INITIATE_TRANSMISSION
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}