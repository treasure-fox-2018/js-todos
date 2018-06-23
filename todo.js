const Controller = require('./controller.js');

let command = process.argv[2];
let request = process.argv[3];
let tag = process.argv[4];

if (command == 'help') {
  Controller.help()
}else if (command == 'list') {
  Controller.list()
}else if (command == 'add') {
  Controller.add(request)
}else if (command == 'findById') {
  Controller.findId(request)
}else if (command == 'delete') {
  Controller.deleteList(request)
}else if (command == 'complete') {
  Controller.completeData(request)
}else if (command == 'uncomplete') {
  Controller.uncompleteData(request)
}else if (command == 'list:outstanding') {
  Controller.listCreated(request)
}else if (command == 'list:completed') {
  Controller.listCompleted(request)
}else if (command == 'tag') {
  Controller.addTag(request,tag)
}else if (command == 'filter:hobby') {
  Controller.filterHobby()
}
