class ToDoView{
  static help(){
    console.log("help");
    console.log("list");
    console.log("add <task_content>");
    console.log("findById <task_id>");
    console.log("delete <task_id>");
    console.log("complete <task_id>");
    console.log("uncomplete <task_id>");
  }

  static list(data){
    for (let i in data) {
      console.log(`${data[i].id}. ${data[i].status} ${data[i].task}`)
    }
  }

  static addSuccessMessage(task){
    console.log(`Added "${task}" to your TODO list`)
  }

  static deleteSuccessMessage(deletedTaskObj){
    console.log(`Deleted "${deletedTaskObj[0].task}" from your TODO list`)
  }

  static taskById(id, task){
    console.log(`${id}. ${task}`)
  }
  
}

module.exports = {
  ToDoView
}