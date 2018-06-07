'use strict'

const fs = require('fs')

class Model {
  constructor(id, task) {
        this._id = id;
        this._task = task;
    }
  static createTask(newTask, newId){
    let data = Model.parse();
    let newToDo = {};
    if (data.length === 0) {
      newToDo.id = 1;
    }else {
      newToDo.id = data[data.length - 1].id + 1;
    }
    newToDo.check = '[ ]';
    newToDo.task = newTask;
    newToDo.tag = [];
    data.push(newToDo);
    fs.writeFileSync('data.json', JSON.stringify(data));
  }
  static parse(){
    const data = JSON.parse(fs.readFileSync('data.json'));
    return data;
  }
  static deleteTask(id){
    let data = Model.parse();
    for (let i = 0; i < data.length; i++) {
      if (id == data[i].id) {
        data.splice(i,1);
        fs.writeFileSync('data.json', JSON.stringify(data));
        return true;
      }
    }
  }
  static completeTask(id){
    let data = Model.parse();
    for (let i = 0; i < data.length; i++) {
      if (id == data[i].id) {
        data[i].check = '[x]';
        fs.writeFileSync('data.json', JSON.stringify(data));
      }
    }
  }
  static unCompleteTask(id){
    let data = Model.parse();
    for (let i = 0; i < data.length; i++) {
      if (id == data[i].id) {
        data[i].check = '[ ]';
        fs.writeFileSync('data.json', JSON.stringify(data));
      }
    }
  }
}

module.exports = Model;
