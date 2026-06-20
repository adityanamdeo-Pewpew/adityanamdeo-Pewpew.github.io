const tech = [
  "Java",
  "Spring Boot",
  "React",
  "MySQL",
  "Git",
  "GitHub",
  "HTML",
  "CSS",
  "JavaScript",
  "REST",
  "Tailwind",
  "Vite",
];

export function TechWall() {
  return (
    <section className="relative px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-xs text-[var(--neon)] uppercase tracking-[0.3em] mb-3 text-center">
          // stack
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 text-center">
          Floating technology wall
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {tech.map((t, i) => (
            <div
              key={t}
              className="
                glass
                rounded-2xl
                px-5
                py-3
                font-mono
                text-sm
                animate-none
                md:animate-float
                hover:bg-white/10
                hover:scale-110
                transition-all
                cursor-default
                transform-gpu
              "
              style={{
                animationDelay: `${i * 0.15}s`,
              }}
            >
              <span className="bg-gradient-to-r from-[var(--cyan)] to-[var(--purple)] bg-clip-text text-transparent">
                {t}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}