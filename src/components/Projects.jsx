import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'SkillOutcome',
      subtitle: 'Employment Outcome & Skill Tracking Platform',
      status: 'Currently Building',
      statusColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
      description:
        'A comprehensive platform addressing Smart India Hackathon problem statement for tracking employment outcomes, skill gaps, and long-term livelihood impact of training programs.',
      features: [
        'Trainee tracking and profile management',
        'Employment outcome monitoring',
        'Skill gap identification',
        'Long-term outcome tracking',
        'Analytics dashboards',
        'Training program effectiveness visualization',
      ],
      tech: ['React.js', 'Node.js', 'Supabase', 'PostgreSQL'],
      github: 'https://github.com/Mrinal444',
      demo: null,
      featured: true,
    },
    {
      id: 2,
      title: 'SSC JE Mock Test Preparation',
      subtitle: 'Modern Exam Preparation Platform',
      status: 'In Development',
      statusColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      description:
        'A focused and structured examination preparation platform designed for SSC JE aspirants with comprehensive practice and performance tracking.',
      features: [
        'Full-length mock tests',
        'Subject-wise practice sections',
        'Comprehensive question bank',
        'Performance analytics',
        'Test analysis with insights',
        'Progress monitoring dashboard',
      ],
      tech: ['React.js'],
      github: 'https://github.com/Mrinal444',
      demo: null,
    },
    {
      id: 3,
      title: 'SIH Full-Stack Web Application',
      subtitle: 'Smart India Hackathon Project',
      status: 'Completed',
      statusColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      description:
        'A responsive full-stack application developed collaboratively under hackathon constraints, featuring user authentication and cloud-based data management.',
      features: [
        'Responsive frontend design',
        'User authentication system',
        'Login and signup functionality',
        'Cloud-based user data storage',
        'Database integration',
        'Team collaboration workflow',
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Supabase', 'PostgreSQL'],
      github: 'https://github.com/Mrinal444',
      demo: null,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-950">
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
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Real-world applications and problem-solving in action.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ translateY: -8 }}
              className={`group relative rounded-xl border overflow-hidden transition-all ${
                project.featured
                  ? 'lg:col-span-2 p-8 bg-gradient-to-br from-dark-800 to-dark-900 border-accent/30 hover:border-accent/60'
                  : 'p-6 bg-dark-800 border-dark-700 hover:border-accent/40'
              }`}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative z-10">
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${project.statusColor}`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-accent text-sm font-medium mb-4">{project.subtitle}</p>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
                    Key Features
                  </p>
                  <div className={`grid gap-2 ${project.featured ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1'}`}>
                    {project.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-400"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-dark-700/50 border border-dark-600 text-xs text-gray-300 hover:border-accent/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white font-medium hover:bg-accent-dark transition-all transform hover:-translate-y-0.5"
                  >
                    <FaGithub className="w-4 h-4" />
                    GitHub
                  </a>

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-700 text-gray-300 border border-dark-600 font-medium hover:bg-dark-600 hover:text-white transition-all transform hover:-translate-y-0.5"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Live Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-700/50 text-gray-500 border border-dark-600/50 font-medium cursor-not-allowed opacity-60"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Demo (Coming)
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
