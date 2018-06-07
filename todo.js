let command = process.argv[2];
let param = process.argv[3];


let Controller = require('./controller/controller.js')

if (command === "help") {
  Controller.help();
} else if (command === "list") {
  Controller.list()
} else if (command === "add") {
  Controller.add(param)
} else if (command === "findById") {
  Controller.findById(param)
} else if (command === "delete") {
  Controller.delete(param)
} else if (command === "complete") {
  Controller.complete(param)
} else if (command === "uncomplete") {
  Controller.uncomplete(param)
}