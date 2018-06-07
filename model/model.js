let fs=require('fs');


class Model {
  constructor() {

  }

  static listHelp(){
    let list_Help = {
      list : "node todo.js list",
      add : "node todo.js add <task_content>",
      findByID : "node todo.js findByID <task_id>",
      delete : "node todo.js delete <task_id>",
      complete : "node todo.js complete <task_id>",
      uncomplete : "node todo.js uncomplete <task_id>"
    }
    return list_Help;
  }

  static read() {
    let dataJSON=fs.readFileSync('./data.json', 'utf8');
    let dataList=JSON.parse(dataJSON);
    return dataList;
  }

  static create(newTask) {
    let dataList = Model.read();
    let nextId = dataList.length+1;
    let newData = {
      id : String(nextId),
      status : "uncomplete",
      task : newTask,
      createDate : new Date(),
      tag : []
    }
    dataList.push(newData);
    let newDataList=JSON.stringify(dataList);
    let dataJSON=fs.writeFileSync('./data.json', newDataList);
    return true;
  }

  static delete(id) {
    let dataList = Model.read();
    for (let i = 0 ; i < dataList.length ; i++) {
      if (dataList[i].id === id) {
        let deletedTask = dataList[i];
        dataList.splice(i,1);
        let newDataList=JSON.stringify(dataList);
        let dataJSON=fs.writeFileSync('./data.json', newDataList);
        return deletedTask;
      }
    }
    return false;
  }

  static findById (id) {
    let dataList = Model.read();
    for (let i = 0 ; i < dataList.length ; i++) {
      if (dataList[i].id === id) {
          return dataList[i];
      }
    }
    return false;
  }

  static Update (id,key,value) {
    let dataList = Model.read();
    for (let i = 0 ; i < dataList.length ; i++) {
      if (dataList[i].id === id) {
        dataList[i][key] = value;
        let newDataList=JSON.stringify(dataList);
        let dataJSON=fs.writeFileSync('./data.json', newDataList);
        return dataList;
      }
    }
    return false;
  }

  static filterTag(tag) {
    let dataList = Model.read();
    let filterData = [];
    let isFound = false;
    for (let i = 0 ; i < dataList.length ; i++) {
      for (let j = 0 ; j < dataList[i].tag.length ; j++) {
        if (dataList[i].tag[j] === tag) {
          filterData.push(dataList[i])
          isFound = true;
        }
      }
    }
    if (isFound === true) {
      return filterData
    }
    return false;
  }
}

module.exports = Model;