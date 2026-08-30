import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useAnimatedCounter from '../hooks/useAnimatedCounter';

const Stats = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cgpa = useAnimatedCounter(93, 2000, isInView);
  const problems = useAnimatedCounter(200, 2000, isInView);
  const prs = useAnimatedCounter(6, 2000, isInView);

  const stats = [
    {
      label: 'CGPA',
      value: cgpa,
      suffix: ' / 10',
      description: 'Strong Academic Foundation',
    },
    {
      label: 'Problems Solved',
      value: problems,
      suffix: '+',
      description: 'LeetCode & DSA Practice',
    },
    {
      label: 'Merged PRs',
      value: prs,
      suffix: '+',
      description: 'Open Source Contributions',
    },
    {
      label: 'Journey',
      value: '2024',
      suffix: ' - 2028',
      description: 'B.Tech CSE at KIIT',
    },
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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={sectionRef} id="stats" className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ translateY: -8 }}
              className="group relative p-6 rounded-xl bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 hover:border-accent/40 transition-all overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative z-10">
                <div className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">
                  {stat.label}
                </div>

                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl sm:text-5xl font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="text-lg text-gray-400">{stat.suffix}</span>
                </div>

                <p className="text-sm text-gray-400">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
