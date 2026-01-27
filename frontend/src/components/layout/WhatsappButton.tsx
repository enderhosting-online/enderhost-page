"use client";

import { IconBrandWhatsapp } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function WhatsappButton() {
  return (
    <motion.a
      href="https://wa.me/51918534289?text=%C2%A1Hola%20Enderhosting%2C%20me%20gustar%C3%ADa%20saber%20un%20poco%20m%C3%A1s%20sobre%20sus%20planes%20y%20de%20la%20prueba%20gratuita."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-6 z-100 rounded-full bg-green-500 p-3 shadow-lg hover:bg-green-400"
      animate={{
        x: [0, -5, 5, -5, 5, 0],
        rotate: [0, -6, 6, -6, 6, 0],
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 3,
      }}
    >
      <IconBrandWhatsapp className="size-12 text-white transition-colors" />
    </motion.a>
  );
}
