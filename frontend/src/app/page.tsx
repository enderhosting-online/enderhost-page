import Caracteristicas from '@/components/pages/inicio/caracteristicas';
import HostingFeatures from '@/components/pages/inicio/hostingFeatures';
import Hero from '@/components/pages/inicio/hero';
import Preguntas from '@/components/pages/inicio/preguntas';
import Versiones from '@/components/pages/inicio/versiones';

export default function Home() {
  return (
    <>
      <Hero />
      <HostingFeatures />
      <Versiones />
      <Caracteristicas />
      <Preguntas />
    </>
  );
}
