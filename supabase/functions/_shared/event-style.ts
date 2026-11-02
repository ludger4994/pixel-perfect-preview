import { z } from 'npm:zod@3';

export const EventStyleSchema = z.object({
  linens: z.string().max(500).default(''),
  decorations: z.string().max(500).default(''),
  florals: z.enum(['', 'Yes', 'No', 'Not Sure Yet']).default(''),
  flowerColors: z.string().max(500).default(''),
  flowerTypes: z.string().max(500).default(''),
  theme: z.string().max(2000).default(''),
  inspirationLink: z.union([z.literal(''), z.string().url().max(2000).refine(v => /^https?:\/\//i.test(v))]).default(''),
  photos: z.array(z.object({ path: z.string().regex(/^[0-9a-f-]{36}\/[0-9a-f-]{36}\.(jpg|png|webp)$/), name: z.string().max(255) })).max(5).default([]),
}).transform(s => ({ ...s, flowerColors: s.florals === 'Yes' ? s.flowerColors : '', flowerTypes: s.florals === 'Yes' ? s.flowerTypes : '' }));