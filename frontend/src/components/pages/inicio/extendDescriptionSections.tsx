'use client';

import { useDevice } from '@/components/providers/DeviceProvider';
import { extractImageUrl } from '@/lib/directus';
import { ExtendDescriptionFeature } from '@/types/directus';
import { motion } from 'motion/react';

interface ExtendDescriptionSectionsProps {
  extendDescription: ExtendDescriptionFeature[];
}

export default function ExtendDescriptionSections({ extendDescription }
: ExtendDescriptionSectionsProps) {
  const { isMobile } = useDevice();

  return (
    <div className="flex flex-col gap-24 w-full">
      {
        extendDescription.map(({ content, image, title }) => (
          <motion.div
            key={title}
            className="grid md:grid-cols-2 gap-10 w-full items-center"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ amount: isMobile ? 0.24 : 0.60, once: true }}
          >
            <div className="flex flex-col gap-6 md:gap-8">
              <h3 className="font-black uppercase text-2xl md:text-3xl">
                {title}
              </h3>
              <div dangerouslySetInnerHTML={{ __html: content }} className="flex flex-col gap-6" />
            </div>
            <img
              src={extractImageUrl(image)}
              alt={title}
              className="glassmorphism rounded-xl w-full max-w-lg justify-self-center"
            />
          </motion.div>
        ))
      }
    </div>
  );
}
