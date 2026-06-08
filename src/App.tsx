import { Nav } from "./components/portfolio/Nav";
import { Hero } from "./components/portfolio/Hero";
import { About } from "./components/portfolio/About";
import { Skills } from "./components/portfolio/Skills";
import { Services } from "./components/portfolio/Services";
import { Projects } from "./components/portfolio/Projects";
import { Timeline } from "./components/portfolio/Timeline";
import { TechWall } from "./components/portfolio/TechWall";
import { Contact } from "./components/portfolio/Contact";
import { Footer } from "./components/portfolio/Footer";
import { CursorGlow } from "./components/portfolio/CursorGlow";
import { ScrollProgress } from "./components/portfolio/ScrollProgress";
import { TerminalFX } from "./components/portfolio/TerminalFX";

function App() {
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

export default App;