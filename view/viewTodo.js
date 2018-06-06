const ModelTodo = require('../model/modelTodo')

class ViewTodo {
  static help () {
    let helpList = ModelTodo.help()
    for (let i = 1; i < helpList.length; i++) {
      console.log(`${i}. ${helpList[i]}`)
    }
  }

  static list() {
    let listContent = ModelTodo.list()
    for (let i = 0; i < listContent.length; i++) {
      console.log(`${listContent[i].id}. ${listContent[i].task_content}`)
    }
    return true
  }

  static add() {
    let addContent = ModelTodo.add()
  }

  static findById() {
    let findContent = ModelTodo.findById()
  }

  static delete() {
    let deleteContent = ModelTodo.delete()
  }

  static complete() {
    let completeContent = ModelTodo.complete()
  }

  static uncomplete() {
    
  }
}

module.exports = ViewTodo
