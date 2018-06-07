'use strict'

var Model = require ('./modelToDo.js')
var View = require ('./viewToDo.js')

class Controller {
  static help () {
    if (View.printHelp() === true) {
      return true;
    }
    return false;
  }

  static list () {
    let dataList = Model.read();
    if (View.printList(dataList) === true) {
      return true;
    }
    return false;
  }

  static add (parameter) {
    if (Model.write(parameter) === true) {
      let dataList = Model.read();
      if (View.printList(dataList) === true) {
        return true;
      }
    }
    return false;
  }
}

module.exports = Controller