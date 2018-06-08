
class View {

    static help_v() {

        console.log('node todo.js help')
        console.log('node todo.js list')
        console.log('node todo.js add <task_content>')
        console.log('node todo.js findById <task_id>')
        console.log('node todo.js delete <task_id>')
        console.log('node todo.js complete <task_id>')
        console.log('node todo.js uncomplete <task_id>')
    }

    static list_v(variable) {
        console.log('hasilnya (ada nomor ID dan list todonya): ')
        let listofData = JSON.parse(variable)
        for (let obj of listofData) {
            if (obj.status == 'complete') {
                console.log(`${obj.id}. [X] ${obj.task}`)
            }
            else {
                console.log(`${obj.id}. [ ] ${obj.task}`)
            }
        }
    }

    static showFindTask_v(variable) {
        if (variable !== null) {
            console.log(`${variable.id}. ${variable.task}`)
        }
        console.log('ID yang di input tidak tersedia')
    }

    static SortedDate_v(variable) {
        console.log('hasilnya (ada nomor ID dan list todonya): ')
        for (let obj of variable) {
            if (obj.status == 'complete') {
                console.log(`${obj.id}. [X] ${obj.task}`)
            }
            else {
                console.log(`${obj.id}. [ ] ${obj.task}`)
            }
        }
    }

    static ShowFilteredData_v(taggedList) {
        console.log('List yang ter-Filter: ')
        for (let obj of taggedList) {
            if (obj.status == 'complete') {
                console.log(`${obj.id}. [X] ${obj.task} [${obj.tag}]`)
            }
            else {
                console.log(`${obj.id}. [ ] ${obj.task} [${obj.tag}]`)
            }
        }
    }
}

module.exports = View                   