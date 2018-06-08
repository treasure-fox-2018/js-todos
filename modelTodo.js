var fs = require('fs')

class Model_todo{
    constructor(){
        
    }
    
    static read(){
        var listTugas = fs.readFileSync('data.json','utf8')
        var parsing = JSON.parse(listTugas)
        
        return parsing
    }

    static showMenu(){
        var arrList = [
            {1 : 'help'},
            {2 : 'list'},
            {3 : 'add <task_content>'},
            {4 : 'findById <task_id>'},
            {5 : 'delete <task_id>'},
            {6 : 'complete <task_id>'},
            {7 : 'uncomplete <task_id>'},
            {8 : 'list : created asc'},
            {9 : 'list : created des'},
            {10 : 'list : completed asc'},
            {10 : 'list : completed asc'},
            {11 : 'tag <task_id> <tag_name_1><tag_name_2> .... <tag_name_N>'},
            {12 : 'filter: <tag_name>'}
                        ]
        return arrList
    }

    static addTask(toAdd){ 
        var parsing = this.read()       
        let objTask = { 'id' : parsing.length+1,
                        'status' : ' ',
                    'task' : toAdd}

        parsing.push(objTask)
        fs.writeFileSync('data.json',JSON.stringify(parsing))
        return parsing
    }
    
    static findById(byId){
        var parsing = this.read()
        var idFound = ''
        for(var i = 0; i < parsing.length; i++){
            if(parsing[i].id === Number(byId)){
                idFound = `${parsing[i].id} : ${parsing[i].task}`
            }
        }
        return idFound
    }
    
    static delete(byId){
        var parsing = this.read()

        for(var i = 0; i < parsing.length; i++){
            if(parsing[i].id === Number(byId)){
                parsing.splice(i,2)
                let dataBaru = fs.writeFileSync('./data.json', JSON.stringify(parsing))
            }
        }
        // fs.writeFileSync('data.json')
        return parsing
    }

    static showUpdateList(){
        var parsing = this.read()
        var arr = []
        for(var i = 0; i < parsing.length; i++){
            var str = ''
            for(var key in parsing[i]){
                str = `${parsing[i].id}. [${parsing[i].status}] ${parsing[i].task}`
            }
            arr.push(str)
        }
        return arr.join('\n')
    }
    
    static completeTask(num){
        var parsing = this.read()

        for(var i = 0; i < parsing.length; i++){
            if(parsing[i].id === Number(num)){
                parsing[i].status = 'X'
                let dataBaru = fs.writeFileSync('./data.json', JSON.stringify(parsing))   
            }
        }
        return parsing
    }
    
    static uncompleteTask(num){
        var parsing = this.read()

        for(var i = 0; i < parsing.length; i++){
            if(parsing[i].id === Number(num)){
                parsing[i].status = ' '
                let dataBaru = fs.writeFileSync('./data.json', JSON.stringify(parsing))
            }
        }
        return parsing
    }
    
    static showListTugas(){
        var parsing = this.read()
        var arr = []
        for(var i = 0; i < parsing.length; i++){
            var str = ''
            for(var key in parsing[i]){
                str = `${parsing[i].id} : ${parsing[i].task}`
            }
            arr.push(str)
        }
        return arr.join('\n')
    }

    static createdASC(){
        var parsing = this.read()
        for(var i = 0; i < parsing.length; i++){
            for(var j = i+1; j < parsing.length; j++){
                if(parsing[j].created_at < parsing[i].created_at){
                    var temp = parsing[j]
                    parsing[j] = parsing[i]
                    parsing[i] = temp
                }
            }
        }
        // console.log(parsing);
        
        // return parsing
        var count = 1
        var arr = []
        for(var i = 0; i < parsing.length; i++){
            var str = ''
            for(var key in parsing[i]){
                str = `${count}. [${parsing[i].status}] ${parsing[i].task}`
            }
            count+=1
            arr.push(str)
        }
        return arr.join('\n')
    }

    static createdDSC(){
        var parsing = this.read()
        // console.log(parsing);
        
        // parsing.sort(function(a,b){
        //     return a.created_at < b.created_at
        // })
        var parsing = this.read()
        for(var i = 0; i < parsing.length; i++){
            for(var j = i+1; j < parsing.length; j++){
                if(parsing[j].created_at > parsing[i].created_at){
                    var temp = parsing[j]
                    parsing[j] = parsing[i]
                    parsing[i] = temp
                }
            }
        }
        // console.log(parsing);
        
        // return parsing
        var count = 1
        var arr = []
        for(var i = 0; i < parsing.length; i++){
            var str = ''
            for(var key in parsing[i]){
                str = `${count}. [${parsing[i].status}] ${parsing[i].task}`
            }
            count+=1
            arr.push(str)
        }
        return arr.join('\n')
    }
}

// console.log(typeof(Model_todo.showListTugas()))
// console.log(Model_todo.showListTugas())
// console.log(Model_todo.createdDSC());

module.exports = Model_todo

// console.log(parsing);

// console.log(Model_todo.findById(1));

