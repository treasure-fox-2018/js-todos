let fs=require('fs');


class Model {
  constructor() {

  }

  static read() {
    let dataJSON=fs.readFileSync('./data.json', 'utf8');
    let dataList=JSON.parse(dataJSON);
    return dataList;
  }

  static create(newData) {
    let dataList = Model.read();
    dataList.push(newData);
    let newDataList=JSON.stringify(dataList);
    let dataJSON=fs.writeFileSync('./data.json', newDataList);
    return true;
  }

  static delete(id) {
    let dataList = Model.read();
    for (let i = 0 ; i < dataList.length ; i++) {
      if (dataList[i].id === id) {
        dataList.splice(i,1);
        let newDataList=JSON.stringify(dataList);
        let dataJSON=fs.writeFileSync('./data.json', newDataList);
        return true;
      }
    }
    return false;
  }
}

module.exports = Model;