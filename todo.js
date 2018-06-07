var controller = require('./controller')

var command = process.argv[2]
var tag = process.argv[3]

var tes = process.argv
// console.log(command);

if (command == 'help' || command == undefined) {
    controller.help()
}

if (command == 'list') {
    controller.list()
}