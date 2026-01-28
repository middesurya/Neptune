'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import Navigation from '@/components/ui/Navigation';
import GlitchText from '@/components/effects/GlitchText';
import Image from 'next/image';

const Scene = dynamic(() => import('@/components/three/Scene'), { ssr: false });

interface GenerationResult {
  world: string;
  name: string;
  color: string;
  image: string;
  prompt: string;
}

export default function TriquetraPage() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [results, setResults] = useState<GenerationResult[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setError(null);
    setResults([]);

    try {
      const response = await fetch('/api/generate', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: prompt.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Generation failed');
      }

      setResults(data.results);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsGenerating(false);
    }
  };

  const examplePrompts = [
    "A lone figure standing at a crossroads",
    "An ancient temple hidden in mountains",
    "A city skyline at twilight",
    "A mysterious portal glowing in darkness",
  ];

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
            className="text-center mb-12"
          >
            {/* Triquetra Symbol */}
            <motion.svg 
              viewBox="0 0 100 100" 
              className="w-16 h-16 mx-auto mb-6 text-[var(--accent-amber)]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <path d="M50 15 Q70 35, 50 50 Q30 35, 50 15" />
              <path d="M50 50 Q70 70, 85 50 Q70 30, 50 50" />
              <path d="M50 50 Q30 70, 15 50 Q30 30, 50 50" />
              <circle cx="50" cy="50" r="8" strokeWidth="1" />
            </motion.svg>

            <h1 className="font-[var(--font-orbitron)] text-4xl md:text-5xl font-bold mb-4">
              <GlitchText text="The Triquetra Interface" className="text-glow-amber" />
            </h1>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
              Enter a prompt and witness it manifest across three parallel realities.
              Each timeline interprets your vision through its own lens.
            </p>
          </motion.div>

          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <div className="card-dark p-6">
              <label className="block text-sm text-[var(--text-muted)] mb-2 font-mono uppercase tracking-wider">
                Your Vision
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe a scene, moment, or concept..."
                className="w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-lg p-4 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-amber)] transition-colors resize-none h-32 font-mono"
                disabled={isGenerating}
              />
              
              {/* Example prompts */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs text-[var(--text-muted)]">Try:</span>
                {examplePrompts.map((example) => (
                  <button
                    key={example}
                    onClick={() => setPrompt(example)}
                    className="text-xs px-3 py-1 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded text-[var(--text-secondary)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-colors"
                    disabled={isGenerating}
                  >
                    {example}
                  </button>
                ))}
              </div>

              <button
                onClick={handleGenerate}
                disabled={isGenerating || !prompt.trim()}
                className="w-full mt-6 btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Generating across timelines...
                  </>
                ) : (
                  <>
                    ⟡ Manifest Across Realities
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Error Display */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="max-w-3xl mx-auto mb-8 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-red-400 text-center"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results Grid */}
          <AnimatePresence>
            {results.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {results.map((result, index) => (
                  <motion.div
                    key={result.world}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="card-dark overflow-hidden group"
                  >
                    {/* World Label */}
                    <div 
                      className="px-4 py-3 border-b border-[var(--border-subtle)]"
                      style={{ borderColor: `${result.color}30` }}
                    >
                      <h3 
                        className="font-[var(--font-orbitron)] text-sm font-semibold tracking-wider"
                        style={{ color: result.color }}
                      >
                        {result.name}
                      </h3>
                    </div>

                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden bg-[var(--bg-elevated)]">
                      <Image
                        src={result.image}
                        alt={result.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized
                      />
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <p className="text-xs text-[var(--text-secondary)] line-clamp-3 font-mono">
                          {result.prompt}
                        </p>
                      </div>
                    </div>

                    {/* Download button */}
                    <div className="p-3 border-t border-[var(--border-subtle)]">
                      <a
                        href={result.image}
                        download={`triquetra-${result.world}.webp`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors font-mono flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Empty State */}
          {!isGenerating && results.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center py-16"
            >
              <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
                {['What Happened', 'What Could Have', 'What Should Have'].map((label, i) => (
                  <div
                    key={label}
                    className="aspect-square rounded-lg border border-dashed border-[var(--border-subtle)] flex items-center justify-center"
                  >
                    <span className="text-[var(--text-muted)] text-xs font-mono text-center px-4">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[var(--text-muted)] text-sm font-mono">
                Enter a prompt above to see your vision across three parallel realities
              </p>
            </motion.div>
          )}
        </div>
      </main>
    </>
  );
}
