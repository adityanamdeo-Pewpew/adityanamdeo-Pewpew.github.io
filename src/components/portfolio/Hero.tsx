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

function useTypewriter() {
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
      else if (deleting && next === "") { setDeleting(false); setI((i + 1) % roles.length); }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);
  return text;
}

export function Hero() {
  const typed = useTypewriter();
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[var(--neon)]/20 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-[var(--purple)]/20 blur-[120px] animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative max-w-7xl w-full grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 text-xs font-mono">
            <span className="h-2 w-2 rounded-full bg-[var(--cyan)] animate-pulse" />
            Available for freelance · 2026
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Building scalable<br />
            <span className="neon-text animate-glitch animate-text-glow inline-block">digital experiences</span><br />
            for the future.
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="mt-6 font-mono text-lg sm:text-xl text-muted-foreground h-7">
            <span className="text-[var(--neon)]">$</span> <span className="text-foreground">{typed}</span><span className="animate-blink text-[var(--cyan)]">▍</span>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="mt-6 max-w-xl text-muted-foreground text-base sm:text-lg leading-relaxed">
            I'm Aditya Namdeo — transforming ideas into powerful web applications with Java, Spring Boot, React, and modern web technologies.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-gradient-to-r from-[var(--neon)] to-[var(--purple)] text-background overflow-hidden">
              <span className="relative z-10">View Projects</span>
              <span className="relative z-10">→</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-white/30" />
            </a>
            <a href="#contact" className="glass-strong rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors">Hire Me</a>
            <a href="#" className="glass rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors">Download Resume ↓</a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "20+", l: "Projects" },
              { v: "2027", l: "Graduating" },
              { v: "∞", l: "Curiosity" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl sm:text-3xl font-bold neon-text">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1 font-mono uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.3 }}
          className="relative mx-auto w-full max-w-md aspect-[4/5]">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[var(--neon)] via-[var(--purple)] to-[var(--cyan)] opacity-60 blur-2xl animate-pulse-glow" />
          <div className="relative h-full w-full glass-strong rounded-3xl overflow-hidden">
            <img src={portrait} alt="Aditya Namdeo, full-stack Java developer" width={768} height={896} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px]">
              <span className="glass rounded-full px-3 py-1">aditya.exe</span>
              <span className="glass rounded-full px-3 py-1 text-[var(--cyan)]">● online</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl px-4 py-3">
              <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">Currently</div>
              <div className="text-sm font-semibold mt-0.5 whitespace-pre-line">BCA · 2nd Year · Sagar{"\n"}</div>
            </div>
            <div className="pointer-events-none absolute -top-px left-0 right-0 h-px overflow-hidden">
              <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-[var(--cyan)] to-transparent" style={{ animation: "shimmer-line 3s linear infinite" }} />
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 glass-strong rounded-2xl px-4 py-3 font-mono text-xs animate-float" style={{ animationDelay: "0.5s" }}>
            <div className="text-[var(--neon)]">{"<SpringBoot/>"}</div>
          </div>
          <div className="absolute -top-6 -right-6 glass-strong rounded-2xl px-4 py-3 font-mono text-xs animate-float">
            <div className="text-[var(--purple)]">{"{ React }"}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
