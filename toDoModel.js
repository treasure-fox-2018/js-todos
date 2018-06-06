'use strict'

const fs = require('fs')
const View = require('./toDoView.js');

class Model {
  constructor(id, task) {
        this._id = id;
        this._task = title;
    }
  static findId(id){
    let data = Model.parse();
    let tasksById = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        tasksById.push(data[i].task);
      }
    }
    return tasksById;
  }
  static createTask(newTask){
    let data = Model.parse();
    let newToDo = {task: newTask};
    data.push(newToDo);
    fs.writeFileSync('data.json', JSON.stringify(data));
  }
  static parse(){
    const data = JSON.parse(fs.readFileSync('data.json'));
    return data;
  }
}

module.exports = Model;
