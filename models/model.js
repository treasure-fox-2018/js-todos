const Controller = require('../controllers/controller')
const fs = require('fs')

class Model{
    static list(){
        var readDataStudents = JSON.parse(fs.readFileSync('data.json', 'utf8')) 
        let students = []
        for(let i=0; i<readDataStudents.length; i++){
            students.push(`${i+1}. ${readDataStudents[i].status} ${readDataStudents[i].task}`)
        }
        return students
    }

    static add(addTask){
        var studentsData = JSON.parse(fs.readFileSync('data.json', 'utf8'))
        let addStudent = {
            id : studentsData.length+1,
            task : addTask,
            status : '[ ]',
            createdAt : new Date(),
            completedAt : null,
            tag : []
        }
        studentsData.push(addStudent)
        Model.writeData(studentsData)
    }

    static writeData(taskOrId){
        let write = fs.writeFileSync('data.json', JSON.stringify(taskOrId, null, 2), 'utf8')
    }

    static findById(id){
        let students = JSON.parse(fs.readFileSync('data.json', 'utf8'))
        for(let i=0; i<students.length; i++){
            if(id == students[i].id){
                return `${id}. ${students[i].task}`
            }
        }
        return `Number ID can't found!`
    }

    static delete(id){
        let students = JSON.parse(fs.readFileSync('data.json', 'utf8'))
        for(let i=0; i<students.length; i++){
            if(id == students[i].id){
                let taskId = students[i].task
                students.splice(i,1)
                Model.writeData(students)
                return `Deleted ${taskId} form your TODO list...`
            } 
        }
        return `Can't delete the task, wrong ID`
    }

    static complete(id){
        let students = JSON.parse(fs.readFileSync('data.json', 'utf8'))
        let studentsData = []
        for(let i=0; i<students.length; i++){
            if(id == students[i].id){
                students[i].status = "[x]"
                students[i].completedAt = new Date()
                Model.writeData(students)
            }
            studentsData.push(`${students[i].id}. ${students[i].status} ${students[i].task}`)
        }
        return studentsData.join('\n')
    }

    static unComplete(id){
        let students = JSON.parse(fs.readFileSync('data.json', 'utf8'))
        let studentsData = []
        for(let i=0; i<students.length; i++){
            if(id == students[i].id){
                students[i].status = "[ ]"
                students[i].completedAt = null
                Model.writeData(students)
            }
            studentsData.push(`${students[i].id}. ${students[i].status} ${students[i].task}`)
        }
        return studentsData.join('\n')
    }

    static listCreated(value){
        let readFile = JSON.parse(fs.readFileSync('data.json', 'utf8'))
        var create = []
        for(let i=0; i<readFile.length; i++){
            create.push(readFile[i].createdAt)
        }
        
        if(value === "asc"){
            let newCreated = create.sort()
            let students = []
            for(let x=0; x<newCreated.length; x++){
                for(let j=0; j<readFile.length; j++){
                    if(newCreated[x] == readFile[j].createdAt){
                        students.push(`${x+1}. ${readFile[j].status} ${readFile[j].task}`)
                    }
                }
            }
            return students.join('\n')
        } 
        else if(value === "desc"){
            let newCreated = create.reverse()
            let students = []
            for(let x=0; x<newCreated.length; x++){
                for(let j=0; j<readFile.length; j++){
                    if(newCreated[x] == readFile[j].createdAt){
                        students.push(`${x+1}. ${readFile[j].status} ${readFile[j].task}`)
                    }
                }
            }
            return students.join('\n')
        } 
    }

    static listCompleted(value){
        let readFile = JSON.parse(fs.readFileSync('data.json', 'utf8'))
        var completed = []
        for(let i=0; i<readFile.length; i++){
            if(readFile[i].status === "[x]"){
                completed.push(readFile[i].completedAt)
            }
        }
 
        if(value === "asc"){
            let newCompleted = completed.sort()
            let students = []
            for(let x=0; x<newCompleted.length; x++){
                for(let j=0; j<readFile.length; j++){
                    if(newCompleted[x] == readFile[j].completedAt){
                        students.push(`${x+1}. ${readFile[j].status} ${readFile[j].task}`)
                    }
                }
            }
            return students.join('\n')
        } 
        else if(value === "desc"){
            let newCompleted = completed.reverse()
            let students = []
            for(let x=0; x<newCompleted.length; x++){
                for(let j=0; j<readFile.length; j++){
                    if(newCompleted[x] == readFile[j].completedAt){
                        students.push(`${x+1}. ${readFile[j].status} ${readFile[j].task}`)
                    }
                }
            }
            return students.join('\n')
        } 
    }

    static tag(id, tagName){
        let students = JSON.parse(fs.readFileSync('data.json', 'utf8'))
        for(let i=0; i<students.length; i++){
            if(id == students[i].id){
                for(let j=0; j<tagName.length; j++){
                    students[i].tag.push(tagName[j])
                }
                Model.writeData(students)
                return `Tagged task ${students[i].task} with tags: ${tagName}`
            }
        }
    }

    static filter(value){
        let students = JSON.parse(fs.readFileSync('data.json', 'utf8'))
        var listTag = []
        for(let i=0; i<students.length; i++){
            for(let j=0; j<students[i].tag.length; j++){
                let nameTag = students[i].tag[j]
                    if(nameTag == value){
                        listTag.push(`${students[i].id}. ${students[i].task} [ ${students[i].tag} ]`)
                    }
            }
        }
        return listTag.join('\n')
    }
}

module.exports = Model