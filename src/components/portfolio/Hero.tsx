import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import portrait from "../../assets/aditya-portrait.jpg";

const roles = [
  "Full-Stack Developer",
  "Spring Boot Engineer",
  "React Developer",
  "Freelancer",
  "Aspiring Entrepreneur",
];

// TYPEWRITER COMPONENT: Isolated to protect parent layout tracking mechanics
function TypewriterText() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[i];
    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      const next = deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1);
      setText(next);
      if (!deleting && next === current) setTimeout(() => setDeleting(true), 1400);
      else if (deleting && next === "") { 
        setDeleting(false); 
        setI((prev) => (prev + 1) % roles.length); 
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return <span className="text-foreground">{text}</span>;
}

export function Hero() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Update these target strings with your personal account URLs!
  const socialLinks = [
    { 
      name: "GitHub", 
      url: "https://github.com/adityanamdeo-Pewpew", 
      hoverColor: "hover:text-white hover:border-white/40",
      svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    },
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/aditya-namdeo-aa21b5368/", 
      hoverColor: "hover:text-[var(--cyan)] hover:border-[var(--cyan)]/40 hover:shadow-[0_0_10px_rgba(6,182,212,0.2)]",
      svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
    },
    { 
      name: "Instagram", 
      url: "https://www.instagram.com/guy.specs/", 
      hoverColor: "hover:text-[var(--purple)] hover:border-[var(--purple)]/40 hover:shadow-[0_0_10px_rgba(168,85,247,0.2)]",
      svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
    },
    { 
      name: "X", 
      url: "https://x.com/Aditya_Namdeo_", 
      hoverColor: "hover:text-white hover:border-white/40",
      svg: <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    },
    { 
      name: "Email", 
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=anni.namdeo@gmail.com", 
      hoverColor: "hover:text-[var(--neon)] hover:border-[var(--neon)]/40 hover:shadow-[0_0_10px_rgba(239,68,68,0.2)]",
      svg: <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
    },
  ];

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center px-6 pt-24 sm:pt-32 pb-20 overflow-hidden bg-[var(--background)]">
      
      <div className="hidden md:block absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      
      <div className="hidden md:block absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[var(--neon)]/20 blur-[120px] animate-float" />
      <div className="hidden md:block absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-[var(--purple)]/20 blur-[120px] animate-float" style={{ animationDelay: "1.5s" }} />

      {/* Main Core Flex/Grid Wrapper with Hardware Layer Hooks */}
      <div className="relative max-w-7xl w-full grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-8 items-center transform-gpu will-change-transform z-10">
        
        {/* Left Typography Block */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5 text-xs font-mono select-none"
          >
            <span className="h-2 w-2 rounded-full bg-[var(--cyan)] animate-pulse" />
            Available for freelance · 2026
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-foreground"
          >
            Building scalable<br className="hidden sm:block" />
            <span className="neon-text inline-block py-1">digital experiences</span><br />
            for the future.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3 }}
            className="mt-5 font-mono text-base sm:text-xl text-muted-foreground h-7 flex items-center justify-center lg:justify-start"
          >
            <span className="text-[var(--neon)] mr-1.5">$</span> 
            <TypewriterText />
            <span className="animate-blink text-[var(--cyan)] font-bold ml-0.5">▍</span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.4 }}
            className="mt-5 max-w-xl text-muted-foreground text-sm sm:text-lg leading-relaxed px-2 sm:px-0"
          >
            I'm Aditya Namdeo — transforming ideas into powerful web applications with Java, Spring Boot, React, and modern web technologies.
          </motion.p>

          {/* Action Button Strip */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 w-full sm:w-auto px-4 sm:px-0"
          >
            <a href="#projects" className="group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-gradient-to-r from-[var(--neon)] to-[var(--purple)] text-background overflow-hidden transform-gpu text-center">
              <span className="relative z-10">View Projects</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-white/30 hidden md:block" />
            </a>
            <a href="#contact" className="glass-strong rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10 text-center transition-colors">
              Hire Me
            </a>
            
            <a 
              href="/Aditya_Namdeo_Resume.pdf" 
              download="Aditya_Namdeo_Resume.pdf" 
              className="glass rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10 text-center transition-colors cursor-pointer"
            >
              Download Resume ↓
            </a>
          </motion.div>

          {/* ADDED: Connected Network Node Row directly under navigation targets */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="mt-6 flex items-center justify-center lg:justify-start gap-2.5 px-4 sm:px-0 w-full"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
                className={`w-9 h-9 rounded-full border border-foreground/10 dark:border-white/5 bg-foreground/[0.02] dark:bg-white/[0.02] backdrop-blur-md flex items-center justify-center text-muted-foreground transition-all duration-300 ${link.hoverColor}`}
              >
                {link.svg}
              </a>
            ))}
          </motion.div>

          {/* Metrics Rows */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.6 }}
            className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-md border-t border-zinc-500/10 dark:border-white/5 pt-6 select-none"
          >
            {[
              { v: "8+", l: "Core Stacks" }, // Replaced "20+ Projects" with an alternative premium engineer metric
              { v: "2027", l: "Graduating" },
              { v: "∞", l: "Curiosity" },
            ].map((s) => (
              <div key={s.l} className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold neon-text tracking-tight">{s.v}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 font-mono uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Portrait Image Frame Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 lg:order-2 relative mx-auto w-full max-w-[320px] sm:max-w-md aspect-[4/5] transform-gpu mt-4 lg:mt-0"
        >
          <div className="absolute -inset-2 sm:-inset-4 rounded-3xl bg-gradient-to-br from-[var(--neon)] via-[var(--purple)] to-[var(--cyan)] opacity-40 sm:opacity-60 blur-xl sm:blur-2xl md:animate-pulse-glow" />
          
          <div className="relative h-full w-full glass-strong rounded-3xl overflow-hidden border border-zinc-200/50 dark:border-white/10">
            <img 
              src={portrait} 
              alt="Aditya Namdeo, full-stack Java developer" 
              width={768} 
              height={896} 
              className="h-full w-full object-cover transform-gpu" 
              property="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] select-none pointer-events-none">
              <span className="glass rounded-full px-3 py-1 bg-background/40 backdrop-blur-md">aditya.exe</span>
              <span className="glass rounded-full px-3 py-1 bg-background/40 backdrop-blur-md text-[var(--cyan)] font-bold">● online</span>
            </div>
            
            <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl px-4 py-3 bg-background/40 backdrop-blur-md border border-white/5 pointer-events-none">
              <div className="font-mono text-[9px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Currently</div>
              <div className="text-xs sm:text-sm font-semibold mt-0.5 text-foreground">BCA · 2nd Year · Sagar</div>
            </div>
            
            <div className="pointer-events-none absolute -top-px left-0 right-0 h-px overflow-hidden hidden md:block">
              <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-[var(--cyan)] to-transparent" style={{ animation: "shimmer-line 3s linear infinite" }} />
            </div>
          </div>

          <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 glass-strong rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 font-mono text-[10px] sm:text-xs border border-white/5 bg-background/60 backdrop-blur-md md:animate-float" style={{ animationDelay: "0.5s" }}>
            <div className="text-[var(--neon)] font-bold">{"<SpringBoot/>"}</div>
          </div>
          <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 glass-strong rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 font-mono text-[10px] sm:text-xs border border-white/5 bg-background/60 backdrop-blur-md md:animate-float">
            <div className="text-[var(--purple)] font-bold">{"{ React }"}</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}