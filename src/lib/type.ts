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
  url: 'https://www.ibm.com/blog/all-articles/',
  postSelector: '.article',
  title: '.article__title',
  link: '.article__content_link',
  date: '.article__date',
  thumbnail: 'amp-img',
  tags: '.article__category_link',
  dateConversion: 'convertMDDYY',
};

const LYFT_BLOG = {
  platform: 'Lyft',
  url: 'https://eng.lyft.com/',
  postSelector: '.postArticle',
  title: '.graf--title',
  link: '.postArticle-readMore a',
  date: 'time',
  thumbnail: 'img:nth-child(2)',
  tags: '',
  dateConversion: '',
};

const OPENAI_BLOG = {
  platform: 'OpenAI',
  url: 'https://openai.com/blog',
  postSelector:
    '#blog-index > div.mt-spacing-7 > div > form > div:nth-child(2) > div > div > ul > li',
  title: 'h3',
  link: 'a',
  date: '.f-body-1 span',
  thumbnail: 'img',
  tags: '',
  dateConversion: 'convertMMMDDYYYY',
};

interface BLOGS {
  [key: string]: PageField;
}

export const BLOGS_TO_FETCH: BLOGS = {
  Google: GOOGLE_BLOG,
  Meta: META_BLOG,
  IBM: IBM_BLOG,
  Lyft: LYFT_BLOG,
  OpenAI: OPENAI_BLOG,
};

export const DATE_CONVERSION_FUNCTION = {
  convertMDDYY: convertMDDYY,
  convertMMMDDYYYY: convertMMMDDYYYY,
};
