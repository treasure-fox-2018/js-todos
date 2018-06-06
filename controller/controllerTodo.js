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

  static add(task_content) {
    ModelTodo.add(task_content);
    ViewTodo.add(task_content);
    return true
  }

  static findById(task_id) {
    ModelTodo.findById(task_id);
    ViewTodo.findById(task_id);
    return true;
  }

  static delete(id) {
    ModelTodo.delete(id);
    ViewTodo.delete(id);
    return true;
  }

  static complete(id) {
    ModelTodo.complete(id);
    ViewTodo.complete(id);
    return true;
  }

  static uncomplete(id) {
    ModelTodo.uncomplete(id);
    ViewTodo.uncomplete(id);
    return true;
  }
}

module.exports = ControllerTodo;
