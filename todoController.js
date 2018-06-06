"use strict"
const View = require("./todoView.js")

class Controller{
    constructor(){
    }

    static controlHelp(){
        // console.log("hello")
       View.viewHelp()

    }

}

// console.log(Controller.controlHelp)

module.exports = Controller