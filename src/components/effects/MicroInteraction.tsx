'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

type InteractionType = 'hover-lift' | 'hover-glow' | 'click-pulse' | 'hover-scale' | 'hover-tilt';

interface MicroInteractionProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  type?: InteractionType;
  intensity?: 'subtle' | 'medium' | 'strong';
  disabled?: boolean;
}

/**
 * Wrapper component that adds micro-interactions to children elements.
 * Provides various hover and click effects for enhanced UX.
 */
export default function MicroInteraction({
  children,
  type = 'hover-lift',
  intensity = 'medium',
  disabled = false,
  className = '',
  ...props
}: MicroInteractionProps) {
  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  const intensityValues = {
    subtle: { scale: 1.02, lift: -2, rotation: 2 },
    medium: { scale: 1.05, lift: -4, rotation: 5 },
    strong: { scale: 1.08, lift: -8, rotation: 8 },
  };

  const values = intensityValues[intensity];

  const variants = {
    'hover-lift': {
      initial: { y: 0 },
      hover: { y: values.lift },
      tap: { y: 0 },
    },
    'hover-glow': {
      initial: { boxShadow: '0 0 0 rgba(201, 162, 39, 0)' },
      hover: { boxShadow: `0 0 ${values.lift * -4}px rgba(201, 162, 39, 0.4)` },
      tap: { boxShadow: '0 0 0 rgba(201, 162, 39, 0)' },
    },
    'click-pulse': {
      initial: { scale: 1 },
      hover: { scale: 1 },
      tap: { scale: 0.95 },
    },
    'hover-scale': {
      initial: { scale: 1 },
      hover: { scale: values.scale },
      tap: { scale: 0.98 },
    },
    'hover-tilt': {
      initial: { rotateX: 0, rotateY: 0 },
      hover: { rotateX: values.rotation, rotateY: values.rotation },
      tap: { rotateX: 0, rotateY: 0 },
    },
  };

  return (
    <motion.div
      className={className}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={variants[type]}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25,
      }}
      style={type === 'hover-tilt' ? { transformStyle: 'preserve-3d' } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Ripple effect on click for buttons.
 */
export function RippleButton({
  children,
  className = '',
  onClick,
  ...props
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
} & HTMLMotionProps<'button'>) {
  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      {...props}
    >
      {children}
      <motion.span
        className="absolute inset-0 bg-white/20 rounded-full"
        initial={{ scale: 0, opacity: 0.5 }}
        whileTap={{ scale: 4, opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.button>
  );
}

/**
 * Magnetic hover effect that follows cursor within element bounds.
 */
export function MagneticElement({
  children,
  className = '',
  strength = 0.3,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{
        x: 0,
        y: 0,
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        e.currentTarget.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translate(0, 0)';
      }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.div>
  );
}
