// [
//   {help1: '$ node todo.js'}, // will call help
//   {help1: '$ node todo.js help'}, // display command yg tersedia
//   {help1: '$ node todo.js list'}, // melihat daftar TODO
//   {help1: '$ node todo.js add <task_content>'}, // menambah
//   {help1: '$ node todo.js findById <task_id>'}, // melihat detail
//   {help1: '$ node todo.js delete <task_id>'}, // menghapus
//   {help1: '$ node todo.js complete <task_id>'}, // menandai
//   {help1: '$ node todo.js uncomplete <task_id>'} // menghapus tanda
// ]

"use strict"
const Model = require ('../Model/Model.js')
const View = require ('../View/View.js')
const inputNode = require ('../todo.js')

class Controller {
  static controlHelp() {
    View.viewHelp()
  }
  static controlMenu() {
    View.viewMenu()
  }
  static controlList() {
    let list = Model.list() // pict from JSON
    View.viewList(list)
  }
  static controlAdd(newTask) {
    let addList = Model.add(newTask)
    View.viewAdd(newTask)
  }
  static controlFindById(id) {
    let findId = id
    let data = Model.list()
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        View.findById(data[i].id, data[i].task)
      }
    }
    // View.findById(data)
  }
}

// console.log(Controller.controlHelp())

module.exports = Controller