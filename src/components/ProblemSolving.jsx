import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

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
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="problem-solving" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-950">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading & Stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Problem Solving & <span className="text-accent">DSA</span>
          </h2>

          <div className="inline-block p-6 rounded-xl bg-gradient-to-br from-dark-800 to-dark-900 border border-accent/30 mt-6">
            <div className="text-5xl sm:text-6xl font-bold text-accent mb-2">
              200+
            </div>
            <p className="text-gray-300 text-lg">Problems Solved</p>
          </div>

          <p className="text-gray-400 mt-8 text-lg max-w-2xl mx-auto leading-relaxed">
            Consistently strengthening problem-solving skills through Data Structures and Algorithms practice. Building intuition for optimization and exploring multiple approaches to solve complex computational challenges.
          </p>
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
                whileHover={{ scale: 1.08, translateY: -4 }}
                className="p-4 rounded-lg bg-dark-800 border border-dark-700 hover:border-accent/60 text-center transition-all cursor-default group"
              >
                <span className="text-gray-300 font-medium group-hover:text-accent transition-colors">
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
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="https://leetcode.com/u/Mrinal444"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent-dark transition-all transform hover:-translate-y-0.5 shadow-lg shadow-accent/25"
          >
            View LeetCode Profile
            <FaExternalLinkAlt className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolving;
