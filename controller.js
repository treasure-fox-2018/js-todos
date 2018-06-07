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

  static addTask(newTask, newStatus) {
    Model.writeTask(newTask, newStatus)
  }

  static findTaskById(targetId) {
    Model.getTaskById(targetId)
  }

  static deleteTask(targetId) {
    Model.deleteTask(targetId)
  }

  static completeTask(targetId) {
    Model.completeTask(targetId)
  }

  static uncompleteTask(targetId) {
    Model.uncompleteTask(targetId)
  }
}

module.exports = Controller