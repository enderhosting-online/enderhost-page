import Link from "next/link";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import { InicioSections } from "@/config/pages";
import { apiService } from "@/services/api";
import HeroFeatures from "./heroFeatures";

export default async function Hero() {
  const heroFeatures = await apiService.getHeroFeatures();

  return (
    <Section
      id={InicioSections.COMENZAR_AHORA}
      className="my-20 flex flex-col md:mt-32 md:mb-20"
    >
      <div className="flex flex-col items-center gap-10 md:gap-12">
        <div className="relative flex items-center justify-center">
          <h1 className="z-10 flex w-full max-w-2xl flex-col gap-4 text-center font-black text-5xl uppercase tracking-wider md:text-6xl">
            Hosting de servidores de Minecraft
          </h1>
        </div>
        <HeroFeatures heroFeatures={heroFeatures} />
        <div className="grid w-full max-w-88 grid-cols-2 gap-6">
          <Button size="lg" className="w-full" variant="secondary" asChild>
            <Link href="/precios">Ver planes</Link>
          </Button>
          <Button size="lg">
            <Link href="/prueba-gratuita">¡Prubalo gratis!</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
