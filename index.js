const todo = require('./views/todo.js')
const Controller = require('./controllers/taskController.js')
// console.log(Controller)
const argv = process.argv
let command = argv[2]


switch(command){
    case 'help' : {todo.helpList();break}
    case 'list' : {Controller.getAll();break}
    case 'add'  : {Controller.addList(argv[3]);break}
    case 'find' : {Controller.findById(argv[3]);break}
    case 'delete' : {Controller.deleteData(argv[3]);break}
    case 'complete' : {Controller.complete(argv[3]);break}
    case 'uncomplete' : {Controller.uncomplete(argv[3]);break}
    case 'list:created' : 
        if(argv[3] == 'desc'){
            let desc = Controller.sortDate(argv[3])
            console.log(desc)
        }else if(argv[3] == 'asc'){
            let asc = Controller.sortDate(argv[3])
            console.log(asc)
        }
    case 'listComplete' : {Controller.listComplete();break}
    case 'addTag' : {Controller.addTag(argv[3]);break}
}

