class ToDo{
  static help(){
    console.log('help');
    console.log('list');
    console.log('add <task_content>');
    console.log('findById <task_id>');
    console.log('delete <task_id>');
    console.log('complete <task_id>');
    console.log('uncomplete <task_id>');
    console.log('list:sort <asc/des>');
    console.log('list:completed <asc/des>');
    console.log('tag <task_id> <tags>');
    console.log('filter <tags>');
  }

  static list(data){
    for (let i in data) {
      console.log(`${data[i].id}. ${data[i].status} ${data[i].task}`);
    }
  }

  static addSuccessMessage(task){
    console.log(`Added "${task}" to your TODO list`);
  }

  static deleteSuccessMessage(deletedTaskObj){
    if (deletedTaskObj === undefined){
      console.log(`Invalid ID`);
    } else {
      console.log(`Deleted "${deletedTaskObj[0].task}" from your TODO list`);
    }
  }

  static taskById(id, task){
    console.log(`${id}. ${task}`);
  }

  static tagSuccess(taggedTaskObj){
    console.log(`Now task "${taggedTaskObj.task}" tagged with: ${taggedTaskObj.tags}`)
  }
  
}

module.exports = ToDo;