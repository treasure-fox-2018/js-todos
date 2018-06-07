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
    //I think sort classified in controller because not part of CRUD
    let dataList = Model.read();
    if (filter === "") {
      if (direction === "asc") {
        dataList.sort(function(a, b){return new Date (a[key]) - new Date(b[key])});
      } else if (direction === "desc") {
        dataList.sort(function(a, b){return new Date(b[key]) - new Date (a[key])});
      }
        View.printList(dataList);
    } else if (filter === "completed") {
      let listCompleteData = [];
      //find data base filter key
      for (let i = 0 ; i < dataList.length ; i++) {
        if (dataList[i].status === "complete") {
          listCompleteData.push(dataList[i])
        }
      }
      if (direction === "asc") {
        listCompleteData.sort(function(a, b){return new Date (a[key]) - new Date(b[key])});
      } else if (direction === "desc") {
        listCompleteData.sort(function(a, b){return new Date(b[key]) - new Date (a[key])});
      }
        View.printList(listCompleteData);
    } else if (filter === "uncompleted") {
      let listCompleteData = [];
      //find data base filter key
      for (let i = 0 ; i < dataList.length ; i++) {
        if (dataList[i].status === "uncomplete") {
          listCompleteData.push(dataList[i])
        }
      }
      if (direction === "asc") {
        listCompleteData.sort(function(a, b){return new Date (a[key]) - new Date(b[key])});
      } else if (direction === "desc") {
        listCompleteData.sort(function(a, b){return new Date(b[key]) - new Date (a[key])});
      }
        View.printList(listCompleteData);
    }
    
  }

  static addTag (id, paramTag) {
    //find the data to see existing tag
    let data = Model.findById(id)
    //add existing tag with new added tag
    if (data !== false) {
      let newTag = (data.tag).concat(paramTag);
      // update data 
      let updateTag = Model.Update(id,"tag", newTag);
      if (updateTag !== false) {
       View.printAddTag(data,paramTag)
      } else View.printErrorTag();
    } else View.printFindError();
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