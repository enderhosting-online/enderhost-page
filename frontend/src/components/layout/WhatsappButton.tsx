'use client';

import { IconBrandWhatsapp } from '@tabler/icons-react';
import { motion } from 'motion/react';

export default function WhatsappButton() {
  return (
    <motion.a
      href="https://wa.me/573053606634"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 rounded-full p-3 z-100 shadow-lg"
      animate={{
        x: [0, -5, 5, -5, 5, 0],
        rotate: [0, -6, 6, -6, 6, 0],
      }}
      transition={{
        duration: 0.6,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatDelay: 3,
      }}
    >
      <IconBrandWhatsapp className="size-12 text-white transition-colors" />
    </motion.a>
  );
}
