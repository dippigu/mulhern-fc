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

const titleBody = z.object({
  title: z.string(),
  body: z.string(),
});

const packageItem = z.object({
  name: z.string(),
  detail: z.string().optional(),
  priceGBP: z.number().optional(),
  recommendedLabel: z.string().optional(),
});

const packageGroup = z.object({
  title: z.string(),
  description: z.string().optional(),
  note: z.string().optional(),
  ukOnly: z.boolean().default(false),
  items: z.array(packageItem).default([]),
});

const services = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/services' }),
  schema: z.object({
    breadcrumb: z.string(),
    title: z.string(),
    lead: z.string(),
    order: z.number(),
    tags: z.array(z.string()).default([]),
    partnership: z.string().optional(),
    features: z.array(titleBody).default([]),
    packageGroups: z.array(packageGroup).default([]),
    topics: z.array(titleBody).default([]),
    audiences: z.array(titleBody).default([]),
    process: z.array(titleBody).default([]),
    ctaHeading: z.string(),
    ctaBody: z.string(),
  }),
});

export const collections = { testimonials, awards, services };
