const fs = require('fs')
let Controller = require('./controller.js')
let taskData = JSON.parse(fs.readFileSync('./data.json'))

class Model {
  // create
  static writeTask(newTask, newStatus) {
    // tambah objek baru
    let date = new Date()
    newStatus = "[ ]"
    let newTaskObj = {"id": taskData.length+1, "status": newStatus, "task": newTask, "created": date}
    taskData.push(newTaskObj)

    // ubah objek menjadi string
    let newTaskStr = JSON.stringify(taskData)

    // fs write data
    fs.writeFileSync('./data.json', newTaskStr)
  }

  static completedList() {
    let completedArr = []
    for (let i = 0; i < taskData.length; i++) {
      if (taskData[i].status === "[x]") {
        completedArr.push(taskData[i])
      }
    }
    let completedStr = ''
    for (let i = 0; i < completedArr.length; i++) {
      completedStr += (`${completedArr[i].id}. ${completedArr[i].status} ${completedArr[i].task} ${completedArr[i].created}\n`)
    }
    console.log(completedStr)
    return completedStr
  }

  static filteredList(filter) {
    let filteredArr = []
    for (let i = 0; i < taskData.length; i++) {
      if (taskData[i].tag === filter) {
        filteredArr.push(taskData[i])
      }
    }
    let filteredStr = ''
    for (let i = 0; i < filteredArr.length; i++) {
      filteredStr += (`${filteredArr[i].id}. ${filteredArr[i].status} ${filteredArr[i].task} ${filteredArr[i].created}\n`)
    }
    console.log(filteredArr)
    return filteredStr
  }
  
  // read
  static taskList() {
    let taskStr = ''
    for (let i = 0; i < taskData.length; i++) {
      taskStr += (`${taskData[i].id}. ${taskData[i].status} ${taskData[i].task} ${taskData[i].created}\n`)
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
  }

  static uncompleteTask(targetId) {
    let index = targetId-1
    taskData[index].status = "[ ]"

    // ubah objek menjadi string
    let newTaskStr = JSON.stringify(taskData)

    // fs write data
    fs.writeFileSync('./data.json', newTaskStr)
  }

  static sortDate(sort) {
    if (sort === 1) {
      for (var a = 1; a < taskData.length; a++) {
        for (var b = 0; b < taskData.length; b++) {
          if (taskData[a].created < taskData[b].created) {
            var move = taskData[a]
            taskData[a] = taskData[b]
            taskData[b] = move
          }
        }
      }
      // console.log(Model.taskList())
    } else {
      for (var a = 1; a < taskData.length; a++) {
        for (var b = 0; b < taskData.length; b++) {
          if (taskData[a].created > taskData[b].created) {
            var move = taskData[a]
            taskData[a] = taskData[b]
            taskData[b] = move
          }
        }
      }
      // console.log(Model.taskList())
    }
  }

  static tagSystem(targetId, tagName) {
    let index = targetId-1
    if (taskData[index].tag === undefined) {
      taskData[index].tag = []
    }
    for (let i = 0; i < tagName.length; i++) {
      taskData[index].tag.push(tagName[i])
    }

    // ubah objek menjadi string
    let newTaskStr = JSON.stringify(taskData)

    // fs write data
    fs.writeFileSync('./data.json', newTaskStr)
    console.log(`Tagged task ${taskData[index].task} with tags: ${tagName}`)
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
// console.log(taskData)
module.exports = Model