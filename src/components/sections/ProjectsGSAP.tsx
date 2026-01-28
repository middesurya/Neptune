'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '@/lib/projects';
import GlitchText from '../effects/GlitchText';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectsGSAP() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  const featuredProjects = projects.filter(p => p.featured);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the header
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              end: 'top 50%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Animate the decorative line
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: lineRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Animate each card with stagger and different effects
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const isEven = index % 2 === 0;

        // Card entrance animation
        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: isEven ? -60 : 60,
            y: 40,
            rotateY: isEven ? -5 : 5,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotateY: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 50%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Parallax effect on scroll
        gsap.to(card, {
          y: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });

        // Highlight animation for tech badges
        const techBadges = card.querySelectorAll('.tech-badge');
        gsap.fromTo(
          techBadges,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.05,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: card,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Animate highlights list items
        const highlights = card.querySelectorAll('.highlight-item');
        gsap.fromTo(
          highlights,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 relative" id="projects">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-[var(--accent-amber)] opacity-[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[var(--accent-cyan)] opacity-[0.02] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <p className="text-[var(--accent-cyan)] text-sm tracking-[0.3em] uppercase mb-4 font-mono">
            Portfolio
          </p>
          <h2 className="font-[var(--font-orbitron)] text-4xl md:text-5xl font-bold mb-6">
            <GlitchText text="Featured Projects" className="text-glow-amber" />
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Production-grade AI systems that demonstrate the intersection of
            cutting-edge ML research and practical engineering.
          </p>
          {/* Decorative line */}
          <div
            ref={lineRef}
            className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-[var(--accent-amber)] to-transparent origin-center"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="card-dark p-6 md:p-8 group relative overflow-hidden"
              style={{ perspective: '1000px' }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-amber)]/5 to-transparent" />
              </div>

              {/* Header */}
              <div className="flex items-start justify-between mb-4 relative">
                <div>
                  <h3 className="font-[var(--font-orbitron)] text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-amber)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--accent-cyan)] text-sm mt-1 font-mono">
                    {project.tagline}
                  </p>
                </div>
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-muted)] hover:text-[var(--accent-amber)] transition-colors p-2 hover:scale-110 transform"
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
                      className="text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors p-2 hover:scale-110 transform"
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
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed relative">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="highlight-item flex items-start gap-2 text-sm text-[var(--text-secondary)]">
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
                    className="tech-badge px-3 py-1 text-xs font-mono bg-[var(--bg-elevated)] text-[var(--text-muted)] rounded border border-[var(--border-subtle)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project index indicator */}
              <div className="absolute top-4 right-4 font-[var(--font-orbitron)] text-6xl font-bold text-[var(--accent-amber)]/5 select-none pointer-events-none">
                0{index + 1}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
