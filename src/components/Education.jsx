import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = {
    institution: 'Kalinga Institute of Industrial Technology (KIIT)',
    degree: 'B.Tech — Computer Science and Engineering',
    duration: '2024 – 2028',
    cgpa: '9.3 / 10',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
      'Software Engineering',
    ],
  };

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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-950">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            <span className="text-accent">Education</span>
          </h2>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl bg-dark-800 border border-dark-700 hover:border-accent/40 transition-all"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left - Institution Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {education.institution}
              </h3>
              <p className="text-accent text-lg font-semibold mb-1">
                {education.degree}
              </p>
              <p className="text-gray-400 mb-6">
                {education.duration}
              </p>

              <div className="p-4 rounded-lg bg-dark-700/50 border border-dark-600 inline-block">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">
                  CGPA
                </p>
                <p className="text-3xl font-bold text-accent">
                  {education.cgpa}
                </p>
              </div>
            </div>

            {/* Right - Relevant Coursework */}
            <div>
              <p className="text-gray-400 uppercase text-xs tracking-wider font-semibold mb-4">
                Relevant Areas of Study
              </p>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {education.coursework.map((course, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-gray-300">{course}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
