class TodoView {
  static showHelp() {
    console.log(`List of available commands:
    $ node todo.js
    $ node todo.js help
    $ node todo.js list
    $ node todo.js list:created asc|desc
    $ node todo.js list:completed asc|desc
    $ node todo.js filter:<tag_name>
    $ node todo.js add
    $ node todo.js add <task_content>
    $ node todo.js delete <task_id>
    $ node todo.js findById <task_id>
    $ node todo.js complete <task_id>
    $ node todo.js uncomplete <task_id>
    $ node todo.js tag <task_id> <tag_name1> <tag_name2> ... <tag_name(n)>`)
  }

  static showList(todoList) {
    let symbols = { marked: '[x]', unmarked: '[ ]' }
    console.log("TODO list:")
    if (todoList.length === 0) { console.log(`There are no tasks yet`) }
    for (let i = 0; i < todoList.length; i++) {
      let todo = todoList[i]
      console.log(`${todo.id}. ${todo.isComplete ? symbols.marked : symbols.unmarked} ${todo.task}`)
    }
  }

  static displayMessage(command, task) {
    switch(command) {
      case 'add': 
        console.log(`Added "${task}" to your TODO list...`); 
        break;
      case 'delete':
        console.log(`Deleted "${task}" from your TODO list...`);
        break;
      default:
        console.log(`Data not found`)
    }
  }
}

module.exports = TodoView