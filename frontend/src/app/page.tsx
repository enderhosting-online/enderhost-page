import Caracteristicas from '@/components/pages/inicio/caracteristicas';
import Crea from '@/components/pages/inicio/crea';
import Hero from '@/components/pages/inicio/hero';
import Preguntas from '@/components/pages/inicio/preguntas';
import Versiones from '@/components/pages/inicio/versiones';

import directus from '@/lib/directus';
import { SimgleItem } from '@/types/directus';
import { readItems } from '@directus/sdk';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const globalMetadata = await directus.request(readItems('global')) as SimgleItem;

  return {
    title: globalMetadata.title,
    description: globalMetadata.description,
  };
}

export default function Home() {
  return (
    <>
      <Hero />
      <Crea />
      <Versiones />
      <Caracteristicas />
      <Preguntas />
    </>
  );
}
