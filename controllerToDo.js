'use strict'

var Model = require ('./modelToDo.js')
var View = require ('./viewToDo.js')

class Controller {
  static help () {
    View.printHelp() === true 
  }

  static list () {
    let dataList = Model.read();
    if (dataList !== []) {
      View.printList(dataList)
    }
    else {
      View.errorPrintList();
    }
    
  }

  static add (parameter) {
    if (Model.add(parameter) === true) {
      View.addSuccessful();
    }
    else {
      View.addUnsuccessful();
    }
  }

  static findById (parameter) {
    var dataList = Model.findById(parameter);
    View.printById(dataList);
  }

  static delete (parameter) {
    var dataList = Model.delete(parameter);
    View.delete(dataList);
  }

  static complete (parameter) {
    Model.complete(parameter);
    let dataList = Model.read();
    View.complete(dataList);
  }

  static uncomplete (parameter) {
    Model.uncomplete(parameter);
    let dataList = Model.read();
    View.uncomplete(dataList);
  }

  static listCreated (parameter) {
    var dataList = Model.listCreated(parameter);
    View.listCreated(dataList)
  }

  static listComplete () {
    var dataList = Model.listComplete();
    View.listComplete(dataList)
  }

  static addTag (argv) {
    Model.addTag(argv);
  }

  static filter (parameter) {
    var dataList = Model.filter(parameter);
    View.filter(dataList)
  }
}

module.exports = Controller