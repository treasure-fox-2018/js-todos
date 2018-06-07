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
            task: newtask
        }
        data.push(newtodoList);
        fs.writeFileSync('data.json', JSON.stringify(data));
    }

    static parse() {
        const data = JSON.parse(fs.readFileSync('data.JSON'));
        return data;
    }

    // static 

}

module.exports = Model