<script>
	import { onMount } from 'svelte';

	export let data;
	export let type = 'generic';
	let types = ['todo', 'done', 'idea'];
	onMount(() => {
		const idx = types.indexOf(type);
		types.splice(idx, 1);
		types = types;
	});
</script>

<h1>{type}</h1>
<ul>
	{#each data.tasks as task}
		{#if task.status === type}
			<li>
				{task.task}
				<button
					on:click={() => {
						task.status = task.status === type ? types[0] : type;
					}}>{types[0].toUpperCase()}</button
				>
				<button
					on:click={() => {
						task.status = task.status === type ? types[1] : type;
					}}>{types[1].toUpperCase()}</button
				>
				{task.status}
			</li>
		{/if}
	{/each}
</ul>
