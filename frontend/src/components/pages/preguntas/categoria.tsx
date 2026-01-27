"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Masonry from "react-smart-masonry";
import slugify from "slugify";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import { sf } from "@/lib/utils";
import type { Question } from "@/types/directus";

const breakpoints = { mobile: 0, desktop: 768 };

export default function Categoria({
  category,
  questions,
  id,
}: {
  category: string;
  questions: Question[];
  id: string;
}) {
  return (
    <Section className="my-20 flex flex-col gap-16" id={id}>
      <Title className="max-w-lg">{category}</Title>

      <Masonry
        columns={{ mobile: 1, desktop: 2 }}
        gap={{ mobile: 20, desktop: 24 }}
        breakpoints={breakpoints}
        autoArrange
      >
        {questions.map(({ answer, title }) => (
          <motion.div
            key={title}
            className="flex max-h-max w-full flex-col gap-8 rounded-xl border-2 border-[#24282F] bg-[#171B22] p-6 text-xl"
            whileHover={{ borderColor: "#616671" }}
            id={sf(title)}
          >
            <Link
              href={`/preguntas#${slugify(title)}`}
              className="hover:underlinen w-full font-semibold text-2xl"
              id={slugify(title)}
            >
              {title}
            </Link>
            <div
              className="prose-img:my-2 flex prose-img:aspect-video flex-col gap-6 prose-img:rounded-lg prose-img:bg-muted-foreground/5 text-base"
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          </motion.div>
        ))}
      </Masonry>
    </Section>
  );
}
