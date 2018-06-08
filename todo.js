const controller = require('./controllerTodo.js')
var argv = process.argv
// var help = argv[2]
// var list = argv[2]

if(argv[2] === undefined){
    controller.showMenu()
}else if(argv[2] === 'help'){
    controller.showListTugas()
}else if(argv[2] === 'add') {
    controller.addTask(argv[3])
}else if(argv[2] === 'findById'){
    controller.findById(argv[3])
}else if(argv[2] === 'delete'){
    controller.delete(argv[3])
}else if(argv[2] === 'list:created' && argv[3] === 'asc'){
    controller.createdASC()
}else if(argv[2] === 'list:created' && argv[3] === 'desc'){
    controller.createdDSC()
}else if(argv[2] === 'list'){
    controller.showUpdateList()
}else if(argv[2] === 'complete'){
    controller.completeTask(argv[3])
}else if(argv[2] === 'uncomplete'){
    controller.uncompleteTask(argv[3])
}else if(argv[2] === ''){

}