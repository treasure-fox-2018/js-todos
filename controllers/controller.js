const Model = require('../models/model')
const View = require('../views/view')

class Controller{
    static help(){
        View.help()
    }

    static list(){
        let students = Model.list()
        View.list(students)
    }

    static add(task){
        Model.add(task)
        View.add(task)
    }

    static findById(id){
        let findId = Model.findById(id)
        View.findById(findId)
    }

    static delete(id){
        let deleteTask = Model.delete(id)
        View.delete(deleteTask)
    }

    static complete(id){
        let students = Model.complete(id)
        View.complete(students)
    }

    static unComplete(id){
        let students = Model.unComplete(id)
        View.unComplete(students)
    }

    static listCreated(value){
        let students = Model.listCreated(value)
        View.listCreated(students)
    }

    static listCompleted(value){
        let students = Model.listCompleted(value)
        View.listCompleted(students)
    }

    static tag(id, tagName){
        let tags = Model.tag(id, tagName)
        View.tag(tags)
    }

    static filter(value){
        let filtered = Model.filter(value)
        View.filter(filtered)
    }
}

module.exports = Controller