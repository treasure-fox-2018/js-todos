let Controller = require('./controller.js')

class View {

  static printAllMenu() {
    console.log('')
    console.log('help')
    console.log('list')
    console.log('list:created asc|desc')
    console.log('list:completed asc|desc')
    console.log('add                      <task_content>')
    console.log('findById                 <task_id>')
    console.log('delete                   <task_id>')
    console.log('complete                 <task_id>')
    console.log('uncomplete               <task_id>')
    console.log('tag                      <task_id> <tag_name_number>')
    console.log('filter:                  <task_id> <tag_name>')
  }

  static printAllTask(allTask) {
    console.log(allTask)
  }

  static printAllTaskWrite(newTask) {
    console.log(`Added ${newTask} to your TODO list...`)
  }

  static printCompleteTask(completedTask) {
    console.log(completedTask)
  }

  static printUncompleteTask(uncompletedTask) {
    console.log(uncompletedTask)
  }

  static printSortDate(sortDate) {
    console.log(sortDate)
  }
}

module.exports = View