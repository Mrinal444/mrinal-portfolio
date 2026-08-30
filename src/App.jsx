import React, { useState, useEffect } from 'react';
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
import useScrollspy from './hooks/useScrollspy';

function App() {
  const sectionIds = [
    'home',
    'about',
    'skills',
    'projects',
    'journey',
    'problem-solving',
    'achievements',
    'education',
    'learning',
    'contact',
  ];

  const activeSection = useScrollspy(sectionIds, 100);

  useEffect(() => {
    // Set page metadata
    document.title = 'Mrinal Singh - Computer Science Student & Aspiring Software Engineer';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Portfolio of Mrinal Singh - Computer Science Engineering student, full-stack developer, DSA enthusiast. Building practical software solutions.'
    );
  }, []);

  return (
    <div className="bg-dark-950 text-white">
      <Navbar activeSection={activeSection} />
      <main>
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
      <Footer />
    </div>
  );
}

export default App;
