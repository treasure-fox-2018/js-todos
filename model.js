const fs = require('fs');

class Model {
  static readData(){
    let jsondata = fs.readFileSync('./data.json');
    let data = JSON.parse(jsondata);
    return data;
  }

  static listData(){
    let data = this.readData();
    let output = '';
    for (var i = 0; i < data.length; i++) {
      output += `${data[i].id}. ${data[i].task} \n`
    }
    return output;
  }

  static addData(task){
    let data = this.readData();
    let obj = {
      id: data.length+1,
      status: '[ ]',
      task: task,
      date: new Date(),
      tag: []
    }
    data.push(obj);
    fs.writeFileSync('./data.json',JSON.stringify(data));
    return `Added "${task}" to your TODO list...`
  }

  static findById(id){
    let data = this.readData()
    for (var i = 0; i < data.length; i++) {
      if (id == data[i].id) {
        return `${data[i].id}. ${data[i].task}`
      }
    }
  }

  static deleteData(id){
    let data = this.readData()
    let task = ''
    for (var i = 0; i < data.length; i++) {
      if (id == data[i].id) {
        task += data[i].task
        data.splice(i,1);
        fs.writeFileSync('./data.json',JSON.stringify(data))
        return `Deleted "${task}" from your TODO list...`
      }
    }
  }

  static completeData(id){
    let data = this.readData()
    let output = ''
    for (var i = 0; i < data.length; i++) {
      if (id == data[i].id) {
        data[i].status = '[x]'
        fs.writeFileSync('./data.json',JSON.stringify(data))
      }
    }

    for (var i = 0; i < data.length; i++) {
      output += `${data[i].id}. ${data[i].status} ${data[i].task} \n`
    }
    return output
  }

  static uncompleteData(id){
    let data = this.readData()
    let output = ''
    for (var i = 0; i < data.length; i++) {
      if (id == data[i].id) {
        data[i].status = '[ ]'
        fs.writeFileSync('./data.json',JSON.stringify(data))
      }
    }

    for (var i = 0; i < data.length; i++) {
      output += `${data[i].id}. ${data[i].status} ${data[i].task} \n`
    }
    return output
  }

  static listCreated(request){
    let data = this.readData()
    let output = ''
    if (request == 'asc') {
      data.sort(function(a,b){return new Date(a.date) - new Date(b.date)})
      for (var i = 0; i < data.length; i++) {
        output += `${data[i].id}.${data[i].task} \n`
      }
    }else if (request == 'desc') {
      data.sort(function(a,b){return new Date(b.date) - new Date(a.date)})
      for (var i = 0; i < data.length; i++) {
        output += `${data[i].id}. ${data[i].task} \n`
      }
    }
    return output;
  }

  static listCompleted(request){
    let data = this.readData()
    let output = ''

    if (request == 'asc') {
      data.sort(function(a,b){return new Date(a.date) - new Date(b.date)})
      for (var i = 0; i < data.length; i++) {
        if (data[i].status == '[x]') {
          output += `${data[i].id}. ${data[i].status} ${data[i].task} \n`
        }
      }
    }else if (request == 'desc') {
      data.sort(function(a,b){return new Date(b.date) - new Date(a.date)})
      for (var i = 0; i < data.length; i++) {
        if (data[i].status == '[x]') {
          output += `${data[i].id}. ${data[i].status} ${data[i].task} \n`
        }
      }
    }
    return output;
  }

  static addTag(id,input){
    let data = this.readData()
    for (var i = 0; i < data.length; i++) {
      if (id == data[i].id) {
        data[i].tag.push(input)
        fs.writeFileSync('./data.json',JSON.stringify(data))
        return `Tagged task "${data[i].task}" with tags: ${input}`
      }
    }
  }

  static filter(){
    let data = this.readData()
    let output = ''
    for (var i = 0; i < data.length; i++) {
      if (data[i].tag.length !== 0) {
        output += `${data[i].id}. ${data[i].task} [${data[i].tag}]\n`
      }
    }
    return output;
  }
}

module.exports = Model
