var Controller = require('./controller.js')

// set argv
let command = process.argv[2];

// create
if (command == 'help') {
  console.log(`node todo.js`);
  console.log(`node todo.js help`);
  console.log(`node todo.js list`);
  console.log(`node todo.js add <task_content>`);
  console.log(`node todo.js findById <task_id>`);
  console.log(`node todo.js delete <task_id>`);
  console.log(`node todo.js complete <task_id>`);
  console.log(`node todo.js uncomplete <task_id>`);
}else if (command == 'add') {
  console.log(Controller.add);
}
