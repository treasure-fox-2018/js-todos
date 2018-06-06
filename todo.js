const ControllerTodo = require('./controller/controllerTodo')

const help = process.argv[2]
const list = process.argv[2]

// let tes = ControllerTodo.help()
// console.log(tes)

if (help === 'help') {
  ControllerTodo.help()
}

if (list === 'list') {
  ControllerTodo.list()
}

