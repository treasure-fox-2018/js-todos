var fs = require('fs')

class Model {

  static read () {
    var jsondata = fs.readFileSync('./data.json')
    var data = JSON.parse(jsondata)
    return data
  }

  static showData(){
    var data = this.read();
    var output = ''
    for (var i = 0; i < data.length; i++) {
      output += `${i+1}. ${data[i].task} \n`
    }
    return output
  }

  static addData(task){
    var data = this.read()
    var obj = {
      id: data.length+1,
      status: 'uncomplete',
      task: task
    }
    data.push(obj)
    fs.writeFileSync('./data.json',JSON.stringify(data))
  }

  static findById(numberList){
    var data = this.read()
    for (var i = 0; i < data.length; i++) {
      if (Number(numberList) === data[i].id) {
        return `${data[i].id}. ${data[i].task}`
      }
    }
  }

  static deleteList(numberList){
    var data = this.read()
    for (var i = 0; i < data.length; i++) {
      if (Number(numberList) === data[i].id) {
        data.splice(i,1);
        fs.writeFileSync('./data.json',JSON.stringify(data))
        return `Deleted ${data[i].task} from your TODO list...`
      }
    }
  }

  static completeTask(numberList){
    var data = this.read()
    // var str = ''
    for (var i = 0; i < data.length; i++) {
      if (Number(numberList) === data[i].id) {
        data[i].status = '[ X ]'
        fs.writeFileSync('./data.json',JSON.stringify(data))
      }
    }
    return data
  }

  static uncompleteTask(numberList){
    var data = this.read()
    for (var i = 0; i < data.length; i++) {
      if (Number(numberList) === data[i].id) {
        data[i].status = '[   ]'
        fs.writeFileSync('./data.json',JSON.stringify(data))
      }
    }
    return data
  }
}

module.exports = Model
