'use strict'
var Controller = require('./controllerToDo.js')

class View {
  static printHelp () {
    console.log('node todo.js');
    console.log('node todo.js help');
    console.log('node todo.js list');
    console.log('node todo.js add <task_content>');
    console.log('node todo.js findByID <task_id>');
    console.log('node todo.js delete <task_id>');
    console.log('node todo.js complete <task_id>');
    console.log('node todo.js uncomplete <task_id>');
    return true
  }

  static printList (data) {
    let strData = '';
    for (var i = 0; i <= data.length - 1; i++) {
      let dataPerLine = `${data[i].id}. ${data[i].task}`
      strData = strData + dataPerLine + '\n'
    }
    console.log(strData);
    return true;
  }

  
}


module.exports = View