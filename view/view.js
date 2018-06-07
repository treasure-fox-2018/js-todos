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
  }

  static printList (dataList) {
    let stringData = "";
    let status = "";
    for (let i = 0 ; i < dataList.length ; i++) {
      if (dataList[i].status === "complete") {
        status = "[x]"
      } else status = "[ ]";
      let dataPerLine = `${status} ${dataList[i].id}. ${dataList[i].task} \n`;
      stringData += dataPerLine;
    }
    console.log(stringData);
  }

  static printAddedData(newData) {
    let print = `Added "${newData.task}" to your TODO list...`;
    console.log(print);
  }

  static printID(data) {
    let print = `${data.id}. ${data.task}`;
    console.log(print);
  }

  static printDeleted(deletedData) {
    let print = `Deleted "${deletedData.task}" to your TODO list...`
    console.log(print);
  }

  static printAddError() {
    console.log("Error add data")
  }

  static printFindError() {
    console.log("Error finding file / File not found")
  }

  static printDeletedError() {
    console.log("Error delete file / File not found")
  }

  static printCompleteError() {
    console.log("Error complete file / File not found")
  }
}

module.exports = View;