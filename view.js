let controller = require('./controller')

class View{
    constructor(){}

    help(){
       var arrCommand = ['help','list','add <task_content>','findById <task_id>','delete <task_id>','complete <task_id>','uncomplete <task_id>']

       for (let i = 0; i < arrCommand.length; i++) {
           console.log(`node todo.js ${arrCommand[i]}`);           
       }
    }
}

var view = new View()
module.exports = view