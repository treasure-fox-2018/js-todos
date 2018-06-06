const fs = require("fs");
const ModelTodo = require("../model/modelTodo");

class ViewTodo {
  static help() {
    let helpList = ModelTodo.help();
    for (let i = 1; i < helpList.length; i++) {
      console.log(`${i}. ${helpList[i]}`);
    }
  }

  static list() {
    let listContent = ModelTodo.list();
    console.log("My TODO List : ");
    for (let i = 0; i < listContent.length; i++) {
      console.log(
        `${listContent[i].id}. [${listContent[i].complete_task}] ${
          listContent[i].task_content
        }`
      );
    }
    return true;
  }

  static add(task_content) {
    console.log(`Added ${task_content} to your TODO list. `);
  }

  static findById(id) {
    let findContent = ModelTodo.findById(id);

    for (let i = 0; i < findContent.length; i++) {
      if (findContent[i].id === id) {
        console.log(`${findContent[i].id}. ${findContent[i].task_content}`);
      }
    }
  }

  static delete(id) {
    let deleteContent = ModelTodo.delete(id);

    for (let i = 0; i < deleteContent.length; i++) {
      if (deleteContent[i].id === id) {
        console.log(
          `Deleted ${deleteContent[i].task_content} from your TODO list`
        );
        delete deleteContent[i].id;
        delete deleteContent[i].task_content;
      }
    }

    fs.writeFileSync("./data.json", JSON.stringify(deleteContent));
    return true;
  }

  static complete(id) {
    let completeContent = ModelTodo.complete();

    for (let i = 0; i < completeContent.length; i++) {
      if (completeContent[i].id === id) {
        completeContent[i].complete_task.push("X");
      }
    }

    fs.writeFileSync("./data.json", JSON.stringify(completeContent));
    return true;
  }

  static uncomplete(id) {
    let uncompleteContent = ModelTodo.uncomplete()
    
    for (let i = 0; i < uncompleteContent.length; i++) {
      if (uncompleteContent[i].id === id) {
        uncompleteContent[i].complete_task.shift(1)
      }
    }

    fs.writeFileSync("./data.json", JSON.stringify(uncompleteContent));
    return true;
  }
}

module.exports = ViewTodo;
