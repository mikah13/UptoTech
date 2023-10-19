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

  console.log(document.querySelectorAll('.entry-title a').length);

  return Response.json({ html });
}
