import { BACKEND_URL } from '@/config/variables';

export const extractImageUrl = (id: string) => `${BACKEND_URL}/assets/${id}`;
