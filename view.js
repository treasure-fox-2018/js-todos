let Controller = require('./controller.js')

class View {

  static printAllMenu() {
    console.log('')
    console.log('help')
    console.log('list')
    console.log('add        <task_content>')
    console.log('findById   <task_id>')
    console.log('delete     <task_id>')
    console.log('complete   <task_id>')
    console.log('uncomplete <task_id>')
  }

  static printAllTask(allTask) {
    console.log(allTask)
  }

}

module.exports = View