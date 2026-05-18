<script lang="ts">
	let items = $state([
		{ id: 1, text: 'Learn Svelte' },
		{ id: 2, text: 'Build something' },
		{ id: 3, text: 'Deploy it' }
	]);

	function remove(id: number) {
		items = items.filter((item) => item.id !== id);
	}
</script>

<ul>
	{#each items as item (item.id)}
		<li>
			{item.text}
			<button onclick={() => remove(item.id)}>remove</button>
		</li>
	{:else}
		<li>All done!</li>
	{/each}
</ul>
