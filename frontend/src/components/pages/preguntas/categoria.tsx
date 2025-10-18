'use client';

import Section from '@/components/ui/section';
import Title from '@/components/ui/title';
import { sf } from '@/lib/utils';
import { Question } from '@/types/directus';
import Masonry from 'react-smart-masonry';

import { motion } from 'motion/react';

const breakpoints = { mobile: 0, desktop: 768 };

export default function Categoria(
  { category, questions, id }:
  { category: string, questions: Question[], id: string },
) {
  return (
    <Section
      className="flex flex-col gap-16 my-20"
      id={id}
    >
      <Title className="max-w-lg">
        {category}
      </Title>

      <Masonry
        columns={{ mobile: 1, desktop: 2 }}
        gap={{ mobile: 20, desktop: 24 }}
        breakpoints={breakpoints}
        autoArrange
      >
        {
          questions.map(({ answer, title }) => (
            <motion.div
              key={title}
              className="p-6 gap-8 rounded-xl border-2 border-[#24282F] bg-[#171B22] text-xl flex flex-col max-h-max w-full"
              whileHover={{ borderColor: '#616671' }}
              id={sf(title)}
            >
              <span className="w-full text-2xl font-semibold">
                {title}
              </span>
              <div className="text-base flex flex-col gap-6 prose-img:rounded-lg prose-img:aspect-video prose-img:bg-muted-foreground/5 prose-img:my-2" dangerouslySetInnerHTML={{ __html: answer }} />
            </motion.div>
          ))
        }
      </Masonry>
    </Section>
  );
}
