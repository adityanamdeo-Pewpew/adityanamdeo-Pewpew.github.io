import { useEffect, useState } from "react";

/** Global terminal-style overlays: scan beam, top status bar, bottom marquee. */
export function TerminalFX() {
  const [time, setTime] = useState("");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

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
    
    return () => {
      clearInterval(i);
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const ticker = [
    "SYS::ONLINE",
    "BUILD 2026.06",
    "JAVA 21",
    "SPRING BOOT 3.x",
    "REACT 19",
    "VITE 7",
    "STATUS: AVAILABLE FOR FREELANCE",
    "LOCATION: SAGAR · IN",
    "UPTIME 99.99%",
    "LATENCY 12ms",
  ];

  return (
    <>
      {/* 1. THE SCAN BEAM OVERLAY */}
      {isDesktop && (
        <div className="pointer-events-none fixed inset-x-0 top-0 z-[65] h-px">
          <div
            className="animate-scan-sweep h-[3px] w-full transform-gpu"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.55 0.21 22 / 0.6), oklch(0.82 0.1 40 / 0.4), transparent)",
              boxShadow: "0 0 18px oklch(0.55 0.21 22 / 0.6)",
            }}
          />
        </div>
      )}

      {/* 2. TOP STATUS / BOOT BAR */}
      <div className="pointer-events-none fixed top-0 inset-x-0 z-[55] flex justify-between px-4 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground bg-background/40">
        <span className="flex items-center gap-2">
          <span className="animate-status-dot inline-block h-1.5 w-1.5 rounded-full bg-[var(--neon)]" />
          aditya@portfolio:~$
        </span>
        <span className="hidden sm:inline">{time}</span>
      </div>

      {/* 3. BOTTOM MARQUEE TAPE
        - Added max-w-full and overflow-hidden to block layout breakages.
      */}
      <div className="pointer-events-none fixed bottom-0 inset-x-0 z-[55] w-full max-w-full overflow-hidden border-t border-white/5 bg-background/90 md:bg-background/60 md:backdrop-blur-md">
        {/* FIX: Added w-full and forced overflow hide mechanics across desktop layout profiles
          so it scales on your laptop perfectly without rendering a native browser scroll handle.
        */}
        <div className="md:animate-marquee flex whitespace-nowrap overflow-x-hidden md:overflow-x-visible py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] transform-gpu w-full">
          {(isDesktop ? [...ticker, ...ticker] : ticker).map((t, idx) => (
            <span key={idx} className="flex items-center px-4 md:px-6 text-muted-foreground shrink-0">
              <span className="mr-4 md:mr-6 text-[var(--neon)]">◆</span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}