let Controller = require('../controller/controller.js')


class View {
  constructor () {
  }

  static list (dataList) {
    let stringData = "";
    for (let i = 0 ; i < dataList.length ; i++) {
      let dataPerLine = `${dataList[i].id}. ${dataList[i].task} \n`;
      stringData += dataPerLine;
    }
    console.log(stringData);
    return true;
  }

}

module.exports = View;