'use strict'

let todoModel = require('./todoModel.js')
let todoView = require('./todoView.js')

class Controller{
    static list(){
        let todoModel = new todoModel.list()
        let list = new todoView(todoModel)
    }

    static add(newTask){
        let todoModel = new todoModel.list()
        let todoModelNew = new todoModel.list()
        let newTask = {id: todoModel+1, task: newTask}
        todoModelNew.push(newTask)

        let add = new todoModel.write(todoModel)
        let todoView = new todoView.add(todoModel,todoModelNew )
    }
}

module.exports = Controller