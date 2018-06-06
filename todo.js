'use strict'

const Model = require('./toDoModel.js');
const View = require('./toDoView.js');
const Controller = require('./toDoController.js');

let argv = process.argv;
let command = argv[2];
let input = argv[3];

if (command === 'help') {
  Controller.helpList();
}else if (command === 'list') {
  Controller.listToDo();
}else if (command === 'add') {
  Controller.addTask(input,);
}else if (command === 'findById') {
  Controller.findById(input);
}
