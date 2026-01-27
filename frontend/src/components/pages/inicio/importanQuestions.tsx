import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import { InicioSections } from "@/config/pages";
import { apiService } from "@/services/api";
import QuestionsList from "./questionsList";

export default async function ImportantQuestions() {
  const questions = await apiService.getQuestions();

  return (
    <Section
      id={InicioSections.PREGUNTAS_FRECUENTES}
      className="my-32 flex flex-col gap-14"
    >
      <Title className="flex flex-col">
        <span>Preguntas y respuestas</span>
        <span>frecuentes</span>
      </Title>

      <QuestionsList questions={questions} />
    </Section>
  );
}
