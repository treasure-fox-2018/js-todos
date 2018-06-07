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
        let dataupdate = Model.updating(id, 'status', 'complete');
        if (dataupdate === true) {
            View.listUpdate();
        }

    }
    static sortFunction(key, ascdes, sortfilter) {
        let data = Model.parse();
        if (sortfilter === '') {
            if (ascdes == 'asc') {
                // console.log('asc');
                data.sort(function(a, b){return new Date(a[key]) - new Date(b[key])});
                View.showDisplay(data);
            } else if (ascdes == 'desc') {
                // console.log('desc')
                data.sort(function(a, b){return new Date(b[key]) - new Date(a[key])});
            View.showDisplay(data);
        }
            
        } else if (sortfilter == 'complete') {
            let completedTaskArr = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].status == 'complete') {
                    completedTaskArr.push(data[i]);
                    if (ascdes == 'asc') {
                        data.sort(function(a, b){return new Date(a[key]) - new Date(b[key])});
                    } else if (ascdes == 'desc') {
                    data.sort(function(a, b){return new Date(b[key]) - new Date(a[key])});
                    }
                } 
                for (let j = 0; j < data[i].tag.length; j++) {
                    if (sortfilter === data[i].tag[j]) {
                        var tasktagArr = [];
                        tasktagArr.push(data[i]);
                        View.showDisplay(tasktagArr);
                    }
                }
            }
            View.showDisplay(completedTaskArr)
        }
    }

    static addTag(id, tag) {
        Model.attachTag(id, tag);
        Controller.todoList();

    }

    static getTags(tag) {
        let data = Model.addFilter(tag)
        View.showTags(data);
    }

}


module.exports = Controller;