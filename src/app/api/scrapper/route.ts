export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const DEFAULT_SITE_URL = 'https://engineering.fb.com/';
  const siteURL = searchParams.get('siteURL') || DEFAULT_SITE_URL;

  const res = await fetch(siteURL, {});
  const content = await res.text();

  return Response.json({ content });
}
