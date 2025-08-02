'use client';

import Section from '@/components/ui/section';
import Title from '@/components/ui/title';
import { InicioSections } from '@/config/pages';
import { CREA_TU_SERVIDOR_CONTENT } from '@/config/content/inicio';
import { motion } from 'motion/react';

function CreaCards() {
  return (
    <div className="glassmorphism w-full rounded-2xl p-6 md:p-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
      {
        CREA_TU_SERVIDOR_CONTENT.features.map((feature) => (
          <motion.div
            key={feature.title}
            className="flex flex-col gap-4 bg-[#111928]/75 rounded-lg p-6 pb-10 backdrop-blur-lg"
            initial={{ opacity: 0.4, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ bounce: 0.3, type: 'spring', duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <feature.icon className="size-16 mb-3" />
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p>{feature.content}</p>
          </motion.div>
        ))
      }
    </div>
  );
}

export default function Crea() {
  return (
    <Section
      id={InicioSections.CREA_TU_SERVIDOR}
      className="flex flex-col gap-14 my-32"
    >
      <Title className="flex flex-col">
        <span>
          Crea tu servidor
        </span>
        <span>
          de Minecraft
        </span>
      </Title>
      <CreaCards />
    </Section>
  );
}
