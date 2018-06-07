'use strict'

let Controller = require('./TaskController.js')

// Get input from command line
let command = process.argv;
let isCommandEmpty = command[2] === undefined
let isCommandHelp = command[2] === 'help'
let isCommandAdd = command[2] === 'add'
let isCommandFind = command[2] === 'find'
let isCommandDelete = command[2] === 'delete'
let isCommandComplete = command[2] === 'complete'
let isCommandUncomplete = command[2] === 'uncomplete'
let isCommandList = command[2] === 'list'
let isCommandListCompleted = command[2] === 'list:completed'
let isCommandListUncompleted = command[2] === 'list:uncomplete'
let isCommandListCreated = command[2] === 'list:created'
let isCommandAddTag = command[2] === 'tag'
let isFilter = command[2].slice(0, 6)
let filterKey = command[2].slice(7)
let isCommandFilter = isFilter === 'filter'

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
} else if (isCommandListCreated) {
    let order = command[3]
    Controller.sortByOrder(order)
} else if (isCommandListCompleted) {
    Controller.sortByStatus(1)
} else if (isCommandListUncompleted) {
    Controller.sortByStatus(0)
} else if (isCommandAddTag) {
    let id = command[3]
    let tag = command.slice(4)
    Controller.addTagById(id, tag)
} else if (isCommandFilter) {
    Controller.findByFilterTag(filterKey)
} else {
    console.log('Invalid Command')
}













//
