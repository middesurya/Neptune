'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Props for the ParticleField component.
 */
interface ParticleFieldProps {
  /** Number of particles to render (default: 2000) */
  count?: number;
  /** Particle color in hex format (default: '#C9A227') */
  color?: string;
  /** Particle size in world units (default: 0.015) */
  size?: number;
  /** Base velocity multiplier for particle movement (default: 0.0003) */
  speed?: number;
}

/**
 * GPU-optimized 3D particle field using Three.js BufferGeometry.
 *
 * Creates an ambient particle system with:
 * - Random initial positions in a 20x20x20 unit space
 * - Continuous drift motion with individual velocities
 * - Subtle sine-wave vertical oscillation
 * - Boundary wrapping to keep particles in view
 * - Slow overall rotation for depth perception
 * - Additive blending for glowing effect
 *
 * Performance optimizations:
 * - Uses BufferGeometry for efficient GPU rendering
 * - Calculates velocities once in useMemo
 * - Updates position buffer directly each frame
 * - Disables depth writing for transparent rendering
 *
 * @example
 * ```tsx
 * <ParticleField count={1500} color="#C9A227" size={0.012} speed={0.0002} />
 * ```
 */
export default function ParticleField({ 
  count = 2000, 
  color = '#C9A227',
  size = 0.015,
  speed = 0.0003
}: ParticleFieldProps) {
  const mesh = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const opacities = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      // Spread particles in a large area
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      // Random velocities
      velocities[i * 3] = (Math.random() - 0.5) * speed;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * speed;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * speed;
      
      // Random opacity for twinkling effect
      opacities[i] = Math.random();
    }
    
    return { positions, velocities, opacities };
  }, [count, speed]);

  useFrame((state) => {
    if (!mesh.current) return;
    
    const positions = mesh.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.elapsedTime;
    
    for (let i = 0; i < count; i++) {
      // Drift motion
      positions[i * 3] += particles.velocities[i * 3];
      positions[i * 3 + 1] += particles.velocities[i * 3 + 1];
      positions[i * 3 + 2] += particles.velocities[i * 3 + 2];
      
      // Add subtle wave motion
      positions[i * 3 + 1] += Math.sin(time * 0.5 + i * 0.01) * 0.0005;
      
      // Boundary wrapping
      if (Math.abs(positions[i * 3]) > 10) positions[i * 3] *= -0.9;
      if (Math.abs(positions[i * 3 + 1]) > 10) positions[i * 3 + 1] *= -0.9;
      if (Math.abs(positions[i * 3 + 2]) > 10) positions[i * 3 + 2] *= -0.9;
    }
    
    mesh.current.geometry.attributes.position.needsUpdate = true;
    
    // Slow rotation
    mesh.current.rotation.y += 0.0001;
    mesh.current.rotation.x += 0.00005;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
