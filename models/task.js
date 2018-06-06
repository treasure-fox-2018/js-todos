const fs = require('fs')
const taskList = JSON.parse(fs.readFileSync('./data.json','utf8'))

class Task{
    static getAll(){
        return taskList
    }

    static addList(){
        // console.log('tes')
        const argv = process.argv
        let arr =[]
        for(let i=3;i<argv.length;i++){
            arr.push(argv[i])
          
        }
     
        let obj = {}
        obj.id = taskList[taskList.length-1].id + 1
        obj.task = arr.join(' ')
        obj.status = "[ ]"
        obj.create = new Date()
        taskList.push(obj)
        let tempt = JSON.stringify(taskList,null,2)
        fs.writeFileSync('./data.json',tempt)
        return obj
    }

    static deleteData(id){
            let arr = null
            for(let i=0;i<taskList.length;i++){
                if(taskList[i].id == id){
                    arr = taskList[i]
                    taskList.splice(i,1)
                    // console.log(arr)
                }
            }
            let tempt = JSON.stringify(taskList,null,2)
            fs.writeFileSync('./data.json',tempt)
            return arr
        
       
    }

    static updateData(id,status){
        for(let i=0;i<taskList.length;i++){
            if(taskList[i].id == id){
                if(status == 'complete'){
                    taskList[i].status = "[X]"
                }else if(status == "uncomplete"){
                    taskList[i].status = "[ ]"
                }
            }
        }
        let tempt = JSON.stringify(taskList,null,2)
        fs.writeFileSync('./data.json',tempt)
    }

  

    
}
module.exports = Task