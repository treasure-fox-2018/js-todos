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

        var newTask = new Task(arrList.length + 1,task)
        model.add(newTask)  
        
        console.log(`Added "${newTask.task}" to your to do list`);
        
    }
}

class Task{
    constructor(idTask,task){
        this.idTask = idTask
        this.task = task
    }
}
var controller = new Controller()

module.exports = controller