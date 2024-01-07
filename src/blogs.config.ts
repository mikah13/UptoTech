import { PageField } from "./lib/type";


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
  thumbnail: '',
  tags: '',
  dateConversion: 'convertMMMDDYYYY',
};

const GITHUB_BLOG = {
  platform: 'GitHub',
  url: 'https://github.blog/category/engineering/',
  postSelector: 'article',
  title: 'h3',
  link: 'a',
  date: 'time',
  thumbnail: 'img',
  tags: '.authors-wrap a',
  dateConversion: 'convertMMMDDYYYY',
};
const AMAZON_BLOG = {
  platform: 'Amazon',
  url: 'https://aws.amazon.com/blogs/architecture/',
  postSelector: 'article',
  title: '.blog-post-title span',
  link: '.blog-post-title a',
  date: 'time',
  thumbnail: 'img',
  tags: '.blog-post-categories a',
  dateConversion: 'convertMMMDDYYYY',
};

export const BLOGS_TO_FETCH: Record<string, PageField> = {
  Google: GOOGLE_BLOG,
  Meta: META_BLOG,
  IBM: IBM_BLOG,
  Lyft: LYFT_BLOG,
  GitHub: GITHUB_BLOG,
  Amazon: AMAZON_BLOG,
};

