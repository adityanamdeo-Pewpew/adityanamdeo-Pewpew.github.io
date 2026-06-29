import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Java", level: 92, status: "0xEX" },
  { name: "Spring Boot", level: 88, status: "0xAD" },
  { name: "React", level: 70, status: "0xIN" },
  { name: "JavaScript", level: 86, status: "0xAD" },
  { name: "MySQL", level: 80, status: "0xAD" },
  { name: "REST APIs", level: 90, status: "0xEX" },
  { name: "HTML / CSS", level: 92, status: "0xEX" },
  { name: "Git / GitHub", level: 84, status: "0xAD" },
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

  const tracks = [
    { label: "Backend / Core", value: 85, radius: 78, color: "stroke-[var(--cyan,rgba(6,182,212,0.85))]", dot: "bg-[var(--cyan,rgb(6,182,212))]" },
    { label: "Frontend / UI", value: 70, radius: 58, color: "stroke-[var(--purple,rgba(168,85,247,0.85))]", dot: "bg-[var(--purple,rgb(168,85,247))]" },
    { label: "Databases", value: 60, radius: 38, color: "stroke-[var(--neon,rgba(239,68,68,0.85))]", dot: "bg-[var(--neon,rgb(239,68,68))]" },
  ];

  return (
    <section id="skills" className="relative px-4 sm:px-6 py-16 md:py-32 overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-xs text-[var(--neon)] dark:text-[var(--neon)] uppercase tracking-[0.3em] mb-3">
          02 / Skills
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-10 md:mb-14 text-foreground">
          Tools that turn ideas into <span className="neon-text">products.</span>
        </h2>

        {/* Added transform-gpu to the main structural parent block to accelerate overall rendering */}
        <div className="grid gap-10 md:gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center transform-gpu">
          
          {/* Main Skill Panels Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 bg-foreground/[0.02] dark:bg-white/[0.02] border border-foreground/10 dark:border-white/5 p-5 sm:p-8 rounded-2xl backdrop-blur-md shadow-sm transform-gpu">
            {skills.map((s, i) => (
              <div key={s.name} className="flex flex-col justify-center transform-gpu">
                <div className="mb-2 flex justify-between items-center text-sm font-mono">
                  <div className="flex items-center space-x-2.5">
                    <span className="w-2 h-2 rounded-sm bg-gradient-to-br from-[var(--cyan,#06b6d4)] to-[var(--neon,#ef4444)] rotate-45" />
                    <span className="text-foreground/90 font-medium tracking-wide">{s.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground bg-foreground/5 dark:bg-white/5 px-2 py-0.5 border border-foreground/10 dark:border-white/10 rounded">
                    {s.status}
                  </span>
                </div>

                {/* Optimized layout track bars */}
                <div className="h-1.5 overflow-hidden rounded-full bg-foreground/10 dark:bg-white/5 relative transform-gpu">
                  <motion.div
                    initial={{ width: isDesktop ? 0 : `${s.level}%` }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: isDesktop ? 1.2 : 0.4, delay: isDesktop ? i * 0.04 : 0, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[var(--cyan,#06b6d4)] via-[var(--neon,#ef4444)] to-[var(--purple,#a855f7)] rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Clean Concentric Grid Graph */}
          <div className="relative flex flex-col items-center justify-center py-4 transform-gpu">
            <div className="relative w-[240px] h-[240px] md:w-[280px] md:h-[280px] transform-gpu">
              
              {/* Animation attributes strictly isolated to only fire on confirmed desktop nodes */}
              <motion.div
                className="w-full h-full transform-gpu"
                animate={isDesktop ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              >
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                  {tracks.map((track, idx) => {
                    const circumference = 2 * Math.PI * track.radius;
                    const strokeOffset = circumference - (track.value / 100) * circumference;

                    return (
                      <g key={idx}>
                        <circle
                          cx="100"
                          cy="100"
                          r={track.radius}
                          className="fill-none stroke-foreground/5 dark:stroke-white/5"
                          strokeWidth="9"
                        />
                        <motion.circle
                          cx="100"
                          cy="100"
                          r={track.radius}
                          className={`fill-none ${track.color}`}
                          strokeWidth="9"
                          strokeLinecap="round"
                          strokeDasharray={circumference}
                          initial={{ strokeDashoffset: isDesktop ? circumference : strokeOffset }}
                          whileInView={{ strokeDashoffset: strokeOffset }}
                          viewport={{ once: true }}
                          transition={{ duration: isDesktop ? 1.4 : 0.3, ease: "easeOut", delay: isDesktop ? idx * 0.1 : 0 }}
                        />
                      </g>
                    );
                  })}
                </svg>
              </motion.div>

              {/* Central Identity display layer with mobile hardware adjustments applied */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div 
                  className="w-[105px] h-[105px] bg-background border border-foreground/10 dark:border-white/10 rounded-full flex flex-col items-center justify-center text-center shadow-md backdrop-blur-lg transform-gpu"
                  animate={isDesktop ? { scale: [1, 1.03, 1] } : {}}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">SYSTEM</span>
                  <span className="text-[var(--neon)] font-mono text-xs font-bold tracking-wider mt-0.5">MATRIX</span>
                </motion.div>
              </div>
            </div>

            {/* Static descriptive label system mapping */}
            <div className="mt-8 font-mono text-xs space-y-2.5 w-full max-w-[240px] transform-gpu">
              {tracks.map((track, idx) => (
                <div key={idx} className="flex items-center justify-between text-muted-foreground hover:text-foreground transition-colors duration-200">
                  <div className="flex items-center space-x-2.5">
                    <span className={`w-2 h-2 rounded-full ${track.dot} shadow-sm`} />
                    <span className="font-medium">{track.label}</span>
                  </div>
                  <span className="text-[10px] opacity-60">// 0x0{idx + 1}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}