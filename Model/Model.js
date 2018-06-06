let fs = require('fs')

class Model {
  static Help() {
    let menuHelpArr = []
    for (let i = 0; i < 8; i++) {
      let menuHelp = ['$ node todo.js']
      menuHelpArr.push(menuHelp[i])
    }
    return menuHelpArr
  }
}

module.exports = Model