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
  static sortByDate(oldNew){
    let data = Model.parse();
    if (oldNew === 'asc' || !oldNew) {
      data.sort(function(a, b){return new Date(a.date) - new Date(b.date)});
      View.displaySortByDate(data)
    }else if (oldNew === 'desc') {
      data.sort(function(a, b){return new Date(b.date) - new Date(a.date)});
      View.displaySortByDate(data)
    }
  }
  static addTag(id, tag){
    Model.addTag(id, tag);
    Controller.listToDo();
  }
  static filter(filterBy){
    let data = Model.parse();
    if (filterBy === 'complete') {
      for (var i = 0; i < data.length; i++) {
        if (data[i].check === '[ ]') {
          data.splice(i,1);
        }
        View.displayFilter(data)
      }
    }else if (filterBy === 'uncomplete') {
      for (var i = 0; i < data.length; i++) {
        if (data[i].check === '[x]') {
          data.splice(i,1);
        }
        View.displayFilter(data)
      }
    }else {
      for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].tag.length; j++) {
          if (filterBy === data[i].tag[j]) {
            var taskByTag = [];
            taskByTag.push(data[i]);
            View.displayFilter(taskByTag)
          }
        }
      }
    }
  }
}
module.exports = Controller;
