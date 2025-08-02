import { clsx, type ClassValue } from 'clsx';
import slugify from 'slugify';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sf(text: string) {
  return slugify(text);
}
