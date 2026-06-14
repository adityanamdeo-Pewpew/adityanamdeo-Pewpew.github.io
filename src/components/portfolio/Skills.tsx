import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Java", level: 92 },
  { name: "Spring Boot", level: 88 },
  { name: "React", level: 70 },
  { name: "JavaScript", level: 86 },
  { name: "MySQL", level: 80 },
  { name: "REST APIs", level: 90 },
  { name: "HTML / CSS", level: 92 },
  { name: "Git / GitHub", level: 84 },
  { name: "Problem Solving", level: 90 },
];

export function Skills() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section id="skills" className="relative px-6 py-20 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-xs text-[var(--neon)] uppercase tracking-[0.3em] mb-3">
          02 / Skills
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-14 max-w-3xl">
          Tools that turn ideas into <span className="neon-text">products.</span>
        </h2>

        <div className="grid gap-12 md:grid-cols-[1fr_1fr] items-center transform-gpu">
          
          {/* Progress Bars */}
          <div className="space-y-4">
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={isDesktop ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                whileInView={isDesktop ? { opacity: 1, x: 0 } : {}}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="mb-1 flex justify-between text-sm">
                  <span className="font-mono">{s.name}</span>
                  <span className="text-muted-foreground">{s.level}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: isDesktop ? 0 : `${s.level}%` }}
                    whileInView={isDesktop ? { width: `${s.level}%` } : {}}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.06, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[var(--cyan)] via-[var(--neon)] to-[var(--purple)]"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Radar Graphics Layout */}
          <div className="relative aspect-square max-w-[340px] md:max-w-none mx-auto w-full transform-gpu">
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-6 rounded-full border border-white/10" />
            <div className="absolute inset-12 rounded-full border border-white/10" />
            <div className="absolute inset-20 rounded-full border border-[var(--cyan)]/30" />
            
            {/* Central Core Element with Fixed Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className={`glass-strong flex h-24 w-24 md:h-28 md:w-28 items-center justify-center rounded-full text-center
                  ${isDesktop ? 'animate-pulse-glow' : 'border border-[var(--primary)]/30'}`}
                style={!isDesktop ? {
                  // FIX: Apply a powerful, hardware-accelerated static neon red drop shadow only on mobile
                  boxShadow: "0 0 25px oklch(0.55 0.21 22 / 0.5)",
                  border: "1px solid oklch(0.55 0.21 22 / 0.4)"
                } : undefined}
              >
                <span className="neon-text font-mono text-xs md:text-sm font-bold">
                  FULL<br />STACK
                </span>
              </div>
            </div>

            {/* Tech Tags */}
            {["Java", "Spring", "React", "MySQL", "REST", "Git", "JS", "HTML"].map((t, i) => {
              const angle = (i / 8) * Math.PI * 2;
              const radius = 40;
              const x = 50 + Math.cos(angle) * radius;
              const y = 50 + Math.sin(angle) * radius;
              return (
                <div
                  key={t}
                  className={`glass absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-2.5 py-1 md:px-3 md:py-1.5 text-[10px] md:text-xs font-medium border border-white/5 bg-[var(--background)]/40
                    ${isDesktop ? "animate-float" : ""}`}
                  style={{ 
                    left: `${x}%`, 
                    top: `${y}%`, 
                    animationDelay: isDesktop ? `${i * 0.3}s` : undefined 
                  }}
                >
                  {t}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}