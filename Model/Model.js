let fs = require('fs')
let listData = JSON.parse(fs.readFileSync('./data.json', 'utf8'))

class Model {
  static list() {
    return listData
  }

  static add(newTask, tag='') {
    let addList = {
      id: this.list().length+1,
      mark: ' ',
      task: newTask,
      date: new Date(),
      tag: tag
    }
    listData.push(addList)
    fs.writeFileSync('./data.json', JSON.stringify(listData)) // don't stringify if modified unpushed
  }

  static findById() {
    return listData
  }
  static deleteList(id) {
    for(var i = 0; i < listData.length; i++){
      if(listData[i].id === Number(id)){
        var dataDelete = listData.splice(i,1)
        fs.writeFileSync('./data.json', JSON.stringify(listData))
      }
    }
    return dataDelete
  }
  static completeList(markId){
    for(let i = 0; i < listData.length; i++) {
      if(listData[i].id === markId) {
        listData[i].mark = 'X'
        fs.writeFileSync('./data.json', JSON.stringify(listData))
      }
    }
  }
  static unCompleteList(unMarkId) {
    for(let i = 0; i < listData.length; i++) {
      if(listData[i].id === unMarkId) {
        listData[i].mark = ' '
        fs.writeFileSync('./data.json', JSON.stringify(listData))
      }
    }
  }
  static listCreated() {
    listData.sort(function (a, b){
      return a.date < b.date
    })
    return listData
  }
  static listAsc() {
    listData.sort(function (a, b){
      return a.date < b.date
    })
    return listData
  }
  static listDesc() {
    listData.sort(function (a, b){
      return a.date > b.date
    })
    return listData
  }
  static listCompleted() {
    let containCompleted = []
    for (let i = 0; i < listData.length; i++) {
      if(listData[i].mark === 'X') {
        containCompleted.push(listData[i])
      }
    }
    return containCompleted
  }
}
// console.log(Model.list()) this display data JSON
module.exports = Model