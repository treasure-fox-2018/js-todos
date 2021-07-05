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
    console.log('$ node todo.js list:created asc|desc')
    console.log('$ node todo.js list:complete asc|desc');
    console.log('$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> <tag_name_N>')
    console.log('$ node todo.js filter: <tag_name>');
  }
  static viewList(list) {
    // console.log(list) // this not displaying
    for (let i = 0; i < list.length; i++) {
      console.log(`${list[i].id} : [${list[i].mark}] ${list[i].task} `)
    }
  }
  static viewAdd(newTask) {
    console.log(`Added "${newTask}" to your TODO list. . .`)
  }
  static findById(id, task, msg) {
    console.log(`${id} : ${task}`)
  }
  static deleteById() {
    console.log(`Your list are deleted in your TODO list. . .`)
  }
  static listCreated(sortData) {
    for (let i = 0; i < sortData.length; i++) {
      console.log(`${sortData[i].id} : [${sortData[i].mark}] ${sortData[i].task} `)
    }
  }
  static listAsc(sortData) {
    for (let i = 0; i < sortData.length; i++) {
      console.log(`${sortData[i].id} : [${sortData[i].mark}] ${sortData[i].task} `)
    }
  }
  static listDesc(sortData) {
    for (let i = 0; i < sortData.length; i++) {
      console.log(`${sortData[i].id} : [${sortData[i].mark}] ${sortData[i].task} `)
    }
  }
  static listCompleted(listComp) {
    for (let i = 0; i < listComp.length; i++) {
      console.log(`${listComp[i].id} : [${listComp[i].mark}] ${listComp[i].task} `)
    }
  }
  static viewtag(list) {
    console.log(`Tagged Task "${list.task}" with tags: ${list.tag}`);
  }
  static viewFilter(list) {
    console.log(`${list.id} : ${list.task} [${list.tag}]`);
  }
}
// console.log(View.viewHelp())
module.exports = View