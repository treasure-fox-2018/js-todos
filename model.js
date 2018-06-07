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

    add(task){
        this._file.push(task)
        this.write()
        // console.log(this._file);
        
    }

    write(){
        var newTask = JSON.stringify(this._file)
        fs.writeFileSync('data.json',newTask)
        return 'Data telah Disimpan!'
    }


}
// console.log(display_data);

let model = new Model('data.json')

module.exports = model