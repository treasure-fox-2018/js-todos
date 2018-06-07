// const Model = require("./model.js");
// const Controller = require("./controller.js");

class View {
  static displayHelp(){
    console.log('   $ node todo.js                              # Will call help');
    console.log('   $ node todo.js help                         # Menampilkan command apa saja yang tersedia');
    console.log('   $ node todo.js list                         # Melihat daftar TODO');
    console.log('   $ node todo.js add <task_content>           # Menambahkan TODO ke dalam list');
    console.log('   $ node todo.js findById <task_id>           # Melihat detail TODO sesuai `task_id` nya');
    console.log('   $ node todo.js delete <task_id>             # Menghapus TODO sesua `task_id` nya');
    console.log('   $ node todo.js complete <task_id>           # Manandai status TODO selesai');
    console.log('   $ node todo.js uncomplete <task_id>         # Menandai status TODO belum selesai');
  }

  static displayData(data){
    console.log(data);
  }

  static show(task){
    console.log(task);
  }

  static showID(numberList){
    console.log(numberList);
  }

  static deleteIdView(numberList){
    console.log(numberList);
  }

  static completeView(numberList){
    console.log(numberList);
  }

  static uncompleteView(numberList){
    console.log(numberList);
  }
}

module.exports = View
