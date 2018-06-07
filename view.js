const Model = require('./model.js');


class View {
    static helpmenu() {
        var helpArr = ['$ node todo.js', '$ node todo.js help', '$ node todo.js list', '$ node todo.js add <task_content>', '$ node todo.js findById <task_id>', '$ node todo.js delete <task_id>', '$ node todo.js complete <task_id>', '$ node todo.js uncomplete <task_id>'];
        for (let i = 0; i < helpArr.length; i++) {
            console.log(helpArr[i]);
        } 
    }

    static showDisplay(data) {
        for (let i = 0; i < data.length; i++) {
            console.log(`${data[i].id}. ${data[i].task}`);
        }
    }

    static addSuccessful() {
        console.log('Added task successfully!');
    }

    static displayById(idtask) {
        for (let i = 0; i < idtask.length; i++) {
            console.log(idtask[i]);
        }
    }
}

module.exports = View;