const command = process.argv.splice(2)
const todosController = require('../controller/todos.js')

if(command[0]===undefined){
    command[0]="help"
}

switch (command[0]) {
    case "help":
        var help = todosController.help()
        console.log(help)
        break;

    case 'list':
        var list = todosController.list()
        console.log(list.join('\n'));
        break;

    case 'add':
        if(command[1]==undefined){
            console.log("wrong input ----> node todo.js add '<input task>'");
        }else{
            var add = todosController.add(command[1])
            console.log(`Added "${command[1]}" to your TODO list...`);
        }
        break;
    
    case 'findById':
        if(command[1]==undefined){
            console.log("wrong input ----> node todo.js findById <input id task>");
        }else{
            var findById = todosController.findById(command[1])
            console.log(`${findById.id}. ${findById.task}`);
        }
        break;

    case 'delete':
        if(command[1]==undefined){
            console.log("wrong input ----> node todo.js delete <input id task>");
        }else{
            var deleteTask = todosController.delete(command[1])
            console.log(`Deleted "${deleteTask}" from your TODO list...`);
        }
        break;
    
    case 'complete':
        if(command[1]==undefined){
            console.log("wrong input ----> node todo.js complete <input id task>");
        }else{
            var completeTask = todosController.complete(command[1])
            console.log(completeTask.join('\n'));
        }
        break;

    case 'uncomplete':
        if(command[1]==undefined){
            console.log("wrong input ----> node todo.js uncomplete <input id task>");
        }else{
            var uncompleteTask = todosController.uncomplete(command[1])
            console.log(uncompleteTask.join('\n'));
        }
        break;
    
    case 'list:create':
        if(command[1]==undefined){
            command [1] = 'asc'
        }
        if(command[1]==='asc'){
            var filterAsc = todosController.listCreate(command[1])
            console.log(filterAsc.join('\n'));
        }
        else if(command[1]=='desc'){
            var filterDesc = todosController.listCreate(command[1])
            console.log(filterDesc.join('\n'));
        }
        else {
            console.log("wrong input ----> node todo.js list:create <choose asc / desc>");
        }
        break;
    
    case 'list:outstanding':
        if(command[1]==undefined||command[1]!='asc'&&command[1]!='desc'){
            console.log("wrong input ----> node todo.js list:outstanding <choose asc / desc>");
        }else if(command[1]=='asc'){
            var outAsc = todosController.listUncomplete(command[1])
            console.log(outAsc.join('\n'));
        }else if(command[1]=='desc'){
            var outDesc = todosController.listUncomplete(command[1])
            console.log(outDesc.join('\n'));
        }
        break;
    
    case 'list:completed':
        if(command[1]==undefined||command[1]!='asc'&&command[1]!='desc'){
            console.log("wrong input ----> node todo.js list:completed <choose asc / desc>");
        }else if(command[1]=='asc'){
            var asc = todosController.listComplete(command[1])
            console.log(asc.join('\n'));
            console.log("asc");
            
        }else if(command[1]=='desc'){
            var desc = todosController.listComplete(command[1])
            console.log(desc.join('\n'));
            console.log("desc");    
        }  
        break;
    
    case 'tag':
        var tag = []
        if(command[1]==undefined){
            console.log("wrong input ----> node todo.js tag <id> <tag>...<tag>");
        }
        else{
            for(var i = 2; i < command.length; i++){
                tag.push(command[i])
            }
            var addTag = todosController.addTag(command[1],tag)
            console.log(`Tagged task "${addTag.task}" with tags: ${tag.join(' ')}`);
        }    
        break;
    
    case 'filter':
        if(command[1]==undefined){
            console.log("wrong input ----> node todo.js filter <tag>");
        }
        var filter = todosController.filter(command[1])
        console.log(filter.join('\n'));
        
        break;
    

    default:
        var help = todosController.help()
        console.log(help)
        break;
}

// console.log(command[0]);

