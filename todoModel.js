"use strict"
const fs = require('fs')

class Model{
    constructor(){

    }

    static modelAdd(){
        var dataAdd = fs.readFileSync("./data.json","utf8")
        console.log(dataAdd)
        
    }


}
console.log(Model.modelAdd())
module.exports = Model