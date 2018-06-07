'use strict'

let fs = require('fs')

class todoModel{
    
    static readFile(){
        let todoList = JSON.parse(fs.readFileSync('data.json', 'utf8'))
    }

    static writeFile(todoThing){
        let sendFile = fs.writeFileSync(JSON.stringify(todoThing, ))
    }
}


module.exports = todoModel