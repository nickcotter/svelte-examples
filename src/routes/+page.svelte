<script lang="ts">
	import { examples } from '$lib/registry';

	let query = $state('');

	let filtered = $derived(
		examples.filter((example) => {
			const q = query.trim().toLowerCase();
			if (!q) return true;
			return [example.title, example.description, example.concept, example.topic].some((field) =>
				field.toLowerCase().includes(q)
			);
		})
	);

	let groups = $derived(
		[...new Set(filtered.map((example) => example.topic))].map((topic) => ({
			topic,
			items: filtered.filter((example) => example.topic === topic)
		}))
	);
</script>

<svelte:head>
	<title>Svelte Examples</title>
	<meta
		name="description"
		content="A browsable catalogue of self-contained Svelte examples, each demonstrating one feature or pattern."
	/>
</svelte:head>

<h1>Svelte Examples</h1>
<p class="tagline">
	A browsable catalogue of self-contained Svelte examples, each showing one feature or pattern.
</p>

<input
	class="search"
	type="search"
	placeholder="Search examples…"
	aria-label="Search examples"
	bind:value={query}
/>

{#each groups as group (group.topic)}
	<section>
		<h2>{group.topic}</h2>
		<div class="grid">
			{#each group.items as example (example.slug)}
				<a class="card" href="/examples/{example.slug}">
					<h3>{example.title}</h3>
					<p>{example.description}</p>
					<code>{example.concept}</code>
				</a>
			{/each}
		</div>
	</section>
{:else}
	<p class="empty">No examples match “{query}”.</p>
{/each}

<style>
	h1 {
		margin-bottom: 0.25rem;
	}

	.tagline {
		margin-top: 0;
		color: #555;
	}

	.search {
		width: 100%;
		padding: 0.6rem 0.75rem;
		font-size: 1rem;
		border: 1px solid #ccc;
		border-radius: 6px;
		margin: 1rem 0 0.5rem;
	}

	section {
		margin-top: 2rem;
	}

	h2 {
		font-size: 1.1rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #888;
		border-bottom: 1px solid #eee;
		padding-bottom: 0.4rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 1rem;
	}

	.card {
		display: block;
		padding: 1rem;
		border: 1px solid #e6e6e6;
		border-radius: 8px;
		text-decoration: none;
		color: inherit;
		background: #fff;
		transition:
			border-color 0.15s,
			transform 0.15s;
	}

	.card:hover {
		border-color: #ff3e00;
		transform: translateY(-2px);
	}

	.card h3 {
		margin: 0 0 0.35rem;
		color: #ff3e00;
	}

	.card p {
		margin: 0 0 0.6rem;
		font-size: 0.92rem;
		color: #444;
	}

	.card code {
		font-size: 0.78rem;
		color: #666;
	}

	.empty {
		margin-top: 2rem;
		color: #888;
	}
</style>
