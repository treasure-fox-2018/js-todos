const command = process.argv[2];
const parameter = process.argv[3];
var Controller = require('./controllerToDo.js')

if (command === 'help' || command === undefined) {
  if (Controller.help() !== true) {
    console.log('Tidak ada maksud dari pencarian tersebut')
  }
}

if (command === 'list') {
  if(Controller.list() !== true) {
    console.log('Error Listing!')
  }
}

if (command === 'add') {
  if(Controller.add(parameter) !== true) {
    console.log('Error adding File!')
  }
}