let Model = require('../Model/todoModel.js')
let View = require('../View/todoView.js')
let Views = new View()
let Models = new Model()


class todoController {


  viewHelp() {

    Views.viewHelp()
  }

  viewList() {
    let dataTodo = Models.getData()
    Views.viewList(dataTodo)

  }

  addTask() {
    let taskdesc = Models.addList()


    Views.viewAdd(taskdesc)

  }

  findList(id) {
    let tmp = []
    let data = Models.getData()
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        tmp.push(data[i])
      }
    }

    if (tmp.length === 0) {
      Views.findIdcustom('No data Found! ')
    } else {
      Views.findIdcustom(tmp[0])
    }
  }

  deleteTask(id) {
    let data = Models.deleteTask(id)
    Views.viewFindId(data)

  }


  //buat complete
  completeList(id) {
    Models.completeList(id)
    let data = Models.getData()
    // console.log(Models.getData())
    Views.viewComplete(data)

  }

  listCreate(sortir) {
    let ar = Models.listCreate(sortir)
    //  Views.viewFindId(ar)
    Views.viewList(ar)

  }

  listComplete(list) {
    let ar = Models.listComplete(list)
    // Views.viewFindId(ar)
    Views.viewList(ar)
  }

  addTag(id) {
    let tags = Models.addTag(id)
    //Models.addTag(id)
    Views.viewTag(tags)


  }

  filter(tag) {
    let data = Models.filter(tag)
    // console.log(data)
    Views.viewFindId(data)


  }


  unCompleteList(list) {

    Models.unCompleteList(list)
    let data = Models.getData()
    Views.viewComplete(data)


  }


}

module.exports = todoController
