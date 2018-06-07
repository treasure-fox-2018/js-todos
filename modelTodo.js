var fs = require('fs')

class Model_todo{
    constructor(){

    }

    static showList(){
        var arrList = [
            {1 : 'help'},
            {2 : 'list'},
            {3 : 'add <task_content>'},
            {4 : 'findBYId <task_id>'},
            {5 : 'delete <task_id>'},
            {6 : 'complete <task_id>'},
            {7 : 'uncomplete <task_id>'},
                        ]
        return arrList
    }

    
    
    add(){
        
    }
    
    findById(){
        
    }
    
    delete(){
        
    }
    
    complete(){

    }
    
    uncomplete(){
        
    }
    
    static showListTugas(){
        var listTugas = fs.readFileSync('data.json','utf8')
        var parsing = JSON.parse(listTugas)
        return parsing
        
    }
}

console.log(typeof(Model_todo.showListTugas()))
console.log(Model_todo.showListTugas())

module.exports = Model_todo