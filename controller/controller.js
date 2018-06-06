let Model = require('../model/model.js')
let View = require('../view/view.js')

class Controller {
  constructor () {

  }
  
  static help () {
    let listHelp = {
      list : "node todo.js list",
      add : "node todo.js add <task_content>",
      findByID : "node todo.js findByID <task_id>",
      delete : "node todo.js delete <task_id>",
      complete : "node todo.js complete <task_id>",
      uncomplete : "node todo.js uncomplete <task_id>"
    }
    if (View.printHelp(listHelp) === true) {
      return true;
    } else return false;
  }

  static list () {
    let dataList = Model.read();
    if (View.printList(dataList) === true) {
      return true;
    } else return false;
  }

  static add (newTask) {
    let dataList = Model.read();
    let nextId = dataList.length+1;
    let newData = {
      id : String(nextId),
      status : "uncomplete",
      task : newTask
    }
    if (Model.create(newData) === true) {
      if (View.printAddedData(newData) === true) {
        return true;
      }
    }
    
    return false;
  }

  static findById (id) {
    let dataList = Model.read();
    for (let i = 0 ; i < dataList.length ; i++) {
      if (dataList[i].id === id) {
        if (View.printID(dataList[i]) === true) {
          
          return true;
        }
      }
    }
    return false;
  }

  static delete (id) {
    let dataList = Model.read();
    for (let i = 0 ; i < dataList.length ; i++) {
      if (dataList[i].id === id) {
        
        let deletedTask = dataList[i].task;
        if (Model.delete(id) === true) {
          if (View.printDeleted(deletedTask) === true) {
            return true;
          } 
        }
        
      }
    }
    return false;
  }

/*
  static complete (id) {
    let dataList = Model.read();
    for (let i = 0 ; i < dataList.length ; i++) {
      if (dataList[i].id === id) {
        dataList[i].status = "complete";
        if (View.printList(dataList) === true) {
          return true;
        } else return false;
      }
    }
    return false;
  }
  */
}


module.exports = Controller;