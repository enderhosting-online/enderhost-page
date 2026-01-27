import type { Metadata } from "next";
import Prueba from "@/components/pages/precios/prueba";

export const metadata: Metadata = {
  title: "Prueba Gratuita | EnderHost",
  description:
    "Prueba gratuita de nuestros servicios de hosting. Experimenta la calidad y el rendimiento de EnderHost sin compromiso. Regístrate y comienza tu prueba hoy mismo.",
};

export default function PruebaGratuitaPage() {
  return <Prueba />;
}
