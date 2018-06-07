const Model = require('./model.js');
const View = require('./view.js');



class Controller {
    static helpList() {
        View.helpmenu();
    }

    static todoList() {
        let data = Model.parse();
        View.showDisplay(data);
    }

    static addTask(newid, newtask) {
        Model.createTask(newid, newtask);
        View.addSuccessful();
    }

    
    static findById(id) {
        let data = Model.parse();
        let idtask = [];
        for (let i = 0; i < data.length; i++) {
            if (id === data[i].id) {
                idtask.push(data[i].task);
            }
        }
        return idtask;
        View.displayById(idtask);
    }
        
}


module.exports = Controller;