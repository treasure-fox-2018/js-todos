const fs = require('fs')

class ModelTodo {
  static help () {
    let help = [
      'node todo.js',
      'node todo.js help',
      'node todo.js list',
      'node todo.js add <task_content>',
      'node todo.js findById <task_id>',
      'node todo.js delete <task_id>',
      'node todo.js complete <task_id>',
      'node todo.js uncomplete <task_id>'
    ]
    return help
  }

  static list() {
    const exportData = require('../data.json')
    return exportData
  }

  static add(task_content) {
    let data = ModelTodo.list()

    let newTask = {
      "id": data.length + 1,
      "task_content": task_content
    }

    data.push(newTask)
    fs.writeFileSync('./data.json', JSON.stringify(data))
    return true
  }

  static findById(id) {
    let data = ModelTodo.list()
    return data
  }

  static delete() {
    let data = ModelTodo.list()
    return data
  }

  static complete() {
    let data = ModelTodo.list()
    return data
  }

  static uncomplete() {
    let data = ModelTodo.list()
    return data
  }
}

module.exports = ModelTodo