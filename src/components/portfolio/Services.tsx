const services = [
  { i: "◆", t: "Full-Stack Web Development", d: "End-to-end web apps from database to UI, built for scale." },
  { i: "⬢", t: "Spring Boot Backend", d: "Production-grade REST APIs with clean architecture and security." },
  { i: "◈", t: "REST API Development", d: "Well-documented, performant APIs ready for any frontend." },
  { i: "◇", t: "Portfolio & Business Sites", d: "Premium personal and brand websites that convert visitors." },
  { i: "▲", t: "E-Commerce Development", d: "Online stores with payments, cart, and admin panels." },
  { i: "✦", t: "Website Maintenance", d: "Ongoing support, security patches, and feature additions." },
];

export function Services() {
  return (
    <section id="services" className="relative px-6 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-xs text-[var(--neon)] uppercase tracking-[0.3em] mb-3">// services</div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-14 max-w-3xl">
          What I can <span className="neon-text">ship</span> for you.
        </h2>

        {/* Added transform-gpu to offload active layer translations to graphics unit */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 transform-gpu">
          {services.map((s) => (
            <div 
              key={s.t} 
              className="group relative glass rounded-2xl p-6 overflow-hidden transition-all duration-300 md:hover:translate-y-[-4px]"
            >
              {/* Only animate background hover glows on desktops to save mobile memory cycles */}
              <div className="absolute inset-0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[var(--neon)]/10 via-transparent to-[var(--purple)]/10 pointer-events-none" />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent md:group-hover:ring-[var(--neon)]/40 transition-all duration-300 pointer-events-none" />
              
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--neon)]/20 to-[var(--purple)]/20 text-2xl text-[var(--cyan)] mb-5 select-none">
                  {s.i}
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                <div className="mt-5 font-mono text-xs text-[var(--neon)] opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
                  → Get started
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}