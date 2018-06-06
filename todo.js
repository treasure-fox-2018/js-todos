const Controller = require('./controllers/controller')
const argv = process.argv.slice(2)
let command = argv[0]
let id = argv[1]
let task = argv[1]
let value = argv[1]
let tagName = process.argv.slice(4)

switch(command){
    case "help":
    Controller.help()
    break
    case "list":
    Controller.list()
    break
    case "add":
    Controller.add(task)
    break
    case "findById":
        Controller.findById(id)
    break
    case "delete":
        Controller.delete(id)
    break
    case "complete":
        Controller.complete(id)
    break
    case "unComplete":
        Controller.unComplete(id)
    break
    case "listCreated":
        Controller.listCreated(value)
    break
    case "listCompleted":
        Controller.listCompleted(value)
    break
    case "tag":
        Controller.tag(id, tagName)
    break
    case "filter":
        Controller.filter(value)
    break
    default: Controller.help()
    break
}