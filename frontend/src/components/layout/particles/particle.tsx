import { motion } from 'motion/react';

export default function Particle({ x, y }: { x: number; y: number }) {
  const size = Math.random() * 6 + 2;
  const offsetX = (Math.random() - 0.5) * 400;
  const offsetY = (Math.random() - 0.5) * 250;

  return (
    <motion.div
      className="absolute bg-purple-500 rounded-full z-0"
      style={{
        width: size,
        height: size,
        top: y,
        left: x,
      }}
      initial={{
        opacity: 0, x: 0, y: 0, scale: 0,
      }}
      animate={{
        opacity: [0, 1, 0.5],
        scale: [0, 1.2, 0],
        x: offsetX,
        y: offsetY,
      }}
      transition={{
        duration: 5,
        times: [0, 0.1, 1],
      }}
    />
  );
}
