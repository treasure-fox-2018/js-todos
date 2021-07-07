const View = require('../Views/ToDo.js');
const Model = require('../Models/ToDo.js');

class ToDo{

  static help(){
    View.help();
  }

  static list(data){
    if (data === undefined){
      var data = Model.readData();
    }
    View.list(data);
  }

  static add(taskArr){
    let task = taskArr.join(' ');
    Model.writeTask(task);
    View.addSuccessMessage(task);
    this.list();
  }

  static findById (id){
    let task = Model.searchById (id);
    View.taskById(id, task);
  }

  static delete(id){
    let deletedTask = Model.deleteTask(id);
    View.deleteSuccessMessage(deletedTask);
    if (deletedTask !== undefined){
      this.list();
    }
  }

  static completeTask(id){
    Model.completeTask(id);
    this.list();
  }

  static uncompleteTask(id){
    Model.uncompleteTask(id);
    this.list();
  }

  static sortDate(mode){
    let sortedData = Model.sort(mode);
    this.list(sortedData);
  }

  static completedTasks(mode){
    let completedList = Model.completedList();
    let sorted = Model.sort(mode, completedList);
    this.list(sorted)
  }

  static tag(inputArr){
    let taskId = (inputArr.splice(0,1))[0];
    let tagsArr = inputArr;
    let taggedTask = Model.addTags(taskId, tagsArr);
    View.tagSuccess(taggedTask)
  }

  static filter(tag){
    let filteredTasks = Model.filterTask(tag);
    View.list(filteredTasks);
  }
}



module.exports = ToDo;
