let command = process.argv[2];
let param = process.argv[3];


let Controller = require('./controller/controller.js')

if (command === "help") {
  if (Controller.help() !== true) {
    console.log("Listing Help Error");
  }
} else if (command === "list") {
  if (Controller.list() !== true) {
    console.log("Listing Data Error")
  }
} else if (command === "add") {
  if (Controller.add(param) !== true) {
    console.log("Adding Data Error")
  }
} else if (command === "findById") {
  if (Controller.findById(param) !== true) {
    console.log("no Data Found")
  }
} else if (command === "delete") {
  if (Controller.delete(param) !== true) {
    console.log("no Data Found")
  }
} else if (command === "complete") {
  if (Controller.complete(param) !== true) {
    console.log("no Data Found")
  }
} else if (command === "uncomplete") {
  if (Controller.uncomplete(param) !== true) {
    console.log("no Data Found")
  }
} else {
  console.log("Command Not Found")
}