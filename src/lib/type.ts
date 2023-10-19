export type PageField = {
  title: string;
  link: string;
  thumbnail: string;
  date?: string;
  tags?: string[];
  author?: string;
  description?: string;
};

export type RequestField = {
  name: string;
  label: string;
  domSelector: string;
};

const GOOGLE_BLOG = {
  postSelector: '.dgc-card',
  title: '.dgc-card__title',
  link: '.dgc-card__href',
  date: '.dgc-card__info',
  thumbnail: 'img',
  tags: '.blog-label',
};

const META_BLOG = {
  postSelector: 'article.post',
  title: '.entry-title a',
  link: '.entry-title a',
  date: '.entry-date.published',
  thumbnail: 'img',
  tags: '.category',
};


