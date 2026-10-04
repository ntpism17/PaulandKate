import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const localized = z.object({ en: z.string(), th: z.string() });

// One Markdown file per product in src/content/products/. Lower `order` shows first.
const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      name: localized,
      description: localized,
      tag: localized.optional(),
      image: image(),
      // CSS object-position for the square crop, e.g. "50% 70%"
      imagePosition: z.string().default('50% 50%'),
    }),
});

export const collections = { products };
