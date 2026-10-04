import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ activeSection = 'home' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'journey', label: 'Journey' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      if (window.__lenis) {
        window.__lenis.scrollTo(element, { offset: -80, duration: 1.2 });
      } else {
        const top = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#071737]/85 backdrop-blur-xl border-b border-white/15 shadow-xl shadow-black/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold text-white hover:text-[#67E8F9] transition-colors cursor-pointer flex items-center gap-1 group"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="text-[#67E8F9] group-hover:-translate-x-0.5 transition-transform">&lt;</span>
            <span className="tracking-wide">Mrinal</span>
            <span className="text-[#67E8F9] group-hover:translate-x-0.5 transition-transform">/&gt;</span>
          </motion.button>

          {/* Desktop Navigation Pill Container */}
          <div className="hidden md:flex items-center p-1.5 rounded-2xl bg-[#071737]/75 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/40">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-200 cursor-pointer select-none ${
                    isActive ? 'text-[#020B1C]' : 'text-[#E8F1FF] hover:text-white'
                  }`}
                >
                  {/* Fluid Hopping Box Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 32,
                        mass: 0.8,
                      }}
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#67E8F9] to-[#38BDF8] shadow-lg shadow-[#67E8F9]/30"
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? 'text-[#020B1C] font-bold' : 'text-[#E8F1FF]'}`}>
                    {link.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Direct Contact Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 rounded-xl bg-[#6366F1] text-white text-sm font-semibold hover:bg-[#4F46E5] transition-all shadow-md shadow-[#6366F1]/30 cursor-pointer"
            >
              Get in Touch
            </motion.button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-[#071737]/80 backdrop-blur-md border border-white/15 text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-white rounded-full transition-transform duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-white rounded-full transition-opacity duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-white rounded-full transition-transform duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#071737]/95 backdrop-blur-2xl border-t border-white/15 shadow-2xl overflow-hidden mt-3"
          >
            <div className="px-4 py-4 space-y-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'text-[#020B1C] bg-[#67E8F9] font-bold shadow-md shadow-[#67E8F9]/20'
                        : 'text-[#E8F1FF] hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#020B1C]" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
