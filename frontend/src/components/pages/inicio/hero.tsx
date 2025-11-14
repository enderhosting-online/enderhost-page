import { Button } from '@/components/ui/button';
import Section from '@/components/ui/section';
import { InicioSections } from '@/config/pages';
import { apiService } from '@/services/api';
import Link from 'next/link';
import HeroFeatures from './heroFeatures';

export default async function Hero() {
  const heroFeatures = await apiService.getHeroFeatures();

  return (
    <Section
      id={InicioSections.COMENZAR_AHORA}
      className="flex flex-col my-20 md:mt-32 md:mb-20"
    >
      <div className="flex flex-col gap-10 md:gap-12 items-center">
        <div className="flex justify-center items-center relative">
          <h1 className="uppercase font-black text-5xl md:text-6xl w-full max-w-2xl tracking-wider flex flex-col gap-4 text-center z-10">
            Hosting de servidores de Minecraft
          </h1>
        </div>
        <HeroFeatures heroFeatures={heroFeatures} />
        <div className="gap-6 grid grid-cols-2 w-full max-w-88">
          <Button size="lg" className="w-full" variant="secondary" asChild>
            <Link href="/precios">
              Ver planes
            </Link>
          </Button>
          <Button size="lg">
            <Link href="/prueba-gratuita">
              ¡Prubalo gratis!
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
