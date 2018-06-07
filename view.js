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
        let tag = '';
        for (let i = 0; i < data.length; i++) {
            if(data[i].status === 'complete') {
                stats = '[x]';
            } else {
                stats = '[ ]';
            }
            if (data[i].tag.length === 0) {
                tag = ' ';
            }
            var listdata = `${stats} ${data[i].id}. ${data[i].task} | tag: ${data[i].tag} | created:${new Date(data[i].date)} \n`
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

    static showTags(tag) {
        for (let i = 0; i < tag.length; i++) {
            console.log(`${tag[i].id}. ${tag[i].task} : ${tag[i].tag}`);
        }
    }

}

module.exports = View;