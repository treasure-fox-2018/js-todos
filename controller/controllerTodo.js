const ModelTodo = require("../model/modelTodo");
const ViewTodo = require("../view/viewTodo");

class ControllerTodo {
  static help() {
    ModelTodo.help();
    ViewTodo.help();
  }

  static list() {
    ModelTodo.list();
    ViewTodo.list();
  }

  static add() {
    ModelTodo.add(task_content);
    ViewTodo.add(task_content);
  }

  static findById() {
    ModelTodo.findById(task_id);
    ViewTodo.findById(task_id);
    return true;
  }

  static delete() {
    ModelTodo.delete();
    ViewTodo.delete();
    return true;
  }

  static complete() {
    ModelTodo.complete();
    ViewTodo.complete();
    return true;
  }

  static uncomplete() {
    ModelTodo.uncomplete();
    ViewTodo.uncomplete();
    return true;
  }
}

module.exports = ControllerTodo;
