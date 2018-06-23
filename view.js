class View {
  static showHelp(){
    console.log('node todo.js');
    console.log('node todo.js help');
    console.log('node todo.js list');
    console.log('node todo.js add <task_content>');
    console.log('node todo.js findById <task_id>');
    console.log('node todo.js delete <task_id>');
    console.log('node todo.js complete <task_id>');
    console.log('node todo.js uncomplete <task_id>');
  }

  static showList(list){
    console.log(list);
  }

  static showAdd(task){
    console.log(task);
  }

  static showFind(id){
    console.log(id);
  }

  static showDeleted(id){
    console.log(id);
  }

  static showCompleted(id){
    console.log(id);
  }

  static showUncompleted(id){
    console.log(id);
  }

  static showListCreated(input){
    console.log(input);
  }

  static showListCompleted(input){
    console.log(input);
  }

  static showTag(id,input){
    console.log(id,input);
  }

  static showFilter(input){
    console.log(input);
  }
}


module.exports = View
