import React from 'react';
import { motion } from 'framer-motion';

const CurrentlyLearning = () => {
  const learningAreas = [
    'Advanced Data Structures & Algorithms',
    'React.js',
    'Full-Stack Application Development',
    'Backend Development',
    'Database Systems',
    'System Design Fundamentals',
  ];

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="learning" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Currently <span className="text-accent">Exploring</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Continuous learning and growth through new technologies and deeper understanding.
          </p>
        </motion.div>

        {/* Learning Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {learningAreas.map((area, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05, translateY: -6 }}
              className="group p-5 rounded-lg bg-dark-800 border border-dark-700 hover:border-accent/40 transition-all cursor-default"
            >
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0 animate-pulse" />
                <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                  {area}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Motivational Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-xl bg-accent-glow border border-accent/20 text-center"
        >
          <p className="text-gray-300 text-lg">
            Growing every day through hands-on projects, challenging problems, and real-world application development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentlyLearning;
