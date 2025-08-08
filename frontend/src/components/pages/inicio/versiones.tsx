import Section from '@/components/ui/section';
import Title from '@/components/ui/title';
import { InicioSections } from '@/config/pages';
import { apiService } from '@/services/api';
import { VersionsFeature } from '@/types/directus';

const javaBedrock = [
  {
    image: 'https://ynoa-uploader.ynoacamino.site/uploads/1743101369_image%2013.png',
    title: 'Minecraft Java',
  },
  {
    image: 'https://ynoa-uploader.ynoacamino.site/uploads/1743101357_image%20%283%29.png',
    title: 'Minecraft Bedrock',
  },
];

function VersionsJavaBedrock() {
  return (
    <div className="grid sm:grid-cols-2 w-full gap-8">
      {
        javaBedrock.map(({ image, title }) => (
          <div key={title} className="flex flex-col gap-6 md:gap-8 p-6 md:p-8 rounded-xl border-2 border-[#24282F] bg-[#171B22] items-center justify-center hover:border-[#616671] transition-colors">
            <img
              className="rounded-xl"
              src={image}
              alt={title}
            />
            <h3 className="w-full text-center max-w-xs text-2xl md:text-4xl font-black uppercase">
              {title}
            </h3>
          </div>
        ))
      }
    </div>
  );
}

interface OtherVersionsProps {
  versionsFeatures: VersionsFeature[];
}

function OtherVersions({ versionsFeatures }: OtherVersionsProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-6 md:gap-8">
      {
        versionsFeatures.map(({ content, title }) => (
          <div key={title} className="flex flex-col p-4 md:p-6 pb-10 gap-3 md:gap-4 rounded-xl border-2 border-[#24282F] bg-[#171B22] hover:border-[#616671] transition-colors relative">
            {/* <Icon className="size-11 md:size-16 md:mb-3" /> */}
            <h3 className="font-semibold text-xl">
              {title}
            </h3>
            <p className="">
              {content}
            </p>
          </div>
        ))
      }
    </div>
  );
}

export default async function Versiones() {
  const versionsFeatures = await apiService.getVersionsFeatures();

  return (
    <Section
      id={InicioSections.SOPORTAMOS_TODOS_LOS_MINECRAFTS}
      className="flex flex-col gap-14 my-32"
    >
      <Title className="flex flex-col">
        <span>
          Soportamos todos
        </span>
        <span>
          los minecraft&apos;s
        </span>
      </Title>
      <div className="flex flex-col w-full gap-8">
        <VersionsJavaBedrock />
        <OtherVersions versionsFeatures={versionsFeatures} />
      </div>
    </Section>
  );
}
