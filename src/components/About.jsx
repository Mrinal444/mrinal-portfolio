import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  const approaches = [
    'Understanding Fundamentals',
    'Solving Problems',
    'Building Projects',
    'Learning from Mistakes',
    'Continuously Improving',
  ];

  const activities = [
    'Academic Learning',
    'Personal Projects',
    'Hackathons',
    'Competitive Programming',
    'Open Source Contributions',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Building Skills Through{' '}
            <span className="text-accent">Problems</span> and{' '}
            <span className="text-accent">Projects.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative group">
              {/* Profile Image Container */}
              <div className="relative w-72 h-72 rounded-2xl overflow-hidden border-4 border-accent/20 group-hover:border-accent/40 transition-all duration-300">
                {/* Placeholder - Replace with your actual image */}
                <img
                  src="/profile.jpg"
                  alt="Mrinal Singh"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback gradient if no image */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent via-indigo-500 to-purple-600 flex items-center justify-center">
                  <span className="text-8xl font-bold text-white">MS</span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all" />

              {/* Info Badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full bg-dark-800 border border-dark-700 shadow-lg">
                <p className="text-sm font-semibold text-white whitespace-nowrap">
                  CGPA: <span className="text-accent">9.3/10</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I am currently pursuing a <span className="text-white font-semibold">B.Tech in Computer Science and Engineering at KIIT</span> with a strong academic foundation and a <span className="text-accent font-semibold">CGPA of 9.3/10</span>.
            </p>

            <div>
              <p className="text-gray-400 mb-3">My primary interests include:</p>
              <ul className="space-y-2">
                {['Software Engineering', 'Data Structures & Algorithms', 'Problem Solving', 'Full-Stack Development', 'Web Development'].map((interest, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {interest}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-accent-glow border border-accent/20">
              <p className="text-gray-200 italic">
                "I prefer understanding the logic behind systems rather than memorizing concepts."
              </p>
            </div>
          </motion.div>
        </div>

        {/* My Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-6">My Approach to Learning</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {approaches.map((approach, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-4 rounded-lg bg-dark-800 border border-dark-700 hover:border-accent/40 transition-all text-center"
              >
                <div className="flex flex-col items-center gap-2">
                  <FaCheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm text-gray-300">{approach}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Active Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl bg-dark-800 border border-dark-700"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Actively Working On</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {activities.map((activity, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, translateY: -5 }}
                className="p-4 rounded-lg bg-dark-700/50 border border-dark-600 text-center hover:border-accent/40 transition-all cursor-default"
              >
                <p className="text-sm text-gray-300 font-medium">{activity}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
