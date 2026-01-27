"use client";

import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "motion/react";
import Link from "next/link";
import { sf } from "@/lib/utils";
import type { Question, QuestionSection } from "@/types/directus";

interface QuestionsListProps {
  questions: QuestionSection[];
}

export default function QuestionsList({ questions }: QuestionsListProps) {
  const importantQuestions = questions.reduce((acc, section) => {
    const sectionQuestions = section.questions.slice(0, 2);
    return acc.concat(sectionQuestions);
  }, [] as Question[]);

  return (
    <div className="grid w-full gap-6 md:grid-cols-2 md:gap-8">
      {importantQuestions.map(({ title }) => (
        <motion.span
          key={title}
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ amount: 1, once: true }}
          className="overflow-hidden rounded-xl border-2 border-[#24282F] bg-[#171B22]"
          whileHover={{ borderColor: "#616671" }}
        >
          <Link
            href={`/preguntas#${sf(title)}`}
            className="flex items-center gap-4 p-4 font-semibold text-lg md:p-6 md:text-xl"
          >
            <span className="w-full">{title}</span>
            <IconArrowRight className="ml-2 size-10 opacity-0" />
          </Link>
        </motion.span>
      ))}
    </div>
  );
}
