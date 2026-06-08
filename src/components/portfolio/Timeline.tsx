const items = [
  { y: "2027", t: "BCA Graduation", d: "Bachelor of Computer Applications — expected graduation.", tag: "education" },
  { y: "2025", t: "Freelance Full-Stack Developer", d: "Building production web apps and REST APIs for clients.", tag: "work" },
  { y: "2024", t: "Personal Project Builder", d: "Shipping side-projects in Spring Boot + React to sharpen craft.", tag: "build" },
  { y: "2024", t: "BCA — 2nd Year", d: "Currently studying Bachelor of Computer Applications.", tag: "education" },
];

export function Timeline() {
  return (
    <section id="journey" className="relative px-6 py-32">
      <div className="max-w-5xl mx-auto">
        <div className="font-mono text-xs text-[var(--neon)] uppercase tracking-[0.3em] mb-3">// journey</div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-14">
          Education & <span className="neon-text">experience.</span>
        </h2>

        <div className="relative pl-8 sm:pl-12">
          <div className="absolute left-2 sm:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--neon)] via-[var(--purple)] to-transparent" />
          {items.map((it, i) => (
            <div key={i} className="relative mb-8 last:mb-0">
              <div className="absolute -left-[26px] sm:-left-[34px] top-5 h-3 w-3 rounded-full bg-[var(--neon)] ring-4 ring-background animate-pulse-glow" />
              <div className="glass rounded-2xl p-5 hover:bg-white/[0.07] transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-[var(--cyan)]">{it.y}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full glass text-muted-foreground">{it.tag}</span>
                </div>
                <h3 className="text-lg font-semibold">{it.t}</h3>
                <p className="text-sm text-muted-foreground mt-1">{it.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
