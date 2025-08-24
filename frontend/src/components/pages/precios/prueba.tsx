'use client';

import Section from '@/components/ui/section';
import Title from '@/components/ui/title';
import TypewriterText from '@/components/ui/typewriterText';
import { motion } from 'motion/react';

const messagesBoubleUser = [
  'Me gustaria hacer la prueba gratuita 😁😁',
  '- En la version 1.20.1',
  '- Con 6gb de ram',
  '- Y usando forge para mods',
];

const messagesBoubleUserLength = messagesBoubleUser
  .reduce((acc, curr) => acc + curr.length, 0);

const messagesBoubleSupport = [
  'POR SUPUESTO 🥳🥳',
  'Aqui tienes tus credenciales',
  '- usuario: prueba123',
  '- password: 123prueba123',
  'Disfruta la prueba 🙌🙌',
];

// const messagesBoubleSupportLength = messagesBoubleSupport
//   .reduce((acc, curr) => acc + curr.length, 0);

const getDelayForIndex = (
  delay: number,
  index: number,
  messages: string[],
) => {
  const previousMessage = messages.reduce((acc, curr, i) => {
    if (i < index) {
      return acc + curr;
    }
    return acc;
  }, '');

  if (index === 0) return delay;

  return previousMessage.length * 50 + 100 + delay;
};

function Step(
  { index, title, children }: { index: number, title: string, children?: React.ReactNode },
) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-6 items-center justify-start text-lg md:text-2xl">
        <div className="size-10 border-2 flex items-center justify-center rounded-full border-foreground min-w-10">
          {index}
        </div>
        <span>
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}

export default function Prueba() {
  return (
    <Section
      className="flex flex-col gap-16 my-20"
    >
      <Title>
        <span>
          Haz una prueba gratis
        </span>
        <span>
          de 24 horas
        </span>
      </Title>
      <div className="flex flex-col gap-24 md:gap-28">
        <Step
          index={1}
          title="Escribenos diciendo: “Me gustaria hacer la prueba gratuita”"
        >
          <div className="flex justify-end items-start min-h-52 md:min-h-46">
            <div className="relative flex flex-col">
              <motion.div
                initial={{ scaleX: 0.3, scaleY: 0.5 }}
                animate={{ scaleX: 1, scaleY: 1 }}
                style={{ transformOrigin: 'top right' }}
                transition={{ delay: 0.5 }}
                className="mr-4 md:mr-20 bg-[#2E5B4B] py-5 px-4 md:px-7 md:pb-8 relative flex flex-col gap-1 rounded-lg text-lg md:text-2xl min-w-xs md:min-w-md min-h-24 rounded-tr-none"
              >
                {
                messagesBoubleUser.map((message, i) => (
                  <TypewriterText
                    key={message}
                    delay={getDelayForIndex(800, i, messagesBoubleUser)}
                  >
                    {message}
                  </TypewriterText>
                ))
              }
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute right-4 md:right-10 bottom-2 text-foreground/70 text-base md:text-xl"
                >
                  1:49
                </motion.span>
              </motion.div>
              <div className="w-0 h-0 border-b-[30px] border-l-[30px]
                          md:border-b-[40px] border-b-transparent
                          md:border-l-[40px] border-l-[#2E5B4B]
                          border-t-0 border-r-0 top-0 absolute -right-2 md:right-12"
              />
            </div>
          </div>
        </Step>
        <Step
          index={2}
          title="Espera a que te enviemos un mensaje de confirmacion junto con tu usuario de prueba."
        >
          <div className="flex justify-start items-start min-h-58">
            <div className="relative flex flex-col">
              <motion.div
                initial={{ scaleX: 0.3, scaleY: 0.5 }}
                animate={{ scaleX: 1, scaleY: 1 }}
                style={{ transformOrigin: 'top left' }}
                transition={{ delay: 0.5 + (messagesBoubleUserLength * 50) / 1000 + 0.2 }}
                className="ml-4 md:ml-20 bg-[#232C33] py-5 px-7 pb-8 relative flex flex-col gap-1 rounded-lg text-lg md:text-2xl min-w-xs md:min-w-md min-h-24"
              >
                {
                messagesBoubleSupport.map((message, i) => (
                  <TypewriterText
                    key={message}
                    delay={
                      getDelayForIndex(
                        800 + messagesBoubleUserLength * 50 + 800,
                        i,
                        messagesBoubleSupport,
                      )
                    }
                  >
                    {message}
                  </TypewriterText>
                ))
              }
                <motion.span
                  className="absolute right-4 bottom-2 text-foreground/70 text-base md:text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + (messagesBoubleUserLength * 50) / 1000 + 0.2 }}
                >
                  1:52
                </motion.span>
              </motion.div>
              <div className="w-0 h-0 border-b-[30px] border-r-[30px]
                          md:border-b-[40px] border-b-transparent
                          md:border-r-[40px] border-r-[#232C33]
                          border-t-0 border-l-0 top-0 absolute -left-2 md:left-12"
              />
            </div>
          </div>
        </Step>
        <Step index={3} title="Listo! Disfruta de tu prueba y comprueba la calidad de nuestros servidores!">
          <div className="w-full flex justify-center items-center">
            <img
              src="https://ynoa-uploader.ynoacamino.site/uploads/1743372077_image%2020.png"
              alt="prueba"
              className="w-full max-w-lg rounded-xl"
            />
          </div>
        </Step>
      </div>
    </Section>
  );
}
