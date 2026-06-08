import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] hidden lg:block">
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
