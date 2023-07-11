import * as db from '$lib/server/database.js';

export function load() {
	return {
		tasks: db.loadDatabase()
	};
}

export const actions = {
	default: async ({request}) => {
        const data = await request.formData();
        if (!data.get('taskID')) {
            data.set('taskID', -1);
        }
        db.saveDatabase({taskID: data.get('taskID'), task: data.get('task'), status: data.get('status')}, data.get('aktion'));
    }
};
