'use strict'

const Model = require('./toDoModel.js');
const View = require('./toDoView.js');


class Controller {
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
    let tasksById = Model.findId(id);
    View.displayTaskById(tasksById);
  }
}

module.exports = Controller;
