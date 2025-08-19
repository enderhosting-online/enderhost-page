import Preguntas from '@/components/pages/preguntas/preguntas';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | EnderHost',
  description: 'Encuentra respuestas a las preguntas más comunes sobre nuestros servicios de hosting. Desde la configuración hasta la gestión de tu cuenta, estamos aquí para ayudarte.',
};

export default function PreguntasPage() {
  return (
    <Preguntas />
  );
}
