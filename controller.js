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

  static showCompleted() {
    let completedTask = Model.completedList()
    View.printAllTask(completedTask)
  }

  static showCompleteWrite(newTask) {
    View.printAllTaskWrite(newTask)
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

  static showCompleteTask(targetId) {
    let completedTask = Model.taskList()
    View.printCompleteTask(completedTask)
  }

  static uncompleteTask(targetId) {
    Model.uncompleteTask(targetId)
  }

  static showUncompleteTask(targetId) {
    let uncompletedTask = Model.taskList()
    View.printUncompleteTask(uncompletedTask)
  }

  static sortDate(sort) {
    Model.sortDate(sort)
  }

  static showSortDate(sort) {
    let sortDate = Model.taskList()
    View.printSortDate(sortDate)
  }

  static completedList() {
    Model.completedList()
  }

  static tagSystem(targetId, tagName) {
    Model.tagSystem(targetId, tagName)
  }

  static filteredList(filter) {
    Model.filteredList(filter)
  }
}

module.exports = Controller