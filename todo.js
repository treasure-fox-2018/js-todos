let Controller = require('./controller.js')

const argv = process.argv
const menu = argv[2]

if (menu === undefined) {
  Controller.showMenu()

} else if (menu === 'list') {
  Controller.showTask()

} else if (menu === 'add') {
  let newTask = argv[3]
  let newStatus = argv[4]
  Controller.addTask(newTask, newStatus)
  Controller.showCompleteWrite(newTask)

} else if (menu === 'findById') {
  let targetId = argv[3]
  Controller.findTaskById(targetId)

} else if (menu === 'delete') {
  let targetId = argv[3]
  Controller.deleteTask(targetId)

} else if (menu === 'complete') {
  let targetId = argv[3]
  Controller.completeTask(targetId)
  Controller.showCompleteTask(targetId)

} else if (menu === 'uncomplete') {
  let targetId = argv[3]
  Controller.uncompleteTask(targetId)
  Controller.showUncompleteTask(targetId)

} else if (argv[3] === 'asc') {
  let sort = 1
  Controller.sortDate(sort)
  Controller.showSortDate(sort)
} else if (argv[3] === 'desc') {
  let sort = 2
  Controller.sortDate(sort)
  Controller.showSortDate(sort)

} else if (menu === 'list:completed') {
  Controller.completedList()

} else if (menu === 'tag') {
  let targetId = argv[3]
  let tagName = []
  for (let i = 4; i < argv.length; i++) {
    if (argv[i] != undefined) {
      tagName.push(argv[i])
    }
  }
  Controller.tagSystem(targetId, tagName)

}