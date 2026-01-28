'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: 'circle' | 'triangle' | 'diamond';
  color: 'amber' | 'cyan';
}

/**
 * Creates subtle floating geometric elements in the background.
 * Uses CSS transforms for smooth performance without Three.js overhead.
 */
export default function FloatingElements() {
  const elements = useMemo(() => {
    const items: FloatingElement[] = [];
    const types: FloatingElement['type'][] = ['circle', 'triangle', 'diamond'];
    const colors: FloatingElement['color'][] = ['amber', 'cyan'];

    for (let i = 0; i < 15; i++) {
      items.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 8 + 4,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * -20,
        type: types[Math.floor(Math.random() * types.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    return items;
  }, []);

  const getShape = (type: FloatingElement['type'], size: number) => {
    switch (type) {
      case 'circle':
        return (
          <div
            className="rounded-full"
            style={{ width: size, height: size }}
          />
        );
      case 'triangle':
        return (
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: `${size / 2}px solid transparent`,
              borderRight: `${size / 2}px solid transparent`,
              borderBottom: `${size}px solid currentColor`,
            }}
          />
        );
      case 'diamond':
        return (
          <div
            style={{
              width: size,
              height: size,
              transform: 'rotate(45deg)',
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className={`absolute ${
            el.type === 'circle' || el.type === 'diamond'
              ? el.color === 'amber'
                ? 'bg-[var(--accent-amber)]'
                : 'bg-[var(--accent-cyan)]'
              : el.color === 'amber'
              ? 'text-[var(--accent-amber)]'
              : 'text-[var(--accent-cyan)]'
          }`}
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            opacity: 0.1,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.05, 0.15, 0.05],
            rotate: el.type === 'triangle' ? [0, 180, 360] : [0, 45, 0],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {getShape(el.type, el.size)}
        </motion.div>
      ))}

      {/* Subtle gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-[var(--accent-amber)] opacity-[0.02] blur-3xl"
        style={{ left: '10%', top: '20%' }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-[var(--accent-cyan)] opacity-[0.015] blur-3xl"
        style={{ right: '10%', bottom: '20%' }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
