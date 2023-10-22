import { DATE_CONVERSION_FUNCTION, Post } from '@/lib/type';
// import { DOMParser, parseHTML } from 'linkedom';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const DEFAULT_SITE_URL = 'https://engineering.fb.com/';

  const siteURL = searchParams.get('url') || DEFAULT_SITE_URL;
  const titleSelector = searchParams.get('title') || '.entry-title a';
  const linkSelector = searchParams.get('link') || '.entry-title a';
  const thumbnailSelector = searchParams.get('thumbnail') || 'img';
  const dateSelector = searchParams.get('date') || '.entry-date.published';
  const tagsSelector = searchParams.get('tags') || '.category';
  const postSelector = searchParams.get('postSelector') || 'article.post';
  const dateFunction = searchParams.get('dateConversion') || 'convertMDDYY';

  const platform = searchParams.get('platform') || 'meta';
  const res = await fetch(siteURL, {});
  const html = await res.text();
  const parser = new DOMParser();
  const document = parser.parseFromString(html, 'text/html');

  const posts: Post[] = Array.from(document.querySelectorAll(postSelector)).map(
    (post) => {
      const title =
        post.querySelector(titleSelector)?.textContent?.trim() || 'Untited';
      const link =
        post.querySelector(linkSelector)?.getAttribute('href')?.trim() || '#';

      const thumbnail =
        post.querySelector(thumbnailSelector)?.getAttribute('src')?.trim() ||
        '';

      let date = post.querySelector(dateSelector)?.textContent?.trim();
      if (date) {
        date =
          DATE_CONVERSION_FUNCTION[
            dateFunction as keyof typeof DATE_CONVERSION_FUNCTION
          ](date);
      }
      const tags = Array.from(post.querySelectorAll(tagsSelector))
        .map((e: any) => {
          return e.innerText?.trim() || '';
        })
        .filter((e) => e !== '');

      return { title, link, thumbnail, date, tags };
    }
  );

  return Response.json({ platform, posts });
}
