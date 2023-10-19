import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { PageField } from './type';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getURLFromPageField(metadata: PageField) {
  const url = new URL('/api/scrapper');

  // Add parameters as query parameters
  // url.searchParams.set('title', title);
  // url.searchParams.set('pageURL', pageURL);
  return url.toString();
}
