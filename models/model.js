const fs = require('fs')

const data = JSON.parse(fs.readFileSync('data.json','utf8'))

// release 1
class Model {
    // contoh callback
    static readData(cb) {
        //console.log('test model')
       let data = fs.readFileSync('data.json','utf8')
       
       cb(null, JSON.parse(data))
    }  

    static list () {
    
       let allData = []
       let status = null

       for (let i = 0; i < data.length; i++) {
           if(data[i].status == false){
               status = "[ ]"
           } else {
               status = "[x]"
           }
           allData.push(`${data[i].id}. ${status} ${data[i].task}`)
       }

       return allData.join('\n')
    }

    static listCreated(parameter) {
        const splittedDate = parameter[0].split('/').reverse() // pechain format cth: 09/09/2018 jadi format tanggal di JSON
        const sameDate = [] // tamoungan utk tanggal yg sama

        for (let i = 0; i < data.length; i++) {
            let todosDate = ['','','']
            // ambil 1 1 dari format tanggal JSON
            todosDate[0] = data[i].created.slice(0, 4) // tahun
            todosDate[1] = data[i].created.slice(5, 7) // bulan
            todosDate[2] = data[i].created.slice(8, 10) // hari

            //console.log(todosDate)
            
            if(todosDate[0] === splittedDate[0] && todosDate[1] === splittedDate[1] && todosDate[2] === splittedDate[2]){
                sameDate.push(data[i])
            }
        }
        
        return sameDate
        // console.log(sameDate)
        // console.log(splittedDate, 'date')
        
    }

    static listOutstanding(parameter) {
        if (parameter[0] === 'asc') {
           return Model.list() 
        } else {
            let allData = JSON.parse(fs.readFileSync('data.json','utf8'))
            let reverseAllData = []
            for (let i = allData.length-1; i >= 0; i--) {
                reverseAllData.push(allData[i])
            }
            
            let resultData = []
            let status = null
     
            for (let i = 0; i < reverseAllData.length; i++) {
                if(reverseAllData[i].status == false){
                    status = "[ ]"
                } else {
                    status = "[x]"
                }
                resultData.push(`${reverseAllData[i].id}. ${status} ${reverseAllData[i].task}`)
            }
     
            return resultData.join('\n')

        }
    }

    static listCompleted() {
        let readData = JSON.parse(fs.readFileSync('data.json','utf8'))
        let result = []

        readData.forEach(value => { // cuma bisa buat object, si value itu untuk 1 id,task,status,dll
            if(value.status == true){
                result.push(value)
            } 
        })

        let convert = Model.convertToList(result)
        return convert
    }

    static convertToList(data) { // utk convert dari Array of object ke bentuk list
       let result = []
       //console.log(data)
       data.forEach(value => {
           result.push(`${value.id}. ${value.task}`)
       })

       return result.join('\n')
    }


    static addData(parameter) {
        let readData = JSON.parse(fs.readFileSync('data.json','utf8'))
        let idData = null

        if(readData.length == 0){
            idData = 1
        } else {
            idData = readData[readData.length-1].id + 1
        }

        let newData = {
            id: idData, // lebih valid, kalo di hapus di add lagi datanya gada yg duplicate
            task: parameter[0],
            status: false,
            tag: [],
            created: new Date()
        }

        readData.push(newData)

        Model.writeData(readData)

        return `success add data`
    }

    static writeData(data) {
        fs.writeFileSync('data.json', JSON.stringify(data, null, 1))
    }

    static findbyid(parameter) {
        const id = +(parameter[0])
        //console.log(data)
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                return `${data[i].id}. ${data[i].task}`
            }
        }
    }

    static delete(parameter) {
        const id = +(parameter[0])
        let deletedData = []
        let wantToDelete = [] // kosong

        for (let i = 0; i < data.length; i++) {
            if (data[i].id !== id) {
                wantToDelete = data[i]
                deletedData.push(data[i])
            }
        }

        Model.writeData(deletedData)

        return `Deleted "${wantToDelete.task}" from your TODO list`

    }

    static complete(parameter) {
        const id = +(parameter[0])

        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                data[i].status = true
            }
        }
        Model.writeData(data)
        return Model.list()
    }

    static uncomplete(parameter) {
        const id = +(parameter[0])

        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                data[i].status = false
            }
        }
        Model.writeData(data)
        return Model.list()
    }

    static tag(parameter) {
        const id = +(parameter[0])

        // console.log(parameter)

        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                // console.log(data[i])
                // contoh: ['3', 'hobby', 'pet] pake slice(1) buat ambil hobby and pet nya aja
                const newTag = parameter.slice(1)

                for (let j = 0; j < newTag.length; j++) {
                    data[i].tag.push(newTag[j])
                }
                
            }
        }
        Model.writeData(data)
        return 'new Tag has been saved'
    }

    static filter(parameter) {
        const id = +(parameter[0])

        const filterTag = []

        // pake indexOf
        for (let i = 0; i < data.length; i++) {
            if (data[i].tag.indexOf(parameter[0]) !== -1) { // kalo indexof = -1 gada
                filterTag.push(data[i])
            }
        }

        // cara 2
        // for (let i = 0; i < data.length; i++) {
        //     for(let j = 0; j < data[i].tag.length; j++) {
        //         if(data[i].tag[j] == parameter[0]) {
        //             filterTag.push(data[i])
        //         }
        //     }
        // }

        let result = Model.convertToList(filterTag)
        return result
    }
} 

//readData()
//writeData('a')
//console.log(Model.readData())
module.exports = Model
