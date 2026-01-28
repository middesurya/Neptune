'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Navigation from '@/components/ui/Navigation';
import GlitchText from '@/components/effects/GlitchText';
import { projects } from '@/lib/projects';

const Scene = dynamic(() => import('@/components/three/Scene'), { ssr: false });

export default function ProjectsPage() {
  return (
    <>
      <Scene />
      <Navigation />
      
      <main className="min-h-screen pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-[var(--accent-cyan)] text-sm tracking-[0.3em] uppercase mb-4 font-mono">
              Portfolio
            </p>
            <h1 className="font-[var(--font-orbitron)] text-4xl md:text-5xl font-bold mb-6">
              <GlitchText text="All Projects" className="text-glow-amber" />
            </h1>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              A collection of production-grade AI systems, from RAG pipelines to 
              multi-agent orchestration platforms.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-dark p-6 md:p-8 group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {project.featured && (
                        <span className="text-[var(--accent-amber)] text-xs font-mono">★</span>
                      )}
                      <h2 className="font-[var(--font-orbitron)] text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-amber)] transition-colors">
                        {project.title}
                      </h2>
                    </div>
                    <p className="text-[var(--accent-cyan)] text-sm font-mono">
                      {project.tagline}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-muted)] hover:text-[var(--accent-amber)] transition-colors p-2"
                        aria-label="Live Demo"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors p-2"
                        aria-label="GitHub"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <span className="text-[var(--accent-amber)] mt-1">▸</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-[var(--bg-elevated)] text-[var(--text-muted)] rounded border border-[var(--border-subtle)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
