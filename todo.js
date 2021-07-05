const Model = require ('./Model/Model.js')
const View = require ('./View/View.js')
const Control = require('./Controller/Controller.js')
let inputNode = process.argv
// let separeteInput = inputNode[2]
// let inputArr = []
// let str = ''
// for (let i = 0; i <= separeteInput.length; i++) {
//   if (separeteInput[i] === ':') {
//     inputArr.push(str)
//     str = ''
//   } else if(i === separeteInput.length) {
//     inputArr.push(str)
//     str = ''
//   } else {
//     str += separeteInput[i]
//   }
// }
// console.log(inputArr)
//list add findById delete complete uncomplete
if (inputNode[2] === undefined) {
  Control.controlHelp()
} else if (inputNode[2] === 'help') {
  Control.controlMenu()
} else if (inputNode[2] === 'list') {
  Control.controlList()
} else if (inputNode[2] === 'add' && inputNode[3] !== undefined) {
  Control.controlAdd(inputNode[3], inputNode[4])
} else if (inputNode[2] === 'findById' && inputNode[3] !== undefined) {
  Control.controlFindById(Number(inputNode[3]))
} else if (inputNode[2] === 'delete' && inputNode[3] !== undefined) {
  Control.controlDelete(Number(inputNode[3]))
} else if (inputNode[2] === 'complete' && inputNode[3] !== undefined) {
  Control.controlCompleted(Number(inputNode[3]))
} else if (inputNode[2] === 'uncomplete' && inputNode[3] !== undefined) {
  Control.controlUnCompleted(Number(inputNode[3]))
} else if (inputNode[2] === 'list:created' && inputNode[3] === undefined) {
  Control.controlListCreated()
} else if (inputNode[2] === 'list:created' && inputNode[3] !== 'asc') {
  Control.controlListAsc() //asc
} else if (inputNode[2] === 'list:created' && inputNode[3] !== 'desc') {
  Control.controlListDesc() //desc
} else if (inputNode[2] === 'list:complete' && inputNode[3] === undefined) {
  Control.controlListCompleted()
} else if (inputNode[2] === 'tag' && inputNode[3] !== undefined) {
  Control.controlTag(inputNode[3], inputNode[4])
} else if (inputNode[2].slice(0, 6) === 'filter') {
  Control.controlFilter(inputNode[2].slice(0, 6), inputNode[2].slice(7, inputNode[2].length))
}

module.exports = inputNode