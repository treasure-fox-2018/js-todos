
var View = require('./view.js')
var Model = require('./model.js')

class Controller {

  static listData(){
    var data = Model.showData(data)
    View.printData(data)
  }

  static help(){
    var help = View.printHelp()
  }

  static addtask(task){
    var addTask = Model.addData(task)
    View.print(addTask)
  }

  static idFind(numberList){
    var findById = Model.findId(numberList)
    View.printId(findById)
  }

  static deleteId(numberList){
    var IdDelete = Model.delete(numberList)
    View.viewDeleteId(IdDelete)
  }

  static complete(numberList){
    var complete = Model.complete(numberList)
    View.ViewComplete(complete)
  }

  static uncomplete(numberList){
    var uncomplete = Model.uncomplete(numberList)
    View.viewUncomplete(uncomplete)
  }
}

module.exports = Controller










