'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
  glitchOnHover?: boolean;
  autoGlitch?: boolean;
  glitchInterval?: number;
}

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
