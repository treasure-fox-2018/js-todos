'use strict'

const fs = require('fs');
const controller = require('../views/view.js')

class Model {
    
    static getAll() {
        const file = fs.readFileSync('./data.json', 'utf8');
        const dataParse = JSON.parse(file);
        return dataParse;
    }

    static list() {
        let arr = []
        const dataParse = this.getAll();
        for(let i = 0; i < dataParse.length; i++) {
            arr.push(`${dataParse[i].id}. [${dataParse[i].status}] ${dataParse[i].taskName}`);
        }
        return arr;
    }

    static addMenu(input) {
        let dataParse = this.getAll();
        var obj = {};
        obj['id'] = dataParse.length+1;
        obj['status'] = ' ';
        obj['taskName'] = input;
        dataParse.push(obj)

        fs.writeFileSync('./data.json', JSON.stringify(dataParse, null, 4));

        let arr = []
        for(let i = 0; i < dataParse.length; i++) {
            arr.push(`${dataParse[i].id}. [${dataParse[i].status}] ${dataParse[i].taskName}`)
        }
        return dataParse[dataParse.length-1].taskName;
    }

    static findMenu(input) {
        let dataParse = this.getAll();
        for(let i = 0; i < dataParse.length; i++) {
            if(dataParse[i].id == input) {
                return (`${dataParse[i].id}. [${dataParse[i].status}] ${dataParse[i].taskName}`);
            }
        }
    }

    static deleteMenu(input) {
        let dataParse = this.getAll();
        let temp = null;

        for(let i = 0; i < dataParse.length; i++) {
            if(dataParse[i].id == input) {
                temp = dataParse.splice(i, 1);
                dataParse.splice(i, 1);
                fs.writeFileSync('./data.json', JSON.stringify(dataParse, null, 4));
                return temp[0].taskName;
            }
        }
    }

    static complete(input) {
        let dataParse = this.getAll();
        
        for(let i = 0; i < dataParse.length; i++) {
            if(dataParse[i].id == input) {
                dataParse[i].status = 'X'
                fs.writeFileSync('./data.json', JSON.stringify(dataParse, null, 4));
            }
        }
        
        let arr = [];
        for(let i = 0;i < dataParse.length; i++) {
            arr.push(`${dataParse[i].id}. [${dataParse[i].status}] ${dataParse[i].taskName}`)
        }

        return arr;
    }

    static incomplete(input) {
        let dataParse = this.getAll();
        
        for(let i = 0; i < dataParse.length; i++) {
            if(dataParse[i].id == input) {
                dataParse[i].status = ' '
                fs.writeFileSync('./data.json', JSON.stringify(dataParse, null, 4));
            }
        }
        
        let arr = [];
        for(let i = 0;i < dataParse.length; i++) {
            arr.push(`${dataParse[i].id}. [${dataParse[i].status}] ${dataParse[i].taskName}`)
        }
        
        return arr;
    }
}

module.exports = Model