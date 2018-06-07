const fs = require('fs')
let Controller = require('./controller.js')
let taskData = JSON.parse(fs.readFileSync('./data.json'))

class Model {
  // create
  static writeTask(newTask, newStatus) {
    // tambah objek baru
    let newTaskObj = {"id": taskData.length+1, "status": newStatus, "task": newTask}
    taskData.push(newTaskObj)

    // ubah objek menjadi string
    let newTaskStr = JSON.stringify(taskData)

    // fs write data
    fs.writeFileSync('./data.json', newTaskStr)

    console.log(`Added ${newTask} to your TODO list...`)
  }
  
  // read
  static taskList() {
    let taskStr = ''
    for (let i = 0; i < taskData.length; i++) {
      taskStr += (`${taskData[i].id}. ${taskData[i].status} ${taskData[i].task}\n`)
    }
    return taskStr
  }

  static getTaskById(targetId) {
    let index = targetId-1
    console.log (`${taskData[index].id}. ${taskData[index].status} ${taskData[index].task}`)
  }

  // update
  static completeTask(targetId) {
    let index = targetId-1
    taskData[index].status = "[x]"

    // ubah objek menjadi string
    let newTaskStr = JSON.stringify(taskData)

    // fs write data
    fs.writeFileSync('./data.json', newTaskStr)

    console.log(Model.taskList())
  }

  static uncompleteTask(targetId) {
    let index = targetId-1
    taskData[index].status = "[ ]"

    // ubah objek menjadi string
    let newTaskStr = JSON.stringify(taskData)

    // fs write data
    fs.writeFileSync('./data.json', newTaskStr)

    console.log(Model.taskList())
  }

  // delete
  static deleteTask(targetId) {
    let index = targetId-1
    let deletedTask = []
    for (let i = 0; i < taskData.length; i++) {
      if (taskData[i].id == index) {
        deletedTask.push(taskData[index].task)
        taskData.splice(index, 1)
      }
    }
    // ubah objek menjadi string
    let newTaskStr = JSON.stringify(taskData)

    // fs write data
    fs.writeFileSync('./data.json', newTaskStr)

    console.log(`Deleted ${deletedTask} from your TODO list...`)
  }
}
// console.log(Model.writeTask())
module.exports = Model