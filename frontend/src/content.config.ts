import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { categorySchema, toolSchema } from './lib/schema';

const tools = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
	schema: toolSchema,
});

const categories = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/categories' }),
	schema: categorySchema,
});

export const collections = { tools, categories };
