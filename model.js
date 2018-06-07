let fs = require('fs')

var display = fs.readFileSync('data.json','utf8')
var display_data = JSON.parse(display)

// console.log(display_data);
class Model{
    constructor(){
        this._file = display_data
    }

    get file(){
        return this._file
    }


}

let model = new Model('data.json')
module.exports = model