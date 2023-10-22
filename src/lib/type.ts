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

const GOOGLE_BLOG = {
  platform: 'Google',
  url: 'https://developers.googleblog.com',
  postSelector: '.dgc-card',
  title: '.dgc-card__title',
  link: '.dgc-card__href',
  date: '.dgc-card__info',
  thumbnail: 'img',
  tags: '.blog-label',
  dateConversion: 'convertMDDYY',
};

const META_BLOG = {
  platform: 'Meta',
  url: 'https://engineering.fb.com/',
  postSelector: 'article.post',
  title: '.entry-title a',
  link: '.entry-title a',
  date: '.entry-date.published',
  thumbnail: 'img',
  tags: '.category',
  dateConversion: 'convertMMMDDYYYY',
};
const IBM_BLOG = {
  platform: 'IBM',
  url: 'https://www.ibm.com/blog/',
  postSelector: '.article',
  title: '.article__title',
  link: '.article__content_link',
  date: '.article__date',
  thumbnail: 'amp-img',
  tags: '.article__category_link',
  dateConversion: 'convertMDDYY',
};

interface BLOGS {
  [key: string]: PageField;
}

export const BLOGS_TO_FETCH: BLOGS = {
  Google: GOOGLE_BLOG,
  Meta: META_BLOG,
  IBM: IBM_BLOG,
};

export const DATE_CONVERSION_FUNCTION = {
  convertMDDYY: convertMDDYY,
  convertMMMDDYYYY: convertMMMDDYYYY,
};
