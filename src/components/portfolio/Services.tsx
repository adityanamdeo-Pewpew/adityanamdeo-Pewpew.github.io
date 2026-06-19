const services = [
  { i: "◆", t: "Full-Stack Web Development", d: "End-to-end web apps from database configuration to UI layouts, built cleanly for scale." },
  { i: "⬢", t: "Spring Boot Backend", d: "Production-grade REST APIs featuring clean software architecture design and security parameters." },
  { i: "◈", t: "REST API Development", d: "Well-documented, high-efficiency APIs prepared for immediate integration with any client framework." },
  { i: "◇", t: "Database Design", d: "Relational database schema optimization using MySQL, focusing on relational accuracy and data flow control." },
  { i: "▲", t: "E-Commerce Development", d: "Online applications featuring structured item catalogs, payment integrations, and modular checkout processes." },
  { i: "✦", t: "System Maintenance", d: "Providing codebase optimizations, resolving structural dependencies, and upgrading layout performance features." },
];

export function Services() {
  return (
    <section id="services" className="relative px-6 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-xs text-[var(--neon)] uppercase tracking-[0.3em] mb-3">// services</div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-14 max-w-3xl">
          What I can <span className="neon-text">ship</span> for you.
        </h2>

        {/* 
          PERFORMANCE UPGRADE: 
          - transform-gpu offloads rendering structures directly to the device GPU graphic pipeline.
          - will-change-transform alerts mobile browsers to optimize rendering boxes beforehand.
        */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 transform-gpu will-change-transform">
          {services.map((s) => (
            <div 
              key={s.t} 
              className="group relative glass rounded-2xl p-6 overflow-hidden transition-all duration-300 transform-gpu
                md:hover:translate-y-[-6px] border border-zinc-200/50 dark:border-white/5
                hover:shadow-md dark:hover:shadow-[0_10px_30px_rgba(255,46,99,0.02)]"
            >
              {/* 
                PERFORMANCE UPGRADE: 
                - Hidden on mobile layout options entirely ('hidden md:block') to prevent structural repaint lag during touch scrolling.
              */}
              <div className="hidden md:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[var(--neon)]/15 via-transparent to-[var(--cyan)]/15 pointer-events-none" />
              <div className="hidden md:block absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-[var(--neon)]/50 transition-all duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                {/* 
                  PERFORMANCE UPGRADE: 
                  - Mobile transitions rely on simple opacity shifts while heavy drop-shadow strings are locked down exclusively behind desktop interactions.
                */}
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 text-2xl mb-5 select-none
                  bg-gradient-to-br from-zinc-500/10 to-zinc-500/20 text-muted-foreground transform-gpu
                  md:group-hover:from-[var(--neon)] md:group-hover:to-[var(--purple)] md:group-hover:text-white md:group-hover:scale-110 md:group-hover:shadow-[0_0_15px_rgba(255,46,99,0.35)]"
                >
                  {s.i}
                </div>
                
                <h3 className="text-lg font-semibold mb-2 md:group-hover:text-[var(--neon)] transition-colors duration-200">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                
                {/* 
                  PERFORMANCE UPGRADE: 
                  - Removed the layout positioning transitions on mobile screen viewlines to prevent hardware recalculations during interaction clips.
                */}
                <div className="mt-5 font-mono text-xs text-[var(--neon)] opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
                  → Initialize stream
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}