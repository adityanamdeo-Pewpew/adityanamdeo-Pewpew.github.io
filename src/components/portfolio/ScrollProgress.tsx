import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-white/5">
      <div className="h-full bg-gradient-to-r from-[var(--cyan)] via-[var(--neon)] to-[var(--purple)] transition-[width] duration-150" style={{ width: `${p}%` }} />
    </div>
  );
}
