import { sf } from "@/lib/utils";
import { apiService } from "@/services/api";
import Categoria from "./categoria";

export default async function Preguntas() {
  const questionsCategories = await apiService.getQuestions();

  return (
    <>
      {questionsCategories.map(({ questions, title }) => (
        <Categoria
          key={title}
          category={title}
          questions={questions}
          id={sf(title)}
        />
      ))}
    </>
  );
}
