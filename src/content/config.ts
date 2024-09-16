import { z, defineCollection } from "astro:content";
import { rssSchema } from '@astrojs/rss';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.union([rssSchema, z.object({ 
      updateDate: z.date().optional(),
    })]),
});

export const collections = {
  posts: blogCollection,
};
