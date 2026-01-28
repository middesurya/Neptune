'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface CursorState {
  isHovering: boolean;
  isClicking: boolean;
  hoverTarget: 'link' | 'button' | 'interactive' | null;
}

/**
 * Custom sci-fi themed cursor with trail effect and hover states.
 * Only renders on devices with fine pointer (non-touch).
 */
export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>({
    isHovering: false,
    isClicking: false,
    hoverTarget: null,
  });

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring animation for cursor follower
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  }, [cursorX, cursorY]);

  const handleMouseDown = useCallback(() => {
    setCursorState((prev) => ({ ...prev, isClicking: true }));
  }, []);

  const handleMouseUp = useCallback(() => {
    setCursorState((prev) => ({ ...prev, isClicking: false }));
  }, []);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isLink = target.closest('a');
    const isButton = target.closest('button');
    const isInteractive = target.closest('[data-cursor="interactive"]');

    if (isLink || isButton || isInteractive) {
      setCursorState((prev) => ({
        ...prev,
        isHovering: true,
        hoverTarget: isButton ? 'button' : isLink ? 'link' : 'interactive',
      }));
    }
  }, []);

  const handleMouseOut = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isLink = target.closest('a');
    const isButton = target.closest('button');
    const isInteractive = target.closest('[data-cursor="interactive"]');

    if (isLink || isButton || isInteractive) {
      setCursorState((prev) => ({
        ...prev,
        isHovering: false,
        hoverTarget: null,
      }));
    }
  }, []);

  useEffect(() => {
    // Only show custom cursor on devices with fine pointer
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    setIsVisible(true);
    document.body.style.cursor = 'none';

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [handleMouseMove, handleMouseDown, handleMouseUp, handleMouseOver, handleMouseOut]);

  if (!isVisible) return null;

  const getCursorColor = () => {
    if (cursorState.hoverTarget === 'button') return 'var(--accent-amber)';
    if (cursorState.hoverTarget === 'link') return 'var(--accent-cyan)';
    return 'var(--accent-amber)';
  };

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="rounded-full"
          style={{
            backgroundColor: getCursorColor(),
          }}
          animate={{
            width: cursorState.isClicking ? 6 : 8,
            height: cursorState.isClicking ? 6 : 8,
          }}
          transition={{ duration: 0.1 }}
        />
      </motion.div>

      {/* Cursor ring follower */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="rounded-full border"
          style={{
            borderColor: getCursorColor(),
          }}
          animate={{
            width: cursorState.isHovering ? 48 : cursorState.isClicking ? 28 : 32,
            height: cursorState.isHovering ? 48 : cursorState.isClicking ? 28 : 32,
            opacity: cursorState.isHovering ? 0.8 : 0.4,
            borderWidth: cursorState.isHovering ? 2 : 1,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Decorative crosshair elements when hovering */}
      {cursorState.isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9998]"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: '-50%',
            translateY: '-50%',
          }}
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.3, rotate: 45 }}
          exit={{ opacity: 0 }}
        >
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <line
              x1="32"
              y1="8"
              x2="32"
              y2="20"
              stroke={getCursorColor()}
              strokeWidth="1"
            />
            <line
              x1="32"
              y1="44"
              x2="32"
              y2="56"
              stroke={getCursorColor()}
              strokeWidth="1"
            />
            <line
              x1="8"
              y1="32"
              x2="20"
              y2="32"
              stroke={getCursorColor()}
              strokeWidth="1"
            />
            <line
              x1="44"
              y1="32"
              x2="56"
              y2="32"
              stroke={getCursorColor()}
              strokeWidth="1"
            />
          </svg>
        </motion.div>
      )}
    </>
  );
}
