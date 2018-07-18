let fs = require('fs')
let datas = fs.readFileSync('./data.json', 'utf8')
let data = JSON.parse(datas)
// console.log(data)

class todoModel {

  getData() {
    let todoData = data
    return todoData
  }

  addList() {
    let obj = {}
    let list = []
    for (let i = 3; i < process.argv.length; i++) {
      list.push(process.argv[i])
    }
    obj.id = data.length + 1
    obj.task = list.join(' ')
    obj.status = ' '
    obj.created_date = new Date()
    data.push(obj)
    let data1 = JSON.stringify(data, null, 1)
    fs.writeFileSync('data.json', data1)
    return obj.task

  }


  addTag(id) {
    let list = []
    let objlempar = {}
    for (let i = 4; i < process.argv.length; i++) {
      list.push(process.argv[i])
    }

    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        // let dataList = data[i]
        objlempar.task = data[i].task
        objlempar.tag = list.join(' ')
        if (data[i].tag) {
          let tags = data[i].tag.concat(list)
          data[i].tag = tags

        } else {
          data[i].tag = list
        }


      }
      // console.log(data)
      let data1 = JSON.stringify(data, null, 2)
      fs.writeFileSync('data.json', data1)

    }
    return objlempar
  }



  deleteTask(id) {
    // let data = JSON.parse(datas)
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        let change = data[i].task
        data.splice(i, 1)
        fs.writeFileSync('data.json', JSON.stringify(data, null, 1))
        return `Deleted "${change}" from your TODO list...`
      }
    }
    return 'Data yang akan anda hapus tidak ada'

  }


  completeList(id) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        data[i].status = 'X'
        data = JSON.stringify(data, null, 1)
        fs.writeFileSync('data.json', data)
      }
    }
  }



  filter(tag) {
    let tags = []
    for (let i = 0; i < data.length; i++) {
      let tagdata = data[i].tag
      // if (tagdata) {
      if (tagdata !== undefined && tagdata.indexOf(tag) > -1) {
        tags.push(data[i])

      }

      // }



    }
    return tags

  }

  unCompleteList(id) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        data[i].status = ' '
        data = JSON.stringify(data, null, 1)
        fs.writeFileSync('data.json', data)
      }
    }


  }



  listCreate(sortir) {
    if (!sortir || sortir === 'asc') {
      let c = data.sort(function (a, b) {
        return new Date(a.created_date) - new Date(b.created_date)
      })

      return c

    } else {
      let d = data.sort(function (a, b) {
        return new Date(b.created_date) - new Date(a.created_date)
      })

      return d

    }
  }



  listComplete(list) {
    let dataCompleted = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].status === 'X') {
        dataCompleted.push(data[i])
      }
    }



    if (!list || list === 'asc') {
      let c = dataCompleted.sort(function (a, b) {
        return new Date(a.created_date) - new Date(b.created_date)
      })
      return c

    } else {
      let d = dataCompleted.sort(function (a, b) {
        return new Date(b.created_date) - new Date(a.created_date)
      })
      return d
    }

  }



}

module.exports = todoModel
