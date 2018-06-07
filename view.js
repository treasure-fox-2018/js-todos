const Model = require('./model.js');


class View {
    static helpmenu() {
        var helpArr = ['$ node todo.js', '$ node todo.js help', '$ node todo.js list', '$ node todo.js add <task_content>', '$ node todo.js findById <task_id>', '$ node todo.js delete <task_id>', '$ node todo.js complete <task_id>', '$ node todo.js uncomplete <task_id>'];
        for (let i = 0; i < helpArr.length; i++) {
            console.log(helpArr[i]);
        } 
    }

    static showDisplay(data) {
        let stats = '';
        let str = '';
        for (let i = 0; i < data.length; i++) {
            if(data[i].status === 'complete') {
                stats = '[x]';
            } else {
                stats = '[ ]';
            }
            var listdata = `${stats} ${data[i].id}. ${data[i].task} \n`
            str += listdata;
        }
        console.log(str);
    }

    static addSuccessful() {
        console.log('Added task successfully!');
    }

    static addFailed() {
        console.log('Task not added, Error!');
    }

    static displayById(idtask) {
        for (let i = 0; i < idtask.length; i++) {
            console.log(idtask);
        }
    }

    static deleteSuccessful() {
        console.log('Task removed');
    }

    static deleteError() {
        console.log('Deletion error')
    }

    static listUpdate() {
        console.log('Update: completed task');

    }
}

module.exports = View;