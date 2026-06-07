import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { Timeline } from "@/components/portfolio/Timeline";
import { TechWall } from "@/components/portfolio/TechWall";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { TerminalFX } from "@/components/portfolio/TerminalFX";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aditya Namdeo — Full-Stack Java Developer & Freelancer" },
      { name: "description", content: "Aditya Namdeo is a full-stack Java developer building scalable web applications with Spring Boot, React, and modern technologies." },
      { property: "og:title", content: "Aditya Namdeo — Full-Stack Java Developer" },
      { property: "og:description", content: "Building scalable digital experiences for the future. Freelance · Spring Boot · React." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <ScrollProgress />
      <TerminalFX />
      <CursorGlow />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Timeline />
      <TechWall />
      <Contact />
      <Footer />
    </main>
  );
}
