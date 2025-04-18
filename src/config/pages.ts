export enum InicioSections {
  COMENZAR_AHORA = 'inicio-comenzar-ahora',
  CREA_TU_SERVIDOR = 'inicio-crea-tu-servidor',
  SOPORTAMOS_TODOS_LOS_MINECRAFTS = 'inicio-soportamos-todos-los-minecrafts',
  CARACTERISTICAS = 'incio-caracteristicas',
  PREGUNTAS_FRECUENTES = 'incio-preguntas-frecuentes',
}

export enum ConocenosSections {

}

export enum PreciosSections {
  ELIGUE_EL_MEJOR = 'precios-eligue-el-mejor',
  HAZ_PRUEBA_GRATIS = 'precios-haz-prueba-gratis',
}

export enum PreguntasSections {
  SOBRE_EL_JUEGO = 'preguntas-sobre-el-juego',
  SOBRE_EL_HOSTING = 'preguntas-sobre-el-hosting',
  RECOMENDACIONES_EN_GENERAL = 'preguntas-recomendaciones-en-general',
}

interface SectionInterface {
  name: string;
  id: string;
}

interface PageInterface {
  sections?: SectionInterface[];
  name: string;
  path: string;
}

interface PageConfigInterface {
  pages: PageInterface[];
}

const pageConfig: PageConfigInterface = {
  pages: [
    {
      name: 'Inicio',
      path: '/',
      sections: [
        {
          name: 'Comenzar ahora',
          id: InicioSections.COMENZAR_AHORA,
        },
        {
          name: 'Crea tu servidor',
          id: InicioSections.CREA_TU_SERVIDOR,
        },
        {
          name: "Soportamos todos los minecraft's",
          id: InicioSections.SOPORTAMOS_TODOS_LOS_MINECRAFTS,
        },
        {
          name: 'Características',
          id: InicioSections.CARACTERISTICAS,
        },
        {
          name: 'Preguntas frecuentes',
          id: InicioSections.PREGUNTAS_FRECUENTES,
        },
      ],
    },
    {
      name: 'Conocenos',
      path: '/conocenos',
      sections: [],
    },
    {
      name: 'Precios',
      path: '/precios',
      sections: [
        {
          name: 'Eligue el mejor plan',
          id: PreciosSections.ELIGUE_EL_MEJOR,
        },
        {
          name: 'Haz una prueba gratis',
          id: PreciosSections.HAZ_PRUEBA_GRATIS,
        },
      ],
    },
    {
      name: 'Preguntas',
      path: '/preguntas',
      sections: [
        {
          name: 'Sobre el juego',
          id: PreguntasSections.SOBRE_EL_JUEGO,
        },
        {
          name: 'Sobre el servidor',
          id: PreguntasSections.SOBRE_EL_HOSTING,
        },
        {
          name: 'Recomendaciones',
          id: PreguntasSections.RECOMENDACIONES_EN_GENERAL,
        },
      ],
    },
  ],
};

export default pageConfig;
