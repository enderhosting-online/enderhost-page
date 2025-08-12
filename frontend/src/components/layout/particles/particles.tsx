'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useDevice } from '@/components/providers/DeviceProvider';
import Particle from './particle';

export default function Particles() {
  const [showParticles, setShowParticles] = useState(false);
  const { isMobile, height, width } = useDevice();
  const [particles, setParticles] = useState<
  { id: number; x: number; y: number }[]
  >([]);
  const path = usePathname();

  useEffect(() => {
    if (showParticles) return;

    const numOfParticules = isMobile ? 55 : 130;

    const newParticles = Array.from({ length: numOfParticules }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
    }));
    setParticles(newParticles);

    setShowParticles(true);
  }, [path]);

  useEffect(() => {
    if (!showParticles) return () => {};

    const timeout = setTimeout(() => {
      setShowParticles(false);
      setParticles([]);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [showParticles]);

  return (
    <div className="w-full h-full flex justify-center items-center fixed top-0 left-0 -z-30">
      {showParticles
      && particles.map((p) => (
        <Particle key={p.id} x={p.x} y={p.y} />
      ))}
    </div>
  );
}
