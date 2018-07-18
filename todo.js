const controller = require("./controller.js");

let input = process.argv;

let command = input[2];

let datum = input[3];

let arr = input.slice(4);

if (!command || command === "help") {
  controller.help();
} else if (command === "list") {
  controller.list();
} else if (command === "add") {
  controller.add(datum);
} else if (command === "findById") {
  controller.find(datum);
} else if (command === "delete") {
  controller.delete(datum);
} else if (command === "complete") {
  controller.check(datum);
} else if (command === "uncomplete") {
  controller.uncheck(datum);
} else if (command === "list:created") {
  controller.listOutstanding(datum);
} else if (command === "list:completed") {
  controller.listCompleted(datum);
} else if (command === "tag") {
  controller.assignTag(datum, arr);
} else if (command.split(":")[0] === "filter") {
  let tag = command.split(":")[1];
  controller.getTasksByTags(tag);
}

module.exports = datum;
