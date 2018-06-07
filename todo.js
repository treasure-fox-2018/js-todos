'use strict'

const Model = require('./toDoModel.js');
const View = require('./toDoView.js');
const Controller = require('./toDoController.js');

let argv = process.argv;
let command = argv[2];
let firstInput = argv[3];
let secondInput = argv[4];
let thirdInput = argv[5];
let tags = argv.slice(4)

if (!command) {
  Controller.displayHelp();
}else if (command === 'help') {
  Controller.helpList();
}else if (command === 'list') {
  Controller.listToDo();
}else if (command === 'add') {
  Controller.addTask(firstInput);
}else if (command === 'findById') {
  Controller.findById(firstInput);
}else if (command === 'delete') {
  Controller.deleteTask(firstInput);
}else if (command === 'complete') {
  Controller.completeTask(firstInput);
}else if (command === 'uncomplete') {
  Controller.unCompleteTask(firstInput);
}else if (command === 'list:created') {
  Controller.sortByDate(firstInput);
}else if (command === 'addTag') {
  Controller.addTag(firstInput, tags);
}else if (command.split(':')[0] === 'filter') {
  Controller.filter(command.split(':')[1]);
}
