const todoModel = require('../model/todo.js')

class Todo{

    static help(){
        var help = todoModel.help()
        return help
    }

    static list(){
        var listTodo = todoModel.readFile()
        var list = []
        for(var a = 0; a < listTodo.length; a++){
            list.push(`${listTodo[a].id} ${listTodo[a].task}`)
        }
        return list
    }

    static add(newTask){
        var addTask = todoModel.add(newTask)
        // return addTask
    }

    static findById(id){
        var listTodo = todoModel.readFile()
        for(let i = 0; i< listTodo.length; i++){
            if(listTodo[i].id==id){
                return listTodo[i]
            }
        }
    }

    static delete(id){
        var deleteTask = todoModel.delete(id)
        return deleteTask
    }

    static complete(id){
        var updateTask = todoModel.update(id,'complete')
        var listTask = todoModel.readFile()
        var list = []
        for(var a = 0; a < listTask.length; a++){
            list.push(`${listTask[a].id}. ${listTask[a].status} ${listTask[a].task}`)
        }
        return list
    }

    static uncomplete(id){
        var updateTask = todoModel.update(id,'uncomplete')
        var listTask = todoModel.readFile()
        var list = []
        for(var a = 0; a < listTask.length; a++){
            list.push(`${listTask[a].id}. ${listTask[a].status} ${listTask[a].task}`)
        }
        return list
    }

    static listCreate(filter){
        // var updateTask = todoModel.update(id,'complete')
        var listTask = todoModel.readFile()
        // var list = []
        if(filter=='asc'){
            for (var i = 0; i < listTask.length; i++) {
                for (var j = i; j < listTask.length; j++) {
                  if (listTask[i].date>listTask[j].date) {
                    var sort = listTask[i]
                    listTask[i]=listTask[j]
                    listTask[j]=sort
                  }
                }
            }
        }
        else if(filter=='desc'){
            for (var i = 0; i < listTask.length; i++) {
                for (var j = i; j < listTask.length; j++) {
                  if (listTask[i].date<listTask[j].date) {
                    var sort = listTask[i]
                    listTask[i]=listTask[j]
                    listTask[j]=sort
                  }
                }
            }
        }
        var list = []
        for(var a = 0; a < listTask.length; a++){
            list.push(`${listTask[a].id}. ${listTask[a].status} ${listTask[a].task}`)
        }
        return list;
    }

    static listUncomplete(filter){
        var listTask = todoModel.readFile()
        var uncomplete = []
        for(let i = 0; i < listTask.length; i++){
            if(listTask[i].status=='[ ]'){
                uncomplete.push(listTask[i])
            }
        }
        if(filter=='asc'){
            for (var i = 0; i < uncomplete.length; i++) {
                for (var j = i; j < uncomplete.length; j++) {
                  if (uncomplete[i].date>uncomplete[j].date) {
                    var sort = uncomplete[i]
                    uncomplete[i]=uncomplete[j]
                    uncomplete[j]=sort
                  }
                }
            }
        }
        else if(filter=='desc'){
            for (var i = 0; i < uncomplete.length; i++) {
                for (var j = i; j < uncomplete.length; j++) {
                  if (uncomplete[i].date<uncomplete[j].date) {
                    var sort = uncomplete[i]
                    uncomplete[i]=uncomplete[j]
                    uncomplete[j]=sort
                  }
                }
            }
        }
        var list = []
        for(var a = 0; a < uncomplete.length; a++){
            list.push(`${uncomplete[a].id}. ${uncomplete[a].status} ${uncomplete[a].task}`)
        }
        return list;
    }

    static listComplete(filter){
        var listTask = todoModel.readFile()
        var complete = []
        for(let i = 0; i < listTask.length; i++){
            if(listTask[i].status=='[ ]'){
                complete.push(listTask[i])
            }
        }
        if(filter=='asc'){
            for (var i = 0; i < complete.length; i++) {
                for (var j = i; j < complete.length; j++) {
                  if (complete[i].date>complete[j].date) {
                    var sort = complete[i]
                    complete[i]=complete[j]
                    complete[j]=sort
                  }
                }
            }
        }
        else if(filter=='desc'){
            for (var i = 0; i < complete.length; i++) {
                for (var j = i; j < complete.length; j++) {
                  if (complete[i].date<complete[j].date) {
                    var sort = complete[i]
                    complete[i]=complete[j]
                    complete[j]=sort
                  }
                }
            }
        }
        var list = []
        for(var a = 0; a < complete.length; a++){
            list.push(`${complete[a].id}. ${complete[a].status} ${complete[a].task}`)
        }
        return list;
    }

    static addTag(id,tag){
        var addTags = todoModel.addTag(id,tag)
        var findId = Todo.findById(id)
        return findId
    }

    static filter(filter){
        var listTask = todoModel.readFile()
        var listFilter = []
        var todoFilter = []
        for(let i = 0; i < listTask.length; i++){
            if(listTask[i].tag.indexOf(filter)!==-1){
                listFilter.push(listTask[i])
            }
        }

        for(let i = 0; i < listFilter.length; i++){
            todoFilter.push(`${listFilter[i].id}. ${listFilter[i].task} [${listFilter[i].tag}]`)
        }
        return todoFilter
    }
}

module.exports = Todo