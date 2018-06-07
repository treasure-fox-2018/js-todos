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
            status: 'incomplete',
            task: newtask,
            date: new Date(),
            tag: []
        }
        data.push(newtodoList);
        // console.log(newid)
        fs.writeFileSync('data.JSON', JSON.stringify(data));
        return true;
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

    static updating(id, key, value) {
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

    static attachTag(id, tag) {
        let data = Model.parse();
        for (let i = 0; i < data.length; i++) {
            if (id == data[i].id) {
                for (let j = 0; j < tag.length; j++) {
                    data[i].tag.push(tag[j]);
                }
            }
        }
        var newdatalist = JSON.stringify(data);
        var datajson = fs.writeFileSync('data.JSON', newdatalist);
        return true;
    }

    static addFilter(tag) {
        let data = Model.parse();
        let tagsplit = tag.split(':');
        let tagArr = [];
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].tag.length; j++) {
                if (tagsplit[1] === data[i].tag[j]) {
                    tagArr.push(data[i]);
                }
            }
            // console.log(data[i])
        }
        // console.log(tagsplit)
        // console.log(tagArr);
        return tagArr
    }

    static parse() {
        const data = JSON.parse(fs.readFileSync('data.JSON'));
        return data;
    }



}

module.exports = Model