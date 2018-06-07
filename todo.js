'use strict'

let Controller = require('./TaskController.js')

// Get input from command line
let command = process.argv;
let isCommandEmpty = command[2] === undefined
let isCommandHelp = command[2] === 'help'
let isCommandList = command[2] === 'list'
let isCommandAdd = command[2] === 'add'
let isCommandFind = command[2] === 'find'
let isCommandDelete = command[2] === 'delete'
let isCommandComplete = command[2] === 'complete'
let isCommandUncomplete = command[2] === 'uncomplete'


if (isCommandList) {
    Controller.showAllTask()
} else if (isCommandAdd) {
    let content = command[3]
    let status = command[4]
    Controller.addTask(content, status)
} else if (isCommandFind) {
    let id = command[3]
    Controller.findTaskById(id)
} else if (isCommandHelp || isCommandEmpty) {
    Controller.showHelp()
} else if (isCommandDelete) {
  let id = command[3]
  Controller.deleteTask(id)
} else if (isCommandComplete) {
  let id = command[3]
  Controller.completeTask(id)
} else if (isCommandUncomplete) {
  let id = command[3]
  Controller.uncompleteTask(id)
} else {
    console.log('Invalid Command')
}
