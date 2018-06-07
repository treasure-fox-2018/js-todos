let userInput = proccess.argv
let Controller = require('./todoController.js')

if(userInput[2] === 'help' || userInput[2] === undefined]){
    console.log('todo.js :')
    console.log('1. list')
    console.log('2. add <task_content>')
    console.log('3. findById <task_id>')
    console.log('delete <task_id>')
    console.log('complete <task_id>')
    console.log('uncomplete <task_id')
} else if(userInput[2] === 'list'){
    let list = new Controller.list()
} else if(userInput[2] === 'add'){
    let add = new Controller.add(userInput[3])
}

