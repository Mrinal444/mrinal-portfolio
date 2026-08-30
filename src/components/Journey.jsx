import React from 'react';
import { motion } from 'framer-motion';

const Journey = () => {
  const journeyData = [
    {
      year: '2024',
      title: 'Beginning My Journey',
      description:
        'Started my Computer Science Engineering journey at KIIT and focused on building strong programming and web development fundamentals. Established a solid foundation in core CS concepts.',
    },
    {
      year: '2025',
      title: 'Expanding Horizons',
      description:
        'Expanded into Data Structures & Algorithms, full-stack development, participated in hackathons, and made meaningful open-source contributions. Strengthened problem-solving skills and real-world application development.',
    },
    {
      year: '2026',
      title: 'Building Impact',
      description:
        'Currently working on larger and more impactful projects including SkillOutcome and SSC JE Mock Test Platform. Focusing on advanced full-stack development and scalable solutions.',
    },
    {
      year: 'Road Ahead',
      title: 'Future Goals',
      description:
        'Aiming for software engineering internships, stronger DSA skills, full-stack expertise, open-source contributions, competitive programming, and building scalable real-world products that make a difference.',
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            My Development <span className="text-accent">Journey</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Growth through learning, building, and continuous improvement.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent to-transparent -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-8 lg:space-y-12">
            {journeyData.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div
                  className={`p-6 rounded-xl bg-dark-800 border border-dark-700 hover:border-accent/40 transition-all ${
                    idx % 2 === 1 ? 'lg:col-start-2' : 'lg:col-start-1'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-accent font-bold text-lg">{item.year}</span>
                    <div className="hidden lg:block h-px flex-1 bg-gradient-to-r from-accent to-transparent" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>

                {/* Timeline Dot (Desktop Only) */}
                <div className="hidden lg:flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-6 h-6 rounded-full bg-accent border-4 border-dark-900 relative z-10"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
