import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: FaGithub,
      url: 'https://github.com/Mrinal444',
      label: 'GitHub',
    },
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/mrinal444',
      label: 'LinkedIn',
    },
    {
      icon: SiLeetcode,
      url: 'https://leetcode.com/u/Mrinal444',
      label: 'LeetCode',
    },
    {
      icon: FaEnvelope,
      url: 'mailto:mrings98@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800 border border-dark-700 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs sm:text-sm text-gray-300">
            Open to internships & technical opportunities
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
        >
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-indigo-400 to-accent-light">
            Mrinal Singh
          </span>
          .
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-medium max-w-3xl mx-auto mb-6"
        >
          Computer Science Student building practical software and solving meaningful problems through technology.
        </motion.p>

        {/* Supporting Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I am a Computer Science Engineering undergraduate focused on software development, Data Structures & Algorithms, and building real-world applications. I enjoy breaking down complex problems, learning new technologies, and turning ideas into functional products.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent-dark transition-all transform hover:-translate-y-0.5 shadow-lg shadow-accent/25 cursor-pointer"
          >
            View My Projects
          </button>
          <button
            onClick={() => scrollToSection('journey')}
            className="px-6 py-3 rounded-lg bg-dark-800 text-gray-200 border border-dark-700 font-medium hover:bg-dark-700 hover:text-white transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            Explore My Journey
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 rounded-lg bg-dark-800 text-gray-200 border border-dark-700 font-medium hover:bg-dark-700 hover:text-white transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center gap-6"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-lg bg-dark-800 border border-dark-700 text-gray-400 hover:text-accent hover:border-accent/40 transition-all transform hover:-translate-y-1 shadow-sm"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
