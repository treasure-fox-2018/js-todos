'use strict'

const fs = require('fs')
const Model = require('./toDoModel.js');
const View = require('./toDoView.js');


class Controller {
  static displayHelp(){
    View.displayHelp();
  }
  static helpList(){
    View.getHelp();
  }
  static listToDo(){
    let data = Model.parse();
    View.displayList(data);
  }
  static addTask(newTask){
    Model.createTask(newTask);
    View.displayAddSuccess();
    Controller.listToDo();
  }
  static findById(id){
    let taskById = [];
    let data = Model.parse();
    for (var i = 0; i < data.length; i++) {
      if (id == data[i].id) {
        taskById.push(data[i].task);
      }
    }
    View.displayTaskById(taskById);
  }
  static deleteTask(id){
    let deleteTask = Model.deleteTask(id);
    View.displayDeleteOutcome(deleteTask);
    Controller.listToDo();
  }
  static completeTask(id){
    Model.completeTask(id)
    Controller.listToDo();
  }
  static unCompleteTask(id){
    Model.unCompleteTask(id)
    Controller.listToDo();
  }
}

module.exports = Controller;
