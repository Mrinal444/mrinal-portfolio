import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './horizon-hero.css';

gsap.registerPlugin(ScrollTrigger);

export const Component = ({
  name = "Mrinal Singh",
  role = "Computer Science Engineering Student • Full-Stack Developer",
  showExtras = true,
}) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const scrollProgressRef = useRef(null);
  const menuRef = useRef(null);
  const ctaRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(1);
  const totalSections = 6;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -80, duration: 1.2 });
      } else {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Mrinal444', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/mrinal444', label: 'LinkedIn' },
    { icon: SiLeetcode, url: 'https://leetcode.com/u/Mrinal444', label: 'LeetCode' },
    { icon: FaEnvelope, url: 'mailto:mrings98@gmail.com', label: 'Email' },
  ];

  const techBadges = [
    'Full-Stack Architecture',
    'Data Structures & Algorithms',
    'Systems & Cloud',
    'React & Node.js',
  ];

  // GSAP Entrance Choreography
  useEffect(() => {
    if (!containerRef.current) return;

    gsap.set([menuRef.current, titleRef.current, subtitleRef.current, scrollProgressRef.current, ctaRef.current], {
      visibility: 'visible',
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      if (menuRef.current) {
        tl.from(menuRef.current, {
          x: -80,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
      }

      if (titleRef.current) {
        const titleChars = titleRef.current.querySelectorAll('.title-char');
        tl.from(
          titleChars,
          {
            y: 120,
            opacity: 0,
            duration: 1.2,
            stagger: 0.04,
            ease: 'power4.out',
          },
          '-=0.6'
        );
      }

      if (subtitleRef.current) {
        const subtitleLines = subtitleRef.current.querySelectorAll('.subtitle-line');
        tl.from(
          subtitleLines,
          {
            y: 35,
            opacity: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
          },
          '-=0.7'
        );
      }

      if (ctaRef.current) {
        tl.from(
          ctaRef.current.children,
          {
            y: 25,
            opacity: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power3.out',
          },
          '-=0.5'
        );
      }

      if (scrollProgressRef.current) {
        tl.from(
          scrollProgressRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.4'
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Track scroll progress across the full portfolio
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = Math.max(1, documentHeight - windowHeight);
      const progress = Math.min(Math.max(0, scrollY / maxScroll), 1);

      setScrollProgress(progress);
      const newSection = Math.min(Math.floor(progress * totalSections), totalSections - 1);
      setCurrentSection(newSection + 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalSections]);

  const splitTitle = (text) => {
    return text.split('').map((char, i) => (
      <span key={i} className="title-char inline-block">
        {char === ' ' ? ' ' : char}
      </span>
    ));
  };

  return (
    <div id="home" ref={containerRef} className="hero-container cosmos-style">
      {/* Side Menu */}
      <div ref={menuRef} className="side-menu" style={{ visibility: 'hidden' }}>
        <div className="menu-icon" onClick={() => scrollToSection('about')} title="Scroll to About">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="vertical-text">SPACE</div>
      </div>

      {/* Main Cosmos Hero Content */}
      <div className="hero-content cosmos-content">
        {/* Availability Badge */}
        {showExtras && (
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#071737]/85 border border-white/20 backdrop-blur-md mb-2 shadow-inner shadow-white/5 hover:border-[#67E8F9]/50 transition-colors pointer-events-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-xs sm:text-sm font-medium tracking-wide text-[#E8F1FF]">
              Open to Software Engineering Internships • 2026
            </span>
          </div>
        )}

        {/* Animated Cybernetic / Holographic Drawing Centerpiece */}
        <div className="tech-orbit-container select-none pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="neonRedOrbit" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF0055" stopOpacity="1" />
                <stop offset="50%" stopColor="#FF3366" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#FF1E56" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="neonRedCore" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF0055" />
                <stop offset="100%" stopColor="#FF5E7E" />
              </linearGradient>
              <filter id="neonRedGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Outer Rotating Coordinate Ring */}
            <g className="orbit-spin-cw">
              <circle cx="100" cy="100" r="88" stroke="url(#neonRedOrbit)" strokeWidth="1.6" strokeDasharray="10 6 22 6 34 10" opacity="0.9" filter="url(#neonRedGlow)" />
              <circle cx="100" cy="12" r="3.5" fill="#FF0055" filter="url(#neonRedGlow)" />
              <circle cx="100" cy="188" r="3.5" fill="#FF1E56" filter="url(#neonRedGlow)" />
              <circle cx="12" cy="100" r="3" fill="#FF3366" />
              <circle cx="188" cy="100" r="3" fill="#FF3366" />
            </g>

            {/* Middle Counter-Rotating Tech Ring */}
            <g className="orbit-spin-ccw">
              <circle cx="100" cy="100" r="68" stroke="#FF0055" strokeWidth="1.2" strokeDasharray="28 12 12 8" opacity="0.75" />
              <polygon points="100,34 105,43 95,43" fill="#FF0055" opacity="1" filter="url(#neonRedGlow)" />
              <polygon points="100,166 105,157 95,157" fill="#FF1E56" opacity="1" filter="url(#neonRedGlow)" />
            </g>

            {/* Inner Hexagonal Precision Reticle */}
            <g className="orbit-spin-cw" style={{ animationDuration: '30s' }}>
              <polygon points="100,52 142,76 142,124 100,148 58,124 58,76" stroke="#FF3366" strokeWidth="1.2" strokeDasharray="6 4" fill="none" opacity="0.5" />
            </g>

            {/* Center Pulsing Quantum Code Core */}
            <g className="orbit-pulse-core">
              <circle cx="100" cy="100" r="26" fill="rgba(7, 23, 55, 0.95)" stroke="url(#neonRedCore)" strokeWidth="2.2" filter="url(#neonRedGlow)" />
              {/* Central Code Icon */}
              <path d="M93 93L87 100L93 107M107 93L113 100L107 107M102 91L98 109" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>

        {/* 3D Kinetic Title with HUD Framing */}
        <div className="relative mb-1">
          <div className="text-[11px] sm:text-xs font-mono tracking-[0.25em] text-[#FF1E56] drop-shadow-[0_0_10px_rgba(255,0,85,0.85)] mb-1 flex items-center justify-center gap-2">
            <span className="w-8 h-[1.5px] bg-gradient-to-r from-transparent to-[#FF1E56]"></span>
            <span className="font-bold">SYSTEM // ARCHITECT • MRINAL.DEV</span>
            <span className="w-8 h-[1.5px] bg-gradient-to-l from-transparent to-[#FF1E56]"></span>
          </div>
          <h1 ref={titleRef} className="hero-title select-none">
            {splitTitle("MRINAL SINGH")}
          </h1>
        </div>

        {/* Subtitles & Bio */}
        <div ref={subtitleRef} className="hero-subtitle cosmos-subtitle text-center">
          <div className="px-6 py-4 rounded-2xl hero-glass-card max-w-2xl mx-auto mb-2">
            <p className="subtitle-line font-semibold text-[#FFFFFF] text-sm sm:text-base mb-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Computer Science Engineering Student • <span className="text-[#67E8F9] font-bold">Full-Stack Developer</span>
            </p>
            <p className="subtitle-line text-xs sm:text-sm text-[#E8F1FF] leading-relaxed font-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              Building practical web applications and strengthening problem-solving through Data Structures & Algorithms.
            </p>
          </div>
        </div>

        {/* Tech Badges & Interactive CTAs */}
        {showExtras && (
          <div ref={ctaRef} className="w-full flex flex-col items-center pointer-events-auto z-20">
            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-2xl">
              {techBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg bg-[#071737]/80 border border-white/18 text-xs sm:text-sm font-medium text-[#E8F1FF] backdrop-blur-md hover:border-[#67E8F9]/60 hover:text-white transition-colors"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold shadow-lg shadow-[#6366F1]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>Explore Projects</span>
                <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('journey')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#071737]/85 text-[#E8F1FF] border border-white/18 font-semibold hover:bg-[#071737] hover:text-white hover:border-[#67E8F9]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer backdrop-blur-md"
              >
                <FaCode className="w-3.5 h-3.5 text-[#67E8F9]" />
                <span>Technical Journey</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center px-7 py-3.5 rounded-xl bg-[#071737]/70 text-[#AFC4E5] border border-white/15 font-semibold hover:bg-[#071737] hover:text-white hover:border-white/30 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer backdrop-blur-md"
              >
                Get in Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 rounded-xl bg-[#071737]/80 border border-white/15 text-[#AFC4E5] hover:text-[#67E8F9] hover:border-[#67E8F9]/50 hover:bg-[#071737] hover:-translate-y-1 transition-all shadow-sm"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Floating Scroll Progress Indicator */}
      <div ref={scrollProgressRef} className="scroll-progress" style={{ visibility: 'hidden' }}>
        <div className="scroll-text">COSMOS FLIGHT</div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${scrollProgress * 100}%` }} />
        </div>
        <div className="section-counter">
          {String(currentSection).padStart(2, '0')} / {String(totalSections).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};

export default Component;
