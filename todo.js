let userInput = process.argv
let Controller = require('./todoController.js')

if(userInput[2] === 'help' || userInput[2] === undefined){
    console.log('todo.js :')
    console.log('1. list')
    console.log('2. add <task_content>')
    console.log('3. findById <task_id>')
    console.log('delete <task_id>')
    console.log('complete <task_id>')
    console.log('uncomplete <task_id')

} else if(userInput[2] === 'list'){
    let list = Controller.list()
} else if(userInput[2] === 'add'){
    let add = Controller.add(userInput[3])
} else if(userInput[2] === 'findById'){
    let finding = Controller.findById(+userInput[3])
} else if(userInput[2] === 'delete'){
    let remove = Controller.delete(+userInput[3])
} else if(userInput[2] === 'complete'){
    let addStatus = Controller.complete(+userInput[3])
} else if(userInput[2] === 'uncomplete'){
    let rmvStat = Controller.uncomplete(+userInput[3])
} else if(userInput[2] === 'list:created' || userInput[2] === 'list:outstanding' || userInput[3] === 'asc'){
    let show = Controller.listByOrder('asc')
} else if(userInput[2] === 'list:outstanding' && userInput[3] === 'desc'){
    let show = Controller.listByOrder('desc')
} else if(userInput[2] === 'list:completed'){
    let show = Controller.listByOrder('completed')
} else if(userInput[2] === 'tag'){
    let tag = []
    for(let i = 4; i < userInput.length; i++){
        tag.push(userInput[i])
    }
    let adding = Controller.addTag(tag, userInput[4])
} else if(userInput[2] === 'filter'){ // ---> Maaf ka ini aku pisah filter sama tag nya dengan spasi biar mudah
    let filter = Controller.filter(userInput[3])
}

