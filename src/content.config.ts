import { z, defineCollection } from "astro:content";
import { rssSchema } from '@astrojs/rss';
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./blog" }),
  schema: z.intersection(rssSchema, z.object({
    updateDate: z.date().optional(),
  })),
});

export const collections = {
  blog: blogCollection,
}; 
