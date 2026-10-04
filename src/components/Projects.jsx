import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaRocket } from 'react-icons/fa';
import projectsData from '../data/projects';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Currently Building':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
      case 'In Development':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'Completed':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      default:
        return 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40';
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#071737]/85 border border-white/20 backdrop-blur-md mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#67E8F9] shadow-[0_0_8px_#67E8F9]" />
            <span className="text-xs uppercase tracking-widest text-[#67E8F9] font-bold">
              Engineering Work & Problem Solving
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#FFFFFF] mb-4">
            Featured <span className="text-[#FFFFFF]">Projects</span>
          </h2>
          <div className="inline-block p-5 sm:p-6 rounded-2xl bg-[#071737]/85 backdrop-blur-md border border-white/18 shadow-xl shadow-black/50 max-w-2xl">
            <p className="text-[#E8F1FF] text-base sm:text-lg font-medium leading-relaxed">
              Practical software applications built with a focus on real-world utility, clean architecture, and structured problem-solving.
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ translateY: -6 }}
              className={`group relative rounded-2xl backdrop-blur-md border transition-all shadow-2xl shadow-black/50 ${
                project.isFeatured
                  ? 'lg:col-span-2 p-8 bg-[#071737]/85 border-white/20 hover:border-[#67E8F9]/60'
                  : 'p-6 sm:p-8 bg-[#071737]/80 border-white/18 hover:border-[#67E8F9]/50'
              }`}
            >
              {/* Subtle Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#67E8F9]/0 via-[#67E8F9]/8 to-[#67E8F9]/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl" />

              <div className="relative z-10">
                {/* Header: Status Badge & Project Type */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span
                    className={`inline-block px-3.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${getStatusBadge(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                  {project.type && (
                    <span className="text-xs font-mono text-[#67E8F9] tracking-wider uppercase">
                      {project.type}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1.5">
                  {project.title}
                </h3>
                <p className="text-[#67E8F9] text-sm sm:text-base font-semibold mb-4">
                  {project.subtitle}
                </p>

                {/* Problem Statement Box */}
                {project.problem && (
                  <div className="p-4 rounded-xl bg-[#071737]/90 border border-white/12 backdrop-blur-md mb-5 shadow-inner">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#67E8F9] mb-1">
                      Problem Context
                    </p>
                    <p className="text-xs sm:text-sm text-[#E8F1FF]/90 leading-relaxed font-normal">
                      {project.problem}
                    </p>
                  </div>
                )}

                {/* Description */}
                <p className="text-[#E8F1FF] mb-6 leading-relaxed font-normal text-sm sm:text-base">
                  {project.description}
                </p>

                {/* What I Built / Key Features */}
                {project.whatIBuilt && project.whatIBuilt.length > 0 && (
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-wider text-[#67E8F9] font-bold mb-3">
                      Key Highlights & Implementation
                    </p>
                    <div
                      className={`grid gap-2.5 ${
                        project.isFeatured ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
                      }`}
                    >
                      {project.whatIBuilt.map((point, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E8F1FF]"
                        >
                          <FaCheckCircle className="w-3.5 h-3.5 text-[#67E8F9] mt-1 flex-shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Future Impact & Vision */}
                {project.futureImpact && (
                  <div className="p-4 rounded-xl bg-[#071737]/90 border border-white/12 backdrop-blur-md mb-6 shadow-inner">
                    <div className="flex items-center gap-2 mb-1.5">
                      <FaRocket className="w-3.5 h-3.5 text-[#67E8F9]" />
                      <p className="text-xs font-bold uppercase tracking-wider text-[#67E8F9]">
                        Future Impact & Potential
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-[#E8F1FF]/90 leading-relaxed font-normal">
                      {project.futureImpact}
                    </p>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-[#67E8F9] font-bold mb-3">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-1.5 rounded-lg bg-[#071737]/90 border border-white/15 text-xs text-[#E8F1FF] font-medium hover:border-[#67E8F9]/50 transition-colors backdrop-blur-md shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#6366F1] text-white text-sm font-semibold hover:bg-[#4F46E5] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#6366F1]/30 cursor-pointer"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#071737]/90 text-[#E8F1FF] border border-white/20 text-sm font-semibold hover:bg-[#071737] hover:text-white hover:border-[#67E8F9]/50 transition-all transform hover:-translate-y-0.5 backdrop-blur-md shadow-md cursor-pointer"
                    >
                      <FaExternalLinkAlt className="w-3.5 h-3.5 text-[#67E8F9]" />
                      <span>Live Deployment</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
