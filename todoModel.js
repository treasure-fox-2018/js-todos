'use strict'

let fs = require('fs')

class todoModel{
    
    static list(){
        let todoList = JSON.parse(fs.readFileSync('./data.json', 'utf8'))
        return todoList
    }

    static add(newTask) {
        let list = todoModel.list()
        list.push({id:list.length+1, 
                    task: newTask,
                    status: 'uncomplete',
                    date: new Date(),
                    tag: []
                })

        list = JSON.stringify(list)
        let add = fs.writeFileSync('./data.json', list)
        return true

    }

    static findById(findId){
        let taskList = JSON.parse(fs.readFileSync('./data.json', 'utf8'))
        for(let i = 0; i < taskList.length; i++){
            if(taskList[i].id === findId){
                return taskList[i]
            }
        }
        
    }

    static delete(id){
        let taskList = todoModel.list()
        let deleteItem;
        for(let i = 0; i < taskList.length; i++){
            if(taskList[i].id === id){
                deleteItem = taskList[i]
                taskList.splice(i, 1)
            }
        }
        
        taskList = JSON.stringify(taskList)
        let remove = fs.writeFileSync('./data.json', taskList)
        return deleteItem
    }

    static complete(id){
        let taskList = todoModel.list()
        for(let i = 0; i < taskList.length; i++){
            if(taskList[i].id ===id){
                if(taskList[i].status === 'uncomplete'){
                    taskList[i].status = 'complete'
                    
                }
            }
        }

        let task = JSON.stringify(taskList)
        let adding = fs.writeFileSync(task)
        return taskList
    }

    static uncomplete(id){
        let taskList = todoModel.list()
        for(let i = 0; i < taskList.length; i++){
            if(taskList[i].id ===id){
                if(taskList[i].status === 'complete'){
                    taskList[i].status = 'uncomplete'
                    
                }
            }
        }

        let task = JSON.stringify(taskList)
        let adding = fs.writeFileSync(task)
        return taskList
    }

    static addTag(tag, id){
        let list = todoModel.list()
        let index = 0;
        for(let i = 0; i < list.length; i++){
            for(let j = 0;j < tag.length; j++){
                if(list[i].id === id){
                    index = i
                    list[i].tag.push(tag[j])
                }
            }
        }

        return list[index]

    }

    static filter(tag){
        let list = todoModel.list()
        let result = []
        for(let i = 0; i < list.length; i++){
            for(let j = 0; j < list[i].tag.length; j++){
                if(list[i].tag[j] === tag){
                    
                    result.push(list[i])
                }
            }
        }

        return result
    }
}


module.exports = todoModel