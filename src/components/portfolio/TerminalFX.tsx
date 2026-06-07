import { useEffect, useState } from "react";

/** Global terminal-style overlays: scan beam, top status bar, bottom marquee. */
export function TerminalFX() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-US", { hour12: false }) +
          " UTC" +
          (d.getTimezoneOffset() <= 0 ? "+" : "-") +
          Math.abs(d.getTimezoneOffset() / 60),
      );
    };
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);

  const ticker = [
    "SYS::ONLINE",
    "BUILD 2026.06",
    "JAVA 21",
    "SPRING BOOT 3.x",
    "REACT 19",
    "VITE 7",
    "STATUS: AVAILABLE FOR FREELANCE",
    "LOCATION: INDORE · IN",
    "UPTIME 99.99%",
    "LATENCY 12ms",
  ];

  return (
    <>
      {/* Animated scan beam across viewport */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[65] h-px">
        <div
          className="animate-scan-sweep h-[3px] w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.55 0.21 22 / 0.6), oklch(0.82 0.1 40 / 0.4), transparent)",
            boxShadow: "0 0 18px oklch(0.55 0.21 22 / 0.6)",
          }}
        />
      </div>

      {/* Top status / boot bar */}
      <div className="pointer-events-none fixed top-0 inset-x-0 z-[55] flex justify-between px-4 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="animate-status-dot inline-block h-1.5 w-1.5 rounded-full bg-[var(--neon)]" />
          aditya@portfolio:~$
        </span>
        <span className="hidden sm:inline">{time}</span>
      </div>

      {/* Bottom marquee tape */}
      <div className="pointer-events-none fixed bottom-0 inset-x-0 z-[55] overflow-hidden border-t border-white/5 bg-background/60 backdrop-blur-md">
        <div className="animate-marquee flex whitespace-nowrap py-1.5 font-mono text-[10px] uppercase tracking-[0.3em]">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center px-6 text-muted-foreground">
              <span className="mr-6 text-[var(--neon)]">◆</span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
