import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import { rehypeShiki, unified } from '@astrojs/markdown-remark'


// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
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
