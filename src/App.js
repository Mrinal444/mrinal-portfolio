import React, { useEffect } from 'react';
import Lenis from 'lenis';
import CosmicBackground from './components/ui/CosmicBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import ProblemSolving from './components/ProblemSolving';
import Achievements from './components/Achievements';
import Education from './components/Education';
import CurrentlyLearning from './components/CurrentlyLearning';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollSpy from './hooks/useScrollSpy';

function App() {
  const activeSection = useScrollSpy();

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#040409] text-white selection:bg-[#67E8F9] selection:text-[#020B1C]">
      {/* Continuous 3D WebGL Cosmic Background across all pages */}
      <CosmicBackground />

      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content */}
      <main className="relative z-10 bg-transparent">
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Journey />
        <ProblemSolving />
        <Achievements />
        <Education />
        <CurrentlyLearning />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
