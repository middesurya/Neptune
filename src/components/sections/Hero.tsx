'use client';

import { motion } from 'framer-motion';
import GlitchText from '../effects/GlitchText';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] to-transparent z-10" />
      
      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center z-20 max-w-4xl"
      >
        {/* Triquetra symbol */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="mb-8"
        >
          <svg 
            viewBox="0 0 100 100" 
            className="w-20 h-20 mx-auto text-[var(--accent-amber)] triquetra-spin"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {/* Triquetra paths */}
            <path d="M50 15 Q70 35, 50 50 Q30 35, 50 15" />
            <path d="M50 50 Q70 70, 85 50 Q70 30, 50 50" />
            <path d="M50 50 Q30 70, 15 50 Q30 30, 50 50" />
            <circle cx="50" cy="50" r="8" strokeWidth="1" />
          </svg>
        </motion.div>

        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[var(--text-muted)] tracking-[0.3em] uppercase text-sm mb-4 font-mono"
        >
          Welcome to the Temporal Nexus
        </motion.p>

        {/* Main title */}
        <h1 className="font-[var(--font-orbitron)] text-5xl md:text-7xl font-bold mb-6">
          <GlitchText 
            text="SURYA MIDDE" 
            className="text-glow-amber"
            autoGlitch
            glitchInterval={8000}
          />
        </h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 font-mono"
        >
          <span className="text-[var(--accent-cyan)]">AI/ML Engineer</span>
          <span className="mx-3 text-[var(--text-muted)]">|</span>
          <span>LLM Architect</span>
          <span className="mx-3 text-[var(--text-muted)]">|</span>
          <span>Builder of Agents</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-12 text-lg leading-relaxed"
        >
          Crafting production-grade{' '}
          <span className="text-[var(--accent-amber)]">RAG pipelines</span>,{' '}
          <span className="text-[var(--accent-cyan)]">multi-agent systems</span>, and{' '}
          <span className="text-[var(--accent-amber)]">LLM applications</span>{' '}
          that push the boundaries of what&apos;s possible.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/triquetra" className="btn-primary">
            ⟡ Enter the Triquetra
          </Link>
          <Link href="/projects" className="btn-secondary">
            View Projects →
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center text-[var(--text-muted)]"
        >
          <span className="text-xs uppercase tracking-wider mb-2">Scroll</span>
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
