const Controller = require ('./controllers/controller')

const argv = process.argv
const command = argv[2]

const parameter = argv.slice(3)

switch (command) {
    case 'help': { return Controller.help() }
    case 'read': { return Controller.read() }
    case 'add': { return Controller.add(parameter) }
    case 'findbyid': { return Controller.findById(parameter) }
    case 'delete': { return Controller.delete(parameter) }
    case 'list': { return Controller.list() }
    case 'complete': { return Controller.complete(parameter) }
    case 'uncomplete': { return Controller.uncomplete(parameter) }
    case 'list:created': { return Controller.listCreated(parameter) }    
    case 'list:outstanding': { return Controller.listOutstanding(parameter) }    
    case 'list:completed': { return Controller.listCompleted() } 
    case 'tag': { return Controller.tag(parameter) }    
    case 'filter': { return Controller.filter(parameter) }  

    default:
        break;
}