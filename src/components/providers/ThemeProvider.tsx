'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Theme provider component that manages dark/light mode state.
 * Persists theme preference to localStorage and syncs with system preference.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage first, then system preference
    const stored = localStorage.getItem('neptune-theme') as Theme | null;
    if (stored) {
      setThemeState(stored);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setThemeState(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    root.classList.remove('dark', 'light');
    root.classList.add(theme);
    localStorage.setItem('neptune-theme', theme);

    // Update CSS variables based on theme
    if (theme === 'light') {
      root.style.setProperty('--bg-primary', '#f5f5f7');
      root.style.setProperty('--bg-elevated', '#ffffff');
      root.style.setProperty('--bg-surface', '#e8e8ec');
      root.style.setProperty('--bg-card', '#ffffff');
      root.style.setProperty('--text-primary', '#0a0a12');
      root.style.setProperty('--text-secondary', '#404050');
      root.style.setProperty('--text-muted', '#808090');
      root.style.setProperty('--border-subtle', 'rgba(0, 0, 0, 0.08)');
    } else {
      root.style.setProperty('--bg-primary', '#0a0a12');
      root.style.setProperty('--bg-elevated', '#050508');
      root.style.setProperty('--bg-surface', '#121218');
      root.style.setProperty('--bg-card', '#16161f');
      root.style.setProperty('--text-primary', '#e8e8ec');
      root.style.setProperty('--text-secondary', '#a0a0a8');
      root.style.setProperty('--text-muted', '#606068');
      root.style.setProperty('--border-subtle', 'rgba(255, 255, 255, 0.06)');
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Return safe defaults during SSR / before ThemeProvider mounts
    return {
      theme: 'dark' as Theme,
      toggleTheme: () => {},
      setTheme: () => {},
    };
  }
  return context;
}
