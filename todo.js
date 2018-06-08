"use strict"

const Controller = require("./todoController.js")
const command = process.argv[2]
// const idContent = process.argv[3]

switch (command){
    case "help": Controller.Help()
    case "list": Controller.List()
    // case "add": Controller.add(newTask)
}

if(command === "add" && process.argv[3] !== undefined){
Controller.Add(process.argv[3])
}else if(command === "findById" && process.argv[3] !== undefined){
Controller.FindById(Number(process.argv[3]))
}else if(command === "delete" && process.argv[3] !== undefined){
Controller.delete(Number((process.argv[3])))
}else if(command === "complete" && process.argv[3] !== undefined){
Controller.statusComplete(Number((process.argv[3])))
}else if(command === "complete" && process.argv[3] !== undefined){
Controller.statusComplete(Number((process.argv[3])))
}else if(command === "uncomplete" && process.argv[3] !== undefined){
Controller.statusUncomplete(Number((process.argv[3])))
}
// processArgv[2] = viewHelp
// var viewTodo = new View()



// console.log(viewHelp)