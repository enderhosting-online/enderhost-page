import Section from '@/components/ui/section';
import Title from '@/components/ui/title';
import { InicioSections } from '@/config/pages';
import { apiService } from '@/services/api';
import HostingFeaturesCards from './hostingFeaturesCards';

export default async function HostingFeatures() {
  const hostingFeatures = await apiService.getHostingFeatures();

  console.log(hostingFeatures);

  return (
    <Section
      id={InicioSections.CREA_TU_SERVIDOR}
      className="flex flex-col gap-14 my-32"
    >
      <Title className="flex flex-col">
        <span>
          Características que
        </span>
        <span>
          hacen la diferencia
        </span>
      </Title>
      <HostingFeaturesCards hostingFeatures={hostingFeatures} />
    </Section>
  );
}
