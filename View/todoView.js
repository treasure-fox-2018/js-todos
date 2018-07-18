class todoView {


  viewHelp() {
    let helpList = '-- List of HELP that you can use to operate todoList Node JS --- \n'
    helpList += '\nnode todo.js help  #menampilkan command apa saja yang tersedia\n';
    helpList += 'node todo.js list #Melihat daftar TODO\n'
    helpList += 'node todo.js add < task_content > #Menambahkan TODO ke dalam list\n';
    helpList += 'node todo.js findById < task_id > #Melihat detail TODO sesuai `task_id` nya\n';
    helpList += 'node todo.js delete < task_id > #Menghapus TODO sesuai `task_id` nya\n';
    helpList += 'node todo.js complete < task_id > #Menandai status TODO selesai\n';
    helpList += 'node todo.js uncomplete < task_id > #Menandai status TODO belum selesai\n'
    console.log(helpList)

  }

  viewList(data) {
    // console.log(data)
    let ai = 1
    for (let i = 0; i < data.length; i++) {
      console.log(ai + '. ' + '[' + data[i].status + ']' + ' ' + data[i].task)
      ai++
    }
  }


  findIdcustom(data) {
    // console.log(data)
    if (typeof data === 'object') {
      console.log(data.id + '. ' + data.task)
    } else {
      console.log(data)
    }

  }


  viewAdd(msg) {
    console.log('add ' + msg + ' to your to do List')
  }

  viewFindId(data) {
    console.log(data)
  }

  viewTag(data) {
    console.log('Tagged task ' + data.task + ' ' + 'with tags: ' + data.tag)
  }


  viewComplete(data) {
    data = JSON.parse(data)
    for (let i = 0; i < data.length; i++) {
      console.log('[' + data[i].status + '] ' + data[i].task)
    }
  }



}

module.exports = todoView
