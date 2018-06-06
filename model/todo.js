const fs = require('fs')
var listTodo = fs.readFileSync('../data.json','utf8')
var JSONparse = JSON.parse(listTodo)

class Todo{
    static help(){
        var help = `
        node todo.js
        node todo.js help
        node todo.js list
        node todo.js add <task_content>
        node todo.js findById <task_id>
        node todo.js delete <task_id>
        node todo.js complete <task_id>
        node todo.js uncomplete <task_id>
        `
        return help
    }

    static readFile(){
        return JSONparse
    }

    static add(Task){
        var objTask = {id:'',task:'',status:'[ ]',date:new Date()}
        if(JSONparse.length == 0){
            objTask.id = 1
        }
        else{
            objTask.id = JSONparse[JSONparse.length-1].id + 1
        }
        objTask.task = Task
        objTask.tag = []
        JSONparse.push(objTask)
        var JSONstringify = JSON.stringify(JSONparse,null,1)
        var writeFile = JSON.stringify(fs.writeFileSync('../data.json',JSONstringify))
        // return JSONparse
    }
    static delete(id){
        var indeksTask = 0
        var task = ''
        for(let i = 0; i < JSONparse.length; i++){
            if(JSONparse[i].id==id){
                indeksTask = i
                task = JSONparse[i].task
            }
        }
        JSONparse.splice(indeksTask,1)
        var JSONstringify = JSON.stringify(JSONparse,null,1)
        var writeFile = fs.writeFileSync('../data.json',JSONstringify)
        return task
    }

    static update(id,status){
        for(let i = 0; i < JSONparse.length; i++){
            if(JSONparse[i].id==id){
                if (status=='complete') {
                    JSONparse[i].status = '[X]'
                }
                else if(status=='uncomplete') {
                    JSONparse[i].status = '[ ]'
                }
            }
        }
        var JSONstringify = JSON.stringify(JSONparse,null,1)
        var writeFile = fs.writeFileSync('../data.json',JSONstringify)
    }

    static addTag(id,tag){
        var tags = []
        for(let i = 0; i < JSONparse.length; i++){
            if(JSONparse[i].id==id){
                if(JSONparse[i].tag.length!=0){
                    for(let j = 0; j < JSONparse[i].tag.length; j++){
                        tags.push(JSONparse[i].tag[j])
                    }
                }
                for(let i = 0; i < tag.length; i++){
                    tags.push(tag[i])
                }
                JSONparse[i].tag = tags
            }
        }
        var JSONstringify = JSON.stringify(JSONparse,null,1)
        var writeFile = fs.writeFileSync('../data.json',JSONstringify)
    }
}

module.exports = Todo