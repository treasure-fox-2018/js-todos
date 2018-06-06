'use strict'

const Model = require('./toDoModel.js');

class View {
  static getHelp(){
    let helpArr = ['$ node todo.js','$ node todo.js help','$ node todo.js list','$ node todo.js add <task_content>','$ node todo.js findById <task_id>','$ node todo.js delete <task_id>','$ node todo.js complete <task_id>','$ node todo.js uncomplete <task_id>'];
    for (var i = 0; i < helpArr.length; i++) {
      console.log(helpArr[i]);
    }
  }
  static displayList(data){
    for (var i = 0; i < data.length; i++) {
      console.log(`${i + 1}. ${data[i].task}`);
    }
  }
  static displayAddSuccess(){
    console.log('Task added to list:');
  }
  static displayTaskById(tasksById){
    for (var i = 0; i < tasksById.length; i++) {
      console.log(tasksById[i]);
    }
  }
}

module.exports = View;
