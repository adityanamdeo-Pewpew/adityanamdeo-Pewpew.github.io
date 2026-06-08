import { motion } from "framer-motion";

const pillars = [
  { k: "01", t: "Engineering mindset", d: "I think in systems — clean architecture, scalable APIs, and code that ages well." },
  { k: "02", t: "Builder by default", d: "From idea to deployment, I love shipping personal projects that solve real problems." },
  { k: "03", t: "Entrepreneurial drive", d: "Beyond code, I'm building a future where my work compounds into something bigger." },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <div className="font-mono text-xs text-[var(--neon)] uppercase tracking-[0.3em] mb-3">// about</div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-2xl">
              A developer with the <span className="neon-text">soul of a founder.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground leading-relaxed">
            I'm a full-stack Java developer passionate about building scalable web applications and exploring new technologies. Currently a college student and aspiring entrepreneur.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <motion.div key={p.k} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group relative glass rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
              <div className="font-mono text-xs text-[var(--cyan)] mb-4">{p.k}</div>
              <h3 className="text-xl font-semibold mb-2">{p.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              <div className="absolute inset-x-6 -bottom-px h-px bg-gradient-to-r from-transparent via-[var(--neon)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
