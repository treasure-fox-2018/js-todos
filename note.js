import { readFile } from "fs";

----> Todo.js
if (command === "add") {
  Controller.add(task_name)
}

----> Controller.js

class Controller {
  static add (task_name) {
    Model.add(task_name)
    let display = Model.add(task_name)
    View.add()
  }
}

----> Model.js

class Model {
  static add(task_name) {
    readFile
  }
}

----> View 

class view {
  static add(task_name) {
    
  }
}