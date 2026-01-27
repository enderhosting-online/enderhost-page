import { BuyButton } from "@/components/ui/buy-button";
import Cube3d from "@/components/ui/cube3d";
import { Glass } from "@/components/ui/glass";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import { PreciosSections } from "@/config/pages";
import { extractImageUrl } from "@/lib/directus";
import { IconMapper } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { apiService } from "@/services/api";

export default async function Precios() {
  const prices = await apiService.getPricings();

  return (
    <Section
      id={PreciosSections.ELIGUE_EL_MEJOR}
      className="my-20 flex flex-col gap-16"
    >
      <Title>
        <span>ELIGUE EL MEJOR</span>
        <span>PARA TI</span>
      </Title>
      <div className="glassmorphism relative grid w-full gap-5 overflow-hidden rounded-lg p-5 md:grid-cols-3 lg:gap-6 lg:p-6">
        <div className="glassmorphism-hiron absolute top-0 left-0 h-full w-full opacity-0" />
        {prices.map(({ description, features, name, price, block }) => (
          <Glass
            key={name}
            className={cn(
              "relative flex flex-col items-center justify-between gap-16 py-12",
              {
                "group-hover/Hierro:opacity-100": name === "Hierro",
                "group-hover/Diamante:opacity-100": name === "Diamante",
                "group-hover/Netherita:opacity-100": name === "Netherita",
              },
            )}
          >
            <div
              className="absolute top-0 right-0 flex h-22 w-34 items-start justify-center rounded-tr-lg bg-red-600/90 font-bold text-white"
              style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
            >
              <div className="absolute top-1 right-2 text-end">
                <p className="font-black text-2xl">10%</p>
                <p className="text-sm">DTO.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-center font-black text-4xl uppercase">
                {name}
              </h3>
              <div
                className="h-20 text-center text-foreground/70"
                dangerouslySetInnerHTML={{ __html: description }}
              />
              <div className="my-14 flex justify-center">
                <span className="text-4xl">S/</span>
                <span className="font-bold text-8xl">{price}</span>
                <span className="flex items-end text-xl">/mes</span>
              </div>

              <div className="flex w-fit flex-col items-start justify-start gap-5">
                {features.map(({ pricing_features_id: feature }) => (
                  <div
                    key={feature.feature}
                    className="flex items-center gap-3"
                  >
                    <IconMapper
                      className="size-7 min-w-min stroke-2"
                      name={feature.icon.name}
                    />
                    <span>{feature.feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-10">
              <Cube3d texture={extractImageUrl(block)} />
              <BuyButton />
            </div>
          </Glass>
        ))}
      </div>
    </Section>
  );
}
