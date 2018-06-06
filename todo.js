"use strict"
// const View = require("./todoView.js")
const Controller = require("./todoController.js")
// const View = require("./todoView.js")
const command = process.argv[2]
// console.log(View)
// console.log(Controller)
// var viewTodo = new View()
// var viewHelp = viewTodo.viewHelp;

switch (command){
    case "help": Controller.controlHelp()
    case "list":
}
// processArgv[2] = viewHelp
// var viewTodo = new View()



// console.log(viewHelp)