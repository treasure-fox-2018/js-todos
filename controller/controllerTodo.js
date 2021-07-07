const ModelTodo = require("../model/modelTodo");
const ViewTodo = require("../view/viewTodo");
const fs = require("fs");

class ControllerTodo {
  static help() {
    let helpContent = ModelTodo.help();
    ViewTodo.help(helpContent);
  }

  static list() {
    let listContent = ModelTodo.list();
    ViewTodo.list(listContent);
  }

  static add(task_content) {
    let addContent = ModelTodo.add(task_content);
    ViewTodo.add(addContent);
  }

  static findById(task_id) {
    let findByID = ModelTodo.findById(task_id);
    ViewTodo.findById(findByID);
  }

  static delete(delId) {
    let deleteId = ModelTodo.delete(delId);
    ViewTodo.delete(deleteId);
  }

  static complete(compId) {
    let completeContent = ModelTodo.complete(compId);
  }

  static uncomplete(uncompId) {
    let uncompleteId = ModelTodo.uncomplete(uncompId);
    ViewTodo.uncomplete(uncompleteId)
  }

  static listCreated (list_Created) {
    let list_created = ModelTodo.listCreated(list_Created)
    ViewTodo.listCreated(list_created)
  }

  static listCompleted () {
    let listComp = ModelTodo.listCompleted()
    ViewTodo.listCompleted(listComp)
    return true
  }

  static tagList (idTag, nameTag) {
    let tag_list = ModelTodo.tagList(idTag, nameTag)
    ViewTodo.tagList(idTag, nameTag)
  }

  static filterByTag (filter_tag) {
    let filterTag = ModelTodo.filterByTag(filter_tag)
    ViewTodo.filterByTag(filterTag)
  }
}
module.exports = ControllerTodo;
