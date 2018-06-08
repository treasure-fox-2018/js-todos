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
    if (Model.create(newTask) === true) {
      View.printAddedData(newTask)
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

  static sorting (key,direction = "asc", filter = "") { //default sort is ascending
    let sortedFiltered = Model.sorting(key,direction, filter)
    View.printList(sortedFiltered)
  }

  static addTag (id, paramTag) {
    let updateTag = Model.Update(id,"tag",paramTag) ;
    if (updateTag !== false) {
      View.printAddTag(Model.findById(id),paramTag);
    } else View.printTagError();
  }

  static filterTag (tag) {
    let filterData = Model.filterTag(tag);
    if (filterData !== false) {
      View.printList(filterData);
    } else View.printFilterError()
  }

  static wrongParam() {
    View.printWrongParam();
  }

}


module.exports = Controller;