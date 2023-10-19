import { PageField } from '@/lib/type';
import { DOMParser, parseHTML } from 'linkedom';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const DEFAULT_SITE_URL = 'https://engineering.fb.com/';

  const siteURL = searchParams.get('siteURL') || DEFAULT_SITE_URL;
  const metadata = searchParams.get('metadata');

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

  const posts = Array.from(document.querySelectorAll('article.post')).map(
    (post) => {
      console.log(post);
      const title =
        post.querySelector('.entry-title a')?.textContent?.trim() || 'Untited';
      const link =
        post.querySelector('.entry-title a')?.getAttribute('href')?.trim() ||
        '#';
      const thumbnail =
        post.querySelector('img')?.getAttribute('src')?.trim() || '#';

      const date =
        post.querySelector('.entry-date.published')?.textContent?.trim() || '';

      const tags = Array.from(post.querySelectorAll('.category'))
        .map((e) => e.textContent?.trim() || '')
        .filter((e) => e !== '');

      // const description = post.querySelector('')

      return { title, link, thumbnail, date, tags };
    }
  );

  return Response.json({ posts });
}
