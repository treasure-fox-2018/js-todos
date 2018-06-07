const data = require("./data.json");
const fs = require('fs');


class Model{
	static list(){
    let arrOfObjJSON = (data)
		return arrOfObjJSON;
	}

	static add(taskName){
    let nextId = null;
    if (data.length === 0) {
      nextId = 1;
    } else {
      nextId = data[data.length - 1].id + 1;
    }
    let arrOfObjJSON = (data);
    let objTaskTBAdded = {
      id: nextId,
      taskTitle: taskName,
      completion: false,
      dateCreated: new Date(),
      tags: []
    }
    arrOfObjJSON.push(objTaskTBAdded);
		fs.writeFileSync("data.json", JSON.stringify(arrOfObjJSON));
	}

  static find(taskId) {
    let arrOfObjJSON = data;
    let arrIndex = null;
    for (let i = 0; i < arrOfObjJSON.length; i++) {
      if (arrOfObjJSON[i].id === Number(taskId)) {
        arrIndex = i;
      }
    }
    return arrOfObjJSON[arrIndex];
  }

  static delete(taskId) {
    let arrOfObjJSON = (data);
    let arrIndex = null;
    let taskName = null
    for (let i = 0; i < arrOfObjJSON.length; i++) {
      if (arrOfObjJSON[i].id === Number(taskId)) {
        arrIndex = i;
        taskName = arrOfObjJSON[i].taskTitle
      }
    }
    arrOfObjJSON.splice(arrIndex, 1);
		fs.writeFileSync("data.json", JSON.stringify(arrOfObjJSON));
    return taskName;
  }

  static check(taskId) {
    let arrOfObjJSON = (data);
    let arrIndex = null;
    for (let i = 0; i < arrOfObjJSON.length; i++) {
      if (arrOfObjJSON[i].id === Number(taskId)) {
        arrIndex = i;
      }
    }
    arrOfObjJSON[arrIndex].completion = true;
		fs.writeFileSync("data.json", JSON.stringify(arrOfObjJSON));
  }

  static uncheck(taskId) {
    let arrOfObjJSON = (data);
    let arrIndex = null;
    for (let i = 0; i < arrOfObjJSON.length; i++) {
      if (arrOfObjJSON[i].id === Number(taskId)) {
        arrIndex = i;
      }
    }
    arrOfObjJSON[arrIndex].completion = false;
    fs.writeFileSync("data.json", JSON.stringify(arrOfObjJSON));
  }

  static listOutstandingAscending() {
    let arrOfObjJSON = data;
    return (data.sort(function(a, b){return new Date(a.dateCreated) - new Date(b.dateCreated)}));
  }

  static listOutstandingDescending() {
    let arrOfObjJSON = data;
    return (data.sort(function(a, b){return new Date(b.dateCreated) - new Date(a.dateCreated)}));
  }

  static listCompletedAscending() {
    let arrOfObjJSON = (data);
    for (let i = 0; i < arrOfObjJSON.length; i++) {
      if (arrOfObjJSON[i].completion !== true) {
        arrOfObjJSON.splice(i, 1)
      }
    }
    return (arrOfObjJSON.sort(function(a, b){return new Date(a.dateCreated) - new Date(b.dateCreated)}));
  }

  static listCompletedDescending() {
    let arrOfObjJSON = (data);
    for (let i = 0; i < arrOfObjJSON.length; i++) {
      if (arrOfObjJSON[i].completion !== true) {
        arrOfObjJSON.splice(i, 1)
      }
    }
    return (arrOfObjJSON.sort(function(a, b){return new Date(b.dateCreated) - new Date(a.dateCreated)}));
  }

  static assignTag(taskId, arrOfTags) {
    let arrOfObjJSON = (data);
    let arrIndex = null;
    for (let i = 0; i < arrOfObjJSON.length; i++) {
      if (arrOfObjJSON[i].id === Number(taskId)) {
        arrIndex = i;
      }
    }

    let processedArr = arrOfTags;

    for (let i = 0; i < processedArr.length; i++) {
      arrOfObjJSON[arrIndex].tags.push(processedArr[i])
    }
    fs.writeFileSync("data.json", JSON.stringify(arrOfObjJSON));
    return arrOfObjJSON[arrIndex];
  }

  static getTasksByTags(tag) {
    // console.log(tag);
    let arrOfObjJSON = (data);
    let arrContain = [];
    for (let i = 0; i < arrOfObjJSON.length; i++) {
      // console.log(arrOfObjJSON[i].tags);
      for (let j = 0; j < arrOfObjJSON[i].tags.length; j++) {
        if (arrOfObjJSON[i].tags[j] === tag) {
          arrContain.push(arrOfObjJSON[i])
        }
      }
    }
    return (arrContain.sort(function(a, b){return new Date(a.dateCreated) - new Date(b.dateCreated)}));
  }
}

module.exports = Model;
