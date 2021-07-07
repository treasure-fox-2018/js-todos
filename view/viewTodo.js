const fs = require("fs");

class ViewTodo {
  static help(listmenu) {
    for (let i = 1; i < listmenu.length; i++) {
      console.log(`${i}. ${listmenu[i]}`);
    }
  }

  static list(todoList) {
    console.log("My TODO List : ");
    for (let i = 0; i < todoList.length; i++) {
      console.log(
        `${todoList[i].id}. [${todoList[i].complete_task}] ${
          todoList[i].task_content
        }`
      );
    }
    return true;
  }

  static add(task_content) {
    console.log(`Todo list add successfull`);
  }

  static findById(task_id) {
    let findId = task_id;
    for (let i = 0; i < findId.length; i++) {
      console.log(`${findId[i].id}. ${findId[i].task_content}`)
    }
  }

  static uncomplete () {
    console.log('Uncomplete successfull')
  }

  static delete(delId) {
    console.log('Deleted successfull')
  }

  static listCreated (list_Created) {
    let createdList = list_Created

    for (let i = 0; i < createdList.length; i++) {
      console.log(createdList[i])
    }
  }

  static listCompleted (list_completed) {
    for (let i = 0; i < list_completed.length; i++) {
      if (list_completed[i].complete_task[0] === "X") {
        console.log(list_completed[i].task_content)
      }
    }
  }

  static tagList (taskContent, nameTag) {
    console.log(`Tagged task ${taskContent} with by tags: ${nameTag}`)
  }

  static filterByTag (filter_tag) {
    let filterTag = filter_tag
    for (let i = 0; i < filterTag.length; i++) {
      console.log(`${filterTag[i].id}. ${filterTag[i].task_content} [${filterTag[i].tag}]`)
    }
  }
}
module.exports = ViewTodo;
