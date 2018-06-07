var fs = require ('fs');

class Model {

  static read () {
    let data = require('./data.json');
    return data;
  }

  static write (parameter) {
    let dataList = Model.read();
    let newParameter = {
      id : dataList.length + 1,
      task : parameter
    }
    let data = JSON.stringify(dataList.push(newParameter))
    let dataJSON = fs.writeFileSync('./data.json', data);
    return true
  }
}

// console.log(Model.read().length)
module.exports = Model
