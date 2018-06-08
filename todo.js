let control = require('./controllerToDo.js')
let input = process.argv

if(input[2] === undefined){
    control.showCommand()
} else if (input[2] === 'list'){
    control.showAllData()
}

 let command = process.argv[2];
 let request = process.argv[3];
 
 // create
 if (command == 'help') {
   Controller.help();
 }else if (command == 'list') {
   Controller.listData();
 }else if (command == 'add') {
   Controller.addTask(request);
 }else if (command == 'findById') {
   Controller.idFind(request)
 }else if (command == 'delete') {
   Controller.deleteId(request)
 }else if (command == 'complete') {
   Controller.complete(request)
 }else if (command === 'uncomplete') {
   Controller.uncomplete(request)
 }




