// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { visit } from 'unist-util-visit';

// https://astro.build/config
export default defineConfig({
  site: "https://lukenguyen.me",
  integrations: [
    mdx({
      rehypePlugins: [() => {
        return (tree) => {
          visit(tree, 'element',  node => {
            if (
              node.tagName === 'a' &&
              node.properties?.href &&
              node.properties.href.toString().startsWith('http') &&
              !node.properties.href.toString().includes('lukenguyen.me')
            ) {
              node.properties['target'] = '_blank';
            }
          });
        }
      }]
    }),
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
