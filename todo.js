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

} else if (menu === 'findById') {
  let targetId = argv[3]
  Controller.findTaskById(targetId)

} else if (menu === 'delete') {
  let targetId = argv[3]
  Controller.deleteTask(targetId)

} else if (menu === 'complete') {
  let targetId = argv[3]
  Controller.completeTask(targetId)

} else if (menu === 'uncomplete') {
  let targetId = argv[3]
  Controller.uncompleteTask(targetId)

}