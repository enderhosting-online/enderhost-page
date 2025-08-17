'use client';

import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { sf } from '@/lib/utils';
import { Question, QuestionSection } from '@/types/directus';

interface QuestionsListProps {
  questions: QuestionSection[]
}

export default function QuestionsList({ questions }: QuestionsListProps) {
  const importantQuestions = questions.reduce((acc, section) => {
    const sectionQuestions = section.questions.slice(0, 2);
    return acc.concat(sectionQuestions);
  }, [] as Question[]);

  return (
    <div className="w-full grid md:grid-cols-2 gap-6 md:gap-8">
      {
        importantQuestions.map(({ title }) => (
          <motion.span
            key={title}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ amount: 1, once: true }}
            className="border-2 border-[#24282F] rounded-xl overflow-hidden bg-[#171B22]"
            whileHover={{ borderColor: '#616671' }}
          >
            <Link
              href={`/preguntas#${sf(title)}`}
              className="p-4 md:p-6 gap-4 text-lg md:text-xl flex font-semibold items-center"
            >
              <span className="w-full">
                {title}
              </span>
              <IconArrowRight className="size-10 opacity-0 ml-2" />
            </Link>
          </motion.span>
        ))
      }
    </div>
  );
}
