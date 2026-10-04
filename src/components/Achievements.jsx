import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaGithub, FaCertificate } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      title: 'GSSoC Contributor',
      year: '2025',
      description:
        'Contributed to open-source software during GirlScript Summer of Code across multiple active repositories, submitting quality code and fixing real issues.',
      icon: FaAward,
      highlights: ['Open Source Contribution', 'Collaborative Development', 'Code Quality & Reviews'],
      stat: 'GSSoC \'25',
    },
    {
      title: 'Hacktoberfest',
      year: '2025',
      description:
        'Actively participated in the global open-source community, authoring and successfully merging pull requests in community repositories.',
      icon: FaGithub,
      highlights: ['6 Pull Requests Merged', 'Git & GitHub Workflows', 'Community Contribution'],
      stat: '6 PRs',
    },
    {
      title: 'Data Structures & Algorithms',
      year: 'Active',
      description:
        'Disciplined algorithmic practice solving diverse data structure and algorithm problems across LeetCode and competitive programming platforms.',
      icon: FaAward,
      highlights: ['200+ Problems Solved', 'Arrays to DP & Graphs', 'Optimization & Clean Code'],
      stat: '200+',
    },
  ];

  const certifications = [
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      description:
        'Certified in core modern web design, responsive layouts, CSS Flexbox/Grid, and accessible HTML5 semantics.',
    },
    {
      title: 'TCS iON Career Edge',
      issuer: 'TCS iON',
      description:
        'Professional readiness and technical problem-solving foundation program.',
    },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-2">
            <FaCertificate className="w-3.5 h-3.5 text-[#67E8F9]" />
            <span className="text-xs uppercase tracking-widest text-[#67E8F9] font-bold">
              Recognition & Engagement
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Open Source & <span className="text-[#67E8F9]">Achievements</span>
          </h2>
          <p className="text-[#E8F1FF] mt-4 text-base sm:text-lg font-medium max-w-2xl">
            Contributing to developer communities, building real-world collaboration skills, and validating technical capabilities.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ translateY: -6 }}
                className="group relative p-6 sm:p-7 rounded-2xl bg-[#071737]/80 backdrop-blur-md border border-white/18 hover:border-[#67E8F9]/50 transition-all overflow-hidden shadow-xl shadow-black/50"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#67E8F9]/0 via-[#67E8F9]/10 to-[#67E8F9]/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[#071737]/90 border border-white/15 text-[#67E8F9]">
                      <Icon className="w-5 h-5" />
                    </div>
                    {achievement.stat && (
                      <span className="px-3.5 py-1 rounded-full bg-[#071737]/90 border border-[#67E8F9]/40 text-[#67E8F9] text-xs font-bold backdrop-blur-md shadow-sm">
                        {achievement.stat}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-[#E8F1FF] text-xs sm:text-sm mb-4 leading-relaxed font-normal">
                    {achievement.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-white/10">
                    {achievement.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-[#E8F1FF]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#67E8F9] shadow-[0_0_6px_#67E8F9] flex-shrink-0" />
                        <span className="font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Certifications & Training</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                whileHover={{ translateY: -4 }}
                className="p-6 rounded-2xl bg-[#071737]/80 backdrop-blur-md border border-white/18 hover:border-[#67E8F9]/50 transition-all shadow-xl shadow-black/50"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-bold text-white">{cert.title}</h4>
                  <span className="text-xs px-2.5 py-0.5 rounded-md bg-[#67E8F9]/10 border border-[#67E8F9]/30 text-[#67E8F9] font-medium">
                    {cert.issuer}
                  </span>
                </div>
                <p className="text-[#E8F1FF] text-xs sm:text-sm leading-relaxed font-normal">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
