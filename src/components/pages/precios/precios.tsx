'use client';

import { Button } from '@/components/ui/button';
// import { Mineral3D } from '@/components/ui/model3d';
import Section from '@/components/ui/section';
import Title from '@/components/ui/title';
import { PRECIOS } from '@/config/content/precios';
import { PreciosSections } from '@/config/pages';

export default function Precios() {
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
      <div className="glassmorphism grid  md:grid-cols-3 w-full rounded-lg gap-5 p-5 lg:gap-6 lg:p-6">
        {
          PRECIOS.map(({
            description, features, name, price,
          }) => (
            <div
              key={name}
              className="flex flex-col gap-4 bg-[#111928]/75 rounded-lg p-6 pb-6 backdrop-blur-lg justify-between py-12 items-center"
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-center font-black uppercase text-4xl">
                  {name}
                </h3>
                <p className="text-center text-foreground/70 h-20">
                  {description}
                </p>
                <div className="flex justify-center my-14">
                  <span className="text-4xl">
                    S/
                  </span>
                  <span className="font-bold text-7xl">
                    {price}
                  </span>
                  <span className="flex items-end text-xl">
                    /mes
                  </span>
                </div>

                <div className="flex flex-col items-start justify-start gap-5 w-fit">
                  {
                  features.map(({ icon: Icon, name: featureName }) => (
                    <div key={featureName} className="flex gap-3 items-center">
                      <Icon className="size-7 stroke-2 min-w-min" />
                      <span>
                        {featureName}
                      </span>
                    </div>
                  ))
                }
                </div>
              </div>
              <Button size="lg" className="w-full mt-6">
                Comprar
              </Button>
            </div>
          ))
        }
      </div>
      {/* <Mineral3D /> */}
    </Section>
  );
}
