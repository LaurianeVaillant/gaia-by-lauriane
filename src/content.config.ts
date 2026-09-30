import { defineCollection,z } from 'astro:content';
import {glob} from 'astro/loaders';
const journal=defineCollection({loader:glob({pattern:'**/*.md',base:'./src/content/journal'}),schema:z.object({lang:z.enum(['fr','en']),translationKey:z.string(),title:z.string(),description:z.string(),date:z.coerce.date(),category:z.enum(['Acupuncture','Women’s Health','Body & Energy','Reconnection']),heroImage:z.string(),heroAlt:z.string(),seoTitle:z.string().optional(),relatedServices:z.array(z.string()).default([]),draft:z.boolean().default(true)})});
export const collections={journal};
