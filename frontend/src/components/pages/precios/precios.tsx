import { Button } from '@/components/ui/button';
import Cube3d from '@/components/ui/cube3d';
import Section from '@/components/ui/section';
import Title from '@/components/ui/title';
import { PreciosSections } from '@/config/pages';
import { extractImageUrl } from '@/lib/directus';
import { IconMapper } from '@/lib/icons';
import { apiService } from '@/services/api';

export default async function Precios() {
  const prices = await apiService.getPricings();

  return (
    <Section
      id={PreciosSections.ELIGUE_EL_MEJOR}
      className="flex flex-col gap-16 my-20"
    >
      <Title>
        <span>
          ELIGUE EL MEJOR
        </span>
        <span>
          PARA TI
        </span>
      </Title>
      <div
        className="glassmorphism grid  md:grid-cols-3 w-full rounded-lg gap-5 p-5 lg:gap-6 lg:p-6 relative overflow-hidden"
      >
        <div className="group/Hierro absolute top-0 left-0 w-full h-full glassmorphism-hiron opacity-0" />
        <div className="group/Diamante absolute top-0 left-0 w-full h-full glassmorphism-diamond opacity-0" />
        <div className="group/Netherita absolute top-0 left-0 w-full h-full glassmorphism-netherite opacity-0" />
        {
          prices.map(({
            description, features, name, price, block,
          }) => (
            <div
              key={name}
              className={`flex flex-col gap-16 bg-[#111928]/75 rounded-lg p-6 pb-6 backdrop-blur-lg justify-between py-12 items-center group-hover/${name}:opacity-100`}
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-center font-black uppercase text-4xl">
                  {name}
                </h3>
                <div className="text-center text-foreground/70 h-20" dangerouslySetInnerHTML={{ __html: description }} />
                <div className="flex justify-center my-14">
                  <span className="text-4xl">
                    S/
                  </span>
                  <span className="font-bold text-8xl">
                    {price}
                  </span>
                  <span className="flex items-end text-xl">
                    /mes
                  </span>
                </div>

                <div className="flex flex-col items-start justify-start gap-5 w-fit">
                  {
                  features.map(({ pricing_features_id: feature }) => (
                    <div key={feature.feature} className="flex gap-3 items-center">
                      <IconMapper className="size-7 stroke-2 min-w-min" name={feature.icon.name} />
                      <span>
                        {feature.feature}
                      </span>
                    </div>
                  ))
                }
                </div>
              </div>
              <div className="grid gap-10">
                <Cube3d texture={extractImageUrl(block)} />
                <Button size="lg" className="w-full mt-6">
                  Comprar
                </Button>
              </div>
            </div>
          ))
        }
      </div>
    </Section>
  );
}
