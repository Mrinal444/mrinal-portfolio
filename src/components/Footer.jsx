import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Problem Solving', id: 'problem-solving' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Mrinal444', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/mrinal444', label: 'LinkedIn' },
    { icon: SiLeetcode, url: 'https://leetcode.com/u/Mrinal444', label: 'LeetCode' },
    { icon: FaEnvelope, url: 'mailto:mrings98@gmail.com', label: 'Email' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      if (window.__lenis) {
        window.__lenis.scrollTo(element, { offset: -80, duration: 1.2 });
      } else {
        const top = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#071737]/85 backdrop-blur-xl border-t border-white/15 py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold text-white hover:text-[#67E8F9] transition-colors mb-3 cursor-pointer"
            >
              <span className="text-[#67E8F9]">&lt;</span>
              Mrinal
              <span className="text-[#67E8F9]">/&gt;</span>
            </button>
            <p className="text-[#E8F1FF] text-sm leading-relaxed font-normal">
              Computer Science Engineering Student building practical software and solving meaningful problems through technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-[#E8F1FF] hover:text-[#67E8F9] transition-colors text-sm text-left cursor-pointer font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 rounded-xl bg-[#071737]/90 backdrop-blur-md border border-white/15 text-[#E8F1FF] hover:text-[#67E8F9] hover:border-[#67E8F9]/50 transition-all shadow-md"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/15 mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-[#E8F1FF] text-sm font-medium"
        >
          <p>
            © {currentYear} Mrinal Singh. Computer Science Engineering Student | Aspiring Software Engineer.
          </p>
          <p className="mt-2 text-[#E8F1FF]/75">
            All rights reserved. Built with React, Tailwind CSS, and Three.js.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
