let controller = require('./controller')

class View{
    constructor(){}

    help(){
       var arrCommand = ['help','list','add <task_content>','findById <task_id>','delete <task_id>','complete <task_id>','uncomplete <task_id>']

       for (let i = 0; i < arrCommand.length; i++) {
           console.log(`node todo.js ${arrCommand[i]}`);           
       }
    }

    list(arrList){
        for (let i = 0; i < arrList.length; i++) {
            if (arrList[i].complete) {
                console.log(`${arrList[i].idTask}. [x] ${arrList[i].task}`);
            }else{
                console.log(`${arrList[i].idTask}. [ ] ${arrList[i].task}`);
            }
        }

    }

    find(id,arrList){
        for (let i = 0; i < arrList.length; i++) {
            if (id == arrList[i].idTask) {
                console.log(`${arrList[i].idTask}. ${arrList[i].task}`);               
            }
        }
        // console.log(arrList);
    }

}

var view = new View()
module.exports = view