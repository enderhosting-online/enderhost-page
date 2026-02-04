import type { Metadata } from "next";
import MetodosDePago from "@/components/pages/precios/metodosDePago";
import Precios from "@/components/pages/precios/precios";

export const metadata: Metadata = {
  title: "Precios | EnderHost",
  description:
    "Descubre nuestros planes de hosting y elige el que mejor se adapte a tus necesidades. Ofrecemos opciones para todos los presupuestos y requisitos.",
};

export default function PrecioPage() {
  return (
    <>
      <Precios />
      <MetodosDePago />
    </>
  );
}
