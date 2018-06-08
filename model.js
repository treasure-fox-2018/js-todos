let data = require('fs')

class Model {

    static toDoList_m() {
        //baca file .json
        let datalist = data.readFileSync('data.json', 'utf8')
        // consoloe.log(datalist)

        return datalist
    }

    static setTodoList_m(variable) {

        let datalist = data.readFileSync('data.json', 'utf8')
        let arrData = JSON.parse(datalist)
        console.log(arrData)

        if (arrData == 0) {
            var num = 1
        } else {
            num = arrData[arrData.length - 1].id + 1
        }


        let setId = {
            id: num,
            status: 'incomplete',
            created_date: new Date(),
            created_complete: 0,
            tag: [],
            task: variable

        }
        arrData.push(setId)
        let infoData = data.writeFile('data.json', JSON.stringify(arrData))
        console.log(infoData)


    }

    static getTask_m(variable) {
        let datalist = data.readFileSync('data.json', 'utf8')
        let arrData = JSON.parse(datalist)
        let taskReceived = null
        for (let obj of datalist) {

            if (obj.id == variable) {

                taskReceived = obj
            }
        }
        return taskReceived
    }

    static deletedTask_m(variable) {
        let datalist = data.readFileSync('data.json', 'utf8')
        let arrData = JSON.parse(datalist)
        let status = false
        for (let i = 0; i < arrData.length; i++) {
            let obj = arrData[i];
            if (obj.id == variable) {
                status = true
                arrData.splice(i, 1)
            }
        }
        if (status == false) {
            throw 'Id yang di input tidak ada dalam list'
        } else {
            let infoData = data.writeFile('data.json', JSON.stringify(arrData))
        }

    }

    static completedTask_m(variable) {

        let datalist = data.readFileSync('data.json', 'utf8')
        let arrData = JSON.parse(datalist)
        let status = false
        for (let i = 0; i < arrData.length; i++) {
            let obj = arrData[i]
            if (obj.id == variable) {
                status = true
                if (obj.status === 'incomplete') {
                    obj.status = 'complete'
                    obj.created_taskDate = new Date()
                }
            }

        }
        if (status === false) {
            throw 'Id yang di input tidak ada dalam list'
        } else {
            let infoData = data.writeFile('data.json', JSON.stringify(arrData))
        }

    }

    static incompletedTask_m(variable) {

        let datalist = data.readFileSync('data.json', 'utf8')
        let arrData = JSON.parse(datalist)
        let status = false
        for (let i = 0; i < arrData.length; i++) {
            let obj = arrData[i]
            if (obj.id == variable) {
                status = true
                if (obj.status === 'complete') {
                    obj.status = 'incomplete'
                    obj.created_taskDate = null
                }
            }

        }
        if (status === false) {
            throw 'Id yang di input tidak ada dalam list'
        } else {
            let infoData = data.writeFile('data.json', JSON.stringify(arrData))
        }
    }

    static SortcreatedDate_m(command) {

        let datalist = data.readFileSync('data.json', 'utf8')
        let arrData = JSON.parse(datalist)
        if (command === 'asc') {
            arrData.sort()
        }
        else if (command === 'desc') {
            arrData.sort().reverse()
        }
        else {
            throw 'command tidak benar'
        }
        return arrData

    }


    static SortcompleteDate_m(command) {
        let datalist = data.readFileSync('data.json', 'utf8')
        let arrData = JSON.parse(datalist)
        let arr = []

        for (let i = 0; i < arrData.length; i++) {
            if (arrData[i].created_taskDate === 0) {
                arr.push(arrData[i]);
                arrData.splice(i, 1)
                i--
            }
        }
        if (command = 'asc') {

            for (let i = 0; i < arrData.length; i++) {
                for (let j = i + 1; j < arrData.length; j++) {

                    if (arrData[i].created_taskDate.toString() > arrData[j].created_taskDate.toString()) {
                        let arr = arrData[i]
                        arrData[i] = arrData[j]
                        arrData[j] = arr
                    }
                }
            }
        }
        else if (command = 'desc') {

            for (let i = 0; i < arrData.length; i++) {
                for (let j = i + 1; j < arrData.length; j++) {

                    if (arrData[i].created_taskDate.toString() > arrData[j].created_taskDate.toString()) {
                        let arr = arrData[i]
                        arrData[i] = arrData[j]
                        arrData[j] = arr
                    }
                }
            }
        }
        else {
            throw 'command anda salah'
        }
        return arrData

    }

    static Tag_m(id, tags) {
        let datalist = data.readFileSync('data.json', 'utf8')
        let arrData = JSON.parse(datalist)
        let tagsSplited = tags.split(' ')
        for (let obj of arrData) {
            if (obj.id == id) {
                obj.tag = tagsSplited
            }
        }
        let infoData = data.writeFile('data.json', JSON.stringify(arrData))
    }

    static showFilter_m(variable) {
        let datalist = data.readFileSync('data.json', 'utf8')
        let arrData = JSON.parse(datalist)
        let arrSort = []
        for (let obj of arrData) {
            for (let key in obj) {
                if (key == 'tag') {
                    for (let i = 0; i < obj[key].length; i++) {
                        if (variable == obj[key][i]) {
                            arrSort.push(obj)
                        }
                    }
                }
            }
        }
        return arrSort
    }

}
module.exports = Model