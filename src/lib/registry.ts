import type { Component } from 'svelte';

export interface ExampleMeta {
	title: string;
	description: string;
	concept: string;
	topic: string;
}

export interface ExampleFile {
	name: string;
	code: string;
}

export interface Example extends ExampleMeta {
	slug: string;
	component: Component;
	files: ExampleFile[];
}

const topicOrder = ['Reactivity', 'Bindings', 'Components', 'Templating', 'Transitions'];

const metaModules = import.meta.glob('./examples/*/meta.ts', { eager: true });
const componentModules = import.meta.glob('./examples/*/Example.svelte', { eager: true });
const sourceModules = import.meta.glob('./examples/**/*.svelte', {
	eager: true,
	query: '?raw',
	import: 'default'
}) as Record<string, string>;

const slugOf = (path: string) => path.split('/')[2];

export const examples: Example[] = Object.entries(metaModules)
	.map(([path, mod]) => {
		const slug = slugOf(path);
		const meta = (mod as { meta: ExampleMeta }).meta;
		const component = (
			componentModules[`./examples/${slug}/Example.svelte`] as { default: Component }
		).default;
		const files: ExampleFile[] = Object.entries(sourceModules)
			.filter(([sourcePath]) => slugOf(sourcePath) === slug)
			.map(([sourcePath, code]) => ({
				name: sourcePath.split('/').slice(3).join('/'),
				code: code.trim()
			}))
			.sort((a, b) => {
				if (a.name === 'Example.svelte') return -1;
				if (b.name === 'Example.svelte') return 1;
				return a.name.localeCompare(b.name);
			});
		return { slug, component, files, ...meta };
	})
	.sort((a, b) => {
		const byTopic = topicOrder.indexOf(a.topic) - topicOrder.indexOf(b.topic);
		return byTopic !== 0 ? byTopic : a.title.localeCompare(b.title);
	});

export const getExample = (slug: string): Example | undefined =>
	examples.find((example) => example.slug === slug);
