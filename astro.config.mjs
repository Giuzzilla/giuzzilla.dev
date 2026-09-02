import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { rehypeShiki, unified } from '@astrojs/markdown-remark'


// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind()],
  site: "https://giuzzilla.dev",
  markdown: {
    processor: unified({
      rehypePlugins: [
        rehypeShiki,
      ],
    }),
    syntaxHighlight: false,
  }
});
