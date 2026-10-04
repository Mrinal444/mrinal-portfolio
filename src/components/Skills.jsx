import React from 'react';
import { motion } from 'framer-motion';
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiSupabase,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import skillsData from '../data/skills';

const Skills = () => {
  const getIcon = (iconName) => {
    const iconMap = {
      SiC,
      SiCplusplus,
      SiJavascript,
      SiHtml5,
      SiReact,
      SiNodedotjs,
      SiSupabase,
      SiPostgresql,
      SiGit,
      SiGithub,
      FaJava,
    };
    return iconMap[iconName] || null;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
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
            <span className="text-xs uppercase tracking-widest text-[#67E8F9] font-bold">
              Core Competencies
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#FFFFFF] mb-4">
            Technical <span className="text-[#FFFFFF]">Skills</span>
          </h2>
          <div className="inline-block p-5 sm:p-6 rounded-2xl bg-[#071737]/85 backdrop-blur-md border border-white/18 shadow-xl shadow-black/50 max-w-2xl">
            <p className="text-[#E8F1FF] text-base sm:text-lg font-medium leading-relaxed">
              Technologies, frameworks, and programming languages I use to build scalable systems.
            </p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-6 rounded-2xl bg-[#071737]/80 backdrop-blur-md border border-white/18 hover:border-[#67E8F9]/50 transition-all shadow-xl shadow-black/50"
            >
              <h3 className="text-lg font-semibold text-[#67E8F9] mb-5">
                {skillGroup.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, skillIdx) => {
                  const Icon = getIcon(skill.icon);
                  return (
                    <motion.div
                      key={skillIdx}
                      variants={skillVariants}
                      whileHover={{ scale: 1.08, translateY: -3 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#071737]/90 border border-white/15 hover:border-[#67E8F9]/60 transition-all group cursor-default backdrop-blur-md shadow-sm"
                    >
                      {Icon && (
                        <Icon className="w-4 h-4 text-[#67E8F9] group-hover:text-white transition-colors" />
                      )}
                      <span className="text-sm text-[#E8F1FF] font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
