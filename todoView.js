"use strict"
const Controller = require('./todoController.js')

class View{

 constructor(){

 }
 static viewHelp(){
    var listHelp = ['node todo.js',
    'node todo.js help',
    'node todo.js list',
    'node todo.js add <task_content>',
    'node todo.js findById <task_id>',
    'node todo.js delete <task_id>',
    'node todo.js complete <task_id>',
    'node todo.js uncomplete <task_id>'];
     for(let i=0; i<listHelp.length; i++){
         console.log(listHelp[i])
     }
 }

 static viewList(dataList){
    console.log(dataList)
 }

 static viewAdd(newTask){
     console.log(`Added ${newTask} to your TODO list..`)
 }

 static viewId(idContent,task){
     console.log(`${idContent}.${task}`)
 }

 static viewDelete(task){
    console.log(`Deleted ${task} from your TODO list..`)
}

static viewStatus(task){
    console.log(task)
}





}

// console.log(View.viewList())

module.exports = View