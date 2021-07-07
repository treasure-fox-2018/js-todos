const Controller = require('./Controllers/ToDo.js');

const command = process.argv[2];
const allInput = process.argv.slice(3)
const firstInput = process.argv[3];
// const secondInput = process.argv[4];
// const thirdInput = process.argv[5];


if (!command || command === 'help') {
  Controller.help();
} else if(command === 'list') {
  Controller.list();
} else if(command === 'add') {
  Controller.add(allInput);
} else if (command === 'findById') {
  Controller.findById(firstInput);
} else if (command === 'delete') {
  Controller.delete(firstInput);
} else if (command === 'complete') {
  Controller.completeTask(firstInput);
} else if (command === 'uncomplete') {
  Controller.uncompleteTask(firstInput);
} else if (command === 'list:sort'){
  if (firstInput === undefined || firstInput === 'asc'){
    Controller.sortDate('asc');
  } else if (firstInput === 'des'){
    Controller.sortDate('des');
  }
} else if (command === 'list:completed'){
  if (firstInput === undefined || firstInput === 'asc') {
    Controller.completedTasks('asc');
  } else if (firstInput === 'des') {
    Controller.completedTasks('des');
  }
} else if (command === 'tag'){
    Controller.tag(allInput);
} else if (command === 'filter'){
    Controller.filter(firstInput)
} else {
  Controller.help();
}
