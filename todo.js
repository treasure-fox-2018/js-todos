var controller = require('./controller')

var command = process.argv[2]
var tag = process.argv[3]

var tes = process.argv
// console.log(command);

if (command == 'help' || command == undefined) {
    controller.help()
}else

if (command == 'list') {
    controller.list()
}else

if (command == 'add') {
    controller.add(tag)
}else

if (command == 'findById') {
    controller.findById(tag)
}
