var View = require('./view.js')
var fs = require('fs')
var jsondata = fs.readFileSync('./data.json')

class Controller {
  static add(name){
    var writeData = fs.writeFileSync(name)
    return writeData;
  }
}

module.exports = Controller
