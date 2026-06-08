export function Footer() {
  return (
    <footer className="relative px-6 pt-16 pb-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="text-7xl sm:text-9xl font-bold tracking-tighter neon-text leading-none">
            ADITYA
          </div>
          <div className="text-7xl sm:text-9xl font-bold tracking-tighter neon-text leading-none -mt-4">
            NAMDEO
          </div>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 font-mono text-xs text-muted-foreground">
          <div>© 2026 · Designed & developed by Aditya Namdeo.</div>
          <div className="flex gap-4">
            {["GitHub", "LinkedIn", "Instagram", "Email"].map((s) => (
              <a key={s} href="#" className="hover:text-[var(--neon)] transition-colors">{s}</a>
            ))}
          </div>
          <div>Built with React + modern tech ◆</div>
        </div>
      </div>
    </footer>
  );
}
