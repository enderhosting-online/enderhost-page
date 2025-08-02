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
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
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
      className="flex flex-col my-6 md:mt-28 md:mb-20"
    >
      <div className="flex flex-col gap-6 md:gap-10 items-center">
        <h1 className="uppercase font-black text-4xl md:text-7xl w-full max-w-2xl tracking-wider flex flex-col gap-4 text-center">
          Hosting de servidores de minecraft
        </h1>
        <Skills />
        <div>
          <Button size="lg">
            Comenzar ahora
          </Button>
        </div>
      </div>
    </Section>
  );
}
