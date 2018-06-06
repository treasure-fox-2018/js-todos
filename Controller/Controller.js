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

class Controller {
  static controlHelp() {
    return Model.Help()
  }
}


console.log(Controller.controlHelp())