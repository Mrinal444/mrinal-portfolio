import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _honey: '', // Honeypot field for bot protection
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // Spam honeypot check
    if (formData._honey) {
      setLoading(false);
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all fields before sending.' });
      setLoading(false);
      return;
    }

    try {
      // Send real email via FormSubmit AJAX service directly to Mrinal's Gmail
      const response = await fetch('https://formsubmit.co/ajax/mrings98@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          _subject: `Portfolio Contact: ${formData.subject} (from ${formData.name})`,
          Message: formData.message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok || data.success === 'true' || data.success === true) {
        setStatus({
          type: 'success',
          message: '✓ Message delivered successfully! Thank you for reaching out.',
        });
        setFormData({ name: '', email: '', subject: '', message: '', _honey: '' });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Contact Form Error:', error);
      // Fallback: If offline or blocked by browser extensions, open user's mail client directly
      const mailtoUrl = `mailto:mrings98@gmail.com?subject=${encodeURIComponent(
        `Portfolio Inquiry: ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      setStatus({
        type: 'info',
        message: 'Direct API delivery unavailable. Click below to open your email client directly.',
      });
      window.open(mailtoUrl, '_blank');
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#071737]/85 border border-white/20 backdrop-blur-md mb-4 shadow-sm">
            <FaEnvelope className="w-3.5 h-3.5 text-[#67E8F9]" />
            <span className="text-xs uppercase tracking-widest text-[#67E8F9] font-bold">
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-[#FFFFFF] mb-4">
            Let's Build Something <span className="text-[#FFFFFF]">Interesting</span>.
          </h2>
          <div className="inline-block p-5 sm:p-6 rounded-2xl bg-[#071737]/85 backdrop-blur-md border border-white/18 shadow-xl shadow-black/50 max-w-2xl mx-auto">
            <p className="text-[#E8F1FF] text-base sm:text-lg font-medium leading-relaxed">
              I am open to software engineering internships, technical collaborations, hackathons, open-source projects, and engineering opportunities.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-2xl bg-[#071737]/85 backdrop-blur-md border border-white/18 shadow-2xl shadow-black/50"
          >
            {/* Hidden honeypot field */}
            <input
              type="text"
              name="_honey"
              value={formData._honey}
              onChange={handleChange}
              style={{ display: 'none' }}
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="mb-5">
              <label className="block text-sm font-semibold text-[#E8F1FF] mb-2">
                Name <span className="text-[#67E8F9]">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl bg-[#071737]/90 border border-white/15 text-white placeholder-[#E8F1FF]/40 focus:outline-none focus:border-[#67E8F9]/60 transition-colors backdrop-blur-md shadow-inner"
                placeholder="Your name"
                required
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-semibold text-[#E8F1FF] mb-2">
                Email <span className="text-[#67E8F9]">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl bg-[#071737]/90 border border-white/15 text-white placeholder-[#E8F1FF]/40 focus:outline-none focus:border-[#67E8F9]/60 transition-colors backdrop-blur-md shadow-inner"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-semibold text-[#E8F1FF] mb-2">
                Subject <span className="text-[#67E8F9]">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl bg-[#071737]/90 border border-white/15 text-white placeholder-[#E8F1FF]/40 focus:outline-none focus:border-[#67E8F9]/60 transition-colors backdrop-blur-md shadow-inner"
                placeholder="Opportunity / Collaboration / Project"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-[#E8F1FF] mb-2">
                Message <span className="text-[#67E8F9]">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2.5 rounded-xl bg-[#071737]/90 border border-white/15 text-white placeholder-[#E8F1FF]/40 focus:outline-none focus:border-[#67E8F9]/60 transition-colors resize-none backdrop-blur-md shadow-inner"
                placeholder="Tell me about your team, role, or project..."
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-[#6366F1] text-white font-semibold hover:bg-[#4F46E5] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#6366F1]/30 cursor-pointer flex items-center justify-center gap-2"
            >
              {loading ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <FaPaperPlane className="w-4 h-4 text-[#67E8F9]" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>

            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-3.5 rounded-xl border flex items-center gap-2.5 text-xs sm:text-sm font-medium ${
                  status.type === 'success'
                    ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                    : status.type === 'error'
                    ? 'bg-red-500/15 border-red-500/40 text-red-300'
                    : 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300'
                }`}
              >
                {status.type === 'success' ? (
                  <FaCheckCircle className="w-4 h-4 flex-shrink-0" />
                ) : (
                  <FaExclamationCircle className="w-4 h-4 flex-shrink-0" />
                )}
                <span>{status.message}</span>
              </motion.div>
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
            {/* Direct Communication Channels */}
            <div className="space-y-6 mb-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#67E8F9] font-bold mb-3">
                  Direct Inquiries
                </p>
                <div className="space-y-3">
                  <a
                    href="mailto:mrings98@gmail.com"
                    className="flex items-center gap-3.5 text-[#E8F1FF] hover:text-[#67E8F9] transition-colors group p-4 rounded-xl bg-[#071737]/80 border border-white/18 backdrop-blur-md shadow-md hover:border-[#67E8F9]/50"
                  >
                    <span className="w-9 h-9 rounded-lg bg-[#071737] flex items-center justify-center group-hover:bg-[#67E8F9]/20 transition-colors text-[#67E8F9]">
                      <FaEnvelope className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="text-xs text-[#67E8F9] font-semibold uppercase tracking-wider">Email Address</p>
                      <p className="font-semibold text-white">mrings98@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/Mrinal444"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 text-[#E8F1FF] hover:text-[#67E8F9] transition-colors group p-4 rounded-xl bg-[#071737]/80 border border-white/18 backdrop-blur-md shadow-md hover:border-[#67E8F9]/50"
                  >
                    <span className="w-9 h-9 rounded-lg bg-[#071737] flex items-center justify-center group-hover:bg-[#67E8F9]/20 transition-colors text-[#67E8F9]">
                      <FaGithub className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="text-xs text-[#67E8F9] font-semibold uppercase tracking-wider">GitHub Profile</p>
                      <p className="font-semibold text-white">github.com/Mrinal444</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Social & Professional Presence */}
            <div>
              <p className="text-xs uppercase tracking-wider text-[#67E8F9] font-bold mb-4">
                Professional Presence
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
                      className="p-4 rounded-xl bg-[#071737]/80 backdrop-blur-md border border-white/18 text-[#E8F1FF] hover:text-[#67E8F9] hover:border-[#67E8F9]/50 transition-all transform hover:-translate-y-1 shadow-lg shadow-black/40"
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
