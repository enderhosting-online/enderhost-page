import type { Metadata } from "next";
import { apiService } from "@/services/api";

export const metadata: Metadata = {
  title: "Términos de servicio | EnderHost",
  description:
    "Lee nuestros términos de servicio para entender las condiciones y políticas que rigen el uso de nuestros servicios de hosting. En EnderHost, nos comprometemos a ofrecer transparencia y seguridad a nuestros usuarios.",
};

export default async function TermsOfService() {
  const termsOfService = await apiService.getTermsOfService();

  return (
    <div
      className="prose md:prose-lg my-20 w-full max-w-6xl px-6 prose-a:text-foreground prose-headings:text-foreground prose-strong:text-foreground text-foreground"
      dangerouslySetInnerHTML={{ __html: termsOfService.content }}
    />
  );
}
