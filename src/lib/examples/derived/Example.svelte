<script lang="ts">
	let count = $state(1);
	let doubled = $derived(count * 2);
	let quadrupled = $derived(doubled * 2);
</script>

<button onclick={() => count++}>count: {count}</button>
<p>doubled: {doubled}</p>
<p>quadrupled: {quadrupled}</p>
