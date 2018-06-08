var View = require('./view.js')
var Model = require('./model.js')

class Controller {
  static ambilData(){
    var data = Model.listData(data)
    View.viewData(data)
  }

  static help(){
    var help = View.printHelp()
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

  static listCreated(input){
    var listcreated = Model.listCreated(input)
    View.listCreated(listcreated)
  }
}

module.exports = Controller
