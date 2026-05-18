<script lang="ts">
	let { name, greeting = 'Hello' }: { name: string; greeting?: string } = $props();
</script>

<p>{greeting}, {name}!</p>
