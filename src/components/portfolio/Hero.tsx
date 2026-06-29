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
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center px-6 pt-24 sm:pt-32 pb-20 overflow-hidden bg-[var(--background)]">
      
      {/* PERFORMANCE UPGRADE: 
        - The grid background layer is restricted on mobile devices ('hidden md:block')
        - This prevents heavy canvas mask redraw lag during touch-scrolling phases.
      */}
      <div className="hidden md:block absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      
      {/* PERFORMANCE UPGRADE:
        - Massive blur filters are hidden on mobile layouts ('hidden md:block') to completely stop UI rendering delays.
        - Desktop environments keep full dynamic floating behavior intact.
      */}
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
            
            {/* UPDATED: Directly serves and downloads your asset file from the /public folder path root */}
            <a 
              href="/Aditya_Namdeo_Resume.pdf" 
              download="Aditya_Namdeo_Resume.pdf" 
              className="glass rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10 text-center transition-colors cursor-pointer"
            >
              Download Resume ↓
            </a>
          </motion.div>

          {/* Metrics Rows */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-md border-t border-zinc-500/10 dark:border-white/5 pt-6 select-none"
          >
            {[
              { v: "20+", l: "Projects" },
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
          {/* Neon shadow wrapper is shifted via standard classes on mobile to save frame rates */}
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
            
            {/* Shimmer layout line runs on desktop profiles safely */}
            <div className="pointer-events-none absolute -top-px left-0 right-0 h-px overflow-hidden hidden md:block">
              <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-[var(--cyan)] to-transparent" style={{ animation: "shimmer-line 3s linear infinite" }} />
            </div>
          </div>

          {/* Technology Badges: Float animation is locked strictly to desktop viewports to eliminate frame micro-stuttering */}
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