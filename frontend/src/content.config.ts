import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { toolSchema } from './lib/schema';

const tools = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
	schema: toolSchema,
});

export const collections = { tools };
