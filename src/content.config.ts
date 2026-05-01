import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const testimonials = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    order: z.number(),
  }),
});

const awards = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/awards' }),
  schema: z.object({
    title: z.string(),
    blurb: z.string(),
    years: z.string(),
    order: z.number(),
  }),
});

export const collections = { testimonials, awards };
