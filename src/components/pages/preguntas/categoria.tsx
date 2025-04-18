'use client';

import Section from '@/components/ui/section';
import Title from '@/components/ui/title';
import { sf } from '@/lib/utils';

import { motion } from 'motion/react';

export default function Categoria(
  { category, questions, id }:
  { category: string, questions: { question: string, answer: string }[], id: string },
) {
  return (
    <Section
      className="flex flex-col gap-16 my-20"
      id={id}
    >
      <Title className="max-w-lg">
        {category}
      </Title>
      <div className="grid grid-cols-2 gap-8">
        {
          questions.map(({ question, answer }) => (
            <motion.div
              key={question}
              className="p-6 gap-8 rounded-xl border-2 border-[#24282F] bg-[#171B22] text-xl flex flex-col"
              whileHover={{ borderColor: '#616671' }}
              id={sf(question)}
            >
              <span className="w-full text-2xl font-semibold">
                {question}
              </span>
              <div className="text-base flex flex-col gap-6" dangerouslySetInnerHTML={{ __html: answer }} />
            </motion.div>
          ))
        }
      </div>
    </Section>
  );
}
