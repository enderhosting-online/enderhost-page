import pageConfig from '@/config/pages';
import { AUTORIZATION_HEADER } from '@/config/variables';
import { revalidatePath } from 'next/cache';

export async function GET(request: Request): Promise<Response> {
  const { headers } = request;

  const autorizationHeader = headers.get('Authorization');

  if (!autorizationHeader || autorizationHeader !== AUTORIZATION_HEADER) {
    return new Response('Unauthorized', { status: 401 });
  }

  pageConfig.pages.forEach((page) => {
    revalidatePath(page.path);
  });

  return new Response('Revalidated', { status: 200 });
}
