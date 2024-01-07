import { convertMDDYY, convertMMMDDYYYY } from './date';

export type PageField = {
  title: string;
  link: string;
  thumbnail: string;
  date?: string;
  tags?: string;
  author?: string;
  description?: string;
  postSelector: string;
  url: string;
  platform: string;
  dateConversion: string;
};

export type Post = {
  title: string;
  link: string;
  thumbnail: string;
  date?: string;
  tags?: string[];
  author?: string;
  description?: string;
  postSelector?: string;
};

export type PostResponse = {
  platform: string;
  posts: Post[];
};

export type RequestField = {
  name: string;
  label: string;
  domSelector: string;
};

export interface Context {
  posts: PostResponse[] | [];
  isLoading: boolean;
}

export const DATE_CONVERSION_FUNCTION = {
  convertMDDYY: convertMDDYY,
  convertMMMDDYYYY: convertMMMDDYYYY,
};
