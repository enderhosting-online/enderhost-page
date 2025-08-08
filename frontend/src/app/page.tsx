import ExtendDescription from '@/components/pages/inicio/extendDescription';
import HostingFeatures from '@/components/pages/inicio/hostingFeatures';
import Hero from '@/components/pages/inicio/hero';
import ImportantQuestions from '@/components/pages/inicio/importanQuestions';
import Versiones from '@/components/pages/inicio/versiones';

export default function Home() {
  return (
    <>
      <Hero />
      <HostingFeatures />
      <Versiones />
      <ExtendDescription />
      <ImportantQuestions />
    </>
  );
}
