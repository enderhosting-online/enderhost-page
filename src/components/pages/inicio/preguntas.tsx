'use client';

import Section from '@/components/ui/section';
import Title from '@/components/ui/title';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { InicioSections } from '@/config/pages';
import { Pregunta, PREGUNTAS } from '@/config/content/preguntas';
import { sf } from '@/lib/utils';

const preguntas: Pregunta[] = PREGUNTAS.SOBRE_EL_JUEGO.slice(0, 2)
  .concat(PREGUNTAS.SOBRE_EL_HOSTING.slice(0, 3))
  .concat(PREGUNTAS.GENERALES.slice(0, 3));

function PreguntasList() {
  return (
    <div className="w-full grid md:grid-cols-2 gap-6 md:gap-8">
      {
        preguntas.map(({ question }) => (
          <motion.span
            key={question}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ amount: 0.4, once: true }}
            className="border-2 border-[#24282F] rounded-xl overflow-hidden bg-[#171B22]"
            whileHover={{ borderColor: '#616671' }}
            // transition={{ delay: i * 0.04 }}
          >
            <Link
              href={`/preguntas#${sf(question)}`}
              className="p-4 md:p-6 gap-4 text-lg md:text-xl flex font-semibold items-center"
            >
              <span className="w-full">
                {question}
              </span>
              <IconArrowRight className="size-10 opacity-0 ml-2" />
            </Link>
          </motion.span>
        ))
      }
    </div>
  );
}

export default function Preguntas() {
  return (
    <Section
      id={InicioSections.PREGUNTAS_FRECUENTES}
      className="flex flex-col gap-14 my-32"
    >
      <Title className="flex flex-col">
        <span>
          Preguntas y respuestas
        </span>
        <span>
          frecuentes
        </span>
      </Title>

      <PreguntasList />
    </Section>
  );
}
