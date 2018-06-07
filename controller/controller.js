let Model = require('../model/model.js')
let View = require('../view/view.js')

class Controller {
  constructor () {

  }
  
  static help () {
    let list_Help = Model.listHelp();
    View.printHelp(list_Help);
  }

  static list () {
    let dataList = Model.read();
    View.printList(dataList) 
  }

  static add (newTask) {
    let dataList = Model.read();
    let nextId = dataList.length+1;
    let newData = {
      id : String(nextId),
      status : "uncomplete",
      task : newTask
    }
    if (Model.create(newData) === true) {
      View.printAddedData(newData)
    } else View.printAddError();
  }

  static findById (id) {
    let data = Model.findById(id) ;
    if (data !== false) {
      View.printID(data);
    } else View.printFindError();
  }

  static delete (id) {
    let deletedTask = Model.delete(id);
    // console.log(deletedTask)
    if (deletedTask !== false) {
      View.printDeleted(deletedTask);
    } else View.printDeletedError();
  }

  static complete (id) {
    let updateData = Model.Update(id,"status","complete")
    if (updateData !== false) {
      View.printList(updateData)
    } else View.printCompleteError();
  }

  static uncomplete (id) {
    let updateData = Model.Update(id,"status","uncomplete")
    if (updateData !== false) {
      View.printList(updateData)
    } else View.printCompleteError();
  }

}


module.exports = Controller;