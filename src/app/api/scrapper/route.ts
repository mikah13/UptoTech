import { PageField } from '@/lib/type';
import { DOMParser, parseHTML } from 'linkedom';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const DEFAULT_SITE_URL = 'https://engineering.fb.com/';

  const siteURL = searchParams.get('siteURL') || DEFAULT_SITE_URL;
  const titleSelector = searchParams.get('title') || '.entry-title a';
  const linkSelector = searchParams.get('link') || '.entry-title a';
  const thumbnailSelector = searchParams.get('thumbnail') || 'img';
  const dateSelector = searchParams.get('date') || '.entry-date.published';
  const tagsSelector = searchParams.get('tags') || '.category';

  const res = await fetch(siteURL, {});
  const html = await res.text();

  const {
    // note, these are *not* globals
    window,
    document,
    customElements,
    HTMLElement,
    Event,
    CustomEvent,
    // other exports ..
  } = parseHTML(html);

  const posts: PageField[] = Array.from(
    document.querySelectorAll('article.post')
  ).map((post) => {
    const title =
      post.querySelector(titleSelector)?.textContent?.trim() || 'Untited';
    const link =
      post.querySelector(linkSelector)?.getAttribute('href')?.trim() || '#';
    const thumbnail =
      post.querySelector(thumbnailSelector)?.getAttribute('src')?.trim() || '#';

    const date = post.querySelector(dateSelector)?.textContent?.trim() || '';

    const tags = Array.from(post.querySelectorAll(tagsSelector))
      .map((e) => e.textContent?.trim() || '')
      .filter((e) => e !== '');

    return { title, link, thumbnail, date, tags };
  });

  return Response.json({ posts });
}
