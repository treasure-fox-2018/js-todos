var fs = require('fs')

class Model {

  static read () {
    var jsondata = fs.readFileSync('./data.json')
    var data = JSON.parse(jsondata)
    return data
  }

  static listData(){
    var data = this.read();
    var output = ''
    for (var i = 0; i < data.length; i++) {
      if (data[i].status == 'uncomplete') {
        data[i].status = '[   ]'
        output += `${data[i].id}. ${data[i].status} ${data[i].task} \n`
      }else {
        output += `${data[i].id}. ${data[i].status} ${data[i].task} \n`
      }
    }
    return output
  }

  static addData(task){
    var data = this.read()
    var obj = {
      id: data.length+1,
      status: 'uncomplete',
      task: task,
      date: new Date()
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
    var list = this.listData()
    for (var i = 0; i < data.length; i++) {
      if (Number(numberList) === data[i].id) {
        data[i].status = '[ X ]'
        fs.writeFileSync('./data.json',JSON.stringify(data))
      }
    }
    return list
  }

  static uncompleteTask(numberList){
    var data = this.read()
    var list = this.listData()
    for (var i = 0; i < data.length; i++) {
      if (Number(numberList) === data[i].id) {
        data[i].status = '[   ]'
        fs.writeFileSync('./data.json',JSON.stringify(data))
      }
    }
    return list
  }

  static listCreated(input){
    var data = this.read(input)
    var output = ''
    if (input === 'dsc') {
      data.sort(function(a,b){return new Date(b.date) - new Date(a.date)})
        for (var i = 0; i < data.length; i++) {
          output += `${data[i].id}. ${data[i].status} ${data[i].task} \n`
        }
      return output
    }else if (input === 'asc') {
      data.sort(function(a,b){return new Date(a.date) - new Date(b.date)})
        for (var i = 0; i < data.length; i++) {
          output += `${data[i].id}. ${data[i].status} ${data[i].task} \n`
        }
      return output
    }else {
      for (var i = 0; i < data.length; i++) {
        output += `${data[i].id}. ${data[i].status} ${data[i].task} \n`
      }
      return output
    }
  }
}

module.exports = Model
