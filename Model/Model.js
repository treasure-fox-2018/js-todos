let fs = require('fs')
let listData = JSON.parse(fs.readFileSync('./data.json', 'utf8'))

class Model {
  static list() {
    return listData
  }

  static add(newTask) {
    let addList = {
      id: this.list().length+1,
      task: newTask
    }
    listData.push(addList)
    fs.writeFileSync('./data.json', JSON.stringify(listData)) // don't stringify if modified unpushed
  }

  static findById() {
    return listData
  }
}
// console.log(Model.list()) this display data JSON
module.exports = Model