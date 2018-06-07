const argv = process.argv.slice(2)
const command = argv[0]
const args = argv.slice(1)

const TodoController = require('./controllers/TodoController')

switch(command) {
  case 'help':
    TodoController.showHelp();
    break;
  case 'list':
    TodoController.showList();
    break;
  case 'list:created':
    TodoController.showSortedList(command, args);
    break;
  case 'list:completed':
    TodoController.showSortedList(command, args);
    break;
  case 'add':
    TodoController.addList(command, args);
    break;
  case 'findById':
    TodoController.findById(args);
    break;
  case 'delete':
    TodoController.deleteList(command, args);
    break;
  case 'complete':
    TodoController.completeState(command, args);
    break;
  case 'uncomplete':
    TodoController.completeState(command, args);
    break;
  case 'tag':
    TodoController.addTag(command, args);
    break;
  case 'filter':
    TodoController.filterTag(command, args);
    break;
  default:
    TodoController.showHelp();
}
