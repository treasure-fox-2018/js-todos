const Todo = require('../models/Todo')
const TodoView = require('../views/TodoView')

class TodoController {
  static showHelp() {
    TodoView.showHelp()
  }

  static showList() {
    let todoList = Todo.getAll()
    TodoView.showList(todoList)
  }

  static showSortedList(command, args) {
    let todoList = Todo.getAll()

    if (args.length === 0) { var args = 'desc' }
    else { var args = args[0] }
    var command = command.split(':')[1]
    let dates = []

    for (let i = 0; i < todoList.length; i++) {
      if (command === "created") {
        dates.push(todoList[i].createdAt)
      }
      else if (command === "completed" && todoList[i].completedAt) {
        dates.push(todoList[i].completedAt)
      }
    }

    if (args === "asc") {
      dates.sort((a, b) => {
        return a > b
      })
    } else if (args === "desc") {
      dates.sort((a, b) => {
        return a < b
      })
    }

    let outputList = []
    for (let i = 0; i < dates.length; i++) {
      for (let j = 0; j < todoList.length; j++) {
        if (command === "created") { 
          var todo = todoList[j].createdAt
        } 
        else if (command === "completed") {
          var todo = todoList[j].completedAt
        }
        if (todo === dates[i]) outputList.push(todoList[j])
      }
    }

    TodoView.showList(outputList)
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