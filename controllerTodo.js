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

    static showListTugas(){
        var listTugas = Model.showListTugas()
        View.showListTugas(listTugas)
    }
}


module.exports = Controller_todo