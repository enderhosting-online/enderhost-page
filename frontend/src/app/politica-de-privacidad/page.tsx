import type { Metadata } from "next";
import { apiService } from "@/services/api";

export const metadata: Metadata = {
  title: "Política de Privacidad | EnderHost",
  description:
    "Conoce nuestra política de privacidad y cómo protegemos tus datos personales. En EnderHost, tu privacidad es nuestra prioridad.",
};

export default async function PrivacyPolicy() {
  const privacyPolicy = await apiService.getPrivacyPolicy();

  return (
    <div
      className="prose md:prose-lg my-20 w-full max-w-6xl px-6 prose-a:text-foreground prose-headings:text-foreground prose-strong:text-foreground text-foreground"
      dangerouslySetInnerHTML={{ __html: privacyPolicy.content }}
    />
  );
}
