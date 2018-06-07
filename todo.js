const controller = require('./controllerTodo.js')
var argv = process.argv
var help = argv[2]
var list = argv[2]

if(argv[2] === 'list' || argv[2] === ''){
    controller.showList()
}else if(argv[2] === 'help'){
    controller.showListTugas()
}