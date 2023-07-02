<script>
	export let data;
	let newTodo = '';
	let newDone = '';
    let newIdea = '';
	function addTodo() {
		data.tasks.push({ task: newTodo, status: 'todo' });
		data.tasks = data.tasks;
		newTodo = '';
	}
	function addIdea() {
		data.tasks.push({ task: newIdea, status: 'idea' });
		data.tasks = data.tasks;
		newIdea = '';
	}
	function addDone() {
		data.tasks.push({ task: newDone, status: 'done' });
		data.tasks = data.tasks;
		newDone = '';
	}
</script>
<ul>
	{#each data.tasks as task}
		{#if task.status === 'todo'}
			<li>
				{task.task}
				<button
					on:click={() => {
						task.status = task.status === 'todo' ? 'done' : 'todo';
					}}>Done</button
				>
				<button
					on:click={() => {
						task.status = task.status === 'todo' ? 'idea' : 'todo';
					}}>Idea</button
				>
				{task.status}
			</li>
		{/if}
	{/each}
</ul>
<input type="text" bind:value={newTodo} />
<button on:click={addTodo}>Add</button>
<ul>
	{#each data.tasks as task}
		{#if task.status === 'done'}
			<li>
				{task.task}
				<button
					on:click={() => {
						task.status = task.status === 'done' ? 'todo' : 'done';
					}}>Todo</button
				>
				<button
					on:click={() => {
						task.status = task.status === 'done' ? 'idea' : 'done';
					}}>Idea</button
				>
				{task.status}
			</li>
		{/if}
	{/each}
</ul>
<input type="text" bind:value={newDone} />
<button on:click={addDone}>Add</button>
<ul>
	{#each data.tasks as task}
		{#if task.status === 'idea'}
			<li>
				{task.task}
				<button
					on:click={() => {
						task.status = task.status === 'idea' ? 'todo' : 'idea';
					}}>Todo</button
				>
				<button
					on:click={() => {
						task.status = task.status === 'idea' ? 'done' : 'idea';
					}}>Done</button
				>
				{task.status}
			</li>
		{/if}
	{/each}
</ul>
<input type="text" bind:value={newIdea} />
<button on:click={addIdea}>Add</button>
