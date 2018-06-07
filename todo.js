var Controller = require('./controller.js')

// set argv
let command = process.argv[2];
let request = process.argv[3];

// create
if (command == 'help') {
  Controller.help();
}else if (command == 'list') {
  Controller.listData();
}else if (command == 'add') {
  Controller.addtoDo(request);
}else if (command == 'findById') {
  Controller.findId(request)
}else if (command == 'delete') {
  Controller.deleteId(request)
}else if (command == 'complete') {
  Controller.completeTask(request)
}else if (command === 'uncomplete') {
  Controller.uncompleteTask(request)
}
