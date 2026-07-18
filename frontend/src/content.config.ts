import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { categorySchema, languageSchema, toolSchema } from './lib/schema';

const tools = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
	schema: toolSchema,
});

const categories = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/categories' }),
	schema: categorySchema,
});

const languages = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/languages' }),
	schema: languageSchema,
});

export const collections = { tools, categories, languages };
