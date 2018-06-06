"use strict"

const clientSide = require("./todo.js");
const output = require('./commandsView.js');
const fs = require('fs');

const command = clientSide.command;

const datum = clientSide.datum;

// var outputForClientSide = null

class Controller {
  static displayHelp() {
      output.stringGenerator()
      // let data = fs.readFileSync("./commandsData.json")
      // let object = JSON.parse(data)
      // exports.data = object.data;

      // let outputFromView = view.output;
      // outputForClientSide = outputFromView;
      // console.log("test");
  }
}


module.exports = Controller;
