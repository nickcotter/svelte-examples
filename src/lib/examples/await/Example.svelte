<script lang="ts">
	function randomNumber(): Promise<number> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() < 0.5) {
					resolve(Math.floor(Math.random() * 100));
				} else {
					reject(new Error('Unlucky — try again'));
				}
			}, 800);
		});
	}

	let promise = $state(randomNumber());
</script>

<button onclick={() => (promise = randomNumber())}>New number</button>

{#await promise}
	<p>Loading…</p>
{:then value}
	<p>Got {value}</p>
{:catch error}
	<p>{error.message}</p>
{/await}
