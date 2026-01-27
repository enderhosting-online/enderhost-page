import ExtendDescription from "@/components/pages/inicio/extendDescription";
import Hero from "@/components/pages/inicio/hero";
import HostingFeatures from "@/components/pages/inicio/hostingFeatures";
import ImportantQuestions from "@/components/pages/inicio/importanQuestions";
import Locations from "@/components/pages/inicio/locations";
import Versiones from "@/components/pages/inicio/versiones";

export default function Home() {
  return (
    <>
      <Hero />
      <HostingFeatures />
      <Versiones />
      <ExtendDescription />
      <Locations />
      <ImportantQuestions />
    </>
  );
}
