const fs = require('fs');
var list = fs.readFileSync('./data.json', 'utf8')

class Todo {
  constructor() {

  }

  help() {
    console.log();
    console.log('   $ node todo.js                              # Will call help');
    console.log('   $ node todo.js help                         # Menampilkan command apa saja yang tersedia');
    console.log('   $ node todo.js list                         # Melihat daftar TODO');
    console.log('   $ node todo.js add <task_content>           # Menambahkan TODO ke dalam list');
    console.log('   $ node todo.js findById <task_id>           # Melihat detail TODO sesuai `task_id` nya');
    console.log('   $ node todo.js delete <task_id>             # Menghapus TODO sesua `task_id` nya');
    console.log('   $ node todo.js complete <task_id>           # Manandai status TODO selesai');
    console.log('   $ node todo.js uncomplete <task_id>         # Menandai status TODO belum selesai');
    console.log();
  }
}

class List {
  constructor() {
  }
}

let todo = new Todo()


var argv = process.argv

if (argv[2] === 'help') {
  todo.help()
}
