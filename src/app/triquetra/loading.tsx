import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function TriquetraLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
      <LoadingSpinner size="lg" message="Opening temporal gateway..." />
    </div>
  );
}
