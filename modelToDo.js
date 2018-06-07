var fs = require ('fs');

class Model {

  static read () {
    let data = require('./data.json');
    return data;
  }

  static write (data) {
    let dataList = JSON.stringify(data)
    let dataJSON = fs.writeFileSync('./data.json', dataList);
  }
  static add(parameter) {
    var dataList = this.read()
    let newParameter = {
      id : dataList.length + 1,
      check : '[ ]',
      task : parameter,
      tag : [],
      createdDate : new Date()
    }
    dataList.push(newParameter)
    this.write(dataList);
    return true;
  }

  static findById (parameter) {
    var dataList = this.read()
    // var resultId = [];
    for (var i = 0; i <= dataList.length - 1; i++) {
      if (dataList[i].id === Number(parameter)) {
        return dataList[i]
      }
    }
  }

  static delete (parameter) {
    var dataList = this.read()
    var resultDelete = {};
    for (var i = 0; i <= dataList.length - 1; i++) {
      if (dataList[i].id === Number(parameter)) {
        resultDelete = dataList[i];
        dataList.splice(i, 1);
        this.write(dataList);
        
      }
    }
    return resultDelete
  }
  
  static complete (parameter) {
    var dataList = this.read()
    
    for (var i = 0; i <= dataList.length - 1; i++) {
      if (dataList[i].id === Number(parameter)) {
        if (dataList[i].check === '[ ]') {
          dataList[i].check = '[x]'
          this.write(dataList);
        }
      }
    }
  }

  static uncomplete (parameter) {
    var dataList = this.read()
    
    for (var i = 0; i <= dataList.length - 1; i++) {
      if (dataList[i].id === Number(parameter)) {
        if (dataList[i].check === '[x]') {
          dataList[i].check = '[ ]'
          this.write(dataList);
        }
      }
    }
  }

  static listCreated (parameter) {
    var dataList = Model.read();

    if (parameter === 'asc') {
      dataList.sort(function (a,b) {return new Date(a.createdDate) - new Date (b.createdDate)});
    }
    else if (parameter === 'desc'){
      dataList.sort(function (a,b) {return new Date(b.createdDate) - new Date (a.createdDate)});
    }
    return dataList
  }

  static listComplete () {
    var dataList = Model.read();

    var dataComplete = [];
    for (var i = 0; i <= dataList.length - 1; i++) {
      if (dataList[i].check === '[x]') {
        dataComplete.push(dataList[i])
      }
    }
    return dataComplete
  }

  static addTag (argv) {
    var dataList = Model.read();
    for (var i = 0; i <= dataList.length - 1; i++) {
      for (var j = 4; j <= argv.length - 1; j++) {
        if (dataList[i].id === Number(argv[3])) {
          dataList[i].tag.push(argv[j]);
          this.write(dataList);
        }
      }
    }
  }

  static filter (parameter) {
    var dataList = Model.read();
    var resultArr = [];
    for (var i = 0; i <= dataList.length - 1; i++) {
      for (var j = 0; j <= dataList[i].tag.length - 1; j++) {
        if (dataList[i].tag[j] === parameter) {
          resultArr.push (dataList[i])
        }
      }
    }
    return resultArr;
  }

}


// console.log(Model.filter('hobby'))


module.exports = Model
