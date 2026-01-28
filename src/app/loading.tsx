import LoadingSpinner from '@/components/ui/LoadingSpinner';

/**
 * Global loading state for page transitions.
 * Next.js automatically shows this during route navigation.
 */
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
      <LoadingSpinner size="lg" message="Traversing timelines..." />
    </div>
  );
}
