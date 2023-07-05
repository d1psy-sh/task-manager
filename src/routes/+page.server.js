import * as db from '$lib/server/database.js';

export function load() {
	// TODO: here could be a fancy load function
	return {
		tasks: db.loadDatabase()
	};
}

export const actions = {
	default: async ({request}) => {
        const data = await request.formData();
        db.saveDatabase({task: data.get('task'), status: data.get('status')}, data.get('data'));
    }
};
