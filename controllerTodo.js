const Model = require('./modelTodo.js')
const View = require('./viewTodo')


class Controller_todo{
    static showList(){
        var listMenu = Model.showList()
        View.showList(listMenu)
    }

    static add(){
        // Model.add()
    }
}


module.exports = Controller_todo