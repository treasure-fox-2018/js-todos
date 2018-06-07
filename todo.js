let Controller = require('./controller.js')

const argv = process.argv
const menu = argv[2]

if (menu === undefined) {
  Controller.showMenu()
} else if (menu === 'list') {
  Controller.showTask()
} else if (menu === 'add') {
  let newTask = argv[3]
  Controller.addTask(newTask)
}