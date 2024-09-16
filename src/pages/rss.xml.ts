import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import type { APIContext } from 'astro';


const parser = new MarkdownIt();


export async function GET(context: APIContext) {
  const blog = await getCollection('blog');

  return rss({
    title: 'Giulio Mazzanti\'s Blog',
    description: 'My personal blog',
    site: context.site || '',
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
      }),
    })),
    customData: '<language>en-us</language>',
  });
}