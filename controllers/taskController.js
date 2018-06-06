const modelTask = require('../models/task.js')
const view = require('../views/todo.js')
const fs = require('fs')

class TaskController{
    static getAll(){
        let data = modelTask.getAll()
        view.listData(data)
    }

    static addList(){
        let newData = modelTask.addList()
        view.addList(newData)
    }

    static findById(id){
        let data = modelTask.getAll()
        for(let i=0;i<data.length;i++){
            if(data[i].id == id){
                view.findById(data[i])
            }
           
        } 
    }

    static deleteData(id){
        let del = modelTask.deleteData(id)
        view.deleteData(del)
    }

    static complete(id){
        let data = modelTask.updateData(id,'complete')
        let listData = modelTask.getAll()
        view.complete(listData)
    }

    static uncomplete(id){
        let data = modelTask.updateData(id,'uncomplete')
        let listData = modelTask.getAll()
        view.complete(listData)
    }

    static sortDate(input){
        let listData = modelTask.getAll()
        if(input == 'desc'){
            let desc = listData.sort(function (a,b){
               return new Date(b.create) - new Date(a.create) 
            })
            view.sortDesc(desc)
        }else if(input == 'asc'){
            let asc = listData.sort(function(a,b){
                return new Date(a.create) - new Date(b.create)
            })
            view.sortDesc(asc)
        }
    }

    static listComplete(){
        let listData = modelTask.getAll()
        for(let i=0;i<listData.length;i++){
            if(listData[i].status == '[X]'){
                view.listComplete(listData[i])
            }
        }
    }

    static addTag(id){
        let listData = modelTask.getAll()
        let arr = []
        const argv = process.argv
        for(let i=4;i<argv.length;i++){
            arr.push(argv[i])
        }
        let obj = {}
        for(let i=0;i<listData.length;i++){
            if(listData[i].id == id){
                obj.task = listData[i].task
                obj.tag = arr  
                if(listData[i].tag){ 
                          
                    let tags= listData[i].tag.concat(arr)
                    listData[i].tag = tags
                }else{
                    listData[i].tag = arr
                }
                
            }
           
            let tempt = JSON.stringify(listData,null,2)
            fs.writeFileSync('./data.json',tempt)
          
            
        }
        view.addTag(obj)
    }


    
}

module.exports = TaskController