import { PreguntasSections } from '@/config/pages';
import { PREGUNTAS } from '@/config/content/preguntas';
import Categoria from './categoria';

const categories = [
  {
    category: 'Sobre el juego',
    questions: PREGUNTAS.SOBRE_EL_JUEGO,
    id: PreguntasSections.SOBRE_EL_JUEGO,
  },
  {
    category: 'Sobre el servicio de hosting',
    questions: PREGUNTAS.SOBRE_EL_HOSTING,
    id: PreguntasSections.SOBRE_EL_HOSTING,
  },
  {
    category: 'Recomendaciones en general',
    questions: PREGUNTAS.GENERALES,
    id: PreguntasSections.RECOMENDACIONES_EN_GENERAL,
  },
];

export default function Preguntas() {
  return (
    <>
      {
        categories.map(({ category, questions, id }) => (
          <Categoria
            key={category}
            category={category}
            questions={questions}
            id={id}
          />
        ))
      }
    </>
  );
}
