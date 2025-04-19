import Section from '@/components/ui/section';
import Title from '@/components/ui/title';
import { PreciosSections } from '@/config/pages';

function Step(
  { index, title, children }: { index: number, title: string, children?: React.ReactNode },
) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-6 items-center justify-start text-lg md:text-2xl">
        <div className="size-10 border-2 flex items-center justify-center rounded-full border-foreground min-w-10">
          {index}
        </div>
        <span>
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}

export default function Prueba() {
  return (
    <Section
      id={PreciosSections.HAZ_PRUEBA_GRATIS}
      className="flex flex-col gap-16 my-40"
    >
      <Title>
        <span>
          Haz una prueba gratis
        </span>
        <span>
          de 24 horas
        </span>
      </Title>
      <div className="flex flex-col gap-28">
        <Step index={1} title="Escribenos diciendo: “Me gustaria hacer la prueba gratuita”">
          <div className="flex justify-end items-start">
            <div className="md:mr-20 bg-[#2E5B4B] py-2 px-4 md:py-5 md:px-7 pb-8 relative flex flex-col gap-1 rounded-lg text-lg md:text-2xl rela">
              <span>Me gustaria hacer la prueba gratuita 😁😁</span>
              <span>- En la version 1.20.1</span>
              <span>- Con 8gb de ram</span>
              <span>- Y usando forge para mods</span>
              <span className="absolute right-4 md:right-10 bottom-2 text-foreground/80 text-base md:text-xl">1:49</span>
              <div className="w-0 h-0
                          border-b-[40px] border-b-transparent
                          border-l-[40px] border-l-[#2E5B4B]
                          border-t-0 border-r-0 top-0 absolute -right-8"
              />
            </div>
          </div>
        </Step>
        <Step index={2} title="Espera a que te enviemos un mensaje de confirmacion junto con tu usuario de prueba.">
          <div className="flex justify-start items-start ">
            <div className="md:ml-20 bg-[#232C33] py-5 px-7 pb-8 relative flex flex-col gap-1 rounded-lg text-lg md:text-2xl md:min-w-md">
              <span>POR SUPUESTO 🥳🥳</span>
              <span>Aqui tienes tus credenciales</span>
              <span>- usuario: prueba123</span>
              <span>- password: 123prueba123</span>
              <span>Disfruta la prueba 🙌🙌</span>
              <span className="absolute right-4 bottom-2 text-foreground/80 text-base md:text-xl">1:52</span>
              <div className="w-0 h-0
                          border-b-[40px] border-b-transparent
                          border-r-[40px] border-r-[#232C33]
                          border-t-0 border-l-0 top-0 absolute -left-8"
              />
            </div>
          </div>
        </Step>
        <Step index={3} title="Listo! Disfruta de tu prueba y comprueba la calidad de nuestros servidores!">
          <div className="w-full flex justify-center items-center">
            <img
              src="https://ynoa-uploader.ynoacamino.site/uploads/1743372077_image%2020.png"
              alt="prueba"
              className="w-full max-w-lg rounded-xl"
            />
          </div>
        </Step>
      </div>
    </Section>
  );
}
