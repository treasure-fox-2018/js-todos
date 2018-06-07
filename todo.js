"use strict"

const Model = require('./model.js');
const View = require('./view.js');
const Controller = require('./controller.js');

var argv = process.argv;
const command = argv[2];
const inputOne = argv[3];
const inputTwo = argv[4];

if (command === 'help') {
    Controller.helpList();
} else if (command === 'list') {
    Controller.todoList();
} else if (command === 'add') {
    Controller.addTask(inputOne, inputTwo);
} else if (command === 'findById') {
    Controller.findById(inputOne);
}