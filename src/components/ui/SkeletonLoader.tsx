'use client';

import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  worldName: string;
  color: string;
  delay?: number;
}

export default function SkeletonLoader({ worldName, color, delay = 0 }: SkeletonLoaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay }}
      className="card-dark overflow-hidden"
    >
      {/* World Label */}
      <div
        className="px-4 py-3 border-b border-[var(--border-subtle)]"
        style={{ borderColor: `${color}30` }}
      >
        <h3
          className="font-[var(--font-orbitron)] text-sm font-semibold tracking-wider"
          style={{ color }}
        >
          {worldName}
        </h3>
      </div>

      {/* Skeleton Image Area */}
      <div className="relative aspect-square overflow-hidden bg-[var(--bg-elevated)]">
        {/* Animated gradient shimmer */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              90deg,
              var(--bg-elevated) 0%,
              ${color}15 50%,
              var(--bg-elevated) 100%
            )`,
            backgroundSize: '200% 100%',
          }}
          animate={{
            backgroundPosition: ['200% 0%', '-200% 0%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Center loading indicator */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Triquetra spinning loader */}
          <motion.svg
            viewBox="0 0 100 100"
            className="w-12 h-12"
            fill="none"
            stroke={color}
            strokeWidth="1.5"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <path d="M50 15 Q70 35, 50 50 Q30 35, 50 15" />
            <path d="M50 50 Q70 70, 85 50 Q70 30, 50 50" />
            <path d="M50 50 Q30 70, 15 50 Q30 30, 50 50" />
            <circle cx="50" cy="50" r="8" strokeWidth="1" />
          </motion.svg>

          {/* Pulsing text */}
          <motion.p
            className="mt-4 text-xs font-mono text-[var(--text-muted)]"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            Manifesting...
          </motion.p>

          {/* Progress bar */}
          <div className="mt-4 w-24 h-1 bg-[var(--bg-primary)] rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: color }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{
                duration: 8,
                ease: 'easeInOut',
              }}
            />
          </div>
        </div>

        {/* Scanline effect overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 2px,
              ${color}20 2px,
              ${color}20 4px
            )`,
          }}
        />

        {/* Corner accents */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.3 }}>
          <motion.path
            d="M10 30 L10 10 L30 10"
            stroke={color}
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: delay }}
          />
          <motion.path
            d="M70 10 L90 10 L90 30"
            stroke={color}
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: delay + 0.2 }}
          />
          <motion.path
            d="M90 70 L90 90 L70 90"
            stroke={color}
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: delay + 0.4 }}
          />
          <motion.path
            d="M30 90 L10 90 L10 70"
            stroke={color}
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: delay + 0.6 }}
          />
        </svg>
      </div>

      {/* Skeleton footer */}
      <div className="p-3 border-t border-[var(--border-subtle)]">
        <div className="flex items-center gap-2">
          <motion.div
            className="w-4 h-4 rounded"
            style={{ backgroundColor: `${color}20` }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div
            className="h-3 rounded w-16"
            style={{ backgroundColor: `${color}15` }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// Export skeleton configuration for the three worlds
export const worldConfigs = [
  { worldName: 'What Happened', color: '#C9A227' },
  { worldName: 'What Could Have', color: '#00f0ff' },
  { worldName: 'What Should Have', color: '#FFD700' },
];
