let Model = require('./model.js')
let View = require('./view.js')

class Controller {
  
  static showMenu() {
    View.printAllMenu()
  }

  static showTask() {
    let allTask = Model.taskList()
    View.printAllTask(allTask)
  }

  static addTask(newTask) {
    Model.writeTask(newTask)
  }

}

module.exports = Controller