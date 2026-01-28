'use client';

import { useEffect, useCallback } from 'react';

interface KeyboardNavigationOptions {
  onEscape?: () => void;
  onSlash?: () => void;
  onArrowUp?: () => void;
  onArrowDown?: () => void;
  enabled?: boolean;
}

/**
 * Custom hook for global keyboard navigation.
 * Provides accessibility shortcuts throughout the application.
 *
 * Keyboard shortcuts:
 * - Escape: Close modals, menus, or go back
 * - / (slash): Focus search input
 * - j/k: Navigate through items (vim-style)
 * - g + h: Go home
 * - g + p: Go to projects
 * - g + a: Go to about
 * - g + t: Go to triquetra
 */
export default function useKeyboardNavigation(options: KeyboardNavigationOptions = {}) {
  const { onEscape, onSlash, onArrowUp, onArrowDown, enabled = true } = options;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!enabled) return;

      // Don't trigger shortcuts when typing in inputs
      const target = event.target as HTMLElement;
      const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;

      // Escape always works
      if (event.key === 'Escape') {
        onEscape?.();
        return;
      }

      // Skip other shortcuts when in input
      if (isInput) return;

      // Slash to search
      if (event.key === '/' && !event.ctrlKey && !event.metaKey) {
        event.preventDefault();
        onSlash?.();
        // Focus search input if it exists
        const searchInput = document.querySelector('input[type="text"][placeholder*="Search"]') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
        }
        return;
      }

      // Arrow navigation
      if (event.key === 'ArrowUp' || event.key === 'k') {
        onArrowUp?.();
        return;
      }

      if (event.key === 'ArrowDown' || event.key === 'j') {
        onArrowDown?.();
        return;
      }

      // g + key navigation (two-key combo)
      if (event.key === 'g') {
        const handleSecondKey = (e: KeyboardEvent) => {
          switch (e.key) {
            case 'h':
              window.location.href = '/';
              break;
            case 'p':
              window.location.href = '/projects';
              break;
            case 'a':
              window.location.href = '/about';
              break;
            case 't':
              window.location.href = '/triquetra';
              break;
          }
          window.removeEventListener('keydown', handleSecondKey);
        };

        window.addEventListener('keydown', handleSecondKey, { once: true });

        // Remove listener after timeout if no second key pressed
        setTimeout(() => {
          window.removeEventListener('keydown', handleSecondKey);
        }, 1000);
      }
    },
    [enabled, onEscape, onSlash, onArrowUp, onArrowDown]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}

/**
 * Skip to main content link for accessibility.
 * Should be placed as the first focusable element.
 */
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10001] focus:px-4 focus:py-2 focus:bg-[var(--accent-amber)] focus:text-[var(--bg-primary)] focus:rounded focus:outline-none"
    >
      Skip to main content
    </a>
  );
}
