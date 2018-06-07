let model = require('./model')
let view = require('./view')

class Controller{
    constructor(){}

    help(){
        // console.log('teeess');
        view.help()
    }
}

var controller = new Controller()

module.exports = controller