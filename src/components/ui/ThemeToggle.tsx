'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/components/providers/ThemeProvider';

/**
 * Animated theme toggle switch with sci-fi styling.
 * Toggles between dark (default) and light modes.
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] transition-colors hover:border-[var(--accent-amber)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-amber)]/50"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      role="switch"
      aria-checked={isDark}
    >
      {/* Track icons */}
      <span className="absolute left-1.5 top-1/2 -translate-y-1/2 text-xs">
        🌙
      </span>
      <span className="absolute right-1.5 top-1/2 -translate-y-1/2 text-xs">
        ☀️
      </span>

      {/* Sliding thumb */}
      <motion.div
        className="absolute top-0.5 w-6 h-6 rounded-full bg-[var(--accent-amber)] shadow-lg"
        animate={{
          left: isDark ? '2px' : '30px',
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        {/* Inner glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: isDark
              ? '0 0 8px var(--accent-amber), 0 0 16px var(--accent-amber)'
              : '0 0 8px var(--accent-cyan), 0 0 16px var(--accent-cyan)',
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </button>
  );
}
