'use client';

import { Button } from '@/components/ui/button';
import Section from '@/components/ui/section';
import { InicioSections } from '@/config/pages';
import { IconCircleCheckFilled } from '@tabler/icons-react';
import { motion } from 'motion/react';
import { HERO_CONTENT } from '@/config/content/inicio';

function Skills() {
  return (
    <div className="flex flex-wrap gap-x-12 gap-y-3 w-full max-w-xl justify-center">
      {
      HERO_CONTENT.features.map((skill, i) => (
        <motion.span
          key={skill}
          className="min-w-fit flex gap-2"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 + 0.3 }}
        >
          <IconCircleCheckFilled className="fill-primary" />
          {skill}
        </motion.span>
      ))
    }
    </div>
  );
}

export default function Hero() {
  return (
    <Section
      id={InicioSections.COMENZAR_AHORA}
      className="flex flex-col my-20 md:mt-32 md:mb-20"
    >
      <div className="flex flex-col gap-10 md:gap-12 items-center">
        {/**/}
        <div className="flex justify-center items-center relative">
          <h1 className="uppercase font-black text-5xl md:text-6xl w-full max-w-2xl tracking-wider flex flex-col gap-4 text-center z-10">
            Hosting de servidores de Minecraft
          </h1>
        </div>
        <Skills />
        <div className="gap-6 grid grid-cols-2 w-full max-w-88">
          <Button size="lg" className="w-full" variant="secondary">
            Ver planes
          </Button>
          <Button size="lg">
            ¡Prubalo gratis!
          </Button>
        </div>
      </div>
    </Section>
  );
}
