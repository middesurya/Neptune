'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Navigation from '@/components/ui/Navigation';
import GlitchText from '@/components/effects/GlitchText';
import { skills } from '@/lib/projects';

const Scene = dynamic(() => import('@/components/three/Scene'), { ssr: false });

const timeline = [
  {
    year: '2024 - Present',
    title: 'AI/ML Software Engineer',
    company: 'Virtues',
    description: 'Building NLP-to-SQL chatbots with 90-100% accuracy, enterprise RAG pipelines, and production LLM guardrails.'
  },
  {
    year: '2024 - 2025',
    title: 'Machine Learning Engineer',
    company: 'SMA Tech',
    description: 'Architected async data frameworks, ML pipelines with PySpark/Kafka, and model serving infrastructure on AWS.'
  },
  {
    year: '2022 - 2024',
    title: "Master's in Computer Science",
    company: 'University of New Haven',
    description: 'GPA: 3.75 | Distributed Systems, Algorithms, Machine Learning, NLP'
  },
  {
    year: '2021 - 2022',
    title: 'ML Software Engineering Intern',
    company: 'Dot Prompt Limited',
    description: 'Automated ML model monitoring, built performance dashboards, integrated conversational AI interfaces.'
  }
];

export default function AboutPage() {
  return (
    <>
      <Scene />
      <Navigation />
      
      <main className="min-h-screen pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-[var(--accent-cyan)] text-sm tracking-[0.3em] uppercase mb-4 font-mono">
              About
            </p>
            <h1 className="font-[var(--font-orbitron)] text-4xl md:text-5xl font-bold mb-6">
              <GlitchText text="Surya Midde" className="text-glow-amber" />
            </h1>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
              AI/ML Engineer crafting the future of intelligent systems
            </p>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card-dark p-8 mb-12"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="font-[var(--font-orbitron)] text-xl font-semibold text-[var(--accent-amber)] mb-4">
                  The Journey
                </h2>
                <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    I build AI systems that actually work in production. From RAG pipelines that achieve 
                    90-100% query accuracy to multi-agent systems that orchestrate GPT-4, Claude, and 
                    Gemini in consensus-building workflows.
                  </p>
                  <p>
                    My focus is on the intersection of cutting-edge LLM research and practical engineering—
                    turning papers into products, and prototypes into platforms serving thousands of users.
                  </p>
                  <p>
                    Currently exploring agentic AI, Model Context Protocol integrations, and the 
                    next generation of autonomous systems.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-[var(--font-orbitron)] text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                  Connect
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:midde.snakumar123@gmail.com"
                    className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-mono">Email</span>
                  </a>
                  <a
                    href="https://github.com/middesurya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-mono">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/surya-midde"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-sm font-mono">LinkedIn</span>
                  </a>
                </div>
                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <p className="text-xs text-[var(--text-muted)] font-mono">
                    📍 Pflugerville, TX<br />
                    Open to remote, hybrid, onsite, relocation
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="font-[var(--font-orbitron)] text-xl font-semibold text-[var(--accent-amber)] mb-8 text-center">
              Timeline
            </h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[var(--border-subtle)]" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-[var(--accent-amber)] rounded-full -translate-x-1/2 z-10" />
                  
                  {/* Content */}
                  <div className={`ml-8 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}>
                    <div className="card-dark p-5">
                      <span className="text-[var(--accent-cyan)] text-xs font-mono">{item.year}</span>
                      <h3 className="font-[var(--font-orbitron)] text-lg font-semibold mt-1">{item.title}</h3>
                      <p className="text-[var(--accent-amber)] text-sm">{item.company}</p>
                      <p className="text-[var(--text-secondary)] text-sm mt-2">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="font-[var(--font-orbitron)] text-xl font-semibold text-[var(--accent-amber)] mb-8 text-center">
              Technical Arsenal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="card-dark p-5"
                >
                  <h3 className="font-[var(--font-orbitron)] text-sm font-semibold text-[var(--accent-cyan)] uppercase tracking-wider mb-4">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs font-mono bg-[var(--bg-elevated)] text-[var(--text-secondary)] rounded border border-[var(--border-subtle)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
