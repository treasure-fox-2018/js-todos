"use strict"

const Model = require('./model.js');
const View = require('./view.js');
const Controller = require('./controller.js');

var argv = process.argv;
const command = argv[2];
const taskInput = argv[3];

if (command === 'help') {
    Controller.helpList();
} else if (command === 'list') {
    Controller.todoList();
} else if (command === 'add') {
    // console.log(taskInput);
    Controller.addTask(taskInput);
} else if (command === 'findById') {
    Controller.findById(taskInput);
} else if (command === 'delete') {
    Controller.deleteTask(taskInput);
} else if (command === 'complete') {
    Controller.taskCompleted(taskInput);
}