import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // 1. Check if screen is large enough (Desktop >= 1024px matches Tailwind's lg break)
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    // Run immediately on mount
    checkScreenSize();

    // Listen for resize events to handle turning it on/off dynamically
    window.addEventListener("resize", checkScreenSize);

    // 2. If it's not a desktop, don't bind the mousemove tracker at all
    if (window.innerWidth < 1024) {
      return () => window.removeEventListener("resize", checkScreenSize);
    }

    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  // Return absolutely nothing if on a mobile/tablet screen to save 100% of GPU/CPU logic
  if (!isDesktop) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[1]">
      <div
        className="absolute h-[500px] w-[500px] rounded-full opacity-30 blur-3xl transition-transform duration-300"
        style={{
          left: pos.x - 250,
          top: pos.y - 250,
          background: "radial-gradient(circle, oklch(0.72 0.21 260 / 0.6), transparent 60%)",
        }}
      />
    </div>
  );
}