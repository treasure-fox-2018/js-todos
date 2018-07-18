let Controller = require('./Controller/todoController.js')
let Control = new Controller()
let input = process.argv[2]

if (input === 'help' || input === undefined) {
  Control.viewHelp()
}
if (input === 'list') {
  Control.viewList()
}
if (input === 'add') {
  Control.addTask()
}
if (input === 'findById') {
  Control.findList(process.argv[3])
}

if (input === 'delete') {
  Control.deleteTask(process.argv[3])
}

if (input === 'complete') {
  // Control.deleteTask(process.argv[3])
  Control.completeList(process.argv[3])
}

if (input === 'uncomplete') {
  // Control.deleteTask(process.argv[3])
  Control.unCompleteList(process.argv[3])
}

if (input === 'list:created') {
  Control.listCreate(process.argv[3])

}
if (input === 'list:completed') {
  // Control.listCreate(process.argv[3])
  Control.listComplete(process.argv[3])

}

if (input === 'tag') {
  Control.addTag(process.argv[3])
}

if (input === 'filter') {
  Control.filter(process.argv[3])
}
