const fs = require('fs');

class ToDo{
  static readData(){
    return JSON.parse(fs.readFileSync('./data.json'));
  }

  static writeData(data){
    fs.writeFileSync('./data.json', JSON.stringify(data));
  }

  static writeTask(task){
    let data = this.readData();
    let newTask = {};
    
    if (data.length === 0){
      newTask.id = 1;
    } else {
      newTask.id = data.length + 1;
    }
    newTask.status = '[ ]';
    newTask.task = task;
    newTask.dateCreated = new Date();
    data.push(newTask);
    this.writeData(data);
  }

  static deleteTask(id){
    let data = this.readData();
    let isIDFound = false;
    for (let i in data){
      if (id == data[i].id){
        isIDFound = true;
        var indexID = Number(i);
      }
    }
    if (isIDFound){
      let deletedTask = data.splice(indexID, 1);
      for (let i in data){
        data[i].id = Number(i) + 1;
      }
      this.writeData(data);
      return deletedTask;
    }
  }

  static searchById(id){
    let data = this.readData();
    let task;
    for (let i in data) {
      if (id == data[i].id) {
        task = data[i].task;
      }
    }
    return task;
  }

  static completeTask(id){
    let data = this.readData();
    for (let i in data){
      if (id == data[i].id){
        data[i].status = '[x]';
        this.writeData(data);
      }
    }
  }

  static uncompleteTask(id){
    let data = this.readData();
    for (let i in data){
      if (id == data[i].id){
        data[i].status = '[ ]';
        this.writeData(data);
      }
    }
  }

  static sort(mode, data = this.readData){
    let datesArr = [];
    for (let i in data){
      datesArr.push(data[i].dateCreated);
    }

    if (mode == 'asc'){
      datesArr.sort();
      let sortedData = [];
      for (let i in datesArr){
        for (let j in data){
          if (data[j].dateCreated === datesArr[i]){
            sortedData.push(data[j]);
          }
        }
      }
      return sortedData;
    } else if (mode == 'des'){
      datesArr.sort((a,b) => {return a < b});
      let sortedData = []
      for (let i in datesArr) {
        for (let j in data) {
          if (data[j].dateCreated === datesArr[i]) {
            sortedData.push(data[j]);
          }
        }
      }
      return sortedData;
    }
  }

  static completedList(){
    let data = this.readData();
    let completedList = [];
    for (let i in data){
      if (data[i].status == '[x]'){
        completedList.push(data[i]);
      }
    }
    return completedList;
  }

  static addTags(taskId, tagsArr){
    let data = this.readData();
    for (let i in data){
      if (taskId == data[i].id){
        if (data[i].tags === undefined){
          data[i].tags = tagsArr;
        } else {
          for (let j in tagsArr){
            let isDuplicate = false;
            for (let k in data[i].tags){
              if (tagsArr[j] === data[i].tags[k]){
                isDuplicate = true;
              }
            }
            if (!isDuplicate){
              data[i].tags.push(tagsArr[j]);
            }
          }
        }
        
        this.writeData(data);
        var taggedTask = data[i];
      }
    }
    return taggedTask;
  }

  static filterTask(tag){
    let data = this.readData();
    let taggedTasks = [];
    for (let i in data){
      for (let j in data[i].tags){
        if (tag == data[i].tags[j]){
          taggedTasks.push(data[i]);
        }
      }
    }
    return taggedTasks;
  }

}

module.exports = ToDo;
