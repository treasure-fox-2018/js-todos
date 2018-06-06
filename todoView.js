"use strict"

class View{

 constructor(){

 }
 static viewHelp(){
     let listHelp =['node todo.js',
     'node todo.js help',
     'node todo.js list',
     'node todo.js add <task_content>',
     'node todo.js findById <task_id>',
     'node todo.js delete <task_id>',
     'node todo.js complete <task_id>',
     'node todo.js uncomplete <task_id>']

     for(let i=0; i<listHelp.length; i++){
         console.log(listHelp[i])
     }
 }
}

// console.log(View.viewHelp())

module.exports = View