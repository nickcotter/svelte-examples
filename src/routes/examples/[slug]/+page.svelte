<script lang="ts">
	import { page } from '$app/state';
	import { getExample } from '$lib/registry';

	let slug = $derived(page.params.slug ?? '');
	let example = $derived(getExample(slug));
</script>

<svelte:head>
	<title>{example ? `${example.title} — Svelte Examples` : 'Not found — Svelte Examples'}</title>
</svelte:head>

<p class="back"><a href="/">← All examples</a></p>

{#if example}
	{@const Demo = example.component}
	<h1>{example.title}</h1>
	<p class="description">{example.description}</p>
	<p class="concept"><code>{example.concept}</code></p>

	<h2>Result</h2>
	<div class="result">
		<Demo />
	</div>

	<h2>Source</h2>
	{#each example.files as file (file.name)}
		<figure>
			<figcaption>{file.name}</figcaption>
			<pre><code>{file.code}</code></pre>
		</figure>
	{/each}
{:else}
	<h1>Example not found</h1>
	<p>There's no example with the slug “{slug}”.</p>
{/if}

<style>
	.back {
		margin-bottom: 1.5rem;
	}

	h1 {
		margin-bottom: 0.25rem;
	}

	.description {
		margin-top: 0;
		color: #555;
	}

	.concept code {
		font-size: 0.85rem;
		color: #666;
	}

	h2 {
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #888;
		border-bottom: 1px solid #eee;
		padding-bottom: 0.4rem;
		margin-top: 2rem;
	}

	.result {
		padding: 1.25rem;
		border: 1px solid #e6e6e6;
		border-radius: 8px;
		background: #fff;
	}

	figure {
		margin: 1rem 0 0;
	}

	figcaption {
		font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
		font-size: 0.8rem;
		color: #666;
		background: #f0f0f0;
		padding: 0.4rem 0.75rem;
		border-radius: 6px 6px 0 0;
		border: 1px solid #e0e0e0;
		border-bottom: none;
	}

	pre {
		margin: 0;
		padding: 1rem;
		overflow-x: auto;
		background: #1e1e1e;
		color: #f5f5f5;
		border-radius: 0 0 6px 6px;
		font-size: 0.85rem;
		line-height: 1.45;
	}
</style>
