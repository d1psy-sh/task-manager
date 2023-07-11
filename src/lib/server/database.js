import sqlite3 from 'sqlite3';

import { Status } from '../Status.js';

const db = new sqlite3.Database('./db/tasks.db');

// TODO: propper error handling

// that works don't touch it
export function loadDatabase() {
    /** @type {object[]} */
    let tasks = loadDatabaseFromSQL();
    console.log(tasks);
    return tasks;
}

/** @returns {object[]} */
function loadDatabaseFromSQL() {
    let tasks = [];
    db.serialize(function() {
        db.run(
            'CREATE TABLE IF NOT EXISTS Tasks (taskID INTEGER PRIMARY KEY AUTOINCREMENT, task TEXT, status INTEGER)',
            (e) => {
                if (e) {
                    console.log(e.message);
                }
            }
        );
        db.all('SELECT * FROM Tasks', function(err, rows) {
            if (err) {
                console.log(err);
            }
            for (let i = 0; i < rows.length; i++) {
                let status;
                switch (rows[i].status) {
                    case 0:
                        status = Status.idea;
                    case 1:
                        status = Status.todo;
                    case 2:
                        status = Status.done;
                }

                tasks.push({
                    taskID: rows[i].taskID,
                    task: rows[i].task,
                    status: status
                });
            }
        });
    });
    return tasks;
}

/**
 * @param {number} taskID
 * @param {Status} status
 */
function updateTask(taskID, status) {
    // update task status where taskID = taskID
    db.run('UPDATE Tasks SET status = ? WHERE taskID = ?', status, taskID, (e) => {
        if (e) {
            console.log(e.message);
        }
    });
}

/**
 * @param {object} taskObject
 */
function createTask(taskObject) {
    // insert into tasks (task, status) values (taskObject.task, taskObject.status)
    let status;
    switch (taskObject.status) {
        case 'idea':
            status = Status.idea;
        case 'todo':
            status = Status.todo;
        case 'done':
            status = Status.done;
    }
    db.run(
        'INSERT INTO Tasks (task, status) VALUES (?, ?)',
        taskObject.task,
        status,
        (e) => {
            if (e) {
                console.log(e.message);
            }
        }
    );
}

/**
 * @param {number} taskID
 */
function deleteTask(taskID) {
    db.run('DELETE FROM Tasks WHERE taskID = ?', taskID, (e) => {
        console.log(e.message);
    });
}

/**
 * @param {object} taskObject
 * @param {string} aktion
 */
export function saveDatabase(taskObject, aktion) {
    // TODO: implement this function save new task to database
    switch (aktion) {
        case 'update':
            updateTask(taskObject.taskID, taskObject.status);
        case 'create':
            createTask(taskObject);
        case 'delete':
            deleteTask(taskObject.taskID);
        case 'close':
            db.close();
    }
    console.log(taskObject);
}
