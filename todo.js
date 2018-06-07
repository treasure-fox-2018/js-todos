const Model = require ('./Model/Model.js')
const View = require ('./View/View.js')
const Control = require('./Controller/Controller.js')
let inputNode = process.argv
//list add findById delete complete uncomplete
if (inputNode[2] === undefined) {
  Control.controlHelp()
} else if (inputNode[2] === 'help') {
  Control.controlMenu()
} else if (inputNode[2] === 'list') {
  Control.controlList()
} else if (inputNode[2] === 'add' && inputNode[3] !== undefined) {
  Control.controlAdd(inputNode[3])
} else if (inputNode[2] === 'findById' && inputNode[3] !== undefined) {
  Control.controlFindById(Number(inputNode[3]))
} else if (inputNode[2] === 'delete' && inputNode[3] !== undefined) {
  Control.controlDelete(Number(inputNode[3]))
} else if (inputNode[2] === 'complete' && inputNode[3] !== undefined) {
  Control.controlCompleted(Number(inputNode[3]))
} else if (inputNode[2] === 'uncomplete' && inputNode[3] !== undefined) {
  Control.controlUnCompleted(Number(inputNode[3]))
}


module.exports = inputNode