'use strict'

const fs = require('fs')

class View {
  static displayHelp(){
    console.log('$ node todo.js help');
  }
  static getHelp(){
    let helpArr = ['$ node todo.js','$ node todo.js help','$ node todo.js list','$ node todo.js add <task_content>','$ node todo.js findById <task_id>','$ node todo.js delete <task_id>','$ node todo.js complete <task_id>','$ node todo.js uncomplete <task_id>'];
    for (var i = 0; i < helpArr.length; i++) {
      console.log(helpArr[i]);
    }
  }
  static displayList(data){
    for (var i = 0; i < data.length; i++) {
      console.log(`${data[i].id}. ${data[i].check} ${data[i].task}`);
    }
  }
  static displayAddSuccess(){
    console.log('Task added to list:');
  }
  static displayTaskById(taskById){
    console.log(`${taskById}`);
  }
  static displayDeleteOutcome(bool){
    if (bool === true) {
      console.log('task deletion successful');
    }else {
      console.log('task deletion failed');
    }
  }
}

module.exports = View;
