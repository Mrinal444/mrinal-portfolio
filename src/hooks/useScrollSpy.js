import { useState, useEffect } from 'react';

// Maps intermediate or nested sections to their primary navbar navigation link
const SECTION_MAP = {
  home: 'home',
  about: 'about',
  stats: 'about',
  skills: 'skills',
  projects: 'projects',
  journey: 'journey',
  education: 'journey',
  'problem-solving': 'achievements',
  achievements: 'achievements',
  'currently-learning': 'skills',
  contact: 'contact',
};

const DEFAULT_SECTIONS = [
  'home',
  'about',
  'stats',
  'skills',
  'projects',
  'journey',
  'problem-solving',
  'achievements',
  'education',
  'currently-learning',
  'contact',
];

const useScrollSpy = (sectionIds = DEFAULT_SECTIONS, offset = 140) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;

    const calculateActiveSection = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 1. Top of page safeguard
      if (scrollY < 180) {
        setActiveSection('home');
        return;
      }

      // 2. Bottom of page safeguard (activates Contact even if short)
      if (scrollY + windowHeight >= documentHeight - 120) {
        setActiveSection('contact');
        return;
      }

      // 3. Find current section based on scroll position + offset
      const scrollPosition = scrollY + offset;
      let currentSectionId = 'home';

      for (let i = 0; i < sectionIds.length; i++) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + scrollY;
          if (top <= scrollPosition) {
            currentSectionId = id;
          }
        }
      }

      const mapped = SECTION_MAP[currentSectionId] || currentSectionId;
      setActiveSection(mapped);
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          calculateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Initial check
    calculateActiveSection();
    const timer = setTimeout(calculateActiveSection, 300);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      clearTimeout(timer);
    };
  }, [sectionIds, offset]);

  return activeSection;
};

export default useScrollSpy;
