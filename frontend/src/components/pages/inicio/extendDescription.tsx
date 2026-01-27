import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import { InicioSections } from "@/config/pages";
import { apiService } from "@/services/api";
import ExtendDescriptionSections from "./extendDescriptionSections";

export default async function ExtendDescription() {
  const extendDescription = await apiService.getExtendDescriptionFeatures();

  return (
    <Section
      id={InicioSections.CARACTERISTICAS}
      className="my-32 flex flex-col gap-14"
    >
      <Title className="flex flex-col">
        <span>Características de</span>
        <span>nuestros servidores</span>
      </Title>
      <ExtendDescriptionSections extendDescription={extendDescription} />
    </Section>
  );
}
