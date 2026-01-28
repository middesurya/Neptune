'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import ParticleField from './ParticleField';

interface SceneProps {
  className?: string;
}

export default function Scene({ className }: SceneProps) {
  return (
    <div className={`fixed inset-0 -z-10 ${className || ''}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {/* Ambient particles in amber */}
          <ParticleField count={1500} color="#C9A227" size={0.012} speed={0.0002} />
          
          {/* Secondary particles in cyan - fewer and smaller */}
          <ParticleField count={500} color="#00f0ff" size={0.008} speed={0.0003} />
          
          {/* Distant background particles */}
          <ParticleField count={1000} color="#404050" size={0.005} speed={0.0001} />
        </Suspense>
        
        {/* Subtle ambient light */}
        <ambientLight intensity={0.1} />
      </Canvas>
    </div>
  );
}
