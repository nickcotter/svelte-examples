<script lang="ts">
	let elapsed = $state(0);
	let running = $state(true);

	$effect(() => {
		if (!running) return;

		const id = setInterval(() => {
			elapsed += 1;
		}, 1000);

		return () => clearInterval(id);
	});
</script>

<p>Elapsed: {elapsed}s</p>
<button onclick={() => (running = !running)}>
	{running ? 'Pause' : 'Resume'}
</button>
