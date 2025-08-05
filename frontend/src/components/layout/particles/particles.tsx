'use client';

import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import Particle from './particle';

export default function Particles() {
  const [showParticles, setShowParticles] = useState(false);
  const { width, height } = useWindowSize();
  const [particles, setParticles] = useState<
  { id: number; x: number; y: number }[]
  >([]);

  const numOfParticules = width < 768 ? 70 : 130;

  useEffect(() => {
    setShowParticles(true);

    const newParticles = Array.from({ length: numOfParticules }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center fixed top-0 left-0 -z-30">
      {showParticles
      && particles.map((p) => (
        <Particle key={p.id} x={p.x} y={p.y} />
      ))}
    </div>
  );
}
