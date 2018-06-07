'use strict'

let Model = require('./todoModel.js')
let View = require('./todoView.js')

class Controller{
    static list(){
        let model = Model.list()
        let list = View.list(model)
    }

    static add(newTask){
       let adding = Model.add(newTask)
       let result = View.add(newTask, adding)
    }

    static findById(id){
        let find = Model.findById(id)
        let result = View.findById(find)
    }

    static delete(id){
        let remove = Model.delete(id)
        let result = View.delete(remove)
    }

    static complete(id){
        let addStat = Model.complete(id)
        let result = View.complete(addStat)
    }

    static uncomplete(id){
        let rmvStat = Model.uncomplete(id)
        let result = View.uncomplete(rmvStat)
    }

    static listByOrder(option){
        let model = Model.list()
        let list = View.listByOrder(model, option)
    }

    static addTag(tag, id){
        let adding = Model.addTag(tag, id)
        let result = View.addTag(adding)
    }

    static filter(tag){
        let find = Model.filter(tag)
        let result = View.filter(find)
    }
}

module.exports = Controller