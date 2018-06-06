let Model = require('../model/model.js')
let View = require('../view/view.js')

class Controller {
  constructor () {

  }

  static list () {
    let dataList = Model.list();
    let stringData = "";
    for (let i = 0 ; i < dataList.length ; i++) {
      let dataPerLine = `${dataList[i].id}. ${dataList[i].task} \n`;
      stringData += dataPerLine;
    }
    if (View.list(stringData) === true) {
      return true;
    } else return false;
    
  }

}

module.exports = Controller;