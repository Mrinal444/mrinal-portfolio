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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">Technologies and tools I work with.</p>
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
              className="p-6 rounded-xl bg-dark-800 border border-dark-700 hover:border-accent/40 transition-all"
            >
              <h3 className="text-lg font-semibold text-accent mb-5">
                {skillGroup.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, skillIdx) => {
                  const Icon = getIcon(skill.icon);
                  return (
                    <motion.div
                      key={skillIdx}
                      variants={skillVariants}
                      whileHover={{ scale: 1.1, translateY: -4 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-700/50 border border-dark-600 hover:border-accent/60 transition-all group cursor-default"
                    >
                      {Icon && (
                        <Icon className="w-4 h-4 text-accent group-hover:text-accent-light transition-colors" />
                      )}
                      <span className="text-sm text-gray-300 font-medium">
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
