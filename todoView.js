'use strict'

class todoView{
    static list(listToDo){
        let list = listToDo
        for(let i = 0; i < list.length; i++){
            console.log(`${i+1}. ${list[i].task}`)
        }
    }

    static listByOrder(listToDo, option){
        let list = listToDo

        if(option === 'asc'){
            
            for(let i = 0; i < list.length; i++){
                console.log(`${i+1}. ${list[i].task}`)
            }
        } else if(option === 'desc'){
            
            for(let i = list.length-1; i >= 0; i--){
                console.log(`${i+1}. ${list[i].task}`)
            }
        } else if(option === 'completed'){
            let todoThing = []
            
            for(let i = 0; i < list.length; i++){
                if(list[i].status === 'complete'){                   
                    todoThing.push(list[i])
                }
            }

            for(let i = 0; i < list.length; i++){
                if(list[i].status === 'uncomplete'){
                    todoThing.push(list[i])
                }
            }

            let showing = todoView.complete(todoThing)
        }
    }

    static add(newTask, result){
        if(result === true){
            console.log(`Added ${newTask} to your TODO list`)
        }
    }

    static findById(taskDetail){
        
        console.log(`${taskDetail.id}. ${taskDetail.task}`)
    }

    static delete(taskDetail){
        console.log(`Deleted ${taskDetail.task} from your TODO List...`)
    }

    static complete(taskDetail){
        for(let i = 0; i < taskDetail.length; i++){
            if(taskDetail[i].status === 'uncomplete'){
                console.log(`${taskDetail[i].id}. [ ] ${taskDetail[i].task}`)
            } else {
                console.log(`${taskDetail[i].id}. [x] ${taskDetail[i].task}`)
            }
        }
    }

    static uncomplete(taskDetail){
        for(let i = 0; i < taskDetail.length; i++){
            if(taskDetail[i].status === 'uncomplete'){
                console.log(`${taskDetail[i].id}. [ ] ${taskDetail[i].task}`)
            } else {
                console.log(`${taskDetail[i].id}. [x] ${taskDetail[i].task}`)
            }
        }
    }

    static addTag(taskDetail){
        console.log(`Tagged task ${taskDetail.task} with taggs: ${taskDetail.tag.join(' ')}`)
    }

    static filter(task){
        for(let i = 0; i < task.length; i++){
            console.log(`${task[i].id}. ${task[i].task} with tag: ${task[i].tag.join(' ')}`)
        }
    }
}

module.exports = todoView