const ControllerTodo = require('./controller/controllerTodo')

//untuk mengecek help
const help = process.argv[2]
//untuk mengecek lis
const list = process.argv[2]
//untuk mengakses add todo list
const add = process.argv[2] // add = 'add'
//untuk mengakses find ID
const id = process.argv[2] // id = "id"
const idNumber = process.argv[3] // idNumber todo list
const task_name = process.argv[3] //add todo list
//untuk mengakses delete
const deleteContent = process.argv[2] // delete == "delete"
const idDelete = process.argv[3]
//untuk mengakse complete
const complete = process.argv[2]
const idComplete = process.argv[3]

//untuk mengakse uncomplete
const uncomplete = process.argv[2]
const idUncomplete = process.argv[3]

if (help === 'help') {
  ControllerTodo.help()
}

if (list === 'list') {
  ControllerTodo.list()
}

if (add === 'add') {
  ControllerTodo.add(task_name)
}

if (id === 'findById') {
  ControllerTodo.findById(Number(idNumber))
}

if (deleteContent === 'delete') {
  ControllerTodo.delete(Number(idDelete))
}

if (complete === 'complete') {
  ControllerTodo.complete(Number(idComplete))
}

if (uncomplete === 'uncomplete') {
  ControllerTodo.uncomplete(Number(idUncomplete))
}