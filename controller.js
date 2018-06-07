let model = require('./model')
let view = require('./view')

class Controller{
    constructor(){}

    help(){
        // console.log('teeess');
        view.help()
    }
    
    list(){
        var arrList = model.file
        view.list(arrList)
    }
}

var controller = new Controller()

module.exports = controller