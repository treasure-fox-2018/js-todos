const ControllerTodo = require('./controller/controllerTodo')

const command = process.argv[2]
const argument = process.argv[3]
const argument_2 = process.argv[4]

if (!command) {
  ControllerTodo.help()
}
else {
  switch (command) {
    case 'help': ControllerTodo.help(); break;
    case 'list': ControllerTodo.list(); break;
    case 'add': ControllerTodo.add(argument); break;
    case 'findById': ControllerTodo.findById(Number(argument)); break;
    case 'delete': ControllerTodo.delete(Number(argument)); break;
    case 'complete': ControllerTodo.complete(Number(argument)); break;
    case 'uncomplete': ControllerTodo.uncomplete(Number(argument)); break;
    case 'list:created': ControllerTodo.listCreated(argument); break;
    case 'list:completed': ControllerTodo.listCompleted(); break;
    case 'tag': ControllerTodo.tagList(Number(argument), argument_2); break;
    case 'filter:': ControllerTodo.filterByTag(argument); break;
    default: console.log('Silahkan coba lagi.')
  }
}