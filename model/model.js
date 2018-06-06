class Model {
  constructor() {

  }

  static list() {
    let fs=require('fs');
    let dataJSON=fs.readFileSync('./data.json', 'utf8');
    let data=JSON.parse(dataJSON);
    return data;
  }
}

module.exports = Model;