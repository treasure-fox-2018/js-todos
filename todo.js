let command = process.argv[2];
let tag = "";
let checkFilter = command.split(":");
if (checkFilter[0] === "filter") {
  command = checkFilter[0]
  tag = checkFilter[1]
}
let param = process.argv[3];
let listTag = process.argv.slice(4)
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
} else if (command === "list:created") {
  Controller.sorting("createDate", param)
} else if (command === "list:completed") {
  Controller.sorting("createDate", param, "completed")
} else if (command === "tag") {
  Controller.addTag(param, listTag)
} else if (command === "filter") {
  Controller.filterTag (tag) 
} else Controller.wrongParam()