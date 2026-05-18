<script lang="ts">
	let hour = $state(14);
</script>

<input type="range" min="0" max="23" bind:value={hour} />

<p>
	It's {hour}:00 —
	{#if hour < 12}
		good morning!
	{:else if hour < 18}
		good afternoon!
	{:else}
		good evening!
	{/if}
</p>
