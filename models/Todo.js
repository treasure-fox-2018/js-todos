const fs = require('fs')
let file = './data.json'
// let file = './data-test.json'

class Todo {
  constructor(obj) {
    this.id = obj.id
    this.task = obj.task
    this.isComplete = obj.isComplete || false
    this.createdAt = obj.createdAt || new Date()
    this.completedAt = obj.completedAt || null
    this.tag = obj.tag || []
  }

  static getAll() {
    let list = JSON.parse(fs.readFileSync(file, 'utf8'))
    let output = []
    for (let i = 0; i < list.length; i++) {
      let todo = list[i]
      output.push(new Todo(todo))
    }
    return output
  }

  static write(todoList) {
    let data = JSON.stringify(todoList, null, 2)
    fs.writeFileSync(file, data, 'utf8')
  }

  static addList(task) {
    let list = Todo.getAll(file)
    let currentId = 0
    if (list.length != 0) {
      currentId = list[list.length - 1].id
    }
    let obj = { id: (currentId + 1), task }

    list.push(new Todo(obj))
    Todo.write(list)
  }

  static deleteList(searchedId) {
    let deletedTask = null;
    let list = Todo.getAll(file)

    for (let i = 0; i < list.length; i++) {
      if (list[i].id === searchedId) {
        deletedTask = list.splice(i, 1)[0].task
        // console.log(deletedTask)
        // console.log(list)
        Todo.write(list)
        break
      }
    }
    return deletedTask;
  }

  completeTask() {
    this.isComplete = true
    this.completedAt = new Date()
  }

  uncompleteTask() {
    this.isComplete = false
    this.completedAt = null
  }
}

module.exports = Todo