'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/lib/projects';

interface ProjectFilterProps {
  projects: Project[];
  onFilterChange: (filtered: Project[]) => void;
}

/**
 * Project filter component with search and tech stack filtering.
 * Provides real-time filtering with smooth animations.
 */
export default function ProjectFilter({ projects, onFilterChange }: ProjectFilterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  // Get unique tech tags from all projects
  const allTechs = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((p) => p.tech.forEach((t) => techSet.add(t)));
    return Array.from(techSet).sort();
  }, [projects]);

  // Filter projects based on criteria
  useMemo(() => {
    let filtered = projects;

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tagline.toLowerCase().includes(query) ||
          p.tech.some((t) => t.toLowerCase().includes(query))
      );
    }

    // Tech filter
    if (selectedTechs.length > 0) {
      filtered = filtered.filter((p) =>
        selectedTechs.some((tech) => p.tech.includes(tech))
      );
    }

    // Featured filter
    if (showFeaturedOnly) {
      filtered = filtered.filter((p) => p.featured);
    }

    onFilterChange(filtered);
  }, [searchQuery, selectedTechs, showFeaturedOnly, projects, onFilterChange]);

  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech)
        ? prev.filter((t) => t !== tech)
        : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTechs([]);
    setShowFeaturedOnly(false);
  };

  const hasActiveFilters = searchQuery || selectedTechs.length > 0 || showFeaturedOnly;

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search projects..."
          className="w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-lg px-4 py-3 pl-10 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-amber)] transition-colors font-mono text-sm"
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--accent-cyan)]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Filter Options */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Featured Toggle */}
        <button
          onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
          className={`px-3 py-1.5 text-xs font-mono rounded border transition-colors ${
            showFeaturedOnly
              ? 'bg-[var(--accent-amber)]/20 border-[var(--accent-amber)] text-[var(--accent-amber)]'
              : 'bg-transparent border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--accent-amber)]'
          }`}
        >
          ★ Featured
        </button>

        {/* Tech Filter Dropdown */}
        <div className="relative group">
          <button className="px-3 py-1.5 text-xs font-mono rounded border border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--accent-cyan)] transition-colors flex items-center gap-2">
            Tech Stack
            {selectedTechs.length > 0 && (
              <span className="bg-[var(--accent-cyan)] text-[var(--bg-primary)] px-1.5 rounded-full text-[10px]">
                {selectedTechs.length}
              </span>
            )}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown */}
          <div className="absolute top-full left-0 mt-2 w-64 max-h-64 overflow-y-auto bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
            <div className="p-2 space-y-1">
              {allTechs.map((tech) => (
                <button
                  key={tech}
                  onClick={() => toggleTech(tech)}
                  className={`w-full text-left px-3 py-1.5 text-xs font-mono rounded transition-colors ${
                    selectedTechs.includes(tech)
                      ? 'bg-[var(--accent-cyan)]/20 text-[var(--accent-cyan)]'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Clear Filters */}
        <AnimatePresence>
          {hasActiveFilters && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={clearFilters}
              className="px-3 py-1.5 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--accent-amber)] transition-colors"
            >
              Clear all
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Active Tech Tags */}
      <AnimatePresence>
        {selectedTechs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-wrap gap-2"
          >
            {selectedTechs.map((tech) => (
              <motion.button
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => toggleTech(tech)}
                className="px-2 py-1 text-xs font-mono bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] rounded flex items-center gap-1 hover:bg-[var(--accent-cyan)]/20 transition-colors"
              >
                {tech}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
