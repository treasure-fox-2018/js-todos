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
        let dateCreated = new Date()
        let isCompleted  = '1'

        if (status === 'completed') {
            isCompleted = 1
        } else {
            isCompleted = 0
        }

        // create object and push into array of object
        let objTask = {'id': allTask.length + 1,'task' : task, 'status': isCompleted, 'dateCreated': dateCreated}
        allTask.push(objTask)

        // parse object into string type
        let taskToStr = JSON.stringify(allTask)

        //write data.json file
        fs.writeFileSync('data.json', taskToStr)

        console.log(`Berhasil menambahkan Task : ${task}`);
    }

    static modelFindTaskById (id) {
        let allTask = TaskModel.getAllData()
        let foundTask = { id: '', task: '' }
        let foundTaskId = 0

        for (let i = 0; i < allTask.length; i++) {
            let taskData = allTask[i]

            if (taskData.id == id) {
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

        console.log(`Anda berhasil menghapus task`);
    }

    static modelCompleteTask(id) {
        let allTask = TaskModel.getAllData()

        for (let i = 0; i < allTask.length; i++) {
            let taskData = allTask[i]

            if (taskData.id == id) {
                taskData.status = 1
            }
        }

        let taskToStr = JSON.stringify(allTask)

        //write data.json file
        fs.writeFileSync('data.json', taskToStr)

        console.log(`Anda berhasil menyelesaikan task ${allTask[id].task}`);
    }

    static modelUncompleteTask(id) {
        let allTask = TaskModel.getAllData()

        for (let i = 0; i < allTask.length; i++) {
            let taskData = allTask[i]

            if (taskData.id == id) {
                taskData.status = 0
            }
        }

        let taskToStr = JSON.stringify(allTask)

        //write data.json file
        fs.writeFileSync('data.json', taskToStr)

        console.log(`Anda mengubah status task ${allTask[id].task} menjadi belum selesai. Selesaikan segera ya. `);
    }

    static modelSortByOrder(order) {
        let sortedData = TaskModel.getAllData()

        if (order === 'asc') {
            sortedData.sort(function(a, b) {return new Date(a.dateCreated) - new Date(b.dateCreated)})
        } else if (order === 'desc') {
            sortedData.sort(function(a, b) {return new Date(b.dateCreated) - new Date(a.dateCreated)})
        }

        return sortedData
    }

    static modelSortByStatus(status) {
        let allTask = TaskModel.getAllData()
        let sortedData = []

        for (let i = 0; i < allTask.length; i++) {
            if (allTask[i].status === parseInt(status)) {
                sortedData.push(allTask[i])
            }
        }

        return sortedData
    }
}

module.exports = TaskModel












//
