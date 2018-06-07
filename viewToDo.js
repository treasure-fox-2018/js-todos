'use strict'
var Controller = require('./controllerToDo.js')

class View {
  static printHelp () {
    console.log('node todo.js');
    console.log('node todo.js help');
    console.log('node todo.js list');
    console.log('node todo.js add <task_content>');
    console.log('node todo.js findByID <task_id>');
    console.log('node todo.js delete <task_id>');
    console.log('node todo.js complete <task_id>');
    console.log('node todo.js uncomplete <task_id>');
  }

  static printList (data) {
    let strData = '';
    for (var i = 0; i <= data.length - 1; i++) {
      let dataPerLine = `${data[i].id}. ${data[i].task}`
      strData = strData + dataPerLine + '\n'
    }
    console.log(strData)
  }

  static errorPrintList () {
    console.log('Error to print the list')
  }

  static addSuccessful () {
    console.log('Input success, data has been added')
  }
  
  static addUnsuccessful () {
    console.log('Adding data error!')
  }

  static printById (object) {
    console.log(`${object.id}. ${object.task}`)
  }

  static delete (object) {
    console.log(`Deleted ${object.task} from your TODO list...`)
  }

  static complete (dataList) {
    let strData = '';
    for (var i = 0; i <= dataList.length - 1; i++) {
      let dataPerLine = `${dataList[i].id}. ${dataList[i].check} ${dataList[i].task}`
      strData = strData + dataPerLine + '\n'
    }
    console.log(strData)
  }

  static uncomplete (dataList) {
    let strData = '';
    for (var i = 0; i <= dataList.length - 1; i++) {
      let dataPerLine = `${dataList[i].id}. ${dataList[i].check} ${dataList[i].task}`
      strData = strData + dataPerLine + '\n'
    }
    console.log(strData)
  }

  static listCreated (dataList) {
    let strData = '';
    for (var i = 0; i <= dataList.length - 1; i++) {
      let dataPerLine = `${dataList[i].id}. ${dataList[i].check} ${dataList[i].task}  ${dataList[i].createdDate}`
      strData = strData + dataPerLine + '\n'
    }
    console.log(strData)
  }

  static listComplete (dataList) {
    let strData = '';
    for (var i = 0; i <= dataList.length - 1; i++) {
      let dataPerLine = `${dataList[i].id}. ${dataList[i].check} ${dataList[i].task}  ${dataList[i].createdDate}`
      strData = strData + dataPerLine + '\n'
    }
    console.log(strData)
  }

  static filter (dataList) {
    let strData = '';
    for (var i = 0; i <= dataList.length - 1; i++) {
      let dataPerLine = `${dataList[i].id}. ${dataList[i].task}  [${dataList[i].tag}]`
      strData = strData + dataPerLine + '\n'
    }
    console.log(strData)
  }
}


module.exports = View