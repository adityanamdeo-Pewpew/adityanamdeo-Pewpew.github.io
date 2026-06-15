import { useEffect, useState } from "react";

const projects = [
  { 
    n: "High-Throughput Ledger API", 
    d: "Enterprise transaction entry core featuring strict ACID validation rules, precise balance calculation loops, and secure ledger tracking protocols.", 
    t: ["Java", "Spring Boot", "MySQL", "REST API"], 
    c: "from-[var(--neon)] to-[var(--purple)]",
    progress: 68,
    logs: [
      "INFO: Scanning local maven repositories...",
      "INFO: Initializing HikariDataSource (MySQL)...",
      "INFO: Mapping REST endpoints for /api/v1/ledger...",
      "WARN: Lazy initialization enabled for testing profiles."
    ]
  },
  { 
    n: "Spring Boot + React Secure Dashboard", 
    d: "Full-stack operational management interface locked behind stateless JWT authentication filters, armed with granular role access controls.", 
    t: ["React", "Spring Security", "JWT", "Tailwind"], 
    c: "from-[var(--cyan)] to-[var(--neon)]",
    progress: 45,
    logs: [
      "DEPS: Resolving spring-boot-starter-security...",
      "AUTH: JWT HMAC-256 validation filters injected.",
      "VITE: Splitting chunks for vendor dashboard layout...",
      "INFO: Hot Module Replacement (HMR) active."
    ]
  },
  { 
    n: "Real-Time System Log Monitor", 
    d: "Hardware-accelerated infrastructure dashboard streaming active server matrix logs and resource performance metrics over persistent WebSockets channels.", 
    t: ["Java", "WebSockets", "React", "Vite"], 
    c: "from-[var(--purple)] to-[var(--cyan)]",
    progress: 24,
    logs: [
      "NET: Initializing Tomcat WebSocketContainer engine...",
      "STMT: Binding channel channels subscription handlers...",
      "INFO: Buffer sequence tracking calibrated to 60fps streams.",
      "WARN: WebSockets fallback to long-polling disabled."
    ]
  },
];

export function Projects() {
  const [visibleLogs, setVisibleLogs] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLogs((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const renderTerminalBar = (progress: number) => {
    const totalBlocks = 12;
    const filledBlocks = Math.round((progress / 100) * totalBlocks);
    const emptyBlocks = totalBlocks - filledBlocks;
    return `[${"█".repeat(filledBlocks)}${"░".repeat(emptyBlocks)}]`;
  };

  return (
    <section id="projects" className="relative px-6 py-20 md:py-32">
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
              <button 
                key={f} 
                className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                  i === 0 
                    ? "bg-[var(--neon)]/10 text-[var(--neon)] ring-1 ring-[var(--neon)]/40" 
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Stack */}
        <div className="space-y-10 transform-gpu">
          {projects.map((p, i) => (
            <div 
              key={i} 
              className="group relative glass-strong rounded-3xl p-6 lg:p-8 overflow-hidden border border-zinc-500/10 dark:border-white/5 bg-[var(--background)]/30 backdrop-blur-[1px]"
            >
              
              {/* THEME FIX:
                - We use an inline style pointing directly to your app's native theme variable colors.
                - This completely bypasses Tailwind's "dark:" mode selector, forcing it to change instantly when your navbar toggle switches!
              */}
              <div 
                className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center select-none backdrop-blur-[8px] border rounded-3xl transition-colors duration-300"
                style={{ 
                  backgroundColor: "var(--popover)", 
                  borderColor: "rgba(120, 120, 120, 0.15)",
                  opacity: 0.94
                }}
              >
                <div className="max-w-md w-full font-mono text-left space-y-4 relative z-10">
                  
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between border-b pb-2 text-[10px] border-zinc-500/20 text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)] animate-ping" />
                      <span>STAGING_ENV // INSTANCE_0{i + 1}</span>
                    </div>
                    <span className="font-bold text-[var(--cyan)]">SRC_BUILD_2026</span>
                  </div>

                  {/* Terminal Action Lines */}
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-foreground flex items-center justify-between">
                      <span>⚡ Work In Progress</span>
                      <span className="text-[var(--neon)] text-xs font-mono">{p.progress}%</span>
                    </div>
                    
                    {/* Glowing Terminal Block Progress Bar */}
                    <div className="text-sm tracking-wider font-bold text-[var(--neon)] opacity-90 drop-shadow-[0_0_8px_rgba(255,46,99,0.4)]">
                      {renderTerminalBar(p.progress)}
                    </div>
                  </div>

                  {/* Active Live Compilation Logs Window */}
                  <div 
                    className="rounded-lg p-3 h-20 flex flex-col justify-end overflow-hidden text-[10px] shadow-sm"
                    style={{ 
                      backgroundColor: "var(--background)", 
                      border: "1px solid rgba(120, 120, 120, 0.15)" 
                    }}
                  >
                    <div className="text-muted-foreground font-bold mb-1 opacity-50">// LIVE SYSTEM PIPELINE LOGS:</div>
                    <div className="text-emerald-500 font-medium truncate animate-pulse">
                      &gt; {p.logs[visibleLogs]}
                    </div>
                    <div className="text-muted-foreground truncate mt-0.5 opacity-80">
                      &gt; {p.logs[(visibleLogs + 1) % 4]}
                    </div>
                  </div>

                  {/* Status Note */}
                  <div className="text-[10px] text-center text-muted-foreground tracking-wide">
                    COMPILING MODULES · INITIALIZING REPOSITORIES
                  </div>

                </div>
              </div>

              {/* Card Blueprint Layout Background */}
              <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 items-center select-none pointer-events-none filter saturate-70 opacity-30 blur-[0.5px]">
                
                {/* Visual Placeholder Block */}
                <div className={`relative aspect-[4/3] rounded-2xl bg-gradient-to-br ${p.c} p-px overflow-hidden`}>
                  <div className="h-full w-full rounded-2xl bg-[var(--background)]/90 grid-bg flex items-center justify-center font-mono text-sm text-muted-foreground">
                    <div className="text-center">
                      <div className="text-5xl mb-2 font-bold text-foreground">0{i + 1}</div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">STAGING_ENV</div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <div className="font-mono text-xs text-[var(--cyan)] mb-2">PROJECT 0{i + 1}</div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-3 tracking-tight text-foreground">{p.n}</h3>
                  <p className="text-muted-foreground mb-5 text-sm leading-relaxed max-w-xl">{p.d}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.t.map((tag) => (
                      <span key={tag} className="font-mono text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/5 text-muted-foreground">{tag}</span>
                    ))}
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