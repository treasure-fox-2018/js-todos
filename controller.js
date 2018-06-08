let model = require('./model')
let view = require('./view')

class Controller{
    constructor(){}

    help(){
        // console.log('teeess');
        view.help()
    }
    
    list(){
        var arrList = model.file
        view.list(arrList)
    }

    add(task){
        var arrList = model.file

        var newTask = new Task(arrList.length + 1,task,false)
        model.add(newTask)  
        
        console.log(`Added "${newTask.task}" to your to do list`);
        
    }

    findById(id){
        var arrList = model.file
        view.find(id,arrList)
    }

    delete(id){
        var arrList = model.file
        var arr = []
        for (let i = 0; i < arrList.length; i++) {
            if (arrList[i].idTask != +id) {
                arr.push(arrList[i])
            }else
            if (+id == arrList[i].idTask) {
                var deleted = arrList[i].task
            }
        }        
        
        console.log(`Deleted "${deleted}" from your TODO list`);
        // console.log(arr);
        model.delete(arr)
    }

    complete(id){
        model.complete(id)
    }

    uncomplete(id){
        model.uncomplete(id)
    }

}

class Task{
    constructor(idTask,task,complete){
        this.idTask = idTask
        this.task = task
        this.complete = complete
    }
}
var controller = new Controller()

module.exports = controller