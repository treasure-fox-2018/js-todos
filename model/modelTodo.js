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
    
  }

  static findById() {
    
  }

  static delete() {
    
  }

  static complete() {
    
  }

  static uncomplete() {
    
  }
}

module.exports = ModelTodo
