'use strict'

class todoView{
    static list(listToDo){
        let listToDo = listToDo
        for(let i = 0; i < listToDo.length; i++){
            console.log(`${i}. ${listToDo[i].task}`)
        }
    }

    static add(listToDo, newlistTodo){
        if(newlistTodo.length === listToDo.length+1){
            console.log('new task succesfully added')
        }
    }
}

module.exports = todoView