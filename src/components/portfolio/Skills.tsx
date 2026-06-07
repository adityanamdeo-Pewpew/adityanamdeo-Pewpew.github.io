import { motion } from "framer-motion";

const skills = [
  { name: "Java", level: 92 },
  { name: "Spring Boot", level: 88 },
  { name: "React", level: 85 },
  { name: "JavaScript", level: 86 },
  { name: "MySQL", level: 80 },
  { name: "REST APIs", level: 90 },
  { name: "HTML / CSS", level: 92 },
  { name: "Git / GitHub", level: 84 },
  { name: "Problem Solving", level: 90 },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-xs text-[var(--neon)] uppercase tracking-[0.3em] mb-3">
          02 / Skills
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-14 max-w-3xl">
          Tools that turn ideas into <span className="neon-text">products.</span>
        </h2>

        <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="mb-1 flex justify-between text-sm">
                  <span className="font-mono">{s.name}</span>
                  <span className="text-muted-foreground">{s.level}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.06, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[var(--cyan)] via-[var(--neon)] to-[var(--purple)]"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative aspect-square">
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-6 rounded-full border border-white/10" />
            <div className="absolute inset-12 rounded-full border border-white/10" />
            <div className="absolute inset-20 rounded-full border border-[var(--cyan)]/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-pulse-glow glass-strong flex h-28 w-28 items-center justify-center rounded-full text-center">
                <span className="neon-text font-mono text-sm font-bold">
                  FULL<br />STACK
                </span>
              </div>
            </div>
            {["Java", "Spring", "React", "MySQL", "REST", "Git", "JS", "HTML"].map((t, i) => {
              const angle = (i / 8) * Math.PI * 2;
              const radius = 42;
              const x = 50 + Math.cos(angle) * radius;
              const y = 50 + Math.sin(angle) * radius;
              return (
                <div
                  key={t}
                  className="animate-float glass absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-3 py-1.5 text-xs font-medium"
                  style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.3}s` }}
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
