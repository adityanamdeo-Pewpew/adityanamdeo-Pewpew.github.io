const projects = [
  { n: "[Project 01]", d: "[Project Description — replace with details]", t: ["Java", "Spring Boot", "MySQL"], c: "from-[var(--neon)] to-[var(--purple)]" },
  { n: "[Project 02]", d: "[Project Description — replace with details]", t: ["React", "REST API", "Tailwind"], c: "from-[var(--cyan)] to-[var(--neon)]" },
  { n: "[Project 03]", d: "[Project Description — replace with details]", t: ["Full-Stack", "Spring Boot", "React"], c: "from-[var(--purple)] to-[var(--cyan)]" },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <div className="font-mono text-xs text-[var(--neon)] uppercase tracking-[0.3em] mb-3">// selected work</div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Projects in <span className="neon-text">production.</span>
            </h2>
          </div>
          <div className="flex gap-2 font-mono text-xs">
            {["All", "Web", "API", "Frontend"].map((f, i) => (
              <button key={f} className={`px-3 py-1.5 rounded-full glass ${i === 0 ? "text-[var(--neon)] ring-1 ring-[var(--neon)]/40" : "text-muted-foreground hover:text-foreground"}`}>{f}</button>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          {projects.map((p, i) => (
            <div key={i} className="group relative glass-strong rounded-3xl p-6 lg:p-8 overflow-hidden">
              <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 items-center">
                <div className={`relative aspect-[4/3] rounded-2xl bg-gradient-to-br ${p.c} p-px overflow-hidden`}>
                  <div className="h-full w-full rounded-2xl bg-background/80 grid-bg flex items-center justify-center font-mono text-sm text-muted-foreground">
                    <div className="text-center">
                      <div className="text-5xl mb-2 neon-text font-bold">0{i + 1}</div>
                      <div className="text-xs uppercase tracking-widest">screenshot placeholder</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-mono text-xs text-[var(--cyan)] mb-2">PROJECT 0{i + 1}</div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-3">{p.n}</h3>
                  <p className="text-muted-foreground mb-5 max-w-xl">{p.d}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.t.map((tag) => (
                      <span key={tag} className="font-mono text-xs px-3 py-1 rounded-full glass">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold bg-gradient-to-r from-[var(--neon)] to-[var(--purple)] text-background">Live Demo →</a>
                    <a href="#" className="glass rounded-full px-5 py-2.5 text-xs font-semibold hover:bg-white/10 transition-colors">GitHub ↗</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
