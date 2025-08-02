'use client';

import Section from '@/components/ui/section';
import Title from '@/components/ui/title';
import { CARACTERISTICAS_CONTENT } from '@/config/content/inicio';
import { InicioSections } from '@/config/pages';
import { motion } from 'motion/react';

function CaracteristicasSections() {
  return (
    <div className="flex flex-col gap-24 w-full">
      {
        CARACTERISTICAS_CONTENT.features.map(({ content, image, title }) => (
          <motion.div
            key={title}
            className="grid md:grid-cols-2 gap-10 w-full items-center"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ amount: 0.2, once: true }}
          >
            <div className="flex flex-col gap-6 md:gap-8">
              <h3 className="font-black uppercase text-2xl md:text-3xl">
                {title}
              </h3>
              <div dangerouslySetInnerHTML={{ __html: content }} className="flex flex-col gap-6" />
            </div>
            <img
              src={image}
              alt={title}
              className="glassmorphism rounded-xl w-full max-w-lg justify-self-center"
            />
          </motion.div>
        ))
      }
    </div>
  );
}

export default function Caracteristicas() {
  return (
    <Section
      id={InicioSections.CARACTERISTICAS}
      className="flex flex-col gap-14 my-32"
    >
      <Title className="flex flex-col">
        <span>
          Características de
        </span>
        <span>
          nuestros servidores
        </span>
      </Title>
      <CaracteristicasSections />
    </Section>
  );
}
