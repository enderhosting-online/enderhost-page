'use client';

import { HostingFeature } from '@/types/directus';
import { motion } from 'motion/react';
import { IconMapper } from '@/lib/icons';
import { useDevice } from '@/components/providers/DeviceProvider';

interface HostingFeaturesCardsProps {
  hostingFeatures: HostingFeature[];
}

export default function HostingFeaturesCards({ hostingFeatures }: HostingFeaturesCardsProps) {
  const { isMobile } = useDevice();

  return (
    <div className="glassmorphism w-full rounded-xl p-6 md:p-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
      {
        hostingFeatures.map((feature, i) => (
          <motion.div
            key={feature.title}
            className="flex flex-col gap-4 bg-[#111928]/75 rounded-lg p-6 pb-10 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{
              once: true,
              amount: isMobile ? 0.6 : 0.3,
            }}
            transition={{
              delay: isMobile ? 0 : i * 0.06,
            }}
          >
            <IconMapper className="size-16 mb-3" name={feature.icon.name} />
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p>{feature.content}</p>
          </motion.div>
        ))
      }
    </div>
  );
}
