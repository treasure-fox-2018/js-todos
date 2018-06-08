const Model = require('./modelTodo.js')
const View = require('./viewTodo')


class Controller_todo{
    static showMenu(){
        var listMenu = Model.showMenu()
        View.showMenu(listMenu)
    }

    static addTask(toAdd){
        var list = this.showListTugas()
        var taskToAdd = Model.addTask(toAdd)
        View.showListTugas(list)
    }
    
    static showListTugas(){
        var listTugas = Model.showListTugas()
        var list = View.showListTugas(listTugas)
        return list
    }
    
    static findById(byId){
        var idfounded = Model.findById(byId)
        View.showId(idfounded)
    }
    
    static delete(byId){
        var deleted = Model.delete(byId)
        var listTugas = Model.showListTugas(deleted)
        View.showListTugas(listTugas)
    }

    static showUpdateList(){
        var updateList = Model.showUpdateList()
        View.showUpdateList(updateList)
        return updateList
    }

    static completeTask(num){
        var done = Model.completeTask(num)
        this.showUpdateList()
        // View.showUpdateList(updateList)
    }

    static uncompleteTask(num){
        var notYet = Model.uncompleteTask(num)
        this.showUpdateList()
    }

    static createdASC(){
        var sorted = Model.createdASC()
        View.showReq(sorted)
    }

    static createdDSC(){
        var sorted = Model.createdDSC()
        View.showReq(sorted)
    }
}

// Controller_todo.createdDSC()
module.exports = Controller_todo