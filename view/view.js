let Controller = require('../controller/controller.js')


class View {
  constructor () {
  }

  static printHelp(listHelp) {
    let print = "";
    for (let index in listHelp) {
      print+= listHelp[index] +"\n";
    }
    console.log(print)
    return true;
  }

  static printList (dataList) {
    let stringData = "";
    for (let i = 0 ; i < dataList.length ; i++) {
      let dataPerLine = `${dataList[i].id}. ${dataList[i].task} \n`;
      stringData += dataPerLine;
    }
    console.log(stringData);
    return true;
  }

  static printAddedData(newData) {
    let print = `Added "${newData.task}" to your TODO list...`;
    console.log(print);
    return true;
  }

  static printID(data) {
    let print = `${data.id}. ${data.task}`;
    console.log(print);
    return true;
  }

  static printDeleted(deletedData) {
    let print = `Deleted "${deletedData}" to your TODO list...`
    console.log(print);
    return true;
  }

}

module.exports = View;