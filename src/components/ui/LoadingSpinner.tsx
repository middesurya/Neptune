'use client';

import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
}

/**
 * Sci-fi themed loading spinner with Triquetra symbol animation.
 * Used for page loading and async operation states.
 */
export default function LoadingSpinner({ size = 'md', message }: LoadingSpinnerProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div
        className="relative"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      >
        {/* Triquetra symbol */}
        <svg
          viewBox="0 0 100 100"
          className={`${sizes[size]} text-[var(--accent-amber)]`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <motion.path
            d="M50 15 Q70 35, 50 50 Q30 35, 50 15"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.path
            d="M50 50 Q70 70, 85 50 Q70 30, 50 50"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />
          <motion.path
            d="M50 50 Q30 70, 15 50 Q30 30, 50 50"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
        </svg>

        {/* Outer glow ring */}
        <motion.div
          className={`absolute inset-0 ${sizes[size]} rounded-full border border-[var(--accent-cyan)] opacity-30`}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {message && (
        <motion.p
          className="text-[var(--text-secondary)] text-sm font-mono"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          {message}
        </motion.p>
      )}
    </div>
  );
}
