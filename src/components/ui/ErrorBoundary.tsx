'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * Error Boundary component that catches JavaScript errors in child components.
 * Displays a sci-fi themed error message with recovery options.
 */
export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[400px] flex items-center justify-center p-8">
          <div className="text-center max-w-md">
            {/* Glitchy error icon */}
            <div className="relative mb-6">
              <svg
                viewBox="0 0 100 100"
                className="w-20 h-20 mx-auto text-[var(--accent-amber)] opacity-60"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
                <path d="M50 30 L50 55 M50 65 L50 70" strokeWidth="4" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 animate-pulse">
                <svg
                  viewBox="0 0 100 100"
                  className="w-20 h-20 mx-auto text-[var(--accent-cyan)] opacity-30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ transform: 'translate(2px, -2px)' }}
                >
                  <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
                  <path d="M50 30 L50 55 M50 65 L50 70" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <h2 className="font-[var(--font-orbitron)] text-xl font-semibold text-[var(--text-primary)] mb-2">
              Temporal Anomaly Detected
            </h2>
            <p className="text-[var(--text-secondary)] text-sm mb-6 font-mono">
              A glitch in the timeline has occurred. The system encountered an unexpected error.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <pre className="text-left text-xs text-[var(--text-muted)] bg-[var(--bg-elevated)] p-4 rounded mb-6 overflow-auto max-h-32 border border-[var(--border-subtle)]">
                {this.state.error.message}
              </pre>
            )}

            <div className="flex gap-4 justify-center">
              <button
                onClick={this.handleRetry}
                className="btn-primary text-sm"
              >
                Retry Timeline
              </button>
              <button
                onClick={() => window.location.reload()}
                className="btn-secondary text-sm"
              >
                Reset Reality
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
