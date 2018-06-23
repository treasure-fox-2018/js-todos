const Model = require('./model.js');
const View = require('./view.js');

class Controller {
  static help(){
    View.showHelp()
  }

  static list(){
    let list = Model.listData()
    View.showList(list)
  }

  static add(task){
    let add = Model.addData(task)
    View.showAdd(add);
  }

  static findId(id){
    let find = Model.findById(id)
    View.showFind(find);
  }

  static deleteList(id){
    let list = Model.deleteData(id)
    View.showDeleted(list)
  }

  static completeData(id){
    let complete = Model.completeData(id)
    View.showCompleted(complete)
  }

  static uncompleteData(id){
    let uncomplete = Model.uncompleteData(id)
    View.showUncompleted(uncomplete)
  }

  static listCreated(request){
    let sorting = Model.listCreated(request)
    View.showListCreated(sorting)
  }

  static listCompleted(request){
    let listcomplete = Model.listCompleted(request)
    View.showListCompleted(listcomplete)
  }

  static addTag(id,input){
    let tag = Model.addTag(id,input)
    View.showTag(tag)
  }

  static filterHobby(){
    let filter = Model.filter()
    View.showFilter(filter)
  }
}
module.exports = Controller;
