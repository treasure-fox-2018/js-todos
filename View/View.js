class View {
  static viewHelp() {
    console.log('$ node todo.js help')
  }
  static viewMenu() {  
    console.log('$ node todo.js')
    console.log('$ node todo.js help')
    console.log('$ node todo.js list')
    console.log('$ node todo.js add <task_content>')
    console.log('$ node todo.js findById <task_id>')
    console.log('$ node todo.js delete <task_id>')
    console.log('$ node todo.js complete <task_id>')
    console.log('$ node todo.js uncomplete <task_id>')
  }
  static viewList(list) {
    // console.log(list) // this not displaying
    for (let i = 0; i < list.length; i++) {
      console.log(`${list[i].id} : ${list[i].task} `)
    }
  }
  static viewAdd(newTask) {
    console.log(`Added "${newTask}" to your TODO list. . .`)
  }
  static findById(id, task, msg) {
    console.log(`${id} : ${task}`)
  }
  static deleteById(delData) {
    console.log(delData)
  }
}
// console.log(View.viewHelp())
module.exports = View