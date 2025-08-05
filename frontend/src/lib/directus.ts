import { BACKEND_URL } from '@/config/variables';
import { createDirectus, rest } from '@directus/sdk';

const directus = createDirectus(BACKEND_URL).with(
  rest({
    onRequest: (options) => ({ ...options, cache: 'no-store' }),
  }),
);

export const extractImageUrl = (id: string) => `${BACKEND_URL}/assets/${id}`;

export default directus;
