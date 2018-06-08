const fs = require("fs");

class ModelTodo {
  static help() {
    let help = [
      "node todo.js",
      "node todo.js help",
      "node todo.js list",
      "node todo.js add <task_content>",
      "node todo.js findById <task_id>",
      "node todo.js delete <task_id>",
      "node todo.js complete <task_id>",
      "node todo.js uncomplete <task_id>",
      "node todo.js list:created",
      "node todo.js list:completed",
      "node todo.js tag <task_id> <tag_name>",
      "node todo.js filter:<task_id>"
    ];
    return help;
  }

  static list() {
    const exportData = require("../data.json");
    return exportData;
  }

  static add(task_content) {
    let data = ModelTodo.list();
    let date = new Date().toLocaleDateString();
    let newTask = {
      id: data.length + 1,
      task_content: task_content,
      complete_task: [],
      date: date,
      tag: []
    };

    data.push(newTask);
    fs.writeFileSync("./data.json", JSON.stringify(data));
  }

  static findById(task_id) {
    let taskId = ModelTodo.list(task_id);
    let findId = []
    for (let i = 0; i < taskId.length; i++) {
      if (taskId[i].id === task_id) {
        findId.push(taskId[i])
      }
    }
    return findId
  }

  static delete(delId) {
    let deletedId = ModelTodo.list(delId);
    for (let i = 0; i < deletedId.length; i++) {
      if (deletedId[i].id === delId) {
        deletedId.splice(i, 1);
        fs.writeFileSync("./data.json", JSON.stringify(deletedId));
      }
    }
  }

  static complete(compId) {
    let completeId = ModelTodo.list(compId);
    for (let i = 0; i < completeId.length; i++) {
      if (completeId[i].id === compId) {
        completeId[i].complete_task.push("X");
      }
    }

    fs.writeFileSync("./data.json", JSON.stringify(completeId));
    return true;
  }

  static uncomplete(uncompId) {
    let uncompleteId = ModelTodo.list(uncompId);
    for (let i = 0; i < uncompleteId.length; i++) {
      if (uncompleteId[i].id === uncompId) {
        uncompleteId[i].complete_task.shift(1);
      }
    }

    fs.writeFileSync("./data.json", JSON.stringify(uncompleteId));
    return true;
  }

  static listCreated(list_Created) { //parameter asc/desc
    let list_created = ModelTodo.list(); //data
    let createdList = []
    if (list_Created === "asc") {
      list_created.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });

      for (let i = 0; i < list_created.length; i++) {
        createdList.push(list_created[i].task_content)
      }
    } else if (list_Created === "desc") {
      list_created.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      for (let i = 0; i < list_created.length; i++) {
        createdList.push(list_created[i].task_content)
      }
    } else {
      for (let i = 0; i < list_created.length; i++) {
        createdList.push(list_created[i].task_content)
      }
    }
    return createdList
  }

  static listCompleted() {
    let list_completed = ModelTodo.list();
    return list_completed
  }

  static tagList(idTag, nameTag) {
    let tag_list = ModelTodo.list();
    for (let i = 0; i < tag_list.length; i++) {
      if (tag_list[i].id === idTag) {
        var taskContent = tag_list[i].task_content;
        tag_list[i].tag.push(nameTag);
      }
    }
    let task = taskContent;
    fs.writeFileSync("./data.json", JSON.stringify(tag_list));
    return task;
  }

  static filterByTag(filter_Tag) {
    let filterTag = ModelTodo.list()
    let resultTag = []
    for (let i = 0; i < filterTag.length; i++) {
      if (filterTag[i].tag[0] === filter_Tag) {
        resultTag.push(filterTag[i])
      }
    }
    return resultTag
  }
}
module.exports = ModelTodo;
