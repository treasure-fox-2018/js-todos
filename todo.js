const {ToDoController} = require('./Controllers/ToDoController.js')

const argv = process.argv
const command = argv[2];
const firstInput = argv[3];
// const secondInput = argv[4];
// const thirdInput = argv[5];



if (!command || command === "help") {
  ToDoController.help();
} else if(command === "list") {
  ToDoController.list();
} else if(command === "add") {
  ToDoController.add(firstInput);
} else if (command === 'findById') {
  ToDoController.findById(firstInput);
} else if (command === 'delete') {
  ToDoController.delete(firstInput);
} else if (command === 'complete') {
  ToDoController.completeTask(firstInput);
} else if (command === 'uncomplete') {
  ToDoController.uncompleteTask(firstInput);
}
