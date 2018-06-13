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
    let tag = "";
    for (let i = 0 ; i < dataList.length ; i++) {
      if (dataList[i].status === "complete") {
        status = "[x]"
      } else status = "[ ]";
      let dataPerLine = `${status} ${dataList[i].id}. ${dataList[i].task}, tag: ${dataList[i].tag.join(" ")}, created:${new Date (dataList[i].createDate)}\n`;
      stringData += dataPerLine;
    }
    console.log(stringData);
  }

  static printAddedData(newTask) {
    let print = `Added "${newTask}" to your TODO list...`;
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

  static printAddTag(data,tag) {
    let print = `Tagged task "${data.task}" with tags : ${tag.join(" ")}`
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

  static printWrongParam() {
    console.log("Please see help for info")
  }

  static printErrorTag() {
    console.log("Error adding Tag / File not found")
  }

  static printFilterError() {
    console.log("Error filter Tag / File not found")
  }

}

module.exports = View;