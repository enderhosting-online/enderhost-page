"use client";

import { useEffect, useRef, useState } from "react";
import ChatBubble from "@/components/ui/chat-bubble";
import { Step } from "./prueba";

const messagesBoubleUser = [
  "Me gusto mucho la prueba gratuita y quiero comprar un servidor, ¿cuales son los metodos de pago?",
];

const messagesBoubleSupport = [
  "Nos alegra mucho que te haya gustado la prueba gratuita 🥳",
  "Aceptamos todas las billeteras digitales:",
  "- Yape",
  "- Plin",
  "- Lemons cash",
  "Puedes elegir el que más te convenga 🙌",
];

export const messagesBoubleUserLength = messagesBoubleUser.reduce(
  (acc, curr) => acc + curr.length,
  0,
);

export default function MetodosDePagoClient() {
  const [startAnim, setStartAnim] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartAnim(true);
          }
        });
      },
      {
        threshold: 0.2, // Activa cuando el 20% del componente es visible
        rootMargin: "0px",
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col gap-24 md:gap-28">
      <Step
        index={1}
        title="Escribenos preguntando por nuestros métodos de pago"
      >
        <div className="flex min-h-52 items-start justify-end md:min-h-46">
          <ChatBubble
            messages={messagesBoubleUser}
            timestamp="2:15"
            type="user"
            startAnimation={startAnim}
          />
        </div>
      </Step>
      <Step
        index={2}
        title="Te responderemos con todos los métodos de pago disponibles"
      >
        <div className="flex min-h-58 items-start justify-start">
          <ChatBubble
            messages={messagesBoubleSupport}
            timestamp="2:17"
            type="support"
            delay={0.5 + (messagesBoubleUserLength * 50) / 1000 + 0.2}
            messagesDelay={800 + messagesBoubleUserLength * 50 + 800}
            startAnimation={startAnim}
          />
        </div>
      </Step>
    </div>
  );
}
