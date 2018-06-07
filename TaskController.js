'use strict'

const View = require('./TaskView.js')
const Model = require('./TaskModel.js')

class TaskController {
    static showAllTask () {
        let allTask = Model.getAllData()

        View.printAllTask(allTask)
    }

    static addTask (content, status) {
        Model.writeTask(content, status)
    }

    static findTaskById (id) {
        let task = Model.modelFindTaskById(id)
        View.viewFoundTask(task)
    }

    static showHelp () {
        View.viewShowHelp()
    }

    static deleteTask(id) {
        Model.modelDeleteTask(id)
    }

    static completeTask(id) {
        Model.modelCompleteTask(id)
    }

    static uncompleteTask(id) {
        Model.modelUncompleteTask(id)
    }

    static generateID() {
        let kamusAngka = '123456789'
        let kamusHuruf = 'abc'

        let id = (kamusAngka.charAt(Math.floor(Math.random() * 9))) + (kamusAngka.charAt(Math.floor(Math.random() * 9)))

        return id;
    }
}

module.exports = TaskController








//
