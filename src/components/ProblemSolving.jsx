import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const ProblemSolving = () => {
  const dsaTopics = [
    'Arrays',
    'Strings',
    'Linked Lists',
    'Stacks',
    'Queues',
    'Trees',
    'Recursion',
    'Searching',
    'Sorting',
    'Dynamic Programming',
    'Graph Fundamentals',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="problem-solving" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading & Stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#071737]/85 border border-white/20 backdrop-blur-md mb-4 shadow-sm">
            <FaCode className="w-3.5 h-3.5 text-[#67E8F9]" />
            <span className="text-xs uppercase tracking-widest text-[#67E8F9] font-bold">
              Algorithmic Problem Solving
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Current <span className="text-[#67E8F9]">DSA Focus</span>
          </h2>

          <div className="inline-block p-8 rounded-2xl bg-[#071737]/85 backdrop-blur-md border border-white/20 shadow-2xl shadow-black/60 mt-4">
            <div className="text-5xl sm:text-6xl font-extrabold text-[#67E8F9] mb-2 drop-shadow-[0_0_20px_rgba(103,232,249,0.4)]">
              200+
            </div>
            <p className="text-white text-base sm:text-lg font-semibold">Problems Solved</p>
          </div>

          <div className="mt-8 px-6 py-5 rounded-2xl bg-[#071737]/80 backdrop-blur-md border border-white/18 shadow-xl shadow-black/50 max-w-2xl mx-auto">
            <p className="text-[#E8F1FF] text-sm sm:text-base leading-relaxed font-normal">
              Consistently strengthening problem-solving skills through Data Structures and Algorithms practice. Building intuition for optimization and exploring multiple approaches to solve complex computational challenges.
            </p>
          </div>
        </motion.div>

        {/* DSA Topics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Key Areas of Practice
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {dsaTopics.map((topic, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.04, translateY: -3 }}
                className="p-4 rounded-xl bg-[#071737]/75 backdrop-blur-md border border-white/15 hover:border-[#67E8F9]/60 text-center transition-all cursor-default group shadow-lg shadow-black/30"
              >
                <span className="text-[#E8F1FF] text-sm font-medium group-hover:text-[#67E8F9] transition-colors">
                  {topic}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="https://leetcode.com/u/s_mrinal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold shadow-lg shadow-[#6366F1]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <SiLeetcode className="w-5 h-5 text-amber-400" />
            <span>View LeetCode Profile</span>
            <FaExternalLinkAlt className="w-3.5 h-3.5 opacity-80" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolving;
