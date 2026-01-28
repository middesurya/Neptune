'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('submitting');

    // Simulate form submission - in production, this would send to an API
    // For now, we'll create a mailto link as a fallback
    try {
      // Simulated delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Open email client with pre-filled data
      const mailtoLink = `mailto:midde.snakumar123@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const subjectOptions = [
    'Job Opportunity',
    'Project Collaboration',
    'Consulting Inquiry',
    'Technical Question',
    'Other',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="card-dark p-8"
    >
      <h2 className="font-[var(--font-orbitron)] text-xl font-semibold text-[var(--accent-amber)] mb-6">
        Send a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm text-[var(--text-muted)] mb-2 font-mono uppercase tracking-wider"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={status === 'submitting'}
              className={`w-full bg-[var(--bg-elevated)] border rounded-lg p-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none transition-colors font-mono ${
                errors.name
                  ? 'border-red-500/50 focus:border-red-500'
                  : 'border-[var(--border-subtle)] focus:border-[var(--accent-amber)]'
              }`}
              placeholder="Your name"
            />
            <AnimatePresence>
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-red-400 text-xs mt-1 font-mono"
                >
                  {errors.name}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-[var(--text-muted)] mb-2 font-mono uppercase tracking-wider"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={status === 'submitting'}
              className={`w-full bg-[var(--bg-elevated)] border rounded-lg p-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none transition-colors font-mono ${
                errors.email
                  ? 'border-red-500/50 focus:border-red-500'
                  : 'border-[var(--border-subtle)] focus:border-[var(--accent-amber)]'
              }`}
              placeholder="your.email@example.com"
            />
            <AnimatePresence>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-red-400 text-xs mt-1 font-mono"
                >
                  {errors.email}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Subject Field */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm text-[var(--text-muted)] mb-2 font-mono uppercase tracking-wider"
          >
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            disabled={status === 'submitting'}
            className={`w-full bg-[var(--bg-elevated)] border rounded-lg p-3 text-[var(--text-primary)] focus:outline-none transition-colors font-mono cursor-pointer ${
              errors.subject
                ? 'border-red-500/50 focus:border-red-500'
                : 'border-[var(--border-subtle)] focus:border-[var(--accent-amber)]'
            } ${!formData.subject ? 'text-[var(--text-muted)]' : ''}`}
          >
            <option value="" disabled>
              Select a subject
            </option>
            {subjectOptions.map((option) => (
              <option key={option} value={option} className="bg-[var(--bg-card)]">
                {option}
              </option>
            ))}
          </select>
          <AnimatePresence>
            {errors.subject && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-red-400 text-xs mt-1 font-mono"
              >
                {errors.subject}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm text-[var(--text-muted)] mb-2 font-mono uppercase tracking-wider"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            disabled={status === 'submitting'}
            rows={5}
            className={`w-full bg-[var(--bg-elevated)] border rounded-lg p-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none transition-colors resize-none font-mono ${
              errors.message
                ? 'border-red-500/50 focus:border-red-500'
                : 'border-[var(--border-subtle)] focus:border-[var(--accent-amber)]'
            }`}
            placeholder="Tell me about your project, opportunity, or question..."
          />
          <AnimatePresence>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-red-400 text-xs mt-1 font-mono"
              >
                {errors.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === 'submitting' ? (
            <>
              <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Transmitting...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              Send Message
            </>
          )}
        </button>

        {/* Status Messages */}
        <AnimatePresence>
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 bg-green-900/20 border border-green-500/30 rounded-lg text-green-400 text-center text-sm font-mono"
            >
              Message prepared! Your email client should open shortly.
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-red-400 text-center text-sm font-mono"
            >
              Something went wrong. Please try again or email directly.
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
}
