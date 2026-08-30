import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      // For now, just validate and show success message
      // In production, you'd send this to a backend service
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        setStatus('Please fill in all fields.');
        setLoading(false);
        return;
      }

      // Simulate sending email
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus('✓ Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    {
      icon: FaGithub,
      url: 'https://github.com/Mrinal444',
      label: 'GitHub',
    },
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/mrinal444',
      label: 'LinkedIn',
    },
    {
      icon: SiLeetcode,
      url: 'https://leetcode.com/u/Mrinal444',
      label: 'LeetCode',
    },
    {
      icon: FaEnvelope,
      url: 'mailto:mrings98@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-950">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let's Build Something <span className="text-accent">Interesting</span>.
          </h2>
          <p className="text-gray-400 text-lg">
            I am open to learning opportunities, technical collaborations, hackathons, open-source contributions, and software development projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="p-6 rounded-xl bg-dark-800 border border-dark-700"
          >
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                placeholder="Your name"
                required
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 rounded-lg bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Tell me about your project or opportunity..."
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>

            {status && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 text-sm text-center ${
                  status.startsWith('✓') ? 'text-emerald-400' : 'text-amber-400'
                }`}
              >
                {status}
              </motion.p>
            )}
          </motion.form>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            {/* Quick Links */}
            <div className="space-y-6 mb-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
                  Quick Links
                </p>
                <div className="space-y-3">
                  <a
                    href="mailto:mrings98@gmail.com"
                    className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-dark-700 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <FaEnvelope className="w-4 h-4" />
                    </span>
                    mrings98@gmail.com
                  </a>
                  <a
                    href="https://github.com/Mrinal444"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-dark-700 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <FaGithub className="w-4 h-4" />
                    </span>
                    github.com/Mrinal444
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-4">
                Connect
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-4 rounded-lg bg-dark-800 border border-dark-700 text-gray-400 hover:text-accent hover:border-accent/40 transition-all transform hover:-translate-y-1"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
