const items = [
  { 
    y: "2024 - 2027", 
    t: "BCA Graduation", 
    d: "Pursuing Bachelor of Computer Applications — expected graduation in 2027 with a core focus on systems architecture and application development.", 
    tag: "education" 
  },
  { 
    y: "2025", 
    t: "Java Full-Stack Developer Certification", 
    d: "Completed comprehensive full-stack engineering training. Specialized in building enterprise backends with Java and Spring Boot, alongside interactive interfaces via React.", 
    tag: "certification" 
  },
  { 
    y: "2024", 
    t: "St. Mary's School, Sagar", 
    d: "Completed higher secondary schooling, anchoring the logical, quantitative, and algorithmic fundamentals necessary for software engineering.", 
    tag: "schooling" 
  },
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
          {/* Central Timeline Vertical Tracking Line */}
          <div className="absolute left-2 sm:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--neon)] via-[var(--purple)] to-transparent" />
          
          {items.map((it, i) => (
            <div key={i} className="relative mb-8 last:mb-0 group">
              {/* Pulsing Dot Node */}
              <div className="absolute -left-[26px] sm:-left-[34px] top-5 h-3 w-3 rounded-full bg-[var(--neon)] ring-4 ring-[var(--background)] group-hover:scale-110 transition-transform duration-200" />
              
              {/* Glass Item Box */}
              <div className="glass rounded-2xl p-5 hover:bg-white/[0.05] dark:hover:bg-zinc-900/[0.4] border border-zinc-200/10 dark:border-white/5 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-[var(--cyan)] font-bold">{it.y}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-zinc-200/50 dark:bg-white/5 text-muted-foreground border border-zinc-300/20 dark:border-white/5">
                    {it.tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-[var(--neon)] transition-colors duration-200">
                  {it.t}
                </h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed max-w-3xl">
                  {it.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}