<script lang="ts">
	let name = $state('world');
</script>

<input bind:value={name} placeholder="Type a name" />
<p>Hello, {name || 'stranger'}!</p>
