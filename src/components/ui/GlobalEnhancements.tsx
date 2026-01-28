'use client';

import dynamic from 'next/dynamic';
import BackToTop from './BackToTop';

// Dynamic imports for client-side only components
const CustomCursor = dynamic(() => import('@/components/effects/CustomCursor'), {
  ssr: false,
});

const FloatingElements = dynamic(() => import('@/components/effects/FloatingElements'), {
  ssr: false,
});

/**
 * Global UI enhancements that are rendered across all pages.
 * Includes custom cursor, floating elements, and back-to-top button.
 */
export default function GlobalEnhancements() {
  return (
    <>
      <CustomCursor />
      <FloatingElements />
      <BackToTop />
    </>
  );
}
