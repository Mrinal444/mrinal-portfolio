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
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#071737]/85 border border-white/20 backdrop-blur-md mb-4 shadow-sm">
            <span className="text-xs uppercase tracking-widest text-[#67E8F9] font-bold">
              Formal Education
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#FFFFFF]">
            Academic <span className="text-[#FFFFFF]">Education</span>
          </h2>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-[#071737]/80 backdrop-blur-md border border-white/18 hover:border-[#67E8F9]/50 transition-all shadow-2xl shadow-black/50"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left - Institution Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {education.institution}
              </h3>
              <p className="text-[#67E8F9] text-lg font-semibold mb-1">
                {education.degree}
              </p>
              <p className="text-[#E8F1FF] mb-6 font-medium">
                {education.duration}
              </p>

              <div className="p-4 rounded-xl bg-[#071737]/90 border border-white/15 inline-block backdrop-blur-md shadow-inner">
                <p className="text-xs text-[#67E8F9] uppercase tracking-wider font-bold mb-1">
                  CGPA
                </p>
                <p className="text-3xl font-extrabold text-white">
                  {education.cgpa}
                </p>
              </div>
            </div>

            {/* Right - Relevant Coursework */}
            <div>
              <p className="text-[#67E8F9] uppercase text-xs tracking-wider font-bold mb-4">
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
                    <span className="w-1.5 h-1.5 rounded-full bg-[#67E8F9] shadow-[0_0_6px_#67E8F9] flex-shrink-0" />
                    <span className="text-[#E8F1FF] font-medium">{course}</span>
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
