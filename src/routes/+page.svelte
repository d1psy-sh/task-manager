<script>
	import List from './List.svelte';
	import { Action } from '$lib/Action.js';

	export let data;
</script>

<svlete:window
	on:beforunload={async () => {
		// await fetch('/', {
		//     method: 'POST',
		//     headers: {
		//         'Content-Type': 'application/json'
		//     },
		//     body: JSON.stringify({}, Aktion.close)
		// });
		console.log('beforeunload');
	}}
/>
<List bind:data type="idea" />
<List bind:data type="todo" />
<List bind:data type="done" />
<form method="post">
	<label
		>Add a Task
		<input type="text" name="task" />
		<input type="text" name="status" />
		<input type="hidden" name="action" value={Action.create} />
		<input type="submit" />
	</label>
</form>
