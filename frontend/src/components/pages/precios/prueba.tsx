"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import TypewriterText from "@/components/ui/typewriterText";

const messagesBoubleUser = [
  "Me gustaria hacer la prueba gratuita 😁😁",
  "- En la version 1.20.1",
  "- Con 6gb de ram",
  "- Y usando forge para mods",
];

const messagesBoubleUserLength = messagesBoubleUser.reduce(
  (acc, curr) => acc + curr.length,
  0,
);

const messagesBoubleSupport = [
  "POR SUPUESTO 🥳🥳",
  "Aqui tienes tus credenciales",
  "- usuario: prueba123",
  "- password: 123prueba123",
  "Disfruta la prueba 🙌🙌",
];

// const messagesBoubleSupportLength = messagesBoubleSupport
//   .reduce((acc, curr) => acc + curr.length, 0);

const getDelayForIndex = (delay: number, index: number, messages: string[]) => {
  const previousMessage = messages.reduce((acc, curr, i) => {
    if (i < index) {
      return acc + curr;
    }
    return acc;
  }, "");

  if (index === 0) return delay;

  return previousMessage.length * 50 + 100 + delay;
};

function Step({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-start gap-6 text-lg md:text-2xl">
        <div className="flex size-10 min-w-10 items-center justify-center rounded-full border-2 border-foreground">
          {index}
        </div>
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
}

export default function Prueba() {
  return (
    <Section className="my-20 flex flex-col gap-16">
      <Title>
        <span>Haz una prueba gratis</span>
        <span>de 24 horas</span>
      </Title>
      <div className="flex flex-col gap-24 md:gap-28">
        <Step
          index={1}
          title="Escribenos diciendo: “Me gustaria hacer la prueba gratuita”"
        >
          <div className="flex min-h-52 items-start justify-end md:min-h-46">
            <div className="relative flex flex-col">
              <motion.div
                initial={{ scaleX: 0.3, scaleY: 0.5 }}
                animate={{ scaleX: 1, scaleY: 1 }}
                style={{ transformOrigin: "top right" }}
                transition={{ delay: 0.5 }}
                className="relative mr-4 flex min-h-24 min-w-xs flex-col gap-1 rounded-lg rounded-tr-none bg-[#2E5B4B] px-4 py-5 text-lg md:mr-20 md:min-w-md md:px-7 md:pb-8 md:text-2xl"
              >
                {messagesBoubleUser.map((message, i) => (
                  <TypewriterText
                    key={message}
                    delay={getDelayForIndex(800, i, messagesBoubleUser)}
                  >
                    {message}
                  </TypewriterText>
                ))}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute right-4 bottom-2 text-base text-foreground/70 md:right-10 md:text-xl"
                >
                  1:49
                </motion.span>
              </motion.div>
              <div className="absolute top-0 -right-2 h-0 w-0 border-t-0 border-r-0 border-b-[30px] border-b-transparent border-l-[#2E5B4B] border-l-[30px] md:right-12 md:border-b-[40px] md:border-l-[40px]" />
            </div>
          </div>
        </Step>
        <Step
          index={2}
          title="Espera a que te enviemos un mensaje de confirmacion junto con tu usuario de prueba."
        >
          <div className="flex min-h-58 items-start justify-start">
            <div className="relative flex flex-col">
              <motion.div
                initial={{ scaleX: 0.3, scaleY: 0.5 }}
                animate={{ scaleX: 1, scaleY: 1 }}
                style={{ transformOrigin: "top left" }}
                transition={{
                  delay: 0.5 + (messagesBoubleUserLength * 50) / 1000 + 0.2,
                }}
                className="relative ml-4 flex min-h-24 min-w-xs flex-col gap-1 rounded-lg bg-[#232C33] px-7 py-5 pb-8 text-lg md:ml-20 md:min-w-md md:text-2xl"
              >
                {messagesBoubleSupport.map((message, i) => (
                  <TypewriterText
                    key={message}
                    delay={getDelayForIndex(
                      800 + messagesBoubleUserLength * 50 + 800,
                      i,
                      messagesBoubleSupport,
                    )}
                  >
                    {message}
                  </TypewriterText>
                ))}
                <motion.span
                  className="absolute right-4 bottom-2 text-base text-foreground/70 md:text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.5 + (messagesBoubleUserLength * 50) / 1000 + 0.2,
                  }}
                >
                  1:52
                </motion.span>
              </motion.div>
              <div className="absolute top-0 -left-2 h-0 w-0 border-t-0 border-r-[#232C33] border-r-[30px] border-b-[30px] border-b-transparent border-l-0 md:left-12 md:border-r-[40px] md:border-b-[40px]" />
            </div>
          </div>
        </Step>
        <Step
          index={3}
          title="Listo! Disfruta de tu prueba y comprueba la calidad de nuestros servidores!"
        >
          <div className="flex w-full items-center justify-center">
            <img
              src="https://ynoa-uploader.ynoacamino.me/uploads/1760821898_image%20%283%29.webp"
              alt="prueba"
              className="w-full max-w-lg rounded-xl"
            />
          </div>
        </Step>
        <Step
          index={4}
          title="Solicita ya! con el botón de abajo o escribenos por WhatsApp."
        >
          <div className="flex w-full items-center justify-center">
            <Button asChild size="lg">
              <Link
                target="_blank"
                href="https://wa.me/51918534289?text=%C2%A1Hola!%20Me%20encantar%C3%ADa%20solicitar%20mi%20prueba%20gratuita%20de%20Ender%20Hosting."
              >
                Solicitar tu prueba gratuita
              </Link>
            </Button>
          </div>
        </Step>
      </div>
    </Section>
  );
}
