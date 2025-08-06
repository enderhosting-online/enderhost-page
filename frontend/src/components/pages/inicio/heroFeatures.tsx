'use client';

import { IconCircleCheckFilled } from '@tabler/icons-react';
import { motion } from 'motion/react';
import { HeroFeature } from '@/types/directus';

interface SkillsProps {
  heroFeatures: HeroFeature[];
}

export default function Skills({ heroFeatures }: SkillsProps) {
  return (
    <div className="flex flex-wrap gap-x-12 gap-y-3 w-full max-w-xl justify-center">
      {
      heroFeatures.map((feature, i) => (
        <motion.span
          key={feature.label}
          className="min-w-fit flex gap-2"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 + 0.3 }}
        >
          <IconCircleCheckFilled className="fill-primary" />
          {feature.label}
        </motion.span>
      ))
    }
    </div>
  );
}
