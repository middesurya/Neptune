'use client';

import dynamic from 'next/dynamic';
import Navigation from '@/components/ui/Navigation';
import Hero from '@/components/sections/Hero';
import ProjectsGSAP from '@/components/sections/ProjectsGSAP';

// Dynamic import for Three.js scene (client-side only)
const Scene = dynamic(() => import('@/components/three/Scene'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 -z-10 bg-[#0a0a12]" />
  ),
});

export default function Home() {
  return (
    <>
      {/* 3D Background */}
      <Scene />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Projects Section */}
        <ProjectsGSAP />
        
        {/* Footer */}
        <footer className="py-12 px-6 border-t border-[var(--border-subtle)]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[var(--text-muted)] text-sm font-mono">
              © 2025 Surya Midde. All timelines reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/middesurya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--accent-amber)] transition-colors text-sm"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/surya-midde"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a
                href="mailto:midde.snakumar123@gmail.com"
                className="text-[var(--text-muted)] hover:text-[var(--accent-amber)] transition-colors text-sm"
              >
                Contact
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
