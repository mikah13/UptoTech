import { DATE_CONVERSION_FUNCTION, Post } from '@/lib/type';
import * as cheerio from 'cheerio';
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
  const $ = cheerio.load(html);

  let posts: Post[] = [];
  let allPosts = $(postSelector);
  console.log(allPosts.length);
  allPosts.each(function (index, e) {
    const title =
      $(e).find(titleSelector)?.first()?.text().trim() || 'Untitled';
    const link = $(e).find(linkSelector)?.first()?.attr('href')?.trim() || '#';
    const thumbnail =
      $(e).find(thumbnailSelector)?.first()?.attr('src')?.trim() || '';
    let date = $(e).find(dateSelector)?.first()?.text()?.trim();
    if (date) {
      date =
        DATE_CONVERSION_FUNCTION[
          dateFunction as keyof typeof DATE_CONVERSION_FUNCTION
        ](date);
    }
    let tags: string[] = [];
    const allTags = $(e).find(tagsSelector);
    allTags.each(function (i, t) {
      const tag = $(t).text().trim();
      if (tag !== '') {
        tags.push(tag);
      }
    });
    if (title === '{{{title}}}') return; // escape IBM case
    posts.push({ title, link, thumbnail, date, tags });
  });

  return Response.json({ platform, posts });
}
