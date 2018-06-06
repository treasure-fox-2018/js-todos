let command = process.argv[2];
let param = process.argv[3];

let Controller = require('./controller/controller.js')

if (command === "help") {
  console.log("node todo.js list");
  console.log("node todo.js add <task_content>");
  console.log("node todo.js findByID <task_id>");
  console.log("node todo.js delete <task_id>");
  console.log("node todo.js complete <task_id>");
  console.log("node todo.js uncomplete <task_id>")
}

if (command === "list") {
  if (Controller.list() !== true) {
    console.log("Listing Data Error")
  }
}