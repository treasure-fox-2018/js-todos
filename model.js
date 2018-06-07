const fs = require('fs')
let Controller = require('./controller.js')
let taskData = JSON.parse(fs.readFileSync('./data.json'))

class Model {
  // create
  static writeTask(newTask) {
    // tambah objek baru
    let newTaskObj = {"id": taskData.length+1, "task": newTask}
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
      taskStr += (`${taskData[i].id}. ${taskData[i].task}\n`)
    }
    return taskStr
  }

  // update

  // delete

}
// console.log(Model.writeTask())
module.exports = Model