class Display {
  static help() {
    let strContain = "$ node todo.js\n$ node todo.js help\n$ node todo.js list\n$ node todo.js add <taskContent>\n$ node todo.js findById <taskId>\n$ node todo.js delete <task_id>\n$ node todo.js complete <taskId>\n$ node todo.js uncomplete <taskId>\n$ node todo.js list:created asc|desc\n$ node todo.js list:completed asc|desc\n$ node todo.js tag <taskId> <tag1.......>\n$ node todo.js filter:<tagName>";
    console.log(strContain);
  }

  static list(arrOfObj) {
    let strDisplay = "";
    let strCheck = null;
    for (let i = 0; i < arrOfObj.length; i++) {
      if (arrOfObj[i].completion === false) {
        strCheck = "[ ] "
      } else {
        strCheck = "[x] "
      }
      strDisplay += (arrOfObj[i].id + ". " + strCheck + arrOfObj[i].taskTitle + " | Date Created: " + new Date(arrOfObj[i].dateCreated) + " | Tags: " + (arrOfObj[i].tags)+ "\n")
    }
    let output = strDisplay.slice(0, strDisplay.length - 1)
    console.log(output);
  }

  static add(taskName) {
    console.log("Added " + taskName + " to your TODO list");
  }

  static find(arrOfObj) {
    console.log(arrOfObj.id + ". " + arrOfObj.taskTitle);
  }

  static delete(taskName) {
    console.log("Deleted " + taskName + " from your TODO list");
  }

  static assignTag(taskId, obj) {
    console.log("Tagged task " + obj.taskTitle + " with tags " + obj.tags);
  }

  static getTasksByTags(arr) {
    let strDisplay = "";
    let strCheck = null;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].completion === false) {
        strCheck = "[ ] "
      } else {
        strCheck = "[x] "
      }
      strDisplay += (arr[i].id + ". " + strCheck + arr[i].taskTitle + " | Date Created: " + new Date(arr[i].dateCreated) + " | Tags: " + (arr[i].tags)+ "\n")
    }
    let output = strDisplay.slice(0, strDisplay.length - 1)
    console.log(output);
  }
}

module.exports = Display;
