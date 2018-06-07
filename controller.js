var View = require('./view.js')
var Model = require('./model.js')

class Controller {
  static listData(){
    var data = Model.showData(data)
    View.displayData(data)
  }

  static help(){
    var help = View.displayHelp()
  }

  static addtoDo(task){
    var addtoDo = Model.addData(task)
    View.show(task)
  }

  static findId(numberList){
    var findById = Model.findById(numberList)
    View.showID(findById)
  }

  static deleteId(numberList){
    var deleteId = Model.deleteList(numberList)
    View.deleteIdView(deleteId)
  }

  static completeTask(numberList){
    var complete = Model.completeTask(numberList)
    View.completeView(complete)
  }

  static uncompleteTask(numberList){
    var uncomplete = Model.uncompleteTask(numberList)
    View.uncompleteView(uncomplete)
  }
}

module.exports = Controller
