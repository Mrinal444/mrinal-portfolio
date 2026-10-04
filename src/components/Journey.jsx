import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import journeyData from '../data/journey';

const Journey = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#071737]/85 border border-white/20 backdrop-blur-md mb-4 shadow-sm">
            <FaGraduationCap className="w-3.5 h-3.5 text-[#67E8F9]" />
            <span className="text-xs uppercase tracking-widest text-[#67E8F9] font-bold">
              Milestones & Timeline
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-[#FFFFFF] mb-4">
            My Technical <span className="text-[#FFFFFF]">Journey</span>
          </h2>
          <div className="inline-block p-5 sm:p-6 rounded-2xl bg-[#071737]/85 backdrop-blur-md border border-white/18 shadow-xl shadow-black/50 max-w-2xl mx-auto">
            <p className="text-[#E8F1FF] text-base sm:text-lg font-medium leading-relaxed">
              Growth through continuous learning, building practical software, solving challenging problems, and contributing to open-source communities.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#67E8F9] via-[#6366F1]/60 to-transparent -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-8 lg:space-y-12">
            {journeyData.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div
                  className={`p-6 sm:p-8 rounded-2xl bg-[#071737]/80 backdrop-blur-md border border-white/18 hover:border-[#67E8F9]/50 shadow-xl shadow-black/50 transition-all ${
                    idx % 2 === 1 ? 'lg:col-start-2' : 'lg:col-start-1'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#67E8F9] font-bold text-lg tracking-wide">
                      {item.year}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-[#67E8F9]/40 to-transparent" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-xs font-mono uppercase tracking-wider text-[#67E8F9] mb-3">
                      {item.subtitle}
                    </p>
                  )}

                  <p className="text-[#E8F1FF] leading-relaxed font-normal text-sm sm:text-base mb-4">
                    {item.description}
                  </p>

                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-[#071737]/90 border border-white/12 text-[11px] font-medium text-[#E8F1FF]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Timeline Center Dot (Desktop Only) */}
                <div
                  className={`hidden lg:flex justify-center ${
                    idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-[#67E8F9] border-4 border-[#071737] relative z-10 shadow-[0_0_12px_#67E8F9]" />
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
