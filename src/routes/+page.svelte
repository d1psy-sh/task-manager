<script>
	import List from './List.svelte';

	export let data;
</script>

<List bind:data type="idea" />
<List bind:data type="todo" />
<List bind:data type="done" />
<form method="post">
	<label
		>Add a Task
		<input type="text" name="task" />
		<input type="text" name="status" />
		<input type="hidden" name="data" value={data} />
		<input type="submit" />
	</label>
</form>
