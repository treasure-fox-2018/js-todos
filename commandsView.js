"use strict"

const fs = require('fs');

let controller = fs.readFileSync("./controller1.js");
let data = controller.data;

class Display {
  static stringGenerator() {
    let strContain = "$ node todo.js help\n$ node todo.js list\n$ node todo.js add <taskContent>\n$ node todo.js findById <taskId>\n$ node todo.js delete <task_id>\n$ node todo.js complete <taskId>\n$ node todo.js uncomplete <taskId>";
    // for (var i = 0; i < data.length; i++) {
    //   strContain += ("$ node todo.js " + data[i] + "\n")
    // }
    console.log(strContain);
    // console.log("test1");
  }
}

module.exports = Display;
