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

    static addTask(newtask) {
        let newid = Model.parse().length + 1;
        // console.log(newid)
        let newadd = Model.createTask(newid, newtask);
        if (newadd === true) {
            View.addSuccessful();
        } else {
            View.addFailed();
        }
        
    }


    static findById(id) {
        let data = Model.parse();
        let idtask = [];
        for (let i = 0; i < data.length; i++) {
            if (id == data[i].id) {
                idtask.push(data[i].task);
            }
        }
        View.displayById(idtask);
    }
    
    static deleteTask(id) {
        let deleteinput = Model.deleteTask(id);
        if (deleteinput === true) {
            View.deleteSuccessful();
        } else {
            View.deleteError();
        }
    }

    static taskCompleted(id) {
        let dataupdate = Model.updateComplete(id, 'status', 'complete');
        if (dataupdate === true) {
            View.listUpdate();
        }

    }
}


module.exports = Controller;