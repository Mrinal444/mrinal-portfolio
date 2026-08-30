import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaGithub } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      title: 'GSSoC Contributor',
      year: '2025',
      description: 'Contributed to open-source projects during GirlScript Summer of Code across multiple repositories.',
      icon: FaAward,
      highlights: ['Open Source Contribution', 'Collaborative Development', 'Real-world Impact'],
    },
    {
      title: 'Hacktoberfest',
      year: '2025',
      description: 'Actively participated in open-source community and successfully merged pull requests.',
      icon: FaGithub,
      highlights: ['6 Pull Requests Merged', 'GitHub Workflows', 'Community Contribution'],
      stat: '6 PRs',
    },
    {
      title: 'Data Structures & Algorithms',
      description: 'Consistent practice and improvement in algorithmic problem-solving.',
      icon: FaAward,
      highlights: ['200+ Problems Solved', 'Multiple Platforms', 'Problem-Solving Mastery'],
      stat: '200+',
    },
  ];

  const certifications = [
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      description: 'Comprehensive course on modern web design principles and responsive development.',
    },
    {
      title: 'TCS iON Career Edge',
      issuer: 'TCS iON',
      description: 'Interview and job readiness training program.',
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
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900">
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
            Open Source & <span className="text-accent">Achievements</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Contributing to the community and building real-world experience.
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
                whileHover={{ translateY: -8 }}
                className="group relative p-6 rounded-xl bg-dark-800 border border-dark-700 hover:border-accent/40 transition-all overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                    {achievement.stat && (
                      <span className="px-3 py-1 rounded-lg bg-accent/10 text-accent text-sm font-bold">
                        {achievement.stat}
                      </span>
                    )}
                    {achievement.year && (
                      <span className="text-xs text-gray-500">{achievement.year}</span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {achievement.description}
                  </p>

                  <div className="space-y-2">
                    {achievement.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        <span className="text-xs text-gray-400">{highlight}</span>
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
          <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                whileHover={{ translateY: -4 }}
                className="p-6 rounded-xl bg-dark-800 border border-dark-700 hover:border-accent/40 transition-all"
              >
                <h4 className="text-lg font-semibold text-white mb-1">
                  {cert.title}
                </h4>
                <p className="text-accent text-sm font-medium mb-3">{cert.issuer}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
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
