'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Props for the GlitchText component.
 */
interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
  glitchOnHover?: boolean;
  autoGlitch?: boolean;
  glitchInterval?: number;
}

/**
 * Animated glitch text effect with character scrambling and chromatic aberration.
 *
 * Features:
 * - Character-by-character scramble animation using random glitch characters
 * - Chromatic aberration effect with cyan/amber color split
 * - Horizontal shake animation during glitch
 * - Supports both hover-triggered and automatic periodic glitching
 * - Progressive character reveal (typewriter-like resolution)
 *
 * @param text - The text content to display
 * @param className - Additional CSS classes
 * @param as - HTML tag to render (default: 'span')
 * @param glitchOnHover - Enable glitch on mouse hover (default: true)
 * @param autoGlitch - Enable automatic periodic glitching (default: false)
 * @param glitchInterval - Interval in ms between auto-glitches (default: 5000)
 *
 * @example
 * ```tsx
 * <GlitchText text="NEPTUNE" autoGlitch glitchInterval={8000} />
 * ```
 */
export default function GlitchText({
  text,
  className = '',
  as: Tag = 'span',
  glitchOnHover = true,
  autoGlitch = false,
  glitchInterval = 5000
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);
  const [displayText, setDisplayText] = useState(text);

  // Random glitch characters
  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`░▒▓█▄▀';

  const triggerGlitch = () => {
    setIsGlitching(true);
    
    // Rapid text scramble
    let iterations = 0;
    const maxIterations = 10;
    
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (index < iterations) return text[index];
            if (char === ' ') return ' ';
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join('')
      );
      
      iterations += text.length / maxIterations;
      
      if (iterations >= text.length) {
        setDisplayText(text);
        setIsGlitching(false);
        clearInterval(interval);
      }
    }, 50);
  };

  // Auto glitch effect
  useEffect(() => {
    if (!autoGlitch) return;
    
    const timer = setInterval(triggerGlitch, glitchInterval);
    return () => clearInterval(timer);
  }, [autoGlitch, glitchInterval, text]);

  return (
    <Tag
      className={`relative inline-block ${className}`}
      onMouseEnter={glitchOnHover ? triggerGlitch : undefined}
    >
      <motion.span
        className={`relative ${isGlitching ? 'glitch-text' : ''}`}
        animate={isGlitching ? {
          x: [0, -2, 2, -1, 1, 0],
          transition: { duration: 0.1, repeat: 3 }
        } : {}}
      >
        {displayText}
      </motion.span>
      
      {/* Chromatic aberration layers */}
      {isGlitching && (
        <>
          <span 
            className="absolute inset-0 text-[var(--accent-cyan)] opacity-70"
            style={{ transform: 'translateX(-2px)', clipPath: 'inset(0 0 50% 0)' }}
          >
            {displayText}
          </span>
          <span 
            className="absolute inset-0 text-[var(--accent-amber)] opacity-70"
            style={{ transform: 'translateX(2px)', clipPath: 'inset(50% 0 0 0)' }}
          >
            {displayText}
          </span>
        </>
      )}
    </Tag>
  );
}
