const argv = process.argv;
const command = argv[2];
const parameter = argv[3];

var Controller = require('./controllerToDo.js')

for (var i = 0; i <= command.length - 1; i++) {
  if (command[i] === ':') {
    var filter = command.split(':');
  }
}

if (command === 'help' || command === undefined) {
  Controller.help() !== true;
}
else if (command === 'list') {
  Controller.list();
}
else if (command === 'add') {
  Controller.add(parameter);
}
else if (command === 'findById') {
  Controller.findById(parameter);
}
else if (command === 'delete') {
  Controller.delete(parameter);
}
else if (command === 'complete') {
  Controller.complete(parameter)
}
else if (command === 'uncomplete') {
  Controller.uncomplete(parameter)
}
else if (command === 'list:created') {
  Controller.listCreated(parameter);
}
else if (command === 'list:completed') {
  Controller.listComplete();
}
else if (command === 'tag') {
  Controller.addTag(argv);
}
else if (filter[0] === 'filter') {
  Controller.filter(filter[1]);
}

