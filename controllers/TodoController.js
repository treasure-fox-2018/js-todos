const Todo = require('../models/Todo')
const TodoView = require('../views/TodoView')

class TodoController {
  static showHelp() {
    TodoView.showHelp()
  }

  static showList() {
    let todo = Todo.getAll()
    TodoView.showList(todo)
  }

  static addList(command, args) {
    let task = args.join(' ')
    Todo.addList(task)
    TodoView.displayMessage(command, task)
  }

  static findById(args) {
    let searchedId = +args
    let todoList = Todo.getAll()
    let foundTodo = []

    for (let i = 0; i < todoList.length; i++) {
      let todo = todoList[i]
      if (searchedId === todo.id) foundTodo.push(todo)
    }
    if (foundTodo.length > 0) {
      TodoView.showList(foundTodo)
    } else {
      TodoView.displayMessage("default", null)
    }
  }

  static deleteList(command, args) {
    let searchedId = +args
    let deletedTask = Todo.deleteList(searchedId)

    if (deletedTask === null) {
      TodoView.displayMessage("default", null)
    } else {
      TodoView.displayMessage(command, deletedTask)
    }
  }

  static completeState(command, args) {
    let searchedId = +args
    let todoList = Todo.getAll()
    let isFound = false
    
    for (let i = 0; i < todoList.length; i++) {
      let todo = todoList[i]
      if (command === 'complete' && searchedId === todo.id) {
        todo.completeTask()
        isFound = true
        break
      } else if (command === 'uncomplete' && searchedId === todo.id) {
        todo.uncompleteTask()
        isFound = true
        break
      }
    }
    if (isFound) {
      Todo.write(todoList)
      TodoView.showList(todoList)
    } else {
      TodoView.displayMessage("default", null)
    }
  }
}

module.exports = TodoController