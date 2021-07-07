const fs = require('fs');

class ToDoModel{
  static readData(){
    return JSON.parse(fs.readFileSync('./data.json'));
  }

  static writeData(data){
    fs.writeFileSync('./data.json', JSON.stringify(data));
  }

  static writeTask(task){
    let data = ToDoModel.readData();
    let newTask = {};
    
    if (data.length === 0){
      newTask.id = 1;
    } else {
      newTask.id = data.length + 1
    }
    newTask.status = '[ ]';
    newTask.task = task;
    data.push(newTask);
    ToDoModel.writeData(data);
  }

  static deleteTask(id){
    let data = ToDoModel.readData();
    for (let i in data){
      if (id == data[i].id){
        let deletedTask = data.splice(i,1);
        ToDoModel.writeData(data);
        return deletedTask;
      }
    }
  }

  static completeTask(id){
    let data = ToDoModel.readData();
    for (let i in data){
      if (id == data[i].id){
        data[i].status = '[x]'
        ToDoModel.writeData(data);
      }
    }
  }

  static uncompleteTask(id){
    let data = ToDoModel.readData();
    for (let i in data){
      if (id == data[i].id){
        data[i].status = '[ ]'
        ToDoModel.writeData(data);
      }
    }
  }

}

module.exports = {
  ToDoModel
}