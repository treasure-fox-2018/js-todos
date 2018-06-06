class View{

    static help(){
        console.log("node to.js")
        console.log("node to.js help")
        console.log("node to.js list")
        console.log("node to.js add <task_content>")
        console.log("node to.js findByID <task_id>")
        console.log("node to.js delete <task_id>")
        console.log("node to.js complete <task_id>")
        console.log("node to.js unComplete <task_id>") 
        console.log("node to.js listCreated asc||desc")
        console.log("node to.js listCompleted asc||desc")
        console.log("node to.js tag <id> <tagName> <tagName2> ...")
        console.log("node to.js filter <tagName>")
    }

    static list(students){
        console.log(students.join('\n'))
    }

    static add(task){
        console.log(`Added ${task} to your TODO list..`)
    }

    static findById(id){
        console.log(id);
        
    }

    static delete(id){
        console.log(id)
    }

    static complete(id){
        console.log(id)
    }

    static unComplete(id){
        console.log(id)
    }

    static listCreated(value){
        console.log(value) 
    }

    static listCompleted(value){
        console.log(value) 
    }

    static tag(tags){
        console.log(tags) 
    }

    static filter(value){
        console.log(value)
        
    }
}

module.exports = View