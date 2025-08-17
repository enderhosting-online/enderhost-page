import { apiService } from '@/services/api';

export default async function PrivacyPolicy() {
  const privacyPolicy = await apiService.getPrivacyPolicy();

  return (
    <div className="prose text-foreground prose-strong:text-foreground prose-headings:text-foreground w-full md:prose-lg my-14 max-w-6xl px-6" dangerouslySetInnerHTML={{ __html: privacyPolicy.content }} />
  );
}
