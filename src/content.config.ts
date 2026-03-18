import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const help = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/help',
    generateId: (options) => {
      // Remove .md extension from the ID
      return options.entry.replace(/\.md$/, '');
    }
  }),
});

export const collections = { help };
