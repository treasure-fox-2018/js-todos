
class ViewToDo{

    static helpList(){
        // console.log('tes')
        let list =['node index.js help','node index.js list',
                   'node index.js add','node index.js findById',
                   'node index.js delete','node index.js complete','node index.js uncomplete']
        for(let i=0;i<list.length;i++){
            console.log(list[i])
        }
        return 'asdsa'
    }
    static listData(data){
        for(let i=0;i<data.length;i++){
            console.log(`id: ${i+1} task: ${data[i].task}`)
        }
    }

    static addList(taskName){
        console.log(`added ${taskName.task} to your todo list`)
    }

    static findById(task){
        console.log(`id: ${task.id} task: ${task.task}`)
    }

    static deleteData(task){
        console.log(`delete ${task.task} from your todo list`)
    }

    static complete(listData){
        let arr = []
        for(let i=0;i<listData.length;i++){
            arr.push(`${listData[i].id}. task: ${listData[i].task} status: ${listData[i].status} create: ${listData[i].create}`)   
        }
        console.log(arr.join('\n'))
    }

    static uncomplete(listData){
        let arr = []
        for(let i=0;i<listData.length;i++){
            arr.push(`${listData[i].id}. task: ${listData[i].task} status: ${listData[i].status} create: ${listData[i].create}`)   
        }
        console.log(arr.join('\n'))
    }

    static sortDesc(listData){
        console.log(listData)
        // let arr = []
        // for(let i=0;i<listData.length;i++){
        //     arr.push(`${listData[i].id}. task: ${listData[i].task} status: ${listData[i].status} create: ${listData[i].create}`)   
        // }
        // console.log(arr.join('\n'))
    }

    static listComplete(data){
        console.log(`id: ${data.id} task: ${data.task} status: ${data.status}`)
    }

    static addTag(data){
        console.log(`added ${data.tag} to task ${data.task}`)
    }
}

module.exports = ViewToDo