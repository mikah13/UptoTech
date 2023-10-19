import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { PageField } from './type';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getURLFromPageField(metadata: PageField) {
  const endpoint = new URL('http://localhost:3000/api/scrapper');

  const { url, title, link, thumbnail, date, tags, platform, postSelector } =
    metadata;
  endpoint.searchParams.set('url', url);
  endpoint.searchParams.set('title', title);
  endpoint.searchParams.set('link', link);
  endpoint.searchParams.set('thumbnail', thumbnail);
  endpoint.searchParams.set('postSelector', postSelector);
  endpoint.searchParams.set('platform', platform);
  date && endpoint.searchParams.set('date', date);
  tags && endpoint.searchParams.set('tags', tags);
  return endpoint.toString();
}

export const fetchUrl = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed for ${url}`);
  }
  return response.json();
};
