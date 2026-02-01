import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Patents } from './components/Patents';
import { SystemHealth } from './components/SystemHealth';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-400">
      <Navbar />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
          <About />
        </section>

        <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
          <About />
          <SystemHealth /> {/* ADD THIS HERE */}
        </section>

        <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-950/50">
          <Skills />
        </section>

        <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
          <Projects />
        </section>

        <section id="patents" className="py-24 px-6 md:px-12 lg:px-24">
          <Patents />
        </section>

        <section id="achievements" className="py-24 px-6 md:px-12 lg:px-24 bg-emerald-950/5">
          <Achievements />
        </section>

        <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
          <Contact />
        </section>
      </main>

      <footer className="py-12 border-t border-zinc-800/50 text-center text-zinc-500 text-sm">
        <p className="font-mono text-[10px] tracking-widest uppercase mb-2">Designed & Built by Vansh Gujral</p>
        <p>&copy; {new Date().getFullYear()} Architecting Intelligence.</p>
      </footer>
    </div>
  );
};

export default App;
