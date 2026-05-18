<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main>
	{@render children()}
</main>

<style>
	:global(body) {
		margin: 0;
		background: #fdfdfd;
		color: #1a1a1a;
		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
		line-height: 1.5;
	}

	:global(a) {
		color: #ff3e00;
	}

	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}

	main {
		max-width: 880px;
		margin: 0 auto;
		padding: 1.5rem 1.25rem 4rem;
	}
</style>
