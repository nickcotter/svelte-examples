<script lang="ts">
	import { fade } from 'svelte/transition';

	let visible = $state(true);
</script>

<button onclick={() => (visible = !visible)}>Toggle</button>

{#if visible}
	<p transition:fade>Now you see me.</p>
{/if}
