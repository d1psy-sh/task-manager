import fs from 'fs';

// that works don't touch it
export function loadDatabase() {
    const data = fs.readFileSync('./src/lib/server/database.json', { encoding: 'utf8' });
    const tasks = JSON.parse(data);
    return tasks.tasks;
}

function updateTask(taskID) {
    // update task status where taskID = taskID
}

function createTask(taskObject) {
    // insert into tasks (task, status) values (taskObject.task, taskObject.status)
}

export function saveDatabase(taskObject, aktion) {
    // TODO: implement this function save new task to database
    switch (aktion) {
        case 'update':
            updateTask(taskObject.taskID);
        case 'create':
            createTask(taskObject);
    }
    console.log(taskObject);
    // insert into tasks (task, status) values (taskObject.task, taskObject.status)
}
