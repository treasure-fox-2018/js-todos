"use strict"

const Model = require('./model.js');
const View = require('./view.js');
const Controller = require('./controller.js');

var argv = process.argv;
const command = argv[2];
const taskInput = argv[3];
const tag = argv.slice(4);

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
} else if (command === 'list:created') {
    Controller.sortFunction('date', taskInput);
} else if (command === 'list:completed') {
    Controller.sortFunction('date', taskInput, 'complete');
} else if (command === 'tag') {
    Controller.addTag(taskInput, tag);
} else {
    Controller.getTags(command);
}