const {ToDoView} = require('../Views/ToDoView.js')
const {ToDoModel} = require('../Models/ToDoModel.js')

class ToDoController{

  static help(){
    ToDoView.help();
  }

  static list(){
    let data = ToDoModel.readData();
    ToDoView.list(data);
  }

  static add(task){
    ToDoModel.writeTask(task);
    ToDoView.addSuccessMessage(task);
    ToDoController.list();
  }

  static findById (id){
    let data = ToDoModel.readData();
    let task;
    for (let i in data){
      if (id == data[i].id){
        task = data[i].task
      }
    }
    ToDoView.taskById(id, task)
  }

  static delete(id){
    let deletedTask = ToDoModel.deleteTask(id);
    ToDoView.deleteSuccessMessage(deletedTask);
    ToDoController.list();
  }

  static completeTask(id){
    ToDoModel.completeTask(id)
    ToDoController.list();
  }

  static uncompleteTask(id){
    ToDoModel.uncompleteTask(id)
    ToDoController.list();
  }
}



module.exports = {
  ToDoController
}