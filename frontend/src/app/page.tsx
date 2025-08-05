import Caracteristicas from '@/components/pages/inicio/caracteristicas';
import Crea from '@/components/pages/inicio/crea';
import Hero from '@/components/pages/inicio/hero';
import Preguntas from '@/components/pages/inicio/preguntas';
import Versiones from '@/components/pages/inicio/versiones';

import directus from '@/lib/directus';
import { SimgleItem } from '@/types/directus';
import { readItems } from '@directus/sdk';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
  _params: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const parentMetadata = await parent;

  try {
    const globalMetadata = await directus.request(readItems('global_data')) as SimgleItem;

    return {
      title: globalMetadata.title,
      description: globalMetadata.description,
    };
  } catch (error) {
    console.error('Error al generar metadata:', error);

    return {
      title: parentMetadata.title,
      description: parentMetadata.description,
    };
  }
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
