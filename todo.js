let Controller = require('./controller')

let argv = process.argv.slice(2)
let command = argv[0]

if(command === 'add'){
    let variable = argv.slice(1)
    var Datainfo = variable.join(' ')    
}
else{
    var variable = argv[1]
    let warp = argv.slice(2)
    var tag = warp.join(' ')
}

if(command === 'help' || command === undefined){
    Controller.getHelp_c();
}
else if(command === 'list'){
    Controller.getTodoList_c();
}
else if(command === 'add'){
    Controller.addTodoList_c(Datainfo);
}
else if(command === 'findById'){
    Controller.findTask_c(variable)
}
else if(command === 'delete'){
    Controller.deleteTask_c(variable)
}
else if(command === 'complete'){
    Controller.completedTask_c(variable)
}
else if(command === 'incomplete'){
    Controller.incompletedTask_c(variable)
}
else if(command === 'list:created'){
    Controller.sortTask_c(variable)
}
else if(command === 'list:completed'){
    Controller.sortCompletedTask_c(variable)
}
else if(command === 'tag'){
    Controller.putTag_c(variable,tag)
}
else if(command === 'filter:'){
    Controller.filter_c(variable)
}
