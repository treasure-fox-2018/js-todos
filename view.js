class View {
  static printHelp(){
    console.log(`node todo.js`);
    console.log(`node todo.js help`);
    console.log(`node todo.js list`);
    console.log(`node todo.js add <task_content>`);
    console.log(`node todo.js findById <task_id>`);
    console.log(`node todo.js delete <task_id>`);
    console.log(`node todo.js complete <task_id>`);
    console.log(`node todo.js uncomplete <task_id>`);
  }

  static viewData(data){
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
