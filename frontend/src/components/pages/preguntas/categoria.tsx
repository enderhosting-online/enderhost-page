'use client';

import Section from '@/components/ui/section';
import { Skeleton } from '@/components/ui/skeleton';
import Title from '@/components/ui/title';
import { sf } from '@/lib/utils';
import { Question } from '@/types/directus';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Categoria(
  { category, questions, id }:
  { category: string, questions: Question[], id: string },
) {
  const [masontyLoading, setMasoryLoading] = useState(true);

  useEffect(() => {
    import('@appnest/masonry-layout')
      .then(() => setMasoryLoading(false));
  }, []);

  return (
    <Section
      className="flex flex-col gap-16 my-20"
      id={id}
    >
      <Title className="max-w-lg">
        {category}
      </Title>

      {
        masontyLoading ? (
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 w-full">
            <Skeleton className="w-full aspect-video" />
            <Skeleton className="w-full aspect-video" />
            <Skeleton className="w-full aspect-video" />
            <Skeleton className="w-full aspect-video" />
          </div>
        ) : (
          <masonry-layout maxcolwidth="700" className="md:gap-2">
            {
          questions.map(({ answer, title }) => (
            <motion.div
              key={title}
              className="p-6 gap-8 rounded-xl border-2 border-[#24282F] bg-[#171B22] text-xl flex flex-col max-h-max mb-6 md:mb-8 w-full"
              whileHover={{ borderColor: '#616671' }}
              id={sf(title)}
            >
              <span className="w-full text-2xl font-semibold">
                {title}
              </span>
              <div className="text-base flex flex-col gap-6 prose-img:rounded-lg prose-img:my-2" dangerouslySetInnerHTML={{ __html: answer }} />
            </motion.div>
          ))
        }
          </masonry-layout>
        )
      }
    </Section>
  );
}
