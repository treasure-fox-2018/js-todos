'use strict'

const fs = require('fs')
const TaskController = require('./TaskController.js')

class TaskModel {
    static getAllData() {
        const todoData = JSON.parse(fs.readFileSync('data.json', 'utf8'))
        return todoData
    }

    static writeTask (task, status) {
        // get data from json file
        let allTask = TaskModel.getAllData()
        // let id  = TaskController.generateID()
        let isCompleted = '1'

        if (status === 'completed') {
            isCompleted = '1'
        } else {
            isCompleted = '0'
        }

        // create object and push into array of object
        let objTask = {'id': '000','task' : task, 'status': isCompleted}
        allTask.push(objTask)

        // parse object into string type
        let taskToStr = JSON.stringify(allTask)

        //write data.json file
        fs.writeFileSync('data.json', taskToStr)
    }

    static modelFindTaskById (id) {
        let allTask = TaskModel.getAllData()
        let foundTask = { id: '', task: '' }
        let foundTaskId = 0

        for (let i = 0; i < allTask.length; i++) {
            let taskData = allTask[i]

            if (taskData.id === id) {
                foundTask.id = taskData.id
                foundTask.task = taskData.task
                foundTask.index = i
            }
        }

        return foundTask
    }

    static modelDeleteTask (id) {
        let allTask = TaskModel.getAllData()
        let foundDeleteTask = TaskModel.modelFindTaskById(id)

        console.log(foundDeleteTask);
        allTask.splice(foundDeleteTask.index, 1)

        let taskToStr = JSON.stringify(allTask)

        //write data.json file
        fs.writeFileSync('data.json', taskToStr)
    }

    static modelCompleteTask(id) {
        let allTask = TaskModel.getAllData()

        for (let i = 0; i < allTask.length; i++) {
            let taskData = allTask[i]

            if (taskData.id === id) {
                taskData.status = "1"
            }
        }

        let taskToStr = JSON.stringify(allTask)

        //write data.json file
        fs.writeFileSync('data.json', taskToStr)
    }

}

module.exports = TaskModel
