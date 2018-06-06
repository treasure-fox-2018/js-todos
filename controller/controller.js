let Model = require('../model/model.js')
let View = require('../view/view.js')

class Controller {
  constructor () {

  }

  static list () {
    let dataList = Model.list();
    if (View.list(dataList) === true) {
      return true;
    } else return false;
    
  }

}

module.exports = Controller;