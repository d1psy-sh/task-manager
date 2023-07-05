import fs from 'fs';

// that works don't touch it
export function loadDatabase() {
    const data = fs.readFileSync('./src/lib/server/database.json', { encoding: 'utf8' });
    const tasks = JSON.parse(data);
    return tasks.tasks;
}

export function updateTask(taskID) {
    // update task status where taskID = taskID
}

export function saveDatabase(taskObject) {
    // TODO: implement this function save new task to database
    console.log(taskObject);
    // insert into tasks (task, status) values (taskObject.task, taskObject.status)
}
