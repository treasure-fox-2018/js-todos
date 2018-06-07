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
    newToDo.date = new Date();
    data.push(newToDo);
    Model.updateToDo(data);
  }
  static parse(){
    const data = JSON.parse(fs.readFileSync('data.json'));
    return data;
  }
  static deleteTask(id){
    let data = Model.parse();
    for (let i = 0; i < data.length; i++) {
      if (id == data[i].id) {
        let deleted = data.splice(i,1);
        Model.updateToDo(data);
        return true;
      }
    }
  }
  static completeTask(id){
    let data = Model.parse();
    for (let i = 0; i < data.length; i++) {
      if (id == data[i].id) {
        data[i].check = '[x]';
        Model.updateToDo(data);
      }
    }
  }
  static unCompleteTask(id){
    let data = Model.parse();
    for (let i = 0; i < data.length; i++) {
      if (id == data[i].id) {
        data[i].check = '[ ]';
        Model.updateToDo(data);
      }
    }
  }
  static updateToDo(data){
    fs.writeFileSync('data.json', JSON.stringify(data));
  }
  static addTag(id, tags){
    let data = Model.parse();
    for (let i = 0; i < data.length; i++) {
      if (id == data[i].id) {
        for (let j = 0; j < tags.length; j++) {
          data[i].tag.push(tags[j]);
        }
        Model.updateToDo(data);
      }
    }
  }
}
module.exports = Model;
