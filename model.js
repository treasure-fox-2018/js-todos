const fs = require('fs');
const View = require ('./view.js');


class Model {
    constructor(id, task) {
        this._id = id;
        this._task = task;
    }
    
    static createTask(newid, newtask) {
        let data = Model.parse();
        let newtodoList = {
            id: newid,
            status: incomplete,
            task: newtask
        }
        data.push(newtodoList);
        // console.log(newid)
        fs.writeFileSync('data.JSON', JSON.stringify(data));
    }

    static deleteTask(id) {
        let data = Model.parse();
        let foundIdx = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                data.splice(i, 1);
                
                var newdatalist = JSON.stringify(data);
                var datajson = fs.writeFileSync('data.JSON', newdatalist);
            }
        }
    }

    static updateComplete(id, key, value) {
        let data = Model.parse();
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                data[i][key] = value;

                var newdatalist = JSON.stringify(data);
                var datajson = fs.writeFileSync('data.JSON', newdatalist);
                return true;
            }
        }
        // return false;
    }


    static parse() {
        const data = JSON.parse(fs.readFileSync('data.JSON'));
        return data;
    }

}

module.exports = Model