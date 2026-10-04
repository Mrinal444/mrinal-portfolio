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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
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
              About Me
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#FFFFFF] mb-4">
            Building Skills Through{' '}
            <span className="text-[#FFFFFF]">Problems</span> and{' '}
            <span className="text-[#FFFFFF]">Projects.</span>
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
              <div className="relative w-72 h-72 rounded-2xl overflow-hidden border-4 border-[#67E8F9]/30 group-hover:border-[#67E8F9]/60 transition-all duration-300 backdrop-blur-md shadow-2xl shadow-black/60">
                {/* Fallback gradient if no image */}
                <div
                  id="pfp-fallback"
                  className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-slate-900 flex items-center justify-center"
                  style={{ display: 'none' }}
                >
                  <span className="text-8xl font-bold text-white">MS</span>
                </div>

                {/* Profile Picture from public/pfp.png */}
                <img
                  src="/pfp.png"
                  alt="Mrinal Singh"
                  className="relative z-10 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const fallback = document.getElementById('pfp-fallback');
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#67E8F9]/15 rounded-full blur-2xl group-hover:bg-[#67E8F9]/30 transition-all" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6366F1]/20 rounded-full blur-2xl group-hover:bg-[#6366F1]/35 transition-all" />

              {/* Info Badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full bg-[#071737]/90 border border-white/20 backdrop-blur-md shadow-xl shadow-black/60">
                <p className="text-sm font-semibold text-white whitespace-nowrap">
                  CGPA: <span className="text-[#67E8F9] font-bold">9.3/10</span>
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
            <div className="p-6 rounded-2xl bg-[#071737]/80 backdrop-blur-md border border-white/18 shadow-xl shadow-black/50 space-y-4">
              <p className="text-lg text-[#E8F1FF] leading-relaxed">
                I am currently pursuing a <span className="text-white font-semibold">B.Tech in Computer Science and Engineering at KIIT</span> with a strong academic foundation and a <span className="text-[#67E8F9] font-bold">CGPA of 9.3/10</span>.
              </p>

              <div>
                <p className="text-white font-medium mb-3">My primary interests include:</p>
                <ul className="space-y-2">
                  {['Software Engineering', 'Data Structures & Algorithms', 'Problem Solving', 'Full-Stack Development', 'Web Development'].map((interest, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[#E8F1FF]">
                      <span className="w-2 h-2 rounded-full bg-[#67E8F9] shadow-[0_0_8px_#67E8F9]" />
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#071737]/90 backdrop-blur-md border border-white/15 shadow-inner">
                <p className="text-[#E8F1FF] italic">
                  "I prefer understanding the logic behind systems rather than memorizing concepts."
                </p>
              </div>
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
                className="p-4 rounded-xl bg-[#071737]/80 backdrop-blur-md border border-white/18 hover:border-[#67E8F9]/50 transition-all text-center shadow-lg shadow-black/30"
              >
                <div className="flex flex-col items-center gap-2">
                  <FaCheckCircle className="w-5 h-5 text-[#67E8F9]" />
                  <span className="text-sm font-medium text-[#E8F1FF]">{approach}</span>
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
          className="p-8 rounded-2xl bg-[#071737]/80 backdrop-blur-md border border-white/18 shadow-2xl shadow-black/50"
        >
          <h3 className="text-xl font-bold text-white mb-6">Actively Working On</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {activities.map((activity, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, translateY: -5 }}
                className="p-4 rounded-xl bg-[#071737]/90 border border-white/15 text-center hover:border-[#67E8F9]/60 transition-all cursor-default backdrop-blur-md shadow-md"
              >
                <p className="text-sm text-[#E8F1FF] font-medium">{activity}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
